(this.csbJsonP=this.csbJsonP||[]).push([[17],{"./src/sandbox/eval/transpilers/vue/v2/style-compiler/loader.ts":function(e,t,n){"use strict";n.r(t);var r=n("../../node_modules/@babel/runtime/regenerator/index.js"),s=n.n(r),o=n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),a=n.n(o),u=n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),c=n.n(u),i=n("../../node_modules/postcss/lib/postcss.js"),p=n.n(i),l=n("../../node_modules/postcss-import/index.js"),d=n.n(l),f=n("../../node_modules/path-browserify/index.js"),b=n("./src/sandbox/eval/utils/is-dependency-path.ts"),m=n("../../node_modules/postcss/lib/postcss.js").plugin("trim",(function(e){return function(e){e.walk((function(e){"rule"!==e.type&&"atrule"!==e.type||(e.raws.before=e.raws.after="\n")}))}})),v=n("../../node_modules/postcss/lib/postcss.js"),y=n("./node_modules/postcss-selector-parser/dist/index.js"),h=v.plugin("add-id",(function(e){return function(t){var n=Object.create(null);t.each((function t(r){r.selector?r.selector=y((function(t){t.each((function(t){var n=null;t.each((function(e){if("combinator"===e.type&&">>>"===e.value)return e.value=" ",e.spaces.before=e.spaces.after="",!1;if("tag"===e.type&&"/deep/"===e.value){var t=e.next();return"combinator"===t.type&&" "===t.value&&t.remove(),e.remove(),!1}"pseudo"!==e.type&&"combinator"!==e.type&&(n=e)})),t.insertAfter(n,y.attribute({attribute:e.id}))}))})).process(r.selector).result:"atrule"===r.type&&("media"===r.name?r.each(t):"keyframes"===r.name&&(n[r.params]=r.params=r.params+"-"+e.id))})),Object.keys(n).length&&t.walkDecls((function(e){/-?animation-name$/.test(e.prop)&&(e.value=e.value.split(",").map((function(e){return n[e.trim()]||e.trim()})).join(",")),/-?animation$/.test(e.prop)&&(e.value=e.value.split(",").map((function(e){var t=e.split(/\s+/),r=t[0];return n[r]?[n[r]].concat(t.slice(1)).join(" "):e})).join(","))}))}}));function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e,t,n){return w.apply(this,arguments)}function w(){return(w=c()(s.a.mark((function e(t,n,r){var o,a,u,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(b.a)(n)){e.next=15;break}return e.prev=2,e.next=5,t.resolveTranspiledModuleAsync(Object(f.join)(n,"package.json"));case 5:if(o=e.sent,!(a=JSON.parse(o.module.code)).style){e.next=10;break}return u=Object(f.join)(n,a.style),e.abrupt("return",t.resolveTranspiledModuleAsync(u));case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(2);case 14:return e.abrupt("return",t.resolveTranspiledModuleAsync(n));case 15:return c="/"===n.charAt(0)?n:Object(f.join)(r,n),e.abrupt("return",t.resolveTranspiledModuleAsync(c));case 17:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}t.default=function(e,t){return new Promise((function(n,r){var o=t.options,u=t.options.__vueOptions__;u||(u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.options.vue));var i=[d()({resolve:function(){var e=c()(s.a.mark((function e(n,r){var o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(t,n,r);case 3:return o=e.sent,e.abrupt("return",o.module.path);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),load:function(){var e=c()(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.resolveTranspiledModuleAsync(n);case 2:return r=e.sent,e.abrupt("return",r.module.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),m],l={to:t.path,from:t.path};return o.scoped&&i.push(h({id:o.id})),t.sourceMap&&!1!==u.cssSourceMap&&(l.map={inline:!1,annotation:!1}),p()(i).process(e||"",l).then((function(e){e.messages&&e.messages.forEach((function(e){"dependency"===e.type&&t.addDependency(e.file)}));var r=e.map&&e.map.toJSON();return n({transpiledCode:e.css,sourceMap:r}),null})).catch((function(e){return r(e)}))}))}},"./src/sandbox/eval/utils/is-dependency-path.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return/^(\w|@\w|@-)/.test(e)}},11:function(e,t){},12:function(e,t){},13:function(e,t){}}]);
//# sourceMappingURL=vue-style-compiler.dc587ea99.chunk.js.map