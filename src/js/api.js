/*
 * xhr.status ---> fail
 * response.code === 0 ---> success
 * response.code !== 0 ---> error
 * */

const SendXMLHttpRequest = (url, data, success, error, fail) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                const response = JSON.parse(xhr.responseText);

                if (response.code !== 0) {
                    return error(xhr, response);
                }

                return success(xhr, response);
            }

            fail(xhr);
        }
    };

    xhr.open(data !== null ? 'POST' : 'GET', url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(data !== null ? JSON.stringify(data) : null);
};

export default {
    send: (endpoint, danmakuData, callback) => {
        SendXMLHttpRequest(endpoint, danmakuData, (xhr, response) => {
            console.log('Post danmaku: ', response);
            if (callback) {
                callback();
            }
        }, (xhr, response) => {
            alert(response.msg);
        }, (xhr) => {
            console.log('Request was unsuccessful: ' + xhr.status);
        });
    },

    read: (endpoint, callback) => {
        SendXMLHttpRequest(endpoint, null, (xhr, response) => {
            callback(null, response.danmaku);
        }, (xhr, response) => {
            callback({ status: xhr.status, response });
        }, (xhr) => {
            callback({ status: xhr.status, response: null });
        });
    }
};
