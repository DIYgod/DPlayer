# DPlayer

[![npm](https://img.shields.io/npm/v/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![CDNJS](https://img.shields.io/cdnjs/v/dplayer.svg?style=flat-square)](https://cdnjs.com/libraries/dplayer)
[![npm](https://img.shields.io/npm/l/dplayer.svg?style=flat-square)](https://github.com/DIYgod/DPlayer/blob/master/LICENSE)
[![devDependency Status](https://img.shields.io/david/dev/DIYgod/dplayer.svg?style=flat-square)](https://david-dm.org/DIYgod/DPlayer#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![Travis](https://img.shields.io/travis/DIYgod/DPlayer.svg?style=flat-square)](https://travis-ci.org/DIYgod/DPlayer)
[![%e2%9d%a4](https://img.shields.io/badge/made%20with-%e2%9d%a4-ff69b4.svg?style=flat-square)](https://www.anotherhome.net/)

> Wow, such a lovely HTML5 danmaku video player

## Introduction

[Demo](http://dplayer.js.org/)

Using DPlayer on your project? [Let me know!](https://github.com/DIYgod/DPlayer/issues/31)

Screenshot
![image](http://i.imgur.com/207ch36.jpg)

## Install

```
$ npm install dplayer --save
```

## CDN

[cdnjs](https://cdnjs.com/libraries/dplayer)

## Usage

### HTML

```HTML
<div id="player1" class="dplayer"></div>
<!-- ... -->
<script src="dist/DPlayer.min.js"></script>
```

### JS

```JS
var dp = new DPlayer(option);
```

**Options**

```JS
var option = {
    element: document.getElementById('player1'),                       // Optional, player element
    autoplay: false,                                                   // Optional, autoplay video, not supported by mobile browsers
    theme: '#FADFA3',                                                  // Optional, theme color, default: #b7daff
    loop: true,                                                        // Optional, loop play music, default: true
    lang: 'zh',                                                        // Optional, language, `zh` for Chinese, `en` for English, default: Navigator language
    screenshot: true,                                                  // Optional, enable screenshot function, default: false, NOTICE: if set it to true, video and video poster must enable Cross-Origin
    hotkey: true,                                                      // Optional, binding hot key, including left right and Space, default: true
    preload: 'auto',                                                   // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    video: {                                                           // Required, video info
        url: '若能绽放光芒.mp4',                                         // Required, video url
        pic: '若能绽放光芒.png'                                          // Optional, music picture
    },
    danmaku: {                                                         // Optional, showing danmaku, ignore this option to hide danmaku
        id: '9E2E3368B56CDBB4',                                        // Required, danmaku id, NOTICE: it must be unique, can not use these in your new player: `https://dplayer.daoapp.io/list`
        api: 'https://dplayer.daoapp.io/',                             // Required, danmaku api
        token: 'tokendemo',                                            // Optional, danmaku token for api
        maximum: 1000,                                                 // Optional, maximum quantity of danmaku
        addition: ['https://dplayer.daoapp.io/bilibili?aid=4157142']   // Optional, additional danmaku, see: `Bilibili 弹幕支持`
    }
}
```

**API**

+ `dp.play()`                       // Resume play
+ `dp.play(time)`                   // Set currentTime
+ `dp.pause()`                      // Pause
+ `dp.toggle()`                     // Toggle between play and pause
+ `dp.on(event, handler)`           // Event binding
+ `dp.switchVideo(video, danmaku)`  // Switch to a new video, the format of `video` and `danmaku` is the same as option
+ `dp.dan`                          // Return danmaku info
+ `dp.danIndex`                     // Return danmaku index
+ `dp.video`                        // Return native video, most [native api](http://www.w3schools.com/tags/ref_av_dom.asp) are supported
 + `dp.video.currentTime`           // Returns the current playback position
 + `dp.video.loop`                  // Returns whether the video should start over again when finished
 + Most [native api](http://www.w3schools.com/tags/ref_av_dom.asp)

**Event binding**

`dp.on(event, handler)`

`event`:
+ `play`: Triggered when DPlayer start play
+ `pause`: Triggered when DPlayer paused
+ `canplay`: Triggered when enough data is available that DPlayer can be played
+ `playing`: Triggered periodically when DPlayer is playing
+ `ended`: Triggered when DPlayer ended
+ `error`: Triggered when an error occurs

**bilibili 弹幕及直链支持**

弹幕

API: `https://dplayer.daoapp.io/bilibili?aid=【bilibili视频AV号】`

```JS
var option = {
    danmaku: {
        // ...
        addition: ['https://dplayer.daoapp.io/bilibili?aid=【bilibili视频AV号】']
    }
}
```

直链

API: `https://dplayer.daoapp.io/video/bilibili?aid=【bilibili视频AV号】`

```JS
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            var response = JSON.parse(xhr.responseText);
            var dp1 = new DPlayer({
                // options
                screenshot: false,
                video: {
                    url: response.durl[0].url
                    // options
                }
            });
        }
        else {
            console.log('Request was unsuccessful: ' + xhr.status);
        }
    }
};
xhr.open('get', 'https://dplayer.daoapp.io/video/bilibili?aid=【bilibili视频AV号】', true);
xhr.send(null);
```

**Live Video (HTTP Live Streaming, M3U8 format) support**

It requires the library [hls.js](https://github.com/dailymotion/hls.js) and it should be loaded before DPlayer.min.js.

Live danamku is not supported  yet.

```HTML
<div id="player1" class="dplayer"></div>
<!-- ... -->
<script src="plugin/hls.min.js"></script>
<script src="dist/DPlayer.min.js"></script>

<script>
var dp = new DPlayer({
    // ...
    video: {
        url: 'xxx.m3u8'
        // ...
    }
});
</script>
```

**FLV format support**

It requires the library [flv.js](https://github.com/Bilibili/flv.js) and it should be loaded before DPlayer.min.js.

```HTML
<div id="player1" class="dplayer"></div>
<!-- ... -->
<script src="plugin/flv.min.js"></script>
<script src="dist/DPlayer.min.js"></script>

<script>
var dp = new DPlayer({
    // ...
    video: {
        url: 'xxx.flv'
        // ...
    }
});
</script>
```

**Work with module bundler**

```js
var DPlayer = require('DPlayer');
var dp = new DPlayer(option);
```

### Danmaku back-end

**Ready-made API:**

`https://dplayer.daoapp.io/`

**Build yourself:**

Required environment

- Node.js
- Mongodb

## Run in development

```
$ npm install
$ npm run dev
```

## Make a release

```
$ npm install
$ npm run build
```

## Related Projects

- [DPlayer-for-typecho](https://github.com/volio/DPlayer-for-typecho)

- [Hexo-tag-dplayer](https://github.com/NextMoe/hexo-tag-dplayer)

- [DPlayer_for_Z-BlogPHP](https://github.com/fghrsh/DPlayer_for_Z-BlogPHP)

- [纸飞机视频区插件(DPlayer for Discuz!)](https://coding.net/u/Click_04/p/video/git)

- [dplayer_py_backend](https://github.com/dixyes/dplayer_py_backend)

- [dplayer_lua_backend](https://github.com/dixyes/dplayer_lua_backend)

- [DPlayer for WordPress](https://github.com/BlueCocoa/DPlayer-WordPress)

## LICENSE

[The Star And Thank Author License (SATA)](https://github.com/DIYgod/DPlayer/blob/master/LICENSE)
