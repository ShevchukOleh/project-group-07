/*! For license information please see 237.7b437e94.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[237],{2683:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"}),"Bolt");t.Z=a},8008:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.Z=a},7857:function(e,t){"use strict";var r=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,n=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,o=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,i=/\\([\u000b\u0020-\u00ff])/g,a=/([\\"])/g,s=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function u(e){var t=String(e);if(o.test(t))return t;if(t.length>0&&!n.test(t))throw new TypeError("invalid parameter value");return'"'+t.replace(a,"\\$1")+'"'}function c(e){this.parameters=Object.create(null),this.type=e}t.Q=function(e){if(!e)throw new TypeError("argument string is required");var t="object"===typeof e?function(e){var t;"function"===typeof e.getHeader?t=e.getHeader("content-type"):"object"===typeof e.headers&&(t=e.headers&&e.headers["content-type"]);if("string"!==typeof t)throw new TypeError("content-type header is missing from object");return t}(e):e;if("string"!==typeof t)throw new TypeError("argument string is required to be a string");var n=t.indexOf(";"),o=-1!==n?t.slice(0,n).trim():t.trim();if(!s.test(o))throw new TypeError("invalid media type");var a=new c(o.toLowerCase());if(-1!==n){var u,l,f;for(r.lastIndex=n;l=r.exec(t);){if(l.index!==n)throw new TypeError("invalid parameter format");n+=l[0].length,u=l[1].toLowerCase(),34===(f=l[2]).charCodeAt(0)&&-1!==(f=f.slice(1,-1)).indexOf("\\")&&(f=f.replace(i,"$1")),a.parameters[u]=f}if(n!==t.length)throw new TypeError("invalid parameter format")}return a}},7692:function(e,t,r){"use strict";r.d(t,{CUu:function(){return o}});var n=r(9983);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"}},{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}}]})(e)}},4805:function(e,t,r){var n;n=function(e){return function(){var t={"./node_modules/css-mediaquery/index.js":function(e,t){"use strict";t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=l(o),i=l(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=u(o),i=u(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!r||!o&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],s=t[3]||"",u={};return u.inverse=!!i&&"not"===i.toLowerCase(),u.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],u.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),u}))}function u(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function l(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}var s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":function(e,t,r){"use strict";var n=r("./node_modules/css-mediaquery/index.js").match,o="undefined"!==typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(o&&!r){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,s,u=o(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))r.call(a,l)&&(u[l]=a[l]);if(t){s=t(a);for(var f=0;f<s.length;f++)n.call(a,s[f])&&(u[s[f]]=a[s[f]])}}return u}},"./node_modules/prop-types/checkPropTypes.js":function(e,t,r){"use strict";var n=function(){},o=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r("./node_modules/prop-types/lib/has.js");function s(e,t,r,s,u){for(var c in e)if(a(e,c)){var l;try{if("function"!==typeof e[c]){var f=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}l=e[c](t,c,s,r,null,o)}catch(d){l=d}if(!l||l instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var p=u?u():"";n("Failed "+r+" type: "+l.message+(null!=p?p:""))}}}n=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,r){"use strict";var n=r("./node_modules/react-is/index.js"),o=r("./node_modules/object-assign/index.js"),i=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=r("./node_modules/prop-types/lib/has.js"),s=r("./node_modules/prop-types/checkPropTypes.js"),u=function(){};function c(){return null}u=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},e.exports=function(e,t){var r="function"===typeof Symbol&&Symbol.iterator,l="<<anonymous>>",f={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:m(c),arrayOf:function(e){return m((function(t,r,n,o,a){if("function"!==typeof e)return new d("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new d("Invalid "+o+" `"+a+"` of type `"+b(s)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<s.length;u++){var c=e(s,u,n,o,a+"["+u+"]",i);if(c instanceof Error)return c}return null}))},element:m((function(t,r,n,o,i){var a=t[r];return e(a)?null:new d("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,o,i){var a=e[t];return n.isValidElementType(a)?null:new d("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||l;return new d("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:l)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,r,n,o){return v(e[t])?null:new d("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,o,s){if("function"!==typeof e)return new d("Property `"+s+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var u=t[r],c=b(u);if("object"!==c)return new d("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var l in u)if(a(u,l)){var f=e(u,l,n,o,s+"."+l,i);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return u(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c;function t(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(p(a,e[s]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===g(t)?String(t):t}));return new d("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+u+".")}return m(t)},oneOfType:function(e){if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!==typeof r)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),c}return m((function(t,r,n,o,s){for(var u=[],c=0;c<e.length;c++){var l=(0,e[c])(t,r,n,o,s,i);if(null==l)return null;l.data&&a(l.data,"expectedType")&&u.push(l.data.expectedType)}return new d("Invalid "+o+" `"+s+"` supplied to `"+n+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,o,a){var s=t[r],u=b(s);if("object"!==u)return new d("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var l=e[c];if("function"!==typeof l)return h(n,o,a,c,g(l));var f=l(s,c,n,o,a+"."+c,i);if(f)return f}return null}))},exact:function(e){return m((function(t,r,n,s,u){var c=t[r],l=b(c);if("object"!==l)return new d("Invalid "+s+" `"+u+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");var f=o({},t[r],e);for(var p in f){var m=e[p];if(a(e,p)&&"function"!==typeof m)return h(n,s,u,p,g(m));if(!m)return new d("Invalid "+s+" `"+u+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=m(c,p,n,s,u+"."+p,i);if(y)return y}return null}))}};function p(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function d(e,t){this.message=e,this.data=t&&"object"===typeof t?t:{},this.stack=""}function m(e){var r={},n=0;function o(o,a,s,c,f,p,m){if(c=c||l,p=p||s,m!==i){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!==typeof console){var h=c+":"+s;!r[h]&&n<3&&(u("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[h]=!0,n++)}}return null==a[s]?o?null===a[s]?new d("The "+f+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new d("The "+f+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,f,p)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function y(e){return m((function(t,r,n,o,i,a){var s=t[r];return b(s)!==e?new d("Invalid "+o+" `"+i+"` of type `"+g(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function h(e,t,r,n,o){return new d((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if("undefined"===typeof e||null===e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,f.checkPropTypes=s,f.resetWarningCache=s.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":function(e,t,r){var n=r("./node_modules/react-is/index.js");e.exports=r("./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":function(e){e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":function(e,t){"use strict";!function(){var e="function"===typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var d=e.type;switch(d){case c:case l:case o:case a:case i:case p:return d;default:var h=d&&d.$$typeof;switch(h){case u:case f:case y:case m:case s:return h;default:return t}}case n:return t}}}var x=c,j=l,S=u,O=s,E=r,_=f,C=o,A=y,k=m,R=n,I=a,T=i,M=p,P=!1;function q(e){return w(e)===l}t.AsyncMode=x,t.ConcurrentMode=j,t.ContextConsumer=S,t.ContextProvider=O,t.Element=E,t.ForwardRef=_,t.Fragment=C,t.Lazy=A,t.Memo=k,t.Portal=R,t.Profiler=I,t.StrictMode=T,t.Suspense=M,t.isAsyncMode=function(e){return P||(P=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),q(e)||w(e)===c},t.isConcurrentMode=q,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===l||e===a||e===i||e===p||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g||e.$$typeof===h)},t.typeOf=w}()},"./node_modules/react-is/index.js":function(e,t,r){"use strict";e.exports=r("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=r[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:function(){return o},shallowEqualObjects:function(){return n}})},"./src/Component.ts":function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r("./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),s=(0,i.default)(a,r,o);return"function"===typeof t?t(s):s?t:null}},"./src/Context.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r("react").createContext)(void 0);t.default=n},"./src/index.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r("./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=n(r("./src/Component.ts"));t.default=i.default;var a=n(r("./src/toQuery.ts"));t.toQuery=a.default;var s=n(r("./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r("./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),u={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(u)},l=o(c,["type"]),f=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},l),p=n(n({},u),f);t.default={all:p,types:u,matchers:c,features:f}},"./src/toQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("./node_modules/hyphenate-style-name/index.js")),i=n(r("./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"===typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r("react"),i=n(r("./node_modules/matchmediaquery/index.js")),a=n(r("./node_modules/hyphenate-style-name/index.js")),s=r("./node_modules/shallow-equal/dist/index.esm.js"),u=n(r("./src/toQuery.ts")),c=n(r("./src/Context.ts")),l=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},f=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},p=function(e){var t=function(){return function(e){return e.query||(0,u.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return l(e)||l(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=p(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var u=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],u=f();return(0,o.useEffect)((function(){if(u){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),d=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(u),m=f();return(0,o.useEffect)((function(){m&&r&&r(d)}),[d]),(0,o.useEffect)((function(){return function(){u&&u.dispose()}}),[]),d}},react:function(t){"use strict";t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")}()},e.exports=n(r(2791))},2215:function(e,t,r){"use strict";r.d(t,{Q:function(){return _}});var n=r(3366),o=r(7462),i=r(4578);Object.create;function a(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=r(7857),u=new Map,c=function(e){return e.cloneNode(!0)},l=function(){return"file:"===window.location.protocol},f=function(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&2===n.readyState){var t=n.getResponseHeader("Content-Type");if(!t)throw new Error("Content type not found");var o=(0,s.Q)(t).type;if("image/svg+xml"!==o&&"text/plain"!==o)throw new Error("Invalid content type: ".concat(o))}if(4===n.readyState){if(404===n.status||null===n.responseXML)throw new Error(l()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(!(200===n.status||l()&&0===n.status))throw new Error("There was a problem injecting the SVG: "+n.status+" "+n.statusText);r(null,n)}}catch(i){if(n.abort(),!(i instanceof Error))throw i;r(i,n)}},n.open("GET",e),n.withCredentials=t,n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()},p={},d=function(e,t){p[e]=p[e]||[],p[e].push(t)},m=function(e,t,r){if(u.has(e)){var n=u.get(e);if(void 0===n)return void d(e,r);if(n instanceof SVGSVGElement)return void r(null,c(n))}u.set(e,void 0),d(e,r),f(e,t,(function(t,r){var n;t?u.set(e,t):(null===(n=r.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&u.set(e,r.responseXML.documentElement),function(e){for(var t=function(t,r){setTimeout((function(){if(Array.isArray(p[e])){var r=u.get(e),n=p[e][t];r instanceof SVGSVGElement&&n(null,c(r)),r instanceof Error&&n(r),t===p[e].length-1&&delete p[e]}}),0)},r=0,n=p[e].length;r<n;r++)t(r)}(e)}))},y=function(e,t,r){f(e,t,(function(e,t){var n;e?r(e):(null===(n=t.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&r(null,t.responseXML.documentElement)}))},h=0,v=[],b={},g="http://www.w3.org/1999/xlink",w=function(e,t,r,n,o,i,s){var u=e.getAttribute("data-src")||e.getAttribute("src");if(u){if(-1!==v.indexOf(e))return v.splice(v.indexOf(e),1),void(e=null);v.push(e),e.setAttribute("src",""),(n?m:y)(u,o,(function(n,o){if(!o)return v.splice(v.indexOf(e),1),e=null,void s(n);var c=e.getAttribute("id");c&&o.setAttribute("id",c);var l=e.getAttribute("title");l&&o.setAttribute("title",l);var f=e.getAttribute("width");f&&o.setAttribute("width",f);var p=e.getAttribute("height");p&&o.setAttribute("height",p);var d=Array.from(new Set(a(a(a([],(o.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();o.setAttribute("class",d);var m=e.getAttribute("style");m&&o.setAttribute("style",m),o.setAttribute("data-src",u);var y=[].filter.call(e.attributes,(function(e){return/^data-\w[\w-]*$/.test(e.name)}));if(Array.prototype.forEach.call(y,(function(e){e.name&&e.value&&o.setAttribute(e.name,e.value)})),r){var w,x,j,S,O,E={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(E).forEach((function(e){w=e,j=E[e];for(var t=function(e,t){var r;S=x[e].id,O=S+"-"+ ++h,Array.prototype.forEach.call(j,(function(e){for(var t=0,n=(r=o.querySelectorAll("["+e+'*="'+S+'"]')).length;t<n;t++){var i=r[t].getAttribute(e);i&&!i.match(new RegExp('url\\("?#'+S+'"?\\)'))||r[t].setAttribute(e,"url(#"+O+")")}}));for(var n=o.querySelectorAll("[*|href]"),i=[],a=0,s=n.length;a<s;a++){var u=n[a].getAttributeNS(g,"href");u&&u.toString()==="#"+x[e].id&&i.push(n[a])}for(var c=0,l=i.length;c<l;c++)i[c].setAttributeNS(g,"href","#"+O);x[e].id=O},r=0,n=(x=o.querySelectorAll(w+"[id]")).length;r<n;r++)t(r)}))}o.removeAttribute("xmlns:a");for(var _,C,A=o.querySelectorAll("script"),k=[],R=0,I=A.length;R<I;R++)(C=A[R].getAttribute("type"))&&"application/ecmascript"!==C&&"application/javascript"!==C&&"text/javascript"!==C||((_=A[R].innerText||A[R].textContent)&&k.push(_),o.removeChild(A[R]));if(k.length>0&&("always"===t||"once"===t&&!b[u])){for(var T=0,M=k.length;T<M;T++)new Function(k[T])(window);b[u]=!0}var P=o.querySelectorAll("style");if(Array.prototype.forEach.call(P,(function(e){e.textContent+=""})),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("xmlns:xlink",g),i(o),!e.parentNode)return v.splice(v.indexOf(e),1),e=null,void s(new Error("Parent node is null"));e.parentNode.replaceChild(o,e),v.splice(v.indexOf(e),1),e=null,s(null,o)}))}else s(new Error("Invalid data-src or src attribute"))},x=r(2007),j=r(2791),S=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],O="http://www.w3.org/2000/svg",E="http://www.w3.org/1999/xlink",_=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).initialState={hasError:!1,isLoading:!0},t.state=t.initialState,t._isMounted=!1,t.reactWrapper=void 0,t.nonReactWrapper=void 0,t.refCallback=function(e){t.reactWrapper=e},t}(0,i.Z)(t,e);var r=t.prototype;return r.renderSVG=function(){var e,t=this;if(this.reactWrapper instanceof(e=this.reactWrapper,((null==e?void 0:e.ownerDocument)||document).defaultView||window).Node){var r,n,o=this.props,i=o.desc,a=o.evalScripts,s=o.httpRequestWithCredentials,u=o.renumerateIRIElements,c=o.src,l=o.title,f=o.useRequestCache,p=this.props.onError,d=this.props.beforeInjection,m=this.props.afterInjection,y=this.props.wrapper;"svg"===y?((r=document.createElementNS(O,y)).setAttribute("xmlns",O),r.setAttribute("xmlns:xlink",E),n=document.createElementNS(O,y)):(r=document.createElement(y),n=document.createElement(y)),r.appendChild(n),n.dataset.src=c,this.nonReactWrapper=this.reactWrapper.appendChild(r);var h=function(e){t.removeSVG(),t._isMounted?t.setState((function(){return{hasError:!0,isLoading:!1}}),(function(){p(e)})):p(e)};!function(e,t){var r=void 0===t?{}:t,n=r.afterAll,o=void 0===n?function(){}:n,i=r.afterEach,a=void 0===i?function(){}:i,s=r.beforeEach,u=void 0===s?function(){}:s,c=r.cacheRequests,l=void 0===c||c,f=r.evalScripts,p=void 0===f?"never":f,d=r.httpRequestWithCredentials,m=void 0!==d&&d,y=r.renumerateIRIElements,h=void 0===y||y;if(e&&"length"in e)for(var v=0,b=0,g=e.length;b<g;b++)w(e[b],p,h,l,m,u,(function(t,r){a(t,r),e&&"length"in e&&e.length===++v&&o(v)}));else e?w(e,p,h,l,m,u,(function(t,r){a(t,r),o(1),e=null})):o(0)}(n,{afterEach:function(e,r){e?h(e):t._isMounted&&t.setState((function(){return{isLoading:!1}}),(function(){try{m(r)}catch(e){h(e)}}))},beforeEach:function(e){if(e.setAttribute("role","img"),i){var t=e.querySelector(":scope > desc");t&&e.removeChild(t);var r=document.createElement("desc");r.innerHTML=i,e.prepend(r)}if(l){var n=e.querySelector(":scope > title");n&&e.removeChild(n);var o=document.createElement("title");o.innerHTML=l,e.prepend(o)}try{d(e)}catch(a){h(a)}},cacheRequests:f,evalScripts:a,httpRequestWithCredentials:s,renumerateIRIElements:u})}},r.removeSVG=function(){var e;null!=(e=this.nonReactWrapper)&&e.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},r.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},r.componentDidUpdate=function(e){var t=this;(function(e,t){for(var r in e)if(!(r in t))return!0;for(var n in t)if(e[n]!==t[n])return!0;return!1})((0,o.Z)({},e),this.props)&&this.setState((function(){return t.initialState}),(function(){t.removeSVG(),t.renderSVG()}))},r.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},r.render=function(){var e=this.props;e.afterInjection,e.beforeInjection,e.desc,e.evalScripts;var t=e.fallback;e.httpRequestWithCredentials;var r=e.loading;e.renumerateIRIElements,e.src,e.title,e.useRequestCache;var i=e.wrapper,a=(0,n.Z)(e,S),s=i;return j.createElement(s,(0,o.Z)({},a,{ref:this.refCallback},"svg"===i?{xmlns:O,xmlnsXlink:E}:{}),this.state.isLoading&&r&&j.createElement(r,null),this.state.hasError&&t&&j.createElement(t,null))},t}(j.Component);_.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"},_.propTypes={afterInjection:x.func,beforeInjection:x.func,desc:x.string,evalScripts:x.oneOf(["always","once","never"]),fallback:x.oneOfType([x.func,x.object,x.string]),httpRequestWithCredentials:x.bool,loading:x.oneOfType([x.func,x.object,x.string]),onError:x.func,renumerateIRIElements:x.bool,src:x.string.isRequired,title:x.string,useRequestCache:x.bool,wrapper:x.oneOf(["div","span","svg"])}}}]);
//# sourceMappingURL=237.7b437e94.chunk.js.map