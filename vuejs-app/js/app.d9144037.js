(function(e){function n(n){for(var r,a,l=n[0],p=n[1],c=n[2],s=0,f=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);i&&i(n);while(f.length)f.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,l=1;l<t.length;l++){var p=t[l];0!==o[p]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},u=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/side-by-side/vuejs-app/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var i=p;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=t("8c4f"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-view")],1)},a=[],l={name:"App"},p=l,c=t("2877"),i=Object(c["a"])(p,u,a,!1,null,null,null),s=i.exports,f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("AppBasicInput",{attrs:{msg:"I am message"}})],1)},d=[],v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(e._s(e.msg))])},m=[],b={name:"AppBasicInput",props:{msg:String}},h=b,_=Object(c["a"])(h,v,m,!1,null,null,null),g=_.exports,y={name:"BasicInputParent",components:{AppBasicInput:g}},O=y,j=Object(c["a"])(O,f,d,!1,null,null,null),w=j.exports,x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("AppBasic")],1)},P=[],B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("I am basic component")])},A=[],I={name:"AppBasic"},S=I,$=Object(c["a"])(S,B,A,!1,null,null,null),E=$.exports,M={name:"BasicParent",components:{AppBasic:E}},k=M,T=Object(c["a"])(k,x,P,!1,null,null,null),J=T.exports;r["a"].use(o["a"]),r["a"].config.productionTip=!1;var q=[{path:"/",component:J},{path:"/msg",component:w}],z=new o["a"]({routes:q});new r["a"]({router:z,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.d9144037.js.map