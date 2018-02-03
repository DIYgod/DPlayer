class InfoPanel {
    constructor (player) {
        this.container = player.template.infoPanel;
        this.video = player.video;
    }

    show () {
        this.container.classList.remove('dplayer-info-panel-hide');
    }

    hide () {
        this.container.classList.add('dplayer-info-panel-hide');
    }

    triggle () {
        if (this.container.classList.contains('dplayer-info-panel-hide')) {
            this.show();
        }
        else {
            this.hide();
        }
    }

    update () {

    }
}

export default InfoPanel;