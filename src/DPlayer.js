import './DPlayer.scss';

import utils, {isMobile} from './utils';
import svg from './svg';
import handleOption from './option';
import i18n from './i18n';
import html from './html';
import Danmaku from './danmaku';

let index = 0;

class DPlayer {

    /**
     * DPlayer constructor function
     *
     * @param {Object} option - See README
     * @constructor
     */
    constructor (option) {
        this.option = handleOption(option);

        this.option.element.classList.add('dplayer');

        if (this.option.video.quality) {
            this.qualityIndex = this.option.video.defaultQuality;
            this.quality = this.option.video.quality[this.option.video.defaultQuality];
        }

        this.tran = new i18n(this.option.lang).tran;

        // define DPlayer events
        const eventTypes = ['play', 'pause', 'canplay', 'playing', 'ended', 'error'];
        this.event = {};
        for (let i = 0; i < eventTypes.length; i++) {
            this.event[eventTypes[i]] = [];
        }
        this.trigger = (type) => {
            for (let i = 0; i < this.event[type].length; i++) {
                this.event[type][i]();
            }
        };

        this.element = this.option.element;
        if (!this.option.danmaku) {
            this.element.classList.add('dplayer-no-danmaku');
        }
        if (isMobile) {
            this.element.classList.add('dplayer-mobile');
        }

        this.element.innerHTML = html.main(option, index, this.tran);

        const bar = {};
        bar.volumeBar = this.element.getElementsByClassName('dplayer-volume-bar-inner')[0];
        bar.playedBar = this.element.getElementsByClassName('dplayer-played')[0];
        bar.loadedBar = this.element.getElementsByClassName('dplayer-loaded')[0];
        const pbar = this.element.getElementsByClassName('dplayer-bar-wrap')[0];
        const pbarTimeTips = this.element.getElementsByClassName('dplayer-bar-time')[0];
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

        this.element.addEventListener('click', () => {
            this.focus = true;
        }, true);

        if (this.option.danmaku) {
            this.danmaku = new Danmaku({
                container: this.element.getElementsByClassName('dplayer-danmaku')[0],
                opacity: localStorage.getItem('danmaku-opacity') || 0.7,
                callback: () => {
                    this.element.getElementsByClassName('dplayer-danloading')[0].style.display = 'none';

                    // autoplay
                    if (this.option.autoplay && !isMobile) {
                        this.play();
                    }
                    else if (isMobile) {
                        this.pause();
                    }
                },
                error: (msg) => {
                    this.notice(msg);
                },
                apiBackend: this.option.apiBackend,
                borderColor: this.option.theme,
                height: this.arrow ? 24 : 30,
                time: () => this.video.currentTime,
                api: {
                    id: this.option.danmaku.id,
                    address: this.option.danmaku.api,
                    token: this.option.danmaku.token,
                    maximum: this.option.danmaku.maximum,
                    addition: this.option.danmaku.addition,
                    user: this.option.danmaku.user,
                }
            });
        }


        // arrow style
        this.arrow = this.element.offsetWidth <= 500;
        if (this.arrow) {
            const arrowStyle = document.createElement('style');
            arrowStyle.innerHTML = `.dplayer .dplayer-danmaku{font-size:18px}`;
            document.head.appendChild(arrowStyle);
        }

        // get this video manager
        this.video = this.element.getElementsByClassName('dplayer-video-current')[0];

        this.bezel = this.element.getElementsByClassName('dplayer-bezel-icon')[0];
        this.bezel.addEventListener('animationend', () => {
            this.bezel.classList.remove('dplayer-bezel-transition');
        });

        // play and pause button
        this.playButton = this.element.getElementsByClassName('dplayer-play-icon')[0];
        this.paused = true;
        this.playButton.addEventListener('click', () => {
            this.toggle();
        });

        const videoWrap = this.element.getElementsByClassName('dplayer-video-wrap')[0];
        const conMask = this.element.getElementsByClassName('dplayer-controller-mask')[0];
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
                if (this.element.classList.contains('dplayer-hide-controller')) {
                    this.element.classList.remove('dplayer-hide-controller');
                }
                else {
                    this.element.classList.add('dplayer-hide-controller');
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
                    && currentPlayPos < lastPlayPos + 0.01
                    && !this.video.paused) {
                    this.element.classList.add('dplayer-loading');
                    bufferingDetected = true;
                }
                if (bufferingDetected
                    && currentPlayPos > lastPlayPos + 0.01
                    && !this.video.paused) {
                    this.element.classList.remove('dplayer-loading');
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
                this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = utils.secondToTime(this.video.currentTime);
                this.trigger('playing');
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

        pbar.addEventListener('click', (event) => {
            const e = event || window.event;
            barWidth = pbar.clientWidth;
            let percentage = (e.clientX - utils.getElementViewLeft(pbar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('played', percentage, 'width');
            this.seek(parseFloat(bar.playedBar.style.width) / 100 * this.video.duration);
        });

        this.isTipsShow = false;
        this.timeTipsHandler = this.timeTipsHandler(
            pbar, pbarTimeTips).bind(this);
        pbar.addEventListener('mousemove', this.timeTipsHandler);
        pbar.addEventListener('mouseover', this.timeTipsHandler);
        pbar.addEventListener('mouseenter', this.timeTipsHandler);
        pbar.addEventListener('mouseout', this.timeTipsHandler);
        pbar.addEventListener('mouseleave', this.timeTipsHandler);

        const thumbMove = (event) => {
            const e = event || window.event;
            let percentage = (e.clientX - utils.getElementViewLeft(pbar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('played', percentage, 'width');
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = utils.secondToTime(percentage * this.video.duration);
        };

        const thumbUp = () => {
            document.removeEventListener('mouseup', thumbUp);
            document.removeEventListener('mousemove', thumbMove);
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
        const volumeEle = this.element.getElementsByClassName('dplayer-volume')[0];
        const volumeBarWrapWrap = this.element.getElementsByClassName('dplayer-volume-bar-wrap')[0];
        const volumeBarWrap = this.element.getElementsByClassName('dplayer-volume-bar')[0];
        const volumeicon = this.element.getElementsByClassName('dplayer-volume-icon')[0];
        const vWidth = 35;

        this.switchVolumeIcon = () => {
            const volumeicon = this.element.getElementsByClassName('dplayer-volume-icon')[0];
            if (this.volume() >= 0.95) {
                volumeicon.innerHTML = svg('volume-up');
            }
            else if (this.volume() > 0) {
                volumeicon.innerHTML = svg('volume-down');
            }
            else {
                volumeicon.innerHTML = svg('volume-off');
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
                volumeicon.innerHTML = svg('volume-off');
                this.updateBar('volume', 0, 'width');
            }
        });


        /**
         * auto hide controller
         */
        this.hideTime = 0;
        const hideController = () => {
            this.element.classList.remove('dplayer-hide-controller');
            clearTimeout(this.hideTime);
            this.hideTime = setTimeout(() => {
                if (this.video.played.length) {
                    this.element.classList.add('dplayer-hide-controller');
                    closeSetting();
                    closeComment();
                }
            }, 2000);
        };
        if (!isMobile) {
            this.element.addEventListener('mousemove', hideController);
            this.element.addEventListener('click', hideController);
        }


        /**
         * setting
         */
        const settingHTML = html.setting(this.tran);

        // toggle setting box
        const settingIcon = this.element.getElementsByClassName('dplayer-setting-icon')[0];
        const settingBox = this.element.getElementsByClassName('dplayer-setting-box')[0];
        const mask = this.element.getElementsByClassName('dplayer-mask')[0];
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
        };
        const openSetting = () => {
            settingBox.classList.add('dplayer-setting-box-open');
            mask.classList.add('dplayer-mask-show');
        };

        mask.addEventListener('click', () => {
            closeSetting();
        });
        settingIcon.addEventListener('click', () => {
            openSetting();
        });

        this.loop = this.option.loop;
        let showdan = true;
        const settingEvent = () => {
            // loop control
            const loopEle = this.element.getElementsByClassName('dplayer-setting-loop')[0];
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
            const showDanEle = this.element.getElementsByClassName('dplayer-setting-showdan')[0];
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
                closeSetting();
            });

            // speed control
            const speedEle = this.element.getElementsByClassName('dplayer-setting-speed')[0];
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
                bar.danmakuBar = this.element.getElementsByClassName('dplayer-danmaku-bar-inner')[0];
                const danmakuBarWrapWrap = this.element.getElementsByClassName('dplayer-danmaku-bar-wrap')[0];
                const danmakuBarWrap = this.element.getElementsByClassName('dplayer-danmaku-bar')[0];
                const danmakuSettingBox = this.element.getElementsByClassName('dplayer-setting-danmaku')[0];
                const dWidth = 130;
                this.updateBar('danmaku', this.danmaku.opacity(), 'width');

                const danmakuMove = (event) => {
                    const e = event || window.event;
                    let percentage = (e.clientX - utils.getElementViewLeft(danmakuBarWrap)) / dWidth;
                    percentage = percentage > 0 ? percentage : 0;
                    percentage = percentage < 1 ? percentage : 1;
                    this.updateBar('danmaku', percentage, 'width');
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
                    this.updateBar('danmaku', percentage, 'width');
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
        if (this.video.duration !== 1) {           // compatibility: Android browsers will output 1 at first
            this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = this.video.duration ? utils.secondToTime(this.video.duration) : '00:00';
        }

        if (!this.danmaku) {
            // autoplay
            if (this.option.autoplay && !isMobile) {
                this.play();
            }
            else if (isMobile) {
                this.pause();
            }
        }


        /**
         * comment
         */
        const commentInput = this.element.getElementsByClassName('dplayer-comment-input')[0];
        const commentIcon = this.element.getElementsByClassName('dplayer-comment-icon')[0];
        const commentBox = this.element.getElementsByClassName('dplayer-comment-box')[0];
        const commentSettingIcon = this.element.getElementsByClassName('dplayer-comment-setting-icon')[0];
        const commentSettingBox = this.element.getElementsByClassName('dplayer-comment-setting-box')[0];
        const commentSendIcon = this.element.getElementsByClassName('dplayer-send-icon')[0];

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

        let disableHide = 0;
        let commentFocusTimeout = 0;
        const closeComment = () => {
            if (!commentBox.classList.contains('dplayer-comment-box-open')) {
                return;
            }

            commentBox.classList.remove('dplayer-comment-box-open');
            mask.classList.remove('dplayer-mask-show');
            this.element.classList.remove('dplayer-show-controller');

            clearInterval(disableHide);
            clearTimeout(commentFocusTimeout);
            closeCommentSetting();
        };
        const openComment = () => {
            if (commentBox.classList.contains('dplayer-comment-box-open')) {
                return;
            }

            commentBox.classList.add('dplayer-comment-box-open');
            mask.classList.add('dplayer-mask-show');
            this.element.classList.add('dplayer-show-controller');

            disableHide = setInterval(() => {
                clearTimeout(this.hideTime);
            }, 1000);
            commentFocusTimeout = setTimeout(() => {
                commentInput.focus();
            }, 300);
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
        this.element.getElementsByClassName('dplayer-comment-setting-color')[0].addEventListener('click', () => {
            const sele = this.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked+span');
            if (sele) {
                commentSettingIcon.getElementsByClassName('dplayer-fill')[0].style.fill = this.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked').value;
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
                color: this.element.querySelector('.dplayer-comment-setting-color input:checked').value,
                type: this.element.querySelector('.dplayer-comment-setting-type input:checked').value
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


        /**
         * full screen
         */
        this.element.addEventListener('fullscreenchange', () => {
            if (this.danmaku) {
                this.danmaku.resize();
            }
        });
        this.element.addEventListener('mozfullscreenchange', () => {
            if (this.danmaku) {
                this.danmaku.resize();
            }
        });
        this.element.addEventListener('webkitfullscreenchange', () => {
            if (this.danmaku) {
                this.danmaku.resize();
            }
        });
        // browser full screen
        this.element.getElementsByClassName('dplayer-full-icon')[0].addEventListener('click', () => {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
                if (this.element.requestFullscreen) {
                    this.element.requestFullscreen();
                }
                else if (this.element.mozRequestFullScreen) {
                    this.element.mozRequestFullScreen();
                }
                else if (this.element.webkitRequestFullscreen) {
                    this.element.webkitRequestFullscreen();
                }
                else if (this.video.webkitEnterFullscreen) {   // Safari for iOS
                    this.video.webkitEnterFullscreen();
                }
            }
            else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
            if (this.danmaku) {
                this.danmaku.resize();
            }
        });
        // web full screen
        this.element.getElementsByClassName('dplayer-full-in-icon')[0].addEventListener('click', () => {
            if (this.element.classList.contains('dplayer-fulled')) {
                this.element.classList.remove('dplayer-fulled');
            }
            else {
                this.element.classList.add('dplayer-fulled');
                if (this.danmaku) {
                    this.danmaku.resize();
                }
            }
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
        if (this.option.hotkey) {
            document.addEventListener('keydown', handleKeyDown);
        }
        document.addEventListener('keydown', (e) => {              // Press ESC to quit web full screen
            const event = e || window.event;
            switch (event.keyCode) {
            case 27:
                if (this.element.classList.contains('dplayer-fulled')) {
                    this.element.classList.remove('dplayer-fulled');
                    if (this.danmaku) {
                        this.danmaku.resize();
                    }
                }
                break;
            }
        });

        /**
         * right key
         */
        const menu = this.element.getElementsByClassName('dplayer-menu')[0];
        this.element.addEventListener('contextmenu', (e) => {
            const event = e || window.event;
            event.preventDefault();

            menu.classList.add('dplayer-menu-show');

            const clientRect = this.element.getBoundingClientRect();
            const menuLeft = event.clientX - clientRect.left;
            const menuTop = event.clientY - clientRect.top;
            if (menuLeft + menu.offsetWidth >= clientRect.width) {
                menu.style.right = clientRect.width - menuLeft + 'px';
                menu.style.left = 'initial';
            }
            else {
                menu.style.left = event.clientX - this.element.getBoundingClientRect().left + 'px';
                menu.style.right = 'initial';
            }
            if (menuTop + menu.offsetHeight >= clientRect.height) {
                menu.style.bottom = clientRect.height - menuTop + 'px';
                menu.style.top = 'initial';
            }
            else {
                menu.style.top = event.clientY - this.element.getBoundingClientRect().top + 'px';
                menu.style.bottom = 'initial';
            }

            mask.classList.add('dplayer-mask-show');
            mask.addEventListener('click', () => {
                mask.classList.remove('dplayer-mask-show');
                menu.classList.remove('dplayer-menu-show');
            });
        });

        /**
         * Switch quality
         */
        if (this.option.video.quality) {
            this.element.getElementsByClassName('dplayer-quality-list')[0].addEventListener('click', (e) => {
                if (e.target.classList.contains('dplayer-quality-item')) {
                    this.switchQuality(e.target.dataset.index);
                }
            });
        }

        /**
         * Screenshot
         */
        if (this.option.screenshot) {
            const camareIcon = this.element.getElementsByClassName('dplayer-camera-icon')[0];
            camareIcon.addEventListener('click', () => {
                const canvas = document.createElement("canvas");
                canvas.width = this.video.videoWidth;
                canvas.height = this.video.videoHeight;
                canvas.getContext('2d').drawImage(this.video, 0, 0, canvas.width, canvas.height);

                camareIcon.href = canvas.toDataURL();
                camareIcon.download = "DPlayer.png";
            });
        }

        this.initVideo();

        index++;
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
            this.notice(`${this.tran('FF to')} ${utils.secondToTime(time)}`);
        }
        else if (this.video.currentTime > time) {
            this.notice(`${this.tran('REW to')} ${utils.secondToTime(time)}`);
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
            this.bezel.innerHTML = svg('play');
            this.bezel.classList.add('dplayer-bezel-transition');
        }

        this.playButton.innerHTML = svg('pause');

        this.video.play();
        this.setTime();
        this.element.classList.add('dplayer-playing');
        if (this.danmaku) {
            this.danmaku.play();
        }
        this.trigger('play');
    }

    /**
     * Pause video
     */
    pause () {
        this.paused = true;
        this.element.classList.remove('dplayer-loading');

        if (!this.video.paused) {
            this.bezel.innerHTML = svg('pause');
            this.bezel.classList.add('dplayer-bezel-transition');
        }

        this.ended = false;
        this.playButton.innerHTML = svg('play');
        this.video.pause();
        this.clearTime();
        this.element.classList.remove('dplayer-playing');
        if (this.danmaku) {
            this.danmaku.pause();
        }
        this.trigger('pause');
    }

    /**
     * Set volume
     */
    volume (percentage, nonotice, nostorage) {
        percentage = parseFloat(percentage);
        if (!isNaN(percentage)) {
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('volume', percentage, 'width');
            if (!nostorage) {
                localStorage.setItem('dplayer-volume', percentage);
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
    on (event, callback) {
        if (typeof callback === 'function') {
            this.event[event].push(callback);
        }
    }

    /**
     * Switch to a new video
     *
     * @param {Object} video - new video info
     * @param {Object} danmaku - new danmaku info
     */
    switchVideo (video, danmakuAPI) {
        this.video.poster = video.pic ? video.pic : '';
        this.video.src = video.url;
        this.pause();
        if (danmakuAPI) {
            this.element.getElementsByClassName('dplayer-danloading')[0].style.display = 'block';
            this.updateBar('played', 0, 'width');
            this.updateBar('loaded', 0, 'width');
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = '00:00';
            this.element.getElementsByClassName('dplayer-danmaku')[0].innerHTML = '';
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

    initVideo () {
        // Support HTTP Live Streaming
        let enablehls;
        if (this.option.video.type === 'auto') {
            enablehls = /m3u8(#|\?|$)/i.exec(this.video.src);
        }
        else if (this.option.video.type === 'hls') {
            enablehls = true;
        }
        else {
            enablehls = false;
        }
        if (enablehls && Hls.isSupported()) {
            // this.element.getElementsByClassName('dplayer-time')[0].style.display = 'none';
            const hls = new Hls();
            hls.loadSource(this.video.src);
            hls.attachMedia(this.video);
        }

        // Support FLV
        let enableflv;
        if (this.option.video.type === 'auto') {
            enableflv = /.flv(#|\?|$)/i.exec(this.video.src);
        }
        else if (this.option.video.type === 'flv') {
            enableflv = true;
        }
        else {
            enableflv = false;
        }
        if (enableflv && flvjs.isSupported()) {
            const flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: this.option.video.url
            });
            flvPlayer.attachMediaElement(this.video);
            flvPlayer.load();
        }

        /**
         * video events
         */
        // show video time: the metadata has loaded or changed
        this.video.addEventListener('durationchange', () => {
            if (this.video.duration !== 1) {           // compatibility: Android browsers will output 1 at first
                this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = utils.secondToTime(this.video.duration);
            }
        });

        // show video loaded bar: to inform interested parties of progress downloading the media
        this.video.addEventListener('progress', () => {
            const percentage = this.video.buffered.length ? this.video.buffered.end(this.video.buffered.length - 1) / this.video.duration : 0;
            this.updateBar('loaded', percentage, 'width');
        });

        // video download error: an error occurs
        this.video.addEventListener('error', () => {
            this.tran && this.notice && this.notice(this.tran('This video fails to load'), -1);
            this.trigger && this.trigger('pause');
        });

        // video can play: enough data is available that the media can be played
        this.video.addEventListener('canplay', () => {
            this.trigger('canplay');
        });

        // video end
        this.ended = false;
        this.video.addEventListener('ended', () => {
            this.updateBar('played', 1, 'width');
            if (!this.loop) {
                this.ended = true;
                this.pause();
                this.trigger('ended');
            }
            else {
                this.seek(0);
                this.video.play();
            }
            if (this.danmaku) {
                this.danmaku.danIndex = 0;
            }
        });

        this.video.addEventListener('play', () => {
            if (this.paused) {
                this.play();
            }
        });

        this.video.addEventListener('pause', () => {
            if (!this.paused) {
                this.pause();
            }
        });

        this.volume(localStorage.getItem('dplayer-volume') || this.option.volume, true, true);
    }

    switchQuality (index) {
        if (this.qualityIndex === index || this.switchingQuality) {
            return;
        }
        else {
            this.qualityIndex = index;
        }
        this.switchingQuality = true;
        this.quality = this.option.video.quality[index];
        this.element.getElementsByClassName('dplayer-quality-icon')[0].innerHTML = this.quality.name;

        const paused = this.video.paused;
        this.video.pause();
        const videoHTML = html.video(false, null, this.option.screenshot, 'auto', this.quality.url);
        const videoEle = new DOMParser().parseFromString(videoHTML, 'text/html').body.firstChild;
        const parent = this.element.getElementsByClassName('dplayer-video-wrap')[0];
        parent.insertBefore(videoEle, parent.getElementsByTagName('div')[0]);
        this.prevVideo = this.video;
        this.video = videoEle;
        this.initVideo();
        this.seek(this.prevVideo.currentTime);
        this.notice(`${this.tran('Switching to')} ${this.quality.name} ${this.tran('quality')}`, -1);
        this.video.addEventListener('canplay', () => {
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
            }
        });
    }

    timeTipsHandler (pbar, timeTips) {
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
            timeTips.innerText = utils.secondToTime(this.video.duration * (tx / pbar.offsetWidth));
            timeTips.style.left = `${(tx - 20)}px`;
            switch (e.type) {
            case 'mouseenter':
            case 'mouseover':
            case 'mousemove':
                if (this.isTipsShow) {
                    return;
                }
                timeTips.classList.remove('hidden');
                this.isTipsShow = true;
                break;
            case 'mouseleave':
            case 'mouseout':
                if (!this.isTipsShow) {
                    return;
                }
                timeTips.classList.add('hidden');
                this.isTipsShow = false;
                break;
            }
        };
    }

    notice (text, time = 2000, opacity = 0.8) {
        const noticeEle = this.element.getElementsByClassName('dplayer-notice')[0];
        noticeEle.innerHTML = text;
        noticeEle.style.opacity = opacity;
        if (this.noticeTime) {
            clearTimeout(this.noticeTime);
        }
        this.noticeTime = setTimeout(() => {
            noticeEle.style.opacity = 0;
        }, time);
    }

    destroy () {
        this.pause();
        clearTimeout(this.hideTime);
        this.video.src = '';
        this.element.innerHTML = '';
        for (const key in this) {
            if (this.hasOwnProperty(key) && key !== 'paused') {
                delete this[key];
            }
        }
    }
}

module.exports = DPlayer;
