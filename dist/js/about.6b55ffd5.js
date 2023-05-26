"use strict";(self["webpackChunkarchery_timer"]=self["webpackChunkarchery_timer"]||[]).push([[443],{769:function(t,e,r){r.r(e),r.d(e,{default:function(){return $}});var a=r(252),i=r(577),n=r(963),s={class:"settings"},o={key:0},u={for:"duration"},c={value:"20"},h={value:"30"},l={value:"60"},d={value:"90"},p={value:"120"},m={value:"180"},v={value:"240"},f={key:1,class:"phase"},P={key:2,class:"phase"},y={key:2,class:"timer end"},w={key:0,class:"commands"};function g(t,e,r,g,_,T){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",s,[t.timer<=0&&t.currentPhase!=t.endPhase?((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("label",u,(0,i.zw)(t.$t("duration.label"))+" :",1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.duration=e})},[(0,a._)("option",c,(0,i.zw)(t.$t("duration.20")),1),(0,a._)("option",h,(0,i.zw)(t.$t("duration.30")),1),(0,a._)("option",l,(0,i.zw)(t.$t("duration.60")),1),(0,a._)("option",d,(0,i.zw)(t.$t("duration.90")),1),(0,a._)("option",p,(0,i.zw)(t.$t("duration.120")),1),(0,a._)("option",m,(0,i.zw)(t.$t("duration.180")),1),(0,a._)("option",v,(0,i.zw)(t.$t("duration.240")),1)],512),[[n.bM,t.duration]])])):t.currentPhase==t.preparationPhase?((0,a.wg)(),(0,a.iD)("div",f,(0,i.zw)(t.currentPhase),1)):t.currentPhase!=t.endPhase?((0,a.wg)(),(0,a.iD)("div",P,(0,i.zw)(t.currentPhase),1)):(0,a.kq)("",!0)]),(0,a.Wm)(n.uT,{name:"custom-classes","enter-active-class":"animate__animated animate__bounceInLeft","leave-active-class":"animate__animated animate__bounceOutRight"},{default:(0,a.w5)((function(){return[t.currentPhase==t.preparationPhase||""==t.currentPhase?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)(["timer",t.timerClass])},(0,i.zw)(t.formatTime(t.timer)),3)):t.currentPhase==t.shootingPhase?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,i.C_)(["timer",t.timerClass])},(0,i.zw)(t.formatTime(t.timer)),3)):t.currentPhase==t.endPhase?((0,a.wg)(),(0,a.iD)("div",y,(0,i.zw)(t.endPhase),1)):(0,a.kq)("",!0)]})),_:1}),t.currentPhase!=t.endPhase?((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",null,[t.timer<=0?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"command material-symbols-outlined",onClick:e[1]||(e[1]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.startTimer&&t.startTimer.apply(t,e)})}," play_circle ")):(0,a.kq)("",!0)]),(0,a._)("div",null,[t.timer>0?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"command material-symbols-outlined red",onClick:e[2]||(e[2]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.stopTimer&&t.stopTimer.apply(t,e)})}," stop_circle ")):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)],64)}var _=r(150);var T=function(){return T=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var i in e=arguments[r],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},T.apply(this,arguments)};Object.create;Object.create;var b={en:"English",fr:"Français"};function k(){for(var t=[],e=0,r=Object.keys(b);e<r.length;e++){var a=r[e];t.push({code:a,name:b[a]})}return t}function S(t){void 0===t&&(t={});var e={countryCodeOnly:!1},r=T(T({},e),t),a=void 0!==navigator.languages?navigator.languages[0]:navigator.language;if(a){var i=r.countryCodeOnly?a.trim().split(/-|_/)[0]:a.trim();return i}}var z=r(352),C=r(496),I=(0,a.aZ)({name:"HomeView",components:{},data:function(){return{timer:0,duration:120,preparation:10,currentPhase:"",intervalId:void 0,lastPlayedSound:void 0,prepareSound:void 0,bipSound:void 0,locales:k(),browserLocale:S({countryCodeOnly:!0})}},setup:function(){var t=(0,_.QT)().t,e=(0,a.Fl)((function(){return t("phase.prepare")})),r=(0,a.Fl)((function(){return t("phase.shoot")})),i=(0,a.Fl)((function(){return t("phase.end")}));return{preparationPhase:e,shootingPhase:r,endPhase:i}},computed:{timerClass:function(){if(this.timer<=10){if(this.currentPhase==this.preparationPhase)return"yellow";if(this.currentPhase==this.shootingPhase)return"red"}return""}},created:function(){this.stopTimer(),this.prepareSound=new Audio(z),this.bipSound=new Audio(C)},mounted:function(){this.stopTimer(),this.browserLocale&&(this.$i18n.locale=this.browserLocale)},unmounted:function(){this.stopTimer()},methods:{pad:function(t){return t.toString().padStart(2,"0")},formatTime:function(t){Math.floor(t/3600);var e=Math.floor(t%3600/60),r=t%60;return"".concat(this.pad(e),":").concat(this.pad(r))},playSound:function(t){t&&(this.lastPlayedSound=t,t.play())},startTimer:function(){this.preparation&&this.duration&&(this.stopTimer(),this.startPreparationTimer())},stopTimer:function(){clearInterval(this.intervalId),this.timer=0,this.currentPhase="",this.lastPlayedSound&&(this.lastPlayedSound.pause(),this.lastPlayedSound.load(),this.lastPlayedSound=void 0)},startPreparationTimer:function(){var t=this;this.timer=10,this.currentPhase=this.preparationPhase,this.playSound(this.prepareSound),this.intervalId=setInterval((function(){t.timer&&(t.timer--,0===t.timer&&(t.stopTimer(),t.startShootingTimer()))}),1e3)},startShootingTimer:function(){var t=this;this.duration&&(this.timer=this.duration,this.currentPhase=this.shootingPhase,this.playSound(this.bipSound),this.intervalId=setInterval((function(){t.timer&&(t.timer--,0===t.timer&&(t.stopTimer(),t.playSound(t.prepareSound),t.startEndTimer()))}),1e3))},startEndTimer:function(){var t=this;this.timer=5,this.currentPhase=this.endPhase,this.intervalId=setInterval((function(){t.timer&&(t.timer--,0===t.timer&&(t.stopTimer(),t.currentPhase=""))}),1e3)}}}),D=r(744);const O=(0,D.Z)(I,[["render",g],["__scopeId","data-v-329ac26b"]]);var $=O},496:function(t,e,r){t.exports=r.p+"media/bip.a4f3d4de.mp3"},352:function(t,e,r){t.exports=r.p+"media/prepare.81967abc.mp3"}}]);
//# sourceMappingURL=about.6b55ffd5.js.map