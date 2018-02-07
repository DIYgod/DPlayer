<p align="center">
<img src="https://ws4.sinaimg.cn/large/006tKfTcgy1fhu01y9uy7j305k04s3yc.jpg" alt="ADPlayer" width="100">
</p>
<h1 align="center">DPlayer</h1>

> Wow, such a lovely HTML5 danmaku video player

[![npm](https://img.shields.io/npm/v/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![npm](https://img.shields.io/npm/l/dplayer.svg?style=flat-square)](https://github.com/MoePlayer/DPlayer/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/dplayer.svg?style=flat-square)](https://www.npmjs.com/package/dplayer)
[![size](https://badge-size.herokuapp.com/MoePlayer/DPlayer/master/dist/DPlayer.min.js?compression=gzip&style=flat-square)](https://github.com/MoePlayer/DPlayer/tree/master/dist)
[![Travis](https://img.shields.io/travis/MoePlayer/DPlayer.svg?style=flat-square)](https://travis-ci.org/MoePlayer/DPlayer)
[![devDependency Status](https://img.shields.io/david/dev/MoePlayer/dplayer.svg?style=flat-square)](https://david-dm.org/MoePlayer/DPlayer#info=devDependencies)
[![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?style=flat-square)](https://github.com/MoePlayer/DPlayer#donate)

## Introduction

![image](http://i.imgur.com/207ch36.jpg)

DPlayer is a lovely HTML5 danmaku video player to help people build video and danmaku easily.

**DPlayer supports:**

- Streaming formats
    - [HLS](https://github.com/video-dev/hls.js)
    - [FLV](https://github.com/Bilibili/flv.js)
    - [MPEG DASH](https://github.com/Dash-Industry-Forum/dash.js)
    - [WebTorrent](https://github.com/webtorrent/webtorrent)
    - Any other custom streaming formats
- Media formats
    - MP4 H.264
    - WebM
    - Ogg Theora Vorbis
- Features
    - Danamku
    - Screenshot
    - Hotkeys
    - Quality switching
    - Thumbnails
    - Subtitle

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

## CDN

- [jsDelivr](https://www.jsdelivr.com/package/npm/dplayer)
- [cdnjs](https://cdnjs.com/libraries/dplayer)
- [unpkg](https://unpkg.com/dplayer/)

## FAQ

<details><summary>Why can't some videos be full screen?</summary><br>

If player is contained in a iframe, try adding the allowfullscreen attribute to the iframe.

For full browser support it should look like this:

```html
<iframe src="example.com"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"></iframe> 
```
</details>

<details><summary>Why can't player autoplay in some mobile browsers?</summary><br>

Most mobile browsers forbid video autoplay, you wont be able to achieve it without hacks.
</details>

## Join the Discussion

- [Telegram Group](https://t.me/adplayer)
- [QQ Group](https://shang.qq.com/wpa/qunwpa?idkey=bf22213ae0028a82e5adf3f286dfd4f01e0997dc9f1dcd8e831a0a85e799be17): 415835947

## Related Projects

- [DPlayer-backend](https://github.com/MoePlayer/DPlayer-backend)
- [DPlayer-data(weekly backup for api.prprpr.me/dplayer)](https://github.com/MoePlayer/DPlayer-data)
- [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails)
- [DPlayer-for-typecho](https://github.com/volio/DPlayer-for-typecho)
- [Hexo-tag-dplayer](https://github.com/NextMoe/hexo-tag-dplayer)
- [DPlayer_for_Z-BlogPHP](https://github.com/fghrsh/DPlayer_for_Z-BlogPHP)
- [纸飞机视频区插件(DPlayer for Discuz!)](https://coding.net/u/Click_04/p/video/git)
- [DPlayer for WordPress](https://github.com/BlueCocoa/DPlayer-WordPress)
- [Vue-DPlayer](https://github.com/sinchang/vue-dplayer)
- [react-dplayer](https://github.com/hnsylitao/react-dplayer)
- [DPlayer-Lite](https://github.com/kn007/DPlayer-Lite)
- [DPlayerHandle](https://github.com/kn007/DPlayerHandle)
- [laravel-danmaku](https://github.com/MoePlayer/laravel-danmaku)
- [dplayer-live-backend](https://github.com/Izumi-kun/dplayer-live-backend)
- Feel free to submit yours in [`Let me know!`](https://github.com/MoePlayer/DPlayer/issues/31)

## Who use DPlayer?

- [嘀哩嘀哩](http://www.dilidili.wang/)
- [银弹字幕组](https://www.sbsub.com/)
- [纸飞机南航青年网络社区](http://my.nuaa.edu.cn/video-video.html)
- [otomads](https://otomads.com/)
- Feel free to submit yours in [`Let me know!`](https://github.com/MoePlayer/DPlayer/issues/31)

## Donate

- [Donate via OpenCollective](https://opencollective.com/dplayer)
- [Donate via Paypal](https://www.paypal.me/DIYgod)
- [Donate via WeChat Pay](https://ws4.sinaimg.cn/large/006tKfTcgy1fhu1uowywej307s07st8h.jpg)
- [Donate via Alipay](https://ws4.sinaimg.cn/large/006tKfTcgy1fhu1vf4ih7j307s07sdfm.jpg)
- Donate via Bitcoin: 13CwQLHzPYm2tewNMSJBeArbbRM5NSmCD1

## Sponsors

Thank you to all our sponsors!

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://pear.hk/" target="_blank">
          <img width="222px" src="https://i.imgur.com/5qQYmfc.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://console.upyun.com/register/?invite=BkLZ2Xqob" target="_blank">
          <img width="222px" src="https://imgur.com/apG1uKf.png">
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/MoePlayer/DPlayer/graphs/contributors"><img src="https://opencollective.com/DPlayer/contributors.svg?width=890" /></a>

## Backers

Thank you to all our backers!

<a href="https://opencollective.com/DPlayer#backers" target="_blank"><img src="https://opencollective.com/DPlayer/backers.svg?width=890"></a>

## Author

**DPlayer** © [DIYgod](https://github.com/DIYgod), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by DIYgod with help from contributors ([list](https://github.com/DIYgod/DPlayer/contributors)).

> [Blog](https://diygod.me) · GitHub [@DIYgod](https://github.com/DIYgod) · Twitter [@DIYgod](https://twitter.com/DIYgod) · Telegram Channel [@awesomeDIYgod](https://t.me/awesomeDIYgod)
