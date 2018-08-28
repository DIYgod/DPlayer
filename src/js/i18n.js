/*
W3C def language codes is :
    language-code = primary-code ( "-" subcode )
        primary-code    ISO 639-1   ( the names of language with 2 code )
        subcode         ISO 3166    ( the names of countries )

NOTE: use lowercase to prevent case typo from user!
Use this as shown below..... */

function i18n (lang) {
    this.lang = lang;
    this.tran = (text) => {
        if (tranTxt[this.lang] && tranTxt[this.lang][text]) {
            return tranTxt[this.lang][text];
        }
        else {
            return text;
        }
    };
}

// add translation text here
const tranTxt = {
    'th-th' : {
        'Danmaku is loading': 'กำลังโหลดม่านกระสุน',
        'Top': 'ด้านบน',
        'Bottom': 'ด้านล่าง',
        'Rolling': 'กลิ้ง',
        'Input danmaku, hit Enter': 'กรอกข้อความ，กด Enter',
        'About author': 'เกี่ยวกับ',
        'DPlayer feedback': 'ข้อเสนอแนะ',
        'About DPlayer': 'เกี่ยวกับ DPlayer',
        'Loop': 'ลูป',
        'Speed': 'ความเร็ว',
        'Opacity for danmaku': 'ความทึบของม่านกระสุน',
        'Normal': 'ปกติ',
        'Please input danmaku content!': 'กรุณากรอกข้อความ！',
        'Set danmaku color': 'ตั้งค่าสีม่านกระสุน',
        'Set danmaku type': 'ตั้งค่าประเภทม่านกระสุน',
        'Show danmaku': 'แสดงม่านกระสุน',
        'Video load failed': 'โหลดวิด๊โอผิดพลาด',
        'Danmaku load failed': 'โหลดม่านกระสุนผิดพลาด',
        'Danmaku send failed': 'ส่งข้อความผิดพลาด',
        'Switching to': 'กำลังเปลี่ยนเป็น',
        'Switched to': 'ได้เปลี่ยนเป็น',
        'quality': 'คุณภาพ',
        'FF': 'เร่งความเร็ว',
        'REW': 'ย้อนกลับ',
        'Unlimited danmaku': 'ม่านกระสุนไม่จำกัด',
        'Send danmaku': 'ส่งข้อความ',
        'Setting': 'การตั้งค่า',
        'Full screen': 'โหมดเต็มจอ',
        'Web full screen': 'โหมดโรงภาพยนต์',
        'Send': 'ส่ง',
        'Screenshot': 'จับภาพหน้าจอ',
        's': '秒',
        'Show subtitle': 'แสดงซับไทเทิล',
        'Hide subtitle': 'ซ่อนซ่ับไทเทิล',
        'Volume': 'ระดับเสียง',
        'Live': 'สด',
        'Video info': 'ข้อมูลวิดีโอ',
    },
    'zh-cn' : {
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
        'Show danmaku': '显示弹幕',
        'Video load failed': '视频加载失败',
        'Danmaku load failed': '弹幕加载失败',
        'Danmaku send failed': '弹幕发送失败',
        'Switching to': '正在切换至',
        'Switched to': '已经切换至',
        'quality': '画质',
        'FF': '快进',
        'REW': '快退',
        'Unlimited danmaku': '海量弹幕',
        'Send danmaku': '发送弹幕',
        'Setting': '设置',
        'Full screen': '全屏',
        'Web full screen': '页面全屏',
        'Send': '发送',
        'Screenshot': '截图',
        's': '秒',
        'Show subtitle': '显示字幕',
        'Hide subtitle': '隐藏字幕',
        'Volume': '音量',
        'Live': '直播',
        'Video info': '视频统计信息',
    },
    'zh-tw' : {
        'Danmaku is loading': '彈幕加載中',
        'Top': '頂部',
        'Bottom': '底部',
        'Rolling': '滾動',
        'Input danmaku, hit Enter': '輸入彈幕，Enter 發送',
        'About author': '關於作者',
        'DPlayer feedback': '播放器意見反饋',
        'About DPlayer': '關於 DPlayer 播放器',
        'Loop': '循環播放',
        'Speed': '速度',
        'Opacity for danmaku': '彈幕透明度',
        'Normal': '正常',
        'Please input danmaku content!': '請輸入彈幕内容啊！',
        'Set danmaku color': '設置彈幕顏色',
        'Set danmaku type': '設置彈幕類型',
        'Show danmaku': '顯示彈幕',
        'Video load failed': '視頻加載失敗',
        'Danmaku load failed': '彈幕加載失敗',
        'Danmaku send failed': '彈幕發送失敗',
        'Switching to': '正在切換至',
        'Switched to': '已經切換至',
        'quality': '畫質',
        'FF': '快進',
        'REW': '快退',
        'Unlimited danmaku': '海量彈幕',
        'Send danmaku': '發送彈幕',
        'Setting': '設置',
        'Full screen': '全屏',
        'Web full screen': '頁面全屏',
        'Send': '發送',
        'Screenshot': '截圖',
        's': '秒',
        'Show subtitle': '顯示字幕',
        'Hide subtitle': '隱藏字幕',
        'Volume': '音量',
        'Live': '直播',
        'Video info': '視頻統計信息',
    }
};

export default i18n;