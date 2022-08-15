import { defaultTheme } from 'vuepress';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { defineUserConfig } from '@vuepress/cli';
import path from 'path';

export default defineUserConfig({
    title: 'DPlayer',
    description: '🍭 Wow, such a lovely HTML5 danmaku video player',
    plugins: [
        googleAnalyticsPlugin({
            id: 'G-QEBJJDX922',
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],

    locales: {
        '/zh/': {
            lang: 'zh-CN',
        },
        '/': {
            lang: 'en-US',
        },
    },

    theme: defaultTheme({
        repo: 'DIYgod/DPlayer',
        docsDir: 'docs',
        logo: '/logo.png',

        locales: {
            '/zh/': {
                selectLanguageName: '简体中文',
                navbar: [
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
                selectLanguageName: 'English',
                navbar: [
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
    }),
    
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js' }],
    ],
});