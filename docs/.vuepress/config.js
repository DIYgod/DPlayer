module.exports = {
    plugins: {
        '@vuepress/back-to-top': true,
        umami: {
            trackerUrl: 'https://umami.diygod.dev',
            siteId: 'f3b469a2-8054-4bbb-8873-4035761aa4e3',
        },
    },
    locales: {
        '/zh/': {
            lang: 'zh-CN',
            title: 'DPlayer',
            description: '🍭 Wow, such a lovely HTML5 danmaku video player',
        },
        '/': {
            lang: 'en-US',
            title: 'DPlayer',
            description: '🍭 Wow, such a lovely HTML5 danmaku video player',
        },
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js' }],
    ],
    theme: 'vuepress-theme-dplayer',
    themeConfig: {
        repo: 'MoePlayer/DPlayer',
        editLinks: true,
        docsDir: '.',
        locales: {
            '/zh/': {
                lang: 'zh-CN',
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    {
                        text: '指南',
                        link: '/zh/guide/',
                    },
                    {
                        text: '生态',
                        link: '/zh/ecosystem/',
                    },
                    {
                        text: '支持 DPlayer',
                        link: '/zh/support/',
                    },
                ],
            },
            '/': {
                lang: 'en-US',
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {
                        text: 'Guide',
                        link: '/guide/',
                    },
                    {
                        text: 'Ecosystem',
                        link: '/ecosystem/',
                    },
                    {
                        text: 'Support DPlayer',
                        link: '/support/',
                    },
                ],
            },
        },
    },
};
