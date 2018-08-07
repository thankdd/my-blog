# flex布局和传统布局的区别

## 我的理解

传统布局通常是通过display/float/position，而其中display：inline-block有一个默认的间距，float和position 则会脱离文档流，这些缺点都会多多少少对布局产生影响。而flex的出现恰恰解决了这些痛点，它简单方便，代码思维也更偏向于布局的思维，针对水平，垂直的居中，对齐，排列等布局都能很快速的实现。通常我们会在多屏端去使用flex，利用的就是它弹性布局的特质，高端和宽度会自动去计算，这相对传统布局的媒体查询在代码量上有着很大的精简，但flex也一定的兼容性问题，它不能再ie10以下的浏览器中生效。

## 大佬总结

css盒子模型不是某种布局专属，是所以布局共同的。传统布局这个词太泛泛，目前在用的主流方法有两类。一类是基于格子布局，将页面看成行+列的二维布局。另一类是flex布局，将页面看成是行或者列的一维布局。到现在这个时代，其他的方法都归于传统布局，或者说过时的布局方法。比如传说中的默认布局，其实就是不去布局。还有基于float实现多列的布局。还有依赖table的表格布局。

性能上flex允许子元素不设置宽高，而是由算法动态去计算，性能会比设定好的宽高稍慢。但在这个时代大体没有影响。但计算有时候会不符合人的预期，有时候需要用flex提供的属性给予启发。

传统布局并不是基于盒模型，第二大坑是，传统布局+flex布局 ！= 所以布局，除此之外还有 grid布局，多列布局等

官方文档：[https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout)