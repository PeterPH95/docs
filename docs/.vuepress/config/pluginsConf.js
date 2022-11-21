const moment = require('moment')//修改时间格式
const secret = require("./secret")

module.exports = [
  [// 点击图片显示大图 https://vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html#%E4%BD%BF%E7%94%A8
    '@vuepress/medium-zoom'
  ],
  [// 时间格式化插件
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        moment.locale("zh-cn")
        // moment.locale(lang) //默认英文
        return moment().format('LLLL'); // 2022年9月19日星期一晚上10点24分
      }
    }
  ],
  [//一个优秀的插件 pwa
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: "有新东西！",
        buttonText: "刷新"
      }
    }
  ],
  [//back-to-top
    '@vuepress/back-to-top'
  ],
  [// 页面滚动时自动激活侧边栏链接的插件 
    '@vuepress/active-header-links',
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }
  ],
  [//添加评论插件 vssue
    '@vssue/vuepress-plugin-vssue',
    {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'PeterPH95',
      repo: 'docs',
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
      autoCreateIssue: true
    }
  ],
  [// 看板娘插件
    'vuepress-plugin-helper-live2d', {
      // 是否开启控制台日志打印(default: false)
      log: false,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'hibiki',
        display: {
          position: "right", // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 900, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    }
  ]
]