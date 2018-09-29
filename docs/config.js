const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'DPlayer',
    repo: 'DIYgod/DPlayer',
    twitter: 'DIYgod',
    'edit-link': 'https://github.com/MoePlayer/DPlayer/tree/master/docs',
    nav: {
        default: [
            {
                title: 'Home', path: '/home'
            },
            {
                title: 'Ecosystem', path: '/ecosystem'
            },
            {
                title: 'Support DPlayer', path: '/support'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/zh-Hans/'
            },
            {
                title: '生态', path: '/zh-Hans/ecosystem'
            },
            {
                title: '支持 DPlayer', path: '/zh-Hans/support'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '46a8ba306e368972c1d75feb581fb430',
            indexName: 'dplayer',
            tags: ['english', 'zh-Hans'],
            url: 'http://dplayer.js.org'
        }),
        evanyou(),
        player()
    ]
});

function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            dplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['dp' + (i + 1)]) {
            window['dp' + (i + 1)].destroy();
        }
    }
}

function dplayer1 () {
    window.dp1 = new DPlayer({
        container: document.getElementById('dplayer1'),
        video: {
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            pic: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.png',
            thumbnails: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara_thumbnails.jpg'
        },
        danmaku: {
            id: '9E2E3368B56CDBB4',
            api: 'https://api.prprpr.me/dplayer/'
        }
    });
}

function dplayer2 () {
    window.dp2 = new DPlayer({
        container: document.getElementById('dplayer2'),
        screenshot: true,
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
}

function dplayer3 () {
    window.dp3 = new DPlayer({
        container: document.getElementById('dplayer3'),
        autoplay: false,
        theme: '#FADFA3',
        loop: true,
        lang: 'zh-cn',
        screenshot: true,
        hotkey: true,
        preload: 'auto',
        logo: 'https://moeplayer.b0.upaiyun.com/dplayer/DPlayer.png',
        volume: 0.7,
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
            maximum: 1000,
            addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
            user: 'DIYgod',
            bottom: '15%',
            unlimited: true
        },
        contextmenu: [
            {
                text: 'custom1',
                link: 'https://github.com/DIYgod/DPlayer'
            },
            {
                text: 'custom2',
                click: (player) => {
                    console.log(player);
                }
            }
        ],
        highlight: [
            {
                time: 20,
                text: '这是第 20 秒'
            },
            {
                time: 120,
                text: '这是 2 分钟'
            }
        ]
    });
}

function dplayer4 () {
    window.dp4 = new DPlayer({
        container: document.getElementById('dplayer4'),
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
            pic: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.png',
            thumbnails: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara_thumbnails.jpg'
        }
    });
}

function dplayer5 () {
    window.dp5 = new DPlayer({
        container: document.getElementById('dplayer5'),
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hls/hikarunara.m3u8',
            type: 'hls'
        }
    });
}

function dplayer6 () {
    window.dp6 = new DPlayer({
        container: document.getElementById('dplayer6'),
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/dash/hikarunara.mpd',
            type: 'dash'
        }
    });
}

function dplayer7 () {
    window.dp7 = new DPlayer({
        container: document.getElementById('dplayer7'),
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.flv',
            type: 'flv'
        }
    });
}

function dplayer8 () {
    window.dp8 = new DPlayer({
        container: document.getElementById('dplayer8'),
        video: {
            url: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent',
            type: 'webtorrent'
        }
    });
}

function dplayer9 () {
    window.dp9 = new DPlayer({
        container: document.getElementById('dplayer9'),
        live: true,
        danmaku: true,
        apiBackend: {
            read: function (endpoint, callback) {
                console.log('Pretend to connect WebSocket');
                callback();
            },
            send: function (endpoint, danmakuData, callback) {
                console.log('Pretend to send danamku via WebSocket', danmakuData);
                callback();
            }
        },
        video: {
            url: 'https://moeplayer.b0.upaiyun.com/dplayer/hls/hikarunara.m3u8',
            type: 'hls'
        }
    });
}

function dplayer10 () {
    loadScript('https://cdn.jsdelivr.net/npm/pearplayer', function () {
        window.dp10 = new DPlayer({
            container: document.getElementById('dplayer10'),
            video: {
                url: 'https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4',
                type: 'pearplayer',
                customType: {
                    'pearplayer': function (video, player) {
                        new PearPlayer(video, {
                            src: video.src,
                            autoplay: player.options.autoplay
                        });
                    }
                }
            }
        });
    });
}

function loadScript (src, callback) {
    let s,
        r,
        t;
    r = false;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = s.onreadystatechange = function () {
    // console.log( this.readyState ); //uncomment this line to see which ready states are called.
        if (!r && (!this.readyState || this.readyState == 'complete'))
        {
            r = true;
            callback();
        }
    };
    t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
}