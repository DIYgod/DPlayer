class Subtitle {
    constructor(container, video, options, events) {
        this.container = container;
        this.video = video;
        this.options = options;
        this.events = events;

        this.init();
    }

    init() {
        this.container.style.fontSize = this.options.fontSize;
        this.container.style.bottom = this.options.bottom;
        this.container.style.color = this.options.color;

        if (this.video.textTracks && this.video.textTracks[0]) {
            const track = this.video.textTracks[0];

            track.oncuechange = () => {
                const cue = track.activeCues[track.activeCues.length - 1];
                this.container.innerHTML = '';
                if (cue) {
                    const fragment = cue.getCueAsHTML();
                    const lines = Array.from(fragment.childNodes);
                    for (const node of lines) {
                        const p = document.createElement('p');
                        p.appendChild(node.cloneNode ? node.cloneNode(true) : document.createTextNode(node.textContent));
                        this.container.appendChild(p);
                    }
                }
                this.events.trigger('subtitle_change');
            };
        }
    }

    show() {
        this.container.classList.remove('dplayer-subtitle-hide');
        this.events.trigger('subtitle_show');
    }

    hide() {
        this.container.classList.add('dplayer-subtitle-hide');
        this.events.trigger('subtitle_hide');
    }

    toggle() {
        if (this.container.classList.contains('dplayer-subtitle-hide')) {
            this.show();
        } else {
            this.hide();
        }
    }
}

export default Subtitle;
