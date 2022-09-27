# Hello VuePress
> 基于Vuepress搭建个人站点

## Project setup
```
# 下载本地
git clone https://github.com/PeterPH95/docs.git
cd /docs

# 安装依赖
yarn

# 本地启动项目
yarn docs:dev

# 打包构建
yarn docs:build

# 部署到 github.io
yarn deploy
```

## 目录结构 [VuePress官方](https://www.vuepress.cn/guide/directory-structure.html)
```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue               // 主题布局，可自定义
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)             // 配置文件
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md                         // 首页
│   ├── guide
│   │   └── README.md                     // 自己的markdone文件
│   └── config.md
│
├── deploy.sh                             // 部署到github.io的脚本文件
└── package.json
```
