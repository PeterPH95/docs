module.exports = [//导航栏配置
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Algorithm', link: '/algorithm/' },
  { 
    text: 'Guide', 
    items: [
      { text: 'JavaScript',link: '/guide/JavaScript.md' },
      { text: 'CSS',link: '/guide/css.md' },
      { text: 'TypeScript', link: '/guide/TypeScript.md' },
      { text: 'Vue',link: '/guide/vue.md' },
      { text: 'Deploy',link: '/guide/deploy.md' },
    ]
  },
  {
    text: 'Tool',
    // ariaLabel: '指令',
    items: [
      {
        text: '指令',
        items: [
          { text: 'Git', link: '/tools/git.md' },
          { text: 'Npm', link: '/tools/npm.md' },
          { text: 'Plugin', link: '/tools/plug.md'},
          { text: 'RegExp', link: '/tools/regExp.md'},
        ]
      },
      // {
      //   text: '扩展', items: []
      // }
    ],
  },
  {
    text: 'Base',
    items: [
      {text: 'SQL', link: '/base/sql.md'}
    ]
  },
  {  text: 'More', link: '/news/' },
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