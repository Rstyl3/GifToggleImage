(function(e){function t(t){for(var r,c,u=t[0],f=t[1],a=t[2],s=0,p=[];s<u.length;s++)c=u[s],o[c]&&p.push(o[c][0]),o[c]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var f=n[u];0!==o[f]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"007a":function(e,t,n){"use strict";var r=n("5d69"),o=n.n(r);o.a},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("SomeText Here")]),n("ToggleGif",{attrs:{srcImg:"AdalMsal",srcGif:"deleted"}})],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{class:e.toggleClass},[e.toggleGif?n("img",{attrs:{src:e.gif},on:{click:e.hdlclick}}):n("img",{attrs:{src:e.image},on:{click:e.hdlclick}})])},u=[],f={name:"ToggleGif",props:["srcImg","srcGif"],data:function(){return{toggleGif:!1}},computed:{image:function(){return n("9e01")("./"+this.srcImg+".png")},gif:function(){return n("56e0")("./"+this.srcGif+".gif")},toggleClass:function(){return this.toggleGif?"active":"toggle-gif"}},methods:{hdlclick:function(){this.toggleGif=!this.toggleGif}}},a=f,l=(n("007a"),n("2877")),s=Object(l["a"])(a,c,u,!1,null,"eb83a91c",null);s.options.__file="ToggleGif.vue";var p=s.exports,g={name:"app",components:{ToggleGif:p}},d=g,v=(n("034f"),Object(l["a"])(d,o,i,!1,null,null,null));v.options.__file="App.vue";var h=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"56e0":function(e,t,n){var r={"./deleted.gif":"6085"};function o(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="56e0"},"5d69":function(e,t,n){},6085:function(e,t,n){e.exports=n.p+"img/deleted.ca597bac.gif"},"64a9":function(e,t,n){},"9e01":function(e,t,n){var r={"./AdalMsal.png":"c644","./logo.png":"cf05"};function o(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="9e01"},c644:function(e,t,n){e.exports=n.p+"img/AdalMsal.d4097709.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5d267cb5.js.map