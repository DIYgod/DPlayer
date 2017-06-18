const tranZH = {
    'Danmaku is loading': '弹幕加载中',
    'Top': '顶部',
    'Bottom': '底部',
    'Rolling': '滚动',
    'Input danmaku, hit Enter': '输入弹幕，回车发送',
    'About author': '关于作者',
    'DPlayer feedback': '播放器意见反馈',
    'About DPlayer': '关于 DPlayer 播放器',
    'Loop': '洗脑循环',
    'Speed': '速度',
    'Opacity for danmaku': '弹幕透明度',
    'Normal': '正常',
    'Please input danmaku content!': '要输入弹幕内容啊喂！',
    'Set danmaku color': '设置弹幕颜色',
    'Set danmaku type': '设置弹幕类型',
    'Danmaku': '弹幕',
    'This video fails to load': '视频加载失败',
    'Switching to': '正在切换至',
    'Switched to': '已经切换至',
    'quality': '画质',
};

module.exports = function (lang) {
    this.lang = lang;
    this.tran = (text) => {
        if (this.lang === 'en') {
            return text;
        }
        else if (this.lang === 'zh') {
            return tranZH[text];
        }
    };
};