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
    url: 'https://data.jsdelivr.com/v1/package/npm/dplayer',
    type: 'get',
    dataType: 'json',
    success(data) {
        if (data) {
            var html = '';
            for (var i = 0; i < data.versions.length; i++) {
                html += '<option value="' + data.versions[i] + '">v' + data.versions[i] + '</option>';
            }
            $('.version-select').html(html);

            var version = data.versions[0];
            $('.dplayer-css').attr('href', 'https://cdn.jsdelivr.net/npm/dplayer@' + version + '/dist//DPlayer.min.css');

            $.ajax({
                url: 'https://cdn.jsdelivr.net/npm/dplayer@' + version + '/dist/DPlayer.min.js',
                cache: true,
                type: 'get',
                dataType: 'script',
                success() {
                    initPlayers();
                },
            });
        }
    },
    error(e) {
        console.error(e);
    },
});

$('.version-select').change(function () {
    var version = $('.version-select').val();
    
    $('.dplayer-css').attr('href', 'https://cdn.jsdelivr.net/npm/dplayer@' + version + '/dist//DPlayer.min.css');

    $.ajax({
        url: 'https://cdn.jsdelivr.net/npm/dplayer@' + version + '/dist/DPlayer.min.js',
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
        container: document.getElementById('dplayer1'),
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
        container: document.getElementById('dplayer2'),
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

    var events = [
        'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error',
        'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play',
        'playing', 'ratechange', 'seeked', 'seeking', 'stalled',
        'volumechange', 'waiting',
        'screenshot',
        'thumbnails_show', 'thumbnails_hide',
        'danmaku_show', 'danmaku_hide', 'danmaku_clear',
        'danmaku_loaded', 'danmaku_send', 'danmaku_opacity',
        'contextmenu_show', 'contextmenu_hide',
        'notice_show', 'notice_hide',
        'quality_start', 'quality_end',
        'destroy',
        'resize',
        'fullscreen', 'fullscreen_cancel', 'webfullscreen', 'webfullscreen_cancel'
    ];
    var eventsEle = document.getElementById('events');
    for (let i = 0; i < events.length; i++) {
        dp2.on(events[i], (info) => {
            eventsEle.innerHTML += '<p>Event: ' + events[i] +  '</p>';
            eventsEle.scrollTop = eventsEle.scrollHeight;
        })
    }

    //dp3
    window.dp3 = new DPlayer({
        container: document.getElementById('dplayer3'),
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
        container: document.getElementById('dplayer4'),
        video: {
            url: 'http://devtest.qiniudn.com/若能绽放光芒5.m3u8',
            type: 'hls'
        }
    });

    // dp5
    window.dp5 = new DPlayer({
        container: document.getElementById('dplayer5'),
        video: {
            url: 'http://devtest.qiniudn.com/【微小微】玖月奇迹－踩踩踩.flv',
            type: 'flv'
        }
    });

    // dp6
    window.dp6 = new DPlayer({
        container: document.getElementById('dplayer6'),
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

function clearPlayers () {
    for (var i = 0; i < 6; i++) {
        window['dp' + (i + 1)].pause();
        document.getElementById('dplayer' + (i + 1)).innerHTML = '';
    }
}