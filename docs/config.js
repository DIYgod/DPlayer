docute.init({
  title: 'DPlayer docs',
  repo: 'DIYgod/DPlayer',
  'edit-link': 'https://github.com/DIYgod/DPlayer/blob/gh-pages/docs',
  icons: [
    {
      label: '关注我的微博',
      svgId: 'i-weibo',
      svgClass: 'weibo-icon',
      link: 'http://weibo.com/anotherhome'
    }
  ],
  plugins: [
    disqus({
      shortname: 'dplayer'
    })
  ]
})