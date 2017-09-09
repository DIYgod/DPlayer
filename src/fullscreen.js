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
        this.player.element.addEventListener('fullscreenchange', fullscreenchange);
        this.player.element.addEventListener('mozfullscreenchange', fullscreenchange);
        this.player.element.addEventListener('webkitfullscreenchange', fullscreenchange);
    }

    isFullScreen (type = 'browser') {
        switch (type) {
        case 'browser':
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        case 'web':
            return this.player.element.classList.contains('dplayer-fulled');
        }
    }

    request (type = 'browser') {
        switch (type) {
        case 'browser':
            if (this.player.element.requestFullscreen) {
                this.player.element.requestFullscreen();
            }
            else if (this.player.element.mozRequestFullScreen) {
                this.player.element.mozRequestFullScreen();
            }
            else if (this.player.element.webkitRequestFullscreen) {
                this.player.element.webkitRequestFullscreen();
            }
            else if (this.player.video.webkitEnterFullscreen) {   // Safari for iOS
                this.player.video.webkitEnterFullscreen();
            }
            break;
        case 'web':
            this.player.element.classList.add('dplayer-fulled');
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
            this.player.element.classList.remove('dplayer-fulled');
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