(function(){"use strict";var e={8798:function(e,t,n){var r=n(9242),o=n(3396);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(89);const c={},u=(0,a.Z)(c,[["render",i]]);var s=u,l=n(678);const d={class:"appWrapper"};function p(e,t,n,r,i,a){const c=(0,o.up)("HeaderComponent"),u=(0,o.up)("SelectSection"),s=(0,o.up)("RecommendationsSection");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,{headerProps:i.headerProps},null,8,["headerProps"]),(0,o._)("div",d,[(0,o.Wm)(u),(0,o.Wm)(s)])],64)}var f=n(978);const m={class:"table"},g=(0,o._)("li",{class:"title"},"話題を選ぶ",-1),h=(0,o.Uk)("カテゴリー"),v={class:"list-bottom"},_=(0,o.Uk)("シーン");function y(e,t){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("ul",null,[g,(0,o._)("li",null,[(0,o.Wm)(n,{to:"/category/0"},{default:(0,o.w5)((()=>[h])),_:1})]),(0,o._)("li",v,[(0,o.Wm)(n,{to:"/category/1"},{default:(0,o.w5)((()=>[_])),_:1})])])])}const b={},w=(0,a.Z)(b,[["render",y]]);var k=w,P=n(7139);const S=(0,o._)("div",{class:"title"}," オススメ話題集 ",-1),C={class:"card-group"},O={class:"card__imgframe"},T=["src","onClick"],x={class:"card__textbox"},E={class:"card__overviewtext"};function j(e,t,n,r,i,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[S,(0,o._)("div",C,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.recommendList,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.category_id,class:"card"},[(0,o._)("div",O,[(0,o._)("img",{src:i.bgimgs[e.category_id],onClick:t=>a.toTopicList(e.category_id)},null,8,T)]),(0,o._)("div",x,[(0,o._)("div",E,(0,P.zw)(e.category_name[0]),1)])])))),128))])],64)}var L=n(9283),D={data(){return{recommendList:L.u,bgimgs:["/images/r_timeKiller/r_timeKiller@2x.png","/images/r_firstMeet/r_firstMeet@2x.png","/images/r_igai/r_igai@2x.png","/images/r_2options/r_2options@2x.png","/images/r_ES/r_ES@2x.png"]}},methods:{toTopicList(e){this.$router.push("/category/2/topicList/"+e)}}};const N=(0,a.Z)(D,[["render",j]]);var A=N,I={name:"HomeView",components:{HeaderComponent:f.Z,SelectSection:k,RecommendationsSection:A},data(){return{headerProps:{isImageTitle:!0,title:"",propertyName:"homeHeader"}}}};const H=(0,a.Z)(I,[["render",p]]);var W=H;const Z=[{path:"/",name:"home",component:W},{path:"/category/:selectionId/topicList/:categoryId",name:"topicList",component:()=>Promise.all([n.e(666),n.e(77)]).then(n.bind(n,77))},{path:"/category/:selectionId",name:"category",component:()=>n.e(198).then(n.bind(n,4198))},{path:"/category/:selectionId/topicList/:categoryId/shuffle",name:"shuffle",component:()=>Promise.all([n.e(666),n.e(84)]).then(n.bind(n,1084))}],K=(0,l.p7)({history:(0,l.PO)(),routes:Z});var M=K;(0,r.ri)(s).use(M).mount("#app")},978:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3396),o=n(7139);const i={key:0,src:"/images/header-parts/header.png",alt:"ヘッダーイメージ"},a={key:1};function c(e,t,n,c,u,s){return(0,r.wg)(),(0,r.iD)("header",{class:(0,o.C_)(n.headerProps.propertyName)},[n.headerProps.isImageTitle?((0,r.wg)(),(0,r.iD)("img",i)):(0,r.kq)("",!0),n.headerProps.isImageTitle?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",a,(0,o.zw)(n.headerProps.title),1))],2)}var u={name:"headerComponent",props:["headerProps"]},s=n(89);const l=(0,s.Z)(u,[["render",c]]);var d=l},9283:function(e){e.exports=JSON.parse('{"u":[{"category_id":0,"category_name":["暇つぶし話題３０選","Killing Time"],"img_url_snippet":"r_timeKiller"},{"category_id":1,"category_name":["初対面話題決定版","With a stranger"],"img_url_snippet":"r_firstMeet"},{"category_id":2,"category_name":["地味に知らないこんな一面","Unexpected side of you"],"img_url_snippet":"r_igai"},{"category_id":3,"category_name":["究極の二択","The ultimate two choices"],"img_url_snippet":"r_2options"},{"category_id":4,"category_name":["ES・面接で問われる就活話題","Questions in a Job interbiew"],"img_url_snippet":"r_ES"}]}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="topick-web:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[o];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/ToPick-web/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),c=n.p+a;if(t(a,c))return o();e(r,c,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={77:1,84:1,198:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],u=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunktopick_web"]=self["webpackChunktopick_web"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8798)}));r=n.O(r)})();