/*! vue-ydui v0.2.6 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;var i=n(64),o=r(i);t.Layout=o.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},2:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=c[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],t))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(l(r.parts[o],t));c[r.id]={id:r.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],s=i[1],a=i[2],l=i[3],u={css:s,media:a,sourceMap:l};n[o]?n[o].parts.push(u):t.push(n[o]={id:o,parts:[u]})}return t}function o(e,t){var n=v(),r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e,t){var n,r,i;if(t.singleton){var o=g++;n=h||(h=a(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=a(t),r=f.bind(null,n),i=function(){s(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function u(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,g=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],l=c[a.id];l.refs--,o.push(l)}if(e){var u=i(e);r(u,t)}for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete c[l.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},17:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,'.g-view{margin:0 auto;max-width:750px;min-width:300px}.g-view:before{height:45px}.g-view:after,.g-view:before{content:"";display:block;width:100%}.g-view:after{height:75px}.g-flexview{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;max-width:750px;min-width:300px}.g-scrollview{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;position:relative;margin-bottom:-1px}.g-scrollview:after{content:"";display:block;width:100%;height:25px}.ios .g-scrollview{margin-top:1px}.hairline .g-scrollview{margin-top:.5px}',""])},35:function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},64:function(e,t,n){var r,i;n(35),r=n(137);var o=n(96);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},96:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"g-flexview"},[e.showNavbar?e._t("navbar",[e.title?n("yd-navbar",{attrs:{title:e.title}},[n("router-link",{attrs:{to:e.link||"/"},slot:"left"},[n("yd-navbar-back-icon")],1)],1):e._e()]):e._e(),e._v(" "),n("section",{staticClass:"g-scrollview",class:e.iosScrollBug},[e._t("default")],2),e._v(" "),e._t("tabbar")],2)},staticRenderFns:[]}},137:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-layout",data:function(){return{iosScrollBug:""}},props:{link:String,title:String,showNavbar:{type:Boolean,default:!0}},mounted:function(){(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(this.iosScrollBug="g-fix-ios-overflow-scrolling-bug")}}}})});