(() => {

    class DPlayer {
    /**
     * DPlayer constructor function
     *
     * @param {Object} option - See README
     * @constructor
     */
    constructor(option) {
        this.svg = {
            'play': ['0 0 16 32', 'M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z'],
            'pause': ['0 0 17 32', 'M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z'],
            'volume-up': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z'],
            'volume-down': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z'],
            'volume-off': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z'],
            'loop': ['0 0 32 32', 'M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z'],
            'full': ['0 0 32 33', 'M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z'],
            'setting': ['0 0 32 28', 'M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z'],
            'right': ['0 0 32 32', 'M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z'],
            'comment': ['0 0 32 32', 'M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z'],
            'comment-off': ['0 0 32 32', 'M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z'],
            'send': ['0 0 32 32', 'M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z']
        };
        this.getSVG = (type) => {
            return `
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="${this.svg[type][0]}" width="100%">
                    <use class="dplayer-svg-shadow" xlink:href="#dplayer-${type}"></use>
                    <path class="dplayer-fill" d="${this.svg[type][1]}" id="dplayer-${type}"></path>
                </svg>
            `;
        };

        this.isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
        // compatibility: some mobile browsers don't suppose autoplay
        if (this.isMobile) {
            option.autoplay = false;
        }

        // default options
        const defaultOption = {
            element: document.getElementsByClassName('dplayer')[0],
            autoplay: false,
            theme: '#b7daff',
            loop: false
        };
        for (let defaultKey in defaultOption) {
            if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
                option[defaultKey] = defaultOption[defaultKey];
            }
        }

        this.option = option;
        this.loop = option.loop;

        /**
         * Parse second to 00:00 format
         *
         * @param {Number} second
         * @return {String} 00:00 format
         */
        this.secondToTime = (second) => {
            const add0 = (num) => {
                return num < 10 ? '0' + num : '' + num;
            };
            const min = parseInt(second / 60);
            const sec = parseInt(second - min * 60);
            return add0(min) + ':' + add0(sec);
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
            this[type + 'Bar'].style[direction] = percentage * 100 + '%';
        };

        // define DPlayer events
        this.eventTypes = ['play', 'pause', 'canplay', 'playing', 'ended', 'error'];
        this.event = {};
        for (let type of this.eventTypes) {
            this.event[type] = [];
        }
        this.trigger = (type) => {
            for (let func of this.event[type]) {
                func();
            }
        }
    }

    /**
     * AutoLink initialization function
     */
    init() {
        this.element = this.option.element;

        this.element.innerHTML = `
            <div class="dplayer-mask"></div>
            <div class="dplayer-video-wrap">
                <video class="dplayer-video" poster="${this.option.video.pic}">
                    <source src="${this.option.video.url}" type="video/mp4">
                </video>
                <div class="dplayer-danmaku"></div>
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
                    <div class="dplayer-comment">
                        <button class="dplayer-icon dplayer-comment-icon">`
            +               this.getSVG('comment')
            + `         </button>
                        <div class="dplayer-comment-box">
                            <div class="dplayer-comment-setting"></div>
                            <div class="dplayer-comment-setting-box">
                                <div class="dplayer-comment-setting-type">
                                    <label>
                                        <input type="radio" name="type" value="none" checked>
                                        <span>正常</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="type" value="top">
                                        <span>顶部</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="type" value="bottom">
                                        <span>底部</span>
                                    </label>
                                </div>
                                <div class="dplayer-comment-setting-color">
                                    <label>
                                        <input type="radio" name="color" value="#fff">
                                        <span style="background: #fff; border: 1px solid rgba(0,0,0,.1);"></span>
                                    </label>
                                    <label>
                                        <input type="radio" name="color" value="#e54256">
                                        <span style="background: #e54256"></span>
                                    </label>
                                    <label>
                                        <input type="radio" name="color" value="#ffe133">
                                        <span style="background: #ffe133"></span>
                                    </label>
                                    <label>
                                        <input type="radio" name="color" value="#39ccff">
                                        <span style="background: #39ccff"></span>
                                    </label>
                                    <label>
                                        <input type="radio" name="color" value="#f424ff">
                                        <span style="background: #f424ff"></span>
                                    </label>
                                    <label>
                                        <input type="radio" name="color" value="#ff9d33">
                                        <span style="background: #ff9d33"></span>
                                    </label>
                                    <label>
                                        <input type="radio" name="color" value="#bde846">
                                        <span style="background: #bde846"></span>
                                    </label>
                                    <label>
                                        <input type="color" name="scolor">
                                        <span style="background: #fff; border: 1px dashed rgba(0,0,0,.4);"></span>
                                    </label>
                                </div>
                            </div>
                            <input class="dplayer-comment-input" type="text" placeholder="输入弹幕，回车发送">
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
                    <button class="dplayer-icon dplayer-full-icon">`
            +           this.getSVG('full')
            + `     </button>
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
        `;

        // get this audio object
        this.audio = this.element.getElementsByClassName('dplayer-video')[0];

        this.ptime = this.element.getElementsByClassName('dplayer-ptime')[0];

        // play and pause button
        this.playButton = this.element.getElementsByClassName('dplayer-play-icon')[0];
        this.toggle = () => {
            if (this.audio.paused) {
                this.play();
            }
            else {
                this.pause();
            }
        };
        this.playButton.addEventListener('click', this.toggle);
        this.element.getElementsByClassName('dplayer-video-wrap')[0].addEventListener('click', this.toggle);
        this.element.getElementsByClassName('dplayer-controller-mask')[0].addEventListener('click', this.toggle);

        /*
         * control play progress
         */
        this.playedBar = this.element.getElementsByClassName('dplayer-played')[0];
        this.loadedBar = this.element.getElementsByClassName('dplayer-loaded')[0];
        this.bar = this.element.getElementsByClassName('dplayer-bar-wrap')[0];
        let barWidth;

        this.audio.addEventListener('seeked', () => {
            if (this.option.danmaku) {
                for (let i = 0; i < this.dan.length; i++) {
                    if (this.dan[i].time >= this.audio.currentTime) {
                        this.danIndex = i;
                        return;
                    }
                }
            }
        });

        this.setTime = () => {
            if (this.option.danmaku) {
                this.playedTime = setInterval(() => {
                    this.updateBar('played', this.audio.currentTime / this.audio.duration, 'width');
                    this.ptime.innerHTML = this.secondToTime(this.audio.currentTime);
                    this.trigger('playing');

                    const item = this.dan[this.danIndex];
                    if (item && this.audio.currentTime >= item.time) {
                        this.danmakuIn(item.text, item.color, item.type);
                        this.danIndex++;
                    }
                }, 100);
            }
            else {
                this.playedTime = setInterval(() => {
                    this.updateBar('played', this.audio.currentTime / this.audio.duration, 'width');
                    this.ptime.innerHTML = this.secondToTime(this.audio.currentTime);
                    this.trigger('playing');
                }, 100);
            }
        };

        this.bar.addEventListener('click', (event) => {
            const e = event || window.event;
            barWidth = this.bar.clientWidth;
            let percentage = (e.clientX - getElementViewLeft(this.bar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('played', percentage, 'width');
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = this.secondToTime(percentage * this.audio.duration);
            this.audio.currentTime = parseFloat(this.playedBar.style.width) / 100 * this.audio.duration;
        });

        const thumbMove = (event) => {
            const e = event || window.event;
            let percentage = (e.clientX - getElementViewLeft(this.bar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('played', percentage, 'width');
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = this.secondToTime(percentage * this.audio.duration);
        };

        const thumbUp = () => {
            document.removeEventListener('mouseup', thumbUp);
            document.removeEventListener('mousemove', thumbMove);
            this.audio.currentTime = parseFloat(this.playedBar.style.width) / 100 * this.audio.duration;
            this.setTime();
        };

        this.bar.addEventListener('mousedown', () => {
            barWidth = this.bar.clientWidth;
            clearInterval(this.playedTime);
            document.addEventListener('mousemove', thumbMove);
            document.addEventListener('mouseup', thumbUp);
        });

        /*
         * control volume
         */
        this.volumeBar = this.element.getElementsByClassName('dplayer-volume-bar-inner')[0];
        const volumeEle = this.element.getElementsByClassName('dplayer-volume')[0];
        const volumeBarWrapWrap = this.element.getElementsByClassName('dplayer-volume-bar-wrap')[0];
        const volumeBarWrap = this.element.getElementsByClassName('dplayer-volume-bar')[0];
        const volumeicon = this.element.getElementsByClassName('dplayer-volume-icon')[0];
        const vWidth = 35;
        const switchVolumeIcon = () => {
            if (this.audio.volume >= 0.8) {
                volumeicon.innerHTML = this.getSVG('volume-up');
            }
            else if (this.audio.volume > 0) {
                volumeicon.innerHTML = this.getSVG('volume-down');
            }
            else {
                volumeicon.innerHTML = this.getSVG('volume-off');
            }
        };
        const volumeMove = (event) => {
            const e = event || window.event;
            let percentage = (e.clientX - getElementViewLeft(volumeBarWrap) - 5.5) / vWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('volume', percentage, 'width');
            this.audio.volume = percentage;
            if (this.audio.muted) {
                this.audio.muted = false;
            }
            switchVolumeIcon();
        };
        const volumeUp = () => {
            document.removeEventListener('mouseup', volumeUp);
            document.removeEventListener('mousemove', volumeMove);
            volumeEle.classList.remove('dplayer-volume-active');
        };

        volumeBarWrapWrap.addEventListener('click', (event) => {
            const e = event || window.event;
            let percentage = (e.clientX - getElementViewLeft(volumeBarWrap) - 5.5) / vWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.updateBar('volume', percentage, 'width');
            this.audio.volume = percentage;
            if (this.audio.muted) {
                this.audio.muted = false;
            }
            switchVolumeIcon();
        });
        volumeBarWrapWrap.addEventListener('mousedown', () => {
            document.addEventListener('mousemove', volumeMove);
            document.addEventListener('mouseup', volumeUp);
            volumeEle.classList.add('dplayer-volume-active');
        });
        volumeicon.addEventListener('click', () => {
            if (this.audio.muted) {
                this.audio.muted = false;
                switchVolumeIcon();
                this.updateBar('volume', this.audio.volume, 'width');
            }
            else {
                this.audio.muted = true;
                volumeicon.innerHTML = this.getSVG('volume-off');
                this.updateBar('volume', 0, 'width');
            }
        });

        // get element's view position
        function getElementViewLeft(element) {
            let actualLeft = element.offsetLeft;
            let current = element.offsetParent;
            let elementScrollLeft;
            while (current !== null) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
            return actualLeft - elementScrollLeft;
        }

        function getElementViewTop(element) {
            let actualTop = element.offsetTop;
            let current = element.offsetParent;
            let elementScrollTop;
            while (current !== null) {
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }
            elementScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
            return actualTop - elementScrollTop;
        }

        /**
         * setting
         */
        const settingHTML = {
            'original': `
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">洗脑循环</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle" id="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">速度</span>
                        <div class="dplayer-toggle">`
                +           this.getSVG('right')
                + `     </div>
                    </div>`,
            'speed': `
                    <div class="dplayer-setting-speed-item" data-speed="0.5">
                        <span class="dplayer-label">0.5</span>
                    </div>
                    <div class="dplayer-setting-speed-item" data-speed="0.75">
                        <span class="dplayer-label">0.75</span>
                    </div>
                    <div class="dplayer-setting-speed-item" data-speed="1">
                        <span class="dplayer-label">正常</span>
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

        const settingEvent = () => {
            // loop control
            const loopEle = this.element.getElementsByClassName('dplayer-setting-loop')[0];
            const loopToggle = loopEle.getElementsByClassName('dplayer-toggle-setting-input')[0];

            loopToggle.checked = this.loop;

            loopEle.addEventListener('click', () => {
                loopToggle.checked = !loopToggle.checked;
                if (loopToggle.checked) {
                    this.loop = true;
                    this.audio.loop = this.loop;
                }
                else {
                    this.loop = false;
                    this.audio.loop = this.loop;
                }
                closeSetting();
            });
            loopToggle.addEventListener('change', () => {
                if (loopToggle.checked) {
                    this.loop = true;
                    this.audio.loop = this.loop;
                }
                else {
                    this.loop = false;
                    this.audio.loop = this.loop;
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
                        this.audio.playbackRate = speedItem[i].dataset.speed;
                        closeSetting();
                    });
                }
            });
        };
        settingEvent();

        /*
         * comment
         */
        const commentIcon = this.element.getElementsByClassName('dplayer-comment-icon')[0];
        const commentBox = this.element.getElementsByClassName('dplayer-comment-box')[0];
        const commentSettingIcon = this.element.getElementsByClassName('dplayer-comment-setting')[0];
        const commentSettingBox = this.element.getElementsByClassName('dplayer-comment-setting-box')[0];

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

        const closeComment = () => {
            if (commentBox.classList.contains('dplayer-comment-box-open')) {
                commentBox.classList.remove('dplayer-comment-box-open');
                mask.classList.remove('dplayer-mask-show');
            }
        };
        const openComment = () => {
            commentBox.classList.add('dplayer-comment-box-open');
            mask.classList.add('dplayer-mask-show');
        };

        mask.addEventListener('click', () => {
            closeComment();
            closeCommentSetting();
        });
        commentIcon.addEventListener('click', () => {
            openComment();
        });
        commentSettingIcon.addEventListener('click', () => {
            toggleCommentSetting();
        });

        /*
         * auto hide controller
         */
        let hideTime = 0;
        const hideController = () => {
            this.element.classList.remove('dplayer-hide-controller');
            clearTimeout(hideTime);
            hideTime = setTimeout(() => {
                if (this.audio.played.length) {
                    this.element.classList.add('dplayer-hide-controller');
                    closeSetting();
                    closeComment();
                    closeCommentSetting();
                }
            }, 2000);
        };
        this.element.addEventListener('mousemove', hideController);
        this.element.addEventListener('click', hideController);

        /*
         * full screen
         */
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
            } else {
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
        });

        /*
         * audio events
         */
        // show audio time: the metadata has loaded or changed
        this.audio.addEventListener('durationchange', () => {
            if (this.audio.duration !== 1) {           // compatibility: Android browsers will output 1 at first
                this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = this.secondToTime(this.audio.duration);
            }
        });

        // show audio loaded bar: to inform interested parties of progress downloading the media
        this.audio.addEventListener('progress', () => {
            const percentage = this.audio.buffered.length ? this.audio.buffered.end(this.audio.buffered.length - 1) / this.audio.duration : 0;
            this.updateBar('loaded', percentage, 'width');
        });

        // audio download error: an error occurs
        this.audio.addEventListener('error', () => {
            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = `Error happens ╥﹏╥`;
            this.trigger('pause');
        });

        // audio can play: enough data is available that the media can be played
        this.audio.addEventListener('canplay', () => {
            this.trigger('canplay');
        });

        // music end
        this.ended = false;
        this.audio.addEventListener('ended', () => {
            this.updateBar('played', 1, 'width');
            if (!this.loop) {
                this.ended = true;
                this.pause();
                this.trigger('ended');
            }
        });

        // control volume
        this.audio.volume = parseInt(this.element.getElementsByClassName('dplayer-volume-bar-inner')[0].style.width) / 100;

        // loop
        this.audio.loop = this.loop;

        // set duration time
        if (this.audio.duration !== 1) {           // compatibility: Android browsers will output 1 at first
            this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = this.audio.duration ? this.secondToTime(this.audio.duration) : '00:00';
        }

        /*
         * danmaku display
         */
        const danContainer = this.element.getElementsByClassName('dplayer-danmaku')[0];
        const danWidth = danContainer.offsetWidth;
        const danHeight = danContainer.offsetHeight;
        const itemHeight = 30;
        const itemY = danHeight / itemHeight;
        let danTunnel = {};

        const danItemRight = (ele) => {
            return danContainer.getBoundingClientRect().right - ele.getBoundingClientRect().right;
        };

        const danSpeed = (ele) => {
            return (danWidth + ele.offsetWidth) / 5;
        };

        const getTunnel = (ele) => {
            const tmp = danWidth / danSpeed(ele);

            for (let i = 0; i <= itemY - 1; i++) {
                let item = danTunnel[i + ''];
                if (item && item.length) {
                    for (let j = 0; j < item.length; j++) {
                        const danRight = danItemRight(item[j]) - 10;
                        if (danRight <= 640 - (tmp * danSpeed(item[j])) || danRight <= 0) {
                            break;
                        }
                        if (j === item.length - 1) {
                            danTunnel[i + ''].push(ele);
                            ele.addEventListener('animationend', () => {
                                danTunnel[i + ''].splice(0, 1);
                            });
                            return i;
                        }
                    }
                }
                else {
                    danTunnel[i + ''] = [ele];
                    ele.addEventListener('animationend', () => {
                        danTunnel[i + ''].splice(0, 1);
                    });
                    return i;
                }
            }
        };

        this.danmakuIn = (text, color, type) => {
            let item = document.createElement(`div`);
            let content = document.createTextNode(text);
            item.classList.add(`dplayer-danmaku-item`);
            item.style.color = color;
            item.appendChild(content);

            // insert
            danContainer.appendChild(item);

            // adjust
            item.style.width = (item.offsetWidth + 1) + 'px';
            item.style.transform = `translateX(-${danWidth}px)`;
            item.style.top = itemHeight * getTunnel(item) + 'px';
            item.addEventListener('animationend', () => {
                danContainer.removeChild(item);
            });

            // move
            item.classList.add(`dplayer-danmaku-move`);
        };
        
        // danmaku
        if (this.option.danmaku) {
            this.danIndex = 0;
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                        this.dan = JSON.parse(xhr.responseText).danmaku.sort((a, b) => a.time - b.time);
                        console.log(this.dan);

                        // autoplay
                        if (this.option.autoplay && !this.isMobile) {
                            this.play();
                        }
                        else if (this.isMobile) {
                            this.pause();
                        }
                    }
                    else {
                        console.log('Request was unsuccessful: ' + xhr.status);
                    }
                }
            };
            xhr.open('get', this.option.danmaku.get, true);
            xhr.send(null);
        }
        else {
            // autoplay
            if (this.option.autoplay && !this.isMobile) {
                this.play();
            }
            else if (this.isMobile) {
                this.pause();
            }
        }
    }

    /**
     * Play music
     */
    play() {
        if (this.audio.paused) {
            this.playButton.innerHTML = this.getSVG('pause');

            this.audio.play();
            if (this.playedTime) {
                clearInterval(this.playedTime);
            }
            this.setTime();
            this.element.classList.add('dplayer-playing');
            this.trigger('play');
        }
    }

    /**
     * Pause music
     */
    pause() {
        if (!this.audio.paused || this.ended) {
            this.ended = false;
            this.playButton.innerHTML = this.getSVG('play');
            this.audio.pause();
            clearInterval(this.playedTime);
            this.element.classList.remove('dplayer-playing');
            this.trigger('pause');
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
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = DPlayer
}
else {
    window.DPlayer = DPlayer;
}
})();