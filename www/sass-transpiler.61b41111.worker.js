!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s="../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/sass/worker/index.js")}({"../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":function(e,r){function t(e,r,t,n,o,i,s){try{var a=e[i](s),u=a.value}catch(c){return void t(c)}a.done?r(u):Promise.resolve(u).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var s=e.apply(r,n);function a(e){t(s,o,i,a,u,"next",e)}function u(e){t(s,o,i,a,u,"throw",e)}a(void 0)}))}}},"../../node_modules/@babel/runtime/regenerator/index.js":function(e,r,t){e.exports=t("../../node_modules/regenerator-runtime/runtime.js")},"../../node_modules/browser-resolve/index.js":function(e,r,t){(function(r,n){var o=t("../../standalone-packages/codesandbox-browserfs/dist/shims/fs.js"),i=t("../../node_modules/path-browserify/index.js"),s=t("../../node_modules/browser-resolve/node_modules/resolve/index.js");function a(e,t){for(var n="win32"===r.platform?/[\/\\]/:/\/+/,o=e.split(n),s=[],a=o.length-1;a>=0;a--)if("node_modules"!==o[a]){var u=i.join.apply(i,o.slice(0,a+1).concat(["node_modules"]));o[0].match(/([A-Za-z]:)/)||(u="/"+u),s.push(u)}return s}function u(e,r,t,o){try{var s=JSON.parse(e)}catch(c){throw c.message=e+" : "+c.message,c}var a=d(s,o);if(a)if("string"!==typeof a)Object.keys(a).forEach((function(e){var o;!1===a[e]?o=n+"/empty.js":"."===(o=a[e])[0]&&(o=i.resolve(r,o)),"/"!==e[0]&&"."!==e[0]||(e=i.resolve(r,e)),t[e]=o})),[".js",".json"].forEach((function(e){Object.keys(t).forEach((function(r){t[r+e]||(t[r+e]=t[r])}))}));else{var u=i.resolve(r,s.main||"index.js");t[u]=i.resolve(r,a)}}function c(e,r){var t=e.packageFilter,n=f(e.browser);e.basedir=r,e.packageFilter=function(e,r){t&&(e=t(e,r));var o=d(e,n);if(!o)return e;if(e[n]=o,"string"===typeof o)return e.main=o,e;var i=o[e.main||"./index.js"]||o["./"+e.main||!1];return e.main=i||e.main,e};var o=e.pathFilter;return e.pathFilter=function(e,r,t){var s;if("."!=t[0]&&(t="./"+t),o&&(s=o.apply(this,arguments)),s)return s;var a=e[n];return a?((s=a[t])||""!==i.extname(t)||(s=a[t+".js"])||(s=a[t+".json"]),s):void 0},e}function l(e,r,t){(r=r||{}).filename=r.filename||"";var n=i.dirname(r.filename);r.basedir&&(n=r.basedir);var l=a(n);r.paths&&l.push.apply(l,r.paths),function(e,r,t,n){var o=Object.create(null);!function s(){var a=e.shift();if(!a)return n(null,o);var c=i.join(a,"package.json");t(c,"utf8",(function(e,t){if(e)return"ENOENT"===e.code?s():n(e);try{return u(t,a,o,r),n(null,o)}catch(e){return n(e)}}))}()}(l=l.map((function(e){return i.dirname(e)})),r.browser,r.readFile||o.readFile,(function(o,a){if(o)return t(o);var u=i.resolve(r.basedir||i.dirname(r.filename),e);if(a[e]||a[u]){var l=a[e]?e:u;if("/"===a[l][0])return s(a[l],c(r,n),(function(e,r,n){t(null,r,n)}));e=a[l]}var f=(r.modules||Object.create(null))[e];if(f)return t(null,f);s(e,c(r,n),(function(e,r,n){if(e)return t(e);var o=a&&a[r]||r;t(null,o,n)}))}))}function f(e){return e||"browser"}function d(e,r){var t=e[r=f(r)]||e.browser;return"string"!==typeof e.browserify||t||(t=e.browserify),t}l.sync=function(e,r){(r=r||{}).filename=r.filename||"";var t=i.dirname(r.filename);r.basedir&&(t=r.basedir);var n=a(t);r.paths&&n.push.apply(n,r.paths);var l=function(e,r,t){for(var n,o=Object.create(null);n=e.shift();){var s=i.join(n,"package.json");try{return u(t(s,"utf8"),n,o,r),o}catch(a){if("ENOENT"===a.code)continue;throw a}}return o}(n=n.map((function(e){return i.dirname(e)})),r.browser,r.readFileSync||o.readFileSync);if(l[e]){if("/"===l[e][0])return l[e];e=l[e]}var f=(r.modules||Object.create(null))[e];if(f)return f;var d=s.sync(e,c(r,t));return l&&l[d]||d},e.exports=l}).call(this,t("../../node_modules/process/browser.js"),"/")},"../../node_modules/browser-resolve/node_modules/resolve/index.js":function(e,r,t){var n=t("../../node_modules/browser-resolve/node_modules/resolve/lib/core.js"),o=t("../../node_modules/browser-resolve/node_modules/resolve/lib/async.js");o.core=n,o.isCore=function(e){return n[e]},o.sync=t("../../node_modules/browser-resolve/node_modules/resolve/lib/sync.js"),e.exports=o},"../../node_modules/browser-resolve/node_modules/resolve/lib/async.js":function(e,r,t){(function(r){var n=t("../../node_modules/browser-resolve/node_modules/resolve/lib/core.js"),o=t("../../standalone-packages/codesandbox-browserfs/dist/shims/fs.js"),i=t("../../node_modules/path-browserify/index.js"),s=t("../../node_modules/browser-resolve/node_modules/resolve/lib/caller.js"),a=t("../../node_modules/browser-resolve/node_modules/resolve/lib/node-modules-paths.js");e.exports=function(e,t,u){var c=u,l=t||{};if("function"===typeof l&&(c=l,l={}),"string"!==typeof e){var f=new TypeError("Path must be a string.");return r.nextTick((function(){c(f)}))}var d=l.isFile||function(e,r){o.stat(e,(function(e,t){return e?"ENOENT"===e.code||"ENOTDIR"===e.code?r(null,!1):r(e):r(null,t.isFile()||t.isFIFO())}))},p=l.readFile||o.readFile,h=l.extensions||[".js"],v=l.basedir||i.dirname(s());if(l.paths=l.paths||[],/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(e)){var m=i.resolve(v,e);".."!==e&&"/"!==e.slice(-1)||(m+="/"),/\/$/.test(e)&&m===v?y(m,l.package,g):b(m,l.package,g)}else!function(e,r,t){w(t,a(r,l))}(0,v,(function(r,t,o){if(r)c(r);else if(t)c(null,t,o);else{if(n[e])return c(null,e);var i=new Error("Cannot find module '"+e+"' from '"+v+"'");i.code="MODULE_NOT_FOUND",c(i)}}));function g(r,t,n){r?c(r):t?c(null,t,n):y(m,(function(r,t,n){if(r)c(r);else if(t)c(null,t,n);else{var o=new Error("Cannot find module '"+e+"' from '"+v+"'");o.code="MODULE_NOT_FOUND",c(o)}}))}function b(e,t,n){var o=t,s=n;"function"===typeof o&&(s=o,o=void 0),function e(t,n,o){if(0===t.length)return s(null,void 0,o);var a=n+t[0],u=o;u?c(null,u):function e(t,n){if(""===t||"/"===t)return n(null);if("win32"===r.platform&&/^\w:[/\\]*$/.test(t))return n(null);if(/[/\\]node_modules[/\\]*$/.test(t))return n(null);var o=i.join(t,"package.json");d(o,(function(r,s){if(!s)return e(i.dirname(t),n);p(o,(function(e,r){e&&n(e);try{var i=JSON.parse(r)}catch(s){}i&&l.packageFilter&&(i=l.packageFilter(i,o)),n(null,i,t)}))}))}(i.dirname(a),c);function c(r,o,c){if(u=o,r)return s(r);if(c&&u&&l.pathFilter){var p=i.relative(c,a),v=p.slice(0,p.length-t[0].length),m=l.pathFilter(u,n,v);if(m)return e([""].concat(h.slice()),i.resolve(c,m),u)}d(a,f)}function f(r,o){return r?s(r):o?s(null,a,u):void e(t.slice(1),n,u)}}([""].concat(h),e,o)}function y(e,r,t){var n=t,o=r;"function"===typeof o&&(n=o,o=l.package);var s=i.join(e,"package.json");d(s,(function(r,t){return r?n(r):t?void p(s,(function(r,t){if(r)return n(r);try{var o=JSON.parse(t)}catch(a){}if(l.packageFilter&&(o=l.packageFilter(o,s)),o.main)return"."!==o.main&&"./"!==o.main||(o.main="index"),void b(i.resolve(e,o.main),o,(function(r,t,o){return r?n(r):t?n(null,t,o):o?void y(i.resolve(e,o.main),o,(function(r,t,o){return r?n(r):t?n(null,t,o):void b(i.join(e,"index"),o,n)})):b(i.join(e,"index"),o,n)}));b(i.join(e,"/index"),o,n)})):b(i.join(e,"index"),o,n)}))}function w(r,t){if(0===t.length)return r(null,void 0);var n=t[0];function o(e,n,o){return e?r(e):n?r(null,n,o):void w(r,t.slice(1))}b(i.join(n,e),void 0,(function(t,s,a){if(t)return r(t);if(s)return r(null,s,a);y(i.join(n,e),void 0,o)}))}}}).call(this,t("../../node_modules/process/browser.js"))},"../../node_modules/browser-resolve/node_modules/resolve/lib/caller.js":function(e,r){e.exports=function(){var e=Error.prepareStackTrace;Error.prepareStackTrace=function(e,r){return r};var r=(new Error).stack;return Error.prepareStackTrace=e,r[2].getFileName()}},"../../node_modules/browser-resolve/node_modules/resolve/lib/core.js":function(e,r,t){(function(r){var n=r.versions&&r.versions.node&&r.versions.node.split(".")||[];function o(e){if(!0===e)return!0;for(var r=e.split(" "),t=r[0],o=r[1].split("."),i=0;i<3;++i){var s=Number(n[i]||0),a=Number(o[i]||0);if(s!==a)return"<"===t?s<a:">="===t&&s>=a}return!1}var i=t("../../node_modules/browser-resolve/node_modules/resolve/lib/core.json"),s={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=o(i[a]));e.exports=s}).call(this,t("../../node_modules/process/browser.js"))},"../../node_modules/browser-resolve/node_modules/resolve/lib/core.json":function(e){e.exports=JSON.parse('{"assert":true,"buffer_ieee754":"< 0.9.7","buffer":true,"child_process":true,"cluster":true,"console":true,"constants":true,"crypto":true,"_debugger":"< 8","dgram":true,"dns":true,"domain":true,"events":true,"freelist":"< 6","fs":true,"http":true,"http2":">= 8.8","https":true,"_http_server":">= 0.11","_linklist":"< 8","module":true,"net":true,"os":true,"path":true,"perf_hooks":">= 8.5","process":">= 1","punycode":true,"querystring":true,"readline":true,"repl":true,"stream":true,"string_decoder":true,"sys":true,"timers":true,"tls":true,"tty":true,"url":true,"util":true,"v8":">= 1","vm":true,"zlib":true}')},"../../node_modules/browser-resolve/node_modules/resolve/lib/node-modules-paths.js":function(e,r,t){var n=t("../../node_modules/path-browserify/index.js"),o=t("../../standalone-packages/codesandbox-browserfs/dist/shims/fs.js"),i=n.parse||t("../../node_modules/path-parse/index.js");e.exports=function(e,r){var t=r&&r.moduleDirectory?[].concat(r.moduleDirectory):["node_modules"],s=n.resolve(e);if(r&&!1===r.preserveSymlinks)try{s=o.realpathSync(s)}catch(f){if("ENOENT"!==f.code)throw f}var a="/";/^([A-Za-z]:)/.test(s)?a="":/^\\\\/.test(s)&&(a="\\\\");for(var u=[s],c=i(s);c.dir!==u[u.length-1];)u.push(c.dir),c=i(c.dir);var l=u.reduce((function(e,r){return e.concat(t.map((function(e){return n.join(a,r,e)})))}),[]);return r&&r.paths?l.concat(r.paths):l}},"../../node_modules/browser-resolve/node_modules/resolve/lib/sync.js":function(e,r,t){var n=t("../../node_modules/browser-resolve/node_modules/resolve/lib/core.js"),o=t("../../standalone-packages/codesandbox-browserfs/dist/shims/fs.js"),i=t("../../node_modules/path-browserify/index.js"),s=t("../../node_modules/browser-resolve/node_modules/resolve/lib/caller.js"),a=t("../../node_modules/browser-resolve/node_modules/resolve/lib/node-modules-paths.js");e.exports=function(e,r){if("string"!==typeof e)throw new TypeError("Path must be a string.");var t=r||{},u=t.isFile||function(e){try{var r=o.statSync(e)}catch(t){if(t&&("ENOENT"===t.code||"ENOTDIR"===t.code))return!1;throw t}return r.isFile()||r.isFIFO()},c=t.readFileSync||o.readFileSync,l=t.extensions||[".js"],f=t.basedir||i.dirname(s());if(t.paths=t.paths||[],/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(e)){var d=i.resolve(f,e);".."!==e&&"/"!==e.slice(-1)||(d+="/");var p=m(d)||g(d);if(p)return p}else{var h=function(e,r){for(var n=a(r,t),o=0;o<n.length;o++){var s=n[o],u=m(i.join(s,"/",e));if(u)return u;var c=g(i.join(s,"/",e));if(c)return c}}(e,f);if(h)return h}if(n[e])return e;var v=new Error("Cannot find module '"+e+"' from '"+f+"'");throw v.code="MODULE_NOT_FOUND",v;function m(e){var r=function e(r){if(""===r||"/"===r||/[/\\]node_modules[/\\]*$/.test(r))return null;var n=i.join(r,"package.json");if(!u(n))return e(i.dirname(r));var o=c(n);try{var s=JSON.parse(o)}catch(a){}s&&t.packageFilter&&(s=t.packageFilter(s,n));return{pkg:s,dir:r}}(i.dirname(e));if(r&&r.dir&&r.pkg&&t.pathFilter){var n=i.relative(r.dir,e),o=t.pathFilter(r.pkg,e,n);o&&(e=i.resolve(r.dir,o))}if(u(e))return e;for(var s=0;s<l.length;s++){var a=e+l[s];if(u(a))return a}}function g(e){var r=i.join(e,"/package.json");if(u(r))try{var n=c(r,"UTF8"),o=JSON.parse(n);if(t.packageFilter&&(o=t.packageFilter(o,e)),o.main){"."!==o.main&&"./"!==o.main||(o.main="index");var s=m(i.resolve(e,o.main));if(s)return s;var a=g(i.resolve(e,o.main));if(a)return a}}catch(l){}return m(i.join(e,"/index"))}}},"../../node_modules/path-browserify/index.js":function(e,r,t){"use strict";(function(r){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,r){for(var t,n="",o=0,i=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)t=e.charCodeAt(a);else{if(47===t)break;t=47}if(47===t){if(i===a-1||1===s);else if(i!==a-1&&2===s){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var u=n.lastIndexOf("/");if(u!==n.length-1){-1===u?(n="",o=0):o=(n=n.slice(0,u)).length-1-n.lastIndexOf("/"),i=a,s=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=a,s=0;continue}r&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),o=a-i-1;i=a,s=0}else 46===t&&-1!==s?++s:s=-1}return n}var o={resolve:function(){for(var e,o="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var a;s>=0?a=arguments[s]:(void 0===e&&(e=r.cwd()),a=e),t(a),0!==a.length&&(o=a+"/"+o,i=47===a.charCodeAt(0))}return o=n(o,!i),i?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];t(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":o.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=o.resolve(e))===(r=o.resolve(r)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var i=e.length,s=i-n,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var u=r.length-a,c=s<u?s:u,l=-1,f=0;f<=c;++f){if(f===c){if(u>c){if(47===r.charCodeAt(a+f))return r.slice(a+f+1);if(0===f)return r.slice(a+f)}else s>c&&(47===e.charCodeAt(n+f)?l=f:0===f&&(l=0));break}var d=e.charCodeAt(n+f);if(d!==r.charCodeAt(a+f))break;47===d&&(l=f)}var p="";for(f=n+l+1;f<=i;++f)f!==i&&47!==e.charCodeAt(f)||(0===p.length?p+="..":p+="/..");return p.length>0?p+r.slice(a+l):(a+=l,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,o=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(r=e.charCodeAt(s))){if(!i){o=s;break}}else i=!1;return-1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,o=0,i=-1,s=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,u=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!s){o=n+1;break}}else-1===u&&(s=!1,u=n+1),a>=0&&(c===r.charCodeAt(a)?-1===--a&&(i=n):(a=-1,i=u))}return o===i?i=u:-1===i&&(i=e.length),e.slice(o,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){o=n+1;break}}else-1===i&&(s=!1,i=n+1);return-1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,i=!0,s=0,a=e.length-1;a>=0;--a){var u=e.charCodeAt(a);if(47!==u)-1===o&&(i=!1,o=a+1),46===u?-1===r?r=a:1!==s&&(s=1):-1!==r&&(s=-1);else if(!i){n=a+1;break}}return-1===r||-1===o||0===s||1===s&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,r){var t=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return t?t===r.root?t+n:t+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,o=e.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var s=-1,a=0,u=-1,c=!0,l=e.length-1,f=0;l>=n;--l)if(47!==(o=e.charCodeAt(l)))-1===u&&(c=!1,u=l+1),46===o?-1===s?s=l:1!==f&&(f=1):-1!==s&&(f=-1);else if(!c){a=l+1;break}return-1===s||-1===u||0===f||1===f&&s===u-1&&s===a+1?-1!==u&&(r.base=r.name=0===a&&i?e.slice(1,u):e.slice(a,u)):(0===a&&i?(r.name=e.slice(1,s),r.base=e.slice(1,u)):(r.name=e.slice(a,s),r.base=e.slice(a,u)),r.ext=e.slice(s,u)),a>0?r.dir=e.slice(0,a-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}).call(this,t("../../node_modules/process/browser.js"))},"../../node_modules/path-parse/index.js":function(e,r,t){"use strict";(function(r){var t="win32"===r.platform,n=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,o=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,i={};i.parse=function(e){if("string"!==typeof e)throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var r=function(e){var r=n.exec(e),t=(r[1]||"")+(r[2]||""),i=r[3]||"",s=o.exec(i);return[t,s[1],s[2],s[3]]}(e);if(!r||4!==r.length)throw new TypeError("Invalid path '"+e+"'");return{root:r[0],dir:r[0]+r[1].slice(0,-1),base:r[2],ext:r[3],name:r[2].slice(0,r[2].length-r[3].length)}};var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a={};a.parse=function(e){if("string"!==typeof e)throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var r,t=(r=e,s.exec(r).slice(1));if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},e.exports=t?i.parse:a.parse,e.exports.posix=a.parse,e.exports.win32=i.parse}).call(this,t("../../node_modules/process/browser.js"))},"../../node_modules/process/browser.js":function(e,r){var t,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var r=c.length;r;){for(u=c,c=[];++f<r;)u&&u[f].run();f=-1,r=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function h(e,r){this.fun=e,this.array=r}function v(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new h(e,r)),1!==c.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"../../node_modules/regenerator-runtime/runtime.js":function(e,r,t){var n=function(e){"use strict";var r=Object.prototype,t=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function a(e,r,t,n){var o=r&&r.prototype instanceof l?r:l,i=Object.create(o.prototype),s=new j(n||[]);return i._invoke=function(e,r,t){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(t.method=o,t.arg=i;;){var s=t.delegate;if(s){var a=y(s,t);if(a){if(a===c)continue;return a}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===n)throw n="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n="executing";var l=u(e,r,t);if("normal"===l.type){if(n=t.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:t.done}}"throw"===l.type&&(n="completed",t.method="throw",t.arg=l.arg)}}}(e,t,s),i}function u(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(n){return{type:"throw",arg:n}}}e.wrap=a;var c={};function l(){}function f(){}function d(){}var p={};p[o]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(_([])));v&&v!==r&&t.call(v,o)&&(p=v);var m=d.prototype=l.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(r){e[r]=function(e){return this._invoke(r,e)}}))}function b(e,r){var n;this._invoke=function(o,i){function s(){return new r((function(n,s){!function n(o,i,s,a){var c=u(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===typeof f&&t.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):r.resolve(f).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}(o,i,n,s)}))}return n=n?n.then(s,s):s()}}function y(e,r){var t=e.iterator[r.method];if(void 0===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=void 0,y(e,r),"throw"===r.method))return c;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(t,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,c;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,c):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,c)}function w(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function x(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function _(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(t.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=m.constructor=d,d.constructor=f,d[s]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var r="function"===typeof e&&e.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},g(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(r,t,n,o,i){void 0===i&&(i=Promise);var s=new b(a(r,t,n,o),i);return e.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},g(m),m[s]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(e){var r=[];for(var t in e)r.push(t);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=_,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(t,n){return s.type="throw",s.arg=e,r.next=t,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=t.call(i,"catchLoc"),u=t.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=r,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(s)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),c},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),x(t),c}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var o=n.arg;x(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:_(e),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/sass/worker/index.js":function(e,r,t){self.importScripts("".concat("","/static/browserfs12/browserfs.min.js")),self.process=self.BrowserFS.BFSRequire("process"),self.Buffer=self.BrowserFS.BFSRequire("buffer").Buffer,t("./src/sandbox/eval/transpilers/sass/worker/sass-worker.js")},"../../standalone-packages/codesandbox-browserfs/dist/shims/fs.js":function(e,r){e.exports=BrowserFS.BFSRequire("fs")},"../common/lib/utils/delay.js":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e=1e3){return new Promise(r=>setTimeout(r,e))}},"../common/lib/utils/path.js":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.extname=r.absolute=r.basename=r.dirname=r.join=r.normalize=r.isAbsolute=void 0;const n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;function o(e){return"/"===e.charAt(0)}function i(e){const r=o(e),t=e&&"/"===e[e.length-1];let n=e;return n=function(e,r){const t=[];for(let n=0;n<e.length;n+=1){const o=e[n];o&&"."!==o&&(".."===o?t.length&&".."!==t[t.length-1]?t.pop():r&&t.push(".."):t.push(o))}return t}(n.split("/"),!r).join("/"),n||r||(n="."),n&&t&&(n+="/"),(r?"/":"")+n}r.isAbsolute=o,r.normalize=i,r.join=function(...e){let r="";for(let t=0;t<e.length;t+=1){const n=e[t];if("string"!==typeof n)throw new TypeError("Arguments to path.join must be strings");n&&(r+=r?"/"+n:n)}return i(r)},r.dirname=function(e){const r=(t=e,n.exec(t).slice(1));var t;const o=r[0];let i=r[1];return o||i?(i&&(i=i.substr(0,i.length-1)),o+i):"."},r.basename=function(e,r=""){if(""===e)return e;const t=i(e).split("/"),n=t[t.length-1];if(""===n&&t.length>1)return t[t.length-2];if(r.length>0){if(n.substr(n.length-r.length)===r)return n.substr(0,n.length-r.length)}return n},r.absolute=function(e){return e.startsWith("/")?e:e.startsWith("./")?e.replace("./","/"):"/"+e},r.extname=function(e){!function(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}(e);let r=-1,t=0,n=-1,o=!0,i=0;for(let s=e.length-1;s>=0;--s){const a=e.charCodeAt(s);if(47!==a)-1===n&&(o=!1,n=s+1),46===a?-1===r?r=s:1!==i&&(i=1):-1!==r&&(i=-1);else if(!o){t=s+1;break}}return-1===r||-1===n||0===i||1===i&&r===n-1&&r===t+1?"":e.slice(r,n)}},"./src/sandbox/eval/transpilers/sass/worker/sass-worker.js":function(e,r,t){"use strict";t.r(r);var n=t("../../node_modules/@babel/runtime/regenerator/index.js"),o=t.n(n),i=t("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),s=t.n(i),a=t("../../node_modules/browser-resolve/index.js"),u=t.n(a),c=t("../common/lib/utils/path.js"),l=t("../../node_modules/path-browserify/index.js"),f=t("../common/lib/utils/delay.js"),d=t.n(f),p=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e,r){return e.module&&(e.main=e.module),e}};self.importScripts(["https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.11.0/sass.sync.js"]),self.postMessage("ready");var h=function(e,r){var t=r.ignoredExtensions;return new Promise((function(r,n){var o=Math.floor(1e4*Math.random());self.postMessage({type:"resolve-async-transpiled-module",path:e,id:o,options:{isAbsolute:!0,ignoredExtensions:t}});self.addEventListener("message",(function e(t){var i=t.data,s=i.type,a=i.id,u=i.found;"resolve-async-transpiled-module-response"===s&&a===o&&(u?r(t.data):n(t.data),self.removeEventListener("message",e))}))}))},v=["scss","sass","css"],m=function(e,r){return new Promise((function(t){e.stat(r,function(){var e=s()(o.a.mark((function e(n,i){var s,a,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n&&!i.isDirectory()){e.next=21;break}if(!i||!i.isDirectory()){e.next=4;break}return t(!1),e.abrupt("return");case 4:return e.prev=4,e.next=7,h(r,{ignoredExtensions:v});case 7:if(s=e.sent,a=s.path,u=Object(l.extname)(a).substr(1),-1!==v.indexOf(u)){e.next=13;break}return t(!1),e.abrupt("return");case 13:t(a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),t(!1);case 19:e.next=22;break;case 21:t(r);case 22:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(r,t){return e.apply(this,arguments)}}())}))};function g(e){var r=e.map((function(e){return new Promise((function(r,t){return e.then((function(e){return e&&r(e)}),t)}))}));return r.push(Promise.all(e).then((function(){return!1}))),Promise.race(r)}var b={},y=function(){var e=s()(o.a.mark((function e(r,t){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.endsWith(".json")){e.next=2;break}return e.abrupt("return",!1);case 2:if(!b[t]){e.next=4;break}return e.abrupt("return",b[t]);case 4:return n=Sass.getPathVariations(t),e.next=7,g(n.map((function(e){return m(r,e)})));case 7:return i=e.sent,b[t]=i,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),w={},x=function e(r,t,n){var i=t.startsWith("~")?t.replace("~","/node_modules/"):t,a=Object(l.dirname)(n);return w[a]=w[a]||{},w[a][i]?Promise.resolve(w[a][i]):new Promise((function(f,d){var h=Object(l.join)(a,i);y(r,h).then((function(a){a?f(a):u()(i,{filename:n,extensions:[".scss",".css",".sass"],moduleDirectory:["node_modules"],packageFilter:p(),isFile:function(){var e=s()(o.a.mark((function e(t,n,i){var s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(r,t);case 2:return s=!!e.sent,a=n||i,e.abrupt("return",a(null,s));case 5:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),readFile:function(){var e=s()(o.a.mark((function e(t,n,i){var s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(r,t);case 2:if(s=e.sent){e.next=7;break}return(a=new Error("Could not find "+t)).code="ENOENT",e.abrupt("return",i(a));case 7:return e.abrupt("return",r.readFile(s,n,i));case 8:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}()},function(){var i=s()(o.a.mark((function i(s,a){var u;return o.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!s){o.next=5;break}/^\w/.test(t)&&f(e(r,"."+Object(c.absolute)(t),n)),d(s),o.next=9;break;case 5:return o.next=7,y(r,a);case 7:u=o.sent,f(u);case 9:case"end":return o.stop()}}),i)})));return function(e,r){return i.apply(this,arguments)}}())}))})).then((function(e){return w[a][i]=e,e}))};var j=!1,_={};self.addEventListener("message",function(){var e=s()(o.a.mark((function e(r){var t,n,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.data,n=t.code,i=t.path,a=t.indentedSyntax,t.codesandbox){e.next=3;break}return e.abrupt("return");case 3:if("initialize-fs"!==r.data.type){e.next=8;break}return e.next=6,new Promise((function(e){BrowserFS.configure({fs:"WorkerFS",options:{worker:self}},(function(){e()}))}));case 6:return j=!0,e.abrupt("return");case 8:if(j){e.next=14;break}case 9:if(j){e.next=14;break}return e.next=12,d()(50);case 12:e.next=9;break;case 14:b={},Sass._path="/",Sass.importer(function(){var e=s()(o.a.mark((function e(r,t){var n,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=BrowserFS.BFSRequire("fs"),e.prev=1,s="stdin"===r.previous?i:r.previous,e.t0=r.path,e.t0){e.next=8;break}return e.next=7,x(n,r.current,s);case 7:e.t0=e.sent;case 8:if(a=e.t0,self.postMessage({type:"add-transpilation-dependency",path:a,isAbsolute:!0}),!_[a]){e.next=13;break}return t({path:a}),e.abrupt("return");case 13:n.readFile(a,{},(function(e,r){if(e)t({error:e.message});else{var n=r.toString();Sass.writeFile(a,n,(function(){_[a]=!0,t({path:a})}))}})),e.next=19;break;case 16:e.prev=16,e.t1=e.catch(1),t({error:e.t1.message});case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(r,t){return e.apply(this,arguments)}}()),Sass.compile(n,{sourceMapEmbed:!0,indentedSyntax:a},(function(e){0===e.status?self.postMessage({type:"result",transpiledCode:e.text}):self.postMessage({type:"error",error:{name:"CompileError",message:e.formatted,fileName:e.file&&e.file.replace("/sass/","")}})}));case 18:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}});
//# sourceMappingURL=sass-transpiler.61b41111.worker.js.map