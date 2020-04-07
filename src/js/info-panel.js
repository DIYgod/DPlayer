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
        this.template.infoVersion.innerHTML = `v${DPLAYER_VERSION} ${GIT_HASH}`;
        this.template.infoType.innerHTML = this.player.type;
        this.template.infoUrl.innerHTML = this.player.options.video.url;
        this.template.infoResolution.innerHTML = `${this.player.video.videoWidth} x ${this.player.video.videoHeight}`;
        this.template.infoDuration.innerHTML = this.player.video.duration;
        if (this.player.options.danmaku) {
            this.template.infoDanmakuId.innerHTML = this.player.options.danmaku.id;
            this.template.infoDanmakuApi.innerHTML = this.player.options.danmaku.api;
            this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length;
        }
        if (this.player.options.musicRecognition.isActive) {
            this.musicRecognitionApi();
            this.template.infoMusicRecognitionTitle.innerHTML = localStorage.getItem('title');
            this.template.infoMusicRecognitionArtist.innerHTML = localStorage.getItem('artist');
            this.template.infoMusicRecognitionTitleLyrics.innerHTML = "<a href='" + localStorage.getItem('lyrics') + '\' target="_blank">' + localStorage.getItem('lyrics') + '</a>';
        }
    }

    musicRecognitionApi() {
        const request = require('request');

        const options = {
            method: 'GET',
            url: 'https://genius.p.rapidapi.com/search',
            qs: { q: this.player.options.musicRecognition.songSearch.toString() },
            headers: {
                'x-rapidapi-host': this.player.options.musicRecognition.apiUrl.toString(),
                'x-rapidapi-key': this.player.options.musicRecognition.apiKey.toString(),
            },
        };

        request(options, function(error, response, body) {
            if (error) {
                throw new Error(error);
            }

            const obj = JSON.parse(body);
            localStorage.setItem('title', obj.response.hits[0].result.title.toString());
            localStorage.setItem('artist', obj.response.hits[0].result.primary_artist.name.toString());
            localStorage.setItem('lyrics', obj.response.hits[0].result.url.toString());
        });
    }

    fps(value) {
        this.template.infoFPS.innerHTML = `${value.toFixed(1)}`;
    }
}

export default InfoPanel;
