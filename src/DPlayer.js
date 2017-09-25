import './DPlayer.scss';

import utils, { isMobile } from './utils';
import handleOption from './options';
import i18n from './i18n';
import html from './html';
import SvgCollection from './svg';
import Danmaku from './danmaku';
import Thumbnails from './thumbnails';
import Events from './events';
import FullScreen from './fullscreen';
import User from './user';
import Subtitle from './subtitle';

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

        this.options.container.classList.add('dplayer');

        if (this.options.video.quality) {
            this.qualityIndex = this.options.video.defaultQuality;
            this.quality = this.options.video.quality[this.options.video.defaultQuality];
        }

        this.tran = new i18n(this.options.lang).tran;

        this.icons = new SvgCollection(this.options);

        this.events = new Events();

        this.user = new User(this);

        this.container = this.options.container;
        if (!this.options.danmaku) {
            this.container.classList.add('dplayer-no-danmaku');
        }
        if (isMobile) {
            this.container.classList.add('dplayer-mobile');
        }

        this.container.innerHTML = html.main(this.options, index, this.tran, this.icons);

        const bar = {};
        bar.volumeBar = this.container.getElementsByClassName('dplayer-volume-bar-inner')[0];
        bar.playedBar = this.container.getElementsByClassName('dplayer-played')[0];
        bar.loadedBar = this.container.getElementsByClassName('dplayer-loaded')[0];
        const pbar = this.container.getElementsByClassName('dplayer-bar-wrap')[0];
        const pbarTimeTips = this.container.getElementsByClassName('dplayer-bar-time')[0];
        let barWidth;

        /**
         * Update progress bar, including loading progress bar and play progress bar
         *
         * @param {String} type - Point out which bar it is, should be played loaded or volume
         * @param {Number} percentage
         * @param {String} direction - Point out the direction of this bar, Should be height or width
         */
        this.updateBar = (type, percentage, direction) => {
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            bar[type + 'Bar'].style[direction] = percentage * 100 + '%';
        };

        document.addEventListener('click', () => {
            this.focus = false;
        }, true);

        this.container.addEventListener('click', () => {
            this.focus = true;
        }, true);

        if (this.options.danmaku) {
            this.danmaku = new Danmaku({
                container: this.container.getElementsByClassName('dplayer-danmaku')[0],
                opacity: this.user.get('opacity'),
                callback: () => {
                    this.container.getElementsByClassName('dplayer-danloading')[0].style.display = 'none';

                    // autoplay
                    if (this.options.autoplay && !isMobile) {
                        this.play();
                    }
                    else if (isMobile) {
                        this.pause();
                    }
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


        // arrow style
        this.arrow = this.container.offsetWidth <= 500;
        if (this.arrow) {
            const arrowStyle = document.createElement('style');
            arrowStyle.innerHTML = `.dplayer .dplayer-danmaku{font-size:18px}`;
            document.head.appendChild(arrowStyle);
        }

        // get this video manager
        this.video = this.container.getElementsByClassName('dplayer-video-current')[0];

        this.bezel = this.container.getElementsByClassName('dplayer-bezel-icon')[0];
        this.bezel.addEventListener('animationend', () => {
            this.bezel.classList.remove('dplayer-bezel-transition');
        });

        // play and pause button
        this.playButton = this.container.getElementsByClassName('dplayer-play-icon')[0];
        this.paused = true;
        this.playButton.addEventListener('click', () => {
            this.toggle();
        });

        const videoWrap = this.container.getElementsByClassName('dplayer-video-wrap')[0];
        const conMask = this.container.getElementsByClassName('dplayer-controller-mask')[0];
        if (!isMobile) {
            videoWrap.addEventListener('click', () => {
                this.toggle();
            });
            conMask.addEventListener('click', () => {
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
            videoWrap.addEventListener('click', toggleController);
            conMask.addEventListener('click', toggleController);
        }

        let lastPlayPos = 0;
        let currentPlayPos = 0;
        let bufferingDetected = false;
        window.requestAnimationFrame = (() =>
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        )();

        const setCheckLoadingTime = () => {
            this.checkLoading = setInterval(() => {
                // whether the video is buffering
                currentPlayPos = this.video.currentTime;
                if (!bufferingDetected
                    && currentPlayPos === lastPlayPos
                    && !this.video.paused) {
                    this.container.classList.add('dplayer-loading');
                    bufferingDetected = true;
                }
                if (bufferingDetected
                    && currentPlayPos > lastPlayPos
                    && !this.video.paused) {
                    this.container.classList.remove('dplayer-loading');
                    bufferingDetected = false;
                }
                lastPlayPos = currentPlayPos;
            }, 100);
        };

        const clearCheckLoadingTime = () => {
            clearInterval(this.checkLoading);
        };

        this.playedTime = false;
        this.animationFrame = () => {
            if (this.playedTime) {
                this.updateBar('played', this.video.currentTime / this.video.duration, 'width');
                this.container.getElementsByClassName('dplayer-ptime')[0].innerHTML = utils.secondToTime(this.video.currentTime);
            }
            window.requestAnimationFrame(this.animationFrame);
        };
        window.requestAnimationFrame(this.animationFrame);

        this.setTime = (type) => {
            if (!type) {
                this.playedTime = true;
                setCheckLoadingTime();
            }
            else {
                this[`${type}Time`] = true;
                if (type === 'played') {
                    setCheckLoadingTime();
                }
            }
        };
        this.clearTime = (type) => {
            if (!type) {
                this.playedTime = false;
                clearCheckLoadingTime();
            }
            else {
                this[`${type}Time`] = false;
                if (type === 'played') {
                    clearCheckLoadingTime();
                }
            }
        };

        if (this.options.video.thumbnails) {
            this.initThumbnails();
        }
        this.isTimeTipsShow = true;
        this.mouseHandler = this.mouseHandler(pbar, pbarTimeTips).bind(this);
        pbar.addEventListener('mousemove', this.mouseHandler);
        pbar.addEventListener('mouseenter', this.mouseHandler);
        pbar.addEventListener('mouseleave', this.mouseHandler);


        const thumbMove = (e) => {
            let percentage = (e.clientX - utils.getElementViewLeft(pbar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('played', percentage, 'width');
            this.container.getElementsByClassName('dplayer-ptime')[0].innerHTML = utils.secondToTime(percentage * this.video.duration);
        };

        const thumbUp = (e) => {
            document.removeEventListener('mouseup', thumbUp);
            document.removeEventListener('mousemove', thumbMove);
            let percentage = (e.clientX - utils.getElementViewLeft(pbar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('played', percentage, 'width');
            this.seek(parseFloat(bar.playedBar.style.width) / 100 * this.video.duration);
            this.setTime();
        };

        pbar.addEventListener('mousedown', () => {
            barWidth = pbar.clientWidth;
            this.clearTime();
            document.addEventListener('mousemove', thumbMove);
            document.addEventListener('mouseup', thumbUp);
        });


        /**
         * control volume
         */
        const volumeEle = this.container.getElementsByClassName('dplayer-volume')[0];
        const volumeBarWrapWrap = this.container.getElementsByClassName('dplayer-volume-bar-wrap')[0];
        const volumeBarWrap = this.container.getElementsByClassName('dplayer-volume-bar')[0];
        const volumeicon = this.container.getElementsByClassName('dplayer-volume-icon')[0].getElementsByClassName('dplayer-icon-content')[0];
        const vWidth = 35;

        this.switchVolumeIcon = () => {
            if (this.volume() >= 0.95) {
                volumeicon.innerHTML = this.icons.get('volume-up');
            }
            else if (this.volume() > 0) {
                volumeicon.innerHTML = this.icons.get('volume-down');
            }
            else {
                volumeicon.innerHTML = this.icons.get('volume-off');
            }
        };
        const volumeMove = (event) => {
            const e = event || window.event;
            const percentage = (e.clientX - utils.getElementViewLeft(volumeBarWrap) - 5.5) / vWidth;
            this.volume(percentage);
        };
        const volumeUp = () => {
            document.removeEventListener('mouseup', volumeUp);
            document.removeEventListener('mousemove', volumeMove);
            volumeEle.classList.remove('dplayer-volume-active');
        };

        volumeBarWrapWrap.addEventListener('click', (event) => {
            const e = event || window.event;
            const percentage = (e.clientX - utils.getElementViewLeft(volumeBarWrap) - 5.5) / vWidth;
            this.volume(percentage);
        });
        volumeBarWrapWrap.addEventListener('mousedown', () => {
            document.addEventListener('mousemove', volumeMove);
            document.addEventListener('mouseup', volumeUp);
            volumeEle.classList.add('dplayer-volume-active');
        });
        volumeicon.addEventListener('click', () => {
            if (this.video.muted) {
                this.video.muted = false;
                this.switchVolumeIcon();
                this.updateBar('volume', this.volume(), 'width');
            }
            else {
                this.video.muted = true;
                volumeicon.innerHTML = this.icons.get('volume-off');
                this.updateBar('volume', 0, 'width');
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
        const settingHTML = html.setting(this.tran, this.icons);

        // toggle setting box
        const settingIcon = this.container.getElementsByClassName('dplayer-setting-icon')[0];
        const settingBox = this.container.getElementsByClassName('dplayer-setting-box')[0];
        const mask = this.container.getElementsByClassName('dplayer-mask')[0];
        settingBox.innerHTML = settingHTML.original;

        const closeSetting = () => {
            if (settingBox.classList.contains('dplayer-setting-box-open')) {
                settingBox.classList.remove('dplayer-setting-box-open');
                mask.classList.remove('dplayer-mask-show');
                setTimeout(() => {
                    settingBox.classList.remove('dplayer-setting-box-narrow');
                    settingBox.innerHTML = settingHTML.original;
                    settingEvent();
                }, 300);
            }

            this.disableHideController = false;
        };
        const openSetting = () => {
            this.disableHideController = true;

            settingBox.classList.add('dplayer-setting-box-open');
            mask.classList.add('dplayer-mask-show');
        };

        mask.addEventListener('click', () => {
            closeSetting();
        });
        settingIcon.addEventListener('click', () => {
            openSetting();
        });

        this.loop = this.options.loop;
        let showdan = this.user.get('danmaku');
        if (!showdan) {
            this.danmaku && this.danmaku.hide();
        }
        let unlimitDan = this.user.get('unlimited');
        const settingEvent = () => {
            // loop control
            const loopEle = this.container.getElementsByClassName('dplayer-setting-loop')[0];
            const loopToggle = loopEle.getElementsByClassName('dplayer-toggle-setting-input')[0];

            loopToggle.checked = this.loop;

            loopEle.addEventListener('click', () => {
                loopToggle.checked = !loopToggle.checked;
                if (loopToggle.checked) {
                    this.loop = true;
                }
                else {
                    this.loop = false;
                }
                closeSetting();
            });

            // show danmaku control
            const showDanEle = this.container.getElementsByClassName('dplayer-setting-showdan')[0];
            const showDanToggle = showDanEle.getElementsByClassName('dplayer-showdan-setting-input')[0];

            showDanToggle.checked = showdan;

            showDanEle.addEventListener('click', () => {
                showDanToggle.checked = !showDanToggle.checked;
                if (showDanToggle.checked) {
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
            const unlimitDanEle = this.container.getElementsByClassName('dplayer-setting-danunlimit')[0];
            const unlimitDanToggle = unlimitDanEle.getElementsByClassName('dplayer-danunlimit-setting-input')[0];

            unlimitDanToggle.checked = unlimitDan;

            unlimitDanEle.addEventListener('click', () => {
                unlimitDanToggle.checked = !unlimitDanToggle.checked;
                if (unlimitDanToggle.checked) {
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
            const speedEle = this.container.getElementsByClassName('dplayer-setting-speed')[0];
            speedEle.addEventListener('click', () => {
                settingBox.classList.add('dplayer-setting-box-narrow');
                settingBox.innerHTML = settingHTML.speed;

                const speedItem = settingBox.getElementsByClassName('dplayer-setting-speed-item');
                for (let i = 0; i < speedItem.length; i++) {
                    speedItem[i].addEventListener('click', () => {
                        this.video.playbackRate = speedItem[i].dataset.speed;
                        closeSetting();
                    });
                }
            });

            if (this.danmaku) {
                // danmaku opacity
                bar.danmakuBar = this.container.getElementsByClassName('dplayer-danmaku-bar-inner')[0];
                const danmakuBarWrapWrap = this.container.getElementsByClassName('dplayer-danmaku-bar-wrap')[0];
                const danmakuBarWrap = this.container.getElementsByClassName('dplayer-danmaku-bar')[0];
                const danmakuSettingBox = this.container.getElementsByClassName('dplayer-setting-danmaku')[0];
                const dWidth = 130;
                this.on('danmaku_opacity', (percentage) => {
                    this.updateBar('danmaku', percentage, 'width');
                    this.user.set('opacity', percentage);
                });
                this.danmaku.opacity(this.user.get('opacity'));

                const danmakuMove = (event) => {
                    const e = event || window.event;
                    let percentage = (e.clientX - utils.getElementViewLeft(danmakuBarWrap)) / dWidth;
                    percentage = percentage > 0 ? percentage : 0;
                    percentage = percentage < 1 ? percentage : 1;
                    this.danmaku.opacity(percentage);
                };
                const danmakuUp = () => {
                    document.removeEventListener('mouseup', danmakuUp);
                    document.removeEventListener('mousemove', danmakuMove);
                    danmakuSettingBox.classList.remove('dplayer-setting-danmaku-active');
                };

                danmakuBarWrapWrap.addEventListener('click', (event) => {
                    const e = event || window.event;
                    let percentage = (e.clientX - utils.getElementViewLeft(danmakuBarWrap)) / dWidth;
                    percentage = percentage > 0 ? percentage : 0;
                    percentage = percentage < 1 ? percentage : 1;
                    this.danmaku.opacity(percentage);
                });
                danmakuBarWrapWrap.addEventListener('mousedown', () => {
                    document.addEventListener('mousemove', danmakuMove);
                    document.addEventListener('mouseup', danmakuUp);
                    danmakuSettingBox.classList.add('dplayer-setting-danmaku-active');
                });
            }
        };
        settingEvent();

        // set duration time
        if (this.video.duration !== 1) { // compatibility: Android browsers will output 1 at first
            this.container.getElementsByClassName('dplayer-dtime')[0].innerHTML = this.video.duration ? utils.secondToTime(this.video.duration) : '00:00';
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
        const controller = this.container.getElementsByClassName('dplayer-controller')[0];
        const commentInput = this.container.getElementsByClassName('dplayer-comment-input')[0];
        const commentIcon = this.container.getElementsByClassName('dplayer-comment-icon')[0];
        const commentSettingIcon = this.container.getElementsByClassName('dplayer-comment-setting-icon')[0];
        const commentSettingBox = this.container.getElementsByClassName('dplayer-comment-setting-box')[0];
        const commentSendIcon = this.container.getElementsByClassName('dplayer-send-icon')[0];

        const closeCommentSetting = () => {
            if (commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
                commentSettingBox.classList.remove('dplayer-comment-setting-open');
            }
        };
        const toggleCommentSetting = () => {
            if (commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
                commentSettingBox.classList.remove('dplayer-comment-setting-open');
            }
            else {
                commentSettingBox.classList.add('dplayer-comment-setting-open');
            }
        };

        const closeComment = () => {
            if (!controller.classList.contains('dplayer-controller-comment')) {
                return;
            }

            controller.classList.remove('dplayer-controller-comment');
            mask.classList.remove('dplayer-mask-show');
            this.container.classList.remove('dplayer-show-controller');

            closeCommentSetting();

            this.disableHideController = false;
        };
        const openComment = () => {
            this.disableHideController = true;

            if (!controller.classList.contains('dplayer-controller-comment')) {
                controller.classList.add('dplayer-controller-comment');
                mask.classList.add('dplayer-mask-show');
                this.container.classList.add('dplayer-show-controller');
                commentInput.focus();
            }
        };

        mask.addEventListener('click', () => {
            closeComment();
        });
        commentIcon.addEventListener('click', () => {
            openComment();
        });
        commentSettingIcon.addEventListener('click', () => {
            toggleCommentSetting();
        });

        // comment setting box
        const colorSetting = this.container.getElementsByClassName('dplayer-comment-setting-color')[0];
        colorSetting.addEventListener('click', () => {
            const sele = colorSetting.querySelector(`input:checked+span`);
            if (sele) {
                const color = colorSetting.querySelector(`input:checked`).value;
                commentSettingIcon.getElementsByClassName('dplayer-fill')[0].style.fill = color;
                commentInput.style.color = color;
                commentSendIcon.getElementsByClassName('dplayer-fill')[0].style.fill = color;
            }
        });

        const sendComment = () => {
            commentInput.blur();

            // text can't be empty
            if (!commentInput.value.replace(/^\s+|\s+$/g, '')) {
                this.notice(this.tran('Please input danmaku content!'));
                return;
            }

            this.danmaku.send({
                text: commentInput.value,
                color: this.container.querySelector('.dplayer-comment-setting-color input:checked').value,
                type: this.container.querySelector('.dplayer-comment-setting-type input:checked').value
            }, () => {
                commentInput.value = '';
                closeComment();
            });
        };

        commentInput.addEventListener('click', () => {
            closeCommentSetting();
        });
        commentInput.addEventListener('keydown', (e) => {
            const event = e || window.event;
            if (event.keyCode === 13) {
                sendComment();
            }
        });

        commentSendIcon.addEventListener('click', sendComment);

        this.fullScreen = new FullScreen(this);

        // browser full screen
        this.container.getElementsByClassName('dplayer-full-icon')[0].addEventListener('click', () => {
            this.fullScreen.toggle('browser');
        });

        // web full screen
        this.container.getElementsByClassName('dplayer-full-in-icon')[0].addEventListener('click', () => {
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
        const menu = this.container.getElementsByClassName('dplayer-menu')[0];
        this.container.addEventListener('contextmenu', (e) => {
            const event = e || window.event;
            event.preventDefault();

            menu.classList.add('dplayer-menu-show');

            const clientRect = this.container.getBoundingClientRect();
            const menuLeft = event.clientX - clientRect.left;
            const menuTop = event.clientY - clientRect.top;
            if (menuLeft + menu.offsetWidth >= clientRect.width) {
                menu.style.right = clientRect.width - menuLeft + 'px';
                menu.style.left = 'initial';
            }
            else {
                menu.style.left = event.clientX - this.container.getBoundingClientRect().left + 'px';
                menu.style.right = 'initial';
            }
            if (menuTop + menu.offsetHeight >= clientRect.height) {
                menu.style.bottom = clientRect.height - menuTop + 'px';
                menu.style.top = 'initial';
            }
            else {
                menu.style.top = event.clientY - this.container.getBoundingClientRect().top + 'px';
                menu.style.bottom = 'initial';
            }

            mask.classList.add('dplayer-mask-show');

            this.events.trigger('contextmenu_show');

            mask.addEventListener('click', () => {
                mask.classList.remove('dplayer-mask-show');
                menu.classList.remove('dplayer-menu-show');

                this.events.trigger('contextmenu_hide');
            });
        });

        /**
         * Switch quality
         */
        if (this.options.video.quality) {
            this.container.getElementsByClassName('dplayer-quality-list')[0].addEventListener('click', (e) => {
                if (e.target.classList.contains('dplayer-quality-item')) {
                    this.switchQuality(e.target.dataset.index);
                }
            });
        }

        /**
         * Screenshot
         */
        if (this.options.screenshot) {
            const camareIcon = this.container.getElementsByClassName('dplayer-camera-icon')[0];
            camareIcon.addEventListener('click', () => {
                const canvas = document.createElement("canvas");
                canvas.width = this.video.videoWidth;
                canvas.height = this.video.videoHeight;
                canvas.getContext('2d').drawImage(this.video, 0, 0, canvas.width, canvas.height);

                const dataURL = canvas.toDataURL();
                camareIcon.href = dataURL;
                camareIcon.download = "DPlayer.png";

                this.events.trigger('screenshot', dataURL);
            });
        }

        /**
         * Toggle subtitle
         */
        if (this.options.subtitle) {
            const subtitleIcon = this.container.getElementsByClassName('dplayer-subtitle-icon')[0];
            const subtitleIn = subtitleIcon.getElementsByClassName('dplayer-icon-content')[0];

            this.events.on('subtitle_show', () => {
                subtitleIcon.dataset.balloon = this.tran('Hide subtitle');
                subtitleIn.style.opacity = '';
                this.user.set('subtitle', 1);
            });
            this.events.on('subtitle_hide', () => {
                subtitleIcon.dataset.balloon = this.tran('Show subtitle');
                subtitleIn.style.opacity = '0.4';
                this.user.set('subtitle', 0);
            });

            subtitleIcon.addEventListener('click', () => {
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

        this.updateBar('played', time / this.video.duration, 'width');
    }

    /**
     * Play video
     */
    play () {
        this.paused = false;
        if (this.video.paused) {
            this.bezel.innerHTML = this.icons.get('play');
            this.bezel.classList.add('dplayer-bezel-transition');
        }

        this.playButton.innerHTML = this.icons.get('pause');

        this.video.play();
        this.setTime();
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
            this.bezel.innerHTML = this.icons.get('pause');
            this.bezel.classList.add('dplayer-bezel-transition');
        }

        this.ended = false;
        this.playButton.innerHTML = this.icons.get('play');
        this.video.pause();
        this.clearTime();
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
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('volume', percentage, 'width');
            const formatPercentage = `${(percentage * 100).toFixed(0)}%`;
            this.container.getElementsByClassName('dplayer-volume-bar-wrap')[0].dataset.balloon = formatPercentage;
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
            this.container.getElementsByClassName('dplayer-danloading')[0].style.display = 'block';
            this.updateBar('played', 0, 'width');
            this.updateBar('loaded', 0, 'width');
            this.container.getElementsByClassName('dplayer-ptime')[0].innerHTML = '00:00';
            this.container.getElementsByClassName('dplayer-danmaku')[0].innerHTML = '';
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
            // this.container.getElementsByClassName('dplayer-time')[0].style.display = 'none';
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
                this.container.getElementsByClassName('dplayer-dtime')[0].innerHTML = utils.secondToTime(video.duration);
            }
        });

        // show video loaded bar: to inform interested parties of progress downloading the media
        this.on('progress', () => {
            const percentage = video.buffered.length ? video.buffered.end(video.buffered.length - 1) / video.duration : 0;
            this.updateBar('loaded', percentage, 'width');
        });

        // video download error: an error occurs
        this.on('error', () => {
            this.tran && this.notice && this.notice(this.tran('This video fails to load'), -1);
        });

        // video end
        this.ended = false;
        this.on('ended', () => {
            this.updateBar('played', 1, 'width');
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
            this.subtitle = new Subtitle(this.container.getElementsByClassName('dplayer-subtitle')[0], this.video, this.options.subtitle, this.events);
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
        this.container.getElementsByClassName('dplayer-quality-icon')[0].innerHTML = this.quality.name;

        const paused = this.video.paused;
        this.video.pause();
        const videoHTML = html.video(false, null, this.options.screenshot, 'auto', this.quality.url, this.options.subtitle);
        const videoEle = new DOMParser().parseFromString(videoHTML, 'text/html').body.firstChild;
        const parent = this.container.getElementsByClassName('dplayer-video-wrap')[0];
        parent.insertBefore(videoEle, parent.getElementsByTagName('div')[0]);
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
                parent.removeChild(this.prevVideo);
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
        this.thumbnails = new Thumbnails(this.container.getElementsByClassName('dplayer-bar-preview')[0], this.container.getElementsByClassName('dplayer-bar-wrap')[0].offsetWidth, this.options.video.thumbnails, this.events);

        this.on('loadedmetadata', () => {
            this.thumbnails.resize(160, 90);
        });
    }

    notice (text, time = 2000, opacity = 0.8) {
        const noticeEle = this.container.getElementsByClassName('dplayer-notice')[0];
        noticeEle.innerHTML = text;
        noticeEle.style.opacity = opacity;
        if (this.noticeTime) {
            clearTimeout(this.noticeTime);
        }
        this.events.trigger('notice_show', text);
        this.noticeTime = setTimeout(() => {
            noticeEle.style.opacity = 0;
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
