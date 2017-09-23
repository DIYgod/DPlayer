const html = {
    main: (options, index, tran, icons) => `
        <div class="dplayer-mask"></div>
        <div class="dplayer-video-wrap">
            ${html.video(true, options.video.pic, options.screenshot, options.preload, options.video.url, options.subtitle)}
            ${options.logo ? `
            <div class="dplayer-logo"><img src="${options.logo}"></div>
            ` : ``}
            <div class="dplayer-danmaku" style="${options.danmaku ? html.danmakumargin(options.danmaku.margin) : ``}">
                <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
            </div>
            <div class="dplayer-subtitle"></div>
            <div class="dplayer-bezel">
                <span class="dplayer-bezel-icon"></span>
                ${options.danmaku ? `<span class="dplayer-danloading">${tran('Danmaku is loading')}</span>` : ``}
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
            <div class="dplayer-icons dplayer-comment-box">
                <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="${tran('Setting')}" data-balloon-pos="up">
                    <span class="dplayer-icon-content">${icons.get('pallette')}</span>
                </button>
                <div class="dplayer-comment-setting-box">
                    <div class="dplayer-comment-setting-color">
                        <div class="dplayer-comment-setting-title">${tran('Set danmaku color')}</div>
                        <label>
                            <input type="radio" name="dplayer-danmaku-color-${index}" value="#fff" checked>
                            <span style="background: #fff;"></span>
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
                <button class="dplayer-icon dplayer-send-icon" data-balloon="${tran('Send')}" data-balloon-pos="up">
                    <span class="dplayer-icon-content">${icons.get('send')}</span>
                </button>
            </div>
            <div class="dplayer-icons dplayer-icons-left">
                <button class="dplayer-icon dplayer-play-icon">
                    <span class="dplayer-icon-content">${icons.get('play')}</span>
                </button>
                <div class="dplayer-volume">
                    <button class="dplayer-icon dplayer-volume-icon">
                        <span class="dplayer-icon-content">${icons.get('volume-down')}</span>
                    </button>
                    <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                        <div class="dplayer-volume-bar">
                            <div class="dplayer-volume-bar-inner" style="background: ${options.theme};">
                                <span class="dplayer-thumb" style="background: ${options.theme}"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="dplayer-time"><span class="dplayer-ptime">0:00</span> / <span class="dplayer-dtime">0:00</span></span>
            </div>
            <div class="dplayer-icons dplayer-icons-right">
                ${options.video.quality ? `
                <div class="dplayer-quality">
                    <button class="dplayer-icon dplayer-quality-icon">${options.video.quality[options.video.defaultQuality].name}</button>
                    <div class="dplayer-quality-mask">
                        ${html.qualityList(options.video.quality)}
                    </div>
                </div>
                ` : ``}
                ${options.screenshot ? `
                <a href="#" class="dplayer-icon dplayer-camera-icon" data-balloon="${tran('Screenshot')}" data-balloon-pos="up">
                    <span class="dplayer-icon-content">${icons.get('camera')}</span>
                </a>
                ` : ``}
                <div class="dplayer-comment">
                    <button class="dplayer-icon dplayer-comment-icon" data-balloon="${tran('Send danmaku')}" data-balloon-pos="up">
                        <span class="dplayer-icon-content">${icons.get('comment')}</span>
                    </button>
                </div>
                ${options.subtitle ? `
                <div class="dplayer-subtitle-btn">
                    <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="${tran('Hide subtitle')}" data-balloon-pos="up">
                        <span class="dplayer-icon-content">${icons.get('subtitle')}</span>
                    </button>
                </div>
                ` : ``}
                <div class="dplayer-setting">
                    <button class="dplayer-icon dplayer-setting-icon" data-balloon="${tran('Setting')}" data-balloon-pos="up">
                        <span class="dplayer-icon-content">${icons.get('setting')}</span>
                    </button>
                    <div class="dplayer-setting-box"></div>
                </div>
                <div class="dplayer-full">
                    <button class="dplayer-icon dplayer-full-in-icon" data-balloon="${tran('Web full screen')}" data-balloon-pos="up">
                        <span class="dplayer-icon-content">${icons.get('full-in')}</span>
                    </button>
                    <button class="dplayer-icon dplayer-full-icon" data-balloon="${tran('Full screen')}" data-balloon-pos="up">
                        <span class="dplayer-icon-content">${icons.get('full')}</span>
                    </button>
                </div>
            </div>
            <div class="dplayer-bar-wrap">
                <div class="dplayer-bar-time hidden">00:00</div>
                <div class="dplayer-bar-preview"></div>
                <div class="dplayer-bar">
                    <div class="dplayer-loaded" style="width: 0;"></div>
                    <div class="dplayer-played" style="width: 0; background: ${options.theme}">
                        <span class="dplayer-thumb" style="background: ${options.theme}"></span>
                    </div>
                </div>
            </div>
        </div>
        ${html.contextmenuList(options.contextmenu, tran)}
        <div class="dplayer-notice"></div>`,

    danmakumargin: (margin) => {
        let result = '';
        if (margin) {
            for (const key in margin) {
                result += `${key}:${margin[key]};`;
            }
        }
        return result;
    },

    contextmenuList: (contextmenu, tran) => {
        let result = '<div class="dplayer-menu">';
        for (let i = 0; i < contextmenu.length; i++) {
            result += `<div class="dplayer-menu-item"><a target="_blank" href="${contextmenu[i].link}">${tran(contextmenu[i].text)}</a></div>`;
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

    video: (current, pic, screenshot, preload, url, subtitle) => {
        const enableSubtitle = subtitle && subtitle.type === 'webvtt';
        return `
        <video class="dplayer-video ${current ? `dplayer-video-current"` : ``}" ${pic ? `poster="${pic}"` : ``} webkit-playsinline playsinline ${screenshot || enableSubtitle ? `crossorigin="anonymous"` : ``} ${preload ? `preload="${preload}"` : ``} src="${url}">
            ${enableSubtitle ? `<track kind="metadata" default src="${subtitle.url}"></track>` : ``}
        </video>`;
    },

    setting: (tran, icons) => ({
        'original': `
            <div class="dplayer-setting-item dplayer-setting-speed">
                <span class="dplayer-label">${tran('Speed')}</span>
                <div class="dplayer-toggle">
                    ${icons.get('right')}
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
                <span class="dplayer-label">${tran('Show danmaku')}</span>
                <div class="dplayer-toggle">
                    <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                    <label for="dplayer-toggle-dan"></label>
                </div>
            </div>
            <div class="dplayer-setting-item dplayer-setting-danunlimit">
                <span class="dplayer-label">${tran('Unlimited danmaku')}</span>
                <div class="dplayer-toggle">
                    <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                    <label for="dplayer-toggle-danunlimit"></label>
                </div>
            </div>
            <div class="dplayer-setting-item dplayer-setting-danmaku">
                <span class="dplayer-label">${tran('Opacity for danmaku')}</span>
                <div class="dplayer-danmaku-bar-wrap">
                    <div class="dplayer-danmaku-bar">
                        <div class="dplayer-danmaku-bar-inner">
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
