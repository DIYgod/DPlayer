(() => {

    class DPlayer {
    /**
     * DPlayer constructor function
     *
     * @param {Object} option - See README
     * @constructor
     */
    constructor(option) {
        this.svg = {
            'play': ['0 0 16 32', 'M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z'],
            'pause': ['0 0 17 32', 'M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z'],
            'volume-up': ['0 0 30 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z'],
            'volume-down': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z'],
            'volume-off': ['0 0 14 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z'],
            'loop': ['0 0 32 32', 'M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z'],
            'full': ['0 0 32 32', 'M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z']
        };

        this.isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
        // compatibility: some mobile browsers don't suppose autoplay
        if (this.isMobile) {
            option.autoplay = false;
        }

        // default options
        const defaultOption = {
            element: document.getElementsByClassName('dplayer')[0],
            autoplay: false,
            theme: '#b7daff'
        };
        for (let defaultKey in defaultOption) {
            if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
                option[defaultKey] = defaultOption[defaultKey];
            }
        }

        this.option = option;
        this.audios = [];
        this.loop = true;

        /**
         * Parse second to 00:00 format
         *
         * @param {Number} second
         * @return {String} 00:00 format
         */
        this.secondToTime = (second) => {
            const add0 = (num) => {
                return num < 10 ? '0' + num : '' + num;
            };
            const min = parseInt(second / 60);
            const sec = parseInt(second - min * 60);
            return add0(min) + ':' + add0(sec);
        };

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
            this[type + 'Bar'].style[direction] = percentage * 100 + '%';
        };

        // define DPlayer events
        this.eventTypes = ['play', 'pause', 'canplay', 'playing', 'ended', 'error'];
        this.event = {};
        for (let type of this.eventTypes) {
            this.event[type] = [];
        }
        this.trigger = (type) => {
            for (let func of this.event[type]) {
                func();
            }
        }
    };

    /**
     * AutoLink initialization function
     */
    init() {
        this.element = this.option.element;

        // control play progress
        this.playedBar = this.element.getElementsByClassName('dplayer-played')[0];
        this.loadedBar = this.element.getElementsByClassName('dplayer-loaded')[0];
        this.thumb = this.element.getElementsByClassName('dplayer-thumb')[0];
        this.bar = this.element.getElementsByClassName('dplayer-bar')[0];
        let barWidth;
        this.bar.addEventListener('click', (event) => {
            const e = event || window.event;
            barWidth = this.bar.clientWidth;
            const percentage = (e.clientX - getElementViewLeft(this.bar)) / barWidth;
            this.updateBar('played', percentage, 'width');
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = this.secondToTime(percentage * this.audio.duration);
            this.audio.currentTime = parseFloat(this.playedBar.style.width) / 100 * this.audio.duration;
        });

        this.thumb.addEventListener('mouseover', () => {
            this.thumb.style.background = this.option.theme;
        });
        this.thumb.addEventListener('mouseout', () => {
            this.thumb.style.background = '#fff';
        });

        const thumbMove = (event) => {
            const e = event || window.event;
            let percentage = (e.clientX - getElementViewLeft(this.bar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('played', percentage, 'width');
            if (this.option.showlrc) {
                this.updateLrc(parseFloat(this.playedBar.style.width) / 100 * this.audio.duration);
            }
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = this.secondToTime(percentage * this.audio.duration);
        };

        const thumbUp = () => {
            document.removeEventListener('mouseup', thumbUp);
            document.removeEventListener('mousemove', thumbMove);
            this.audio.currentTime = parseFloat(this.playedBar.style.width) / 100 * this.audio.duration;
            this.play();
        };

        this.thumb.addEventListener('mousedown', () => {
            barWidth = this.bar.clientWidth;
            clearInterval(this.playedTime);
            document.addEventListener('mousemove', thumbMove);
            document.addEventListener('mouseup', thumbUp);
        });

        // control volume
        // this.volumeBar = this.element.getElementsByClassName('dplayer-volume')[0];
        // const volumeBarWrap = this.element.getElementsByClassName('dplayer-volume-bar')[0];
        // const volumeicon = this.element.getElementsByClassName('dplayer-time')[0].getElementsByTagName('i')[0];
        // const barHeight = 35;
        // this.element.getElementsByClassName('dplayer-volume-bar-wrap')[0].addEventListener('click', (event) => {
        //     const e = event || window.event;
        //     let percentage = (barHeight - e.clientY + getElementViewTop(volumeBarWrap)) / barHeight;
        //     percentage = percentage > 0 ? percentage : 0;
        //     percentage = percentage < 1 ? percentage : 1;
        //     this.updateBar('volume', percentage, 'height');
        //     this.audio.volume = percentage;
        //     if (this.audio.muted) {
        //         this.audio.muted = false;
        //     }
        //     if (percentage === 1) {
        //         volumeicon.className = 'demo-icon dplayer-icon-volume-up';
        //     }
        //     else {
        //         volumeicon.className = 'demo-icon dplayer-icon-volume-down';
        //     }
        // });
        // volumeicon.addEventListener('click', () => {
        //     if (this.audio.muted) {
        //         this.audio.muted = false;
        //         volumeicon.className = this.audio.volume === 1 ? 'demo-icon dplayer-icon-volume-up' : 'demo-icon dplayer-icon-volume-down';
        //         this.updateBar('volume', this.audio.volume, 'height');
        //     }
        //     else {
        //         this.audio.muted = true;
        //         volumeicon.className = 'demo-icon dplayer-icon-volume-off';
        //         this.updateBar('volume', 0, 'height');
        //     }
        // });

        // get element's view position
        // function getElementViewLeft(element) {
        //     let actualLeft = element.offsetLeft;
        //     let current = element.offsetParent;
        //     let elementScrollLeft;
        //     while (current !== null) {
        //         actualLeft += current.offsetLeft;
        //         current = current.offsetParent;
        //     }
        //     elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
        //     return actualLeft - elementScrollLeft;
        // }
        //
        // function getElementViewTop(element) {
        //     let actualTop = element.offsetTop;
        //     let current = element.offsetParent;
        //     let elementScrollTop;
        //     while (current !== null) {
        //         actualTop += current.offsetTop;
        //         current = current.offsetParent;
        //     }
        //     elementScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
        //     return actualTop - elementScrollTop;
        // }

        // loop control
        const loopEle = this.element.getElementsByClassName('dplayer-looploop')[0];
        loopEle.addEventListener('click', () => {
            if (this.loop) {
                loopEle.classList.add('dplayer-noloop');
                this.loop = false;
                this.audio.loop = this.multiple ? false : this.loop;
            }
            else {
                loopEle.classList.remove('dplayer-noloop');
                this.loop = true;
                this.audio.loop = this.multiple ? false : this.loop;
            }
        });

        // get this audio object
        this.audio = this.element.getElementsByClassName('dplayer-video')[0];

        // show audio time: the metadata has loaded or changed
        this.audio.addEventListener('durationchange', () => {
            if (this.audio.duration !== 1) {           // compatibility: Android browsers will output 1 at first
                this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = this.secondToTime(this.audio.duration);
            }
        });

        // show audio loaded bar: to inform interested parties of progress downloading the media
        this.audio.addEventListener('progress', () => {
            const percentage = this.audio.buffered.length ? this.audio.buffered.end(this.audio.buffered.length - 1) / this.audio.duration : 0;
            this.updateBar('loaded', percentage, 'width');
        });

        // audio download error: an error occurs
        this.audio.addEventListener('error', () => {
            this.element.getElementsByClassName('dplayer-author')[0].innerHTML = ` - Error happens ╥﹏╥`;
            this.trigger('pause');
        });

        // audio can play: enough data is available that the media can be played
        this.audio.addEventListener('canplay', () => {
            this.trigger('canplay');
        });

        // multiple music play
        this.ended = false;
        this.audio.addEventListener('ended', () => {
            if (!this.loop) {
                this.ended = true;
                this.pause();
                this.trigger('ended');
            }
        });

        // control volume
        this.audio.volume = parseInt(this.element.getElementsByClassName('dplayer-volume')[0].style.height) / 100;

        // loop
        this.audio.loop = this.multiple ? false : this.loop;

        if (this.multiple) {
            this.audios[indexMusic] = this.audio;
        }

        // set duration time
        if (this.audio.duration !== 1) {           // compatibility: Android browsers will output 1 at first
            this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = this.audio.duration ? this.secondToTime(this.audio.duration) : '00:00';
        }

        // autoplay
        if (this.option.autoplay && !this.isMobile) {
            this.play();
        }
        this.option.autoplay = true;  // autoplay next music

        if (this.isMobile) {
            this.pause();
        }
    }

    /**
     * Play music
     */
    play() {
        if (this.audio.paused) {
            this.button.classList.remove('dplayer-play');
            this.button.classList.add('dplayer-pause');
            this.button.innerHTML = '';
            setTimeout(() => {
                this.button.innerHTML = '<i class="demo-icon dplayer-icon-pause"></i>';
            }, 100);

            this.audio.play();
            if (this.playedTime) {
                clearInterval(this.playedTime);
            }
            this.playedTime = setInterval(() => {
                this.updateBar('played', this.audio.currentTime / this.audio.duration, 'width');
                if (this.option.showlrc) {
                    this.updateLrc();
                }
                this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = this.secondToTime(this.audio.currentTime);
                this.trigger('playing');
            }, 100);
            this.trigger('play');
        }
    }

    /**
     * Pause music
     */
    pause() {
        if (!this.audio.paused || this.ended) {
            this.ended = false;
            this.button.classList.remove('dplayer-pause');
            this.button.classList.add('dplayer-play');
            this.button.innerHTML = '';
            setTimeout(() => {
                this.button.innerHTML = '<i class="demo-icon dplayer-icon-play"></i>';
            }, 100);
            this.audio.pause();
            clearInterval(this.playedTime);
            this.trigger('pause');
        }
    }

    /**
     * attach event
     */
    on(name, func) {
        if (typeof func === 'function') {
            this.event[name].push(func);
        }
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = DPlayer
}
else {
    window.DPlayer = DPlayer;
}
})();