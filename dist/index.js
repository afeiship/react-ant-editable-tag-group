!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("antd"),require("prop-types"),require("classnames"),require("@feizheng/noop"),require("@feizheng/react-interactive-list"),require("react-dom"),require("object-assign")):"function"==typeof define&&define.amd?define(["react","antd","prop-types","classnames","@feizheng/noop","@feizheng/react-interactive-list","react-dom","object-assign"],t):"object"==typeof exports?exports.ReactAntEditableTagGroup=t(require("react"),require("antd"),require("prop-types"),require("classnames"),require("@feizheng/noop"),require("@feizheng/react-interactive-list"),require("react-dom"),require("object-assign")):e.ReactAntEditableTagGroup=t(e.react,e.antd,e["prop-types"],e.classnames,e["@feizheng/noop"],e["@feizheng/react-interactive-list"],e["react-dom"],e["object-assign"])}(window,(function(e,t,n,r,o,a,u,i){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u},function(e,t){e.exports=i},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=(n(6),n(2)),u=n.n(a),i=n(3),c=n.n(i),l=n(4),f=n.n(l),s=(n(7),n(1)),p=n(5),y=n.n(p);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j="react-ant-editable-tag-group",x=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,h(t).call(this,e))).template=function(e,t){var r=e.item,a=e.index,u=n.state.value;return o.a.createElement(s.Tag,{closable:!0,key:a,onClose:t},o.a.createElement(s.Input,{ref:function(e){return n.input=e},type:"text",size:"small",defaultValue:r,className:"".concat(j,"__input"),onBlur:function(e){u[u.length-1]=e.nativeEvent.target.value,n.setState({value:u},(function(){n.handleChange({target:{value:u}})}))}}))},n.templateCreate=function(e,t){e.value;return o.a.createElement(s.Tag,{onClick:function(){t(),setTimeout((function(){n.input.focus()}))},className:"".concat(j,"__new")},o.a.createElement(s.Icon,{type:"plus"}),"新增")},n.templateDefault=function(){return""},n.handleChange=function(e){(0,n.props.onChange)(e)};var r=e.value;return n.state={value:r},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"shouldComponentUpdate",value:function(e){var t=e.value;return t!==this.state.value&&this.setState({value:t}),!0}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.value,e.onChange,d(e,["className","value","onChange"])),r=this.state.value;return o.a.createElement(y.a,b({items:r,template:this.template,templateCreate:this.templateCreate,templateDefault:this.templateDefault,"data-component":j,className:c()(j,t)},n))}}])&&v(n.prototype,r),a&&v(n,a),t}(r.Component);x.displayName=j,x.version="1.0.0",x.propTypes={className:u.a.string,value:u.a.array,onChange:u.a.func},x.defaultProps={value:[],onChange:f.a};t.default=x}])}));