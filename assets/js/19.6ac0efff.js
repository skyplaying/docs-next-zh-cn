(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{435:function(t,n,e){},490:function(t,n,e){var i=e(2),r=e(6),o=e(226),u=[].slice,c=function(t){return function(n,e){var i=arguments.length>2,r=i?u.call(arguments,2):void 0;return t(i?function(){("function"==typeof n?n:Function(n)).apply(this,r)}:n,e)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},491:function(t,n,e){"use strict";e(435)},527:function(t,n,e){"use strict";e.r(n);e(138),e(9),e(126),e(490);var i={data:function(){return{counter:0,interval:null}},methods:{clearInterval:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){clearInterval(this.interval)}))},mounted:function(){var t=this;this.interval=setInterval((function(){t.counter++}),1e3)}},r=(e(491),e(56)),o=Object(r.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"demo"},[n("p",[this._v("Counter: "+this._s(this.counter))]),this._v(" "),n("button",{on:{click:this.clearInterval}},[this._v("Stop timer")])])}),[],!1,null,"276250da",null);n.default=o.exports}}]);