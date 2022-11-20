const headConf = require("./config/headConf")
const pluginsConf = require("./config/pluginsConf")
const navConf = require("./config/navConf")
const sidebarConf = require("./config/sidebarConf")

module.exports = {
  base: "/docs/",//部署到github.io上，将 / 修改为 /docs/
  title: '满船清梦压星河',
  description: 'Peter Pan 的个人练习站',
  head: headConf,
  plugins: pluginsConf,
  
  themeConfig: {
    lastUpdated: '更新时间', // 最后更新时间展示
    nav: navConf,
    displayAllHeaders: false,//显示所有页面的标题链接
    //sidebar: sidebarConf,// 与 home 中的 readme 互斥，需要注释 home: true 才生效
  }
}