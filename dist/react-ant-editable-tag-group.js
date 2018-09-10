!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["antd","classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactAntEditableTagGroup=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactAntEditableTagGroup=t(e.antd,e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,n,r,o,a){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,l,c,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(7),v=r(d),g=n(6),h=r(g),y=n(3),b=r(y),m=n(4),_=r(m),x=n(5),j=(r(x),n(2)),C=(l=s=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));c.call(n);var r=e.value;return n.state={value:r,editing:!1,inputValue:""},n}return i(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value,n=this.props.onChange;t!==this.state.value&&this.setState({value:t},function(){n({target:{value:t}})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.editing,r=t.inputValue,a=this.props,u=a.className,i=(a.value,a.newText),s=o(a,["className","value","newText"]);return v.default.createElement("section",p({},s,{className:(0,b.default)("react-ant-editable-tag-group",u)}),this.state.value.map(function(t){return v.default.createElement(j.Tag,{key:t,closable:!0,afterClose:function(){return e._onClose(t)}},t)}),n&&v.default.createElement(j.Input,{ref:function(t){return e.input=t},type:"text",size:"small",className:"react-ant-editable-tag-group-input",value:r,onChange:this._onInputChange,onBlur:this._onInputConfirm,onPressEnter:this._onInputConfirm}),!n&&v.default.createElement(j.Tag,{onClick:this._onEditing,className:"react-ant-editable-tag-group-new"},v.default.createElement(j.Icon,{type:"plus"})," ",i))}}]),t}(d.Component),s.propTypes={className:h.default.string,newText:h.default.string,value:h.default.array,onChange:h.default.func},s.defaultProps={value:[],onChange:_.default,newText:"新增"},c=function(){var e=this;this._onClose=function(t){var n=e.state.value.filter(function(e){return e!==t}),r=e.props.onChange;e.setState({value:n},function(){r({target:{value:n}})})},this._onEditing=function(){e.setState({editing:!0},function(){e.input.focus()})},this._onInputChange=function(t){e.setState({inputValue:t.target.value})},this._onInputConfirm=function(){var t=e.state,n=t.inputValue,r=t.value,o=e.props.onChange;n&&r.indexOf(n)===-1&&r.push(n),e.setState({value:r,editing:!1,inputValue:""},function(){o({target:{value:r}})})}},l);t.default=C},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-ant-editable-tag-group.js.map