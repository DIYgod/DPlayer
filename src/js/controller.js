import utils from './utils';
import Thumbnails from './thumbnails';
import Icons from './icons';

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
            this.player.on('play', () => {
                this.setAutoHide();
            });
            this.player.on('pause', () => {
                this.setAutoHide();
            });
        }

        this.initPlayButton();
        this.initThumbnails();
        this.initPlayedBar();
        this.initFullButton();
        this.initQualityButton();
        this.initScreenshotButton();
        this.initSubtitleButton();
        if (!utils.isMobile) {
            this.initVolumeButton();
        }
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
            let percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getElementViewLeft(this.player.template.playedBarWrap)) / this.player.template.playedBarWrap.clientWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.player.bar.set('played', percentage, 'width');
            this.player.template.ptime.innerHTML = utils.secondToTime(percentage * this.player.video.duration);
        };

        const thumbUp = (e) => {
            document.removeEventListener(utils.nameMap.dragEnd, thumbUp);
            document.removeEventListener(utils.nameMap.dragMove, thumbMove);
            let percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getElementViewLeft(this.player.template.playedBarWrap)) / this.player.template.playedBarWrap.clientWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            this.player.bar.set('played', percentage, 'width');
            this.player.seek(this.player.bar.get('played') * this.player.video.duration);
            this.player.time.enable('progress');
        };

        this.player.template.playedBarWrap.addEventListener(utils.nameMap.dragStart, () => {
            this.player.time.disable('progress');
            document.addEventListener(utils.nameMap.dragMove, thumbMove);
            document.addEventListener(utils.nameMap.dragEnd, thumbUp);
        });

        this.player.template.playedBarWrap.addEventListener(utils.nameMap.dragMove, (e) => {
            if (this.player.video.duration) {
                const px = utils.cumulativeOffset(this.player.template.playedBarWrap).left;
                const tx = (e.clientX || e.changedTouches[0].clientX) - px;
                if (tx < 0 || tx > this.player.template.playedBarWrap.offsetWidth) {
                    return;
                }
                const time = this.player.video.duration * (tx / this.player.template.playedBarWrap.offsetWidth);
                if (utils.isMobile) {
                    this.thumbnails && this.thumbnails.show();
                }
                this.thumbnails && this.thumbnails.move(tx, this.player.template.playedBarWrap.offsetWidth);
                this.player.template.playedBarTime.style.left = `${(tx - 20)}px`;
                this.player.template.playedBarTime.innerText = utils.secondToTime(time);
                this.player.template.playedBarTime.classList.remove('hidden');
            }
        });

        this.player.template.playedBarWrap.addEventListener(utils.nameMap.dragEnd, () => {
            if (utils.isMobile) {
                this.thumbnails && this.thumbnails.hide();
            }
        });

        if (!utils.isMobile) {
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
            const percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getElementViewLeft(this.player.template.volumeBarWrap) - 5.5) / vWidth;
            this.player.volume(percentage);
        };
        const volumeUp = () => {
            document.removeEventListener(utils.nameMap.dragEnd, volumeUp);
            document.removeEventListener(utils.nameMap.dragMove, volumeMove);
            this.player.template.volumeButton.classList.remove('dplayer-volume-active');
        };

        this.player.template.volumeBarWrapWrap.addEventListener('click', (event) => {
            const e = event || window.event;
            const percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getElementViewLeft(this.player.template.volumeBarWrap) - 5.5) / vWidth;
            this.player.volume(percentage);
        });
        this.player.template.volumeBarWrapWrap.addEventListener(utils.nameMap.dragStart, () => {
            document.addEventListener(utils.nameMap.dragMove, volumeMove);
            document.addEventListener(utils.nameMap.dragEnd, volumeUp);
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
                this.player.template.volumeIcon.innerHTML = Icons.volumeOff;
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
                const canvas = document.createElement('canvas');
                canvas.width = this.player.video.videoWidth;
                canvas.height = this.player.video.videoHeight;
                canvas.getContext('2d').drawImage(this.player.video, 0, 0, canvas.width, canvas.height);

                let dataURL;
                canvas.toBlob((blob) => {
                    dataURL = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = dataURL;
                    link.download = 'DPlayer.png';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(dataURL);
                });

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
            if (this.player.video.played.length && !this.player.paused && !this.disableAutoHide) {
                this.hide();
            }
        }, 3000);
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
