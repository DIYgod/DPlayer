console.log('\n %c DPlayer 1.5.0 %c http://dplayer.js.org \n\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');

require('./DPlayer.scss');
const utils = require('./utils.js');
const svg = require('./svg.js');
const handleOption = require('./option.js');
const i18n = require('./i18n.js');
const html = require('./html.js');
const Video = require('./video.js');
const isMobile = /mobile/i.test(window.navigator.userAgent);

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

        // arrow style
        this.arrow = this.element.offsetWidth <= 500;
        if (this.arrow) {
            const arrowStyle = document.createElement('style');
            arrowStyle.innerHTML = `.dplayer .dplayer-danmaku{font-size:18px}`;
            document.head.appendChild(arrowStyle);
        }

        // get this video manager
        this.video = new Video(this.element.getElementsByClassName('dplayer-video-current'));

        this.initVideo();

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

        const bar = {};
        bar.playedBar = this.element.getElementsByClassName('dplayer-played')[0];
        bar.loadedBar = this.element.getElementsByClassName('dplayer-loaded')[0];
        const pbar = this.element.getElementsByClassName('dplayer-bar-wrap')[0];
        const pbarTimeTips = this.element.getElementsByClassName('dplayer-bar-time')[0];
        let barWidth;

        let lastPlayPos = 0;
        let currentPlayPos = 0;
        let bufferingDetected = false;
        this.danmakuTime = false;
        this.playedTime = false;
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
                currentPlayPos = this.video.currentTime();
                if (!bufferingDetected
                    && currentPlayPos < lastPlayPos + 0.01
                    && !this.video.attr('paused')) {
                    this.element.classList.add('dplayer-loading');
                    bufferingDetected = true;
                }
                if (bufferingDetected
                    && currentPlayPos > lastPlayPos + 0.01
                    && !this.video.attr('paused')) {
                    this.element.classList.remove('dplayer-loading');
                    bufferingDetected = false;
                }
                lastPlayPos = currentPlayPos;
            }, 100);
        };

        const clearCheckLoadingTime = () => {
            clearInterval(this.checkLoading);
        };
        
        this.animationFrame = () => {
            if (this.playedTime) {
                this.updateBar('played', this.video.currentTime() / this.video.duration, 'width');
                this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = utils.secondToTime(this.video.currentTime());
                this.trigger('playing');
            }
            if (this.danmakuTime && this.option.danmaku && showdan && this.dan) {
                let item = this.dan[this.danIndex];
                const danmakus = [];
                while (item && this.video.currentTime() > parseFloat(item.time)) {
                    danmakus.push(item);
                    item = this.dan[++this.danIndex];
                }
                this.pushDanmaku(danmakus);
            }
            window.requestAnimationFrame(this.animationFrame);
        };
        window.requestAnimationFrame(this.animationFrame);

        this.setTime = (type) => {
            if (!type) {
                this.danmakuTime = true;
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
                this.danmakuTime = false;
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
            this.video.seek(parseFloat(bar.playedBar.style.width) / 100 * this.video.duration);
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
            this.video.seek(parseFloat(bar.playedBar.style.width) / 100 * this.video.duration);
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
        bar.volumeBar = this.element.getElementsByClassName('dplayer-volume-bar-inner')[0];
        const volumeEle = this.element.getElementsByClassName('dplayer-volume')[0];
        const volumeBarWrapWrap = this.element.getElementsByClassName('dplayer-volume-bar-wrap')[0];
        const volumeBarWrap = this.element.getElementsByClassName('dplayer-volume-bar')[0];
        const volumeicon = this.element.getElementsByClassName('dplayer-volume-icon')[0];
        const vWidth = 35;

        this.switchVolumeIcon = () => {
            const volumeicon = this.element.getElementsByClassName('dplayer-volume-icon')[0];
            if (this.video.attr('volume') >= 0.8) {
                volumeicon.innerHTML = svg('volume-up');
            }
            else if (this.video.attr('volume') > 0) {
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
            if (this.video.attr('muted')) {
                this.video.attr('muted', false);
                this.switchVolumeIcon();
                this.updateBar('volume', this.video.attr('volume'), 'width');
            }
            else {
                this.video.attr('muted', true);
                volumeicon.innerHTML = svg('volume-off');
                this.updateBar('volume', 0, 'width');
            }
        });


        /**
         * auto hide controller
         */
        let hideTime = 0;
        if (!isMobile) {
            const hideController = () => {
                this.element.classList.remove('dplayer-hide-controller');
                clearTimeout(hideTime);
                hideTime = setTimeout(() => {
                    if (this.video.attr('played').length) {
                        this.element.classList.add('dplayer-hide-controller');
                        closeSetting();
                        closeComment();
                    }
                }, 2000);
            };
            this.element.addEventListener('mousemove', hideController);
            this.element.addEventListener('click', hideController);
        }


        /**
         * setting
         */
        this.danOpacity = localStorage.getItem('DPlayer-opacity') || 0.7;
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
        const danContainer = this.element.getElementsByClassName('dplayer-danmaku')[0];
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
                    if (this.option.danmaku) {
                        for (let i = 0; i < this.dan.length; i++) {
                            if (this.dan[i].time >= this.video.currentTime()) {
                                this.danIndex = i;
                                break;
                            }
                            this.danIndex = this.dan.length;
                        }
                        if (!this.paused) {
                            this.setTime('danmaku');
                        }
                    }
                }
                else {
                    showdan = false;
                    if (this.option.danmaku) {
                        this.clearTime('danmaku');
                        danContainer.innerHTML = '';
                        this.danTunnel = {
                            right: {},
                            top: {},
                            bottom: {}
                        };
                    }
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
                        this.video.attr('playbackRate', speedItem[i].dataset.speed);
                        closeSetting();
                    });
                }
            });

            if (this.option.danmaku) {
                // danmaku opacity
                bar.danmakuBar = this.element.getElementsByClassName('dplayer-danmaku-bar-inner')[0];
                const danmakuBarWrapWrap = this.element.getElementsByClassName('dplayer-danmaku-bar-wrap')[0];
                const danmakuBarWrap = this.element.getElementsByClassName('dplayer-danmaku-bar')[0];
                const danmakuSettingBox = this.element.getElementsByClassName('dplayer-setting-danmaku')[0];
                const dWidth = 130;
                this.updateBar('danmaku', this.danOpacity, 'width');

                const danmakuMove = (event) => {
                    const e = event || window.event;
                    let percentage = (e.clientX - utils.getElementViewLeft(danmakuBarWrap)) / dWidth;
                    percentage = percentage > 0 ? percentage : 0;
                    percentage = percentage < 1 ? percentage : 1;
                    this.updateBar('danmaku', percentage, 'width');
                    const items = this.element.getElementsByClassName('dplayer-danmaku-item');
                    for (let i = 0; i < items.length; i++) {
                        items[i].style.opacity = percentage;
                    }
                    this.danOpacity = percentage;
                    localStorage.setItem('DPlayer-opacity', this.danOpacity);
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
                    const items = this.element.getElementsByClassName('dplayer-danmaku-item');
                    for (let i = 0; i < items.length; i++) {
                        items[i].style.opacity = percentage;
                    }
                    this.danOpacity = percentage;
                    localStorage.setItem('DPlayer-opacity', this.danOpacity);
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

        // danmaku
        this.danTunnel = {
            right: {},
            top: {},
            bottom: {}
        };
        const measureStyle = getComputedStyle(this.element.getElementsByClassName('dplayer-danmaku-item')[0], null);
        const context = document.createElement('canvas').getContext('2d');
        context.font = measureStyle.getPropertyValue('font-size') + ' ' + measureStyle.getPropertyValue('font-family');
        this.danmakuMeasure = (text) => context.measureText(text).width;

        if (this.option.danmaku) {
            this.danIndex = 0;
            this.readDanmaku();
        }
        else {
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

        const htmlEncode = (str) => str.
            replace(/&/g, "&amp;").
            replace(/</g, "&lt;").
            replace(/>/g, "&gt;").
            replace(/"/g, "&quot;").
            replace(/'/g, "&#x27;").
            replace(/\//g, "&#x2f;");

        const sendComment = () => {
            commentInput.blur();

            // text can't be empty
            if (!commentInput.value.replace(/^\s+|\s+$/g, '')) {
                this.notice(this.tran('Please input danmaku content!'));
                return;
            }

            const danmakuData = {
                token: this.option.danmaku.token,
                player: this.option.danmaku.id,
                author: this.option.danmaku.user,
                time: this.video.currentTime(),
                text: commentInput.value,
                color: this.element.querySelector('.dplayer-comment-setting-color input:checked').value,
                type: this.element.querySelector('.dplayer-comment-setting-type input:checked').value
            };
            this.option.apiBackend.send(this.option.danmaku.api, danmakuData);

            commentInput.value = '';
            closeComment();
            this.dan.splice(this.danIndex, 0, danmakuData);
            this.danIndex++;
            const danmaku = {
                text: htmlEncode(danmakuData.text),
                color: danmakuData.color,
                type: danmakuData.type,
                border: `2px solid ${this.option.theme}`
            };
            this.pushDanmaku(danmaku);
        };

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
                clearTimeout(hideTime);
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
        const resetAnimation = () => {
            const danWidth = danContainer.offsetWidth;
            const items = this.element.getElementsByClassName('dplayer-danmaku-item');
            for (let i = 0; i < items.length; i++) {
                items[i].style.transform = `translateX(-${danWidth}px)`;
            }
        };

        this.element.addEventListener('fullscreenchange', () => {
            resetAnimation();
        });
        this.element.addEventListener('mozfullscreenchange', () => {
            resetAnimation();
        });
        this.element.addEventListener('webkitfullscreenchange', () => {
            resetAnimation();
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
                else if (this.video.attr('webkitEnterFullscreen')) {   // Safari for iOS
                    this.video.current.webkitEnterFullscreen();
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
            resetAnimation();
        });
        // web full screen
        this.element.getElementsByClassName('dplayer-full-in-icon')[0].addEventListener('click', () => {
            if (this.element.classList.contains('dplayer-fulled')) {
                this.element.classList.remove('dplayer-fulled');
            }
            else {
                this.element.classList.add('dplayer-fulled');
                resetAnimation();
            }
        });

        /**
         * hot key
         */
        const handleKeyDown = (e) => {
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
                    this.video.seek(this.video.currentTime() - 5);
                    break;
                case 39:
                    event.preventDefault();
                    this.video.seek(this.video.currentTime() + 5);
                    break;
                case 38:
                    event.preventDefault();
                    percentage = this.video.attr('volume') + 0.1;
                    this.volume(percentage);
                    break;
                case 40:
                    event.preventDefault();
                    percentage = this.video.attr('volume') - 0.1;
                    this.volume(percentage);
                    break;
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
                    resetAnimation();
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
                canvas.width = this.video.attr('videoWidth');
                canvas.height = this.video.attr('videoHeight');
                canvas.getContext('2d').drawImage(this.video.current, 0, 0, canvas.width, canvas.height);

                camareIcon.href = canvas.toDataURL();
                camareIcon.download = "DPlayer.png";
            });
        }

        index++;
    }

    /**
     * Play music
     */
    play (time) {
        if (Object.prototype.toString.call(time) === '[object Number]') {
            this.video.seek(time);
        }
        this.paused = false;
        if (this.video.attr('paused')) {
            this.bezel.innerHTML = svg('play');
            this.bezel.classList.add('dplayer-bezel-transition');
        }

        this.playButton.innerHTML = svg('pause');

        this.video.play();
        this.setTime();
        this.element.classList.add('dplayer-playing');
        this.trigger('play');
    }

    /**
     * Pause music
     */
    pause () {
        this.paused = true;
        this.element.classList.remove('dplayer-loading');

        if (!this.video.attr('paused')) {
            this.bezel.innerHTML = svg('pause');
            this.bezel.classList.add('dplayer-bezel-transition');
        }

        this.ended = false;
        this.playButton.innerHTML = svg('play');
        this.video.pause();
        this.clearTime();
        this.element.classList.remove('dplayer-playing');
        this.trigger('pause');
    }

    /**
     * Set volume
     */
    volume (percentage) {
        percentage = percentage > 0 ? percentage : 0;
        percentage = percentage < 1 ? percentage : 1;
        this.updateBar('volume', percentage, 'width');
        this.video.attr('volume', percentage);
        if (this.video.attr('muted')) {
            this.video.attr('muted', false);
        }
        this.switchVolumeIcon();
    }

    /**
     * Toggle between play and pause
     */
    toggle () {
        if (this.video.attr('paused')) {
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
     * Asynchronously read danmaku from all API endpoints
     */
    _readAllEndpoints (endpoints, finish) {
        const results = [];
        let readCount = 0;
        const cbk = (i) => (err, data) => {
            ++readCount;
            if (err) {
                if (err.response) {
                    this.notice(err.response.msg);
                }
                else {
                    this.notice('Request was unsuccessful: ' + err.status);
                }
                results[i] = [];
            }
            else {
                results[i] = data;
            }
            if (readCount === endpoints.length) {
                return finish(results);
            }
        };

        for (let i = 0; i < endpoints.length; ++i) {
            this.option.apiBackend.read(endpoints[i], cbk(i));
        }
    }

    /**
     * Read danmaku from API
     */
    readDanmaku () {
        const isMobile = /mobile/i.test(window.navigator.userAgent);
        let apiurl;
        if (this.option.danmaku.maximum) {
            apiurl = `${this.option.danmaku.api}?id=${this.option.danmaku.id}&max=${this.option.danmaku.maximum}`;
        }
        else {
            apiurl = `${this.option.danmaku.api}?id=${this.option.danmaku.id}`;
        }
        const endpoints = (this.option.danmaku.addition || []).slice(0);
        endpoints.push(apiurl);

        this._readAllEndpoints(endpoints, (results) => {
            this.danIndex = 0;
            this.dan = [].concat.apply([], results).sort((a, b) => a.time - b.time);
            this.element.getElementsByClassName('dplayer-danloading')[0].style.display = 'none';

            // autoplay
            if (this.option.autoplay && !isMobile) {
                this.play();
            }
            else if (isMobile) {
                this.pause();
            }
        });
    }

    /**
     * Push a danmaku into DPlayer
     *
     * @param {Object Array} danmaku - {text, color, type}
     * text - danmaku content
     * color - danmaku color, default: `#fff`
     * type - danmaku type, `right` `top` `bottom`, default: `right`
     */
    pushDanmaku (danmaku) {
        const danContainer = this.element.getElementsByClassName('dplayer-danmaku')[0];
        const itemHeight = this.arrow ? 24 : 30;
        const danWidth = danContainer.offsetWidth;
        const danHeight = danContainer.offsetHeight;
        const itemY = parseInt(danHeight / itemHeight);

        const danItemRight = (ele) => {
            const eleWidth = ele.offsetWidth || parseInt(ele.style.width);
            const eleRight = ele.getBoundingClientRect().right || danContainer.getBoundingClientRect().right + eleWidth;
            return danContainer.getBoundingClientRect().right - eleRight;
        };

        const danSpeed = (width) => (danWidth + width) / 5;

        const getTunnel = (ele, type, width) => {
            const tmp = danWidth / danSpeed(width);

            for (let i = 0; ; i++) {
                const item = this.danTunnel[type][i + ''];
                if (item && item.length) {
                    for (let j = 0; j < item.length; j++) {
                        const danRight = danItemRight(item[j]) - 10;
                        if (danRight <= danWidth - tmp * danSpeed(parseInt(item[j].style.width)) || danRight <= 0) {
                            break;
                        }
                        if (j === item.length - 1) {
                            this.danTunnel[type][i + ''].push(ele);
                            ele.addEventListener('animationend', () => {
                                this.danTunnel[type][i + ''].splice(0, 1);
                            });
                            return i % itemY;
                        }
                    }
                }
                else {
                    this.danTunnel[type][i + ''] = [ele];
                    ele.addEventListener('animationend', () => {
                        this.danTunnel[type][i + ''].splice(0, 1);
                    });
                    return i % itemY;
                }
            }
        };

        if (Object.prototype.toString.call(danmaku) !== '[object Array]') {
            danmaku = [danmaku];
        }

        const docFragment = document.createDocumentFragment();

        for (let i = 0; i < danmaku.length; i++) {
            if (!danmaku[i].type) {
                danmaku[i].type = 'right';
            }
            if (!danmaku[i].color) {
                danmaku[i].color = '#fff';
            }
            const item = document.createElement(`div`);
            item.classList.add(`dplayer-danmaku-item`);
            item.classList.add(`dplayer-danmaku-${danmaku[i].type}`);
            item.innerHTML = danmaku[i].text;
            item.style.opacity = this.danOpacity;
            item.style.color = danmaku[i].color;
            item.style.border = danmaku[i].border;
            item.addEventListener('animationend', () => {
                danContainer.removeChild(item);
            });

            const itemWidth = this.danmakuMeasure(danmaku[i].text);

            // adjust
            switch (danmaku[i].type) {
            case 'right':
                item.style.width = itemWidth + 1 + 'px';
                item.style.top = itemHeight * getTunnel(item, danmaku[i].type, itemWidth) + 'px';
                item.style.transform = `translateX(-${danWidth}px)`;
                break;
            case 'top':
                item.style.top = itemHeight * getTunnel(item, danmaku[i].type) + 'px';
                break;
            case 'bottom':
                item.style.bottom = itemHeight * getTunnel(item, danmaku[i].type) + 'px';
                break;
            default:
                console.error(`Can't handled danmaku type: ${danmaku[i].type}`);
            }

            // move
            item.classList.add(`dplayer-danmaku-move`);

            // insert
            docFragment.appendChild(item);
        }

        danContainer.appendChild(docFragment);

        return docFragment;
    }

    /**
     * Switch to a new video
     *
     * @param {Object} video - new video info
     * @param {Object} danmaku - new danmaku info
     */
    switchVideo (video, danmaku) {
        this.video.attr('poster', video.pic ? video.pic : '');
        this.video.attr('src', video.url);
        this.pause();
        if (danmaku) {
            this.dan = [];
            this.danIndex = 0;
            this.element.getElementsByClassName('dplayer-danloading')[0].style.display = 'block';
            this.updateBar('played', 0, 'width');
            this.updateBar('loaded', 0, 'width');
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = '00:00';
            this.element.getElementsByClassName('dplayer-danmaku')[0].innerHTML = '';
            this.danTuel = {
                right: {},
                top: {},
                bottom: {}
            };
            this.option.danmaku = danmaku;
            this.readDanmaku();
        }
    }

    initVideo () {
        // Support HTTP Live Streaming
        let enablehls;
        if (this.option.video.type === 'auto') {
            enablehls = /m3u8(#|\?|$)/i.exec(this.option.video.url);
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
            hls.attachMedia(this.video.current);
            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                hls.loadSource(this.option.video.url);
                hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                    this.notice("manifest loaded, found " + data.levels.length + " quality level");
                });
            });
        }

        // Support FLV
        let enableflv;
        if (this.option.video.type === 'auto') {
            enableflv = /.flv(#|\?|$)/i.exec(this.option.video.url);
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
            flvPlayer.attachMediaElement(this.video.current);
            flvPlayer.load();
        }

        if (this.option.danmaku) {
            this.video.on('all', 'seeking', () => {
                for (let i = 0; i < this.dan.length; i++) {
                    if (this.dan[i].time >= this.video.currentTime()) {
                        this.danIndex = i;
                        return;
                    }
                    this.danIndex = this.dan.length;
                }
            });
        }


        /**
         * video events
         */
        // show video time: the metadata has loaded or changed
        this.video.on('all', 'durationchange', (i, video) => {
            if (video.duration !== 1) {           // compatibility: Android browsers will output 1 at first
                this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = utils.secondToTime(this.video.duration);
            }
        });

        // show video loaded bar: to inform interested parties of progress downloading the media
        this.video.on('current', 'progress', (i, video) => {
            const percentage = video.buffered.length ? video.buffered.end(video.buffered.length - 1) / video.duration : 0;
            this.updateBar('loaded', percentage, 'width');
        });

        // video download error: an error occurs
        this.video.on('all', 'error', () => {
            this.notice(this.tran('This video fails to load'), -1);
            this.trigger('pause');
        });

        // video can play: enough data is available that the media can be played
        this.video.on('current', 'canplay', () => {
            this.trigger('canplay');
        });

        // music end
        this.ended = false;
        this.video.on('all', 'ended', (i) => {
            if (i === this.video.videos.length - 1) {
                this.updateBar('played', 1, 'width');
                if (!this.loop) {
                    this.ended = true;
                    this.pause();
                    this.trigger('ended');
                }
                else {
                    this.video.switch(0);
                    this.video.play();
                }
                this.danIndex = 0;
            }
        });

        this.video.on('current', 'play', () => {
            if (this.paused) {
                this.play();
            }
        });

        this.video.on('current', 'pause', () => {
            if (!this.paused) {
                this.pause();
            }
        });

        // control volume
        this.video.attr('volume', parseInt(this.element.getElementsByClassName('dplayer-volume-bar-inner')[0].style.width) / 100);
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

        this.video.pause();
        const videoHTML = html.video(false, null, this.option.screenshot, 'auto', this.quality.url);
        const videoEle = new DOMParser().parseFromString(videoHTML, 'text/html').body.firstChild;
        const parent = this.element.getElementsByClassName('dplayer-video-wrap')[0];
        parent.insertBefore(videoEle, parent.getElementsByTagName('div')[0]);
        this.prevVideo = this.video;
        this.video = new Video([videoEle], this.prevVideo.duration);
        this.initVideo();
        this.video.seek(this.prevVideo.currentTime());
        this.notice(`${this.tran('Switching to')} ${this.quality.name} ${this.tran('quality')}`, -1);
        this.video.on('current', 'canplay', () => {
            if (this.prevVideo) {
                if (this.video.currentTime() !== this.prevVideo.currentTime()) {
                    this.video.seek(this.prevVideo.currentTime());
                    return;
                }
                parent.removeChild(this.prevVideo.current);
                this.video.current.classList.add('dplayer-video-current');
                this.video.play();
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

    notice (text, time) {
        const noticeEle = this.element.getElementsByClassName('dplayer-notice')[0];
        noticeEle.innerHTML = text;
        noticeEle.style.opacity = 1;
        if (this.noticeTime) {
            clearTimeout(this.noticeTime);
        }
        if (time && time < 0) {
            return;
        }
        this.noticeTime = setTimeout(() => {
            noticeEle.style.opacity = 0;
        }, time || 2000);
    }
}

module.exports = DPlayer;
