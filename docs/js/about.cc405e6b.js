(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2d3b":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"about"},[t("h1",[e._v("This is an about page")]),t("SearchMovie")],1)},o=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.infoMovies?t("p",[e._v(e._s(e.infoMovies.data.results[0].title))]):e._e()])},s=[],u=t("bc3a").default,r={name:"SearchMovie",props:{},data:function(){return{infoMovies:{}}},mounted:function(){var e=this;u.get("https://api.themoviedb.org/3/search/movie?api_key=4d8b1374d7f8f0878d960e993a97be58&language=fr-FR&query=Asphalt Burning&include_adult=false ").then((function(n){return e.infoMovies=n})).then((function(){return console.log(e.infoMovies)}))}},c=r,l=t("2877"),f=Object(l["a"])(c,i,s,!1,null,"4c190faa",null),v=f.exports,d={name:"Home",components:{SearchMovie:v}},p=d,h=Object(l["a"])(p,a,o,!1,null,null,null);n["default"]=h.exports}}]);
//# sourceMappingURL=about.cc405e6b.js.map