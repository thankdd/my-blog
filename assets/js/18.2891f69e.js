(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{520:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近在做移动端页面的时候，遇到了 IOS 经典的「橡皮筋」（Bounce）问题，不知道苹果是出于什么思考出这么些反人类的特效，用过 iNoBounce 插件，由于这个插件的核心是使用 "),a("code",[t._v("-webkit-overflow-scrolling: touch;")]),t._v("，而恰恰这个 css 属性在常见的 chrome 浏览器中的不支持，所以对我来说似乎没啥 luan 用。")]),t._v(" "),a("h2",{attrs:{id:"什么是「橡皮筋」问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是「橡皮筋」问题"}},[t._v("#")]),t._v(" 什么是「橡皮筋」问题")]),t._v(" "),a("p",[t._v("简而言之就是，可以滑动的元素，当滑动溢出时，会出现一个类似橡皮筋一样的先溢出后弹回的动画效果。当这个效果出现在 window 时，往下拉会看到页面背后的底色（通常为白色）再弹回，在某些统一主题的页面上，这个效果将会变得很糟糕。")]),t._v(" "),a("h2",{attrs:{id:"解决办法：-滑动内置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决办法：-滑动内置"}},[t._v("#")]),t._v(" 解决办法： 滑动内置")]),t._v(" "),a("p",[t._v("解决这个问题的核心办法就是滑动内置，window 固定，让内层元素滑动，语言苍白，直接看代码吧：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchmove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// touchmove 的默认行为就是滚动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchmove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻止冒泡让需要滚动的元素能够滚动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h2",{attrs:{id:"完善"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完善"}},[t._v("#")]),t._v(" 完善")]),t._v(" "),a("p",[t._v("使用这个解决办法会使滚动元素漏出父元素的底色，可以通过设置父元素的 background 达到主题统一。")])])}),[],!1,null,null,null);s.default=e.exports}}]);