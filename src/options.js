/* global DPLAYER_VERSION GIT_HASH */
const defaultApiBackend = require('./api.js');

module.exports = (options) => {
    const isMobile = /mobile/i.test(window.navigator.userAgent);
    // compatibility: some mobile browsers don't suppose autoplay
    if (isMobile) {
        options.autoplay = false;
    }

    // default options
    const defaultOption = {
        container: options.element || document.getElementsByClassName('dplayer')[0],
        autoplay: false,
        theme: '#b7daff',
        loop: false,
        lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
        screenshot: false,
        hotkey: true,
        preload: 'auto',
        volume: '0.7',
        apiBackend: defaultApiBackend,
        video: {},
        contextmenu: []
    };
    for (const defaultKey in defaultOption) {
        if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
            options[defaultKey] = defaultOption[defaultKey];
        }
    }
    if (options.video && !options.video.hasOwnProperty('type')) {
        options.video.type = 'auto';
    }
    if (options.danmaku && !options.danmaku.hasOwnProperty('user')) {
        options.danmaku.user = 'DIYgod';
    }

    if (options.video.quality) {
        options.video.url = [options.video.quality[options.video.defaultQuality].url];
    }

    if (options.lang) {
        options.lang = options.lang.toLowerCase();
    }

    options.contextmenu = options.contextmenu.concat([{
        text: 'About author',
        link: 'https://www.anotherhome.net/'
    }, {
        text: 'About DPlayer',
        link: 'https://github.com/MoePlayer/DPlayer'
    }, {
        text: 'DPlayer feedback',
        link: 'https://github.com/DIYgod/DPlayer/issues'
    }, {
        text: `DPlayer ${DPLAYER_VERSION} ${GIT_HASH}`,
        link: 'https://github.com/MoePlayer/DPlayer/releases'
    }]);

    return options;
};