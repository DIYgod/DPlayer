// stats.js: JavaScript Performance Monitor
const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
function animate () {
    stats.begin();
    // monitored code goes here
    stats.end();

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// highlight.js
hljs.initHighlightingOnLoad();

$.ajax({
    url: 'https://api.cdnjs.com/libraries/dplayer?fields=assets',
    type: 'get',
    dataType: 'json',
    success(data) {
        if (data) {
            var html = '';
            for (var i = 0; i < data.assets.length; i++) {
                html += '<option value="' + data.assets[i].version + '">Version ' + data.assets[i].version + (i === 0 ? ' (latest on npm)' : '') + '</option>';
            }
            $('.version-npm').html(html);
        }
    },
    error(e) {
        console.error(e);
    },
});

$('.version-select').change(function () {
    var version = $('.version-select').val();
    var jslink;
    var csslink;
    if (version === 'github') {
        jslink = 'https://rawgit.com/MoePlayer/DPlayer/master/dist/DPlayer.min.js';
        csslink = 'https://rawgit.com/MoePlayer/DPlayer/master/dist/DPlayer.min.css';
    }
    else {
        jslink = 'https://cdnjs.cloudflare.com/ajax/libs/dplayer/' + version + '/DPlayer.min.js';
        csslink = 'https://cdnjs.cloudflare.com/ajax/libs/dplayer/' + version + '/DPlayer.min.css'
    }
    
    $('.dplayer-css').attr('href', csslink);

    $.ajax({
        url: jslink,
        cache: true,
        type: 'get',
        dataType: 'script',
        success() {
            clearPlayers();
            initPlayers();
        },
    });
});

function initPlayers () {
    // dp1
    window.dp1 = new DPlayer({
        element: document.getElementById('dplayer1'),
        video: {
            url: 'http://devtest.qiniudn.com/若能绽放光芒.mp4',
            pic: 'http://devtest.qiniudn.com/若能绽放光芒.png',
            thumbnails: 'http://devtest.qiniudn.com/thumbnails.jpg'
        },
        danmaku: {
            id: '9E2E3368B56CDBB4',
            api: 'https://api.prprpr.me/dplayer/'
        }
    });

    // dp2
    window.dp2 = new DPlayer({
        element: document.getElementById('dplayer2'),
        autoplay: false,
        theme: '#FADFA3',
        loop: true,
        screenshot: true,
        hotkey: true,
        logo: 'http://devtest.qiniudn.com/DPlayer.png',
        volume: 0.2,
        video: {
            url: 'http://devtest.qiniudn.com/若能绽放光芒.mp4',
            pic: 'http://devtest.qiniudn.com/若能绽放光芒.png',
            thumbnails: 'http://devtest.qiniudn.com/thumbnails.jpg',
            type: 'auto'
        },
        danmaku: {
            id: '9E2E3368B56CDBB4',
            api: 'https://api.prprpr.me/dplayer/',
            token: 'tokendemo',
            maximum: 3000,
            user: 'DIYgod',
            margin: {
                bottom: '15%'
            },
            unlimited: true
        },
        contextmenu: [
            {
                text: 'custom contextmenu',
                link: 'https://github.com/MoePlayer/DPlayer'
            }
        ]
    });

    //dp3
    window.dp3 = new DPlayer({
        element: document.getElementById('dplayer3'),
        video: {
            quality: [{
                name: 'HD',
                url: 'http://devtest.qiniudn.com/若能绽放光芒5.m3u8',
                type: 'hls'
            }, {
                name: 'SD',
                url: 'http://devtest.qiniudn.com/若能绽放光芒.mp4',
                type: 'normal'
            }],
            defaultQuality: 0,
            pic: 'http://devtest.qiniudn.com/若能绽放光芒.png'
        }
    });

    // dp4
    window.dp4 = new DPlayer({
        element: document.getElementById('dplayer4'),
        video: {
            url: 'http://devtest.qiniudn.com/若能绽放光芒5.m3u8',
            type: 'hls'
        }
    });

    // dp5
    window.dp5 = new DPlayer({
        element: document.getElementById('dplayer5'),
        video: {
            url: 'http://devtest.qiniudn.com/【微小微】玖月奇迹－踩踩踩.flv',
            type: 'flv'
        }
    });

    // dp6
    window.dp6 = new DPlayer({
        element: document.getElementById('dplayer6'),
        screenshot: false,
        video: {
            url: 'https://api.prprpr.me/dplayer/video/bilibili?aid=4045652',
        },
        danmaku: {
            id: '9E2E3368B56CDBB46',
            api: 'https://api.prprpr.me/dplayer/',
            addition: ['https://api.prprpr.me/dplayer/bilibili?aid=4045652']
        }
    });
}
initPlayers();

function clearPlayers () {
    for (var i = 0; i < 6; i++) {
        window['dp' + (i + 1)].pause();
        document.getElementById('dplayer' + (i + 1)).innerHTML = '';
    }
}