/* global DPLAYER_VERSION GIT_HASH */
const defaultApiBackend = require('./api.js');

module.exports = (option) => {
    const isMobile = /mobile/i.test(window.navigator.userAgent);
    // compatibility: some mobile browsers don't suppose autoplay
    if (isMobile) {
        option.autoplay = false;
    }

    // default options
    const defaultOption = {
        element: document.getElementsByClassName('dplayer')[0],
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
        if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
            option[defaultKey] = defaultOption[defaultKey];
        }
    }
    if (option.video && !option.video.hasOwnProperty('type')) {
        option.video.type = 'auto';
    }
    if (option.danmaku && !option.danmaku.hasOwnProperty('user')) {
        option.danmaku.user = 'DIYgod';
    }

    if (option.video.quality) {
        option.video.url = [option.video.quality[option.video.defaultQuality].url];
    }

    if (option.lang) {
        option.lang.toLowerCase();
    }

    option.contextmenu = option.contextmenu.concat([{
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
        link: 'https://github.com/MoePlayer/DPlayer/commits/master'
    }]);

    return option;
};