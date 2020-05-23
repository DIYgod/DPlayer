/* global DPLAYER_VERSION */
import defaultApiBackend from './api.js';

export default (options) => {
    // default options
    const defaultOption = {
        container: options.element || document.getElementsByClassName('dplayer')[0],
        live: false,
        autoplay: false,
        theme: '#b7daff',
        loop: false,
        lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
        screenshot: false,
        airplay: true,
        hotkey: true,
        preload: 'metadata',
        volume: 0.7,
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
        apiBackend: defaultApiBackend,
        video: {},
        contextmenu: [],
        mutex: true,
        pluginOptions: { hls: {}, flv: {}, dash: {}, webtorrent: {} },
    };
    for (const defaultKey in defaultOption) {
        if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
            options[defaultKey] = defaultOption[defaultKey];
        }
    }
    if (options.video) {
        !options.video.type && (options.video.type = 'auto');
    }
    if (typeof options.danmaku === 'object' && options.danmaku) {
        !options.danmaku.user && (options.danmaku.user = 'DIYgod');
    }
    if (options.subtitle) {
        !options.subtitle.type && (options.subtitle.type = 'webvtt');
        !options.subtitle.fontSize && (options.subtitle.fontSize = '20px');
        !options.subtitle.bottom && (options.subtitle.bottom = '40px');
        !options.subtitle.color && (options.subtitle.color = '#fff');
    }

    if (options.video.quality) {
        options.video.url = options.video.quality[options.video.defaultQuality].url;
    }

    if (options.lang) {
        options.lang = options.lang.toLowerCase();
    }

    options.contextmenu = options.contextmenu.concat([
        {
            text: 'Video info',
            click: (player) => {
                player.infoPanel.triggle();
            },
        },
        {
            text: 'About author',
            link: 'https://diygod.me',
        },
        {
            text: `DPlayer v${DPLAYER_VERSION}`,
            link: 'https://github.com/MoePlayer/DPlayer',
        },
    ]);

    return options;
};
