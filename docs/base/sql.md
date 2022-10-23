---
title: 数据库基础操作
sibar: auto
---


## 数据库指令学习

### 数据库指令优先级


### `SELECT`
- `distinct`去重, `as`改名
```sql
-- 去重
select distinct university from user_profile
select university from user_profile group by university
-- 改名
select university as college
```


### `WHERE`
- `like`,`=`,`in`的用法
```sql
-- 包含,相等,相似
where university in ('a','b')
where university = 'a'
where university like 'a%'/* 已 a 开始*/

-- 不包含 
where university not in ('a','b')
where university != 'a'
where university not like 'a%'
```


### `LIMIT`
- LIMIT 子句可以被用于强制 SELECT 语句返回指定的记录数。
  - LIMIT 接受一个或两个数字参数。参数必须是一个整数常量。
  - 如果只给定一个参数，它表示返回最大的记录行数目。
  - 如果给定两个参数，第一个参数指定第一个返回记录行的偏移量，第二个参数指定返回记录行的最大数目。
  - 为了检索从某一个偏移量到记录集的结束所有的记录行，可以指定第二个参数为 -1。

```sql
-- 记录行6-10
SELECT * FROM table LIMIT 5,5
-- 记录行11-last
SELECT * FROM table LIMIT 10,-1
-- 记录前五个
SELECT * FROM table LIMIT 5
```