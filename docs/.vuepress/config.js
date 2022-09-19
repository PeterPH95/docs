const moment = require('moment');//修改时间格式

module.exports = {
  base: "/docs/",//部署到github.io上，将 / 修改为 /docs/
  title: '满船清梦压星河',
  description: 'Peter Pan 的个人练习站',
  head: [//设置SEO优化
    ['meta', { name : "author", content: "满船清梦压星河"}],
    ['meta', { name : "keywords", content: "vuepress练习，个人博客部署，满船清梦压星河"}],
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],
  plugins: [
    [//时间格式化插件
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale("zh-cn")
          // moment.locale(lang) //默认英文
          return moment().format('LLLL'); // 2022年9月19日星期一晚上10点24分
        }
      }
    ]
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