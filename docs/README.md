# DPlayer

## Install

```
$ npm install dplayer --save
```

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
<link rel="stylesheet" href="DPlayer.min.css">
<div id="player1"></div>
<script src="DPlayer.min.js"></script>
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
    volume: 0.7,                                                       // Optional, default volume, not work after user set volume themselves
    video: {                                                           // Optional, video info
        url: 'dplayer.mp4',                                            // Required, video link
        pic: 'dplayer.png',                                            // Optional, video poster
        thumbnails: 'thumbnails.jpg',                                  // Optional, video thumbnails, generate with https://github.com/MoePlayer/DPlayer-thumbnails
        type: 'auto'                                                   // Optional, video type, `flv` for flv format, `hls` for m3u8 format, `normal` for mp4 ogg and webm format, `auto` for automatic detection, default: `auto`
    },
    danmaku: {                                                         // Optional, showing danmaku, ignore this option to hide danmaku
        id: '9E2E3368B56CDBB4',                                        // Required, danmaku id, NOTICE: it must be unique, can not use these in your new player: `https://api.prprpr.me/dplayer/list`
        api: 'https://api.prprpr.me/dplayer/',                         // Required, danmaku api
        token: 'tokendemo',                                            // Optional, danmaku token for api
        maximum: 1000,                                                 // Optional, maximum quantity of danmaku
        addition: ['https://api.prprpr.me/dplayer/bilibili?aid=4157142'] // Optional, additional danmaku, see: `Bilibili 弹幕支持`,
        user: 'DIYgod'                                                 // Optional, current user's name, default: 'DIYgod',
        margin: {                                                      // Optional, have a white space
            bottom: '15%'
        },
        unlimited: true                                                // Optional, unlimited amount and allow overlap
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
+ `dp.seek(time)`                     // Set currentTime
+ `dp.pause()`                        // Pause
+ `dp.toggle()`                       // Toggle between play and pause
+ `dp.on(event, handler)`             // Event binding
+ `dp.switchVideo(video, danmaku)`    // Switch to a new video, the format of `video` and `danmaku` is the same as option
+ `dp.danmaku.push(text, color, type)` // Push a custom danmaku into DPlayer in real time, the value of `color` should be like `#fff`, the value of `type` should be `top` `bottom` or `right`, notice: this custom danmaku will not be saved to back-end automatically
+ `dp.notice(text, time)`             // Show notice in lower left
+ `dp.switchQuality(index)`           // Switch quality
+ `dp.destroy()`                      // Destroy player
+ `dp.video`                          // Native video, most [native api](http://www.w3schools.com/tags/ref_av_dom.asp) are supported
 + `dp.video.currentTime`             // Returns the current playback position
 + `dp.video.loop`                    // Returns whether the video should start over again when finished
 + `dp.vidio.paused`                  // Returns whether the video paused
 + Most [native api](http://www.w3schools.com/tags/ref_av_dom.asp)
+ `dp.danmaku`                        // Danmaku
 + `dp.danmaku.send(text, color, type)` // Submit a new danmaku to back end, the value of `color` should be like `#fff`, the value of `type` should be `top` `bottom` or `right`, notice: this danmaku will not be submit to back end
 + `dp.danmaku.opacity(percentage)`   // Set danmaku opacity
 + `dp.danmaku.draw(text, color, type)`  // Draw a new danmaku in real time
 + `dp.danmaku.clear()`               // Clear danmaku
 + `dp.danmaku.resize()`              // After container resized
 + `dp.danmaku.hide()`                // Hide danmaku
 + `dp.danmaku.show()`                // Show danmaku


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

### HLS support

It requires the library [hls.js](https://github.com/dailymotion/hls.js) and it should be loaded before DPlayer.min.js.

Live danamku is not supported  yet.

```HTML
<div id="player1" class="dplayer"></div>
<!-- ... -->
<script src="hls.min.js"></script>
<script src="DPlayer.min.js"></script>

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
<script src="flv.min.js"></script>
<script src="DPlayer.min.js"></script>

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

### Work with module bundler

```js
require('DPlayer/dist/DPlayer.min.css');
var Hls = require('hls.js');
var flvjs = require('flv.js');
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
$ npm run dev
```

## Make a release

```
$ npm run build
```