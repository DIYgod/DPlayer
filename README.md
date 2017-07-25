<p align="center">
<img src="https://ws4.sinaimg.cn/large/006tKfTcgy1fhu01y9uy7j305k04s3yc.jpg" alt="ADPlayer" width="100">
</p>
<h1 align="center">DPlayer</h1>

> Wow, such a lovely HTML5 danmaku video player

[![npm](https://img.shields.io/npm/v/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![npm](https://img.shields.io/npm/l/dplayer.svg?style=flat-square)](https://github.com/DIYgod/DPlayer/blob/master/LICENSE)
[![devDependency Status](https://img.shields.io/david/dev/DIYgod/dplayer.svg?style=flat-square)](https://david-dm.org/DIYgod/DPlayer#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![Travis](https://img.shields.io/travis/DIYgod/DPlayer.svg?style=flat-square)](https://travis-ci.org/DIYgod/DPlayer)
[![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?style=flat-square)](https://github.com/DIYgod/DPlayer#donate)

## Introduction

![image](http://i.imgur.com/207ch36.jpg)

DPlayer is a lovely HTML5 danmaku video player to help people build video and danmaku easily.

**DPlayer supports:**

- Streaming formats
	- [HLS](https://github.com/video-dev/hls.js)
	- [FLV](https://github.com/Bilibili/flv.js)
- Media formats
	- MP4 H.264
	- WebM
	- Ogg Theora Vorbis
- Features
	- Danamku
	- Screenshot
	- Hotkeys
	- Quality switching

Using DPlayer on your project? [Let me know!](https://github.com/DIYgod/DPlayer/issues/31)

**[Demo](http://dplayer.js.org/)**

**[Docs](http://dplayer.js.org/docs)**

## Install

```
$ npm install dplayer --save
```

## Quick Start

```html
<link rel="stylesheet" href="dist/DPlayer.min.css">
<div id="player1"></div>
<script src="dist/DPlayer.min.js"></script>
```

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

[Read the Docs](http://dplayer.js.org/docs)

## Join the Discussion

- [Telegram Group](https://t.me/adplayer)
- [QQ Group](https://shang.qq.com/wpa/qunwpa?idkey=bf22213ae0028a82e5adf3f286dfd4f01e0997dc9f1dcd8e831a0a85e799be17): 415835947

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
- Feel free to submit yours in [`Let me know!`](https://github.com/DIYgod/DPlayer/issues/31)

## Who use DPlayer?

- [Anotherhome](https://www.anotherhome.net/2648)
- [嘀哩嘀哩](http://www.dilidili.wang/)
- [息萌](http://ximeng.co/)
- [TALD](https://github.com/maysrp/TALD)
- [webdir](https://github.com/maysrp/webdir)
- [0xBBC](https://blog.0xbbc.com/2016/09/dplayer-for-wordpress/)
- [树洞](https://aoaoao.me/1031.html)
- [FGHRSH的博客](https://www.fghrsh.net/post/57.html)
- [银色子弹](https://www.sbsub.com/)
- [妖气山弹幕网](http://www.m173.tv/)
- [御宅同萌 – 聖域](https://wp.acg-moe.com/)
- [動漫御宅堂](http://syu65406.tw/anime/)
- [纸飞机南航青年网络社区](http://my.nuaa.edu.cn/video-video.html)
- [otomads](https://otomads.com/)
- Feel free to submit yours in [`Let me know!`](https://github.com/DIYgod/DPlayer/issues/31)

## CDN

- [unpkg](https://unpkg.com/dplayer)
- [cdnjs](https://cdnjs.com/libraries/dplayer)
- [BootCDN](http://www.bootcdn.cn/dplayer/)
- [RawGit](https://rawgit.com/DIYgod/DPlayer/master/dist/DPlayer.min.js)

## Donate

- [Donate via Paypal](https://www.paypal.me/DIYgod)
- [Donate via WeChat Pay](https://ws4.sinaimg.cn/large/006tKfTcgy1fhu1uowywej307s07st8h.jpg)
- [Donate via Alipay](https://ws4.sinaimg.cn/large/006tKfTcgy1fhu1vf4ih7j307s07sdfm.jpg)
- Donate via Bitcoin: 13CwQLHzPYm2tewNMSJBeArbbRM5NSmCD1


## Author

**DPlayer** © [DIYgod](https://github.com/DIYgod), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by DIYgod with help from contributors ([list](https://github.com/DIYgod/DPlayer/contributors)).

> Blog [@Anotherhome](https://www.anotherhome.net) · GitHub [@DIYgod](https://github.com/DIYgod) · Twitter [@DIYgod](https://twitter.com/DIYgod) · Weibo [@DIYgod酱](http://weibo.com/anotherhome) · Telegram Channel [@awesomeDIYgod](https://t.me/awesomeDIYgod)