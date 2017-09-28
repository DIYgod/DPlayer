// stats.js: JavaScript Performance Monitor
const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
function animate() {
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

function initPlayers() {
    // dp1
    window.dp1 = new DPlayer({
        container: document.getElementById('dplayer1'),
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.mp4',
            pic: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.png',
            thumbnails: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara_thumbnails.jpg'
        },
        subtitle: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.vtt'
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
        logo: 'https://moeplayer.b0.upaiyun.com/dplayer/DPlayer.png',
        volume: 0.2,
        mutex: true,
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.mp4',
            pic: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.png',
            thumbnails: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara_thumbnails.jpg',
            type: 'auto'
        },
        subtitle: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.vtt',
            type: 'webvtt',
            fontSize: '25px',
            bottom: '10%',
            color: '#b7daff'
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
        'fullscreen', 'fullscreen_cancel', 'webfullscreen', 'webfullscreen_cancel',
        'subtitle_show', 'subtitle_hide', 'subtitle_change'
    ];
    var eventsEle = document.getElementById('events');
    for (let i = 0; i < events.length; i++) {
        dp2.on(events[i], (info) => {
            eventsEle.innerHTML += '<p>Event: ' + events[i] + '</p>';
            eventsEle.scrollTop = eventsEle.scrollHeight;
        })
    }

    //dp3
    window.dp3 = new DPlayer({
        container: document.getElementById('dplayer3'),
        video: {
            quality: [{
                name: 'HD',
                url: 'https://moeplayer.b0.upaiyun.com/dplayer/hls/hikarunara.m3u8',
                type: 'hls'
            }, {
                name: 'SD',
                url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.mp4',
                type: 'normal'
            }],
            defaultQuality: 0,
            pic: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.png'
        }
    });

    // dp4
    window.dp4 = new DPlayer({
        container: document.getElementById('dplayer4'),
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hls/hikarunara.m3u8',
            type: 'hls'
        }
    });

    // dp5
    window.dp5 = new DPlayer({
        container: document.getElementById('dplayer5'),
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.flv',
            type: 'flv'
        }
    });

    // dp6
    window.dp6 = new DPlayer({
        container: document.getElementById('dplayer6'),
        screenshot: false,
        video: {
            url: 'https://api.prprpr.me/dplayer/video/bilibili?aid=1714157',
        },
        danmaku: {
            id: '9E2E3368B56CDBB46',
            api: 'https://api.prprpr.me/dplayer/',
            addition: ['https://api.prprpr.me/dplayer/bilibili?aid=1714157']
        }
    });

    window.dp7 = new DPlayer({
        container: document.getElementById('dplayer7'),
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.mp4'
        },
        icons: {
            setting: [
                '0 0 24 24',
                'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z',
                '24'
            ]
        },
        iconsColor: 'orange'
    });

    window.dp8 = new DPlayer({
        container: document.getElementById('dplayer8'),
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/dash/hikarunara.mpd',
            type: 'dash'
        }
    });
}

function clearPlayers() {
    for (var i = 0; i < 6; i++) {
        window['dp' + (i + 1)].pause();
        document.getElementById('dplayer' + (i + 1)).innerHTML = '';
    }
}