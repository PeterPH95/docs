---
title: CSS
sidebar: auto
---

## CSS 


### CSS 元素百分比参照问题
- 参照父元素**宽度**的元素: padding(-top) margin(-top) width text-indent(高度可能被子元素撑开，出现一个无限循环)
- 参照父元素**高度**的元素: height
- 参照父元素属性: font-size line-height

特殊：相对定位的时候，top(bottom) left(right)参照的是父元素的内容区域的高度与宽度，而绝对定位的时候参照的是最近的定位元素包含padding的高度与宽度


### CSS 可继承属性
- 继承是指子节点默认使用父节点的样式属性。(作为样式继承的优先级为0,子元素自定义元素优先)
> 可以继承的属性很少，只有颜色`color`，文字`font`，字体间距行高对齐方式，和列表的样式可以继承。
> 所有元素可继承：visibility和cursor。</br>内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。</br>终端块状元素可继承：text-indent和text-align。</br>列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。


### 形成 BFC 的方式
- float的值不能为none(浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的)
- overflow的值不能为visible
- display的值为table-cell, table-caption, inline-block中的任何一个
- position的值不为relative和static