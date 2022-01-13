class Subtitles {
    constructor(player) {
        this.player = player;

        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });
        this.player.template.subtitlesButton.addEventListener('click', () => {
            this.show();
        });

        for (let i = 0; i < this.player.template.subtitlesItem.length; i++) {
            this.player.template.subtitlesItem[i].addEventListener('click', () => {
                this.hide();
                // clear subtitle show for new subtitle don't have now duration time. If don't, will display last subtitle.
                this.player.template.subtitle.innerHTML = `<p></p>`;
                // update video track src
                this.player.template.subtrack.src = this.player.template.subtitlesItem[i].dataset.subtitle;
                // update options current subindex for reload (such as changeQuality)
                this.player.options.subtitle.index = i;
            });
        }
    }

    hide() {
        this.player.template.subtitlesBox.classList.remove('dplayer-subtitles-box-open');
        this.player.template.mask.classList.remove('dplayer-mask-show');
        this.player.controller.disableAutoHide = false;
    }

    show() {
        this.player.template.subtitlesBox.classList.add('dplayer-subtitles-box-open');
        this.player.template.mask.classList.add('dplayer-mask-show');
        this.player.controller.disableAutoHide = true;
    }
}

export default Subtitles;
