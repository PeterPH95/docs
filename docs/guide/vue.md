---
title: Vue学习
sidebar: auto
---

## Vue

## @click.native.prevent
> 给vue组件绑定事件时候，必须加上native ，不然不会生效（监听根元素的原生事件，使用 .native 修饰符）(element-ui(el-button)组件中碰到)


### vue2 中设置别名 `@` 的方式
```js{6}
// src/build/webpack.base.conf.js 中进行配置
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
```