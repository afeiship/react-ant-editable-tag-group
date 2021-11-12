/*!
 *  name: @jswork/react-ant-editable-tag-group
 *  description: Editable tag group for ant.
 *  homepage: https://github.com/afeiship/react-ant-editable-tag-group#readme
 *  version: 1.0.4
 *  date: 2021-11-12T09:13:39.366Z
 *  license: MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactAntEditableTagGroup=t():e.ReactAntEditableTagGroup=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("antd")},function(e,t){e.exports=require("@jswork/next-unique")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("@jswork/noop")},function(e,t){e.exports=require("@jswork/react-interactive-list")},function(e,t){e.exports=require("react-input-autosize")},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),u=n.n(a),i=n(4),c=n.n(i),l=n(5),f=n.n(l),s=n(2),p=n(6),y=n.n(p),m=n(3),b=n.n(m),d=n(7),v=n.n(d);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=["className","value","onChange","min","max","quick"];function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}function C(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E="react-ant-editable-tag-group",q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,r,a=_(u);function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),S(k(t=a.call(this,e)),"template",(function(e,n){var r=e.item,a=e.index,u=t.props,i=u.disabled,c=u.readOnly;return o.a.createElement(s.Tag,{key:a},o.a.createElement(v.a,{ref:function(e){return t.input=e},type:"text",size:"small",value:r,disabled:i,readOnly:c,className:"".concat(E,"__input"),onChange:t.handleInputChange.bind(k(t),a),onBlur:t.handleInputBlur.bind(k(t),a),onKeyDown:t.handleInputKeyDown}),o.a.createElement("i",{className:"".concat(E,"__close"),onClick:n}))})),S(k(t),"templateCreate",(function(e,n){return o.a.createElement(s.Button,{ref:function(e){return t.btn=e},size:"small",type:"dashed",onClick:function(){n(),setTimeout((function(){return t.input.focus()}))},className:"".concat(E,"__create")},o.a.createElement("i",{className:"".concat(E,"__plus")}),"新增")})),S(k(t),"templateDefault",(function(){return""})),S(k(t),"handleInputChange",(function(e,n){var r=t.state.value,o=t.props.onChange;r[e]=n.target.value;var a={value:r};t.setState(a,(function(){o({target:a})}))})),S(k(t),"handleInputBlur",(function(){var e=t.state.value,n=t.props.onChange,r=e.filter(Boolean).map((function(e){return e.trim()})),o={value:b()(r)};t.setState(o,(function(){n({target:o})}))})),S(k(t),"handleInputKeyDown",(function(e){var n=t.props.quick;(console.log("inEvent.key:",e.key),"Enter"===e.key)&&(!n&&e.preventDefault(),(t.btn.buttonNode||t.btn).focus())})),S(k(t),"handleInterChange",(function(e){var n=e.target.value,r=t.props.onChange,o={value:b()(n)};t.setState(o,(function(){r({target:o})}))}));var n=e.value;return t.state={value:n},t}return t=u,r=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.value;return n!==t.value?{value:n}:null}}],(n=[{key:"render",value:function(){var e=this.props,t=e.className,n=(e.value,e.onChange,e.min),r=e.max,a=(e.quick,x(e,g)),u=this.state.value;return o.a.createElement(y.a,O({min:n,max:r,items:u,template:this.template,templateCreate:this.templateCreate,templateDefault:this.templateDefault,"data-component":E,className:c()(E,t),onChange:this.handleInterChange},a))}}])&&j(t.prototype,n),r&&j(t,r),u}(r.Component);S(q,"displayName",E),S(q,"version","1.0.4"),S(q,"propTypes",{className:u.a.string,value:u.a.array,onChange:u.a.func,min:u.a.number,max:u.a.number,quick:u.a.bool,readOnly:u.a.bool,disabled:u.a.bool}),S(q,"defaultProps",{value:[],min:0,max:20,quick:!1,onChange:f.a});t.default=q}])}));
//# sourceMappingURL=index.js.map