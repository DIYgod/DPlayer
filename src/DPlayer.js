console.log("\n %c DPlayer 1.1.4 %c http://dplayer.js.org \n\n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");

require('./DPlayer.scss');
const defaultApiBackend = require('./api.js');

let index = 0;

class DPlayer {
    /**
     * DPlayer constructor function
     *
     * @param {Object} option - See README
     * @constructor
     */
    constructor(option) {
        const svg = {
            'play': ['0 0 16 32', 'M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z'],
            'pause': ['0 0 17 32', 'M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z'],
            'volume-up': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z'],
            'volume-down': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z'],
            'volume-off': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z'],
            'loop': ['0 0 32 32', 'M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z'],
            'full': ['0 0 32 33', 'M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z'],
            'full-in': ['0 0 32 33', 'M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z'],
            'setting': ['0 0 32 28', 'M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z'],
            'right': ['0 0 32 32', 'M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z'],
            'comment': ['0 0 32 32', 'M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z'],
            'comment-off': ['0 0 32 32', 'M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z'],
            'send': ['0 0 32 32', 'M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z'],
            'menu': ['0 0 22 32', 'M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z'],
            'camera': ['0 0 32 32', 'M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z']
        };
        this.getSVG = (type) => {
            return `
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="${svg[type][0]}" width="100%">
                    <use xlink:href="#dplayer-${type}"></use>
                    <path class="dplayer-fill" d="${svg[type][1]}" id="dplayer-${type}"></path>
                </svg>
            `;
        };

        this.option = option;

        const isMobile = /mobile/i.test(window.navigator.userAgent);
        // compatibility: some mobile browsers don't suppose autoplay
        if (isMobile) {
            this.option.autoplay = false;
        }

        // default options
        const defaultOption = {
            element: document.getElementsByClassName('dplayer')[0],
            autoplay: false,
            theme: '#b7daff',
            loop: false,
            lang: navigator.language.indexOf('zh') !== -1 ? 'zh' : 'en',
            screenshot: false,
            hotkey: true,
            preload: 'auto',
            apiBackend: defaultApiBackend
        };
        for (let defaultKey in defaultOption) {
            if (defaultOption.hasOwnProperty(defaultKey) && !this.option.hasOwnProperty(defaultKey)) {
                this.option[defaultKey] = defaultOption[defaultKey];
            }
        }
        if (!this.option.video.hasOwnProperty('type')) {
            this.option.video.type = 'auto';
        }

        const tranZH = {
            'Danmaku is loading': '弹幕加载中',
            'Top': '顶部',
            'Bottom': '底部',
            'Rolling': '滚动',
            'Input danmaku, hit Enter': '输入弹幕，回车发送',
            'About author': '关于作者',
            'DPlayer feedback': '播放器意见反馈',
            'About DPlayer': '关于 DPlay 播放器',
            'Loop': '洗脑循环',
            'Speed': '速度',
            'Opacity for danmaku': '弹幕透明度',
            'Normal': '正常',
            'Please input danmaku!': '要输入弹幕内容啊喂！',
            'Set danmaku color': '设置弹幕颜色',
            'Set danmaku type': '设置弹幕类型',
            'Danmaku': '弹幕'
        };
        const getTran = (text) => {
            if (this.option.lang === 'en') {
                return text;
            }
            else if (this.option.lang === 'zh') {
                return tranZH[text];
            }
        };

        /**
         * Update progress bar, including loading progress bar and play progress bar
         *
         * @param {String} type - Point out which bar it is, should be played loaded or volume
         * @param {Number} percentage
         * @param {String} direction - Point out the direction of this bar, Should be height or width
         */
        this.updateBar = (type, percentage, direction) => {
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            bar[type + 'Bar'].style[direction] = percentage * 100 + '%';
        };

        // define DPlayer events
        const eventTypes = ['play', 'pause', 'canplay', 'playing', 'ended', 'error'];
        this.event = {};
        for (let i = 0; i < eventTypes.length; i++) {
            this.event[eventTypes[i]] = [];
        }
        this.trigger = (type) => {
            for (let i = 0; i < this.event[type].length; i++) {
                this.event[type][i]();
            }
        };

        this.element = this.option.element;
        if (!this.option.danmaku) {
            this.element.classList.add('dplayer-no-danmaku');
        }
        if (isMobile) {
            this.element.classList.add('dplayer-mobile');
        }

        this.element.innerHTML = `
            <div class="dplayer-mask"></div>
            <div class="dplayer-video-wrap">
                <video class="dplayer-video" ${this.option.video.pic ? `poster="${this.option.video.pic}"` : ``} webkit-playsinline playsinline ${this.option.screenshot ? `crossorigin="anonymous"` : ``} preload="${this.option.preload}" src="${this.option.video.url}"></video>
                <div class="dplayer-danmaku">
                    <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
                </div>
                <div class="dplayer-bezel">
                    <span class="dplayer-bezel-icon"></span>
                    ${this.option.danmaku ? `<span class="dplayer-danloading">${getTran('Danmaku is loading')}</span>` : ``}
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
                    <button class="dplayer-icon dplayer-play-icon">`
            +           this.getSVG('play')
            + `     </button>
                    <div class="dplayer-volume">
                        <button class="dplayer-icon dplayer-volume-icon">`
            +               this.getSVG('volume-down')
            + `         </button>
                        <div class="dplayer-volume-bar-wrap">
                            <div class="dplayer-volume-bar">
                                <div class="dplayer-volume-bar-inner" style="width: 70%; background: ${this.option.theme};">
                                    <span class="dplayer-thumb" style="background: ${this.option.theme}"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="dplayer-time"><span class="dplayer-ptime">0:00</span> / <span class="dplayer-dtime">0:00</span></span>
                </div>
                <div class="dplayer-icons dplayer-icons-right">
                    ${this.option.screenshot ? `
                    <a href="#" class="dplayer-icon dplayer-camera-icon"}dplayer-volume>`
                +           this.getSVG('camera')
                + `     </a>
                    ` : ``}
                    <div class="dplayer-comment">
                        <button class="dplayer-icon dplayer-comment-icon">`
            +               this.getSVG('comment')
            + `         </button>
                        <div class="dplayer-comment-box">
                            <button class="dplayer-icon dplayer-comment-setting-icon">`
            +                   this.getSVG('menu')
            + `             </button>
                            <div class="dplayer-comment-setting-box">
                                <div class="dplayer-comment-setting-color">
                                   <div class="dplayer-comment-setting-title">${getTran('Set danmaku color')}</div>
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
                                    <div class="dplayer-comment-setting-title">${getTran('Set danmaku type')}</div>
                                    <label>
                                        <input type="radio" name="dplayer-danmaku-type-${index}" value="top">
                                        <span>${getTran('Top')}</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="dplayer-danmaku-type-${index}" value="right" checked>
                                        <span>${getTran('Rolling')}</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="dplayer-danmaku-type-${index}" value="bottom">
                                        <span>${getTran('Bottom')}</span>
                                    </label>
                                </div>
                            </div>
                            <input class="dplayer-comment-input" type="text" placeholder="${getTran('Input danmaku, hit Enter')}" maxlength="30">
                            <button class="dplayer-icon dplayer-send-icon">`
            +                   this.getSVG('send')
            + `             </button>
                        </div>
                    </div>
                    <div class="dplayer-setting">
                        <button class="dplayer-icon dplayer-setting-icon">`
            +               this.getSVG('setting')
            + `         </button>
                        <div class="dplayer-setting-box"></div>
                    </div>
                    <div class="dplayer-full">
                        <button class="dplayer-icon dplayer-full-in-icon">`
            +               this.getSVG('full-in')
            + `         </button>
                        <button class="dplayer-icon dplayer-full-icon">`
            +               this.getSVG('full')
            + `         </button>
                    </div>
                </div>
                <div class="dplayer-bar-wrap">
                    <div class="dplayer-bar">
                        <div class="dplayer-loaded" style="width: 0;"></div>
                        <div class="dplayer-played" style="width: 0; background: ${this.option.theme}">
                            <span class="dplayer-thumb" style="background: ${this.option.theme}"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dplayer-menu">
                <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="http://diygod.me/">${getTran('About author')}</a></span></div>
                <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="https://github.com/DIYgod/DPlayer/issues">${getTran('DPlayer feedback')}</a></span></div>
                <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="https://github.com/DIYgod/DPlayer">${getTran('About DPlayer')}</a></span></div>
            </div>
        `;

        // arrow style
        var arrow = this.element.offsetWidth <= 500;
        if (arrow) {
            var arrowStyle = document.createElement('style');
            arrowStyle.innerHTML = `.dplayer .dplayer-danmaku{font-size:18px}`;
            document.head.appendChild(arrowStyle);
        }

        // get this video object
        this.video = this.element.getElementsByClassName('dplayer-video')[0];

        // Support HTTP Live Streaming
        let enablehls;
        if (this.option.video.type === 'auto') {
            enablehls = /m3u8(#|\?|$)/i.exec(this.option.video.url);
        }
        else if (this.option.video.type === 'hls') {
            enablehls = true;
        }
        else {
            enableflv = false;
        }
        if (enablehls && Hls.isSupported()) {
            // this.element.getElementsByClassName('dplayer-time')[0].style.display = 'none';
            const hls = new Hls();
            hls.attachMedia(this.video);
            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                hls.loadSource(this.option.video.url);
                hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                    console.log("manifest loaded, found " + data.levels.length + " quality level");
                });
            });
        }

        // Support FLV
        let enableflv;
        if (this.option.video.type === 'auto') {
            enableflv = /.flv(#|\?|$)/i.exec(this.option.video.url);
        }
        else if (this.option.video.type === 'flv') {
            enableflv = true;
        }
        else {
            enableflv = false;
        }
        if (enableflv && flvjs.isSupported()) {
            const flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: this.option.video.url
            });
            flvPlayer.attachMediaElement(this.video);
            flvPlayer.load();
        }

        this.bezel = this.element.getElementsByClassName('dplayer-bezel-icon')[0];
        this.bezel.addEventListener('animationend', () => {
            this.bezel.classList.remove('dplayer-bezel-transition');
        });

        // play and pause button
        this.playButton = this.element.getElementsByClassName('dplayer-play-icon')[0];
        this.paused = true;
        this.playButton.addEventListener('click', () => {
            this.toggle();
        });

        const videoWrap = this.element.getElementsByClassName('dplayer-video-wrap')[0];
        const conMask = this.element.getElementsByClassName('dplayer-controller-mask')[0];
        if (!isMobile) {
            videoWrap.addEventListener('click', () => {
                this.toggle();
            });
            conMask.addEventListener('click', () => {
                this.toggle();
            });
        }
        else {
            const toggleController = () => {
                if (this.element.classList.contains('dplayer-hide-controller')) {
                    this.element.classList.remove('dplayer-hide-controller');
                }
                else {
                    this.element.classList.add('dplayer-hide-controller');
                }
            };
            videoWrap.addEventListener('click', toggleController);
            conMask.addEventListener('click', toggleController);
        }


        /**
         * Parse second to 00:00 format
         *
         * @param {Number} second
         * @return {String} 00:00 format
         */
        const secondToTime = (second) => {
            const add0 = (num) => {
                return num < 10 ? '0' + num : '' + num;
            };
            const min = parseInt(second / 60);
            const sec = parseInt(second - min * 60);
            return add0(min) + ':' + add0(sec);
        };

        /**
         * control play progress
         */
        // get element's view position
        const getElementViewLeft = (element) => {
            let actualLeft = element.offsetLeft;
            let current = element.offsetParent;
            let elementScrollLeft;
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
                while (current !== null) {
                    actualLeft += current.offsetLeft;
                    current = current.offsetParent;
                }
            }
            else {
                while (current !== null && current !== this.element) {
                    actualLeft += current.offsetLeft;
                    current = current.offsetParent;
                }
            }
            elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
            return actualLeft - elementScrollLeft;
        };

        const getElementViewTop = (element) => {
            let actualTop = element.offsetTop;
            let current = element.offsetParent;
            let elementScrollTop;
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
                while (current !== null) {
                    actualTop += current.offsetTop;
                    current = current.offsetParent;
                }
            }
            else {
                while (current !== null && current !== this.element) {
                    actualTop += current.offsetTop;
                    current = current.offsetParent;
                }
            }
            elementScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
            return actualTop - elementScrollTop;
        };

        let bar = {};
        bar.playedBar = this.element.getElementsByClassName('dplayer-played')[0];
        bar.loadedBar = this.element.getElementsByClassName('dplayer-loaded')[0];
        const pbar = this.element.getElementsByClassName('dplayer-bar-wrap')[0];
        let barWidth;

        if (this.option.danmaku) {
            this.video.addEventListener('seeking', () => {
                for (let i = 0; i < this.dan.length; i++) {
                    if (this.dan[i].time >= this.video.currentTime) {
                        this.danIndex = i;
                        return;
                    }
                    this.danIndex = this.dan.length;
                }
            });
        }

        let lastPlayPos = 0;
        let currentPlayPos = 0;
        let bufferingDetected = false;
        let danmakuTime;
        this.setTime = () => {
            this.playedTime = setInterval(() => {
                // whether the video is buffering
                currentPlayPos = this.video.currentTime;
                if (!bufferingDetected
                    && currentPlayPos < (lastPlayPos + 0.01)
                    && !this.video.paused) {
                    this.element.classList.add('dplayer-loading');
                    bufferingDetected = true;
                }
                if (bufferingDetected
                    && currentPlayPos > (lastPlayPos + 0.01)
                    && !this.video.paused) {
                    this.element.classList.remove('dplayer-loading');
                    bufferingDetected = false;
                }
                lastPlayPos = currentPlayPos;

                this.updateBar('played', this.video.currentTime / this.video.duration, 'width');
                this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = secondToTime(this.video.currentTime);
                this.trigger('playing');
            }, 100);
            if (this.option.danmaku && showdan) {
                danmakuTime = setInterval(() => {
                    let item = this.dan[this.danIndex];
                    while (item && this.video.currentTime > parseFloat(item.time)) {
                        danmakuIn(item.text, item.color, item.type);
                        item = this.dan[++this.danIndex];
                    }
                }, 0);
            }
        };
        this.clearTime = () => {
            clearInterval(this.playedTime);
            if (this.option.danmaku) {
                clearInterval(danmakuTime);
            }
        };

        pbar.addEventListener('click', (event) => {
            const e = event || window.event;
            barWidth = pbar.clientWidth;
            let percentage = (e.clientX - getElementViewLeft(pbar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('played', percentage, 'width');
            this.video.currentTime = parseFloat(bar.playedBar.style.width) / 100 * this.video.duration;
        });

        const thumbMove = (event) => {
            const e = event || window.event;
            let percentage = (e.clientX - getElementViewLeft(pbar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('played', percentage, 'width');
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = secondToTime(percentage * this.video.duration);
        };

        const thumbUp = () => {
            document.removeEventListener('mouseup', thumbUp);
            document.removeEventListener('mousemove', thumbMove);
            this.video.currentTime = parseFloat(bar.playedBar.style.width) / 100 * this.video.duration;
            this.setTime();
        };

        pbar.addEventListener('mousedown', () => {
            barWidth = pbar.clientWidth;
            this.clearTime();
            document.addEventListener('mousemove', thumbMove);
            document.addEventListener('mouseup', thumbUp);
        });


        /**
         * control volume
         */
        bar.volumeBar = this.element.getElementsByClassName('dplayer-volume-bar-inner')[0];
        const volumeEle = this.element.getElementsByClassName('dplayer-volume')[0];
        const volumeBarWrapWrap = this.element.getElementsByClassName('dplayer-volume-bar-wrap')[0];
        const volumeBarWrap = this.element.getElementsByClassName('dplayer-volume-bar')[0];
        const volumeicon = this.element.getElementsByClassName('dplayer-volume-icon')[0];
        const vWidth = 35;

        this.switchVolumeIcon = () => {
            const volumeicon = this.element.getElementsByClassName('dplayer-volume-icon')[0];
            if (this.video.volume >= 0.8) {
                volumeicon.innerHTML = this.getSVG('volume-up');
            }
            else if (this.video.volume > 0) {
                volumeicon.innerHTML = this.getSVG('volume-down');
            }
            else {
                volumeicon.innerHTML = this.getSVG('volume-off');
            }
        };
        const volumeMove = (event) => {
            const e = event || window.event;
            let percentage = (e.clientX - getElementViewLeft(volumeBarWrap) - 5.5) / vWidth;
            this.volume(percentage);
        };
        const volumeUp = () => {
            document.removeEventListener('mouseup', volumeUp);
            document.removeEventListener('mousemove', volumeMove);
            volumeEle.classList.remove('dplayer-volume-active');
        };

        volumeBarWrapWrap.addEventListener('click', (event) => {
            const e = event || window.event;
            let percentage = (e.clientX - getElementViewLeft(volumeBarWrap) - 5.5) / vWidth;
            this.volume(percentage);
        });
        volumeBarWrapWrap.addEventListener('mousedown', () => {
            document.addEventListener('mousemove', volumeMove);
            document.addEventListener('mouseup', volumeUp);
            volumeEle.classList.add('dplayer-volume-active');
        });
        volumeicon.addEventListener('click', () => {
            if (this.video.muted) {
                this.video.muted = false;
                this.switchVolumeIcon();
                this.updateBar('volume', this.video.volume, 'width');
            }
            else {
                this.video.muted = true;
                volumeicon.innerHTML = this.getSVG('volume-off');
                this.updateBar('volume', 0, 'width');
            }
        });


        /**
         * auto hide controller
         */
        let hideTime = 0;
        if (!isMobile) {
            const hideController = () => {
                this.element.classList.remove('dplayer-hide-controller');
                clearTimeout(hideTime);
                hideTime = setTimeout(() => {
                    if (this.video.played.length) {
                        this.element.classList.add('dplayer-hide-controller');
                        closeSetting();
                        closeComment();
                    }
                }, 2000);
            };
            this.element.addEventListener('mousemove', hideController);
            this.element.addEventListener('click', hideController);
        }


        /***
         * setting
         */
        let danOpacity = localStorage.getItem('DPlayer-opacity') || 0.7;
        const settingHTML = {
            'original': `
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">${getTran('Speed')}</span>
                        <div class="dplayer-toggle">`
            +           this.getSVG('right')
            + `     </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">${getTran('Loop')}</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">${getTran('Danmaku')}</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">${getTran('Opacity for danmaku')}</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner" style="width: ${danOpacity * 100}%">
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
                        <span class="dplayer-label">${getTran('Normal')}</span>
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
        };

        // toggle setting box
        const settingIcon = this.element.getElementsByClassName('dplayer-setting-icon')[0];
        const settingBox = this.element.getElementsByClassName('dplayer-setting-box')[0];
        const mask = this.element.getElementsByClassName('dplayer-mask')[0];
        settingBox.innerHTML = settingHTML.original;

        const closeSetting = () => {
            if (settingBox.classList.contains('dplayer-setting-box-open')) {
                settingBox.classList.remove('dplayer-setting-box-open');
                mask.classList.remove('dplayer-mask-show');
                setTimeout(() => {
                    settingBox.classList.remove('dplayer-setting-box-narrow');
                    settingBox.innerHTML = settingHTML.original;
                    settingEvent();
                }, 300);
            }
        };
        const openSetting = () => {
            settingBox.classList.add('dplayer-setting-box-open');
            mask.classList.add('dplayer-mask-show');
        };

        mask.addEventListener('click', () => {
            closeSetting();
        });
        settingIcon.addEventListener('click', () => {
            openSetting();
        });

        let loop = this.option.loop;
        const danContainer = this.element.getElementsByClassName('dplayer-danmaku')[0];
        let showdan = true;
        const settingEvent = () => {
            // loop control
            const loopEle = this.element.getElementsByClassName('dplayer-setting-loop')[0];
            const loopToggle = loopEle.getElementsByClassName('dplayer-toggle-setting-input')[0];

            loopToggle.checked = loop;

            loopEle.addEventListener('click', () => {
                loopToggle.checked = !loopToggle.checked;
                if (loopToggle.checked) {
                    loop = true;
                    this.video.loop = loop;
                }
                else {
                    loop = false;
                    this.video.loop = loop;
                }
                closeSetting();
            });

            // show danmaku control
            const showDanEle = this.element.getElementsByClassName('dplayer-setting-showdan')[0];
            const showDanToggle = showDanEle.getElementsByClassName('dplayer-showdan-setting-input')[0];

            showDanToggle.checked = showdan;

            showDanEle.addEventListener('click', () => {
                showDanToggle.checked = !showDanToggle.checked;
                if (showDanToggle.checked) {
                    showdan = true;
                    if (this.option.danmaku) {
                        for (let i = 0; i < this.dan.length; i++) {
                            if (this.dan[i].time >= this.video.currentTime) {
                                this.danIndex = i;
                                break;
                            }
                            this.danIndex = this.dan.length;
                        }
                        danmakuTime = setInterval(() => {
                            let item = this.dan[this.danIndex];
                            while (item && this.video.currentTime >= parseFloat(item.time)) {
                                danmakuIn(item.text, item.color, item.type);
                                item = this.dan[++this.danIndex];
                            }
                        }, 0);
                    }
                }
                else {
                    showdan = false;
                    if (this.option.danmaku) {
                        clearInterval(danmakuTime);
                        danContainer.innerHTML = `<div class="dplayer-danmaku-item  dplayer-danmaku-item--demo"></div>`;
                        this.danTunnel = {
                            right: {},
                            top: {},
                            bottom: {}
                        };
                        this.itemDemo = this.element.getElementsByClassName('dplayer-danmaku-item')[0];
                    }
                }
                closeSetting();
            });

            // speed control
            const speedEle = this.element.getElementsByClassName('dplayer-setting-speed')[0];
            speedEle.addEventListener('click', () => {
                settingBox.classList.add('dplayer-setting-box-narrow');
                settingBox.innerHTML = settingHTML.speed;

                const speedItem = settingBox.getElementsByClassName('dplayer-setting-speed-item');
                for (let i = 0; i < speedItem.length; i++) {
                    speedItem[i].addEventListener('click', () => {
                        this.video.playbackRate = speedItem[i].dataset.speed;
                        closeSetting();
                    });
                }
            });

            if (this.option.danmaku) {
                // danmaku opacity
                bar.danmakuBar = this.element.getElementsByClassName('dplayer-danmaku-bar-inner')[0];
                const danmakuBarWrapWrap = this.element.getElementsByClassName('dplayer-danmaku-bar-wrap')[0];
                const danmakuBarWrap = this.element.getElementsByClassName('dplayer-danmaku-bar')[0];
                const danmakuSettingBox = this.element.getElementsByClassName('dplayer-setting-danmaku')[0];
                const dWidth = 130;
                this.updateBar('danmaku', danOpacity, 'width');

                const danmakuMove = (event) => {
                    const e = event || window.event;
                    let percentage = (e.clientX - getElementViewLeft(danmakuBarWrap)) / dWidth;
                    percentage = percentage > 0 ? percentage : 0;
                    percentage = percentage < 1 ? percentage : 1;
                    this.updateBar('danmaku', percentage, 'width');
                    const items = this.element.getElementsByClassName('dplayer-danmaku-item');
                    for (let i = 0; i < items.length; i++) {
                        items[i].style.opacity = percentage;
                    }
                    danOpacity = percentage;
                    localStorage.setItem('DPlayer-opacity', danOpacity);
                };
                const danmakuUp = () => {
                    document.removeEventListener('mouseup', danmakuUp);
                    document.removeEventListener('mousemove', danmakuMove);
                    danmakuSettingBox.classList.remove('dplayer-setting-danmaku-active');
                };

                danmakuBarWrapWrap.addEventListener('click', (event) => {
                    const e = event || window.event;
                    let percentage = (e.clientX - getElementViewLeft(danmakuBarWrap)) / dWidth;
                    percentage = percentage > 0 ? percentage : 0;
                    percentage = percentage < 1 ? percentage : 1;
                    this.updateBar('danmaku', percentage, 'width');
                    const items = this.element.getElementsByClassName('dplayer-danmaku-item');
                    for (let i = 0; i < items.length; i++) {
                        items[i].style.opacity = percentage;
                    }
                    danOpacity = percentage;
                    localStorage.setItem('DPlayer-opacity', danOpacity);
                });
                danmakuBarWrapWrap.addEventListener('mousedown', () => {
                    document.addEventListener('mousemove', danmakuMove);
                    document.addEventListener('mouseup', danmakuUp);
                    danmakuSettingBox.classList.add('dplayer-setting-danmaku-active');
                });
            }
        };
        settingEvent();


        /**
         * video events
         */
        // show video time: the metadata has loaded or changed
        this.video.addEventListener('durationchange', () => {
            if (this.video.duration !== 1) {           // compatibility: Android browsers will output 1 at first
                this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = secondToTime(this.video.duration);
            }
        });

        // show video loaded bar: to inform interested parties of progress downloading the media
        this.video.addEventListener('progress', () => {
            const percentage = this.video.buffered.length ? this.video.buffered.end(this.video.buffered.length - 1) / this.video.duration : 0;
            this.updateBar('loaded', percentage, 'width');
        });

        // video download error: an error occurs
        this.video.addEventListener('error', () => {
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = `Error happens ╥﹏╥`;
            this.trigger('pause');
        });

        // video can play: enough data is available that the media can be played
        this.video.addEventListener('canplay', () => {
            this.trigger('canplay');
        });

        // music end
        this.ended = false;
        this.video.addEventListener('ended', () => {
            this.updateBar('played', 1, 'width');
            if (!loop) {
                this.ended = true;
                this.pause();
                this.trigger('ended');
            }
        });

        this.video.addEventListener('play', () => {
            if (this.paused) {
                this.play();
            }
        });

        this.video.addEventListener('pause', () => {
            if (!this.paused) {
                this.pause();
            }
        });

        // control volume
        this.video.volume = parseInt(this.element.getElementsByClassName('dplayer-volume-bar-inner')[0].style.width) / 100;

        // loop
        this.video.loop = loop;

        // set duration time
        if (this.video.duration !== 1) {           // compatibility: Android browsers will output 1 at first
            this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = this.video.duration ? secondToTime(this.video.duration) : '00:00';
        }


        /**
         * danmaku display
         */
        const itemHeight = arrow ? 24 : 30;
        let danWidth;
        let danHeight;
        let itemY;
        this.danTunnel = {
            right: {},
            top: {},
            bottom: {}
        };

        const danItemRight = (ele) => {
            return danContainer.getBoundingClientRect().right - ele.getBoundingClientRect().right;
        };

        const danSpeed = (width) => {
            return (danWidth + width) / 5;
        };

        const getTunnel = (ele, type, width) => {
            const tmp = danWidth / danSpeed(width);

            for (let i = 0; ; i++) {
                let item = this.danTunnel[type][i + ''];
                if (item && item.length) {
                    for (let j = 0; j < item.length; j++) {
                        const danRight = danItemRight(item[j]) - 10;
                        if (danRight <= danWidth - (tmp * danSpeed(item[j].offsetWidth)) || danRight <= 0) {
                            break;
                        }
                        if (j === item.length - 1) {
                            this.danTunnel[type][i + ''].push(ele);
                            ele.addEventListener('animationend', () => {
                                this.danTunnel[type][i + ''].splice(0, 1);
                            });
                            return i % itemY;
                        }
                    }
                }
                else {
                    this.danTunnel[type][i + ''] = [ele];
                    ele.addEventListener('animationend', () => {
                        this.danTunnel[type][i + ''].splice(0, 1);
                    });
                    return i % itemY;
                }
            }
        };

        this.itemDemo = this.element.getElementsByClassName('dplayer-danmaku-item')[0];

        const danmakuIn = (text, color, type) => {
            if (!type) {
                type = 'right';
            }
            danWidth = danContainer.offsetWidth;
            danHeight = danContainer.offsetHeight;
            itemY = parseInt(danHeight / itemHeight);
            let item = document.createElement(`div`);
            item.classList.add(`dplayer-danmaku-item`);
            item.classList.add(`dplayer-danmaku-${type}`);
            item.innerHTML = text;
            item.style.opacity = danOpacity;
            item.style.color = color;
            item.addEventListener('animationend', () => {
                danContainer.removeChild(item);
            });

            // measure
            this.itemDemo.innerHTML = text;
            let itemWidth = this.itemDemo.offsetWidth;

            // adjust
            switch (type) {
                case 'right':
                    item.style.top = itemHeight * getTunnel(item, type, itemWidth) + 'px';
                    item.style.width = (itemWidth + 1) + 'px';
                    item.style.transform = `translateX(-${danWidth}px)`;
                    break;
                case 'top':
                    item.style.top = itemHeight * getTunnel(item, type) + 'px';
                    break;
                case 'bottom':
                    item.style.bottom = itemHeight * getTunnel(item, type) + 'px';
                    break;
                default:
                    console.error(`Can't handled danmaku type: ${type}`);
            }

            // insert
            danContainer.appendChild(item);

            // move
            item.classList.add(`dplayer-danmaku-move`);

            return item;
        };

        // danmaku
        if (this.option.danmaku) {
            this.danIndex = 0;
            this.readDanmaku();
        }
        else {
            // autoplay
            if (this.option.autoplay && !isMobile) {
                this.play();
            }
            else if (isMobile) {
                this.pause();
            }
        }


        /**
         * comment
         */
        const commentInput = this.element.getElementsByClassName('dplayer-comment-input')[0];
        const commentIcon = this.element.getElementsByClassName('dplayer-comment-icon')[0];
        const commentBox = this.element.getElementsByClassName('dplayer-comment-box')[0];
        const commentSettingIcon = this.element.getElementsByClassName('dplayer-comment-setting-icon')[0];
        const commentSettingBox = this.element.getElementsByClassName('dplayer-comment-setting-box')[0];
        const commentSendIcon = this.element.getElementsByClassName('dplayer-send-icon')[0];

        const htmlEncode = (str) => {
            return str.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;")
                .replace(/\//g, "&#x2f;");
        };

        const sendComment = () => {
            commentInput.blur();

            // text can't be empty
            if (!commentInput.value.replace(/^\s+|\s+$/g, '')) {
                alert(getTran('Please input danmaku!'));
                return;
            }

            const danmakuData = {
                token: this.option.danmaku.token,
                player: this.option.danmaku.id,
                author: 'DIYgod',
                time: this.video.currentTime,
                text: commentInput.value,
                color: this.element.querySelector('.dplayer-comment-setting-color input:checked').value,
                type: this.element.querySelector('.dplayer-comment-setting-type input:checked').value
            };
            this.option.apiBackend.send(this.option.danmaku.api, danmakuData);

            commentInput.value = '';
            closeComment();
            this.dan.splice(this.danIndex, 0, danmakuData);
            this.danIndex++;
            const item = danmakuIn(htmlEncode(danmakuData.text), danmakuData.color, danmakuData.type);
            item.style.border = `2px solid ${this.option.theme}`;
        };

        const closeCommentSetting = () => {
            if (commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
                commentSettingBox.classList.remove('dplayer-comment-setting-open');
            }
        };
        const toggleCommentSetting = () => {
            if (commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
                commentSettingBox.classList.remove('dplayer-comment-setting-open');
            }
            else {
                commentSettingBox.classList.add('dplayer-comment-setting-open');
            }
        };

        let disableHide = 0;
        const closeComment = () => {
            if (commentBox.classList.contains('dplayer-comment-box-open')) {
                commentBox.classList.remove('dplayer-comment-box-open');
                mask.classList.remove('dplayer-mask-show');
                clearInterval(disableHide);
                this.element.classList.remove('dplayer-show-controller');
                closeCommentSetting();
            }
        };
        const openComment = () => {
            commentBox.classList.add('dplayer-comment-box-open');
            mask.classList.add('dplayer-mask-show');
            disableHide = setInterval(() => {
                clearTimeout(hideTime);
            }, 1000);
            this.element.classList.add('dplayer-show-controller');
        };

        mask.addEventListener('click', () => {
            closeComment();
        });
        commentIcon.addEventListener('click', () => {
            openComment();
            setTimeout(() => {
                commentInput.focus();
            }, 300);
        });
        commentSettingIcon.addEventListener('click', () => {
            toggleCommentSetting();
        });

        // comment setting box
        this.element.getElementsByClassName('dplayer-comment-setting-color')[0].addEventListener('click', () => {
            const sele = this.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked+span');
            if (sele) {
                commentSettingIcon.getElementsByClassName('dplayer-fill')[0].style.fill = this.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked').value;
            }
        });

        commentInput.addEventListener('click', () => {
            closeCommentSetting();
        });
        commentInput.addEventListener('keydown', (e) => {
            const event = e || window.event;
            if (event.keyCode === 13) {
                sendComment();
            }
        });

        commentSendIcon.addEventListener('click', sendComment);


        /**
         * full screen
         */
        const resetAnimation = () => {
            danWidth = danContainer.offsetWidth;
            const items = this.element.getElementsByClassName('dplayer-danmaku-item');
            for (let i = 0; i < items.length; i++) {
                items[i].style.transform = `translateX(-${danWidth}px)`;
            }
        };

        this.element.addEventListener('fullscreenchange', () => {
            resetAnimation();
        });
        this.element.addEventListener('mozfullscreenchange', () => {
            resetAnimation();
        });
        this.element.addEventListener('webkitfullscreenchange', () => {
            resetAnimation();
        });
        // browser full screen
        this.element.getElementsByClassName('dplayer-full-icon')[0].addEventListener('click', () => {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
                if (this.element.requestFullscreen) {
                    this.element.requestFullscreen();
                }
                else if (this.element.mozRequestFullScreen) {
                    this.element.mozRequestFullScreen();
                }
                else if (this.element.webkitRequestFullscreen) {
                    this.element.webkitRequestFullscreen();
                }
                else if (this.video.webkitEnterFullscreen) {   // Safari for iOS
                    this.video.webkitEnterFullscreen();
                }
            }
            else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
            resetAnimation();
        });
        // web full screen
        this.element.getElementsByClassName('dplayer-full-in-icon')[0].addEventListener('click', () => {
            if (this.element.classList.contains('dplayer-fulled')) {
                this.element.classList.remove('dplayer-fulled');
            }
            else {
                this.element.classList.add('dplayer-fulled');
                resetAnimation();
            }
        });

        /**
         * hot key
         */
        const handleKeyDown = (e) => {
            const tag = document.activeElement.tagName.toUpperCase();
            const editable = document.activeElement.getAttribute('contenteditable');
            if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                const event = e || window.event;
                let percentage;
                switch (event.keyCode) {
                    case 32:
                        event.preventDefault();
                        this.toggle();
                        break;
                    case 37:
                        event.preventDefault();
                        this.video.currentTime = this.video.currentTime - 5;
                        break;
                    case 39:
                        event.preventDefault();
                        this.video.currentTime = this.video.currentTime + 5;
                        break;
                    case 38:
                        event.preventDefault();
                        percentage = this.video.volume + 0.1;
                        this.volume(percentage);
                        break;
                    case 40:
                        event.preventDefault();
                        percentage = this.video.volume - 0.1;
                        this.volume(percentage);
                        break;
                }
            }
        };
        if (this.option.hotkey) {
            document.addEventListener('keydown', handleKeyDown);
        }
        document.addEventListener('keydown', (e) => {              // Press ESC to quit web full screen
            const event = e || window.event;
            switch (event.keyCode) {
                case 27:
                    if (this.element.classList.contains('dplayer-fulled')) {
                        this.element.classList.remove('dplayer-fulled');
                        resetAnimation();
                    }
                    break;
            }
        });

        /**
         * right key
         */
        const menu = this.element.getElementsByClassName('dplayer-menu')[0];
        this.element.addEventListener('contextmenu', (e) => {
            const event = e || window.event;
            event.preventDefault();

            menu.classList.add('dplayer-menu-show');

            const clientRect = this.element.getBoundingClientRect();
            const menuLeft = event.clientX - clientRect.left;
            const menuTop = event.clientY - clientRect.top;
            if (menuLeft + menu.offsetWidth >= clientRect.width) {
                menu.style.right = clientRect.width - menuLeft + 'px';
                menu.style.left = 'initial';
            }
            else {
                menu.style.left = event.clientX - this.element.getBoundingClientRect().left + 'px';
                menu.style.right = 'initial';
            }
            if (menuTop + menu.offsetHeight >= clientRect.height) {
                menu.style.bottom = clientRect.height - menuTop + 'px';
                menu.style.top = 'initial';
            }
            else {
                menu.style.top = event.clientY - this.element.getBoundingClientRect().top + 'px';
                menu.style.bottom = 'initial';
            }

            mask.classList.add('dplayer-mask-show');
            mask.addEventListener('click', () => {
                mask.classList.remove('dplayer-mask-show');
                menu.classList.remove('dplayer-menu-show');
           });
        });

        /**
         * Screenshot
         */
        if (this.option.screenshot) {
            const camareIcon = this.element.getElementsByClassName('dplayer-camera-icon')[0];
            camareIcon.addEventListener('click', () => {
                const canvas = document.createElement("canvas");
                canvas.width = this.video.videoWidth;
                canvas.height = this.video.videoHeight;
                canvas.getContext('2d').drawImage(this.video, 0, 0, canvas.width, canvas.height);

                camareIcon.href = canvas.toDataURL();
                camareIcon.download = "DPlayer.png";
            });
        }

        index++;
    }

    /**
     * Play music
     */
    play(time) {
        if (Object.prototype.toString.call(time) === '[object Number]') {
            this.video.currentTime = time;
        }
        this.paused = false;
        if (this.video.paused) {
            this.bezel.innerHTML = this.getSVG('play');
            this.bezel.classList.add('dplayer-bezel-transition');
        }    

        this.playButton.innerHTML = this.getSVG('pause');

        this.video.play();
        if (this.playedTime) {
            this.clearTime();
        }
        this.setTime();
        this.element.classList.add('dplayer-playing');
        this.trigger('play');
    }

    /**
     * Pause music
     */
    pause() {
        this.paused = true;
        this.element.classList.remove('dplayer-loading');

        if (!this.video.paused) {
            this.bezel.innerHTML = this.getSVG('pause');
            this.bezel.classList.add('dplayer-bezel-transition');
        }

        this.ended = false;
        this.playButton.innerHTML = this.getSVG('play');
        this.video.pause();
        this.clearTime();
        this.element.classList.remove('dplayer-playing');
        this.trigger('pause');
    }

    /**
     * Set volume
     */
    volume(percentage) {
        percentage = percentage > 0 ? percentage : 0;
        percentage = percentage < 1 ? percentage : 1;
        this.updateBar('volume', percentage, 'width');
        this.video.volume = percentage;
        if (this.video.muted) {
            this.video.muted = false;
        }
        this.switchVolumeIcon();
    }

    /**
     * Toggle between play and pause
     */
    toggle() {
        if (this.video.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }

    /**
     * attach event
     */
    on(name, func) {
        if (typeof func === 'function') {
            this.event[name].push(func);
        }
    }

    /**
     * Asynchronously read danmaku from all API endpoints
     */
    _readAllEndpoints (endpoints, finish) {
        let results = [];
        let readCount = 0;
        let cbk = (i) => (err, data) => {
            ++readCount;
            if (err) {
                if (err.response)
                    alert(err.response.msg);
                else
                    console.log('Request was unsuccessful: ' + err.status);
                results[i] = [];
            }
            else {
                results[i] = data;
            }
            if (readCount == endpoints.length) {
                return finish(results);
            }
        };

        for (let i = 0; i < endpoints.length; ++i) {
            this.option.apiBackend.read(endpoints[i], cbk(i));
        }
    }

    /**
     * Read danmaku from API
     */
    readDanmaku() {
        const isMobile = /mobile/i.test(window.navigator.userAgent);
        let apiurl;
        if (this.option.danmaku.maximum) {
            apiurl = `${this.option.danmaku.api}?id=${this.option.danmaku.id}&max=${this.option.danmaku.maximum}`;
        }
        else {
            apiurl = `${this.option.danmaku.api}?id=${this.option.danmaku.id}`;
        }
        let endpoints = (this.option.danmaku.addition || []).slice(0);
        endpoints.push(apiurl);

        this._readAllEndpoints(endpoints, (results) => {
            this.danIndex = 0;
            this.dan = [].concat.apply([], results).sort((a, b) => a.time - b.time);
            this.element.getElementsByClassName('dplayer-danloading')[0].style.display = 'none';

            // autoplay
            if (this.option.autoplay && !isMobile) {
                this.play();
            }
            else if (isMobile) {
                this.pause();
            }
        });
    }

    /**
     * Switch to a new video
     *
     * @param {Object} video - new video info
     * @param {Object} danmaku - new danmaku info
     */
    switchVideo(video, danmaku) {
        this.video.src = video.url;
        this.video.poster = video.pic ? video.pic : '';
        this.video.currentTime = 0;
        this.pause();
        if (danmaku) {
            this.dan = [];
            this.danIndex = 0;
            this.element.getElementsByClassName('dplayer-danloading')[0].style.display = 'block';
            this.updateBar('played', 0, 'width');
            this.updateBar('loaded', 0, 'width');
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = '00:00';
            this.element.getElementsByClassName('dplayer-danmaku')[0].innerHTML = `<div class="dplayer-danmaku-item  dplayer-danmaku-item--demo"></div>`;
            this.danTunnel = {
                right: {},
                top: {},
                bottom: {}
            };
            this.itemDemo = this.element.getElementsByClassName('dplayer-danmaku-item')[0];
            this.option.danmaku = danmaku;
            this.readDanmaku();
        }
    }
}

module.exports = DPlayer;