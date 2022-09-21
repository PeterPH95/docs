module.exports = [//导航栏配置
{ text: 'Home', link: '/' },
{ text: 'About', link: '/about' },
{ text: 'Guide', link: '/guide/' },
{ text: 'Git', link: '/git/'},
{//下拉列表式的导航栏
  text: 'Languages',
  ariaLabel: 'Language Menu',
  items: [
    { text: 'Chinese', link: '/language/chinese/' },
    { text: 'Japanese', link: '/language/japanese/' }
  ]
},
{ text: 'Github', link: 'https://github.com/PeterPH95/docs' },
]