class Bezel {
    constructor (container) {
        this.container = container;

        this.container.addEventListener('animationend', () => {
            this.container.classList.remove('dplayer-bezel-transition');
        });
    }

    switch (icon) {
        this.container.innerHTML = icon;
        this.container.classList.add('dplayer-bezel-transition');
    }
}

module.exports = Bezel;