## 基础文档

<html>
    <head>
        <title>Document name goes here</title>
    </head>
    <body>
        Visible text goes here
    </body>
</html>

## 整体结构

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <title>标题</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./style.css" />
    <script src="./script.js" defer></script>
  </head>
  <body></body>
</html>
```

## 标题

<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

## 文本元素

<p>This is a paragraph</p>
<br> (line break)
<hr> (horizontal rule)
<pre>This text is preformatted</pre>

## 逻辑样式

<em>This text is emphasized</em>  
<strong>This text is strong</strong>  
<code>This is some computer code</code>

## 物理样式

<b>This text is bold</b>  
<i>This text is italic</i>

## 链接锚图像

<a href="http://www.example.com/">This is a Link</a>  
<a href="http://www.example.com/"><img src="URL" alt="Alternate Text"></a>  
<a href="mailto:webmaster@example.com">Send e-mail</a>A named anchor:
<a name="tips">Useful Tips Section</a>
<a href="#tips">Jump to the Useful Tips Section</a>

## 无序列表

<ul>
<li>First item</li>
<li>Next item</li>
</ul>

## 有序列表

<ol>
<li>First item</li>
<li>Next item</li>
</ol>

## 定义列表

<dl>
    <dt>First term</dt>
        <dd>Definition</dd>
    <dt>Next term</dt>
        <dd>Definition</dd>
</dl>

## 表格

<table border="1">
<tr>
  <th>someheader</th>
  <th>someheader</th>
</tr>
<tr>
  <td>sometext</td>
  <td>sometext</td>
</tr>
</table>

## 框架

```
<frameset cols="25%,75%">
  <frame src="page1.htm">
  <frame src="page2.htm">
</frameset>
```

## 表单

<form action="http://www.example.com/test.asp" method="post/get">
    <input type="text" name="lastname" value="Nixon" size="30" maxlength="50">
    <input type="password">
    <input type="checkbox" checked="checked">
    <input type="radio" checked="checked">
    <input type="submit">
    <input type="reset">
    <input type="hidden">
    <select>
        <option>Apples
        <option selected>Bananas
        <option>Cherries
    </select>
    <textarea name="Comment" rows="2" cols="20"></textarea>
</form>

## 实体

&lt; is the same as <  
&gt; is the same as >  
&#169; is the same as ©

## 其他元素

<!-- This is a comment -->
<blockquote>
Text quoted from some source.
</blockquote>
<address>
    Address 1<br>
    Address 2<br>
    City<br>
</address>

## HTML 标签

<div>
<h2>按字母顺序排列 HTML 标签</h2>
<table class="dataintable">
<tbody><tr>
<th style="width:30%">标签</th>
<th style="width:70%">描述</th>
</tr>

<tr>
<td><a href="/tags/tag_comment.asp">&lt;!--...--&gt;</a></td>
<td>定义注释。</td>
</tr>

<tr>
<td><a href="/tags/tag_doctype.asp">&lt;!DOCTYPE&gt;</a>&nbsp;</td>
<td>定义文档类型。</td>
</tr>

<tr>
<td><a href="/tags/tag_a.asp">&lt;a&gt;</a></td>
<td>定义锚。</td>
</tr>

<tr>
<td><a href="/tags/tag_abbr.asp">&lt;abbr&gt;</a></td>
<td>定义缩写。</td>
</tr>

<tr>
<td><a href="/tags/tag_acronym.asp">&lt;acronym&gt;</a></td>
<td>定义只取首字母的缩写。<span class="deprecated">HTML5 中不支持。请使用 &lt;abbr&gt; 代替。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_address.asp">&lt;address&gt;</a></td>
<td>定义文档作者或拥有者的联系信息。</td>
</tr>

<tr>
<td><a href="/tags/tag_applet.asp">&lt;applet&gt;</a></td>
<td>定义嵌入的 applet。<span class="deprecated">HTML5 中不支持。请使用 &lt;embed&gt; 和 &lt;object&gt; 代替。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_area.asp">&lt;area&gt;</a></td>
<td>定义图像映射内部的区域。</td>
</tr>

<tr>
<td><a href="/tags/tag_article.asp">&lt;article&gt;</a></td>
<td>定义文章。</td>
</tr>

<tr>
<td><a href="/tags/tag_aside.asp">&lt;aside&gt;</a></td>
<td>定义页面内容之外的内容。</td>
</tr>

<tr>
<td><a href="/tags/tag_audio.asp">&lt;audio&gt;</a></td>
<td>定义声音内容。</td>
</tr>

<tr>
<td><a href="/tags/tag_font_style.asp">&lt;b&gt;</a></td>
<td>定义粗体字。</td>
</tr>

<tr>
<td><a href="/tags/tag_base.asp">&lt;base&gt;</a></td>
<td>定义页面中所有链接的默认地址或默认目标。</td>
</tr>

<tr>
<td><a href="/tags/tag_basefont.asp">&lt;basefont&gt;</a></td>
<td>定义页面中文本的默认字体、颜色或尺寸。<span class="deprecated">HTML5 中不支持。请使用 CSS 代替。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_bdi.asp">&lt;bdi&gt;</a></td>
<td>定义文本的文本方向，使其脱离其周围文本的方向设置。</td>
</tr>

<tr>
<td><a href="/tags/tag_bdo.asp">&lt;bdo&gt;</a></td>
<td>定义文字方向。</td>
</tr>

<tr>
<td><a href="/tags/tag_font_style.asp">&lt;big&gt;</a></td>
<td>定义大号文本。<span class="deprecated">HTML5 中不支持。请使用 CSS 代替。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_blockquote.asp">&lt;blockquote&gt;</a></td>
<td>定义长的引用。</td>
</tr>

<tr>
<td><a href="/tags/tag_body.asp">&lt;body&gt;</a></td>
<td>定义文档的主体。</td>
</tr>

<tr>
<td><a href="/tags/tag_br.asp">&lt;br&gt;</a></td>
<td>定义简单的折行。</td>
</tr>

<tr>
<td><a href="/tags/tag_button.asp">&lt;button&gt;</a></td>
<td>定义按钮 (push button)。</td>
</tr>

<tr>
<td><a href="/tags/tag_canvas.asp">&lt;canvas&gt;</a></td>
<td>定义图形。</td>
</tr>

<tr>
<td><a href="/tags/tag_caption.asp">&lt;caption&gt;</a></td>
<td>定义表格标题。</td>
</tr>

<tr>
<td><a href="/tags/tag_center.asp">&lt;center&gt;</a></td>
<td>定义居中文本。<span class="deprecated">HTML5 中不支持。请使用 CSS 代替。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_phrase_elements.asp">&lt;cite&gt;</a></td>
<td>定义引用(citation)。</td>
</tr>

<tr>
<td><a href="/tags/tag_phrase_elements.asp">&lt;code&gt;</a></td>
<td>定义计算机代码文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_col.asp">&lt;col&gt;</a></td>
<td>定义表格中一个或多个列的属性值。</td>
</tr>

<tr>
<td><a href="/tags/tag_colgroup.asp">&lt;colgroup&gt;</a></td>
<td>定义表格中供格式化的列组。</td>
</tr>

<tr>
<td><a href="/tags/tag_command.asp">&lt;command&gt;</a></td>
<td>定义命令按钮。</td>
</tr>

<tr>
<td><a href="/tags/tag_data.asp">&lt;data&gt;</a></td>
<td>添加给定内容的机器可读翻译。</td>
</tr>

<tr>
<td><a href="/tags/tag_datalist.asp">&lt;datalist&gt;</a></td>
<td>定义下拉列表。</td>
</tr>

<tr>
<td><a href="/tags/tag_dd.asp">&lt;dd&gt;</a></td>
<td>定义定义列表中项目的描述。</td>
</tr>

<tr>
<td><a href="/tags/tag_del.asp">&lt;del&gt;</a></td>
<td>定义被删除文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_details.asp">&lt;details&gt;</a></td>
<td>定义元素的细节。</td>
</tr>

<tr>
<td><a href="/tags/tag_dir.asp">&lt;dir&gt;</a></td>
<td>定义目录列表。<span class="deprecated">HTML5 中不支持。请使用 CSS 代替。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_div.asp">&lt;div&gt;</a></td>
<td>定义文档中的节。</td>
</tr>

<tr>
<td><a href="/tags/tag_phrase_elements.asp">&lt;dfn&gt;</a></td>
<td>定义定义项目。</td>
</tr>

<tr>
<td><a href="/tags/tag_dialog.asp">&lt;dialog&gt;</a></td>
<td>定义对话框或窗口。</td>
</tr>

<tr>
<td><a href="/tags/tag_dl.asp">&lt;dl&gt;</a></td>
<td>定义定义列表。</td>
</tr>

<tr>
<td><a href="/tags/tag_dt.asp">&lt;dt&gt;</a></td>
<td>定义定义列表中的项目。</td>
</tr>

<tr>
<td><a href="/tags/tag_phrase_elements.asp">&lt;em&gt;</a></td>
<td>定义强调文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_embed.asp">&lt;embed&gt;</a></td>
<td>定义外部交互内容或插件。</td>
</tr>

<tr>
<td><a href="/tags/tag_fieldset.asp">&lt;fieldset&gt;</a></td>
<td>定义围绕表单中元素的边框。</td>
</tr>

<tr>
<td><a href="/tags/tag_figcaption.asp">&lt;figcaption&gt;</a></td>
<td>定义 figure 元素的标题。</td>
</tr>

<tr>
<td><a href="/tags/tag_figure.asp">&lt;figure&gt;</a></td>
<td>定义媒介内容的分组，以及它们的标题。</td>
</tr>

<tr>
<td><a href="/tags/tag_font.asp">&lt;font&gt;</a></td>
<td>定义文字的字体、尺寸和颜色。<span class="deprecated">HTML5 中不支持。请使用 CSS 代替。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_footer.asp">&lt;footer&gt;</a></td>
<td>定义 section 或 page 的页脚。</td>
</tr>

<tr>
<td><a href="/tags/tag_form.asp">&lt;form&gt;</a></td>
<td>定义供用户输入的 HTML 表单。</td>
</tr>

<tr>
<td><a href="/tags/tag_frame.asp">&lt;frame&gt;</a></td>
<td>定义框架集的窗口或框架。<span class="deprecated">HTML5 中不支持。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_frameset.asp">&lt;frameset&gt;</a></td>
<td>定义框架集。<span class="deprecated">HTML5 中不支持。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_hn.asp">&lt;h1&gt; to &lt;h6&gt;</a></td>
<td>定义 HTML 标题。</td>
</tr>

<tr>
<td><a href="/tags/tag_head.asp">&lt;head&gt;</a></td>
<td>定义关于文档的信息。</td>
</tr>

<tr>
<td><a href="/tags/tag_header.asp">&lt;header&gt;</a></td>
<td>定义 section 或 page 的页眉。</td>
</tr>

<tr>
<td><a href="/tags/tag_hr.asp">&lt;hr&gt;</a></td>
<td>定义水平线。</td>
</tr>

<tr>
<td><a href="/tags/tag_html.asp">&lt;html&gt;</a></td>
<td>定义 HTML 文档。</td>
</tr>

<tr>
<td><a href="/tags/tag_font_style.asp">&lt;i&gt;</a></td>
<td>定义斜体字。</td>
</tr>

<tr>
<td><a href="/tags/tag_iframe.asp">&lt;iframe&gt;</a></td>
<td>定义内联框架。</td>
</tr>

<tr>
<td><a href="/tags/tag_img.asp">&lt;img&gt;</a></td>
<td>定义图像。</td>
</tr>

<tr>
<td><a href="/tags/tag_input.asp">&lt;input&gt;</a></td>
<td>定义输入控件。</td>
</tr>

<tr>
<td><a href="/tags/tag_ins.asp">&lt;ins&gt;</a></td>
<td>定义被插入文本。</td>
</tr>

<tr>
<td>&lt;isindex&gt;</td>
<td>定义与文档相关的可搜索索引。<span class="deprecated">不赞成使用。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_phrase_elements.asp">&lt;kbd&gt;</a></td>
<td>定义键盘文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_keygen.asp">&lt;keygen&gt;</a></td>
<td>定义生成密钥。</td>
</tr>

<tr>
<td><a href="/tags/tag_label.asp">&lt;label&gt;</a></td>
<td>定义 input 元素的标注。</td>
</tr>

<tr>
<td><a href="/tags/tag_legend.asp">&lt;legend&gt;</a></td>
<td>定义 fieldset 元素的标题。</td>
</tr>

<tr>
<td><a href="/tags/tag_li.asp">&lt;li&gt;</a></td>
<td>定义列表的项目。</td>
</tr>

<tr>
<td><a href="/tags/tag_link.asp">&lt;link&gt;</a></td>
<td>定义文档与外部资源的关系。</td>
</tr>

<tr>
<td><a href="/tags/tag_main.asp">&lt;main&gt;</a></td>
<td>定义文档的主要内容。</td>
</tr>

<tr>
<td><a href="/tags/tag_map.asp">&lt;map&gt;</a></td>
<td>定义图像映射。</td>
</tr>

<tr>
<td><a href="/tags/tag_mark.asp">&lt;mark&gt;</a></td>
<td>定义有记号的文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_menu.asp">&lt;menu&gt;</a></td>
<td>定义命令的列表或菜单。</td>
</tr>

<tr>
<td><a href="/tags/tag_menuitem.asp">&lt;menuitem&gt;</a></td>
<td>定义用户可以从弹出菜单调用的命令/菜单项目。</td>
</tr>

<tr>
<td><a href="/tags/tag_meta.asp">&lt;meta&gt;</a></td>
<td>定义关于 HTML 文档的元信息。</td>
</tr>

<tr>
<td><a href="/tags/tag_meter.asp">&lt;meter&gt;</a></td>
<td>定义预定义范围内的度量。</td>
</tr>

<tr>
<td><a href="/tags/tag_nav.asp">&lt;nav&gt;</a></td>
<td>定义导航链接。</td>
</tr>

<tr>
<td><a href="/tags/tag_noframes.asp">&lt;noframes&gt;</a></td>
<td>定义针对不支持框架的用户的替代内容。<span class="deprecated">HTML5 中不支持。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_noscript.asp">&lt;noscript&gt;</a></td>
<td>定义针对不支持客户端脚本的用户的替代内容。</td>
</tr>

<tr>
<td><a href="/tags/tag_object.asp">&lt;object&gt;</a></td>
<td>定义内嵌对象。</td>
</tr>

<tr>
<td><a href="/tags/tag_ol.asp">&lt;ol&gt;</a></td>
<td>定义有序列表。</td>
</tr>

<tr>
<td><a href="/tags/tag_optgroup.asp">&lt;optgroup&gt;</a></td>
<td>定义选择列表中相关选项的组合。</td>
</tr>

<tr>
<td><a href="/tags/tag_option.asp">&lt;option&gt;</a></td>
<td>定义选择列表中的选项。</td>
</tr>

<tr>
<td><a href="/tags/tag_output.asp">&lt;output&gt;</a></td>
<td>定义输出的一些类型。</td>
</tr>

<tr>
<td><a href="/tags/tag_p.asp">&lt;p&gt;</a></td>
<td>定义段落。</td>
</tr>

<tr>
<td><a href="/tags/tag_param.asp">&lt;param&gt;</a></td>
<td>定义对象的参数。</td>
</tr>

<tr>
<td><a href="/tags/tag_pre.asp">&lt;pre&gt;</a></td>
<td>定义预格式文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_progress.asp">&lt;progress&gt;</a></td>
<td>定义任何类型的任务的进度。</td>
</tr>

<tr>
<td><a href="/tags/tag_q.asp">&lt;q&gt;</a></td>
<td>定义短的引用。</td>
</tr>

<tr>
<td><a href="/tags/tag_rp.asp">&lt;rp&gt;</a></td>
<td>定义若浏览器不支持 ruby 元素显示的内容。</td>
</tr>

<tr>
<td><a href="/tags/tag_rt.asp">&lt;rt&gt;</a></td>
<td>定义 ruby 注释的解释。</td>
</tr>

<tr>
<td><a href="/tags/tag_ruby.asp">&lt;ruby&gt;</a></td>
<td>定义 ruby 注释。</td>
</tr>

<tr>
<td><a href="/tags/tag_s.asp">&lt;s&gt;</a></td>
<td>定义加删除线的文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_phrase_elements.asp">&lt;samp&gt;</a></td>
<td>定义计算机代码样本。</td>
</tr>

<tr>
<td><a href="/tags/tag_script.asp">&lt;script&gt;</a></td>
<td>定义客户端脚本。</td>
</tr>

<tr>
<td><a href="/tags/tag_section.asp">&lt;section&gt;</a></td>
<td>定义 section。</td>
</tr>

<tr>
<td><a href="/tags/tag_select.asp">&lt;select&gt;</a></td>
<td>定义选择列表（下拉列表）。</td>
</tr>

<tr>
<td><a href="/tags/tag_font_style.asp">&lt;small&gt;</a></td>
<td>定义小号文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_source.asp">&lt;source&gt;</a></td>
<td>定义媒介源。</td>
</tr>

<tr>
<td><a href="/tags/tag_span.asp">&lt;span&gt;</a></td>
<td>定义文档中的节。</td>
</tr>

<tr>
<td><a href="/tags/tag_strike.asp">&lt;strike&gt;</a></td>
<td>定义加删除线文本。<span class="deprecated">HTML5 中不支持。请使用 &lt;del&gt; 或 &lt;s&gt; 代替。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_phrase_elements.asp">&lt;strong&gt;</a></td>
<td>定义强调文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_style.asp">&lt;style&gt;</a></td>
<td>定义文档的样式信息。</td>
</tr>

<tr>
<td><a href="/tags/tag_sub.asp">&lt;sub&gt;</a></td>
<td>定义下标文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_summary.asp">&lt;summary&gt;</a></td>
<td>为 &lt;details&gt; 元素定义可见的标题。</td>
</tr>

<tr>
<td><a href="/tags/tag_sup.asp">&lt;sup&gt;</a></td>
<td>定义上标文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_svg.asp">&lt;svg&gt;</a></td>
<td>定义 SVG 图形的容器。</td>
</tr>

<tr>
<td><a href="/tags/tag_table.asp">&lt;table&gt;</a></td>
<td>定义表格。</td>
</tr>

<tr>
<td><a href="/tags/tag_tbody.asp">&lt;tbody&gt;</a></td>
<td>定义表格中的主体内容。</td>
</tr>

<tr>
<td><a href="/tags/tag_td.asp">&lt;td&gt;</a></td>
<td>定义表格中的单元。</td>
</tr>

<tr>
<td><a href="/tags/tag_template.asp">&lt;template&gt;</a></td>
<td>定义用作容纳页面加载时隐藏内容的容器。</td>
</tr>

<tr>
<td><a href="/tags/tag_textarea.asp">&lt;textarea&gt;</a></td>
<td>定义多行的文本输入控件。</td>
</tr>

<tr>
<td><a href="/tags/tag_tfoot.asp">&lt;tfoot&gt;</a></td>
<td>定义表格中的表注内容（脚注）。</td>
</tr>

<tr>
<td><a href="/tags/tag_th.asp">&lt;th&gt;</a></td>
<td>定义表格中的表头单元格。</td>
</tr>

<tr>
<td><a href="/tags/tag_thead.asp">&lt;thead&gt;</a></td>
<td>定义表格中的表头内容。</td>
</tr>

<tr>
<td><a href="/tags/tag_time.asp">&lt;time&gt;</a></td>
<td>定义日期/时间。</td>
</tr>

<tr>
<td><a href="/tags/tag_title.asp">&lt;title&gt;</a></td>
<td>定义文档的标题。</td>
</tr>

<tr>
<td><a href="/tags/tag_tr.asp">&lt;tr&gt;</a></td>
<td>定义表格中的行。</td>
</tr>

<tr>
<td><a href="/tags/tag_track.asp">&lt;track&gt;</a></td>
<td>定义用在媒体播放器中的文本轨道。</td>
</tr>

<tr>
<td><a href="/tags/tag_font_style.asp">&lt;tt&gt;</a></td>
<td>定义打字机文本。<span class="deprecated">HTML5 中不支持。请使用 CSS 代替。</span></td>
</tr>

<tr>
<td><a href="/tags/tag_u.asp">&lt;u&gt;</a></td>
<td>定义下划线文本。</td>
</tr>

<tr>
<td><a href="/tags/tag_ul.asp">&lt;ul&gt;</a></td>
<td>定义无序列表。</td>
</tr>

<tr>
<td><a href="/tags/tag_phrase_elements.asp">&lt;var&gt;</a></td>
<td>定义文本的变量部分。</td>
</tr>

<tr>
<td><a href="/tags/tag_video.asp">&lt;video&gt;</a></td>
<td>定义视频。</td>
</tr>

<tr>
<td><a href="/tags/tag_wbr.asp">&lt;wbr&gt;</a></td>
<td>定义可能的换行符。</td>
</tr>

<tr>
<td>&lt;xmp&gt;</td>
<td>定义预格式文本。<span class="deprecated">HTML5 中不支持。</span></td>
</tr>
</tbody>
</table>
</div>
