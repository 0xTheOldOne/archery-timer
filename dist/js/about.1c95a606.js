"use strict";(self["webpackChunkarchery_timer"]=self["webpackChunkarchery_timer"]||[]).push([[443],{242:function(t,e,r){r.r(e),r.d(e,{default:function(){return s}});var n=r(252);const o={class:"about"},i=(0,n._)("h1",null,"This is an about page",-1),u=[i];function a(t,e){return(0,n.wg)(),(0,n.iD)("div",o,u)}var c=r(744);const f={},l=(0,c.Z)(f,[["render",a]]);var s=l},806:function(t,e,r){r.r(e),r.d(e,{default:function(){return Y}});var n=r(252),o=r(963),i={class:"home"},u=(0,n._)("label",{for:"duration"},"Durée :",-1),a=(0,n.uE)('<option value="-1">Selectionnez une durée</option><option value="30">30 secondes</option><option value="60">60 secondes</option><option value="120">120 secondes</option><option value="240">240 secondes</option>',5),c=[a];function f(t,e,r,a,f,l){var s=(0,n.up)("Timer");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",null,[u,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.duration=e})},c,512),[[o.bM,t.duration]])]),(0,n.Wm)(s,{duration:t.duration},null,8,["duration"])])}var l=function(t,e){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},l(t,e)};function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function p(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u}Object.create;Object.create;var d=r(262);
/**
  * vue-class-component v8.0.0-rc.1
  * (c) 2015-present Evan You
  * @license MIT
  */
function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,r){return e&&v(t.prototype,e),r&&v(t,r),t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?P(t):e}function I(t){var e=j();return function(){var r,n=g(t);if(e){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}function T(t){return E(t)||k(t)||D(t)||A()}function E(t){if(Array.isArray(t))return x(t)}function k(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function D(t,e){if(t){if("string"===typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function A(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function R(t,e,r){Object.defineProperty(t,e,{get:r,enumerable:!1,configurable:!0})}function C(t,e,r){Object.defineProperty(t,e,{get:function(){return r[e].value},set:function(t){r[e].value=t},enumerable:!0,configurable:!0})}function M(t){var e=Object.getPrototypeOf(t.prototype);if(e)return e.constructor}function $(t,e){return t.hasOwnProperty(e)?t[e]:void 0}var U=function(){function t(e,r){var n=this;b(this,t),R(this,"$props",(function(){return e})),R(this,"$attrs",(function(){return r.attrs})),R(this,"$slots",(function(){return r.slots})),R(this,"$emit",(function(){return r.emit})),Object.keys(e).forEach((function(t){Object.defineProperty(n,t,{enumerable:!1,configurable:!0,writable:!0,value:e[t]})}))}return h(t,null,[{key:"registerHooks",value:function(t){var e;(e=this.__h).push.apply(e,T(t))}},{key:"with",value:function(t){var e=new t,r={};Object.keys(e).forEach((function(t){var n=e[t];r[t]=null!==n&&void 0!==n?n:null}));var n=function(t){_(r,t);var e=I(r);function r(){return b(this,r),e.apply(this,arguments)}return r}(this);return n.__b={props:r},n}},{key:"__vccOpts",get:function(){if(this===Z)return{};var t=this,e=$(t,"__c");if(e)return e;var r=O({},$(t,"__o"));t.__c=r;var n=M(t);n&&(r["extends"]=n.__vccOpts);var o=$(t,"__b");o&&(r.mixins=r.mixins||[],r.mixins.unshift(o)),r.methods=O({},r.methods),r.computed=O({},r.computed);var i=t.prototype;Object.getOwnPropertyNames(i).forEach((function(e){if("constructor"!==e)if(t.__h.indexOf(e)>-1)r[e]=i[e];else{var n=Object.getOwnPropertyDescriptor(i,e);"function"!==typeof n.value?(n.get||n.set)&&(r.computed[e]={get:n.get,set:n.set}):r.methods[e]=n.value}})),r.setup=function(e,r){var n,o=new t(e,r),i=Object.keys(o),u={},a=null;return i.forEach((function(t){void 0===o[t]||o[t]&&o[t].__s||(u[t]=(0,d.iH)(o[t]),C(o,t,u))})),i.forEach((function(t){if(o[t]&&o[t].__s){var e=o[t].__s();e instanceof Promise?(a||(a=Promise.resolve(u)),a=a.then((function(){return e.then((function(e){return u[t]=(0,d.WL)(e),u}))}))):u[t]=(0,d.WL)(e)}})),null!==(n=a)&&void 0!==n?n:u};var u=$(t,"__d");u&&u.forEach((function(t){return t(r)}));var a=["render","ssrRender","__file","__cssModules","__scopeId","__hmrId"];return a.forEach((function(e){t[e]&&(r[e]=t[e])})),r}}]),t}();U.__h=["data","beforeCreate","created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];var Z=U;function H(t){return function(e){return e.__o=t,e}}var W=r(577),z={class:"timer"};function L(t,e,r,o,i,u){return(0,n.wg)(),(0,n.iD)("div",z,(0,W.zw)(t.formatTime(t.timer)),1)}var N=r(352),V=r(496),q=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return Object.defineProperty(e,"duration",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(e,"timer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),e}return s(e,t),Object.defineProperty(e.prototype,"formatTime",{enumerable:!1,configurable:!0,writable:!0,value:function(t){var e=Math.floor(t/3600),r=Math.floor(t%3600/60),n=t%60;return"".concat(this.pad(e),":").concat(this.pad(r),":").concat(this.pad(n))}}),Object.defineProperty(e.prototype,"pad",{enumerable:!1,configurable:!0,writable:!0,value:function(t){return t.toString().padStart(2,"0")}}),Object.defineProperty(e.prototype,"playSound",{enumerable:!1,configurable:!0,writable:!0,value:function(t){t.play()}}),e=p([H({name:"Timer",props:{duration:Number},data:function(){return{timer:0,intervalId:null,prepareSound:null,bipSound:null}},created:function(){this.prepareSound=new Audio(N),this.bipSound=new Audio(V)},watch:{duration:function(t){this.startTimer()}},methods:{startTimer:function(){this.startPreparationTimer()},startPreparationTimer:function(){var t=this;clearInterval(this.intervalId),this.timer=10,this.playSound(this.prepareSound),this.intervalId=setInterval((function(){t.timer--,0===t.timer&&(clearInterval(t.intervalId),t.startShootingTimer())}),1e3)},startShootingTimer:function(){var t=this;clearInterval(this.intervalId),this.timer=this.duration,this.playSound(this.bipSound),this.intervalId=setInterval((function(){t.timer--,0===t.timer&&(clearInterval(t.intervalId),t.playSound(t.prepareSound))}),1e3)}}})],e),e}(Z),B=q,F=r(744);const G=(0,F.Z)(B,[["render",L],["__scopeId","data-v-df5f6f1a"]]);var J=G,K=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return Object.defineProperty(e,"duration",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),e}return s(e,t),e=p([H({name:"HomeView",components:{Timer:J},data:function(){return{duration:-1}}})],e),e}(Z),Q=K;const X=(0,F.Z)(Q,[["render",f]]);var Y=X},683:function(t,e,r){r.r(e),r.d(e,{default:function(){return s}});var n=r(252);const o={class:"about"},i=(0,n._)("h1",null,"This is an settings page",-1),u=[i];function a(t,e){return(0,n.wg)(),(0,n.iD)("div",o,u)}var c=r(744);const f={},l=(0,c.Z)(f,[["render",a]]);var s=l},496:function(t,e,r){t.exports=r.p+"media/bip.a4f3d4de.mp3"},352:function(t,e,r){t.exports=r.p+"media/prepare.81967abc.mp3"}}]);
//# sourceMappingURL=about.1c95a606.js.map