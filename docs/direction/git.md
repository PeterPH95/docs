---
title: Git学习
sidebar: auto
---

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
