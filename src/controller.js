import { isMobile } from './utils';

class Controller {
    constructor (player) {
        this.player = player;

        this.autoHideTimer = 0;
        if (!isMobile) {
            this.player.container.addEventListener('mousemove', () => {
                this.setAutoHide();
            });
            this.player.container.addEventListener('click', () => {
                this.setAutoHide();
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
        this.player.comment.hide();
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

module.exports = Controller;