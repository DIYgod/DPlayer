---
sidebar: auto
---

# 指南

# DPlayer

🍭 Wow, such a lovely HTML5 danmaku video player

<DPlayer :immediate="true"></DPlayer>

&nbsp;

## Special Thanks

### Sponsors

<div>
<a href="https://www.dogecloud.com/?ref=dplayer" target="_blank">
    <img height="60px" src="https://player.dogecloud.com/img/logo_with_product3.png">
</a>
</div>

## 安装

使用 npm:

```
npm install dplayer --save
```

使用 Yarn:

```
yarn add dplayer
```

## 快速开始

我们先尝试初始化一个最简单的 DPlayer

加载播放器文件:

```html
<div id="dplayer"></div>
<script src="DPlayer.min.js"></script>
```

或者使用模块管理器:

```js
import DPlayer from 'dplayer';

const dp = new DPlayer(options);
```

在 js 里初始化:

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.mp4',
    },
});
```

一个最简单的 DPlayer 就初始化好了，它只有最基本的视频播放功能

## 参数

DPlayer 有丰富的参数可以自定义你的播放器实例

| 名称                 | 默认值                             | 描述                                                                                                    |
| -------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| container            | document.querySelector('.dplayer') | 播放器容器元素                                                                                          |
| live                 | false                              | 开启直播模式, 见[#直播](#直播)                                                                          |
| autoplay             | false                              | 视频自动播放                                                                                            |
| theme                | '#b7daff'                          | 主题色                                                                                                  |
| loop                 | false                              | 视频循环播放                                                                                            |
| lang                 | navigator.language.toLowerCase()   | 可选值: 'en', 'zh-cn', 'zh-tw'                                                                          |
| screenshot           | false                              | 开启截图，如果开启，视频和视频封面需要允许跨域                                                          |
| hotkey               | true                               | 开启热键，支持快进、快退、音量控制、播放暂停                                                            |
| airplay              | false                              | 在 Safari 中开启 AirPlay                                                                                |
| chromecast           | false                              | 启用 Chromecast                                                                                         |
| preload              | 'auto'                             | 视频预加载，可选值: 'none', 'metadata', 'auto'                                                          |
| volume               | 0.7                                | 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效                                  |
| playbackSpeed        | [0.5, 0.75, 1, 1.25, 1.5, 2]       | 可选的播放速率，可以设置成自定义的数组                                                                  |
| logo                 | -                                  | 在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置                                                |
| apiBackend           | -                                  | 自定义获取和发送弹幕行为，见[#直播](#直播)                                                              |
| preventClickToggle   | false                              | 阻止点击播放器时候自动切换播放/暂停                                                                     |
| video                | -                                  | 视频信息                                                                                                |
| video.quality        | -                                  | 见[#清晰度切换](#清晰度切换)                                                                            |
| video.defaultQuality | -                                  | 见[#清晰度切换](#清晰度切换)                                                                            |
| video.url            | -                                  | 视频链接                                                                                                |
| video.pic            | -                                  | 视频封面                                                                                                |
| video.thumbnails     | -                                  | 视频缩略图，可以使用 [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails) 生成         |
| video.type           | 'auto'                             | 可选值: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或其他自定义类型, 见[#MSE 支持](#mse-支持) |
| video.customType     | -                                  | 自定义类型, 见[#MSE 支持](#mse-支持)                                                                    |
| subtitle             | -                                  | 外挂字幕                                                                                                |
| subtitle.url         | `required`                         | 字幕链接                                                                                                |
| subtitle.type        | 'webvtt'                           | 字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt                                                    |
| subtitle.fontSize    | '20px'                             | 字幕字号                                                                                                |
| subtitle.bottom      | '40px'                             | 字幕距离播放器底部的距离，取值形如: '10px' '10%'                                                        |
| subtitle.color       | '#fff'                             | 字幕颜色                                                                                                |
| danmaku              | -                                  | 显示弹幕                                                                                                |
| danmaku.id           | `required`                         | 弹幕池 id，必须唯一                                                                                     |
| danmaku.api          | `required`                         | 见[#弹幕接口](#弹幕接口)                                                                                |
| danmaku.token        | -                                  | 弹幕后端验证 token                                                                                      |
| danmaku.maximum      | -                                  | 弹幕最大数量                                                                                            |
| danmaku.addition     | -                                  | 额外外挂弹幕，见[#bilibili 弹幕](#bilibili-弹幕)                                                        |
| danmaku.user         | 'DIYgod'                           | 弹幕用户名                                                                                              |
| danmaku.bottom       | -                                  | 弹幕距离播放器底部的距离，防止遮挡字幕，取值形如: '10px' '10%'                                          |
| danmaku.unlimited    | false                              | 海量弹幕模式，即使重叠也展示全部弹幕，请注意播放器会记忆用户设置，用户手动设置后即失效                  |
| danmaku.speedRate    | 1                                  | 弹幕速度倍率，越大速度越快                                                                              |
| contextmenu          | []                                 | 自定义右键菜单                                                                                          |
| highlight            | []                                 | 自定义进度条提示点                                                                                      |
| mutex                | true                               | 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器                                            |

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
            time: 20,
            text: '这是第 20 秒',
        },
        {
            time: 120,
            text: '这是 2 分钟',
        },
    ],
});
```

## API

-   `dp.play()`: 播放视频

-   `dp.pause()`: 暂停视频

-   `dp.seek(time: number)`: 跳转到特定时间

    ```js
    dp.seek(100);
    ```

-   `dp.toggle()`: 切换播放和暂停

-   `dp.on(event: string, handler: function)`: 绑定视频和播放器事件，见[#事件绑定](#事件绑定)

-   `dp.switchVideo(video, danmaku)`: 切换到其他视频

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

-   `dp.notice(text: string, time: number)`: 显示通知，时间的单位为毫秒，默认时间 2000 毫秒，默认透明度 0.8

-   `dp.switchQuality(index: number)`: 切换清晰度

-   `dp.destroy()`: 销毁播放器

-   `dp.speed(rate: number)`: 设置视频速度

-   `dp.volume(percentage: number, nostorage: boolean, nonotice: boolean)`: 设置视频音量

    ```js
    dp.volume(0.1, true, false);
    ```

-   `dp.video`: 原生 video

-   `dp.video.currentTime`: 返回视频当前播放时间

-   `dp.video.duration`: 返回视频总时间

-   `dp.video.paused`: 返回视频是否暂停

-   支持大多数[原生 video 接口](http://www.w3schools.com/tags/ref_av_dom.asp)

-   `dp.danmaku`

-   `dp.danmaku.send(danmaku, callback: function)`: 提交一个新弹幕

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

-   `dp.danmaku.draw(danmaku)`: 实时绘制一个新弹幕

    ```js
    dp.danmaku.draw({
        text: 'DIYgod is amazing',
        color: '#fff',
        type: 'top',
    });
    ```

-   `dp.danmaku.opacity(percentage: number)`: 设置弹幕透明度，透明度值在 0 到 1 之间

    ```js
    dp.danmaku.opacity(0.5);
    ```

-   `dp.danmaku.clear()`: 清除所有弹幕

-   `dp.danmaku.hide()`: 隐藏弹幕

-   `dp.danmaku.show()`: 显示弹幕

-   `dp.fullScreen`: 两个类型：`web` 和 `browser`，默认类型是 `browser`

-   `dp.fullScreen.request(type: string)`: 进入全屏

    ```js
    dp.fullScreen.request('web');
    ```

-   `dp.fullScreen.cancel(type: string)`: 退出全屏

    ```js
    dp.fullScreen.cancel('web');
    ```

## 事件绑定

`dp.on(event, handler)`

```js
dp.on('ended', function () {
    console.log('player ended');
});
```

视频事件

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

播放器事件

-   screenshot
-   thumbnails_show
-   thumbnails_hide
-   danmaku_show
-   danmaku_hide
-   danmaku_clear
-   danmaku_load_start
-   danmaku_load_end
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
-   subtitle_show
-   subtitle_hide
-   subtitle_change

## 清晰度切换

在 `video.quality` 里设置不同清晰度的视频链接和类型，`video.defaultQuality` 设置默认清晰度

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

在使用 `customType` [配合其他 MSE 库使用](#配合其他-mse-库使用)时，需要监听 `destroy` 和 `quality_end` 事件及时销毁 MSE 库实例，避免内存泄漏

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        quality: [
            {
                name: 'HD',
                url: 'demo_hd.m3u8',
                type: 'Hls',
            },
            {
                name: 'SD',
                url: 'demo_sd.m3u8',
                type: 'Hls',
            },
        ],
        defaultQuality: 0,
        customType: {
            Hls: (video, player) => {
                const hls = new window.Hls();
                hls.loadSource(video.src);
                hls.attachMedia(video);

                hls.sessionId = crypto.randomUUID();
                player.sessionId = hls.sessionId;
                player.events.on('destroy', () => {
                    hls.destroy();
                });
                player.events.on('quality_end', () => {
                    if (hls.sessionId !== player.sessionId) {
                        hls.destroy();
                    }
                });
            },
        },
    },
});
```

## 弹幕

### 弹幕接口

`danmaku.api`

<!-- **现成的接口**

链接: https://api.prprpr.me/dplayer/ -->

每日备份: [DPlayer-data](https://github.com/DIYgod/DPlayer-data)

**自己搭建**

[DPlayer-node](https://github.com/MoePlayer/DPlayer-node)

### bilibili 弹幕

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

## MSE 支持

### HLS

需要在 `DPlayer.min.js` 前面加载 [hls.js](https://github.com/video-dev/hls.js)。

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
console.log(dp.plugins.hls); // Hls 实例
```

```js
// 另一种方式，使用 customType
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

需要在 `DPlayer.min.js` 前面加载 [dash.js](https://github.com/Dash-Industry-Forum/dash.js)。

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
console.log(dp.plugins.dash); // Dash 实例
```

```js
// 另一种方式，使用 customType
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

需要在 `DPlayer.min.js` 前面加载 [shaka-player.compiled.js](https://github.com/google/shaka-player)。

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

需要在 `DPlayer.min.js` 前面加载 [flv.js](https://github.com/Bilibili/flv.js)。

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
console.log(dp.plugins.flv); // flv 实例
```

```js
// 另一种方式，使用 customType
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

需要在 `DPlayer.min.js` 前面加载 [webtorrent](https://github.com/webtorrent/webtorrent)。

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
console.log(dp.plugins.webtorrent); // WebTorrent 实例
```

```js
// 另一种方式，使用 customType
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

### 配合其他 MSE 库使用

DPlayer 可以通过 `customType` 参数与任何 MSE 库一起使用，例如支持 P2P 插件：

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
                        live: false, // 如果是直播设为true
                        // Other p2pConfig options provided by CDNBye http://www.cdnbye.com/cn/
                    },
                });
                hls.loadSource(video.src);
                hls.attachMedia(video);
            },
        },
    },
});
```

## 直播

你可以把 DPlayer 用在直播当中，但如果你想要直播弹幕，你需要自己准备一个 WebSocket 后端。

<DPlayer :options="{
    live: true,
    video: {
        url: 'https://api.dogecloud.com/player/get.m3u8?vcode=5ac682e6f8231991&userId=17&ext=.m3u8',
        type: 'hls'
    }
}"></DPlayer>

初始化播放器:

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

通过 WebSocket 获取到弹幕之后，通过 `dp.danmaku.draw` 绘制弹幕:

```js
const danmaku = {
    text: 'Get a danmaku via WebSocket',
    color: '#fff',
    type: 'right',
};
dp.danmaku.draw(danmaku);
```

## 常见问题

### 为什么播放器不能全屏？

如果播放器被包含在 iframe 里，尝试在 iframe 上添加 `allowfullscreen` 属性。

为了完善的浏览器兼容性，它应该是这样：

```html
<iframe src="example.com" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
```

### 为什么播放器不能在手机上自动播放？

大多数移动端浏览器禁止了视频自动播放。