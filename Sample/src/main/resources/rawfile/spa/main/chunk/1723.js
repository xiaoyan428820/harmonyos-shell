/*! For license information please see 1723.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1723],{"6283":function(e,n,t){t.d(n,{"Z":function(){return Z}});var o=t(3799),c=t(32461),a=t(16556),s=t(53202),l=t(28673),i=t(66306),r=t(98612),u=t(20874),f=t(955),d=t(53428),p=t(65169),k=function(e){(0,s.Z)(Index,e);var n=(0,l.Z)(Index);function Index(){var e;(0,o.Z)(this,Index);for(var t=arguments.length,c=new Array(t),s=0;s<t;s++)c[s]=arguments[s];return e=n.call.apply(n,[this].concat(c)),(0,i.Z)((0,a.Z)(e),"state",{}),(0,i.Z)((0,a.Z)(e),"stringify",(function(e){var n=new Map,t=JSON.stringify(e,(function(e,t){if(void 0===t)return"undefined";if("function"==typeof t)return"function";if("object"===(0,d.Z)(t)&&null!==t){if(n.has(t))return;n.set(t,t)}return t}));return n.clear(),t})),e}return(0,c.Z)(Index,[{"key":"render","value":function render(){var e=this.props,n=e.testApi,t=e.callbackRes;return(0,p.jsx)(f.View,{"className":"callback-content","children":(0,p.jsx)(f.View,{"className":"callback-res","id":"".concat(n,"-callback"),"children":this.stringify(t)})})}}]),Index}(r.Component),Z=function(e){(0,s.Z)(Index,e);var n=(0,l.Z)(Index);function Index(){var e;(0,o.Z)(this,Index);for(var t=arguments.length,c=new Array(t),s=0;s<t;s++)c[s]=arguments[s];return e=n.call.apply(n,[this].concat(c)),(0,i.Z)((0,a.Z)(e),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,i.Z)((0,a.Z)(e),"changeData",(function(n,t){var o=e.state.inputData;try{o[t]=JSON.parse(n.detail.value)}catch(e){o[t]=n.detail.value}e.setState({"inputData":o})})),(0,i.Z)((0,a.Z)(e),"submitData",(function(e,n,t){null!=n.func&&("string"==typeof e?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==e?n.func(t):n.func(t,e))})),(0,i.Z)((0,a.Z)(e),"minusHidden",(function(){var n=e.state.hiddenNum;n>0?e.setState({"hiddenNum":n-1}):(0,u.CF)({"title":"已全部显示"})})),(0,i.Z)((0,a.Z)(e),"addHidden",(function(){var n=e.state.hiddenNum;n<e.props.buttonList.length?e.setState({"hiddenNum":n+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,i.Z)((0,a.Z)(e),"hideTextarea",(function(n){var t=e.state.textareaControl;t[n]=!t[n],e.setState({"textareaControl":t})})),(0,i.Z)((0,a.Z)(e),"isAdvancedAPI",(function(e){try{return asAPIMap.get(e)}catch(e){return!1}})),e}return(0,c.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.buttonList,n=[],t=[];e.forEach((function(e){e.inputData?n.push(e.inputData):n.push(void 0),t.push(!0)})),this.setState({"inputData":n})}},{"key":"render","value":function render(){var e=this,n=this.props.buttonList,t=this.state,o=t.inputData,c=t.textareaControl,a=t.hiddenNum;return(0,p.jsxs)(f.View,{"className":"button-list","children":[(0,p.jsxs)(f.View,{"className":"hidden-control","children":[(0,p.jsx)(f.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(f.View,{"className":"stepper","children":[(0,p.jsx)(f.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(f.View,{"className":"stepper-num","children":a}),(0,p.jsx)(f.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),n.map((function(n,t){return(0,p.jsxs)(f.View,{"className":"api-page-btn-area ".concat(t<a?"api-page-btn-area-hidden":""),"children":[null!=o[t]?(0,p.jsxs)(f.View,{"className":"api-textarea-area","children":[(0,p.jsx)(f.Textarea,{"className":"api-input-area ".concat(c[t]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(n.id,"-input"),"value":"string"==typeof o[t]?o[t]:JSON.stringify(o[t],null,2),"onInput":function onInput(n){e.changeData(n,t)}}),(0,p.jsx)(f.View,{"className":"textarea-control","onClick":function onClick(){e.hideTextarea(t)},"children":c[t]?"+":"-"})]}):"",(0,p.jsxs)(f.View,{"className":"api-page-btn ".concat(null==n.func?"api-page-btn-uncreate":""," ").concat(e.isAdvancedAPI(n.id)?"api-page-btn-advanced":""),"id":n.id,"onClick":function onClick(){e.submitData(o[t],n,t)},"children":[n.id,null!=n.callbackRes?(0,p.jsx)(k,{"testApi":n.id,"callbackRes":n.callbackRes}):""]})]},n.id)}))]})}}]),Index}(r.Component)},"41723":function(e,n,t){t.r(n),t.d(n,{"default":function(){return m}});var o=t(44038),c=t(3799),a=t(32461),s=t(16556),l=t(53202),i=t(28673),r=t(66306),u=t(98612),f=t(40485),d=t(20874),p=t(955),k=t(6283),Z=t(52567),h=t(65169),S={"url":"ws://192.168.48.245:3000","header":{"content-type":"application/json"},"protocols":[],"tcpNoDelay":!0},m=function(e){(0,l.Z)(Index,e);var n=(0,i.Z)(Index);function Index(){var e;(0,c.Z)(this,Index);for(var t=arguments.length,a=new Array(t),l=0;l<t;l++)a[l]=arguments[l];return e=n.call.apply(n,[this].concat(a)),(0,r.Z)((0,s.Z)(e),"state",{"task":{},"list":[{"id":"onSocketOpen","func":function func(){Z.n.consoleTest("Taro.onSocketOpen"),console.log("注册onSocketOpen, 需要websocket连接后才能触发回调"),(0,f.vp)((function(e){console.log("Taro.onSocketOpen:",e)}))}},{"id":"onSocketMessage","func":function func(){Z.n.consoleTest("Taro.onSocketMessage"),console.log("注册onSocketMessage, 需要websocket连接收到信息后才能触发回调"),(0,f.B9)((function(e){console.log("Taro.onSocketMessage:",e),(0,d.CF)({"title":e.data})}))}},{"id":"onSocketClose","func":function func(){Z.n.consoleTest("Taro.onSocketClose"),console.log("注册onSocketClose, 需要websocket关闭才能触发回调"),(0,f.ko)((function(e){console.log("Taro.onSocketClose:",e)}))}},{"id":"onSocketError","func":function func(){Z.n.consoleTest("Taro.onSocketError"),console.log("注册onSocketError, 需要websocket连接后发生错误才能触发回调"),(0,f.kx)((function(e){console.log("Taro.onSocketError:",e)}))}},{"id":"connectSocket","inputData":S,"func":function func(n,t){Z.n.consoleTest("Taro.connectSocket"),(0,f.zp)((0,o.Z)((0,o.Z)({},t),{},{"success":function success(t){Z.n.consoleSuccess.call((0,s.Z)(e),t,n)},"fail":function fail(t){Z.n.consoleFail.call((0,s.Z)(e),t,n)},"complete":function complete(t){Z.n.consoleComplete.call((0,s.Z)(e),t,n)}}))}},{"id":"sendSocketMessage","inputData":{"data":"Taro三方框架"},"func":function func(n,t){Z.n.consoleTest("Taro.sendSocketMessage"),(0,f.Mx)((0,o.Z)((0,o.Z)({},t),{},{"success":function success(t){Z.n.consoleSuccess.call((0,s.Z)(e),t,n)},"fail":function fail(t){Z.n.consoleFail.call((0,s.Z)(e),t,n)},"complete":function complete(t){Z.n.consoleComplete.call((0,s.Z)(e),t,n)}}))}},{"id":"closeSocket","inputData":{"code":1e3,"reason":"主动关闭"},"func":function func(n,t){Z.n.consoleTest("Taro.closeSocket"),(0,f.mN)((0,o.Z)((0,o.Z)({},t),{},{"success":function success(t){Z.n.consoleSuccess.call((0,s.Z)(e),t,n)},"fail":function fail(t){Z.n.consoleFail.call((0,s.Z)(e),t,n)},"complete":function complete(t){Z.n.consoleComplete.call((0,s.Z)(e),t,n)}}))}},{"id":"SocketTask","inputData":S,"func":function func(n,t){Z.n.consoleTest("Taro.SocketTask"),(0,f.zp)((0,o.Z)((0,o.Z)({},t),{},{"success":function success(t){Z.n.consoleSuccess.call((0,s.Z)(e),t,n)},"fail":function fail(t){Z.n.consoleFail.call((0,s.Z)(e),t,n)},"complete":function complete(t){Z.n.consoleComplete.call((0,s.Z)(e),t,n)}})).then((function(n){e.setState({"task":n}),n.onOpen((function(e){console.log("SocketTask.onOpen:",e)})),n.onMessage((function(e){console.log("SocketTask.onMessage:",e),(0,d.CF)({"title":e.data})})),n.onClose((function(e){console.log("SocketTask.onClose:",e)})),n.onError((function(e){console.log("SocketTask.onError:",e)}))}))}},{"id":"SocketTask.send","inputData":{"data":"Taro三方框架"},"func":function func(n,t){Z.n.consoleTest("SocketTask.send");var c=e.state.task;if(void 0===c.readyState||c.readyState!==c.OPEN)return console.log("先点击SocketTask"),void(0,d.CF)({"title":"Click SocketTask","icon":"error"});c.send((0,o.Z)((0,o.Z)({},t),{},{"success":function success(t){Z.n.consoleSuccess.call((0,s.Z)(e),t,n)},"fail":function fail(t){Z.n.consoleFail.call((0,s.Z)(e),t,n)},"complete":function complete(t){Z.n.consoleComplete.call((0,s.Z)(e),t,n)}}))}},{"id":"SocketTask.close","inputData":{"code":1e3,"reason":"主动关闭"},"func":function func(n,t){Z.n.consoleTest("SocketTask.close");var c=e.state.task;if(void 0===c.readyState||c.readyState!==c.OPEN)return console.log("先点击SocketTask"),void(0,d.CF)({"title":"Click SocketTask","icon":"error"});c.close((0,o.Z)((0,o.Z)({},t),{},{"success":function success(t){Z.n.consoleSuccess.call((0,s.Z)(e),t,n)},"fail":function fail(t){Z.n.consoleFail.call((0,s.Z)(e),t,n)},"complete":function complete(t){Z.n.consoleComplete.call((0,s.Z)(e),t,n)}}))}}]}),e}return(0,a.Z)(Index,[{"key":"render","value":function render(){var e=this.state.list;return(0,h.jsx)(p.View,{"className":"api-page","children":(0,h.jsx)(k.Z,{"buttonList":e})})}}]),Index}(u.Component)},"55001":function(e,n,t){var o=t(98612),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,t){var o,a={},r=null,u=null;for(o in void 0!==t&&(r=""+t),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,o)&&!i.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{"$$typeof":c,"type":e,"key":r,"ref":u,"props":a,"_owner":l.current}}n.Fragment=a,n.jsx=q,n.jsxs=q},"65169":function(e,n,t){e.exports=t(55001)}}]);