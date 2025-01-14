# 目录

- [分隔线](#分隔线)
- [段落](#段落)
- [文字内容](#文字内容)
- [加粗和倾斜](#加粗和倾斜)
- [列表](#列表)
- [链接](#链接)
- [图片](#图片)
- [表格](#表格)

# 一级标题

## 二级标题，#开头空格标题文字

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

另一种标题格式,使用整行的符号:=-  
一级标题文字
========
二级标题文字

---

正文内容

## 分隔线

---

---

---

使用符号[*-_]`注意是单行三个字母，不能有其它文字`

## 段落

有两种方式：

---

1. 文字末尾两个以上的空格加回车
2. 一个空行

两个空格  
加回车

一个

空行

---

## 文字内容

正文直接输入就可以了  
~~删除线~~  
<u>下划线</u>

## 加粗和倾斜

**加粗**
_倾斜_
**_加粗加斜_**
**加粗**
_倾斜_

# 列表

## 有序列表,使用数字句点空格,可以缩进空置多级列表

1. 123
2. 456
   1. 123
   2. 456

## 无序列表使用:\*+-后加空格

输入-.然后空格

- 123
- 456
  - 123
  - 456
    - 123
    - 456
      1. 也可以混用
      2. 第二项

`列表嵌套只需在子列表前添加四个空格`

## 区块

使用>空格

> 区块第一行  
> 区块第二行

### 区块嵌套,多个>叠加

> 最外层区块

    1. 列表一
    2. 列表二

> > 第一层
> >
> > > 第二层
> > >
> > > > 第三层第一行  
> > > > 第三层第二行

1. 列表
   > 内嵌区块

## 代码块

1. 使用```(键盘左上角)

```C# (C#为代码块语言，可选，用于高亮语言提示)
show in interface brief
class Test {
    public string name;
    public int id;
}
```

2. 正文中的代码(键盘左上角) `show in interface brief`

## 链接

1. [百度](https://www.baidu.com)
2. 直接使用链接地址：<https://www.baidu.com>
3. <a href="https://gitee.com/571183806" target="_blank">**百度**</a>链接演示地址

## 图片

1. ![图片替代文字](https://static.runoob.com/images/runoob-logo.png) `链接[文字](链接)图片的区别在于最前增加了感叹号!`
2. <img src="https://static.runoob.com/images/runoob-logo.png" width=200px>使用像素调整图片宽度
3. <img src="https://static.runoob.com/images/runoob-logo.png" width=20%>使用百分比调整图片宽度

# 表格

| 左对齐         |         右对齐 |    居中对齐    | 默认是使用左对齐 |
| :------------- | -------------: | :------------: | ---------------- |
| 很长很长的文字 | 很长很长的文字 | 很长很长的文字 | 很长的文字       |
| 很长很长的文字 | 很长很长的文字 | 很长很长的文字 | 很长的文字       |
