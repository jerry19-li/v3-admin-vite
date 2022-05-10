## 引入 CSS 样式

- 内联定义，优先级最高`<p style="background-color: #999900">行内元素</p>`
- 定义内部样式块,在 head 模块内嵌,写在 body 中有可能会导致渲染时 css 还未加载
  ```html
  <style>
    p {
      color: green;
    }
  </style>
  ```
- 链入外部样式表文件
  - html 中导入：`<link rel="stylesheet" href="css文件路径" />`
  - css 中导入：
    ```html
    <style type="text/css">
      @import url("css文件路径");
    </style>
    ```
- 优先级：内联》内嵌》外部引入

## 选择器

- #id {} // id="id",id 选择器
- .class {} // class="class"，class 选择器
- p {} // p 元素
- p.class {} // p 元素并且 class="class"
- p#id {} // p 元素并且 id="id"
- .class, p {} // 逗号为多个选择器并用，class=“class”或 p 元素
- [title] [title=runoob] 属性选择器
- 优先级：id > class > 元素标签
- .class p {} // 空格为后代选择，class=“class”内的所有 p 元素
- div>p // 仅选择一级子元素，div 下的 p 元素
- div+p // 相邻兄弟选择器，div 同级跟随的一个 p 元素
- div~p // 后续兄弟选择器, div 同级之后的所有 p 元素

## 盒子模型

- 元素总大小 = content + padding + border + margin
- margin 外边距
  - margin: 40px 40px 40px 40px; 上右下左 （顺时针旋转）
  - margin: 40px 40px 40px; 上 左右 下 （顺时针旋转）
  - margin: 10% 10%; 上下 左右 （%-基于父元素长度的百分比）
  - margin: 40px; 上下左右
  - 单独指定：margin-left,margin-bottom,margin-right,margin-top
- border 边框
  - border-width 边框宽度
    - 5px
    - thin/medium/thick 细/中等(默认)/粗边框
  - border-style 边框样式，四个边可以每边都不相同，规则按顺时针旋转
    - none 无边框
    - hide 不显示边框，用于表时，解决边框冲突
    - solid 实线
    - dotted 点状边框
    - dashed 虚线
    - double 双实线
    - groove/ridge/inset/outset 3D 边框，需要与 border-color 配合使用
  - border-color 颜色，可按顺时针设置各边
  - border-radius 圆角，可按顺时针设置各角
    - border-top-left-radius/border-top-right-radius/border-bottom-right-radius/border-bottom-left-radius
  - 可仅设置单边：颜色，样式，宽度，如：border-bottom/border-left-color/border-right-width/border-top-style
  - 简写:border:5px solid red;
  - box-shadow:h-shadow v-shadow blur spread(阴影的大小) color inset; 阴影
  - border-image:source slice width outset repeat|initial|inherit; 边框图像
- outline 轮廓,只有宽度，样式，颜色三种属性，仅用于装饰边边框
  - outline-offset 偏移
  - outline-color/outline-style/outline-width
  - 简写：outline:#00FF00 dotted thick;
- padding 内边距,规则同上，也支持单边如：padding-left/right/top/bottom
- content 内容
  - width/height 宽高
  - max-height/min-width 最大最小宽高
  - display 可见性
    - none 隐藏元素，不占用空间
      - visibility:hidden 隐藏元素，但仍占用空间
    - inline 将元素修改为内联元素，不独占一行,可以与别的内联元素并排显示
      - 内联元素：a , abbr , acronym , b , bdo , big , br , cite , code , dfn , em , font , i , img , input , kbd , label , q , s , samp , select , small , span , strike , strong , sub , sup ,textarea , tt , u , var
    - block 将元素修改为块元素，即独占一行
      - 块元素： address , blockquote , center , dir , div , dl , fieldset , form , h1 , h2 , h3 , h4 , h5 , h6 , hr , isindex , menu , noframes , noscript , ol , p , pre , table , ul , li
    - inline-block 显示为内联块元素，表现为同行显示并可修改宽高内外边距等属性，我们常将所有<li>元素加上 display:inline-block 样式，原本垂直的列表就可以水平显示了。
- overflow 内容溢出元素框时的行为，overflow-y(顶底部)/overflow-x(左右)
  - visible 默认值。内容不会被修剪，会呈现在元素框之外。
  - hidden 内容会被修剪，并且其余内容是不可见的。
  - scroll 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
  - auto 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。

## 布局

- position
  - static 元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。不受 top，left,right,bottom 影响。
  - absolute 绝对定位，元素框从文档流完全删除，并相对于其包含块定位。包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。
  - relative 相对定位，元素框偏移某个距离。仍保持其未定位前的形状，它原本所占的空间仍保留。常被用于 absolute 的容器块,
  - sticky 粘性定位，基于滚动位置定位,页面滚动超出时，固定在目标位置类似于 fixed，否则类似于 relative
  - fixed 表现类似于 absolute，不过其包含块是视窗本身。
- left/right/top/bottom 左右上下偏移值
- clip:rect(0px,60px,200px,0px);
- z-index 调整显示顺序
- cursor 光标:url/crosshair/pointer/move/e-resize/ne-resize/nw-resize/n-resize/se-resize/sw-resize/s-resize/w-resize/text/wait/help
- float 浮动，意味着元素只能左右移动而不能上下移动。其它元素会环绕浮动元素
  - left/right/none 浮动于左侧/右侧
  - clear 指定元素周围不允许有浮动元素，参数：left/right/both/none
- 多列
  - column-count 指定元素应该被分割的列数。
  - column-fill 指定如何填充列
  - column-gap 指定列与列之间的间隙
  - column-rule 所有 column-rule-\* 属性的简写
  - column-rule-color 指定两列间边框的颜色
  - column-rule-style 指定两列间边框的样式
  - column-rule-width 指定两列间边框的厚度
  - column-span 指定元素要跨越多少列
  - column-width 指定列的宽度
  - columns column-width 与 column-count 的简写属性。
- 流式 display: flex/inline-flex;
  - flex-direction 方向，水平或垂直
    - row 水平从左到右 row-reverse
    - column 从上到下 column-reverse
  - justify-content 在主轴上的对齐，row 时则为水平对齐，column 时垂直对齐
    - flex-start：对齐到容器的起始侧。
    - flex-end：对齐到容器的末侧。
    - center：中心对齐。
    - space-between: 以相等的间距显示，第一个项目在起始侧，最后一个项目在最末侧。
    - space-around: 在它们周围以相等的间距显示项目
  - align-items 在侧轴上的对齐，俗称垂直对齐
    - flex-start: 与容器顶部对齐。
    - flex-end: 与容器底部对齐。
    - center：在容器的垂直中心对齐。
    - baseline：显示在容器的基线处。例如文字大小不一时，按文字底部对齐
    - stretch：物品被拉伸以适合容器高度。
  - flex-wrap 换行
    - nowrap - 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。
    - wrap - 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行
    - wrap-reverse -反转 wrap 排列。
  - align-content 当有换行时，对多个行在侧轴的对齐方式
    - 参数：flex-start | flex-end | center | space-between | space-around | stretch
  - 子元素属性
    - flex 设置元素长度
      - flex-grow 扩展系数
      - flex-shrink 收缩系数
      - flex-basis 元素长度，auto/inherit/%/length
      - auto 1 1 auto
      - none 0 0 auto
      - 简写:flex flex-grow flex-shrink flex-basis|auto|initial|inherit;
    - order 排序，数值小在前，可以为负值
    - margin auto 自动居中
    - align-self 设置单个元素在侧轴上的对齐
      - 参数:auto | flex-start | flex-end | center | baseline | stretch
- 表格 display: grid/inline-grid;

  - grid-template-columns/grid-template-rows 定义行列数量，宽度
    - length/%/auto/fr(1 等份)/minmax(min,max)
      - grid-template-columns: minmax(200px, 3fr) 9fr; 侧边栏占屏屏幕 1/4，不小于 200px
      - grid-template-columns: minmax(auto, 50%) 9fr; 侧边栏最大不超过一半
    - repeat(数量,每列宽度)
      - repeat(4, 100px); 4 列,每列 100px
      - repeat(4, 1fr); 4 个相同宽度的列
  - grid-gap/grid-column-gap/grid-row-gap 间距
  - grid-template-areas 定义块名称,使用点号设置空白单元格
  - justify-content 水平对齐容器内的网格，网格的总宽度必须小于容器的宽度
  - align-content 垂直对齐容器内的网格
  - 子元素
    - grid-column/grid-column-start/grid-column-end 跨列
      - grid-column: 2 / 4; 第 2 列到第 4 列
      - grid-column: 2 / span 2; 第 2 列起跨 2 列
    - grid-row/grid-row-start/grid-row-end 跨行
    - grid-area:
      - 块名称，如：footer
      - 起始行/起始列/结束行/结束列，如：grid-area: 1 / 2 / 5 / 6;
      - 起始行/起始列/span 跨行数/span 跨列数，如：grid-area: 2 / 1 / span 2 / span 3;

  ```css
  使用grid-area，点号为空白单元： .container {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 300px 300px;
    grid-template-areas:
      ". header header ."
      "sidebar . main main"
      ". footer footer .";
  }
  .heder {
    grid-area: header;
  }
  ```

## 变换

- transform
  - transform-origin: x-axis y-axis z-axis; 用于修改中心点，必须写在 transform 之后
  - scale(x,y)/scaleX(n)/scaleY(n) 缩放
  - scale3d(x,y,z)/scaleZ(z) 3D 缩放
  - translate(x,y)/translateX(n)/translateY(n) 移动
  - translate3d(x,y,z)/translateZ(z) 3Dt 移动
  - rotate(angle) 旋转
  - rotate3d(x,y,z,angle)/rotateZ(angle) 3D 旋转
  - skew(x-angle,y-angle)/skewX(angle)/skewY(angle) 倾斜
- transition 过渡效果
  - transition-property 属性名,多个时用逗号分隔
    - all/none
    - 具体属性名，如:width/height
  - transition-duration 时长，5s
  - transition-delay 延时
  - transition-timing-function 时间曲线
    - linear/ease 慢快慢/ease-in 慢速开始/ease-out 慢速结束/ease-in-out 慢快慢
  - 简写 transition: width 2s, height 2s, transform 2s;
- 动画
  - @keyframes 定义动画内容
    ```css
    @keyframes myfirstani {
      0% {
        background: red;
        left: 0px;
        top: 0px;
      }
      25% {
        background: yellow;
        left: 200px;
        top: 0px;
      }
      50% {
        background: blue;
        left: 200px;
        top: 200px;
      }
      75% {
        background: green;
        left: 0px;
        top: 200px;
      }
      100% {
        background: red;
        left: 0px;
        top: 0px;
      }
    }
    ```
  - animation-name 规定 @keyframes 动画的名称
  - animation-duration 规定动画完成一个周期所花费的秒或毫秒。默认是 0
  - animation-timing-function 规定动画的速度曲线。默认是 "ease"
  - animation-fill-mode 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
  - animation-delay 规定动画何时开始。默认是 0
  - animation-iteration-count 规定动画被播放的次数。默认是 1
  - animation-direction 规定动画是否在下一周期逆向地播放。默认是 "normal"
  - animation-play-state 规定动画是否正在运行或暂停。默认是 "running"
  - 简写: animation

## 背景

- 背景图片 background-image
  - url('文件')
  - linear-gradient() 创建一个线性渐变的 "图像"
    - (blue, red); 从上到下，蓝色渐变到红色
    - (45deg, blue, red); 渐变轴为 45 度，从蓝色渐变到红色
    - (to left top, blue, red); 从右下到左上、从蓝色渐变到红色
    - (0deg, blue, green 40%, red); 从下到上，从蓝色开始渐变、到高度 40%位置是绿色渐变开始、最后以红色结束
  - radial-gradient(red, green, blue) 用径向渐变创建 "图像"。 (center to edges)
  - repeating-linear-gradient(red, yellow 10%, green 20%) 创建重复的线性渐变 "图像"。
  - repeating-radial-gradient(red, yellow 10%, green 15%) 创建重复的径向渐变 "图像"
- 背景大小 background-size:
  - cover,保持图片的宽高比后的缩放，多余边缘图像被裁剪
  - contain，缩放背景图片以完全装入背景区，空余背景区显示背景色
  - x y，指定值，省略为 auto(按比例缩放)
- 背景位置 background-position:
  - bottom/left/top/right/center 组合，不填为 center,如：left top
  - %x %y
  - xpos ypos
- 背景重复 background-repeat:repeat-x/repeat-y/no-repeat/repeat(默认)
- 起始定位 background-origin:padding-box/border-box/content-box
- 图像的绘画区域 background-clip:padding-box/border-box/content-box
- 背景滚动 background-attachment:
  - fixed(不滚动)
  - scroll(跟随页面滚动,默认)
  - local(跟随元素滚动)
- 综合写法 background 组合以上参数
  - .tagName{background:#ffffff url(“aa.jpg”) no-repeat right left;}
- 多个背景时逗号分隔，对应参数也一样，如下例：
  ```css
  background-image: url(img_flwr.gif), url(paper.gif);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
  ```
- 颜色 background-color
  - 透明 background-color: rgba(0, 0, 0, 0.002);

## 文本格式

- color
  - 名称：red/blue/brown,不区分大小写
  - #rgb，6 位或者 3 位十六进制数，如：#f03，#FF0033
  - rgb(r,g,b)-rgba(r,g,b,a) a 为 0.0（透明）~1.0（不透明） rgb 颜色值为：0-255 整数或百分比
  - hsl(h,s,l),hsla(h,s,l,a) hue 色相,saturation 饱和度,lightness 明度，数值为：0-255 整数或百分比
- line-height：数字/百分比(基于正常值缩放)
- letter-spacing 字符间距
- word-spacing 设置单词间距，
- direction 方向：ltr（从左到右，默认）/ rtl(从右到左)
- text-align 文本的水平对齐方式,left(默认)/center/right/justify(两端对齐)
- vertical-align 垂直对齐
  - sub/supper 下标/上标
  - top/text-top 行中最高元素顶端对齐/父元素字体的顶端对齐
  - middle 中部
  - bottom/text-bottom 底端/父元素字体的底端对齐
  - length 绝对值
  - % 使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。
- text-decoration 文本的修饰，下划线、上划线、删除线等
  - underline 下划线。
  - overline 上划线。
  - line-through 删除线。
  - blink 闪烁的文本。浏览器可能不支持
- white-space 空白处理
  - normal 默认，空白会被浏览器忽略。
  - pre 空白会被浏览器保留。其行为方式类似 HTML 中的 pre 标签。
  - nowrap 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
  - pre-wrap 保留空白符序列，但是正常地进行换行。
  - pre-line 合并空白符序列，但是保留换行符。
- text-indent:50px 首行缩进 50 像素
- text-shadow h-shadow v-shadow blur color; 文字阴影，当 hv-shadow 为 0，且有 blur 和 color 时显示为外发光
  - h-shadow/v-shadow 水平/垂直阴影的位置。允许负值。
  - blur 模糊的距离。（可选）
  - color 阴影的颜色（可选）
- text-transform 大小写：
  - capitalize 文本中的每个单词以大写字母开头。
  - uppercase 定义仅有大写字母。
  - lowercase 定义无大写字母，仅有小写字母。
- unicode-bidi 与 direction 属性一起使用，来设置或返回文本是否被重写，以便在同一文档中支持多种语言。
  - bidi-override 与 direction 属性一起使用，重新排序取决于 direction 属性。
    ```css 文本从右向左显示,需要两款个属性配合使用direction，unicode-bidi
    direction: rtl;
    unicode-bidi: bidi-override;
    ```
- 字体
  - font-family 字体名称，逗号分隔多个字体，按从左到右次序寻找本地可用字体
  - font-size
    - xx-small/x-small/small/medium(默认)/large/x-large/xx-large
    - smaller/larger 比父元素更小或更大
    - length/%
  - font-style 斜体
    - normal 默认值。标准的字体样式。
    - italic/oblique 斜体。
  - font-weight 粗细
    - lighter(细)/normal(默认)/bold(粗)/bolder(更粗)
    - 100/200/300/400(normal)/500/600/700(bold)/800/900
  - font-variant normal/small-caps（小写字母显示为大写的小号字）
  - 简写：font italic bold 150%
- 链接的四种状态,注：必须按以下顺序定义
  - a:link {color:#FF0000;} /_ 未被访问的链接 _/
  - a:visited {color:#00FF00; text-decoration:none} /_ 已被访问的链接 _/
  - a:hover {color:#FF00FF;} /_ 鼠标指针移动到链接上 _/
  - a:active {color:#0000FF;} /_ 正在被点击的链接 _/
  - @font-face 自定义字体
  ```css
  @font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
  }
  ```

## 列表：无序列表 ul，有序列表 ol 列表项 li

- list-style-type 定义列表头显示方式
  - disc(实心圆)/circle(空心圆)/square(实心方块)
  - decimal(数字)/decimal-leading-zero 0 开头的数字标记(01, 02, 03)
  - lower-roman 小写罗马数字(i, ii, iii）/ upper-roman 大写罗马数字(I, II, III）
  - lower-alpha/upper-alpha 英文字母（来自于拉丁字母） lower-latin/upper-latin 拉丁字母
  - lower-greek 小写希腊字母(alpha, beta, gamma）,注：无大写
  - cjk-ideographic 汉字（一，二，三）
- list-style-position
  - inside 列表标记在文本以内，标记对齐
  - outside 默认值，列表标记在文本左侧以外，环绕文本不根据标记对齐
- list-style-image:url('sqpurple.gif'); 加载列表图像，需要 list-style-type 防止图像不可用
- 简写：list-style:square url("sqpurple.gif");

## 表格:table，tr 行,th 表头,td 单元,caption 标题,thead 页眉/tbody 主体/tfoot 页脚，colgroup 列组/col 列

- border-collapse:collapse; 画表格线时，将边框折叠成一个单一的边框
- :nth-child(odd)/:nth-child(even) 奇偶选择器

## 单位

### 相对长度

- em   
  相对于应用在当前元素的字体尺寸，所以它也是相对长度单位。一般浏览器字体大小默认为 16px，则 2em == 32px；
- ex   
  依赖于英文字母小 x 的高度
- ch 数字 0 的宽度
- rem rem 是根 em（root em）的缩写，rem 作用于非根元素时，相对于根元素字体大小；rem 作用于根元素字体大小时，相对于其出初始字体大小。
- vw viewpoint width，视窗宽度，1vw=视窗宽度的 1%
- vh viewpoint height，视窗高度，1vh=视窗高度的 1%
- vmin vw 和 vh 中较小的那个。
- vmax vw 和 vh 中较大的那个。

### 绝对长度

- cm 厘米
- mm 毫米
- in 英寸 (1in = 96px = 2.54cm)
- px 像素 (1px = 1/96th of 1in)
- pt point，大约 1/72 英寸； (1pt = 1/72in)
- pc pica，大约 12pt，1/6 英寸； (1pc = 12 pt)
