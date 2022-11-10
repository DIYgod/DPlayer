---
sidebar: auto
---

# Guide

# DPlayer

🍭 Wow, such a lovely HTML5 danmaku video player

<DPlayer :immediate="true"></DPlayer>

&nbsp;

## Special Thanks

### Sponsors

&nbsp;

<div>
<a href="https://www.dogecloud.com/?ref=dplayer" target="_blank">
    <img height="60px" src="https://player.dogecloud.com/img/logo_with_product3.png">
</a>
</div>

## Installation

Using npm:

```
npm install dplayer --save
```

Using Yarn:

```
yarn add dplayer
```

## Quick Start

At first, let's initialize a simplest DPlayer

Load DPlayer files

```html
<div id="dplayer"></div>
<script src="DPlayer.min.js"></script>
```

Or work with module bundler:

```js
import DPlayer from 'dplayer';

const dp = new DPlayer(options);
```

Initialization in js:

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
        url: 'demo.mp4',
        pic: 'demo.jpg',
        thumbnails: 'thumbnails.jpg',
    },
    subtitle: {
        url: 'webvtt.vtt',
    },
    danmaku: {
        id: 'demo',
        api: 'https://api.prprpr.me/dplayer/',
    },
});
```

## Options

You can custom your player instance by those options

| Name                 | Default                            | Description                                                                                                                                                |
| -------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| container            | document.querySelector('.dplayer') | player container                                                                                                                                           |
| live                 | false                              | enable live mode, see [#live](#live)                                                                                                                       |
| autoplay             | false                              | video autoplay                                                                                                                                             |
| theme                | '#b7daff'                          | main color                                                                                                                                                 |
| loop                 | false                              | video loop                                                                                                                                                 |
| lang                 | navigator.language.toLowerCase()   | values: 'en', 'zh-cn', 'zh-tw'                                                                                                                             |
| screenshot           | false                              | enable screenshot, if true, video and video poster must enable Cross-Origin                                                                                |
| airplay              | false                              | enable airplay in Safari                                                                                                                                   |
| chromecast           | false                              | enable Chromecast                                                                                                                                          |
| hotkey               | true                               | enable hotkey, support FF, FR, volume control, play & pause                                                                                                |
| preload              | 'auto'                             | values: 'none', 'metadata', 'auto'                                                                                                                         |
| volume               | 0.7                                | default volume, notice that player will remember user setting, default volume will not work after user set volume themselves                               |
| playbackSpeed        | [0.5, 0.75, 1, 1.25, 1.5, 2]       | optional playback speed, or or you can set a custom one                                                                                                    |
| logo                 | -                                  | showing logo in the top left corner, you can adjust its size and position by CSS                                                                           |
| apiBackend           | -                                  | getting and sending danmaku in your way, see [#live](#live)                                                                                                |
| preventClickToggle   | false                              | prevent toggle video play/pause status when click player                                                                                                   |
| video                | -                                  | video info                                                                                                                                                 |
| video.quality        | -                                  | see [#Quality switching](#quality-switching)                                                                                                               |
| video.defaultQuality | -                                  | see [#Quality switching](#quality-switching)                                                                                                               |
| video.url            | -                                  | video url                                                                                                                                                  |
| video.pic            | -                                  | video poster                                                                                                                                               |
| video.thumbnails     | -                                  | video thumbnails, generated by [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails)                                                       |
| video.type           | 'auto'                             | values: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' or other custom type, see [#MSE support](#mse-support)                                        |
| video.customType     | -                                  | custom video type, see [#MSE support](#mse-support)                                                                                                        |
| subtitle             | -                                  | external subtitle                                                                                                                                          |
| subtitle.url         | `required`                         | subtitle url                                                                                                                                               |
| subtitle.type        | 'webvtt'                           | subtitle type, values: 'webvtt', 'ass', but only webvtt is supported for now                                                                               |
| subtitle.fontSize    | '20px'                             | subtitle font size                                                                                                                                         |
| subtitle.bottom      | '40px'                             | the distance between the subtitle and player bottom, values like: '10px' '10%'                                                                             |
| subtitle.color       | '#fff'                             | subtitle color                                                                                                                                             |
| danmaku              | -                                  | showing danmaku                                                                                                                                            |
| danmaku.id           | `required`                         | danmaku pool id, it must be unique                                                                                                                         |
| danmaku.api          | `required`                         | see [#Danmaku API](#danmaku-api)                                                                                                                           |
| danmaku.token        | -                                  | back end verification token                                                                                                                                |
| danmaku.maximum      | -                                  | danmaku maximum quantity                                                                                                                                   |
| danmaku.addition     | -                                  | additional danmaku, see [#bilibili danmaku](#bilibili-danmaku)                                                                                             |
| danmaku.user         | 'DIYgod'                           | danmaku user name                                                                                                                                          |
| danmaku.bottom       | -                                  | values like: '10px' '10%', the distance between the danmaku bottom and player bottom, in order to prevent warding off subtitle                             |
| danmaku.unlimited    | false                              | display all danmaku even though danmaku overlap, notice that player will remember user setting, default setting will not work after user set it themselves |
| danmaku.speedRate    | 1                                  | danmaku speed multiplier, the larger the faster                                                                                                            |
| contextmenu          | []                                 | custom contextmenu                                                                                                                                         |
| highlight            | []                                 | custom time markers upon progress bar                                                                                                                      |
| mutex                | true                               | prevent to play multiple player at the same time, pause other players when this player start play                                                          |

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
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
        type: 'auto',
    },
    subtitle: {
        url: 'dplayer.vtt',
        type: 'webvtt',
        fontSize: '25px',
        bottom: '10%',
        color: '#b7daff',
    },
    danmaku: {
        id: '9E2E3368B56CDBB4',
        api: 'https://api.prprpr.me/dplayer/',
        token: 'tokendemo',
        maximum: 1000,
        addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
        user: 'DIYgod',
        bottom: '15%',
        unlimited: true,
        speedRate: 0.5,
    },
    contextmenu: [
        {
            text: 'custom1',
            link: 'https://github.com/DIYgod/DPlayer',
        },
        {
            text: 'custom2',
            click: (player) => {
                console.log(player);
            },
        },
    ],
    highlight: [
        {
            text: 'marker for 20s',
            time: 20,
        },
        {
            text: 'marker for 2mins',
            time: 120,
        },
    ],
});
```

## API

-   `dp.play()`: play video

-   `dp.pause()`: pause video

-   `dp.seek(time: number)`: seek to specified time

    ```js
    dp.seek(100);
    ```

-   `dp.toggle()`: toggle between play and pause

-   `dp.on(event: string, handler: function)`: bind video and player events, [see more details](https://dplayer.diygod.dev/guide.html#event-binding)

-   `dp.switchVideo(video, danmaku)`: switch to a new video

    ```js
    dp.switchVideo(
        {
            url: 'second.mp4',
            pic: 'second.png',
            thumbnails: 'second.jpg',
        },
        {
            id: 'test',
            api: 'https://api.prprpr.me/dplayer/',
            maximum: 3000,
            user: 'DIYgod',
        }
    );
    ```

-   `dp.notice(text: string, time: number, opacity: number)`: show message, the unit of time is millisecond, the default of time is 2000, the default of opacity is 0.8

    ```js
    dp.notice('Amazing player', 2000, 0.8);
    ```

-   `dp.switchQuality(index: number)`: switch quality

-   `dp.destroy()`: destroy player

-   `dp.speed(rate: number)`: set video speed

-   `dp.volume(percentage: number, nostorage: boolean, nonotice: boolean)`: set video volume

    ```js
    dp.volume(0.1, true, false);
    ```

-   `dp.video`: native video

-   `dp.video.currentTime`: returns the current playback position

-   `dp.video.duration`: returns video total time

-   `dp.video.paused`: returns whether the video paused

-   most [native api](http://www.w3schools.com/tags/ref_av_dom.asp) are supported

-   `dp.danmaku`

-   `dp.danmaku.send(danmaku, callback: function)`: submit a new danmaku to back end

    ```js
    dp.danmaku.send(
        {
            text: 'dplayer is amazing',
            color: '#b7daff',
            type: 'right', // should be `top` `bottom` or `right`
        },
        function () {
            console.log('success');
        }
    );
    ```

-   `dp.danmaku.draw(danmaku)`: draw a new danmaku to player in real time

    ```js
    dp.danmaku.draw({
        text: 'DIYgod is amazing',
        color: '#fff',
        type: 'top',
    });
    ```

-   `dp.danmaku.opacity(percentage: number)`: set danmaku opacity, opacity should between 0 and 1

    ```js
    dp.danmaku.opacity(0.5);
    ```

-   `dp.danmaku.clear()`: clear all danmakus

-   `dp.danmaku.hide()`: hide danmaku

-   `dp.danmaku.show()`: show danmaku

-   `dp.fullScreen`: two type: `web` or `browser`, the default one is `browser`

-   `dp.fullScreen.request(type: string)`: request fullscreen

    ```js
    dp.fullScreen.request('web');
    ```

-   `dp.fullScreen.cancel(type: string)`: cancel fullscreen

    ```js
    dp.fullScreen.cancel('web');
    ```

## Event binding

`dp.on(event, handler)`

```js
dp.on('ended', function () {
    console.log('player ended');
});
```

Video events

-   abort
-   canplay
-   canplaythrough
-   durationchange
-   emptied
-   ended
-   error
-   loadeddata
-   loadedmetadata
-   loadstart
-   mozaudioavailable
-   pause
-   play
-   playing
-   progress
-   ratechange
-   seeked
-   seeking
-   stalled
-   suspend
-   timeupdate
-   volumechange
-   waiting

Player events

-   screenshot
-   thumbnails_show
-   thumbnails_hide
-   danmaku_show
-   danmaku_hide
-   danmaku_clear
-   danmaku_loaded
-   danmaku_send
-   danmaku_opacity
-   contextmenu_show
-   contextmenu_hide
-   notice_show
-   notice_hide
-   quality_start
-   quality_end
-   destroy
-   resize
-   fullscreen
-   fullscreen_cancel
-   webfullscreen
-   webfullscreen_cancel
-   subtitle_show
-   subtitle_hide
-   subtitle_change

## Quality switching

Set video url and video type in `video.quality`, set default quality by `video.defaultQuality`.

<DPlayer :options="{
    video: {
        quality: [{
            name: 'HD',
            url: 'https://api.dogecloud.com/player/get.m3u8?vcode=5ac682e6f8231991&userId=17&ext=.m3u8',
            type: 'hls'
        }, {
            name: 'SD',
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            type: 'normal'
        }],
        defaultQuality: 0,
        pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
        thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg'
    }
}"></DPlayer>

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        quality: [
            {
                name: 'HD',
                url: 'demo.m3u8',
                type: 'hls',
            },
            {
                name: 'SD',
                url: 'demo.mp4',
                type: 'normal',
            },
        ],
        defaultQuality: 0,
        pic: 'demo.png',
        thumbnails: 'thumbnails.jpg',
    },
});
```

## Danmaku

### Danmaku API

`danmaku.api`

**Ready-made API**

url: https://api.prprpr.me/dplayer/

Daily backup data: [DPlayer-data](https://github.com/DIYgod/DPlayer-data)

**Setting up yourself**

[DPlayer-node](https://github.com/MoePlayer/DPlayer-node)

### bilibili danmaku

`danmaku.addition`

API: <https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]>

```js
const option = {
    danmaku: {
        // ...
        addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]'],
    },
};
```

## MSE support

### HLS

It requires the library [hls.js](https://github.com/video-dev/hls.js) and it should be loaded before `DPlayer.min.js`.

<DPlayer :options="{
    video: {
        url: 'https://api.dogecloud.com/player/get.m3u8?vcode=5ac682e6f8231991&userId=17&ext=.m3u8',
        type: 'hls'
    }
}"></DPlayer>

```html
<div id="dplayer"></div>
<script src="hls.min.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.m3u8',
        type: 'hls',
    },
    pluginOptions: {
        hls: {
            // hls config
        },
    },
});
console.log(dp.plugins.hls); // Hls instance
```

```js
// another way, use customType
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.m3u8',
        type: 'customHls',
        customType: {
            customHls: function (video, player) {
                const hls = new Hls();
                hls.loadSource(video.src);
                hls.attachMedia(video);
            },
        },
    },
});
```

### MPEG DASH

It requires the library [dash.js](https://github.com/Dash-Industry-Forum/dash.js) and it should be loaded before `DPlayer.min.js`.

```html
<div id="dplayer"></div>
<script src="dash.min.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.mpd',
        type: 'dash',
    },
    pluginOptions: {
        dash: {
            // dash config
        },
    },
});
console.log(dp.plugins.dash); // Dash instance
```

```js
// another way, use customType
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.mpd',
        type: 'customDash',
        customType: {
            customDash: function (video, player) {
                dashjs.MediaPlayer().create().initialize(video, video.src, false);
            },
        },
    },
});
```

### MPEG DASH (Shaka)

It requires the library [shaka-player](https://github.com/google/shaka-player) and it should be loaded before `DPlayer.min.js`.

```html
<div id="dplayer"></div>
<script src="shaka-player.compiled.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
        url: 'demo.mpd',
        type: 'shakaDash',
        customType: {
            shakaDash: function (video, player) {
                var src = video.src;
                var playerShaka = new shaka.Player(video); // 将会修改 video.src
                playerShaka.load(src);
            },
        },
    },
});
```

### FLV

It requires the library [flv.js](https://github.com/Bilibili/flv.js) and it should be loaded before `DPlayer.min.js`.

<DPlayer :options="{
    video: {
        url: 'https://api.dogecloud.com/player/get.flv?vcode=5ac682e6f8231991&userId=17&ext=.flv',
        type: 'flv'
    }
}"></DPlayer>

```html
<div id="dplayer"></div>
<script src="flv.min.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.flv',
        type: 'flv',
    },
    pluginOptions: {
        flv: {
            // refer to https://github.com/bilibili/flv.js/blob/master/docs/api.md#flvjscreateplayer
            mediaDataSource: {
                // mediaDataSource config
            },
            config: {
                // config
            },
        },
    },
});
console.log(dp.plugins.flv); // flv instance
```

```js
// another way, use customType
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.flv',
        type: 'customFlv',
        customType: {
            customFlv: function (video, player) {
                const flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: video.src,
                });
                flvPlayer.attachMediaElement(video);
                flvPlayer.load();
            },
        },
    },
});
```

### WebTorrent

It requires the library [webtorrent](https://github.com/webtorrent/webtorrent) and it should be loaded before `DPlayer.min.js`.

<DPlayer :options="{
    video: {
        url: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent',
        type: 'webtorrent'
    }
}"></DPlayer>

```html
<div id="dplayer"></div>
<script src="webtorrent.min.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'magnet:demo',
        type: 'webtorrent',
    },
    pluginOptions: {
        webtorrent: {
            // webtorrent config
        },
    },
});
console.log(dp.plugins.webtorrent); // WebTorrent instance
```

```js
// another way, use customType
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'magnet:demo',
        type: 'customWebTorrent',
        customType: {
            customWebTorrent: function (video, player) {
                player.container.classList.add('dplayer-loading');
                const client = new WebTorrent();
                const torrentId = video.src;
                client.add(torrentId, (torrent) => {
                    const file = torrent.files.find((file) => file.name.endsWith('.mp4'));
                    file.renderTo(
                        video,
                        {
                            autoplay: player.options.autoplay,
                        },
                        () => {
                            player.container.classList.remove('dplayer-loading');
                        }
                    );
                });
            },
        },
    },
});
```

### Work with other MSE library

DPlayer can work with any MSE library via `customType` option.

```html
<div id="dplayer"></div>
<script src="https://cdn.jsdelivr.net/npm/cdnbye@latest"></script>
<script src="DPlayer.min.js"></script>
```

```js
var type = 'normal';
if (Hls.isSupported() && Hls.WEBRTC_SUPPORT) {
    type = 'customHls';
}
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.m3u8',
        type: type,
        customType: {
            customHls: function (video, player) {
                const hls = new Hls({
                    debug: false,
                    // Other hlsjsConfig options provided by hls.js
                    p2pConfig: {
                        live: false,
                        // Other p2pConfig options provided by CDNBye http://www.cdnbye.com/en/
                    },
                });
                hls.loadSource(video.src);
                hls.attachMedia(video);
            },
        },
    },
});
```

## Live

You can use DPlayer in live, but if you want live danmaku, you should prepare a WebSocket backend yourself.

<DPlayer :options="{
    live: true,
    video: {
        url: 'https://api.dogecloud.com/player/get.m3u8?vcode=5ac682e6f8231991&userId=17&ext=.m3u8',
        type: 'hls'
    }
}"></DPlayer>

Init player:

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    live: true,
    danmaku: true,
    apiBackend: {
        read: function (options) {
            console.log('Pretend to connect WebSocket');
            options.success([]);
        },
        send: function (options) {
            console.log('Pretend to send danmaku via WebSocket', options.data);
            options.success();
        },
    },
    video: {
        url: 'demo.m3u8',
        type: 'hls',
    },
});
```

Draw danmaku after getting a danmaku via WebSocket:

```js
const danmaku = {
    text: 'Get a danmaku via WebSocket',
    color: '#fff',
    type: 'right',
};
dp.danmaku.draw(danmaku);
```

## FAQ

### Why can't player be full screen?

If player is contained in a iframe, try adding the `allowfullscreen` attribute to the iframe.

For full browser support it should look like this:

```html
<iframe src="example.com" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
```

### Why can't player autoplay in some mobile browsers?

Most mobile browsers forbid video autoplay, you wont be able to achieve it without hacks.
