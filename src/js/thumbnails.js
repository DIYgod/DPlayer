class Thumbnails {
    constructor (options) {
        this.container = options.container;
        this.barWidth = options.barWidth;
        this.container.style.backgroundImage = `url('${options.url}')`;
        this.events = options.events;
    }

    resize (width, height) {
        this.container.style.width = `${width}px`;
        this.container.style.height = `${height}px`;
        this.container.style.top = `${-height + 2}px`;
    }

    show () {
        this.container.style.display = 'block';
        this.events && this.events.trigger('thumbnails_show');
    }

    move (position, totalWidth) {
        this.container.style.backgroundPosition = `-${(Math.ceil(position / totalWidth * 100) - 1) * 160}px 0`;
        this.container.style.left = `${(position - this.container.offsetWidth / 2)}px`;
    }

    hide () {
        this.container.style.display = 'none';

        this.events && this.events.trigger('thumbnails_hide');
    }
}

export default Thumbnails;
