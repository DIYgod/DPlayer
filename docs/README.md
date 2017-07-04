# DPlayer

[![npm](https://img.shields.io/npm/v/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![npm](https://img.shields.io/npm/l/dplayer.svg?style=flat-square)](https://github.com/DIYgod/DPlayer/blob/master/LICENSE)
[![devDependency Status](https://img.shields.io/david/dev/DIYgod/dplayer.svg?style=flat-square)](https://david-dm.org/DIYgod/DPlayer#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![Travis](https://img.shields.io/travis/DIYgod/DPlayer.svg?style=flat-square)](https://travis-ci.org/DIYgod/DPlayer)
[![%e2%9d%a4](https://img.shields.io/badge/made%20with-%e2%9d%a4-ff69b4.svg?style=flat-square)](https://www.anotherhome.net/)

> Wow, such a lovely HTML5 danmaku video player

## Introduction

[Demo](http://dplayer.js.org/)

[Docs](http://dplayer.js.org/docs)

Using DPlayer on your project? [Let me know!](https://github.com/DIYgod/DPlayer/issues/31)

Screenshot
![image](http://i.imgur.com/207ch36.jpg)

## Install

```
$ npm install dplayer --save
```

## CDN

[unpkg](https://unpkg.com/dplayer)

[cdnjs](https://cdnjs.com/libraries/dplayer)

[BootCDN](http://www.bootcdn.cn/dplayer/)

[RawGit](https://rawgit.com/DIYgod/DPlayer/master/dist/DPlayer.min.js)

## Quick Start

```js
var dp = new DPlayer({
    element: document.getElementById('player1'),
    video: {
        url: 'dplayer.mp4',
        pic: 'dplayer.png'
    },
    danmaku: {
        id: 'testid',
        api: 'https://api.prprpr.me/dplayer/'
    }
});
```

## Usage

### HTML structure

```HTML
<link rel="stylesheet" href="dist/DPlayer.min.css">
<!-- ... -->
<div id="player1"></div>
<!-- ... -->
<script src="dist/DPlayer.min.js"></script>
```

### Options

```JS
var dp = new DPlayer({
    element: document.getElementById('player1'),                       // Optional, player element
    autoplay: false,                                                   // Optional, autoplay video, not supported by mobile browsers
    theme: '#FADFA3',                                                  // Optional, theme color, default: #b7daff
    loop: true,                                                        // Optional, loop play music, default: true
    lang: 'zh',                                                        // Optional, language, `zh` for Chinese, `en` for English, default: Navigator language
    screenshot: true,                                                  // Optional, enable screenshot function, default: false, NOTICE: if set it to true, video and video poster must enable Cross-Origin
    hotkey: true,                                                      // Optional, binding hot key, including left right and Space, default: true
    preload: 'auto',                                                   // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    logo: 'logo.png',                                                  // Optional, player logo, showing in top left corner
    video: {                                                           // Required, video info
        url: 'dplayer.mp4',                                         // Required, video link
        pic: 'dplayer.png',                                         // Optional, video poster
        type: 'auto'                                                   // Optional, video type, `flv` for flv format, `hls` for m3u8 format, `normal` for mp4 ogg and webm format, `auto` for automatic detection, default: `auto`
    },
    danmaku: {                                                         // Optional, showing danmaku, ignore this option to hide danmaku
        id: '9E2E3368B56CDBB4',                                        // Required, danmaku id, NOTICE: it must be unique, can not use these in your new player: `https://api.prprpr.me/dplayer/list`
        api: 'https://api.prprpr.me/dplayer/',                         // Required, danmaku api
        token: 'tokendemo',                                            // Optional, danmaku token for api
        maximum: 1000,                                                 // Optional, maximum quantity of danmaku
        addition: ['https://api.prprpr.me/dplayer/bilibili?aid=4157142'] // Optional, additional danmaku, see: `Bilibili 弹幕支持`,
        user: 'DIYgod'                                                 // Optional, current user's name, default: 'DIYgod'
    },
    contextmenu: [                                                     // Optional, custom contextmenu
        {
            text: '关于作者',
            link: 'http://diygod.me'
        },
        {
            text: '播放器意见反馈',
            link: 'https://github.com/DIYgod/DPlayer/issues'
        },
        {
            text: '关于 DPlayer 播放器',
            link: 'https://github.com/DIYgod/DPlayer'
        }
    ]
});
```

### API

+ `dp.play()`                         // Resume play
+ `dp.play(time)`                     // Set currentTime
+ `dp.pause()`                        // Pause
+ `dp.toggle()`                       // Toggle between play and pause
+ `dp.on(event, handler)`             // Event binding
+ `dp.switchVideo(video, danmaku)`    // Switch to a new video, the format of `video` and `danmaku` is the same as option
+ `dp.pushDanmaku(text, color, type)` // Push a custom danmaku into DPlayer in real time, the value of `color` should be like `#fff`, the value of `type` should be `top` `bottom` or `right`, notice: this custom danmaku will not be saved to back-end automatically
+ `dp.dan`                            // Return danmaku info
+ `dp.danIndex`                       // Return danmaku index
+ `dp.notice(text, time)`             // Show notice in lower left
+ `dp.switchQuality(index)`           // Switch quality
+ `dp.video.current`                  // Return native video, most [native api](http://www.w3schools.com/tags/ref_av_dom.asp) are supported
 + `dp.video.currentTime`             // Returns the current playback position
 + `dp.video.loop`                    // Returns whether the video should start over again when finished
 + `dp.vidio.paused`                  // Returns whether the video paused
 + Most [native api](http://www.w3schools.com/tags/ref_av_dom.asp)

### Event binding

`dp.on(event, handler)`

`event`:
+ `play`: Triggered when DPlayer start play
+ `pause`: Triggered when DPlayer paused
+ `canplay`: Triggered when enough data is available that DPlayer can be played
+ `playing`: Triggered periodically when DPlayer is playing
+ `ended`: Triggered when DPlayer ended
+ `error`: Triggered when an error occurs

### Quality switching

Set `option.video.quality` instead of `option.video.url`

```js
var dp = new DPlayer({
    // ...
    video: {
        quality: [{
            name: '高清',
            url: '高清.mp4'
        }, {
            name: '超清',
            url: '超清.mp4'
        }],
        defaultQuality: 0,
        // ...
    }
});
```

### HLS support (Live Video, M3U8 format)

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
        url: 'xxx.m3u8',
        type: 'hls'
        // ...
    }
});
</script>
```

### FLV support

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
        url: 'xxx.flv',
        type: 'flv'
        // ...
    }
});
</script>
```

### Segmented videos support (unstable)

```js
var dp = new DPlayer({
    // ...
    video: {
        url: ['1.mp4, 2.mp4, 3.mp4'],
        // ...
    }
});
```

### Work with module bundler

```js
require('DPlayer/dist/DPlayer.min.css');
var DPlayer = require('DPlayer');

var dp = new DPlayer(option);
```

## Back-end

### Danmaku

**Official API:**

`https://api.prprpr.me/dplayer/`

**Official danmaku data**

https://github.com/DIYgod/DPlayer-data

**Build yourself:**

[DPlayer-backend](https://github.com/DIYgod/DPlayer-backend)

### Bilibili danmaku and video link

**Bilibili  Danmaku**

API:

`https://api.prprpr.me/dplayer/bilibili?aid=【bilibili视频AV号】`

or `https://api.prprpr.me/dplayer/bilibili?cid=【bilibili视频cid】`

```JS
var option = {
    danmaku: {
        // ...
        addition: ['https://api.prprpr.me/dplayer/bilibili?aid=【bilibili视频AV号】']
    }
}
```

**Bilibili Video link**

`https://api.prprpr.me/dplayer/video/bilibili?aid=【bilibili视频AV号】`

or `https://api.prprpr.me/dplayer/video/bilibili?cid=【bilibili视频cid】`

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

## Communication Groups

[Telegram Group](https://t.me/adplayer)

[QQ Group: 415835947](https://shang.qq.com/wpa/qunwpa?idkey=bf22213ae0028a82e5adf3f286dfd4f01e0997dc9f1dcd8e831a0a85e799be17)

## Related Projects

- [DPlayer-backend](https://github.com/DIYgod/DPlayer-backend)

- [DPlayer-data(weekly backup for api.prprpr.me/dplayer)](https://github.com/DIYgod/DPlayer-data)

- [DPlayer-for-typecho](https://github.com/volio/DPlayer-for-typecho)

- [Hexo-tag-dplayer](https://github.com/NextMoe/hexo-tag-dplayer)

- [DPlayer_for_Z-BlogPHP](https://github.com/fghrsh/DPlayer_for_Z-BlogPHP)

- [纸飞机视频区插件(DPlayer for Discuz!)](https://coding.net/u/Click_04/p/video/git)

- [dplayer_py_backend](https://github.com/dixyes/dplayer_py_backend)

- [dplayer_lua_backend](https://github.com/dixyes/dplayer_lua_backend)

- [DPlayer for WordPress](https://github.com/BlueCocoa/DPlayer-WordPress)

- [Vue-DPlayer](https://github.com/sinchang/vue-dplayer)

## LICENSE

[The Star And Thank Author License (SATA)](https://github.com/zTrix/sata-license)
