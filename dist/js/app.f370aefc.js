(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d6ad4":"167c6a50","chunk-b639b84e":"8b7a6989","chunk-bdde2598":"9f2f0f2a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-b639b84e":1,"chunk-bdde2598":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d6ad4":"31d6cfe0","chunk-b639b84e":"3f44606d","chunk-bdde2598":"6a329d8e"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-modules-clone/dist/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3c99":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("8756"),n("2903"),n("8623"),n("ec0c");var r=n("430a"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swxt-app",attrs:{id:"app"}},[n("keep-alive",{directives:[{name:"show",rawName:"v-show",value:e.$route.meta.keepAlive,expression:"$route.meta.keepAlive"}]},[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view",{key:e.$route.name})],1)},o=[],u=n("66b1"),c=n("b49e"),i=n("62ba"),l=n("4042"),s=n("28b6"),d=(n("876e"),n("8798"),n("a71d"),n("29b0"),n("34bc"),n("1938")),p=n("3bc2"),f=(n("f5aa"),n("2f9e"),[{path:"/",name:"List",meta:{module:"page"},component:function(){return n.e("chunk-b639b84e").then(n.bind(null,"abbc"))}},{path:"/item",name:"item",meta:{module:"Mother"},component:function(){return n.e("chunk-bdde2598").then(n.bind(null,"e370"))}},{path:"/other",name:"other",meta:{module:"Mother"},component:function(){return n.e("chunk-2d0d6ad4").then(n.bind(null,"7423"))}}]),m=Object(d["a"])(f);r["a"].use(p["a"]);var h=new p["a"]({mode:"hash",scrollBehavior:function(){return{y:0}},routes:m}),v=h,b={getRouteModule:function(e){var t=e||{},n=t.meta;return n.module||""},getCurrentModule:function(){var e=v.history.current;return this.getRouteModule(e)}},y=function(){function e(){Object(i["a"])(this,e),Object(s["a"])(this,"_proxyRouteNameMap",{})}return Object(l["a"])(e,[{key:"clone",value:function(e){var t,n=e.target,r=e.module,a=e.meta,o=v.options.routes.filter((function(e){return e.meta.module===n})),i=[],l=Object(u["a"])(o);try{for(l.s();!(t=l.n()).done;){var s=t.value,d=s.path.indexOf("/:");d<0&&(d=s.path.length);var p=s.path.substr(0,d),f=s.path.replace(p,p+"--clone--"+r),m=Object(c["a"])(Object(c["a"])({},s),{},{path:f,name:s.name+"--clone--"+r,meta:Object(c["a"])(Object(c["a"])(Object(c["a"])({},s.meta),a),{},{module:r})});this._proxyRouteNameMap[r]||(this._proxyRouteNameMap[r]={}),this._proxyRouteNameMap[r][s.name]=m.name,i.push(m)}}catch(h){l.e(h)}finally{l.f()}v.addRoutes(i),this.proxyRoute()}},{key:"proxyRoute",value:function(){var e=this;v.beforeEach((function(t,n,r){var a=b.getRouteModule(n);a=t.params.module||a;var o=a&&e._proxyRouteNameMap[a];if(console.log("moduleCode",a),o&&o[t.name]){var u=t.params,c=t.query;r({name:o[t.name],params:u,query:c,replace:v.isReplace})}r()}))}}]),e}(),g=new y,k={settings:[{module:"childA",target:"Mother",meta:{name:"拷贝的A模块"}},{module:"childAA",target:"Mother",meta:{name:"拷贝的AA模块"}},{module:"childB",target:"Mother",meta:{name:"拷贝的B模块"}}]},O={name:"App",data:function(){return{}},created:function(){var e,t=Object(u["a"])(k.settings);try{for(t.s();!(e=t.n()).done;){var n=e.value;g.clone(n)}}catch(r){t.e(r)}finally{t.f()}}},w=O,j=(n("7c55"),n("cba8")),x=Object(j["a"])(w,a,o,!1,null,null,null),M=x.exports;new r["a"]({router:v,render:function(e){return e(M)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("3c99")}});