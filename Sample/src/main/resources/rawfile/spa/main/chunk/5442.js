/*! For license information please see 5442.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5442],{"32541":function(e,n,r){r.d(n,{"Z":function(){return p}});var t=r(3799),i=r(32461),a=r(53202),s=r(28673),o=r(66306),l=r(98612),c=r(955),d=r(65169),p=function(e){(0,a.Z)(ComponentState,e);var n=(0,s.Z)(ComponentState);function ComponentState(){return(0,t.Z)(this,ComponentState),n.apply(this,arguments)}return(0,i.Z)(ComponentState,[{"key":"render","value":function render(){return(0,d.jsxs)(c.View,{"className":"page-state","children":[(0,d.jsxs)(c.View,{"className":"page-state-platform","children":["组件类型：",this.props.platform]}),(0,d.jsxs)(c.View,{"className":"page-state-rate","children":["适配进度：",this.props.rate,"%"]})]})}}]),ComponentState}(l.Component);(0,o.Z)(p,"options",{"addGlobalClass":!0})},"6575":function(e,n,r){r.d(n,{"Z":function(){return p}});var t=r(3799),i=r(32461),a=r(53202),s=r(28673),o=r(66306),l=r(98612),c=r(955),d=r(65169),p=function(e){(0,a.Z)(Header,e);var n=(0,s.Z)(Header);function Header(){return(0,t.Z)(this,Header),n.apply(this,arguments)}return(0,i.Z)(Header,[{"key":"render","value":function render(){return(0,d.jsxs)(c.View,{"className":"page-head","children":[(0,d.jsx)(c.View,{"className":"page-head-title","children":this.props.title}),(0,d.jsx)(c.View,{"className":"page-head-line"}),this.props.desc?(0,d.jsx)(c.View,{"className":"page-head-desc","children":this.props.desc}):null]})}}]),Header}(l.Component);(0,o.Z)(p,"options",{"addGlobalClass":!0})},"97521":function(e,n,r){r.d(n,{"$":function(){return a}});var t=r(955),i=r(65169),a=function GridTile(e){var n=e.height,r=e.index;return(0,i.jsx)(t.View,{"className":"center","style":{"width":"100%","height":n+"px","backgroundColor":"#6bbc7a"},"children":(0,i.jsx)(t.View,{"className":"center","style":{"width":"60px","height":"60px","borderRadius":"30px","backgroundColor":"white","color":"black"},"children":r})},r)}},"45442":function(e,n,r){r.r(n),r.d(n,{"default":function(){return PageView}});var t=r(955),i=r(45607),a=r(22609),s=(r(98612),r(6575)),o=r(32541),l=r(25931),c=r(97521),d=r(65169),p=(0,l.h)(1e3,4);function PageView(){i.ZP.useLoad((function(){console.log("Page loaded.")}));p.map((function(e){return(0,d.jsx)(c.$,{"index":e.id,"height":100*e.sub},e.id)}));return(0,d.jsxs)(t.View,{"className":"components-page","children":[(0,d.jsxs)(t.View,{"className":"components-page__header","children":[(0,d.jsx)(s.Z,{"title":"GridView"}),(0,d.jsx)(o.Z,{"platform":"H5","rate":"100","children":" "})]}),(0,d.jsxs)(t.View,{"className":"grid-aligned-title","children":[(0,d.jsx)(t.View,{"children":"grid-view高度由同行最大高度子节点决定"}),(0,d.jsx)(t.Button,{"className":"btn","type":"primary","onClick":function onClick(){(0,a.T8)({"url":"/pages/component/grid-view/demo1"})},"children":"grid aligned网格布局"})]}),(0,d.jsxs)(t.View,{"className":"grid-aligned-title","children":[(0,d.jsx)(t.View,{"children":"grid-view根据子元素高度自动布局(瀑布流)"}),(0,d.jsx)(t.Button,{"className":"btn","type":"primary","onClick":function onClick(){(0,a.T8)({"url":"/pages/component/grid-view/demo2"})},"children":"grid masonry瀑布流"})]})]})}},"25931":function(e,n,r){r.d(n,{"h":function(){return t}});var t=function generateGridList(e,n){for(var r,t=[],i=0;i<e;i++)t.push({"id":i,"sub":(r=n,Math.floor(Math.random()*r)+1)});return t}},"55001":function(e,n,r){var t=r(98612),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,r){var t,a={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,t)&&!l.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{"$$typeof":i,"type":e,"key":c,"ref":d,"props":a,"_owner":o.current}}n.Fragment=a,n.jsx=q,n.jsxs=q},"65169":function(e,n,r){e.exports=r(55001)}}]);