(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e4e483bf"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-app-2/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"113c":function(e,t,n){e.exports=n.p+"img/default.0c54692c.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/search"}},[e._v("Search")]),e._v(" | "),n("router-link",{attrs:{to:"/comingsoon"}},[e._v("Coming soon")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,null,null),c=u.exports,l=n("9483");Object(l["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("H1",[e._v("Welcome")]),n("Popular")],1)},d=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Popular")]),e.info.data.results.length>0?r("div",{staticClass:"box"},e._l(e.info.data.results,(function(t){return r("div",{staticClass:"card"},[t.poster_path?r("img",{attrs:{alt:"poster",src:e.urlImg(t)}}):r("img",{attrs:{alt:"poster",src:n("113c")}}),r("h3",{staticClass:"title"},[e._v(" "+e._s(t.title)+" ")])])})),0):e._e()])},v=[],h=n("bc3a").default,g={name:"Popular",props:{},data:function(){return{info:{data:{results:{}}}}},mounted:function(){var e=this;h.get("https://api.themoviedb.org/3/movie/popular?api_key=4d8b1374d7f8f0878d960e993a97be58&language=fr-FR&page=1").then((function(t){return e.info=t}))},methods:{urlImg:function(e){return"https://image.tmdb.org/t/p/w185/".concat(e.poster_path)}}},b=g,_=Object(i["a"])(b,m,v,!1,null,null,null),w=_.exports,y={name:"Home",components:{Popular:w}},j=y,O=Object(i["a"])(j,f,d,!1,null,null,null),k=O.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Coming soon")]),e.info.data.results.length>0?r("div",{staticClass:"box"},e._l(e.info.data.results,(function(t){return r("div",{staticClass:"card"},[t.poster_path?r("img",{attrs:{alt:"poster",src:e.urlImg(t)}}):r("img",{attrs:{alt:"poster",src:n("113c")}}),r("h3",{staticClass:"title"},[e._v(" "+e._s(t.title)+" ")])])})),0):e._e()])},C=[],P=n("bc3a").default,E={name:"NewMovies",props:{},data:function(){return{info:{data:{results:{}}}}},methods:{urlImg:function(e){return"https://image.tmdb.org/t/p/w185/".concat(e.poster_path)}},mounted:function(){var e=this;P.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4d8b1374d7f8f0878d960e993a97be58").then((function(t){return e.info=t}))}},S=E,M=Object(i["a"])(S,x,C,!1,null,"2792c25a",null),T=M.exports;r["a"].use(p["a"]);var $=[{path:"/",name:"Home",component:k},{path:"/search",name:"Search",component:function(){return n.e("about").then(n.bind(null,"2d3b"))}},{path:"/comingsoon",name:"Coming soon",component:T}],A=new p["a"]({routes:$}),H=A;r["a"].config.productionTip=!1,new r["a"]({router:H,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.4af2585b.js.map