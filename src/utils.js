module.exports = {

    /**
    * Parse second to 00:00 format
    *
    * @param {Number} second
    * @return {String} 00:00 format
    */
    secondToTime: (second) => {
        const add0 = (num) => num < 10 ? '0' + num : '' + num;
        const min = parseInt(second / 60);
        const sec = parseInt(second - min * 60);
        return add0(min) + ':' + add0(sec);
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
};
