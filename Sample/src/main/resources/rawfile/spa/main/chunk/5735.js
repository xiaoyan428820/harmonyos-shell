/*! For license information please see 5735.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5735],{"6283":function(n,e,t){t.d(e,{"Z":function(){return x}});var a=t(3799),i=t(32461),r=t(16556),c=t(53202),s=t(28673),u=t(66306),l=t(98612),o=t(20874),d=t(955),f=t(53428),p=t(65169),h=function(n){(0,c.Z)(Index,n);var e=(0,s.Z)(Index);function Index(){var n;(0,a.Z)(this,Index);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return n=e.call.apply(e,[this].concat(i)),(0,u.Z)((0,r.Z)(n),"state",{}),(0,u.Z)((0,r.Z)(n),"stringify",(function(n){var e=new Map,t=JSON.stringify(n,(function(n,t){if(void 0===t)return"undefined";if("function"==typeof t)return"function";if("object"===(0,f.Z)(t)&&null!==t){if(e.has(t))return;e.set(t,t)}return t}));return e.clear(),t})),n}return(0,i.Z)(Index,[{"key":"render","value":function render(){var n=this.props,e=n.testApi,t=n.callbackRes;return(0,p.jsx)(d.View,{"className":"callback-content","children":(0,p.jsx)(d.View,{"className":"callback-res","id":"".concat(e,"-callback"),"children":this.stringify(t)})})}}]),Index}(l.Component),x=function(n){(0,c.Z)(Index,n);var e=(0,s.Z)(Index);function Index(){var n;(0,a.Z)(this,Index);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return n=e.call.apply(e,[this].concat(i)),(0,u.Z)((0,r.Z)(n),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,u.Z)((0,r.Z)(n),"changeData",(function(e,t){var a=n.state.inputData;try{a[t]=JSON.parse(e.detail.value)}catch(n){a[t]=e.detail.value}n.setState({"inputData":a})})),(0,u.Z)((0,r.Z)(n),"submitData",(function(n,e,t){null!=e.func&&("string"==typeof n?(0,o.CF)({"icon":"error","title":"请检查参数格式"}):null==n?e.func(t):e.func(t,n))})),(0,u.Z)((0,r.Z)(n),"minusHidden",(function(){var e=n.state.hiddenNum;e>0?n.setState({"hiddenNum":e-1}):(0,o.CF)({"title":"已全部显示"})})),(0,u.Z)((0,r.Z)(n),"addHidden",(function(){var e=n.state.hiddenNum;e<n.props.buttonList.length?n.setState({"hiddenNum":e+1}):(0,o.CF)({"title":"已全部隐藏"})})),(0,u.Z)((0,r.Z)(n),"hideTextarea",(function(e){var t=n.state.textareaControl;t[e]=!t[e],n.setState({"textareaControl":t})})),(0,u.Z)((0,r.Z)(n),"isAdvancedAPI",(function(n){try{return asAPIMap.get(n)}catch(n){return!1}})),n}return(0,i.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var n=this.props.buttonList,e=[],t=[];n.forEach((function(n){n.inputData?e.push(n.inputData):e.push(void 0),t.push(!0)})),this.setState({"inputData":e})}},{"key":"render","value":function render(){var n=this,e=this.props.buttonList,t=this.state,a=t.inputData,i=t.textareaControl,r=t.hiddenNum;return(0,p.jsxs)(d.View,{"className":"button-list","children":[(0,p.jsxs)(d.View,{"className":"hidden-control","children":[(0,p.jsx)(d.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(d.View,{"className":"stepper","children":[(0,p.jsx)(d.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(d.View,{"className":"stepper-num","children":r}),(0,p.jsx)(d.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),e.map((function(e,t){return(0,p.jsxs)(d.View,{"className":"api-page-btn-area ".concat(t<r?"api-page-btn-area-hidden":""),"children":[null!=a[t]?(0,p.jsxs)(d.View,{"className":"api-textarea-area","children":[(0,p.jsx)(d.Textarea,{"className":"api-input-area ".concat(i[t]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(e.id,"-input"),"value":"string"==typeof a[t]?a[t]:JSON.stringify(a[t],null,2),"onInput":function onInput(e){n.changeData(e,t)}}),(0,p.jsx)(d.View,{"className":"textarea-control","onClick":function onClick(){n.hideTextarea(t)},"children":i[t]?"+":"-"})]}):"",(0,p.jsxs)(d.View,{"className":"api-page-btn ".concat(null==e.func?"api-page-btn-uncreate":""," ").concat(n.isAdvancedAPI(e.id)?"api-page-btn-advanced":""),"id":e.id,"onClick":function onClick(){n.submitData(a[t],e,t)},"children":[e.id,null!=e.callbackRes?(0,p.jsx)(h,{"testApi":e.id,"callbackRes":e.callbackRes}):""]})]},e.id)}))]})}}]),Index}(l.Component)},"15735":function(n,e,t){t.r(e),t.d(e,{"default":function(){return x}});var a=t(3799),i=t(32461),r=t(16556),c=t(53202),s=t(28673),u=t(66306),l=t(98612),o=t(45607),d=t(955),f=t(6283),p=t(52567),h=t(65169),x=function(n){(0,c.Z)(Index,n);var e=(0,s.Z)(Index);function Index(){var n;(0,a.Z)(this,Index);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return n=e.call.apply(e,[this].concat(i)),(0,u.Z)((0,r.Z)(n),"state",{"list":[{"id":"eventCenter","func":null},{"id":"getEnv","func":function func(e,t){p.n.consoleTest("Taro.getEnv"),p.n.consoleResult.call((0,r.Z)(n),(0,o.dU)(),e)}},{"id":"pxTransform","func":null},{"id":"initPxTransform","func":null},{"id":"getAppInfo","func":null},{"id":"getRenderer","func":null},{"id":"requirePlugin","func":function func(){var n=(0,o.IE)("test");p.n.consoleNormal("requirePlugin",n)}},{"id":"getCurrentInstance","func":null},{"id":"setGlobalDataPlugin","func":null},{"id":"getTabBar","func":null},{"id":"interceptorify","func":null}]}),n}return(0,i.Z)(Index,[{"key":"render","value":function render(){var n=this.state.list;return(0,h.jsx)(d.View,{"className":"api-page","children":(0,h.jsx)(f.Z,{"buttonList":n})})}}]),Index}(l.Component)},"55001":function(n,e,t){var a=t(98612),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(n,e,t){var a,r={},l=null,o=null;for(a in void 0!==t&&(l=""+t),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(o=e.ref),e)c.call(e,a)&&!u.hasOwnProperty(a)&&(r[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps)void 0===r[a]&&(r[a]=e[a]);return{"$$typeof":i,"type":n,"key":l,"ref":o,"props":r,"_owner":s.current}}e.Fragment=r,e.jsx=q,e.jsxs=q},"65169":function(n,e,t){n.exports=t(55001)}}]);