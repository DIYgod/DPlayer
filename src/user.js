import utils from './utils';

class User {
    constructor (player) {
        this.storageName = {
            opacity: 'dplayer-danmaku-opacity',
            volume: 'dplayer-volume',
            unlimited: 'dplayer-danmaku-unlimited',
            danmaku: 'dplayer-danmaku-show'
        };
        this.default = {
            opacity: 0.7,
            volume: player.option.volume || 0.7,
            unlimited: (player.option.danmaku && player.option.danmaku.unlimited ? 1 : 0) || 0,
            danmaku: 1
        };
        this.data = {};

        this.init();
    }

    init () {
        for (const item in this.storageName) {
            const name = this.storageName[item];
            this.data[item] = parseFloat(utils.storage.get(name) || this.default[item]);
        }
    }

    get (key) {
        return this.data[key];
    }

    set (key, value) {
        this.data[key] = value;
        utils.storage.set(this.storageName[key], value);
    }
}

module.exports = User;