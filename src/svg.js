/**
* SVG used by DPlayer
*/

class Svg {
    constructor (icons) {
        this.icons = icons;
    }

    get (type) {
        // Some SVG icons don't change icon size using viewBox. Ex.: Material Icons
        // To fix these cases a optional index was added to icon object

        return `
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.icons[type][3] || '100%'}" height="${this.icons[type][3] || '100%'}" version="1.1" viewBox="${this.icons[type][0]}">
                <use xlink:href="#dplayer-${type}"></use>
                <path class="dplayer-fill" d="${this.icons[type][1]}" id="dplayer-${type}"></path>
            </svg>
        `;
    }
}

module.exports = Svg;
