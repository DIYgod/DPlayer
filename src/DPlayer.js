import './DPlayer.scss';

import utils, { isMobile } from './utils';
import handleOption from './options';
import i18n from './i18n';
import Template from './template';
import SvgCollection from './svg';
import Danmaku from './danmaku';
import Thumbnails from './thumbnails';
import Events from './events';
import FullScreen from './fullscreen';
import User from './user';
import Subtitle from './subtitle';
import Bar from './bar';
import Time from './time';

let index = 0;
const instances = [];

class DPlayer {

    /**
     * DPlayer constructor function
     *
     * @param {Object} options - See README
     * @constructor
     */
    constructor (options) {
        this.options = handleOption(options);

        if (this.options.video.quality) {
            this.qualityIndex = this.options.video.defaultQuality;
            this.quality = this.options.video.quality[this.options.video.defaultQuality];
        }
        this.tran = new i18n(this.options.lang).tran;
        this.icons = new SvgCollection(this.options);
        this.events = new Events();
        this.user = new User(this);
        this.container = this.options.container;

        this.container.classList.add('dplayer');
        if (!this.options.danmaku) {
            this.container.classList.add('dplayer-no-danmaku');
        }
        if (this.options.live) {
            this.container.classList.add('dplayer-live');
        }
        if (isMobile) {
            this.container.classList.add('dplayer-mobile');
        }

        this.template = new Template({
            container: this.container,
            options: this.options,
            index: index,
            tran: this.tran,
            icons: this.icons
        });

        this.bar = new Bar(this.template);

        document.addEventListener('click', () => {
            this.focus = false;
        }, true);
        this.container.addEventListener('click', () => {
            this.focus = true;
        }, true);

        // arrow style
        this.arrow = this.container.offsetWidth <= 500;
        if (this.arrow) {
            this.container.classList.add('dplayer-arrow');
        }

        if (this.options.danmaku) {
            this.danmaku = new Danmaku({
                container: this.template.danmaku,
                opacity: this.user.get('opacity'),
                callback: () => {
                    setTimeout(() => {
                        this.template.danmakuLoading.style.display = 'none';

                        // autoplay
                        if (this.options.autoplay && !isMobile) {
                            this.play();
                        }
                        else if (isMobile) {
                            this.pause();
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
                events: this.events
            });
        }

        // get this video manager
        this.video = this.template.video;

        this.template.bezel.addEventListener('animationend', () => {
            this.template.bezel.classList.remove('dplayer-bezel-transition');
        });

        // play and pause button
        this.paused = true;
        this.template.playButton.addEventListener('click', () => {
            this.toggle();
        });

        if (!isMobile) {
            this.template.videoWrap.addEventListener('click', () => {
                this.toggle();
            });
            this.template.controllerMask.addEventListener('click', () => {
                this.toggle();
            });
        }
        else {
            const toggleController = () => {
                if (this.container.classList.contains('dplayer-hide-controller')) {
                    this.container.classList.remove('dplayer-hide-controller');
                }
                else {
                    this.container.classList.add('dplayer-hide-controller');
                }
            };
            this.template.videoWrap.addEventListener('click', toggleController);
            this.template.controllerMask.addEventListener('click', toggleController);
        }

        this.time = new Time(this);

        if (this.options.video.thumbnails) {
            this.initThumbnails();
        }
        this.isTimeTipsShow = true;
        this.mouseHandler = this.mouseHandler(this.template.playedBarWrap, this.template.playedBarTime).bind(this);
        this.template.playedBarWrap.addEventListener('mousemove', this.mouseHandler);
        this.template.playedBarWrap.addEventListener('mouseenter', this.mouseHandler);
        this.template.playedBarWrap.addEventListener('mouseleave', this.mouseHandler);

        let barWidth;
        const thumbMove = (e) => {
            let percentage = (e.clientX - utils.getElementViewLeft(this.template.playedBarWrap)) / barWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.bar.set('played', percentage, 'width');
            this.template.ptime.innerHTML = utils.secondToTime(percentage * this.video.duration);
        };

        const thumbUp = (e) => {
            document.removeEventListener('mouseup', thumbUp);
            document.removeEventListener('mousemove', thumbMove);
            let percentage = (e.clientX - utils.getElementViewLeft(this.template.playedBarWrap)) / barWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.bar.set('played', percentage, 'width');
            this.seek(this.bar.get('played') * this.video.duration);
            this.time.enable('progress');
        };

        this.template.playedBarWrap.addEventListener('mousedown', () => {
            barWidth = this.template.playedBarWrap.clientWidth;
            this.time.disable('progress');
            document.addEventListener('mousemove', thumbMove);
            document.addEventListener('mouseup', thumbUp);
        });


        /**
         * control volume
         */
        const vWidth = 35;

        this.switchVolumeIcon = () => {
            if (this.volume() >= 0.95) {
                this.template.volumeIcon.innerHTML = this.icons.get('volume-up');
            }
            else if (this.volume() > 0) {
                this.template.volumeIcon.innerHTML = this.icons.get('volume-down');
            }
            else {
                this.template.volumeIcon.innerHTML = this.icons.get('volume-off');
            }
        };
        const volumeMove = (event) => {
            const e = event || window.event;
            const percentage = (e.clientX - utils.getElementViewLeft(this.template.volumeBarWrap) - 5.5) / vWidth;
            this.volume(percentage);
        };
        const volumeUp = () => {
            document.removeEventListener('mouseup', volumeUp);
            document.removeEventListener('mousemove', volumeMove);
            this.template.volumeButton.classList.remove('dplayer-volume-active');
        };

        this.template.volumeBarWrapWrap.addEventListener('click', (event) => {
            const e = event || window.event;
            const percentage = (e.clientX - utils.getElementViewLeft(this.template.volumeBarWrap) - 5.5) / vWidth;
            this.volume(percentage);
        });
        this.template.volumeBarWrapWrap.addEventListener('mousedown', () => {
            document.addEventListener('mousemove', volumeMove);
            document.addEventListener('mouseup', volumeUp);
            this.template.volumeButton.classList.add('dplayer-volume-active');
        });
        this.template.volumeIcon.addEventListener('click', () => {
            if (this.video.muted) {
                this.video.muted = false;
                this.switchVolumeIcon();
                this.bar.set('volume', this.volume(), 'width');
            }
            else {
                this.video.muted = true;
                this.template.volumeIcon.innerHTML = this.icons.get('volume-off');
                this.bar.set('volume', 0, 'width');
            }
        });


        /**
         * auto hide controller
         */
        this.hideTime = 0;
        const hideController = () => {
            this.container.classList.remove('dplayer-hide-controller');
            clearTimeout(this.hideTime);
            this.hideTime = setTimeout(() => {
                if (this.video.played.length && !this.disableHideController) {
                    this.container.classList.add('dplayer-hide-controller');
                    closeSetting();
                    closeComment();
                }
            }, 2000);
        };
        if (!isMobile) {
            this.container.addEventListener('mousemove', hideController);
            this.container.addEventListener('click', hideController);
        }


        /**
         * setting
         */
        // toggle setting box
        const closeSetting = () => {
            if (this.template.settingBox.classList.contains('dplayer-setting-box-open')) {
                this.template.settingBox.classList.remove('dplayer-setting-box-open');
                this.template.mask.classList.remove('dplayer-mask-show');
                setTimeout(() => {
                    this.template.settingBox.classList.remove('dplayer-setting-box-narrow');
                    this.template.settingBox.classList.remove('dplayer-setting-box-speed');
                }, 300);
            }

            this.disableHideController = false;
        };
        const openSetting = () => {
            this.disableHideController = true;

            this.template.settingBox.classList.add('dplayer-setting-box-open');
            this.template.mask.classList.add('dplayer-mask-show');
        };

        this.template.mask.addEventListener('click', () => {
            closeSetting();
        });
        this.template.settingButton.addEventListener('click', () => {
            openSetting();
        });

        this.loop = this.options.loop;
        let showdan = this.user.get('danmaku');
        if (!showdan) {
            this.danmaku && this.danmaku.hide();
        }
        let unlimitDan = this.user.get('unlimited');

        // loop control
        this.template.loopToggle.checked = this.loop;

        this.template.loop.addEventListener('click', () => {
            this.template.loopToggle.checked = !this.template.loopToggle.checked;
            if (this.template.loopToggle.checked) {
                this.loop = true;
            }
            else {
                this.loop = false;
            }
            closeSetting();
        });

        // show danmaku control
        this.template.showDanmakuToggle.checked = showdan;

        this.template.showDanmaku.addEventListener('click', () => {
            this.template.showDanmakuToggle.checked = !this.template.showDanmakuToggle.checked;
            if (this.template.showDanmakuToggle.checked) {
                showdan = true;
                if (!this.paused) {
                    this.danmaku.show();
                }
            }
            else {
                showdan = false;
                this.danmaku.hide();
            }
            this.user.set('danmaku', showdan ? 1 : 0);
            closeSetting();
        });

        // unlimited danmaku control
        this.template.unlimitDanmakuToggle.checked = unlimitDan;

        this.template.unlimitDanmaku.addEventListener('click', () => {
            this.template.unlimitDanmakuToggle.checked = !this.template.unlimitDanmakuToggle.checked;
            if (this.template.unlimitDanmakuToggle.checked) {
                unlimitDan = true;
                this.danmaku.unlimit(true);
            }
            else {
                unlimitDan = false;
                this.danmaku.unlimit(false);
            }
            this.user.set('unlimited', unlimitDan ? 1 : 0);
            closeSetting();
        });

        // speed control
        this.template.speed.addEventListener('click', () => {
            this.template.settingBox.classList.add('dplayer-setting-box-narrow');
            this.template.settingBox.classList.add('dplayer-setting-box-speed');

            for (let i = 0; i < this.template.speedItem.length; i++) {
                this.template.speedItem[i].addEventListener('click', () => {
                    this.video.playbackRate = this.template.speedItem[i].dataset.speed;
                    closeSetting();
                });
            }
        });

        if (this.danmaku) {
            // danmaku opacity
            const dWidth = 130;
            this.on('danmaku_opacity', (percentage) => {
                this.bar.set('danmaku', percentage, 'width');
                this.user.set('opacity', percentage);
            });
            this.danmaku.opacity(this.user.get('opacity'));

            const danmakuMove = (event) => {
                const e = event || window.event;
                let percentage = (e.clientX - utils.getElementViewLeft(this.template.danmakuOpacityBarWrap)) / dWidth;
                percentage = Math.max(percentage, 0);
                percentage = Math.min(percentage, 1);
                this.danmaku.opacity(percentage);
            };
            const danmakuUp = () => {
                document.removeEventListener('mouseup', danmakuUp);
                document.removeEventListener('mousemove', danmakuMove);
                this.template.danmakuOpacityBox.classList.remove('dplayer-setting-danmaku-active');
            };

            this.template.danmakuOpacityBarWrapWrap.addEventListener('click', (event) => {
                const e = event || window.event;
                let percentage = (e.clientX - utils.getElementViewLeft(this.template.danmakuOpacityBarWrap)) / dWidth;
                percentage = Math.max(percentage, 0);
                percentage = Math.min(percentage, 1);
                this.danmaku.opacity(percentage);
            });
            this.template.danmakuOpacityBarWrapWrap.addEventListener('mousedown', () => {
                document.addEventListener('mousemove', danmakuMove);
                document.addEventListener('mouseup', danmakuUp);
                this.template.danmakuOpacityBox.classList.add('dplayer-setting-danmaku-active');
            });
        }

        // set duration time
        if (this.video.duration !== 1) { // compatibility: Android browsers will output 1 at first
            this.template.dtime.innerHTML = this.video.duration ? utils.secondToTime(this.video.duration) : '00:00';
        }

        if (!this.danmaku) {
            // autoplay
            if (this.options.autoplay && !isMobile) {
                this.play();
            }
            else if (isMobile) {
                this.pause();
            }
        }


        /**
         * comment
         */

        const closeCommentSetting = () => {
            if (this.template.commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
                this.template.commentSettingBox.classList.remove('dplayer-comment-setting-open');
            }
        };
        const toggleCommentSetting = () => {
            if (this.template.commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
                this.template.commentSettingBox.classList.remove('dplayer-comment-setting-open');
            }
            else {
                this.template.commentSettingBox.classList.add('dplayer-comment-setting-open');
            }
        };

        const closeComment = () => {
            if (!this.template.controller.classList.contains('dplayer-controller-comment')) {
                return;
            }

            this.template.controller.classList.remove('dplayer-controller-comment');
            this.template.mask.classList.remove('dplayer-mask-show');
            this.container.classList.remove('dplayer-show-controller');

            closeCommentSetting();

            this.disableHideController = false;
        };
        const openComment = () => {
            this.disableHideController = true;

            if (!this.template.controller.classList.contains('dplayer-controller-comment')) {
                this.template.controller.classList.add('dplayer-controller-comment');
                this.template.mask.classList.add('dplayer-mask-show');
                this.container.classList.add('dplayer-show-controller');
                this.template.commentInput.focus();
            }
        };

        this.template.mask.addEventListener('click', () => {
            closeComment();
        });
        this.template.commentButton.addEventListener('click', () => {
            openComment();
        });
        this.template.commentSettingButton.addEventListener('click', () => {
            toggleCommentSetting();
        });

        // comment setting box
        this.template.commentColorSettingBox.addEventListener('click', () => {
            const sele = this.template.commentColorSettingBox.querySelector(`input:checked+span`);
            if (sele) {
                const color = this.template.commentColorSettingBox.querySelector(`input:checked`).value;
                this.template.commentSettingFill.style.fill = color;
                this.template.commentInput.style.color = color;
                this.template.commentSendFill.style.fill = color;
            }
        });

        const sendComment = () => {
            this.template.commentInput.blur();

            // text can't be empty
            if (!this.template.commentInput.value.replace(/^\s+|\s+$/g, '')) {
                this.notice(this.tran('Please input danmaku content!'));
                return;
            }

            this.danmaku.send({
                text: this.template.commentInput.value,
                color: this.container.querySelector('.dplayer-comment-setting-color input:checked').value,
                type: this.container.querySelector('.dplayer-comment-setting-type input:checked').value
            }, () => {
                this.template.commentInput.value = '';
                closeComment();
            });
        };

        this.template.commentInput.addEventListener('click', () => {
            closeCommentSetting();
        });
        this.template.commentInput.addEventListener('keydown', (e) => {
            const event = e || window.event;
            if (event.keyCode === 13) {
                sendComment();
            }
        });

        this.template.commentSendButton.addEventListener('click', sendComment);

        this.fullScreen = new FullScreen(this);

        // browser full screen
        this.template.browserFullButton.addEventListener('click', () => {
            this.fullScreen.toggle('browser');
        });

        // web full screen
        this.template.webFullButton.addEventListener('click', () => {
            this.fullScreen.toggle('web');
        });

        /**
         * hot key
         */
        const handleKeyDown = (e) => {
            if (this.focus) {
                const tag = document.activeElement.tagName.toUpperCase();
                const editable = document.activeElement.getAttribute('contenteditable');
                if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                    const event = e || window.event;
                    let percentage;
                    switch (event.keyCode) {
                    case 32:
                        event.preventDefault();
                        this.toggle();
                        break;
                    case 37:
                        event.preventDefault();
                        this.seek(this.video.currentTime - 5);
                        hideController();
                        break;
                    case 39:
                        event.preventDefault();
                        this.seek(this.video.currentTime + 5);
                        hideController();
                        break;
                    case 38:
                        event.preventDefault();
                        percentage = this.volume() + 0.1;
                        this.volume(percentage);
                        break;
                    case 40:
                        event.preventDefault();
                        percentage = this.volume() - 0.1;
                        this.volume(percentage);
                        break;
                    }
                }
            }
        };
        if (this.options.hotkey) {
            document.addEventListener('keydown', handleKeyDown);
        }
        document.addEventListener('keydown', (e) => {              // Press ESC to quit web full screen
            const event = e || window.event;
            switch (event.keyCode) {
            case 27:
                if (this.fullScreen.isFullScreen('web')) {
                    this.fullScreen.cancel('web');
                }
                break;
            }
        });

        /**
         * right key
         */
        this.container.addEventListener('contextmenu', (e) => {
            const event = e || window.event;
            event.preventDefault();

            this.template.menu.classList.add('dplayer-menu-show');

            const clientRect = this.container.getBoundingClientRect();
            const menuLeft = event.clientX - clientRect.left;
            const menuTop = event.clientY - clientRect.top;
            if (menuLeft + this.template.menu.offsetWidth >= clientRect.width) {
                this.template.menu.style.right = clientRect.width - menuLeft + 'px';
                this.template.menu.style.left = 'initial';
            }
            else {
                this.template.menu.style.left = event.clientX - this.container.getBoundingClientRect().left + 'px';
                this.template.menu.style.right = 'initial';
            }
            if (menuTop + this.template.menu.offsetHeight >= clientRect.height) {
                this.template.menu.style.bottom = clientRect.height - menuTop + 'px';
                this.template.menu.style.top = 'initial';
            }
            else {
                this.template.menu.style.top = event.clientY - this.container.getBoundingClientRect().top + 'px';
                this.template.menu.style.bottom = 'initial';
            }

            this.template.mask.classList.add('dplayer-mask-show');

            this.events.trigger('contextmenu_show');

            this.template.mask.addEventListener('click', () => {
                this.template.mask.classList.remove('dplayer-mask-show');
                this.template.menu.classList.remove('dplayer-menu-show');

                this.events.trigger('contextmenu_hide');
            });
        });

        /**
         * Switch quality
         */
        if (this.options.video.quality) {
            this.template.qualityList.addEventListener('click', (e) => {
                if (e.target.classList.contains('dplayer-quality-item')) {
                    this.switchQuality(e.target.dataset.index);
                }
            });
        }

        /**
         * Screenshot
         */
        if (this.options.screenshot) {
            this.template.camareButton.addEventListener('click', () => {
                const canvas = document.createElement("canvas");
                canvas.width = this.video.videoWidth;
                canvas.height = this.video.videoHeight;
                canvas.getContext('2d').drawImage(this.video, 0, 0, canvas.width, canvas.height);

                const dataURL = canvas.toDataURL();
                this.template.camareButton.href = dataURL;
                this.template.camareButton.download = "DPlayer.png";

                this.events.trigger('screenshot', dataURL);
            });
        }

        /**
         * Toggle subtitle
         */
        if (this.options.subtitle) {
            this.events.on('subtitle_show', () => {
                this.template.subtitleButton.dataset.balloon = this.tran('Hide subtitle');
                this.template.subtitleButtonInner.style.opacity = '';
                this.user.set('subtitle', 1);
            });
            this.events.on('subtitle_hide', () => {
                this.template.subtitleButton.dataset.balloon = this.tran('Show subtitle');
                this.template.subtitleButtonInner.style.opacity = '0.4';
                this.user.set('subtitle', 0);
            });

            this.template.subtitleButton.addEventListener('click', () => {
                this.subtitle.toggle();
            });
        }

        this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type);

        index++;
        instances.push(this);
    }

    /**
    * Seek video
    */
    seek (time) {
        time = Math.max(time, 0);
        if (this.video.duration) {
            time = Math.min(time, this.video.duration);
        }
        if (this.video.currentTime < time) {
            this.notice(`${this.tran('FF')} ${(time - this.video.currentTime).toFixed(0)} ${this.tran('s')}`);
        }
        else if (this.video.currentTime > time) {
            this.notice(`${this.tran('REW')} ${(this.video.currentTime - time).toFixed(0)} ${this.tran('s')}`);
        }

        this.video.currentTime = time;

        if (this.danmaku) {
            this.danmaku.seek();
        }

        this.bar.set('played', time / this.video.duration, 'width');
    }

    /**
     * Play video
     */
    play () {
        this.paused = false;
        if (this.video.paused) {
            this.template.bezel.innerHTML = this.icons.get('play');
            this.template.bezel.classList.add('dplayer-bezel-transition');
        }

        this.template.playButton.innerHTML = this.icons.get('pause');

        this.video.play();
        this.time.enable();
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
    pause () {
        this.paused = true;
        this.container.classList.remove('dplayer-loading');

        if (!this.video.paused) {
            this.template.bezel.innerHTML = this.icons.get('pause');
            this.template.bezel.classList.add('dplayer-bezel-transition');
        }

        this.ended = false;
        this.template.playButton.innerHTML = this.icons.get('play');
        this.video.pause();
        this.time.disable();
        this.container.classList.remove('dplayer-playing');
        if (this.danmaku) {
            this.danmaku.pause();
        }
    }

    /**
     * Set volume
     */
    volume (percentage, nostorage, nonotice) {
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
    toggle () {
        if (this.video.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }

    /**
     * attach event
     */
    on (name, callback) {
        this.events.on(name, callback);
    }

    /**
     * Switch to a new video
     *
     * @param {Object} video - new video info
     * @param {Object} danmaku - new danmaku info
     */
    switchVideo (video, danmakuAPI) {
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

    initMSE (video, type) {
        this.type = type;
        if (this.type === 'auto') {
            if (/m3u8(#|\?|$)/i.exec(video.src)) {
                this.type = 'hls';
            }
            else if (/.flv(#|\?|$)/i.exec(video.src)) {
                this.type = 'flv';
            }
            else if (/.mpd(#|\?|$)/i.exec(video.src)) {
                this.type = 'dash';
            }
            else {
                this.type = 'normal';
            }
        }

        // HTTP Live Streaming
        if (this.type === 'hls' && Hls && Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(video.src);
            hls.attachMedia(video);
        }

        // FLV
        if (this.type === 'flv' && flvjs && flvjs.isSupported()) {
            const flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: video.src
            });
            flvPlayer.attachMediaElement(video);
            flvPlayer.load();
        }

        // MPEG DASH
        if (this.type === 'dash' && dashjs) {
            dashjs.MediaPlayer().create().initialize(video, video.src, false);
        }
    }

    initVideo (video, type) {
        this.initMSE(video, type);

        /**
         * video events
         */
        // show video time: the metadata has loaded or changed
        this.on('durationchange', () => {
            if (video.duration !== 1) {           // compatibility: Android browsers will output 1 at first
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
            this.tran && this.notice && this.notice(this.tran('This video fails to load'), -1);
        });

        // video end
        this.ended = false;
        this.on('ended', () => {
            this.bar.set('played', 1, 'width');
            if (!this.loop) {
                this.ended = true;
                this.pause();
            }
            else {
                this.seek(0);
                video.play();
            }
            if (this.danmaku) {
                this.danmaku.danIndex = 0;
            }
        });

        this.on('play', () => {
            if (this.paused) {
                this.play();
            }
        });

        this.on('pause', () => {
            if (!this.paused) {
                this.pause();
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

    switchQuality (index) {
        if (this.qualityIndex === index || this.switchingQuality) {
            return;
        }
        else {
            this.qualityIndex = index;
        }
        this.switchingQuality = true;
        this.quality = this.options.video.quality[index];
        this.template.qualityButton.innerHTML = this.quality.name;

        const paused = this.video.paused;
        this.video.pause();
        const videoHTML = this.template.tplVideo(false, null, this.options.screenshot, 'auto', this.quality.url, this.options.subtitle);
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

    mouseHandler (pbar, timeTips) {
        // http://stackoverflow.com/questions/1480133/how-can-i-get-an-objects-absolute-position-on-the-page-in-javascript
        const cumulativeOffset = (element) => {
            let top = 0, left = 0;
            do {
                top += element.offsetTop || 0;
                left += element.offsetLeft || 0;
                element = element.offsetParent;
            } while (element);

            return {
                top: top,
                left: left
            };
        };

        return (e) => {
            if (!this.video.duration) {
                return;
            }
            const { clientX } = e;
            const px = cumulativeOffset(pbar).left;
            const tx = clientX - px;
            if (tx < 0 || tx > pbar.offsetWidth) {
                return;
            }
            const time = this.video.duration * (tx / pbar.offsetWidth);
            timeTips.style.left = `${(tx - 20)}px`;

            switch (e.type) {
            case 'mouseenter':
                this.thumbnails && this.thumbnails.show();
                break;
            case 'mousemove':
                this.thumbnails && this.thumbnails.move(tx);
                timeTips.innerText = utils.secondToTime(time);
                this.timeTipsDisplay(true, timeTips);
                break;
            case 'mouseleave':
                this.thumbnails && this.thumbnails.hide();
                this.timeTipsDisplay(false, timeTips);
                break;
            }
        };
    }

    timeTipsDisplay (show, timeTips) {
        if (show) {
            if (this.isTimeTipsShow) {
                return;
            }
            timeTips.classList.remove('hidden');
            this.isTimeTipsShow = true;
        } else {
            if (!this.isTimeTipsShow) {
                return;
            }
            timeTips.classList.add('hidden');
            this.isTimeTipsShow = false;
        }
    }

    initThumbnails () {
        this.thumbnails = new Thumbnails(this.template.barPreview, this.template.barWrap.offsetWidth, this.options.video.thumbnails, this.events);

        this.on('loadedmetadata', () => {
            this.thumbnails.resize(160, 90);
        });
    }

    notice (text, time = 2000, opacity = 0.8) {
        this.template.notice.innerHTML = text;
        this.template.notice.style.opacity = opacity;
        if (this.noticeTime) {
            clearTimeout(this.noticeTime);
        }
        this.events.trigger('notice_show', text);
        this.noticeTime = setTimeout(() => {
            this.template.notice.style.opacity = 0;
            this.events.trigger('notice_hide');
        }, time);
    }

    resize () {
        if (this.danmaku) {
            this.danmaku.resize();
        }
        this.events.trigger('resize');
    }

    destroy () {
        instances.splice(instances.indexOf(this), 1);
        this.pause();
        clearTimeout(this.hideTime);
        this.time.destroy();
        this.video.src = '';
        this.container.innerHTML = '';
        this.events.trigger('destroy');

        for (const key in this) {
            if (this.hasOwnProperty(key) && key !== 'paused') {
                delete this[key];
            }
        }
    }
}

module.exports = DPlayer;
