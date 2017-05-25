/*
 * xhr.status ---> fail
 * response.code === 1 ---> success
 * response.code !== 1 ---> error
 * */

const SendXMLHttpRequest = (url, data, success, error, fail) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                const response = JSON.parse(xhr.responseText);

                if (response.code !== 1) {
                    return error(xhr, response);
                }

                return success(xhr, response);
            }

            fail(xhr);
        }
    };

    xhr.open(data !== null ? 'POST' : 'GET', url, true);
    xhr.send(data !== null ? JSON.stringify(data) : null);
};

module.exports = {
    send: (endpoint, danmakuData) => {
        SendXMLHttpRequest(endpoint, danmakuData, (xhr, response) => {
            console.log('Post danmaku: ', response);
        }, (xhr, response) => {
            alert(response.msg);
        }, (xhr) => {
            console.log('Request was unsuccessful: ' + xhr.status);
        });
    },

    read: (endpoint, cbk) => {
        SendXMLHttpRequest(endpoint, null, (xhr, response) => {
            cbk(null, response.danmaku);
        }, (xhr, response) => {
            cbk({ status: xhr.status, response });
        }, (xhr) => {
            cbk({ status: xhr.status, response: null });
        });
    }
};