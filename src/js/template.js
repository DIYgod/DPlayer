import Icons from './icons';
import tplPlayer from '../template/player.art';
import utils from './utils';

class Template {
    constructor(options) {
        this.container = options.container;
        this.options = options.options;
        this.index = options.index;
        this.tran = options.tran;
        this.init();
    }

    init() {
        this.container.innerHTML = tplPlayer({
            options: this.options,
            index: this.index,
            tran: this.tran,
            icons: Icons,
            mobile: utils.isMobile,
            video: {
                current: true,
                pic: this.options.video.pic,
                screenshot: this.options.screenshot,
                airplay: utils.isSafari && !utils.isChrome ? this.options.airplay : false,
                chromecast: this.options.chromecast,
                preload: this.options.preload,
                url: this.options.video.url,
                subtitle: this.options.subtitle,
            },
        });

        this.volumeBar = this.container.querySelector('.dplayer-volume-bar-inner');
        this.volumeBarWrap = this.container.querySelector('.dplayer-volume-bar');
        this.volumeBarWrapWrap = this.container.querySelector('.dplayer-volume-bar-wrap');
        this.volumeButton = this.container.querySelector('.dplayer-volume');
        this.volumeButtonIcon = this.container.querySelector('.dplayer-volume-icon');
        this.volumeIcon = this.container.querySelector('.dplayer-volume-icon .dplayer-icon-content');
        this.playedBar = this.container.querySelector('.dplayer-played');
        this.loadedBar = this.container.querySelector('.dplayer-loaded');
        this.playedBarWrap = this.container.querySelector('.dplayer-bar-wrap');
        this.playedBarTime = this.container.querySelector('.dplayer-bar-time');
        this.danmaku = this.container.querySelector('.dplayer-danmaku');
        this.danmakuLoading = this.container.querySelector('.dplayer-danloading');
        this.video = this.container.querySelector('.dplayer-video-current');
        this.bezel = this.container.querySelector('.dplayer-bezel-icon');
        this.playButton = this.container.querySelector('.dplayer-play-icon');
        this.mobilePlayButton = this.container.querySelector('.dplayer-mobile-play');
        this.videoWrap = this.container.querySelector('.dplayer-video-wrap');
        this.controllerMask = this.container.querySelector('.dplayer-controller-mask');
        this.ptime = this.container.querySelector('.dplayer-ptime');
        this.settingButton = this.container.querySelector('.dplayer-setting-icon');
        this.settingBox = this.container.querySelector('.dplayer-setting-box');
        this.mask = this.container.querySelector('.dplayer-mask');
        this.loop = this.container.querySelector('.dplayer-setting-loop');
        this.loopToggle = this.container.querySelector('.dplayer-setting-loop .dplayer-toggle-setting-input');
        this.showDanmaku = this.container.querySelector('.dplayer-setting-showdan');
        this.showDanmakuToggle = this.container.querySelector('.dplayer-showdan-setting-input');
        this.unlimitDanmaku = this.container.querySelector('.dplayer-setting-danunlimit');
        this.unlimitDanmakuToggle = this.container.querySelector('.dplayer-danunlimit-setting-input');
        this.speed = this.container.querySelector('.dplayer-setting-speed');
        this.speedItem = this.container.querySelectorAll('.dplayer-setting-speed-item');
        this.danmakuOpacityBar = this.container.querySelector('.dplayer-danmaku-bar-inner');
        this.danmakuOpacityBarWrap = this.container.querySelector('.dplayer-danmaku-bar');
        this.danmakuOpacityBarWrapWrap = this.container.querySelector('.dplayer-danmaku-bar-wrap');
        this.danmakuOpacityBox = this.container.querySelector('.dplayer-setting-danmaku');
        this.dtime = this.container.querySelector('.dplayer-dtime');
        this.controller = this.container.querySelector('.dplayer-controller');
        this.commentInput = this.container.querySelector('.dplayer-comment-input');
        this.commentButton = this.container.querySelector('.dplayer-comment-icon');
        this.commentSettingBox = this.container.querySelector('.dplayer-comment-setting-box');
        this.commentSettingButton = this.container.querySelector('.dplayer-comment-setting-icon');
        this.commentSettingFill = this.container.querySelector('.dplayer-comment-setting-icon path');
        this.commentSendButton = this.container.querySelector('.dplayer-send-icon');
        this.commentSendFill = this.container.querySelector('.dplayer-send-icon path');
        this.commentColorSettingBox = this.container.querySelector('.dplayer-comment-setting-color');
        this.browserFullButton = this.container.querySelector('.dplayer-full-icon');
        this.webFullButton = this.container.querySelector('.dplayer-full-in-icon');
        this.menu = this.container.querySelector('.dplayer-menu');
        this.menuItem = this.container.querySelectorAll('.dplayer-menu-item');
        this.qualityList = this.container.querySelector('.dplayer-quality-list');
        this.camareButton = this.container.querySelector('.dplayer-camera-icon');
        this.airplayButton = this.container.querySelector('.dplayer-airplay-icon');
        this.chromecastButton = this.container.querySelector('.dplayer-chromecast-icon');
        this.subtitleButton = this.container.querySelector('.dplayer-subtitle-icon');
        this.subtitleButtonInner = this.container.querySelector('.dplayer-subtitle-icon .dplayer-icon-content');
        this.subtitlesButton = this.container.querySelector('.dplayer-subtitles-icon');
        this.subtitlesBox = this.container.querySelector('.dplayer-subtitles-box');
        this.subtitlesItem = this.container.querySelectorAll('.dplayer-subtitles-item');
        this.subtitle = this.container.querySelector('.dplayer-subtitle');
        this.subtrack = this.container.querySelector('.dplayer-subtrack');
        this.qualityButton = this.container.querySelector('.dplayer-quality-icon');
        this.barPreview = this.container.querySelector('.dplayer-bar-preview');
        this.barWrap = this.container.querySelector('.dplayer-bar-wrap');
        this.noticeList = this.container.querySelector('.dplayer-notice-list');
        this.infoPanel = this.container.querySelector('.dplayer-info-panel');
        this.infoPanelClose = this.container.querySelector('.dplayer-info-panel-close');
        this.infoVersion = this.container.querySelector('.dplayer-info-panel-item-version .dplayer-info-panel-item-data');
        this.infoFPS = this.container.querySelector('.dplayer-info-panel-item-fps .dplayer-info-panel-item-data');
        this.infoType = this.container.querySelector('.dplayer-info-panel-item-type .dplayer-info-panel-item-data');
        this.infoUrl = this.container.querySelector('.dplayer-info-panel-item-url .dplayer-info-panel-item-data');
        this.infoResolution = this.container.querySelector('.dplayer-info-panel-item-resolution .dplayer-info-panel-item-data');
        this.infoDuration = this.container.querySelector('.dplayer-info-panel-item-duration .dplayer-info-panel-item-data');
        this.infoDanmakuId = this.container.querySelector('.dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data');
        this.infoDanmakuApi = this.container.querySelector('.dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data');
        this.infoDanmakuAmount = this.container.querySelector('.dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data');
    }

    static NewNotice(text, opacity, id) {
        const notice = document.createElement('div');
        notice.classList.add('dplayer-notice');
        notice.style.opacity = opacity;
        notice.innerText = text;
        if (id) {
            notice.id = `dplayer-notice-${id}`;
        }
        return notice;
    }
}

export default Template;
