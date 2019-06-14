---
nav: zh-Hans
search: zh-Hans
---

# DPlayer

🍭 Wow, such a lovely HTML5 danmaku video player

## Special Sponsors

<a href="https://www.polyv.net/?f=git_DPlayer-20190518-02" target="_blank">
    <img width="600px" src="https://i.loli.net/2019/06/03/5cf4028f7b8f716387.gif">
</a>

<a href="https://www.9ccms.net" target="_blank">
    <img width="330px" src="https://i.imgur.com/YBV6kfb.png">
</a>

### Sponsors

<a href="https://www.dogecloud.com/?ref=dplayer" target="_blank">
    <img width="222px" src="https://i.imgur.com/BBKXPAp.png">
</a>
<a href="https://console.upyun.com/register/?invite=BkLZ2Xqob" target="_blank">
    <img width="222px" src="https://imgur.com/apG1uKf.png">
</a>

## 安装

使用 npm:

```
npm install dplayer --save
```

使用 Yarn:

```
yarn add dplayer
```

## 入门

<div class="dplayer-wrap">
    <div id="dplayer2"><button class="docute-button load">点击加载播放器</div>
</div>

```html
<link rel="stylesheet" href="DPlayer.min.css">
<div id="dplayer"></div>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
        url: 'demo.mp4',
        pic: 'demo.jpg',
        thumbnails: 'thumbnails.jpg'
    },
    subtitle: {
        url: 'webvtt.vtt'
    },
    danmaku: {
        id: 'demo',
        api: 'https://api.prprpr.me/dplayer/'
    }
});
```

使用模块管理器:

```js
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';

const dp = new DPlayer(options);
```

## 参数

名称 | 默认值 | 描述
----|-------|----
container | document.querySelector('.dplayer') | 播放器容器元素
live | false | 开启直播模式, [详情](http://dplayer.js.org/#/home?id=live)
autoplay | false | 视频自动播放
theme | '#b7daff' | 主题色
loop | false | 视频循环播放
lang | navigator.language.toLowerCase() | 可选值: 'en', 'zh-cn', 'zh-tw'
screenshot | false | 开启截图，如果开启，视频和视频封面需要开启跨域
hotkey | true | 开启热键
preload | 'auto' | 预加载，可选值: 'none', 'metadata', 'auto'
volume | 0.7 | 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
logo | - | 在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
apiBackend | - | 自定义获取和发送弹幕行为，[详情](http://dplayer.js.org/#/home?id=live)
video | - | 视频信息
video.quality | - | [详情](http://dplayer.js.org/#/home?id=quality-switching)
video.defaultQuality | - | [详情](http://dplayer.js.org/#/home?id=quality-switching)
video.url | - | 视频链接
video.pic | - | 视频封面
video.thumbnails | - | 视频缩略图，可以使用 [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails) 生成
video.type | 'auto' | 可选值: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或其他自定义类型, [详情](http://dplayer.js.org/#/home?id=mse-support)
video.customType | - | 自定义类型, [详情](http://dplayer.js.org/#/home?id=mse-support)
subtitle | - | 外挂字幕
subtitle.url | `required` | 字幕链接
subtitle.type | 'webvtt' | 字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt
subtitle.fontSize | '20px' | 字幕字号
subtitle.bottom | '40px' | 字幕距离播放器底部的距离，取值形如: '10px' '10%'
subtitle.color | '#fff' | 字幕颜色
danmaku | - | 显示弹幕
danmaku.id | `required` | 弹幕池id，必须唯一
danmaku.api | `required` | [详情](http://dplayer.js.org/#/home?id=danmaku-api)
danmaku.token | - | 弹幕后端验证 token
danmaku.maximum | - | 弹幕最大数量
danmaku.addition | - | 额外外挂弹幕，[详情](http://dplayer.js.org/#/home?id=bilibili-danmaku)
danmaku.user | 'DIYgod' | 弹幕用户名
danmaku.bottom | - | 弹幕距离播放器底部的距离，防止遮挡字幕，取值形如: '10px' '10%'
danmaku.unlimited | false | 海量弹幕模式，即使重叠也展示全部弹幕，请注意播放器会记忆用户设置，用户手动设置后即失效
contextmenu | [] | 自定义右键菜单
highlight | [] | 自定义进度条提示点
mutex | true | 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器

例如:

<div class="dplayer-wrap">
    <div id="dplayer3"><button class="docute-button load">点击加载播放器</div>
</div>

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
        addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
        user: 'DIYgod',
        bottom: '15%',
        unlimited: true
    },
    contextmenu: [
        {
            text: 'custom1',
            link: 'https://github.com/DIYgod/DPlayer'
        },
        {
            text: 'custom2',
            click: (player) => {
                console.log(player);
            }
        }
    ],
    highlight: [
        {
            time: 20,
            text: '这是第 20 秒'
        },
        {
            time: 120,
            text: '这是 2 分钟'
        }
    ]
});
```

## API

+ `dp.play()`: 播放视频

+ `dp.pause()`: 暂停视频

+ `dp.seek(time: number)`: 跳转到特定时间

  ```js
  dp.seek(100);
  ```

+ `dp.toggle()`: 切换播放和暂停

+ `dp.on(event: string, handler: function)`: 绑定视频和播放器事件，[详情](http://dplayer.js.org/#/home?id=event-binding)

+ `dp.switchVideo(video, danmaku)`: 切换到其他视频

  ```js
  dp.switchVideo({
      url: 'second.mp4',
      pic: 'second.png',
      thumbnails: 'second.jpg'
  }, {
      id: 'test',
      api: 'https://api.prprpr.me/dplayer/',
      maximum: 3000,
      user: 'DIYgod'
  });
  ```

+ `dp.notice(text: string, time: number)`: 显示通知，时间的单位为毫秒，默认时间2000毫秒，默认透明度0.8

+ `dp.switchQuality(index: number)`: 切换清晰度

+ `dp.destroy()`: 销毁播放器

+ `dp.speed(rate: number)`: 设置视频速度

+ `dp.volume(percentage: number, nostorage: boolean, nonotice: boolean)`: 设置视频音量

  ```js
  dp.volume(0.1, true, false);
  ```

+ `dp.video`: 原生 video

 + `dp.video.currentTime`: 返回视频当前播放时间

 + `dp.video.duration`: 返回视频总时间

 + `dp.video.paused`: 返回视频是否暂停

 + 支持大多数[原生video接口](http://www.w3schools.com/tags/ref_av_dom.asp)

+ `dp.danmaku`

 + `dp.danmaku.send(danmaku, callback: function)`: 提交一个新弹幕

   ```js
   dp.danmaku.send({
       text: 'dplayer is amazing',
       color: '#b7daff',
       type: 'right'   // should be `top` `bottom` or `right`
   }, function () {
       console.log('success');
   });
   ```

 + `dp.danmaku.draw(danmaku)`: 实时绘制一个新弹幕

   ```js
   dp.danmaku.draw({
       text: 'DIYgod is amazing',
       color: '#fff',
       type: 'top'
   });
   ```

 + `dp.danmaku.opacity(percentage: number)`: 设置弹幕透明度，透明度值在 0 到 1 之间

   ```js
   dp.danmaku.opacity(0.5);
   ```

 + `dp.danmaku.clear()`: 清除所有弹幕

 + `dp.danmaku.hide()`: 隐藏弹幕

 + `dp.danmaku.show()`: 显示弹幕

+ `dp.fullScreen`: 两个类型：`web` 和 `browser`，默认类型是 `browser`

 + `dp.fullScreen.request(type: string)`: 进入全屏

   ```js
   dp.fullScreen.request('web');
   ```

 + `dp.fullScreen.cancel(type: string)`: 退出全屏

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

播放器事件

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

## 清晰度切换

在 `video.quality` 里设置不同清晰度的视频链接和类型，`video.defaultQuality` 设置默认清晰度

<div class="dplayer-wrap">
    <div id="dplayer4"><button class="docute-button load">点击加载播放器</div>
</div>

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        quality: [{
            name: 'HD',
            url: 'demo.m3u8',
            type: 'hls'
        }, {
            name: 'SD',
            url: 'demo.mp4',
            type: 'normal'
        }],
        defaultQuality: 0,
        pic: 'demo.png',
        thumbnails: 'thumbnails.jpg',
    }
});
```

## 弹幕

### 弹幕接口

`danmaku.api`

**现成的接口**

链接: https://api.prprpr.me/dplayer/

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
        addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]']
    }
}
```

## MSE 支持

### HLS

需要在 `DPlayer.min.js` 前面加载 [hls.js](https://github.com/video-dev/hls.js)。

<div class="dplayer-wrap">
    <div id="dplayer5"><button class="docute-button load">点击加载播放器</div>
</div>

```html
<link rel="stylesheet" href="DPlayer.min.css">
<div id="dplayer"></div>
<script src="hls.min.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.m3u8',
        type: 'hls'
    }
});
```

```js
// 另一种方式，使用 customType
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.m3u8',
        type: 'customHls',
        customType: {
            'customHls': function (video, player) {
                const hls = new Hls();
                hls.loadSource(video.src);
                hls.attachMedia(video);
            }
        }
    }
});
```

### MPEG DASH

需要在 `DPlayer.min.js` 前面加载 [dash.js](https://github.com/Dash-Industry-Forum/dash.js)。

<div class="dplayer-wrap">
    <div id="dplayer6"><button class="docute-button load">点击加载播放器</div>
</div>

```html
<link rel="stylesheet" href="DPlayer.min.css">
<div id="dplayer"></div>
<script src="dash.min.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.mpd',
        type: 'dash'
    }
});
```

```js
// 另一种方式，使用 customType
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.mpd',
        type: 'customDash',
        customType: {
            'customDash': function (video, player) {
                dashjs.MediaPlayer().create().initialize(video, video.src, false);
            }
        }
    }
});
```

### MPEG DASH (Shaka)

需要在 `DPlayer.min.js` 前面加载 [shaka-player.compiled.js](https://github.com/google/shaka-player)。

```html
<link rel="stylesheet" href="DPlayer.min.css">
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
            'shakaDash': function (video, player) {
                var src = video.src;
                var playerShaka = new shaka.Player(video); // 将会修改 video.src
                playerShaka.load(src);
            }
        }
    }
});
```

### FLV

需要在 `DPlayer.min.js` 前面加载 [flv.js](https://github.com/Bilibili/flv.js)。

<div class="dplayer-wrap">
    <div id="dplayer7"><button class="docute-button load">点击加载播放器</div>
</div>

```html
<link rel="stylesheet" href="DPlayer.min.css">
<div id="dplayer"></div>
<script src="flv.min.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.flv',
        type: 'flv'
    }
});
```

```js
// 另一种方式，使用 customType
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.flv',
        type: 'customFlv',
        customType: {
            'customFlv': function (video, player) {
                const flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: video.src
                });
                flvPlayer.attachMediaElement(video);
                flvPlayer.load();
            }
        }
    }
});
```

### WebTorrent

需要在 `DPlayer.min.js` 前面加载 [webtorrent](https://github.com/webtorrent/webtorrent)。

<div class="dplayer-wrap">
    <div id="dplayer8"><button class="docute-button load">点击加载播放器</div>
</div>

```html
<link rel="stylesheet" href="DPlayer.min.css">
<div id="dplayer"></div>
<script src="webtorrent.min.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'magnet:demo',
        type: 'webtorrent'
    }
});
```

```js
// 另一种方式，使用 customType
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'magnet:demo',
        type: 'customWebTorrent',
        customType: {
            'customWebTorrent': function (video, player) {
                player.container.classList.add('dplayer-loading');
                const client = new WebTorrent();
                const torrentId = video.src;
                client.add(torrentId, (torrent) => {
                    const file = torrent.files.find((file) => file.name.endsWith('.mp4'));
                    file.renderTo(video, {
                        autoplay: player.options.autoplay
                    }, () => {
                        player.container.classList.remove('dplayer-loading');
                    });
                });
            }
        }
    }
});
```

### 配合其他 MSE 库使用

DPlayer 可以通过 `customType` 参数与任何 MSE 库一起使用

<div class="dplayer-wrap">
    <div id="dplayer10"><button class="docute-button load">点击加载播放器</div>
</div>

```html
<link rel="stylesheet" href="DPlayer.min.css">
<div id="dplayer"></div>
<script src="pearplayer.js"></script>
<script src="DPlayer.min.js"></script>
```

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4',
        type: 'pearplayer',
        customType: {
            'pearplayer': function (video, player) {
                new PearPlayer(video, {
                    src: video.src,
                    autoplay: player.options.autoplay
                });
            }
        }
    }
});
```

## 直播

<div class="dplayer-wrap">
    <div id="dplayer9"><button class="docute-button load">点击加载播放器</div>
</div>

你可以把 DPlayer 用在直播当中，但如果你想要直播弹幕，你需要自己准备一个 WebSocket 后端。

初始化播放器:

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    live: true,
    danmaku: true,
    apiBackend: {
        read: function (endpoint, callback) {
            console.log('Pretend to connect WebSocket');
            callback();
        },
        send: function (endpoint, danmakuData, callback) {
            console.log('Pretend to send danamku via WebSocket', danmakuData);
            callback();
        }
    },
    video: {
        url: 'demo.m3u8',
        type: 'hls'
    }
});
```

通过 WebSocket 获取到弹幕之后，通过 `dp.danmaku.draw` 绘制弹幕:

```js
const danmaku = {
    text: 'Get a danamku via WebSocket',
    color: '#fff',
    type: 'right'
};
dp.danmaku.draw(danmaku);
```

## CDN

- [jsDelivr](https://www.jsdelivr.com/package/npm/dplayer)
- [cdnjs](https://cdnjs.com/libraries/dplayer)
- [unpkg](https://unpkg.com/dplayer/)

## 常见问题

### 为什么播放器不能全屏？

如果播放器被包含在 iframe 里，尝试在 iframe 上添加 `allowfullscreen` 属性。

为了完善的浏览器兼容性，它应该是这样：

```html
<iframe src="example.com"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"></iframe> 
```

### 为什么播放器不能在手机上自动播放？

大多数移动端浏览器禁止了视频自动播放。
