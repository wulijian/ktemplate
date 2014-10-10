## 简介
ktemplate 是依赖于 nodejs 的 js 模版。
它的语法简单，采用js代码加html代码的构成，因此学习成本较低。
支持 sourcemap 调试，解决大多数模版难以调试的难题。

#### 输出
输出标示符会将<%= %>内的正规的js的值，输出到其所在的位置。

```HTML
<div>
<%= _data.content %>
</div>
```

如果以上 _data.content = "hello ktemplate"; 那么，最终的结果将是：

```HTML
<div>
hello ktemplate
</div>
```

#### js语句
<% %>内可以写任何符合的 js 语句，例如：
```HTML
<%var a =3; %>
<%var b=4; %>
<%= a+b %>
```
最终会输出7.

需要注意的是，每行必须有闭合符号 %>。

#### 子模板
ktemplate 比其他模板还有一个优势，就是支持子模板。 子模板可以保证一个逻辑相关的模板不会太大，以至于很难维护。语法是：<%== url(data) %>。

url 代表子模板的相对地址，data是指传给子模板内的数据。

例如，调用模板的时候，数据如下：
```javascript
{
 "head":"这是一个实例",
  "content":{
     "name":"子模板的数据"
   }
}
```
你建了两个ktemplate模板
a.html
```HTML
<%= _data.content.name %>
```

b.html
```HTML
<%= head %>
<%== ./a(_data.content) %>
```

其中，b.html 中引用了 a.html 模板，并且将数据的 content属性传给了子模板。最终渲染结果：
```HTML
这是一个实例
子模板的数据
```

## Contributors
authors  : KnightWu
