class Subtitle {
    constructor (container, video, options, events) {
        this.container = container;
        this.video = video;
        this.options = options;
        this.events = events;

        this.init();
    }

    init () {
        this.container.style.fontSize = this.options.fontSize;
        this.container.style.bottom = this.options.bottom;
        this.container.style.color = this.options.color;

        if (this.video.textTracks && this.video.textTracks[0]) {
            const track = this.video.textTracks[0];

            track.oncuechange = () => {
                const cue = track.activeCues[0];
                if (cue) {
                    this.container.innerHTML = '';
                    const p = document.createElement('p');
                    p.appendChild(cue.getCueAsHTML());
                    this.container.appendChild(p);
                }
                else {
                    this.container.innerHTML = '';
                }
                this.events.trigger('subtitle_change');
            };
        }
    }

    show () {
        this.container.classList.remove('dplayer-subtitle-hide');
        this.events.trigger('subtitle_show');
    }

    hide () {
        this.container.classList.add('dplayer-subtitle-hide');
        this.events.trigger('subtitle_hide');
    }

    toggle () {
        if (this.container.classList.contains('dplayer-subtitle-hide')) {
            this.show();
        }
        else {
            this.hide();
        }
    }
}

export default Subtitle;