"use strict";(self["webpackChunktopick_web"]=self["webpackChunktopick_web"]||[]).push([[425],{425:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var i=s(3396),o=s(7139);const r={class:"yellowBackground"},a={class:"appWrapper"},l={class:"topicArea"},c=(0,i._)("img",{src:"/ToPick-web/images/shuffle/slotmachine.png",alt:"slotmachine",class:"slotmachine"},null,-1),n={class:"pickedTopic"},h=["src"];function p(t,e,s,p,f,u){const m=(0,i.up)("HeaderComponent");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(m,{headerProps:f.headerProps},null,8,["headerProps"]),(0,i._)("div",a,[(0,i._)("div",l,[c,(0,i._)("div",n,(0,o.zw)(f.pickedTopic[0]),1)]),(0,i._)("div",{class:"buttonBox",onClick:e[0]||(e[0]=t=>u.mngShuffle())},[(0,i._)("img",{src:f.imgUrl,class:"mngShuffleButton"},null,8,h)])])])}var f=s(6092),u=s(1716),m=s(5449),d=s(2042);let g,k,b;var v={name:"shuffleView",components:{HeaderComponent:f.Z},data(){return{headerProps:{isImageTitle:!1,title:"シャッフル",propertyName:"shuffleHeader"},isStop:!0,imgUrl:"/ToPick-web/images/shuffle/button_stop.png",topicList:[],pickedTopic:""}},created(){this.roadTopics(),this.mngShuffle()},beforeUnmount(){clearInterval(g)},methods:{roadTopics(){const t=this.$route.params.selectionId,e=this.$route.params.categoryId;"0"===t?(this.topicList=u.F[e],b=Array.from(this.topicList)):"1"===t?(this.topicList=m.F[e],b=Array.from(this.topicList)):"2"===t&&(this.topicList=d.F[e],b=Array.from(this.topicList))},mngShuffle(){this.isStop?b.length<=0?alert("最後のトピックです。"):1===b.length?(this.shuffle(),b.splice(k,1)):(this.imgUrl="/ToPick-web/images/shuffle/button_stop.png",g=setInterval(this.shuffle,25),this.isStop=!1):(this.imgUrl="/ToPick-web/images/shuffle/button_shuffle.png",clearInterval(g),b.length>0&&b.splice(k,1),this.isStop=!0)},shuffle(){b.length<=0?this.$router.back():(k=Math.floor(Math.random()*b.length),this.pickedTopic=b[k])}}},w=s(89);const T=(0,w.Z)(v,[["render",p]]);var _=T}}]);