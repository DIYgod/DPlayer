const svg = require('./svg.js');

const html = {
    main: (option, index, tran) => {
        let videos = ``;
        for (let i = 0; i < option.video.url.length; i++) {
            videos += html.video(i === 0, option.video.pic, option.screenshot, option.video.url.length ? 'metadata' : option.preload, option.video.url[i]);
        }
        return `
        <div class="dplayer-mask"></div>
        <div class="dplayer-video-wrap">
            ${videos}
            ${option.logo ? `
            <div class="dplayer-logo"><img src="${option.logo}"></div>
            ` : ``}
            <div class="dplayer-danmaku">
                <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
            </div>
            <div class="dplayer-bezel">
                <span class="dplayer-bezel-icon"></span>
                ${option.danmaku ? `<span class="dplayer-danloading">${tran('Danmaku is loading')}</span>` : ``}
                <span class="diplayer-loading-icon">
                    <svg height="100%" version="1.1" viewBox="0 0 22 22" width="100%">
                        <svg x="7" y="1">
                            <circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle>
                        </svg>
                        <svg x="11" y="3">
                            <circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle>
                        </svg>
                        <svg x="13" y="7">
                            <circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle>
                        </svg>
                        <svg x="11" y="11">
                            <circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle>
                        </svg>
                        <svg x="7" y="13">
                            <circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle>
                        </svg>
                        <svg x="3" y="11">
                            <circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle>
                        </svg>
                        <svg x="1" y="7">
                            <circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle>
                        </svg>
                        <svg x="3" y="3">
                            <circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle>
                        </svg>
                    </svg>
                </span>
            </div>
        </div>
        <div class="dplayer-controller-mask"></div>
        <div class="dplayer-controller">
            <div class="dplayer-icons dplayer-icons-left">
                <button class="dplayer-icon dplayer-play-icon">
                    ${svg('play')}
                </button>
                <div class="dplayer-volume">
                    <button class="dplayer-icon dplayer-volume-icon">
                        ${svg('volume-down')}
                    </button>
                    <div class="dplayer-volume-bar-wrap">
                        <div class="dplayer-volume-bar">
                            <div class="dplayer-volume-bar-inner" style="width: 70%; background: ${option.theme};">
                                <span class="dplayer-thumb" style="background: ${option.theme}"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="dplayer-time"><span class="dplayer-ptime">0:00</span> / <span class="dplayer-dtime">0:00</span></span>
            </div>
            <div class="dplayer-icons dplayer-icons-right">
                ${option.video.quality ? `
                <div class="dplayer-quality">
                    <button class="dplayer-icon dplayer-quality-icon">${option.video.quality[option.video.defaultQuality].name}</button>
                    <div class="dplayer-quality-mask">
                        ${html.qualityList(option.video.quality)}
                    </div>
                </div>
                ` : ``}
                ${option.screenshot ? `
                <a href="#" class="dplayer-icon dplayer-camera-icon">
                    ${svg('camera')}
                </a>
                ` : ``}
                <div class="dplayer-comment">
                    <button class="dplayer-icon dplayer-comment-icon">
                        ${svg('comment')}
                    </button>
                    <div class="dplayer-comment-box">
                        <button class="dplayer-icon dplayer-comment-setting-icon">
                            ${svg('menu')}
                        </button>
                        <div class="dplayer-comment-setting-box">
                            <div class="dplayer-comment-setting-color">
                                <div class="dplayer-comment-setting-title">${tran('Set danmaku color')}</div>
                                <label>
                                    <input type="radio" name="dplayer-danmaku-color-${index}" value="#fff" checked>
                                    <span style="background: #fff; border: 1px solid rgba(0,0,0,.1);"></span>
                                </label>
                                <label>
                                    <input type="radio" name="dplayer-danmaku-color-${index}" value="#e54256">
                                    <span style="background: #e54256"></span>
                                </label>
                                <label>
                                    <input type="radio" name="dplayer-danmaku-color-${index}" value="#ffe133">
                                    <span style="background: #ffe133"></span>
                                </label>
                                <label>
                                    <input type="radio" name="dplayer-danmaku-color-${index}" value="#64DD17">
                                    <span style="background: #64DD17"></span>
                                </label>
                                <label>
                                    <input type="radio" name="dplayer-danmaku-color-${index}" value="#39ccff">
                                    <span style="background: #39ccff"></span>
                                </label>
                                <label>
                                    <input type="radio" name="dplayer-danmaku-color-${index}" value="#D500F9">
                                    <span style="background: #D500F9"></span>
                                </label>
                            </div>
                            <div class="dplayer-comment-setting-type">
                                <div class="dplayer-comment-setting-title">${tran('Set danmaku type')}</div>
                                <label>
                                    <input type="radio" name="dplayer-danmaku-type-${index}" value="top">
                                    <span>${tran('Top')}</span>
                                </label>
                                <label>
                                    <input type="radio" name="dplayer-danmaku-type-${index}" value="right" checked>
                                    <span>${tran('Rolling')}</span>
                                </label>
                                <label>
                                    <input type="radio" name="dplayer-danmaku-type-${index}" value="bottom">
                                    <span>${tran('Bottom')}</span>
                                </label>
                            </div>
                        </div>
                        <input class="dplayer-comment-input" type="text" placeholder="${tran('Input danmaku, hit Enter')}" maxlength="30">
                        <button class="dplayer-icon dplayer-send-icon">
                            ${svg('send')}
                        </button>
                    </div>
                </div>
                <div class="dplayer-setting">
                    <button class="dplayer-icon dplayer-setting-icon">
                        ${svg('setting')}
                    </button>
                    <div class="dplayer-setting-box"></div>
                </div>
                <div class="dplayer-full">
                    <button class="dplayer-icon dplayer-full-in-icon">
                        ${svg('full-in')}
                    </button>
                    <button class="dplayer-icon dplayer-full-icon">
                        ${svg('full')}
                    </button>
                </div>
            </div>
            <div class="dplayer-bar-wrap">
                <div class="dplayer-bar-time hidden">00:00</div>
                <div class="dplayer-bar">
                    <div class="dplayer-loaded" style="width: 0;"></div>
                    <div class="dplayer-played" style="width: 0; background: ${option.theme}">
                        <span class="dplayer-thumb" style="background: ${option.theme}"></span>
                    </div>
                </div>
            </div>
        </div>
        ${html.contextmenuList(option.contextmenu)}
        <div class="dplayer-notice"></div>`;
    },

    contextmenuList: (contextmenu) => {
        let result = '<div class="dplayer-menu">';
        for (let i = 0; i < contextmenu.length; i++) {
            result += `<div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="${contextmenu[i].link}">${contextmenu[i].text}</a></span></div>`;
        }
        result += '</div>';

        return result;
    },

    qualityList: (quality) => {
        let result = '<div class="dplayer-quality-list">';
        for (let i = 0; i < quality.length; i++) {
            result += `<div class="dplayer-quality-item" data-index="${i}">${quality[i].name}</div>`;
        }
        result += '</div>';

        return result;
    },

    video: (current, pic, screenshot, preload, url) => `<video class="dplayer-video ${current ? `dplayer-video-current"` : ``}" ${pic ? `poster="${pic}"` : ``} webkit-playsinline playsinline ${screenshot ? `crossorigin="anonymous"` : ``} ${preload ? `preload="${preload}"` : ``} src="${url}"></video>`,

    setting: (tran) => ({
        'original': `
            <div class="dplayer-setting-item dplayer-setting-speed">
                <span class="dplayer-label">${tran('Speed')}</span>
                <div class="dplayer-toggle">
                    ${svg('right')}
                </div>
            </div>
            <div class="dplayer-setting-item dplayer-setting-loop">
                <span class="dplayer-label">${tran('Loop')}</span>
                <div class="dplayer-toggle">
                    <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                    <label for="dplayer-toggle"></label>
                </div>
            </div>
            <div class="dplayer-setting-item dplayer-setting-showdan">
                <span class="dplayer-label">${tran('Danmaku')}</span>
                <div class="dplayer-toggle">
                    <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                    <label for="dplayer-toggle-dan"></label>
                </div>
            </div>
            <div class="dplayer-setting-item dplayer-setting-danmaku">
                <span class="dplayer-label">${tran('Opacity for danmaku')}</span>
                <div class="dplayer-danmaku-bar-wrap">
                    <div class="dplayer-danmaku-bar">
                        <div class="dplayer-danmaku-bar-inner" style="width: ${(localStorage.getItem('DPlayer-opacity') || 0.7) * 100}%">
                            <span class="dplayer-thumb"></span>
                        </div>
                    </div>
                </div>
            </div>`,
        'speed': `
            <div class="dplayer-setting-speed-item" data-speed="0.5">
                <span class="dplayer-label">0.5</span>
            </div>
            <div class="dplayer-setting-speed-item" data-speed="0.75">
                <span class="dplayer-label">0.75</span>
            </div>
            <div class="dplayer-setting-speed-item" data-speed="1">
                <span class="dplayer-label">${tran('Normal')}</span>
            </div>
            <div class="dplayer-setting-speed-item" data-speed="1.25">
                <span class="dplayer-label">1.25</span>
            </div>
            <div class="dplayer-setting-speed-item" data-speed="1.5">
                <span class="dplayer-label">1.5</span>
            </div>
            <div class="dplayer-setting-speed-item" data-speed="2">
                <span class="dplayer-label">2</span>
            </div>`
    }) 
};

module.exports = html;