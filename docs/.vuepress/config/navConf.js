module.exports = [//导航栏配置
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Algorithm', link: '/algorithm/' },
  {
    text: 'Guide',
    items: [
      {
        text: '基础',
        items: [
          { text: 'JavaScript', link: '/guide/JavaScript.md' },
          { text: 'CSS', link: '/guide/css.md' },
          { text: 'TypeScript', link: '/guide/TypeScript.md' },
          { text: 'Vue', link: '/guide/vue.md' },
        ]
      },
      {
        text: '扩展',
        items: [
          { text: 'VuePress', link: '/guide/VuePress.md' },
          { text: 'Deploy', link: '/guide/deploy.md' },
          { text: 'Webpack', link: '/guide/webpackTS.md' },
        ]
      }
    ]
  },
  {
    text: 'Tool',
    // ariaLabel: '指令',
    items: [
      {
        text: '必备',
        items: [
          { text: 'Git', link: '/tools/git.md' },
          { text: 'Npm', link: '/tools/npm.md' },
          { text: 'RegExp', link: '/tools/regExp.md' }
        ]
      },
      // {
      //   text: '扩展', items: []
      // }
    ],
  },
  { text: 'More', link: '/news/' },
  // {// 一些小游戏
  //   text: '🐱‍💻Games',
  //   items: [
  //     {text: 'snake', link: '/games/snake.html'},
  //   ]
  // },
  // {//下拉列表式的导航栏
  //   text: 'Languages',
  //   ariaLabel: 'Language Menu',
  //   items: [
  //     { text: 'Chinese', link: '/language/chinese/' },
  //     { text: 'Japanese', link: '/language/japanese/' }
  //   ]
  // },
  { text: 'Github', link: 'https://github.com/PeterPH95/docs' },
]