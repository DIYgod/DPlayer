# DPlayer

> [GitHub](https://github.com/MoePlayer/DPlayer) | [Demo](http://dplayer.js.org)

## Install

```
$ npm install dplayer --save
```

## Quick Start

```js
var dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
        url: 'demo.mp4',
        pic: 'demo.jpg',
        thumbnails: 'thumbnails.jpg'
    },
    danmaku: {
        id: 'demo',
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

Name|Default|Note
----|-------|----
container | document.getElementsByClassName('dplayer')[0] | player container
autoplay | false | not supported in mobile browsers
theme | '#b7daff' | main color
loop | false | upon reaching the end of the video, automatically seek back to the start
lang | navigator.language.toLowerCase() | values: 'en', 'zh-cn', 'zh-tw'
screenshot | false | enable screenshot, if true, video and video poster must enable Cross-Origin
hotkey | true | enable hotkey
preload | 'auto' | values: 'none', 'metadata', 'auto'
volume | 0.7 | default volume, not work after user set volume themselves
logo | undefined | logo in top left corner
video | undefined | video info
video.quality | undefined | more: [Quality switching](http://dplayer.js.org/docs/#/?id=quality-switching)
video.url | undefined | video link
video.pic | undefined | video poster
video.thumbnails | undefined | video thumbnails, generate with [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails)
video.type | 'auto' | 'flv' for flv format, 'hls' for m3u8 format, 'normal' for mp4 ogg and webm format, 'auto' for automatic detection according to video suffix, more: [#HLS support](http://dplayer.js.org/docs/#/?id=hls-support) [#FLV support](http://dplayer.js.org/docs/#/?id=flv-support)
icons | [options.js#L24](https://github.com/MoePlayer/DPlayer/blob/master/src/options.js#L24) | UI icons
iconsColor | #ffffff | player icons color
subtitle | undefined | external subtitle
subtitle.url | `required` | subtitle url
subtitle.type | 'webvtt' | values: 'webvtt', 'ass', but only webvtt is supported for now
subtitle.fontSize | '20px' | subtitle font size
subtitle.bottom | '40px' | subtitle bottom space
subtitle.color | '#fff' | subtitle color
danmaku | undefined | showing danmaku
danmaku.id | `required` | it must be unique, check if some id used in other player: `https://api.prprpr.me/dplayer/list`
danmaku.api | `required` | more: [#Back-end](http://dplayer.js.org/docs/#/?id=back-end)
danmaku.token | undefined | back end verification
danmaku.maximum | undefined | maximum quantity of danmaku
danmaku.addition | undefined | additional danmaku, more: [Bilibili danmaku](http://dplayer.js.org/docs/#/?id=bilibili-danmaku-and-video-link)
danmaku.user | 'DIYgod' | user name
danmaku.margin | undefined | keep some white space, prevent warding off subtitle
danmaku.unlimited | false | unlimited amount and allow overlap
contextmenu | undefined | custom contextmenu, like: `[{ text: 'custom', link: 'https://github.com/MoePlayer/DPlayer' }]`
mutex | true | pause other players when this player start play

Example:

```js
var dp = new DPlayer({
    container: document.getElementById('player1'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    logo: 'logo.png',
    volume: 0.7,
    mutex: true,
    video: {
        url: 'dplayer.mp4',
        pic: 'dplayer.png',
        thumbnails: 'thumbnails.jpg',
        type: 'auto'
    },
    subtitle: {
        url: 'dplayer.vtt',
        type: 'webvtt',
        fontSize: '25px',
        bottom: '10%',
        color: '#b7daff'
    },
    danmaku: {
        id: '9E2E3368B56CDBB4',
        api: 'https://api.prprpr.me/dplayer/',
        token: 'tokendemo',
        maximum: 1000,
        addition: ['https://api.prprpr.me/dplayer/bilibili?aid=4157142']
        user: 'DIYgod'
        margin: {
            bottom: '15%'
        },
        unlimited: true
    },
    icons: {
        play: [
            '0 0 24 24',
            'M8 5v14l11-7z',
            '24' // Icon size
        ],
        pause: [
            '0 0 24 24',
            'M6 19h4V5H6v14zm8-14v14h4V5h-4z',
            '24' // Icon size
        ]
    },
    contextmenu: [
        {
            text: 'custom1',
            link: 'https://github.com/DIYgod/DPlayer'
        },
        {
            text: 'custom2',
            link: 'https://github.com/DIYgod/DPlayer'
        }
    ]
});
```

### API

+ `dp.play()`

    Resume play

+ `dp.seek(time)`

    Set currentTime

+ `dp.pause()`

    Pause

+ `dp.toggle()`

    Toggle between play and pause

+ `dp.on(event, handler)`

    Event binding

+ `dp.switchVideo(video, danmaku)`

    Switch to a new video, the format of `video` and `danmaku` is the same as option

+ `dp.danmaku.push(text, color, type)`

    Push a custom danmaku into DPlayer in real time, the value of `color` should be like `#fff`, the value of `type` should be `top` `bottom` or `right`, notice: this custom danmaku will not be saved to back-end automatically

+ `dp.notice(text, time)`

    Show notice in lower left

+ `dp.switchQuality(index)`

    Switch quality

+ `dp.destroy()`

    Destroy player

+ `dp.video`

    Native video, most [native api](http://www.w3schools.com/tags/ref_av_dom.asp) are supported

 + `dp.video.currentTime`

    Returns the current playback position

 + `dp.video.loop`

    Returns whether the video should start over again when finished

 + `dp.video.paused`

    Returns whether the video paused

 + Most [native api](http://www.w3schools.com/tags/ref_av_dom.asp)

+ `dp.danmaku`

    Danmaku

 + `dp.danmaku.send(text, color, type)`

    Submit a new danmaku to back end, the value of `color` should be like `#fff`, the value of `type` should be `top` `bottom` or `right`, notice: this danmaku will not be submit to back end

 + `dp.danmaku.opacity(percentage)`

    Set danmaku opacity

 + `dp.danmaku.draw(text, color, type)`

    Draw a new danmaku in real time

 + `dp.danmaku.clear()`

    Clear danmaku

 + `dp.danmaku.resize()`

    After container resized

 + `dp.danmaku.hide()`

    Hide danmaku

 + `dp.danmaku.show()`

    Show danmaku


### Event binding

`dp.on(event, handler)`

Video events

- abort
- canplay
- canplaythrough
- durationchange
- emptied
- ended
- error
- loadeddata
- loadedmetadata
- loadstart
- mozaudioavailable
- pause
- play
- playing
- progress
- ratechange
- seeked
- seeking
- stalled
- suspend
- timeupdate
- volumechange
- waiting

Player events

- screenshot
- thumbnails_show
- thumbnails_hide
- danmaku_show
- danmaku_hide
- danmaku_clear
- danmaku_loaded
- danmaku_send
- danmaku_opacity
- contextmenu_show
- contextmenu_hide
- notice_show
- notice_hide
- quality_start
- quality_end
- destroy
- resize
- fullscreen
- fullscreen_cancel
- subtitle_show
- subtitle_hide
- subtitle_change

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