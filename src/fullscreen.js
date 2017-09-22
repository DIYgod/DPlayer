import utils from './utils';

class FullScreen {
    constructor (player) {
        this.player = player;

        this.player.events.on('webfullscreen', () => {
            this.player.resize();
        });
        this.player.events.on('webfullscreen_cancel', () => {
            this.player.resize();
        });

        const fullscreenchange = () => {
            this.player.resize();
            if (this.isFullScreen('browser')) {
                this.player.events.trigger('fullscreen');
            }
            else {
                this.player.events.trigger('fullscreen_cancel');
            }
        };
        this.player.container.addEventListener('fullscreenchange', fullscreenchange);
        this.player.container.addEventListener('mozfullscreenchange', fullscreenchange);
        this.player.container.addEventListener('webkitfullscreenchange', fullscreenchange);
    }

    isFullScreen (type = 'browser') {
        switch (type) {
        case 'browser':
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        case 'web':
            return this.player.container.classList.contains('dplayer-fulled');
        }
    }

    request (type = 'browser') {
        switch (type) {
        case 'browser':
            if (this.player.container.requestFullscreen) {
                this.player.container.requestFullscreen();
            }
            else if (this.player.container.mozRequestFullScreen) {
                this.player.container.mozRequestFullScreen();
            }
            else if (this.player.container.webkitRequestFullscreen) {
                this.player.container.webkitRequestFullscreen();
            }
            else if (this.player.video.webkitEnterFullscreen) {   // Safari for iOS
                this.player.video.webkitEnterFullscreen();
            }
            break;
        case 'web':
            this.player.container.classList.add('dplayer-fulled');

            // record last position then hide scrollbars
            this.lastScrollPosition = utils.getScrollPosition();
            document.body.classList.add('dplayer-web-fullscreen-fix');

            this.player.events.trigger('webfullscreen');
            break;
        }
    }

    cancel (type = 'browser') {
        switch (type) {
        case 'browser':
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            break;
        case 'web':
            this.player.container.classList.remove('dplayer-fulled');

            // restore scrollbars and last position
            document.body.classList.remove('dplayer-web-fullscreen-fix');
            utils.setScrollPosition(this.lastScrollPosition);

            this.player.events.trigger('webfullscreen_cancel');
            break;
        }
    }

    toggle (type = 'browser') {
        if (this.isFullScreen(type)) {
            this.cancel(type);
        }
        else {
            this.request(type);
        }
    }
}

module.exports = FullScreen;