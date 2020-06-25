import Promise from 'promise-polyfill';

import utils from './utils';
import handleOption from './options';
import i18n from './i18n';
import Template from './template';
import Icons from './icons';
import Danmaku from './danmaku';
import Events from './events';
import FullScreen from './fullscreen';
import User from './user';
import Subtitle from './subtitle';
import Bar from './bar';
import Timer from './timer';
import Bezel from './bezel';
import Controller from './controller';
import Setting from './setting';
import Comment from './comment';
import HotKey from './hotkey';
import ContextMenu from './contextmenu';
import InfoPanel from './info-panel';
import tplVideo from '../template/video.art';

let index = 0;
const instances = [];

class DPlayer {
    /**
     * DPlayer constructor function
     *
     * @param {Object} options - See README
     * @constructor
     */
    constructor(options) {
        this.options = handleOption({ preload: options.video.type === 'webtorrent' ? 'none' : 'metadata', ...options });

        if (this.options.video.quality) {
            this.qualityIndex = this.options.video.defaultQuality;
            this.quality = this.options.video.quality[this.options.video.defaultQuality];
        }
        this.tran = new i18n(this.options.lang).tran;
        this.events = new Events();
        this.user = new User(this);
        this.container = this.options.container;

        this.container.classList.add('dplayer');
        if (!this.options.danmaku) {
            this.container.classList.add('dplayer-no-danmaku');
        }
        if (this.options.live) {
            this.container.classList.add('dplayer-live');
        } else {
            this.container.classList.remove('dplayer-live');
        }
        if (utils.isMobile) {
            this.container.classList.add('dplayer-mobile');
        }
        this.arrow = this.container.offsetWidth <= 500;
        if (this.arrow) {
            this.container.classList.add('dplayer-arrow');
        }

        this.template = new Template({
            container: this.container,
            options: this.options,
            index: index,
            tran: this.tran,
        });

        this.video = this.template.video;

        this.bar = new Bar(this.template);

        this.bezel = new Bezel(this.template.bezel);

        this.fullScreen = new FullScreen(this);

        this.controller = new Controller(this);

        if (this.options.danmaku) {
            this.danmaku = new Danmaku({
                container: this.template.danmaku,
                opacity: this.user.get('opacity'),
                callback: () => {
                    setTimeout(() => {
                        this.template.danmakuLoading.style.display = 'none';

                        // autoplay
                        if (this.options.autoplay) {
                            this.play();
                        }
                    }, 0);
                },
                error: (msg) => {
                    this.notice(msg);
                },
                apiBackend: this.options.apiBackend,
                borderColor: this.options.theme,
                height: this.arrow ? 24 : 30,
                time: () => this.video.currentTime,
                unlimited: this.user.get('unlimited'),
                api: {
                    id: this.options.danmaku.id,
                    address: this.options.danmaku.api,
                    token: this.options.danmaku.token,
                    maximum: this.options.danmaku.maximum,
                    addition: this.options.danmaku.addition,
                    user: this.options.danmaku.user,
                },
                events: this.events,
                tran: (msg) => this.tran(msg),
            });

            this.comment = new Comment(this);
        }

        this.setting = new Setting(this);
        this.plugins = {};

        document.addEventListener(
            'click',
            () => {
                this.focus = false;
            },
            true
        );
        this.container.addEventListener(
            'click',
            () => {
                this.focus = true;
            },
            true
        );

        this.paused = true;

        this.timer = new Timer(this);

        this.hotkey = new HotKey(this);

        this.contextmenu = new ContextMenu(this);

        this.initVideo(this.video, (this.quality && this.quality.type) || this.options.video.type);

        this.infoPanel = new InfoPanel(this);

        if (!this.danmaku && this.options.autoplay) {
            this.play();
        }

        index++;
        instances.push(this);
    }

    /**
     * Seek video
     */
    seek(time) {
        time = Math.max(time, 0);
        if (this.video.duration) {
            time = Math.min(time, this.video.duration);
        }
        if (this.video.currentTime < time) {
            this.notice(`${this.tran('FF')} ${(time - this.video.currentTime).toFixed(0)} ${this.tran('s')}`);
        } else if (this.video.currentTime > time) {
            this.notice(`${this.tran('REW')} ${(this.video.currentTime - time).toFixed(0)} ${this.tran('s')}`);
        }

        this.video.currentTime = time;

        if (this.danmaku) {
            this.danmaku.seek();
        }

        this.bar.set('played', time / this.video.duration, 'width');
        this.template.ptime.innerHTML = utils.secondToTime(time);
    }

    /**
     * Play video
     */
    play(fromNative) {
        this.paused = false;
        if (this.video.paused && !utils.isMobile) {
            this.bezel.switch(Icons.play);
        }

        this.template.playButton.innerHTML = Icons.pause;
        this.template.mobilePlayButton.innerHTML = Icons.pause;

        if (!fromNative) {
            const playedPromise = Promise.resolve(this.video.play());
            playedPromise
                .catch(() => {
                    this.pause();
                })
                .then(() => {});
        }
        this.timer.enable('loading');
        this.container.classList.remove('dplayer-paused');
        this.container.classList.add('dplayer-playing');
        if (this.danmaku) {
            this.danmaku.play();
        }
        if (this.options.mutex) {
            for (let i = 0; i < instances.length; i++) {
                if (this !== instances[i]) {
                    instances[i].pause();
                }
            }
        }
    }

    /**
     * Pause video
     */
    pause(fromNative) {
        this.paused = true;
        this.container.classList.remove('dplayer-loading');

        if (!this.video.paused && !utils.isMobile) {
            this.bezel.switch(Icons.pause);
        }

        this.template.playButton.innerHTML = Icons.play;
        this.template.mobilePlayButton.innerHTML = Icons.play;
        if (!fromNative) {
            this.video.pause();
        }
        this.timer.disable('loading');
        this.container.classList.remove('dplayer-playing');
        this.container.classList.add('dplayer-paused');
        if (this.danmaku) {
            this.danmaku.pause();
        }
    }

    switchVolumeIcon() {
        if (this.volume() >= 0.95) {
            this.template.volumeIcon.innerHTML = Icons.volumeUp;
        } else if (this.volume() > 0) {
            this.template.volumeIcon.innerHTML = Icons.volumeDown;
        } else {
            this.template.volumeIcon.innerHTML = Icons.volumeOff;
        }
    }

    /**
     * Set volume
     */
    volume(percentage, nostorage, nonotice) {
        percentage = parseFloat(percentage);
        if (!isNaN(percentage)) {
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.bar.set('volume', percentage, 'width');
            const formatPercentage = `${(percentage * 100).toFixed(0)}%`;
            this.template.volumeBarWrapWrap.dataset.balloon = formatPercentage;
            if (!nostorage) {
                this.user.set('volume', percentage);
            }
            if (!nonotice) {
                this.notice(`${this.tran('Volume')} ${(percentage * 100).toFixed(0)}%`);
            }

            this.video.volume = percentage;
            if (this.video.muted) {
                this.video.muted = false;
            }
            this.switchVolumeIcon();
        }

        return this.video.volume;
    }

    /**
     * Toggle between play and pause
     */
    toggle() {
        if (this.video.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    /**
     * attach event
     */
    on(name, callback) {
        this.events.on(name, callback);
    }

    /**
     * Switch to a new video
     *
     * @param {Object} video - new video info
     * @param {Object} danmaku - new danmaku info
     */
    switchVideo(video, danmakuAPI) {
        this.pause();
        this.video.poster = video.pic ? video.pic : '';
        this.video.src = video.url;
        this.initMSE(this.video, video.type || 'auto');
        if (danmakuAPI) {
            this.template.danmakuLoading.style.display = 'block';
            this.bar.set('played', 0, 'width');
            this.bar.set('loaded', 0, 'width');
            this.template.ptime.innerHTML = '00:00';
            this.template.danmaku.innerHTML = '';
            if (this.danmaku) {
                this.danmaku.reload({
                    id: danmakuAPI.id,
                    address: danmakuAPI.api,
                    token: danmakuAPI.token,
                    maximum: danmakuAPI.maximum,
                    addition: danmakuAPI.addition,
                    user: danmakuAPI.user,
                });
            }
        }
    }

    initMSE(video, type) {
        this.type = type;
        if (this.options.video.customType && this.options.video.customType[type]) {
            if (Object.prototype.toString.call(this.options.video.customType[type]) === '[object Function]') {
                this.options.video.customType[type](this.video, this);
            } else {
                console.error(`Illegal customType: ${type}`);
            }
        } else {
            if (this.type === 'auto') {
                if (/m3u8(#|\?|$)/i.exec(video.src)) {
                    this.type = 'hls';
                } else if (/.flv(#|\?|$)/i.exec(video.src)) {
                    this.type = 'flv';
                } else if (/.mpd(#|\?|$)/i.exec(video.src)) {
                    this.type = 'dash';
                } else {
                    this.type = 'normal';
                }
            }

            if (this.type === 'hls' && (video.canPlayType('application/x-mpegURL') || video.canPlayType('application/vnd.apple.mpegURL'))) {
                this.type = 'normal';
            }

            switch (this.type) {
                // https://github.com/video-dev/hls.js
                case 'hls':
                    if (window.Hls) {
                        if (window.Hls.isSupported()) {
                            const options = this.options.pluginOptions.hls;
                            const hls = new window.Hls(options);
                            this.plugins.hls = hls;
                            hls.loadSource(video.src);
                            hls.attachMedia(video);
                            this.events.on('destroy', () => {
                                hls.destroy();
                                delete this.plugins.hls;
                            });
                        } else {
                            this.notice('Error: Hls is not supported.');
                        }
                    } else {
                        this.notice("Error: Can't find Hls.");
                    }
                    break;

                // https://github.com/Bilibili/flv.js
                case 'flv':
                    if (window.flvjs) {
                        if (window.flvjs.isSupported()) {
                            const flvPlayer = window.flvjs.createPlayer(
                                Object.assign(this.options.pluginOptions.flv.mediaDataSource || {}, {
                                    type: 'flv',
                                    url: video.src,
                                }),
                                this.options.pluginOptions.flv.config
                            );
                            this.plugins.flvjs = flvPlayer;
                            flvPlayer.attachMediaElement(video);
                            flvPlayer.load();
                            this.events.on('destroy', () => {
                                flvPlayer.unload();
                                flvPlayer.detachMediaElement();
                                flvPlayer.destroy();
                                delete this.plugins.flvjs;
                            });
                        } else {
                            this.notice('Error: flvjs is not supported.');
                        }
                    } else {
                        this.notice("Error: Can't find flvjs.");
                    }
                    break;

                // https://github.com/Dash-Industry-Forum/dash.js
                case 'dash':
                    if (window.dashjs) {
                        const dashjsPlayer = window.dashjs.MediaPlayer().create().initialize(video, video.src, false);
                        const options = this.options.pluginOptions.dash;
                        dashjsPlayer.updateSettings(options);
                        this.plugins.dash = dashjsPlayer;
                        this.events.on('destroy', () => {
                            window.dashjs.MediaPlayer().reset();
                            delete this.plugins.dash;
                        });
                    } else {
                        this.notice("Error: Can't find dashjs.");
                    }
                    break;

                // https://github.com/webtorrent/webtorrent
                case 'webtorrent':
                    if (window.WebTorrent) {
                        if (window.WebTorrent.WEBRTC_SUPPORT) {
                            this.container.classList.add('dplayer-loading');
                            const options = this.options.pluginOptions.webtorrent;
                            const client = new window.WebTorrent(options);
                            this.plugins.webtorrent = client;
                            const torrentId = video.src;
                            video.src = '';
                            video.preload = 'metadata';
                            video.addEventListener('durationchange', () => this.container.classList.remove('dplayer-loading'), { once: true });
                            client.add(torrentId, (torrent) => {
                                const file = torrent.files.find((file) => file.name.endsWith('.mp4'));
                                file.renderTo(this.video, {
                                    autoplay: this.options.autoplay,
                                    controls: false,
                                });
                            });
                            this.events.on('destroy', () => {
                                client.remove(torrentId);
                                client.destroy();
                                delete this.plugins.webtorrent;
                            });
                        } else {
                            this.notice('Error: Webtorrent is not supported.');
                        }
                    } else {
                        this.notice("Error: Can't find Webtorrent.");
                    }
                    break;
            }
        }
    }

    initVideo(video, type) {
        this.initMSE(video, type);

        /**
         * video events
         */
        // show video time: the metadata has loaded or changed
        this.on('durationchange', () => {
            // compatibility: Android browsers will output 1 or Infinity at first
            if (video.duration !== 1 && video.duration !== Infinity) {
                this.template.dtime.innerHTML = utils.secondToTime(video.duration);
            }
        });

        // show video loaded bar: to inform interested parties of progress downloading the media
        this.on('progress', () => {
            const percentage = video.buffered.length ? video.buffered.end(video.buffered.length - 1) / video.duration : 0;
            this.bar.set('loaded', percentage, 'width');
        });

        // video download error: an error occurs
        this.on('error', () => {
            if (!this.video.error) {
                // Not a video load error, may be poster load failed, see #307
                return;
            }
            this.tran && this.notice && this.type !== 'webtorrent' && this.notice(this.tran('Video load failed'), -1);
        });

        // video end
        this.on('ended', () => {
            this.bar.set('played', 1, 'width');
            if (!this.setting.loop) {
                this.pause();
            } else {
                this.seek(0);
                this.play();
            }
            if (this.danmaku) {
                this.danmaku.danIndex = 0;
            }
        });

        this.on('play', () => {
            if (this.paused) {
                this.play(true);
            }
        });

        this.on('pause', () => {
            if (!this.paused) {
                this.pause(true);
            }
        });

        this.on('timeupdate', () => {
            this.bar.set('played', this.video.currentTime / this.video.duration, 'width');
            const currentTime = utils.secondToTime(this.video.currentTime);
            if (this.template.ptime.innerHTML !== currentTime) {
                this.template.ptime.innerHTML = currentTime;
            }
        });

        for (let i = 0; i < this.events.videoEvents.length; i++) {
            video.addEventListener(this.events.videoEvents[i], () => {
                this.events.trigger(this.events.videoEvents[i]);
            });
        }

        this.volume(this.user.get('volume'), true, true);

        if (this.options.subtitle) {
            this.subtitle = new Subtitle(this.template.subtitle, this.video, this.options.subtitle, this.events);
            if (!this.user.get('subtitle')) {
                this.subtitle.hide();
            }
        }
    }

    switchQuality(index) {
        index = typeof index === 'string' ? parseInt(index) : index;
        if (this.qualityIndex === index || this.switchingQuality) {
            return;
        } else {
            this.qualityIndex = index;
        }
        this.switchingQuality = true;
        this.quality = this.options.video.quality[index];
        this.template.qualityButton.innerHTML = this.quality.name;

        const paused = this.video.paused;
        this.video.pause();
        const videoHTML = tplVideo({
            current: false,
            pic: null,
            screenshot: this.options.screenshot,
            preload: 'auto',
            url: this.quality.url,
            subtitle: this.options.subtitle,
        });
        const videoEle = new DOMParser().parseFromString(videoHTML, 'text/html').body.firstChild;
        this.template.videoWrap.insertBefore(videoEle, this.template.videoWrap.getElementsByTagName('div')[0]);
        this.prevVideo = this.video;
        this.video = videoEle;
        this.initVideo(this.video, this.quality.type || this.options.video.type);
        this.seek(this.prevVideo.currentTime);
        this.notice(`${this.tran('Switching to')} ${this.quality.name} ${this.tran('quality')}`, -1);
        this.events.trigger('quality_start', this.quality);

        this.on('canplay', () => {
            if (this.prevVideo) {
                if (this.video.currentTime !== this.prevVideo.currentTime) {
                    this.seek(this.prevVideo.currentTime);
                    return;
                }
                this.template.videoWrap.removeChild(this.prevVideo);
                this.video.classList.add('dplayer-video-current');
                if (!paused) {
                    this.video.play();
                }
                this.prevVideo = null;
                this.notice(`${this.tran('Switched to')} ${this.quality.name} ${this.tran('quality')}`);
                this.switchingQuality = false;

                this.events.trigger('quality_end');
            }
        });
    }

    notice(text, time = 2000, opacity = 0.8) {
        this.template.notice.innerHTML = text;
        this.template.notice.style.opacity = opacity;
        if (this.noticeTime) {
            clearTimeout(this.noticeTime);
        }
        this.events.trigger('notice_show', text);
        if (time > 0) {
            this.noticeTime = setTimeout(() => {
                this.template.notice.style.opacity = 0;
                this.events.trigger('notice_hide');
            }, time);
        }
    }

    resize() {
        if (this.danmaku) {
            this.danmaku.resize();
        }
        if (this.controller.thumbnails) {
            this.controller.thumbnails.resize(160, (this.video.videoHeight / this.video.videoWidth) * 160, this.template.barWrap.offsetWidth);
        }
        this.events.trigger('resize');
    }

    speed(rate) {
        this.video.playbackRate = rate;
    }

    destroy() {
        instances.splice(instances.indexOf(this), 1);
        this.pause();
        this.controller.destroy();
        this.timer.destroy();
        this.video.src = '';
        this.container.innerHTML = '';
        this.events.trigger('destroy');
    }

    static get version() {
        /* global DPLAYER_VERSION */
        return DPLAYER_VERSION;
    }
}

export default DPlayer;
