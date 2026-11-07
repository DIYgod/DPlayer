/* global DPLAYER_VERSION GIT_HASH */

class InfoPanel {
    constructor(player) {
        this.container = player.template.infoPanel;
        this.template = player.template;
        this.video = player.video;
        this.player = player;

        this.template.infoPanelClose.addEventListener('click', () => {
            this.hide();
        });
    }

    show() {
        this.beginTime = Date.now();
        this.update();
        this.player.timer.enable('info');
        this.player.timer.enable('fps');
        this.container.classList.remove('dplayer-info-panel-hide');
    }

    hide() {
        this.player.timer.disable('info');
        this.player.timer.disable('fps');
        this.container.classList.add('dplayer-info-panel-hide');
    }

    triggle() {
        if (this.container.classList.contains('dplayer-info-panel-hide')) {
            this.show();
        } else {
            this.hide();
        }
    }

    update() {
        this.template.infoVersion.textContent = `v${DPLAYER_VERSION} ${GIT_HASH}`;
        this.template.infoType.textContent = this.player.type;
        this.template.infoUrl.textContent = this.player.options.video.url;
        this.template.infoResolution.textContent = `${this.player.video.videoWidth} x ${this.player.video.videoHeight}`;
        this.template.infoDuration.textContent = this.player.video.duration;
        if (this.player.options.danmaku) {
            this.template.infoDanmakuId.textContent = this.player.options.danmaku.id;
            this.template.infoDanmakuApi.textContent = this.player.options.danmaku.api;
            this.template.infoDanmakuAmount.textContent = this.player.danmaku.dan.length;
        }
    }

    fps(value) {
        this.template.infoFPS.textContent = `${value.toFixed(1)}`;
    }

    toggle() {
        if (this.container.classList.contains('dplayer-info-panel-hide')) {
            this.show();
        } else {
            this.hide();
        }
    }
}

export default InfoPanel;
