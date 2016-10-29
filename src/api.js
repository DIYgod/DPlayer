export const send = (endpoint, danmakuData) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        const response = JSON.parse(xhr.responseText);
        if (response.code !== 1) {
          alert(response.msg);
        }
        else {
          console.log('Post danmaku: ', JSON.parse(xhr.responseText));
        }
      }
      else {
        console.log('Request was unsuccessful: ' + xhr.status);
      }
    }
  };
  xhr.open('post', endpoint, true);
  xhr.send(JSON.stringify(danmakuData));
};

export const read = (endpoint, cbk) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        const response = JSON.parse(xhr.responseText);
        if (response.code !== 1) {
          return cbk({ status: xhr.status, response });
        }
        else {
          return cbk(null, response.danmaku);
        }
      }
      else {
        return cbk({ status: xhr.status, response: null });
      }
    }
  };
  xhr.open('get', endpoint, true);
  xhr.send(null);
};