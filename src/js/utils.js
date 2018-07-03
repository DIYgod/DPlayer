const isMobile = /mobile/i.test(window.navigator.userAgent);

const utils = {

    /**
    * Parse second to time string
    *
    * @param {Number} second
    * @return {String} 00:00 or 00:00:00
    */
    secondToTime: (second) => {
        const add0 = (num) => num < 10 ? '0' + num : '' + num;
        const hour = Math.floor(second / 3600);
        const min = Math.floor((second - hour * 3600) / 60);
        const sec = Math.floor(second - hour * 3600 - min * 60);
        return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
    },

    /**
     * control play progress
     */
    // get element's view position
    getElementViewLeft: (element) => {
        let actualLeft = element.offsetLeft;
        let current = element.offsetParent;
        const elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            while (current !== null) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
        }
        else {
            while (current !== null && current !== element) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
        }
        return actualLeft - elementScrollLeft;
    },

    getScrollPosition () {
        return {
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        };
    },

    setScrollPosition ({left = 0, top = 0}) {
        if (this.isFirefox) {
            document.documentElement.scrollLeft = left;
            document.documentElement.scrollTop = top;
        }
        else {
            window.scrollTo(left, top);
        }
    },

    isMobile: isMobile,

    isFirefox: /firefox/i.test(window.navigator.userAgent),

    isChrome: /chrome/i.test(window.navigator.userAgent),

    storage: {
        set: (key, value) => {
            localStorage.setItem(key, value);
        },

        get: (key) => localStorage.getItem(key)
    },

    cumulativeOffset: (element) => {
        let top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top: top,
            left: left
        };
    },

    nameMap: {
        dragStart: isMobile ? 'touchstart' : 'mousedown',
        dragMove: isMobile ? 'touchmove' : 'mousemove',
        dragEnd: isMobile ? 'touchend' : 'mouseup'
    },

    color2Number: (color) => {
        if (color[0] === '#') {
            color = color.substr(1);
        }
        if (color.length === 3) {
            color = `${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}`;
        }
        return parseInt(color, 16) + 0x000000 & 0xffffff;
    },

    number2Color: (number) => '#' + ('00000' + number.toString(16)).slice(-6),

    number2Type: (number) => {
        switch (number) {
        case 0:
            return 'right';
        case 1:
            return 'top';
        case 2:
            return 'bottom';
        default:
            return 'right';
        }
    },
};

export default utils;