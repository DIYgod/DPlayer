# DPlayer

[![npm](https://img.shields.io/npm/v/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![npm](https://img.shields.io/npm/l/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![devDependency Status](https://img.shields.io/david/dev/DIYgod/dplayer.svg?style=flat-square)](https://david-dm.org/DIYgod/DPlayer#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![Travis](https://img.shields.io/travis/DIYgod/DPlayer.svg?style=flat-square)](https://travis-ci.org/DIYgod/DPlayer)
[![%e2%9d%a4](https://img.shields.io/badge/made%20with-%e2%9d%a4-ff69b4.svg?style=flat-square)](https://www.anotherhome.net/)

> Wow, such a lovely HTML5 danmaku video player

## Introduction

**Notice:** This player is still under development.

[Demo](http://diygod.github.io/DPlayer/demo/)

## Install

```
$ npm install dplayer --save
```

## Usage

### HTML

```HTML
<link rel="stylesheet" href="DPlayer.min.css">
<!-- ... -->
<div id="player1" class="dplayer"></div>
<!-- ... -->
<script src="DPlayer.min.js"></script>
```

### JS

```JS
var dp = new DPlayer(option);
dp.init();
```

#### Options

```JS
var option = {
    element: document.getElementById('player1'),                       // Optional, player element
    autoplay: false,                                                   // Optional, autoplay video, not supported by mobile browsers
    theme: '#FADFA3',                                                  // Optional, theme color, default: #b7daff
    loop: true,                                                        // Optional, loop play music, default: true
    video: {                                                           // Required, video info
        url: '若能绽放光芒.mp4',                                         // Required, video url
        pic: '若能绽放光芒.png'                                          // Optional, music picture
    },
    danmaku: {                                                         // Optional, showing danmaku
        id: '9E2E3368B56CDBB4',                                        // Required, danmaku id, MUST BE UNIQUE
        api: 'https://dplayer.daoapp.io/',                             // Required, danmaku api
        token: 'tokendemo'                                             // Optional, danmaku token for api
    }
}
```

#### API

+ `dp.init()`
+ `dp.play()`
+ `dp.pause()`

#### Event binding

`dp.on(event, handler)`

`event`:
+ `play`: Triggered when DPlayer start play
+ `pause`: Triggered when DPlayer paused
+ `canplay`: Triggered when enough data is available that DPlayer can be played
+ `playing`: Triggered periodically when DPlayer is playing
+ `ended`: Triggered when DPlayer ended
+ `error`: Triggered when an error occurs

#### Work with module bundler

```js
var DPlayer = require('DPlayer');
var dp = new DPlayer({
    // ...
});
```

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

## Todo

- [ ] 中英文切换

- [ ] 微博登录

- [ ] 锁定IP规则

- [ ] icon 动画

## LICENSE

MIT © [DIYgod](http://github.com/DIYgod)
