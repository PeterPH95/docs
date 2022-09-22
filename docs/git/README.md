---
title: 指令学习
sidebar: auto
---

## 找项目，扩展视野
> [Github trending](https://github.com/trending/)

> [HelloGitHub](https://github.com/521xueweihan/HelloGitHub)

> [阮一峰](https://github.com/ruanyf/weekly)

## Github 资源搜索技巧
- 找百科：awesome xxx(vue)
- 找例子：xxx(vue) sample
- 找空项目架子：xxx start / xxx boilerplate
- 找教程：xxx tutorial


## git 基础指令


### 远程`git clone`仓库
```js
git clone ---
cd /docs
/* 在cmd环境中使用yarn安装依赖 */
yarn

/* 公司电脑 yarn deploy 时出错, 修改了一下配置 */
git config --global http.sslVerify "false"
```

### `git`拉取更新
```git
git pull
```
### `git`检测修改
> 我来监测github跟踪，显示当前修改时间，通过以下代码查看和提交
```git
git status //查看文件跟踪情况
git commit -m"feat: about" //提交修改
git config -l //查看配置项
```

### `git`提交代码
```
git add .
git commit -m"信息说明"
git push
```

### `git` 查看账户，修改账户，多终端配置
> [参考](https://blog.csdn.net/helloasimo/article/details/123778112?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166374032816781432996870%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166374032816781432996870&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_click~default-1-123778112-null-null.142^v48^pc_rank_34_queryrelevant25,201^v3^control_1&utm_term=git%40github.com%3A%20Permission%20denied%20%28publickey%29.&spm=1018.2226.3001.4187)

```git
// 首先，确定自己的账户邮箱是否正确
git config --global --list
git config --global user.name 'PeterPH95'
git config --global user.email '1269894219@qq.com'

// 其次，在本地生成 SSH 密钥，一路回车
ssh-keygen -t rsa -C 1269894219@qq.com

//而后，在/c/Users/admin/.ssh/id_rsa.pub路径下生成一个.ssh\id_rsa.pub文件

//将id_rsa.pub中的密钥添加到github中

//最后，测试 SSH 设置是否成功
ssh -T git@github.com
```

## `npm` 和 `yarn` 指令对应
```js
npm install  => yarn install
npm install --save [package] => yarn add [package]
npm install --save-dev [package] => yarn add [package] --dev
npm install --global [package] => yarn global add [package]
npm uninstall --save [package] => yarn remove [package]
npm uninstall --save-dev [package] => yarn remove [package]
```

## `node` 版本控制 `nvm` 安装，解决 `sass` 与 `node` 版本冲突问题
> [参考](https://www.bilibili.com/read/cv16108420/)<br/>
> [nodejs版本下载](https://nodejs.org/download/release/)
```
nvm arch ：显示node是运行在32位还是64位。
nvm install <version> [arch] ：安装node， version是特定版本也可以是最新稳定版本latest。可选参数arch指定安装32位还是64位版本，默认是系统位数。可以添加--insecure绕过远程服务器的SSL。
nvm list [available] ：显示已安装的列表。可选参数available，显示可安装的所有版本。list可简化为ls。
nvm on ：开启node.js版本管理。
nvm off ：关闭node.js版本管理。
nvm proxy [url] ：设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。
nvm node_mirror [url] ：设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
nvm npm_mirror [url] ：设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
nvm uninstall <version> ：卸载指定版本node。
nvm use [version] [arch] ：使用制定版本node。可指定32/64位。需在 Windows PowerShell 下切换
nvm root [path] ：设置存储不同版本node的目录。如果未设置，默认使用当前目录。
nvm version ：显示nvm版本。version可简化为v。
```