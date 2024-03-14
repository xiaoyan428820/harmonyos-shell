/*! For license information please see 6674.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6674],{"32541":function(e,t,n){n.d(t,{"Z":function(){return h}});var a=n(3799),l=n(32461),i=n(53202),s=n(28673),r=n(66306),o=n(98612),c=n(955),u=n(65169),h=function(e){(0,i.Z)(ComponentState,e);var t=(0,s.Z)(ComponentState);function ComponentState(){return(0,a.Z)(this,ComponentState),t.apply(this,arguments)}return(0,l.Z)(ComponentState,[{"key":"render","value":function render(){return(0,u.jsxs)(c.View,{"className":"page-state","children":[(0,u.jsxs)(c.View,{"className":"page-state-platform","children":["组件类型：",this.props.platform]}),(0,u.jsxs)(c.View,{"className":"page-state-rate","children":["适配进度：",this.props.rate,"%"]})]})}}]),ComponentState}(o.Component);(0,r.Z)(h,"options",{"addGlobalClass":!0})},"6575":function(e,t,n){n.d(t,{"Z":function(){return h}});var a=n(3799),l=n(32461),i=n(53202),s=n(28673),r=n(66306),o=n(98612),c=n(955),u=n(65169),h=function(e){(0,i.Z)(Header,e);var t=(0,s.Z)(Header);function Header(){return(0,a.Z)(this,Header),t.apply(this,arguments)}return(0,l.Z)(Header,[{"key":"render","value":function render(){return(0,u.jsxs)(c.View,{"className":"page-head","children":[(0,u.jsx)(c.View,{"className":"page-head-title","children":this.props.title}),(0,u.jsx)(c.View,{"className":"page-head-line"}),this.props.desc?(0,u.jsx)(c.View,{"className":"page-head-desc","children":this.props.desc}):null]})}}]),Header}(o.Component);(0,r.Z)(h,"options",{"addGlobalClass":!0})},"16674":function(e,t,n){n.r(t),n.d(t,{"default":function(){return g}});var a=n(93865),l=n(16899),i=n(3799),s=n(32461),r=n(16556),o=n(53202),c=n(28673),u=n(66306),h=n(98612),d=n(955),p=n(6575),f=n(32541),S=n(65169),g=function(e){(0,o.Z)(PageView,e);var t=(0,c.Z)(PageView);function PageView(e){var n;return(0,i.Z)(this,PageView),n=t.call(this,e),(0,u.Z)((0,r.Z)(n),"handleInputChangeLatitude",(function(e){n.setState({"lat":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickLatitude",(0,l.Z)((0,a.Z)().mark((function _callee(){var e;return(0,a.Z)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return e=/^-?\d+(\.\d+)?$/.test(n.state.lat.toString())||0===n.state.lat?n.state.lat:"",t.next=3,n.setState({"latitude":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeLongitude",(function(e){n.setState({"lng":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickLongitude",(0,l.Z)((0,a.Z)().mark((function _callee2(){var e;return(0,a.Z)().wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return e=/^-?\d+(\.\d+)?$/.test(n.state.lng.toString())||0===n.state.lng?n.state.lng:"",t.next=3,n.setState({"longitude":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee2)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeScale",(function(e){n.setState({"sca":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickScale",(0,l.Z)((0,a.Z)().mark((function _callee3(){var e;return(0,a.Z)().wrap((function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:return e=/^\d+$/.test(n.state.sca)?n.state.sca:"",t.next=3,n.setState({"scale":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee3)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeMinScale",(function(e){n.setState({"min":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickMinScale",(0,l.Z)((0,a.Z)().mark((function _callee4(){var e;return(0,a.Z)().wrap((function _callee4$(t){for(;;)switch(t.prev=t.next){case 0:return e=/^\d+$/.test(n.state.min)?n.state.min:"",t.next=3,n.setState({"minScale":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee4)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeMaxScale",(function(e){n.setState({"max":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickMaxScale",(0,l.Z)((0,a.Z)().mark((function _callee5(){var e;return(0,a.Z)().wrap((function _callee5$(t){for(;;)switch(t.prev=t.next){case 0:return e=/^\d+$/.test(n.state.max)?n.state.max:"",t.next=3,n.setState({"maxScale":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee5)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeEnableBuilding",(function(e){n.setState({"build":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickEnableBuilding",(0,l.Z)((0,a.Z)().mark((function _callee6(){var e;return(0,a.Z)().wrap((function _callee6$(t){for(;;)switch(t.prev=t.next){case 0:return e="false"!==n.state.build||n.state.build,t.next=3,n.setState({"enableBuilding":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee6)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeEnable3D",(function(e){n.setState({"enable3d":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickEnable3d",(0,l.Z)((0,a.Z)().mark((function _callee7(){var e;return(0,a.Z)().wrap((function _callee7$(t){for(;;)switch(t.prev=t.next){case 0:return e="true"===n.state.enable3d&&n.state.enable3d,t.next=3,n.setState({"enable3D":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee7)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeSkew",(function(e){n.setState({"sk":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickEnableSkew",(0,l.Z)((0,a.Z)().mark((function _callee8(){var e;return(0,a.Z)().wrap((function _callee8$(t){for(;;)switch(t.prev=t.next){case 0:return e=/^\d+(\.\d+)?$/.test(n.state.sk)?n.state.sk:"",t.next=3,n.setState({"skew":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee8)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeEnableOverlooking",(function(e){n.setState({"overlooking":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickEnableOverlooking",(0,l.Z)((0,a.Z)().mark((function _callee9(){var e;return(0,a.Z)().wrap((function _callee9$(t){for(;;)switch(t.prev=t.next){case 0:return e="true"===n.state.overlooking&&n.state.overlooking,t.next=3,n.setState({"enableOverlooking":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee9)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeEnableAutoMaxOverlooking",(function(e){n.setState({"AutoMaxOverlooking":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickEnableAutoMaxOverlooking",(0,l.Z)((0,a.Z)().mark((function _callee10(){var e;return(0,a.Z)().wrap((function _callee10$(t){for(;;)switch(t.prev=t.next){case 0:return e="true"===n.state.AutoMaxOverlooking&&n.state.AutoMaxOverlooking,t.next=3,n.setState({"enableAutoMaxOverlooking":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee10)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeEnableTraffic",(function(e){n.setState({"Traffic":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickEnableTraffic",(0,l.Z)((0,a.Z)().mark((function _callee11(){var e;return(0,a.Z)().wrap((function _callee11$(t){for(;;)switch(t.prev=t.next){case 0:e="true"===n.state.Traffic&&n.state.Traffic,n.setState({"enableTraffic":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 2:case"end":return t.stop()}}),_callee11)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeEnableSatellite",(function(e){n.setState({"Satellite":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickEnableSatellite",(0,l.Z)((0,a.Z)().mark((function _callee12(){var e;return(0,a.Z)().wrap((function _callee12$(t){for(;;)switch(t.prev=t.next){case 0:return e="true"===n.state.Satellite&&n.state.Satellite,t.next=3,n.setState({"enableSatellite":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee12)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeRotate",(function(e){n.setState({"rotated":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickRotate",(0,l.Z)((0,a.Z)().mark((function _callee13(){var e;return(0,a.Z)().wrap((function _callee13$(t){for(;;)switch(t.prev=t.next){case 0:return e=/^\d+(\.\d+)?$/.test(n.state.rotated)?n.state.rotated:"",t.next=3,n.setState({"rotate":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee13)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeEnableScroll",(function(e){n.setState({"Scroll":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickEnableScroll",(0,l.Z)((0,a.Z)().mark((function _callee14(){var e;return(0,a.Z)().wrap((function _callee14$(t){for(;;)switch(t.prev=t.next){case 0:return e="false"!==n.state.Scroll||n.state.Scroll,t.next=3,n.setState({"enableScroll":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee14)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeShowCompass",(function(e){n.setState({"compass":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickShowCompass",(0,l.Z)((0,a.Z)().mark((function _callee15(){var e;return(0,a.Z)().wrap((function _callee15$(t){for(;;)switch(t.prev=t.next){case 0:return e="true"===n.state.compass&&n.state.compass,t.next=3,n.setState({"showCompass":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee15)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeEnableZoom",(function(e){n.setState({"zoom":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickEnableZoom",(0,l.Z)((0,a.Z)().mark((function _callee16(){var e;return(0,a.Z)().wrap((function _callee16$(t){for(;;)switch(t.prev=t.next){case 0:return e="false"!==n.state.zoom||n.state.zoom,t.next=3,n.setState({"enableZoom":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee16)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeSubkey",(function(e){n.setState({"key":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickSubkey",(0,l.Z)((0,a.Z)().mark((function _callee17(){var e;return(0,a.Z)().wrap((function _callee17$(t){for(;;)switch(t.prev=t.next){case 0:return e=n.state.key,t.next=3,n.setState({"subkey":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee17)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeLayerStyle",(function(e){n.setState({"style":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickLayerStyle",(0,l.Z)((0,a.Z)().mark((function _callee18(){var e;return(0,a.Z)().wrap((function _callee18$(t){for(;;)switch(t.prev=t.next){case 0:return e=/^\d+$/.test(n.state.style)?n.state.style:"",t.next=3,n.setState({"layerStyle":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee18)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeShowScale",(function(e){n.setState({"ShowScaled":e.target.value})})),(0,u.Z)((0,r.Z)(n),"handleClickShowScale",(0,l.Z)((0,a.Z)().mark((function _callee19(){var e;return(0,a.Z)().wrap((function _callee19$(t){for(;;)switch(t.prev=t.next){case 0:return e="true"===n.state.ShowScaled&&n.state.ShowScaled,t.next=3,n.setState({"showScale":e,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return t.stop()}}),_callee19)})))),(0,u.Z)((0,r.Z)(n),"handleInputChangeMakers",function(){var e=(0,l.Z)((0,a.Z)().mark((function _callee20(e){var t;return(0,a.Z)().wrap((function _callee20$(a){for(;;)switch(a.prev=a.next){case 0:return t=JSON.parse(e.target.value),a.next=3,n.setState({"markers":t,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return a.stop()}}),_callee20)})));return function(t){return e.apply(this,arguments)}}()),(0,u.Z)((0,r.Z)(n),"handleInputChangePolyline",function(){var e=(0,l.Z)((0,a.Z)().mark((function _callee21(e){var t;return(0,a.Z)().wrap((function _callee21$(a){for(;;)switch(a.prev=a.next){case 0:return t=JSON.parse(e.target.value),a.next=3,n.setState({"polyline":t,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return a.stop()}}),_callee21)})));return function(t){return e.apply(this,arguments)}}()),(0,u.Z)((0,r.Z)(n),"handleInputChangeCircles",function(){var e=(0,l.Z)((0,a.Z)().mark((function _callee22(e){var t;return(0,a.Z)().wrap((function _callee22$(a){for(;;)switch(a.prev=a.next){case 0:return t=JSON.parse(e.target.value),a.next=3,n.setState({"circles":t,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return a.stop()}}),_callee22)})));return function(t){return e.apply(this,arguments)}}()),(0,u.Z)((0,r.Z)(n),"handleInputChangePolygons",function(){var e=(0,l.Z)((0,a.Z)().mark((function _callee23(e){var t;return(0,a.Z)().wrap((function _callee23$(a){for(;;)switch(a.prev=a.next){case 0:return t=JSON.parse(e.target.value),a.next=3,n.setState({"polygons":t,"isShow":!1},(function(){n.setState({"isShow":!0})}));case 3:case"end":return a.stop()}}),_callee23)})));return function(t){return e.apply(this,arguments)}}()),n.state={"isShow":!0,"latitude":39.914889,"lat":39.914889,"longitude":116.403696,"lng":116.403696,"scale":16,"sca":16,"minScale":3,"min":3,"maxScale":20,"max":20,"enableBuilding":!0,"build":!0,"skew":0,"rotate":0,"showScale":!1,"subkey":"","layerStyle":1,"enableZoom":!0,"enableScroll":!0,"enableSatellite":!1,"showCompass":!1,"enable3D":!1,"enableOverlooking":!1,"enableAutoMaxOverlooking":!1,"enableTraffic":!1,"Traffic":!1,"markers":[{"id":8888888888,"latitude":39.914887,"longitude":116.403694,"title":"北京天安门","iconPath":"https://img1.baidu.com/it/u=4261206956,1866846027&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=415","rotate":0,"width":20,"height":20,"callout":{"content":"我在天安门!","color":"#ffffff","fontSize":20,"borderRadius":24,"borderWidth":10,"borderColor":"#FF0000","bgColor":"#4294ff","padding":8,"display":"BYCLICK","textAlign":"center","anchorX":10,"anchorY":-20},"label":{"content":"天安门","color":"#000","fontSize":16,"anchorX":0,"anchorY":0,"borderWidth":10,"borderColor":"red","borderRadius":10,"bgColor":"#fff","padding":20},"anchor":{"x":.5,"y":1}},{"id":666666666,"latitude":38.914887,"longitude":116.403694,"title":"北京天安门","zIndex":999,"iconPath":"https://img1.baidu.com/it/u=4261206956,1866846027&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=415","rotate":0,"width":20,"height":20,"callout":{"content":"hahhaa天安门!","color":"#ffffff","fontSize":20,"borderRadius":24,"borderWidth":10,"borderColor":"#FF0000","bgColor":"#4294ff","padding":8,"display":"BYCLICK","textAlign":"center","anchorX":10,"anchorY":-20},"label":{"content":"天安门","color":"#000","fontSize":16,"anchorX":0,"anchorY":0,"borderWidth":10,"borderColor":"red","borderRadius":10,"bgColor":"#fff","padding":20},"anchor":{"x":.5,"y":1}}],"polyline":[{"points":[{"longitude":120.219375,"latitude":30.25961},{"longitude":110.220375,"latitude":30.25961},{"longitude":111.220375,"latitude":30.26061},{"longitude":112.219375,"latitude":30.26061}],"color":"red","width":5,"dottedLine":!1}],"circles":[{"latitude":39.90923,"longitude":116.397428,"radius":1e3,"color":"green","fillColor":"yellow","strokeWidth":20},{"latitude":39.938546,"longitude":116.117278,"radius":5e3,"color":"red","fillColor":"blue","strokeWidth":10}],"polygons":[{"points":[{"latitude":31.230416,"longitude":121.473701},{"latitude":39.938102,"longitude":122.473701},{"latitude":39.934744,"longitude":123.473701},{"latitude":38.934744,"longitude":113.473701}],"fillColor":"yellow","strokeColor":"pink","strokeWidth":5}]},n}return(0,s.Z)(PageView,[{"key":"render","value":function render(){return(0,S.jsxs)(d.View,{"className":"container","children":[(0,S.jsx)(p.Z,{"title":"Map"}),(0,S.jsx)(f.Z,{"platform":"H5","rate":"60","children":" "}),this.state.isShow&&(0,S.jsx)(d.Map,{"longitude":this.state.longitude,"latitude":this.state.latitude,"scale":this.state.scale,"minScale":this.state.minScale,"maxScale":this.state.maxScale,"markers":this.state.markers,"polyline":this.state.polyline,"circles":this.state.circles,"polygons":this.state.polygons,"setting":this.state.setting,"enableBuilding":this.state.enableBuilding,"skew":this.state.skew,"rotate":this.state.rotate,"showScale":this.state.showScale,"subkey":this.state.subkey,"layerStyle":this.state.layerStyle,"enableZoom":this.state.enableZoom,"enableScroll":this.state.enableScroll,"enableSatellite":this.state.enableSatellite,"showCompass":this.state.showCompass,"enable3D":this.state.enable3D,"enableOverlooking":this.state.enableOverlooking,"enableAutoMaxOverlooking":this.state.enableAutoMaxOverlooking,"enableTraffic":this.state.enableTraffic,"onTap":function onTaps(e){console.log(e.detail)},"height":"400px","width":"400px"}),"latitude:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeLatitude}),(0,S.jsx)(d.Button,{"onClick":this.handleClickLatitude,"children":"确定"}),"longitude:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeLongitude}),(0,S.jsx)(d.Button,{"onClick":this.handleClickLongitude,"children":"确定"}),"scale:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeScale}),(0,S.jsx)(d.Button,{"onClick":this.handleClickScale,"children":"确定"}),"minScale:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeMinScale}),(0,S.jsx)(d.Button,{"onClick":this.handleClickMinScale,"children":"确定"}),"maxScale:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeMaxScale}),(0,S.jsx)(d.Button,{"onClick":this.handleClickMaxScale,"children":"确定"}),"enableBuilding:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeEnableBuilding}),(0,S.jsx)(d.Button,{"onClick":this.handleClickEnableBuilding,"children":"确定"}),"enable3D:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeEnable3D}),(0,S.jsx)(d.Button,{"onClick":this.handleClickEnable3d,"children":"确定"}),"rotate:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeRotate}),(0,S.jsx)(d.Button,{"onClick":this.handleClickRotate,"children":"确定"}),"skew:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeSkew}),(0,S.jsx)(d.Button,{"onClick":this.handleClickEnableSkew,"children":"确定"}),"enableOverlooking:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeEnableOverlooking}),(0,S.jsx)(d.Button,{"onClick":this.handleClickEnableOverlooking,"children":"确定"}),"enableAutoMaxOverlooking:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeEnableAutoMaxOverlooking}),(0,S.jsx)(d.Button,{"onClick":this.handleClickEnableAutoMaxOverlooking,"children":"确定"}),"enableTraffic:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeEnableTraffic}),(0,S.jsx)(d.Button,{"onClick":this.handleClickEnableTraffic,"children":"确定"}),"enableSatellite:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeEnableSatellite}),(0,S.jsx)(d.Button,{"onClick":this.handleClickEnableSatellite,"children":"确定"}),"enableScroll:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeEnableScroll}),(0,S.jsx)(d.Button,{"onClick":this.handleClickEnableScroll,"children":"确定"}),"enableZoom:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeEnableZoom}),(0,S.jsx)(d.Button,{"onClick":this.handleClickEnableZoom,"children":"确定"}),"showCompass:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeShowCompass}),(0,S.jsx)(d.Button,{"onClick":this.handleClickShowCompass,"children":"确定"}),"showScale:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeShowScale}),(0,S.jsx)(d.Button,{"onClick":this.handleClickShowScale,"children":"确定"}),"subkey:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeSubkey}),(0,S.jsx)(d.Button,{"onClick":this.handleClickSubkey,"children":"确定"}),"layerStyle:",(0,S.jsx)("input",{"onBlur":this.handleInputChangeLayerStyle}),(0,S.jsx)(d.Button,{"onClick":this.handleClickLayerStyle,"children":"确定"}),"markers:",(0,S.jsx)("textarea",{"onBlur":this.handleInputChangeMakers,"style":{"height":"500px","width":"300px"},"defaultValue":JSON.stringify(this.state.markers)}),"polyline:",(0,S.jsx)("textarea",{"onBlur":this.handleInputChangePolyline,"style":{"height":"300px","width":"300px"},"defaultValue":JSON.stringify(this.state.polyline)}),"circles:",(0,S.jsx)("textarea",{"onBlur":this.handleInputChangeCircles,"style":{"height":"300px","width":"300px"},"defaultValue":JSON.stringify(this.state.circles)}),"polygons:",(0,S.jsx)("textarea",{"onBlur":this.handleInputChangePolygons,"style":{"height":"300px","width":"300px"},"defaultValue":JSON.stringify(this.state.polygons)})]})}}]),PageView}(h.Component)},"55001":function(e,t,n){var a=n(98612),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var a,i={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,a)&&!o.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{"$$typeof":l,"type":e,"key":c,"ref":u,"props":i,"_owner":r.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},"65169":function(e,t,n){e.exports=n(55001)}}]);