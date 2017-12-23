import utils from './utils';

class Time {
    constructor (player) {
        this.player = player;

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

        this.types = ['loading', 'progress'];

        this.init();
    }

    init () {
        for (let i = 0; i < this.types.length; i++) {
            const type = this.types[i];
            this[`init${type}Checker`]();
        }
    }

    initloadingChecker () {
        let lastPlayPos = 0;
        let currentPlayPos = 0;
        let bufferingDetected = false;
        this.loadingChecker = setInterval(() => {
            if (this.enableloadingChecker) {
                // whether the video is buffering
                currentPlayPos = this.player.video.currentTime;
                if (!bufferingDetected
                    && currentPlayPos === lastPlayPos
                    && !this.player.video.paused) {
                    this.player.container.classList.add('dplayer-loading');
                    bufferingDetected = true;
                }
                if (bufferingDetected
                    && currentPlayPos > lastPlayPos
                    && !this.player.video.paused) {
                    this.player.container.classList.remove('dplayer-loading');
                    bufferingDetected = false;
                }
                lastPlayPos = currentPlayPos;
            }
        }, 100);
    }

    initprogressChecker () {
        this.progressChecker = setInterval(() => {
            if (this.enableprogressChecker) {
                this.player.bar.set('played', this.player.video.currentTime / this.player.video.duration, 'width');
                const currentTime = utils.secondToTime(this.player.video.currentTime);
                if (this.player.template.ptime.innerHTML !== currentTime) {
                    this.player.template.ptime.innerHTML = utils.secondToTime(this.player.video.currentTime);
                }
            }
        }, 100);
    }

    enable (type) {
        if (type) {
            this[`enable${type}Checker`] = true;
        }
        else {
            for (let i = 0; i < this.types.length; i++) {
                const type = this.types[i];
                this[`enable${type}Checker`] = true;
            }
        }
    }

    disable (type) {
        if (type) {
            this[`enable${type}Checker`] = false;
        }
        else {
            for (let i = 0; i < this.types.length; i++) {
                const type = this.types[i];
                this[`enable${type}Checker`] = false;
            }
        }
    }

    distroy (type) {
        if (type) {
            clearInterval(this[`${type}Checker`]);
        }
        else {
            for (let i = 0; i < this.types.length; i++) {
                clearInterval(this[`${this.types[i]}Checker`]);
            }
        }
    }
}

module.exports = Time;