class Subtitle {
    constructor (container, video, options) {
        this.container = container;
        this.video = video;
        this.options = options;

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
            };
        }
    }
}

module.exports = Subtitle;