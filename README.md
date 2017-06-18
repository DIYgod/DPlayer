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

See [docs](http://dplayer.js.org/docs)

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

- [Official danmaku data (https://api.prprpr.me/dplayer/)](https://github.com/DIYgod/DPlayer-data)

- [DPlayer-for-typecho](https://github.com/volio/DPlayer-for-typecho)

- [Hexo-tag-dplayer](https://github.com/NextMoe/hexo-tag-dplayer)

- [DPlayer_for_Z-BlogPHP](https://github.com/fghrsh/DPlayer_for_Z-BlogPHP)

- [纸飞机视频区插件(DPlayer for Discuz!)](https://coding.net/u/Click_04/p/video/git)

- [dplayer_py_backend](https://github.com/dixyes/dplayer_py_backend)

- [dplayer_lua_backend](https://github.com/dixyes/dplayer_lua_backend)

- [DPlayer for WordPress](https://github.com/BlueCocoa/DPlayer-WordPress)

- [Vue-DPlayer](https://github.com/sinchang/vue-dplayer)

## LICENSE

[The Star And Thank Author License (SATA)](https://github.com/DIYgod/DPlayer/blob/master/LICENSE)
