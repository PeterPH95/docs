const moment = require('moment');//修改时间格式

module.exports = [
  [//时间格式化插件
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
  [//添加评论插件 vssue
    '@vssue/vuepress-plugin-vssue',
    {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'PeterPH95',
      repo: 'docs',
      clientId: '860169a38687d876a4d3',
      clientSecret: '6a3535b4432e646a737017edb262c8387df002ba',
      autoCreateIssue: true
    }
  ],
  [//back-to-top
    '@vuepress/back-to-top'
  ],
]