---
sidebar: auto
---

## 关于我
> 前端小菜鸟啦

### 侧边栏练习
> 侧边栏需要在md文件开头设置
```js
---
sidebar: auto
---
```
### github 检测修改
> 我来监测github跟踪，显示当前修改时间，通过以下代码查看和提交
```git
git status //查看文件跟踪情况
git commit -m"feat: about" //提交修改
git config -l //查看配置项
```

### 远程`git clone`仓库
```js
git clone ---
cd /docs
/* 在cmd环境中安装依赖 */
yarn

/* 公司电脑 yarn deploy 时出错, 修改了一下配置 */
git config --global http.sslVerify "false"
```

### 这是评论组件 Vssue 的展示
<Vssue :options="{ locale: 'zh' }"/>

### 侧边栏练习

