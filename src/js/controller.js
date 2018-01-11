import utils from './utils';
import Thumbnails from './thumbnails';

class Controller {
    constructor (player) {
        this.player = player;

        this.autoHideTimer = 0;
        if (!utils.isMobile) {
            this.player.container.addEventListener('mousemove', () => {
                this.setAutoHide();
            });
            this.player.container.addEventListener('click', () => {
                this.setAutoHide();
            });
        }

        this.initPlayButton();
        this.initThumbnails();
        this.initPlayedBar();
        this.initFullButton();
        this.initVolumeButton();
        this.initQualityButton();
        this.initScreenshotButton();
        this.initSubtitleButton();
    }

    initPlayButton () {
        this.player.template.playButton.addEventListener('click', () => {
            this.player.toggle();
        });

        if (!utils.isMobile) {
            this.player.template.videoWrap.addEventListener('click', () => {
                this.player.toggle();
            });
            this.player.template.controllerMask.addEventListener('click', () => {
                this.player.toggle();
            });
        }
        else {
            this.player.template.videoWrap.addEventListener('click', () => {
                this.toggle();
            });
            this.player.template.controllerMask.addEventListener('click', () => {
                this.toggle();
            });
        }
    }

    initThumbnails () {
        if (this.player.options.video.thumbnails) {
            this.thumbnails = new Thumbnails({
                container: this.player.template.barPreview,
                barWidth: this.player.template.barWrap.offsetWidth,
                url: this.player.options.video.thumbnails,
                events: this.player.events
            });

            this.player.on('loadedmetadata', () => {
                this.thumbnails.resize(160, this.player.video.videoHeight / this.player.video.videoWidth * 160);
            });
        }
    }

    initPlayedBar () {
        const thumbMove = (e) => {
            let percentage = (e.clientX - utils.getElementViewLeft(this.player.template.playedBarWrap)) / this.player.template.playedBarWrap.clientWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.player.bar.set('played', percentage, 'width');
            this.player.template.ptime.innerHTML = utils.secondToTime(percentage * this.player.video.duration);
        };

        const thumbUp = (e) => {
            document.removeEventListener('mouseup', thumbUp);
            document.removeEventListener('mousemove', thumbMove);
            let percentage = (e.clientX - utils.getElementViewLeft(this.player.template.playedBarWrap)) / this.player.template.playedBarWrap.clientWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.player.bar.set('played', percentage, 'width');
            this.player.seek(this.player.bar.get('played') * this.player.video.duration);
            this.player.time.enable('progress');
        };

        this.player.template.playedBarWrap.addEventListener('mousedown', () => {
            this.player.time.disable('progress');
            document.addEventListener('mousemove', thumbMove);
            document.addEventListener('mouseup', thumbUp);
        });

        this.player.template.playedBarWrap.addEventListener('mousemove', (e) => {
            if (this.player.video.duration) {
                const px = utils.cumulativeOffset(this.player.template.playedBarWrap).left;
                const tx = e.clientX - px;
                if (tx < 0 || tx > this.player.template.playedBarWrap.offsetWidth) {
                    return;
                }
                const time = this.player.video.duration * (tx / this.player.template.playedBarWrap.offsetWidth);
                this.thumbnails && this.thumbnails.move(tx);
                this.player.template.playedBarTime.style.left = `${(tx - 20)}px`;
                this.player.template.playedBarTime.innerText = utils.secondToTime(time);
                this.player.template.playedBarTime.classList.remove('hidden');
            }
        });

        this.player.template.playedBarWrap.addEventListener('mouseenter', () => {
            if (this.player.video.duration) {
                this.thumbnails && this.thumbnails.show();
                this.player.template.playedBarTime.classList.remove('hidden');
            }
        });

        this.player.template.playedBarWrap.addEventListener('mouseleave', () => {
            if (this.player.video.duration) {
                this.thumbnails && this.thumbnails.hide();
                this.player.template.playedBarTime.classList.add('hidden');
            }
        });
    }

    initFullButton () {
        this.player.template.browserFullButton.addEventListener('click', () => {
            this.player.fullScreen.toggle('browser');
        });

        this.player.template.webFullButton.addEventListener('click', () => {
            this.player.fullScreen.toggle('web');
        });
    }

    initVolumeButton () {
        const vWidth = 35;

        const volumeMove = (event) => {
            const e = event || window.event;
            const percentage = (e.clientX - utils.getElementViewLeft(this.player.template.volumeBarWrap) - 5.5) / vWidth;
            this.player.volume(percentage);
        };
        const volumeUp = () => {
            document.removeEventListener('mouseup', volumeUp);
            document.removeEventListener('mousemove', volumeMove);
            this.player.template.volumeButton.classList.remove('dplayer-volume-active');
        };

        this.player.template.volumeBarWrapWrap.addEventListener('click', (event) => {
            const e = event || window.event;
            const percentage = (e.clientX - utils.getElementViewLeft(this.player.template.volumeBarWrap) - 5.5) / vWidth;
            this.player.volume(percentage);
        });
        this.player.template.volumeBarWrapWrap.addEventListener('mousedown', () => {
            document.addEventListener('mousemove', volumeMove);
            document.addEventListener('mouseup', volumeUp);
            this.player.template.volumeButton.classList.add('dplayer-volume-active');
        });
        this.player.template.volumeIcon.addEventListener('click', () => {
            if (this.player.video.muted) {
                this.player.video.muted = false;
                this.player.switchVolumeIcon();
                this.player.bar.set('volume', this.player.volume(), 'width');
            }
            else {
                this.player.video.muted = true;
                this.player.template.volumeIcon.innerHTML = this.player.icons.get('volume-off');
                this.player.bar.set('volume', 0, 'width');
            }
        });
    }

    initQualityButton () {
        if (this.player.options.video.quality) {
            this.player.template.qualityList.addEventListener('click', (e) => {
                if (e.target.classList.contains('dplayer-quality-item')) {
                    this.player.switchQuality(e.target.dataset.index);
                }
            });
        }
    }

    initScreenshotButton () {
        if (this.player.options.screenshot) {
            this.player.template.camareButton.addEventListener('click', () => {
                const canvas = document.createElement("canvas");
                canvas.width = this.player.video.videoWidth;
                canvas.height = this.player.video.videoHeight;
                canvas.getContext('2d').drawImage(this.player.video, 0, 0, canvas.width, canvas.height);

                const dataURL = canvas.toDataURL();
                this.player.template.camareButton.href = dataURL;
                this.player.template.camareButton.download = "DPlayer.png";

                this.player.events.trigger('screenshot', dataURL);
            });
        }
    }

    initSubtitleButton () {
        if (this.player.options.subtitle) {
            this.player.events.on('subtitle_show', () => {
                this.player.template.subtitleButton.dataset.balloon = this.player.tran('Hide subtitle');
                this.player.template.subtitleButtonInner.style.opacity = '';
                this.player.user.set('subtitle', 1);
            });
            this.player.events.on('subtitle_hide', () => {
                this.player.template.subtitleButton.dataset.balloon = this.player.tran('Show subtitle');
                this.player.template.subtitleButtonInner.style.opacity = '0.4';
                this.player.user.set('subtitle', 0);
            });

            this.player.template.subtitleButton.addEventListener('click', () => {
                this.player.subtitle.toggle();
            });
        }
    }

    setAutoHide () {
        this.show();
        clearTimeout(this.autoHideTimer);
        this.autoHideTimer = setTimeout(() => {
            if (this.player.video.played.length && !this.disableAutoHide) {
                this.hide();
            }
        }, 2000);
    }

    show () {
        this.player.container.classList.remove('dplayer-hide-controller');
    }

    hide () {
        this.player.container.classList.add('dplayer-hide-controller');
        this.player.setting.hide();
        this.player.comment && this.player.comment.hide();
    }

    isShow () {
        return !this.player.container.classList.contains('dplayer-hide-controller');
    }

    toggle () {
        if (this.isShow()) {
            this.hide();
        }
        else {
            this.show();
        }
    }

    destroy () {
        clearTimeout(this.autoHideTimer);
    }
}

export default Controller;