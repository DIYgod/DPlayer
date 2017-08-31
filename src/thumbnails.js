class Thumbnails {
    constructor (container, width, url) {
        this.container = container;
        this.width = width;
        this.container.style.backgroundImage = `url('${url}')`;
    }

    resize (width, height) {
        this.container.style.width = `${width}px`;
        this.container.style.height = `${height}px`;
        this.container.style.top = `${-height + 2}px`;
    }

    show (position) {
        this.container.style.display = 'block';
        this.container.style.backgroundPosition = `-${(Math.ceil(position / this.width * 100) - 1) * 160}px 0`;
        this.container.style.left = `${(position - this.container.offsetWidth / 2)}px`;
    }

    hide () {
        this.container.style.display = 'none';
    }
}

module.exports = Thumbnails;