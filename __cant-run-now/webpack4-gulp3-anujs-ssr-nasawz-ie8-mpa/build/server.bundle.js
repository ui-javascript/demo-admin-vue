!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";(function(e){global.React=n(3),global.rematch=n(4);var t=n(5),r=global.React,o=n(6),i=n(7),s=n(8),u=t.dirname(e),c=i();c.use(s());var l=n(9);l.delimiter="?",c.set("view engine","ejs"),c.engine(".html",l.__express),n(10).install({extension:".jsx"}),c.use("/bundle",i.static(t.resolve(u,"../dist/bundle"))),c.use("/assets",i.static(t.resolve(u,"../dist/assets"))),c.use("/lib",i.static(t.resolve(u,"../dist/lib"))),c.set("views",t.resolve(u,"../dist")),c.get("/",function(e,t){var i=n(11);t.render("home.html",{title:"后端渲染",keywords:"关键字",description:"详细说明",state:JSON.stringify({ssr:"succ"}),component:o.renderToString(r.createElement(i,null))})}),c.get("/home/info",function(e,t){var i=n(12);t.render("home/info.html",{title:"后端渲染",keywords:"",description:"",state:JSON.stringify({}),component:o.renderToString(r.createElement(i,null))})}),c.get("/input",function(e,t){var i=n(13);t.render("input.html",{title:"后端渲染",keywords:"",description:"",state:JSON.stringify({}),component:o.renderToString(r.createElement(i,null))})}),c.get("/dashboard",function(e,t){var i=n(14);t.render("dashboard.html",{title:"后端渲染",keywords:"",description:"",state:JSON.stringify({}),component:o.renderToString(r.createElement(i,null))})});c.listen(8082,function(){console.log("Dev server listening at http://localhost:8082/")})}).call(this,"src/server")},function(e,t){e.exports=require("anujs/dist/ReactIE")},function(e,t){e.exports=require("anujs/dist/Rematch")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("express-boom")},function(e,t){e.exports=require("ejs")},function(e,t){e.exports=require("node-jsx")},function(e,t,n){"use strict";var r=n(0),o=n(1),i=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={ssr:""},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setState({ssr:window.__state__.ssr})},t.prototype.render=function(){console.log("---------",this);var e=this.state.ssr;return console.log(e),r.createElement("div",null,r.createElement("h2",null,"Welcome ",e,r.createElement("img",{src:"/assets/images/tongxin.png"})))},t}(r.Component);if(e.exports=i,console.log("------"),"undefined"!=typeof window){var s=document.getElementById("mainContainer");o.render(r.createElement(i,null),s)}},function(e,t,n){"use strict";var r=n(0),o=n(1),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return console.log(this.props),r.createElement("div",null,r.createElement("h2",null,"Info"))},t}(r.Component);if(e.exports=i,console.log("------"),"undefined"!=typeof window){var s=document.getElementById("mainContainer");o.render(r.createElement(i,null),s)}},function(e,t,n){"use strict";var r=n(0),o=n(1),i=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={value:r.props.defaultValue||""},r.onChange=r.onChange.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.onChange=function(e){console.log("onChange",e.target.value),this.setState({value:e.target.value}),this.props.onChange&&this.props.onChange(e)},t.prototype.render=function(){return console.log(this.props),r.createElement("div",null,r.createElement("input",{value:this.state.value,onChange:this.onChange,class:"h-input"}),r.createElement("p",null,this.state.value))},t}(r.Component);if(e.exports=i,"undefined"!=typeof window){var s=document.getElementById("mainContainer");o.render(r.createElement(i,null),s)}},function(e,t,n){"use strict";var r=n(0),o=n(1),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.createElement("div",null,r.createElement("h2",null,"Dashboard"))},t}(r.Component);if(e.exports=i,"undefined"!=typeof window){var s=document.getElementById("mainContainer");o.render(r.createElement(i,null),s)}}]);