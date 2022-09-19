module.exports = {
  title: '满船清梦压星河',
  description: 'Peter Pan 的个人练习站',
  head: [//设置SEO优化
    ['meta', { name : "author", content: "满船清梦压星河"}],
    ['meta', { name : "keywords", content: "vuepress练习，个人博客部署，满船清梦压星河"}],
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],
  themeConfig: {
    lastUpdated: '更新时间', // 最后更新时间展示
    nav: [//导航栏配置
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Guide', link: '/guide/' },
      {//下拉列表式的导航栏
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    displayAllHeaders: true,//显示所有页面的标题链接
    sidebar: [//侧边栏设置
      'about',
      ['/guide/', 'guide内容'],
      '/'
    ]
  }
}