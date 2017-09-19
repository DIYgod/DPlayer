/**
* SVG used by DPlayer
*/

class SvgSource {
    constructor (options) {
        this.icons = options.icons;
        this.iconColor = options.iconsColor;
    }

    get (type) {
        // Some SVG icons don't change icon size using viewBox. Ex.: Material Icons
        // To fix these cases a optional index was added to icon object when change icon
        // size is necessary

        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="${this.icons[type][2] || '100%'}" height="${this.icons[type][2] || '100%'}" version="1.1" viewBox="${this.icons[type][0]}">
                <path class="dplayer-fill" style="fill:${this.iconColor}" d="${this.icons[type][1]}" id="dplayer-${type}"></path>
            </svg>
        `;
    }
}

module.exports = SvgSource;
