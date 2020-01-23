!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));window&&(window.html=function(e,...t){let n=e[0];for(let i=0;i<t.length;i++)n+=t[i],n+=e[i+1];return n});class i extends HTMLElement{static registerAAElement(e,t){customElements.get(e)||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push(e.toUpperCase()),customElements.define(e,t))}static isAAElement(e){return-1!=AANodeNames.indexOf(e.nodeName)}static createFragmentForNode(e){let t=document.createDocumentFragment();for(let n=0;n<e.childNodes.length;n++)t.append(e.childNodes[n].cloneNode(!0));return t}static createHolderForNode(e){let t=e.cloneNode(!1);return t.innerFragment=i.createFragmentForNode(e),t}static scanAndReplace(e){if("TEMPLATE"==e.nodeName)i.scanAndReplace(e.content);else if(i.isAAElement(e)){let t=i.createHolderForNode(e);e.replaceWith(t)}else for(let t=0;t<e.childNodes.length;t++)i.scanAndReplace(e.childNodes[t])}constructor(){super(),this._props=this.makePropertiesFromAttributes()}connectedCallback(){if(console.log(this.tagName,this.id," connected"),this._attachedTimestamp=(new Date).getTime(),this._debug=!0===this.debug||null===this.debug,this.innerFragment){i.scanAndReplace(this.innerFragment);for(let e=0;e<this.innerFragment.childNodes.length;e++)this.appendChild(i.copy(this.innerFragment.childNodes[e]))}}makePropertiesFromAttributes(){let e=customElements.get(this.tagName.toLowerCase()).observedAttributes;if(!e)return null;let t={};for(let n=0;n<e.length;n++){let i=this.toCamelCase(e[n]);t[i]=e[n],void 0===this[i]&&Object.defineProperty(this,i,{get:()=>{let t=this.getAttribute(e[n]);return"true"===t||"false"!==t&&t},set:t=>{this.setAttribute(e[n],t)}})}return t}toCamelCase(e){let t=e.split("-"),n=t[0];for(let e=1;e<t.length;e++)n+=t[e][0].toUpperCase()+t[e].substr(1);return n}toHyphenated(e){let t="";for(let n=0;n<e.length;n++){let i=e[n];i.toLowerCase()!==i?t+=`-${i.toLowerCase()}`:t+=i}return t}static copy(e){let t;return i.isAAElement(e)?e.innerFragment?(t=e.cloneNode(),t.innerFragment=i.createFragmentForNode(e.innerFragment)):(t=e.cloneNode(),t.innerFragment=i.createFragmentForNode(e)):t=e.cloneNode(!0),t}_dispatchDebugEvent(e){this.debug&&this.dispatchEvent(new CustomEvent("debugEvent",{detail:e,bubbles:!0}))}_dispatchEndEvent(e){this.dispatchEvent(new CustomEvent("endEvent",{bubbles:!0,detail:e}))}_getParentSession(){let e=this;for(;null!=e&&"AA-SESSION"!=e.nodeName;)e=e.parentNode;return e}}customElements.get("aa-base-element")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-BASE-ELEMENT"),customElements.define("aa-base-element",i))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AAChoose}));var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);class AAChoose extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__.a{static get observedAttributes(){return["name","should-run","debug"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>",this.originalContent=this.innerHTML}connectedCallback(){if(this._shouldRun=null===this.shouldRun||!0===this.shouldRun,this.sessionElement=this._getParentSession(),this._shouldRun)if(void 0!==this.innerFragment){_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__.a.scanAndReplace(this.innerFragment);let e=this._getNodeToInstantiate();if(0==e.length)this._dispatchEndEvent();else{for(let t=0;t<e.length;t++){let n=e[t];void 0!==n&&this.appendChild(n)}this._dispatchEndEvent()}}else 0==this.childNodes.length&&this._dispatchEndEvent()}_getNodeToInstantiate(){let e=[],t=[],n=!1;for(let i=0;i<this.innerFragment.children.length;i++){let r=this.innerFragment.children[i];"AA-WHEN"==r.nodeName?(n=this.evaluate(r),n&&e.push(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__.a.copy(r))):"AA-OTHERWISE"==r.nodeName&&t.push(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__.a.copy(r))}return 0==e.length?t:e}run(){if(this.started=!0,0===this.myFragmentChildren.length)return;if(this.fragmentChildrenCounter>=this.myFragmentChildren.length)return;let e;this.currentNode||this.formerNodes.push(this.currentNode);let t=this.myFragmentChildren[this.fragmentChildrenCounter];e=this.isHolder(t)?this.replaceHolderWithElement(t):t,this.appendChild(e),this._restoreHeldNodes(e),this.fragmentChildrenCounter+=1}evaluate(e){let t=e.getAttribute("test");return null==t||""==t?null:this.evaluateTestExpression(t)}evaluateTestExpression(test){let expr=this.replaceExpressionIdentifiersWithValues(test);try{var parseTree=Object(_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__.a)(expr);if("Literal"==parseTree.left.type&&"Literal"==parseTree.right.type)return eval(expr);throw"unknown identifiers in expression : "+expr}catch(e){console.error("parse error:",e)}}replaceExpressionIdentifiersWithValues(e){let t=this._getParentSession(),n=e.toUpperCase(),i=Object.keys(t.getDataDump()),r=i.map(e=>e.toUpperCase());for(let e in r){let a=t.getData(i[e]),s=parseInt(a);s!=a&&(s="null"===a?"null":"true"===a?"true":"false"===a?"false":`"${a}"`);let o=new RegExp(r[e],"g");n=n.replace(o,s)}return n}}_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__.a.registerAAElement("aa-choose",AAChoose)},function(e,t,n){"use strict";(function(e){t.a=function(t){var n=function(e,t){var n=new Error(e+" at character "+t);throw n.index=t,n.description=e,n},i={"-":!0,"!":!0,"~":!0,"+":!0},r={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},a=function(e){var t,n=0;for(var i in e)(t=i.length)>n&&e.hasOwnProperty(i)&&(n=t);return n},s=a(i),o=a(r),l={true:!0,false:!1,null:null},p=function(e){return r[e]||0},d=function(e,t,n){return{type:"||"===e||"&&"===e?"LogicalExpression":"BinaryExpression",operator:e,left:t,right:n}},h=function(e){return e>=48&&e<=57},u=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=128&&!r[String.fromCharCode(e)]},c=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e>=128&&!r[String.fromCharCode(e)]},f=function(e){for(var t,a,f=0,_=e.charAt,m=e.charCodeAt,y=function(t){return _.call(e,t)},g=function(t){return m.call(e,t)},b=e.length,v=function(){for(var e=g(f);32===e||9===e||10===e||13===e;)e=g(++f)},w=function(){var e,t,i=C();return v(),63!==g(f)?i:(f++,(e=w())||n("Expected expression",f),v(),58===g(f)?(f++,(t=w())||n("Expected expression",f),{type:"ConditionalExpression",test:i,consequent:e,alternate:t}):void n("Expected :",f))},x=function(){v();for(var t=e.substr(f,o),n=t.length;n>0;){if(r.hasOwnProperty(t)&&(!u(g(f))||f+t.length<e.length&&!c(g(f+t.length))))return f+=n,t;t=t.substr(0,--n)}return!1},C=function(){var e,t,i,r,a,s,o,l;if(s=E(),!(t=x()))return s;for(a={value:t,prec:p(t)},(o=E())||n("Expected expression after "+t,f),r=[s,a,o];(t=x())&&0!==(i=p(t));){for(a={value:t,prec:i};r.length>2&&i<=r[r.length-2].prec;)o=r.pop(),t=r.pop().value,s=r.pop(),e=d(t,s,o),r.push(e);(e=E())||n("Expected expression after "+t,f),r.push(a,e)}for(e=r[l=r.length-1];l>1;)e=d(r[l-1].value,r[l-2],e),l-=2;return e},E=function(){var t,n,r;if(v(),t=g(f),h(t)||46===t)return S();if(39===t||34===t)return P();if(91===t)return N();for(r=(n=e.substr(f,s)).length;r>0;){if(i.hasOwnProperty(n)&&(!u(g(f))||f+n.length<e.length&&!c(g(f+n.length))))return f+=r,{type:"UnaryExpression",operator:n,argument:E(),prefix:!0};n=n.substr(0,--r)}return!(!u(t)&&40!==t)&&T()},S=function(){for(var e,t,i="";h(g(f));)i+=y(f++);if(46===g(f))for(i+=y(f++);h(g(f));)i+=y(f++);if("e"===(e=y(f))||"E"===e){for(i+=y(f++),"+"!==(e=y(f))&&"-"!==e||(i+=y(f++));h(g(f));)i+=y(f++);h(g(f-1))||n("Expected exponent ("+i+y(f)+")",f)}return t=g(f),u(t)?n("Variable names cannot start with a number ("+i+y(f)+")",f):46===t&&n("Unexpected period",f),{type:"Literal",value:parseFloat(i),raw:i}},P=function(){for(var e,t="",i=y(f++),r=!1;f<b;){if((e=y(f++))===i){r=!0;break}if("\\"===e)switch(e=y(f++)){case"n":t+="\n";break;case"r":t+="\r";break;case"t":t+="\t";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=e}else t+=e}return r||n('Unclosed quote after "'+t+'"',f),{type:"Literal",value:t,raw:i+t+i}},A=function(){var t,i=g(f),r=f;for(u(i)?f++:n("Unexpected "+y(f),f);f<b&&(i=g(f),c(i));)f++;return t=e.slice(r,f),l.hasOwnProperty(t)?{type:"Literal",value:l[t],raw:t}:"this"===t?{type:"ThisExpression"}:{type:"Identifier",name:t}},k=function(e){for(var t,i,r=[],a=!1;f<b;){if(v(),(t=g(f))===e){a=!0,f++;break}44===t?f++:((i=w())&&"Compound"!==i.type||n("Expected comma",f),r.push(i))}return a||n("Expected "+String.fromCharCode(e),f),r},T=function(){var e,t;for(t=40===(e=g(f))?O():A(),v(),e=g(f);46===e||91===e||40===e;)f++,46===e?(v(),t={type:"MemberExpression",computed:!1,object:t,property:A()}):91===e?(t={type:"MemberExpression",computed:!0,object:t,property:w()},v(),93!==(e=g(f))&&n("Unclosed [",f),f++):40===e&&(t={type:"CallExpression",arguments:k(41),callee:t}),v(),e=g(f);return t},O=function(){f++;var e=w();if(v(),41===g(f))return f++,e;n("Unclosed (",f)},N=function(){return f++,{type:"ArrayExpression",elements:k(93)}},I=[];f<b;)59===(t=g(f))||44===t?f++:(a=w())?I.push(a):f<b&&n('Unexpected "'+y(f)+'"',f);return 1===I.length?I[0]:{type:"Compound",body:I}};if(f.version="0.3.4",f.toString=function(){return"JavaScript Expression Parser (JSEP) v"+f.version},f.addUnaryOp=function(e){return s=Math.max(e.length,s),i[e]=!0,this},f.addBinaryOp=function(e,t){return o=Math.max(e.length,o),r[e]=t,this},f.addLiteral=function(e,t){return l[e]=t,this},f.removeUnaryOp=function(e){return delete i[e],e.length===s&&(s=a(i)),this},f.removeAllUnaryOps=function(){return i={},s=0,this},f.removeBinaryOp=function(e){return delete r[e],e.length===o&&(o=a(r)),this},f.removeAllBinaryOps=function(){return r={},o=0,this},f.removeLiteral=function(e){return delete l[e],this},f.removeAllLiterals=function(){return l={},this},"undefined"==typeof exports){if(!t)return f;var _=t.jsep;t.jsep=f,f.noConflict=function(){return t.jsep===f&&(t.jsep=_),f}}else e.exports?exports=e.exports=f:exports.parse=f}(void 0)}).call(this,n(6)(e))},function(e,t){!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}({7:function(e,t,n){"use strict";n.r(t);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=!(window.ShadyDOM&&window.ShadyDOM.inUse);let r,a;function s(e){r=(!e||!e.shimcssproperties)&&(i||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(a=window.ShadyCSS.cssBuild);const o=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=r;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class p{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function d(e){return function e(t,n){let i=n.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;i=n.substring(e,t.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(f.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=i.trim();t.atRule=0===r.indexOf(y),t.atRule?0===r.indexOf(m)?t.type=h.MEDIA_RULE:r.match(f.keyframesRule)&&(t.type=h.KEYFRAMES_RULE,t.keyframesName=t.selector.split(f.multipleSpaces).pop()):0===r.indexOf(_)?t.type=h.MIXIN_RULE:t.type=h.STYLE_RULE}let r=t.rules;if(r)for(let t,i=0,a=r.length;i<a&&(t=r[i]);i++)e(t,n);return t}(function(e){let t=new p;t.start=0,t.end=e.length;let n=t;for(let i=0,r=e.length;i<r;i++)if(e[i]===u){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;n=new p,n.start=i+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[i]===c&&(n.end=i+1,n=n.parent||t);return t}(e=e.replace(f.comments,"").replace(f.port,"")),e)}const h={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},u="{",c="}",f={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},_="--",m="@media",y="@",g=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,b=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,v=/@media\s(.*)/,w=new Set;function x(e){const t=e.textContent;if(!w.has(t)){w.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function C(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function E(e,t){return e?("string"==typeof e&&(e=d(e)),t&&P(e,t),function e(t,n,i=""){let r="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(_)}(i))for(let t,a=0,s=i.length;a<s&&(t=i[a]);a++)r=e(t,n,r);else r=n?t.cssText:function(e){return function(e){return e.replace(f.mixinApply,"").replace(f.varApply,"")}(e=function(e){return e.replace(f.customProp,"").replace(f.mixinProp,"")}(e))}(t.cssText),r=r.trim(),r&&(r="  "+r+"\n")}return r&&(t.selector&&(i+=t.selector+" "+u+"\n"),i+=r,t.selector&&(i+=c+"\n\n")),i}(e,l)):""}function S(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=d(e.textContent)),e.__cssRules||null}function P(e,t,n,i){if(!e)return;let r=!1,a=e.type;if(i&&a===h.MEDIA_RULE){let t=e.selector.match(v);t&&(window.matchMedia(t[1]).matches||(r=!0))}a===h.STYLE_RULE?t(e):n&&a===h.KEYFRAMES_RULE?n(e):a===h.MIXIN_RULE&&(r=!0);let s=e.rules;if(s&&!r)for(let e,r=0,a=s.length;r<a&&(e=s[r]);r++)P(e,t,n,i)}function A(e){return""!==function(e){if(void 0!==a)return a;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}(e)}function k(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function T(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyDOM&&window.ShadyDOM.wrap;const O=/;\s*/m,N=/^\s*(initial)|(inherit)\s*$/,I=/\s*!important/;class M{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let D=null;class L{constructor(){this._currentElement=null,this._measureElement=null,this._map=new M}detectMixin(e){return function(e){const t=b.test(e)||g.test(e);return b.lastIndex=0,g.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let e=0;e<n.length;e++){const r=n[e];C(r)?i||(x(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=S(e);return this.transformRules(n,t),e.textContent=E(n),n}transformCustomStyle(e){let t=S(e);return P(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=E(t),t}transformRules(e,t){this._currentElement=t,P(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(g,(e,n,i,r)=>this._produceCssProperties(e,n,i,r,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let i=!1;return P(t,t=>{i=i||t===e,i||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=b.exec(e);){let i=n[0],r=n[1],a=n.index,s=a+i.indexOf("@apply"),o=a+i.length,l=e.slice(0,s),p=e.slice(o),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let h=this._atApplyToCssProperties(r,d);e=`${l}${h}${p}`,b.lastIndex=a+h.length}return e}_atApplyToCssProperties(e,t){e=e.replace(O,"");let n=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let r,a,s;this._currentElement&&(i.dependants[this._currentElement]=!0);const o=i.properties;for(r in o)s=t&&t[r],a=[r,": var(",e,"_-_",r],s&&a.push(",",s.replace(I,"")),a.push(")"),I.test(o[r])&&a.push(" !important"),n.push(a.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=N.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,i,r=e.split(";"),a={};for(let e,s,o=0;o<r.length;o++)e=r[o],e&&(s=e.split(":"),s.length>1&&(n=s[0].trim(),i=s.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(n,i)),a[n]=i));return a}_invalidateMixinEntry(e){if(D)for(let t in e.dependants)t!==this._currentElement&&D(t)}_produceCssProperties(e,t,n,i,r){if(n&&function e(t,n){let i=t.indexOf("var(");if(-1===i)return n(t,"","","");let r=function(e,t){let n=0;for(let i=t,r=e.length;i<r;i++)if("("===e[i])n++;else if(")"===e[i]&&0==--n)return i;return-1}(t,i+3),a=t.substring(i+4,r),s=t.substring(0,i),o=e(t.substring(r+1),n),l=a.indexOf(",");return-1===l?n(s,a.trim(),"",o):n(s,a.substring(0,l).trim(),a.substring(l+1).trim(),o)}(n,(e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)}),!i)return e;let a=this._consumeCssProperties(""+i,r),s=e.slice(0,e.indexOf("--")),o=this._cssTextToMap(a,!0),l=o,p=this._map.get(t),d=p&&p.properties;d?l=Object.assign(Object.create(d),o):this._map.set(t,l);let h,u,c=[],f=!1;for(h in l)u=o[h],void 0===u&&(u="initial"),!d||h in d||(f=!0),c.push(`${t}_-_${h}: ${u}`);return f&&this._invalidateMixinEntry(p),p&&(p.properties=l),n&&(s=`${e};${s}`),`${s}${c.join("; ")};`}}L.prototype.detectMixin=L.prototype.detectMixin,L.prototype.transformStyle=L.prototype.transformStyle,L.prototype.transformCustomStyle=L.prototype.transformCustomStyle,L.prototype.transformRules=L.prototype.transformRules,L.prototype.transformRule=L.prototype.transformRule,L.prototype.transformTemplate=L.prototype.transformTemplate,L.prototype._separator="_-_",Object.defineProperty(L.prototype,"invalidCallback",{get:()=>D,set(e){D=e}});var R=L,F={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const B="_applyShimCurrentVersion",H="_applyShimNextVersion",$=Promise.resolve();function V(e){let t=F[e];t&&function(e){e[B]=e[B]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[H]=(e[H]||0)+1}(t)}function z(e){return e[B]===e[H]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let j,U=null,q=window.HTMLImports&&window.HTMLImports.whenReady||null;function K(e){requestAnimationFrame((function(){q?q(e):(U||(U=new Promise(e=>{j=e}),"complete"===document.readyState?j():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&j()})),U.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Y="__shadyCSSCachedStyle";let J=null,W=null;class X{constructor(){this.customStyles=[],this.enqueued=!1,K(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&W&&(this.enqueued=!0,K(W))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Y])return e[Y];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[Y])continue;const i=this.getStyleForCustomStyle(n);if(i){const e=i.__appliedElement||i;J&&J(e),n[Y]=e}}return e}}X.prototype.addCustomStyle=X.prototype.addCustomStyle,X.prototype.getStyleForCustomStyle=X.prototype.getStyleForCustomStyle,X.prototype.processStyles=X.prototype.processStyles,Object.defineProperties(X.prototype,{transformCallback:{get:()=>J,set(e){J=e}},validateCallback:{get:()=>W,set(e){let t=!1;W||(t=!0),W=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const G=new R;class Z{constructor(){this.customStyleInterface=null,G.invalidCallback=V}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{G.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),A(e))return;F[t]=e;let n=G.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&G.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&k(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,n="",i="";return t?t.indexOf("-")>-1?n=t:(i=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,i=e.extends),{is:n,typeExtension:i}}(e),n=F[t];if((!n||!A(n))&&n&&!z(n)){(function(e){return!z(e)&&e._applyShimValidatingVersion===e[H]})(n)||(this.prepareTemplate(n,t),function(e){e._applyShimValidatingVersion=e[H],e._validating||(e._validating=!0,$.then((function(){e[B]=e[H],e._validating=!1})))}(n));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=E(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Z;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,i){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>T(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:l,nativeShadow:i,cssBuild:a,disableRuntime:o},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=G,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Q,ee,te=/(url\()([^)]*)(\))/g,ne=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function ie(e,t){if(e&&ne.test(e))return e;if("//"===e)return e;if(void 0===Q){Q=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Q="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),Q)try{return new URL(e,t).href}catch(t){return e}return ee||(ee=document.implementation.createHTMLDocument("temp"),ee.base=ee.createElement("base"),ee.head.appendChild(ee.base),ee.anchor=ee.createElement("a"),ee.body.appendChild(ee.anchor)),ee.base.href=t,ee.anchor.href=e,ee.anchor.href||e}function re(e,t){return e.replace(te,(function(e,n,i,r){return n+"'"+ie(i.replace(/["']/g,""),t)+"'"+r}))}function ae(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let se=ae(document.baseURI||window.location.href),oe=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,le=0;function pe(){}pe.prototype.__mixinApplications,pe.prototype.__mixinSet;const de=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=le++;return function(i){let r=i.__mixinSet;if(r&&r[n])return i;let a=t,s=a.get(i);s||(s=e(i),a.set(i,s));let o=Object.create(s.__mixinSet||r||null);return o[n]=!0,s.__mixinSet=o,s}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let he={},ue={};function ce(e,t){he[e]=ue[e.toLowerCase()]=t}function fe(e){return he[e]||ue[e.toLowerCase()]}class _e extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=fe(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,i){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=ie(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=ae(t)}return this.__assetpath}register(e){var t;(e=e||this.id)&&(this.id=e,ce(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id))}}function me(e){return _e.import(e)}function ye(e){const t=re((e.body?e.body:e).textContent,e.baseURI),n=document.createElement("style");return n.textContent=t,n}function ge(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...be(t[e]));return n}function be(e){const t=me(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...we(t));const n=t.querySelector("template");n&&e.push(...ve(n,t.assetpath)),t._styles=e}return t._styles}function ve(e,t){if(!e._styles){const n=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let r=i[e],a=r.getAttribute("include");a&&n.push(...ge(a).filter((function(e,t,n){return n.indexOf(e)===t}))),t&&(r.textContent=re(r.textContent,t)),n.push(r)}e._styles=n}return e._styles}function we(e){const t=[],n=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<n.length;e++){let i=n[e];if(i.import){const e=i.import,n=i.hasAttribute("shady-unscoped");if(n&&!e._unscopedStyle){const t=ye(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=ye(e));t.push(n?e._unscopedStyle:e._style)}}return t}function xe(e){let t=me(e);if(t&&void 0===t._cssText){let e=function(e){let t="",n=we(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),n=t.querySelector("template");n&&(e+=function(e,t){let n="";const i=ve(e,t);for(let e=0;e<i.length;e++){let t=i[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}_e.prototype.modules=he,customElements.define("dom-module",_e);const Ce=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;function Ee(e){return e.indexOf(".")>=0}function Se(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function Pe(e,t){return 0===e.indexOf(t+".")}function Ae(e,t){return 0===t.indexOf(e+".")}function ke(e,t,n){return t+n.slice(e.length)}function Te(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let i=e[n].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function Oe(e){return Array.isArray(e)?Te(e).split("."):e.toString().split(".")}function Ne(e,t,n){let i=e,r=Oe(t);for(let e=0;e<r.length;e++){if(!i)return;i=i[r[e]]}return n&&(n.path=r.join(".")),i}function Ie(e,t,n){let i=e,r=Oe(t),a=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++)if(i=i[r[e]],!i)return;i[a]=n}else i[t]=n;return r.join(".")}const Me={},De=/-[a-z]/g,Le=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Re(e){return Me[e]||(Me[e]=e.indexOf("-")<0?e:e.replace(De,e=>e[1].toUpperCase()))}function Fe(e){return Me[e]||(Me[e]=e.replace(Le,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Be=0,He=0,$e=[],Ve=0,ze=document.createTextNode("");new window.MutationObserver((function(){const e=$e.length;for(let t=0;t<e;t++){let n=$e[t];if(n)try{n()}catch(e){setTimeout(()=>{throw e})}}$e.splice(0,e),He+=e})).observe(ze,{characterData:!0});const je={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Ue={run:e=>(ze.textContent=Ve++,$e.push(e),Be++),cancel(e){const t=e-He;if(t>=0){if(!$e[t])throw new Error("invalid async handle: "+e);$e[t]=null}}},qe=Ue,Ke=de(e=>class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let i=this.__data[e],r=this._shouldPropertyChange(e,t,i);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,qe.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,i){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,i)}_attributeToProperty(e,t,n){if(!this.__serializing){const i=this.__dataAttributes,r=i&&i[e]||e;this[r]=this._deserializeValue(t,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const i=this._serializeValue(t);"class"!==n&&"name"!==n&&"slot"!==n||(e=Ce(e)),void 0===i?e.removeAttribute(n):e.setAttribute(n,i)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),Ye={};let Je=HTMLElement.prototype;for(;Je;){let e=Object.getOwnPropertyNames(Je);for(let t=0;t<e.length;t++)Ye[e[t]]=!0;Je=Object.getPrototypeOf(Je)}const We=de(e=>{const t=Ke(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Re(e[t]))}static attributeNameForProperty(e){return Fe(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!Ye[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),Xe={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ge=!1,Ze=!1;function Qe(e){let t=e.getAttribute("is");if(t&&Xe[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function et(e,t){let n=t.parentInfo&&et(e,t.parentInfo);if(!n)return e;for(let e=n.firstChild,i=0;e;e=e.nextSibling)if(t.parentIndex===i++)return e}function tt(e,t,n,i){i.id&&(t[i.id]=n)}function nt(e,t,n){if(n.events&&n.events.length)for(let i,r=0,a=n.events;r<a.length&&(i=a[r]);r++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function it(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}const rt=de(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let i=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(r,t,n)||i,function(e){(function(){if(!Ge){Ge=!0;const e=document.createElement("textarea");e.placeholder="a",Ze=e.placeholder===e.textContent}return Ze})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}(r),r.firstChild&&this._parseTemplateChildNodes(r,t,n),r.hasAttributes&&r.hasAttributes()&&(i=this._parseTemplateNodeAttributes(r,t,n)||i),i}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName)for(let i,r=e.firstChild,a=0;r;r=i){if("template"==r.localName&&(r=Qe(r)),i=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,i=n.nextSibling,e.removeChild(n),n=i;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let s={parentIndex:a,parentInfo:n};this._parseTemplateNode(r,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),r.parentNode&&a++}}static _parseTemplateNestedTemplate(e,t,n){let i=e,r=this._parseTemplate(i,t);return(r.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,n){let i=!1,r=Array.from(e.attributes);for(let a,s=r.length-1;a=r[s];s--)i=this._parseTemplateNodeAttribute(e,t,n,a.name,a.value)||i;return i}static _parseTemplateNodeAttribute(e,t,n,i,r){return"on-"===i.slice(0,3)?(e.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:r}),!0):"id"===i&&(n.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),n=t.nodeInfoList,i=t.content||e.content,r=document.importNode(i,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let a=r.nodeList=new Array(n.length);r.$={};for(let e,t=0,i=n.length;t<i&&(e=n[t]);t++){let n=a[t]=et(r,e);tt(0,r.$,n,e),it(0,n,e),nt(this,n,e)}return r=r,r}_addMethodEventListenerToNode(e,t,n,i){let r=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(i=i||e,0,n);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let at=0;const st={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},ot=/[A-Z]/;function lt(e,t){let n=e[t];if(n){if(!e.hasOwnProperty(t)){n=e[t]=Object.create(e[t]);for(let e in n){let t=n[e],i=n[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}}else n=e[t]={};return n}function pt(e,t,n,i,r,a){if(t){let s=!1,o=at++;for(let l in n)dt(e,t,o,l,n,i,r,a)&&(s=!0);return s}return!1}function dt(e,t,n,i,r,a,s,o){let l=!1,p=t[s?Se(i):i];if(p)for(let t,d=0,h=p.length;d<h&&(t=p[d]);d++)t.info&&t.info.lastRun===n||s&&!ht(i,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,i,r,a,t.info,s,o),l=!0);return l}function ht(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!Pe(n,e))||!(!t.wildcard||!Ae(n,e))}return!0}function ut(e,t,n,i,r){let a="string"==typeof r.method?e[r.method]:r.method,s=r.property;a?a.call(e,e.__data[s],i[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function ct(e,t,n){let i=Se(t);return i!==t&&(ft(e,Fe(i)+"-changed",n[t],t),!0)}function ft(e,t,n,i){let r={value:n,queueProperty:!0};i&&(r.path=i),Ce(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function _t(e,t,n,i,r,a){let s=(a?Se(t):t)!=t?t:null,o=s?Ne(e,s):e.__data[t];s&&void 0===o&&(o=n[t]),ft(e,r.eventName,o,s)}function mt(e,t,n,i,r){let a=e.__data[t];oe&&(a=oe(a,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,a)}function yt(e,t,n,i,r){let a=Et(e,t,n,i,r),s=r.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,a,!0):e[s]=a}function gt(e,t,n,i,r,a,s){n.bindings=n.bindings||[];let o={kind:i,target:r,parts:a,literal:s,isCompound:1!==a.length};if(n.bindings.push(o),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(o)){let{event:e,negate:t}=o.parts[0];o.listenerEvent=e||Fe(r)+"-changed",o.listenerNegate=t}let l=t.nodeInfoList.length;for(let n=0;n<o.parts.length;n++){let i=o.parts[n];i.compoundIndex=n,bt(e,t,o,i,l)}}function bt(e,t,n,i,r){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let a=i.dependencies,s={index:r,binding:n,part:i,evaluator:e};for(let n=0;n<a.length;n++){let i=a[n];"string"==typeof i&&(i=Tt(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:vt,info:s,trigger:i})}}}function vt(e,t,n,i,r,a,s){let o=s[r.index],l=r.binding,p=r.part;if(a&&p.source&&t.length>p.source.length&&"property"==l.kind&&!l.isCompound&&o.__isPropertyEffectsClient&&o.__dataHasAccessor&&o.__dataHasAccessor[l.target]){let i=n[t];t=ke(p.source,l.target,t),o._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(o)}else!function(e,t,n,i,r){if(r=function(e,t,n,i){if(n.isCompound){let r=e.__dataCompoundStorage[n.target];r[i.compoundIndex]=t,t=r.join("")}return"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}(t,r,n,i),oe&&(r=oe(r,n.target,n.kind,t)),"attribute"==n.kind)e._valueToNodeAttribute(t,r,n.target);else{let i=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[st.READ_ONLY]&&t[st.READ_ONLY][i]||t._setPendingProperty(i,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,r)}}(e,o,l,p,r.evaluator._evaluateBinding(e,p,t,n,i,a))}function wt(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,r=new Array(i.length);for(let e=0;e<i.length;e++)r[e]=i[e].literal;let a=t.target;n[a]=r,t.literal&&"property"==t.kind&&("className"===a&&(e=Ce(e)),e[a]=t.literal)}}function xt(e,t,n){if(n.listenerEvent){let i=n.parts[0];e.addEventListener(n.listenerEvent,(function(e){!function(e,t,n,i,r){let a,s=e.detail,o=s&&s.path;o?(i=ke(n,i,o),a=s&&s.value):a=e.currentTarget[n],a=r?!a:a,t[st.READ_ONLY]&&t[st.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,a,!0,Boolean(o))||s&&s.queueProperty||t._invalidateProperties()}(e,t,n.target,i.source,i.negate)}))}}function Ct(e,t,n,i,r,a){a=t.static||a&&("object"!=typeof a||a[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:a};for(let r,a=0;a<t.args.length&&(r=t.args[a]);a++)r.literal||e._addPropertyEffect(r.rootProperty,n,{fn:i,info:s,trigger:r});a&&e._addPropertyEffect(t.methodName,n,{fn:i,info:s})}function Et(e,t,n,i,r){let a=e._methodHost||e,s=a[r.methodName];if(s){let i=e._marshalArgs(r.args,t,n);return s.apply(a,i)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const St=[],Pt=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function At(e){let t="";for(let n=0;n<e.length;n++)t+=e[n].literal||"";return t}function kt(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:St};return t[2].trim()?function(e,t){return t.args=e.map((function(e){let n=Tt(e);return n.literal||(t.static=!1),n}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e):e}return null}function Tt(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=Se(t),n.structured=Ee(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function Ot(e,t,n){let i=Ne(e,n);return void 0===i&&(i=t[n]),i}function Nt(e,t,n,i){e.notifyPath(n+".splices",{indexSplices:i}),e.notifyPath(n+".length",t.length)}function It(e,t,n,i,r,a){Nt(e,t,n,[{index:i,addedCount:r,removed:a,object:t,type:"splice"}])}const Mt=de(e=>{const t=rt(We(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return st}_initializeProperties(){super._initializeProperties(),Dt.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[st.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==st.READ_ONLY);let i=lt(this,t)[e];i||(i=this[t][e]=[]),i.push(n)}_removePropertyEffect(e,t,n){let i=lt(this,t)[e],r=i.indexOf(n);r>=0&&i.splice(r,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,st.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,st.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,st.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,st.COMPUTE)}_setPendingPropertyOrPath(e,t,n,i){if(i||Se(Array.isArray(e)?e[0]:e)!==e){if(!i){let n=Ne(this,e);if(!(e=Ie(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let i=e.__dataLinkedPaths;if(i){let r;for(let a in i){let s=i[a];Ae(a,t)?(r=ke(a,s,t),e._setPendingPropertyOrPath(r,n,!0,!0)):Ae(s,t)&&(r=ke(s,a,t),e._setPendingPropertyOrPath(r,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||("className"===t&&(e=Ce(e)),e[t]=n)}_setPendingProperty(e,t,n){let i=this.__dataHasPaths&&Ee(e),r=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[st.NOTIFY]&&this[st.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[st.READ_ONLY]&&this[st.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let i=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,i){let r=e[st.COMPUTE];if(r){let a=t;for(;pt(e,r,a,n,i);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}(this,t,n,i);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,i),this._flushClients(),pt(this,this[st.REFLECT],t,n,i),pt(this,this[st.OBSERVE],t,n,i),r&&function(e,t,n,i,r){let a,s,o=e[st.NOTIFY],l=at++;for(let s in t)t[s]&&(o&&dt(e,o,l,s,n,i,r)?a=!0:r&&ct(e,s,n)&&(a=!0));a&&(s=e.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,t,n,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[st.PROPAGATE]&&pt(this,this[st.PROPAGATE],e,t,n);let i=this.__templateInfo;for(;i;)pt(this,i.propertyEffects,e,t,n,i.nodeList),i=i.nextTemplateInfo}linkPaths(e,t){e=Te(e),t=Te(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Te(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};Nt(this,Ne(this,e,n),n.path,t)}get(e,t){return Ne(t||this,e)}set(e,t,n){n?Ie(n,e,t):this[st.READ_ONLY]&&this[st.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},i=Ne(this,e,n),r=i.length,a=i.push(...t);return t.length&&It(this,i,n.path,r,t.length,[]),a}pop(e){let t={path:""},n=Ne(this,e,t),i=Boolean(n.length),r=n.pop();return i&&It(this,n,t.path,n.length,0,[r]),r}splice(e,t,n,...i){let r,a={path:""},s=Ne(this,e,a);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?s.splice(t):s.splice(t,n,...i),(i.length||r.length)&&It(this,s,a.path,t,i.length,r),r}shift(e){let t={path:""},n=Ne(this,e,t),i=Boolean(n.length),r=n.shift();return i&&It(this,n,t.path,0,0,[r]),r}unshift(e,...t){let n={path:""},i=Ne(this,e,n),r=i.unshift(...t);return t.length&&It(this,i,n.path,0,t.length,[]),r}notifyPath(e,t){let n;if(1==arguments.length){let i={path:""};t=Ne(this,e,i),n=i.path}else n=Array.isArray(e)?Te(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,st.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let i={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,st.OBSERVE,{fn:ut,info:i,trigger:{name:e}}),n&&this._addPropertyEffect(t,st.OBSERVE,{fn:ut,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let n=kt(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");Ct(this,n,st.OBSERVE,Et,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,st.NOTIFY,{fn:_t,info:{eventName:Fe(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,st.REFLECT,{fn:mt,info:{attrName:t}})}_createComputedProperty(e,t,n){let i=kt(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");Ct(this,i,st.COMPUTE,yt,e,n)}_marshalArgs(e,t,n){const i=this.__data,r=[];for(let a=0,s=e.length;a<s;a++){let{name:s,structured:o,wildcard:l,value:p,literal:d}=e[a];if(!d)if(l){const e=Ae(s,t),r=Ot(i,n,e?t:s);p={path:e?t:s,value:r,base:e?Ne(i,s):r}}else p=o?Ot(i,n,s):i[s];r[a]=p}return r}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),i=this.__templateInfo==n;if(!i)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t&&(n=Object.create(n),n.wasPreBound=i,!i&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=n,n.previousTemplateInfo=e,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e){Dt.beginHosting(this);let t=super._stampTemplate(e);Dt.endHosting(this);let n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound){let e=n.childNodes=[];for(let n=t.firstChild;n;n=n.nextSibling)e.push(n)}return t.templateInfo=n,function(e,t){let{nodeList:n,nodeInfoList:i}=t;if(i.length)for(let t=0;t<i.length;t++){let r=i[t],a=n[t],s=r.bindings;if(s)for(let t=0;t<s.length;t++){let n=s[t];wt(a,n),xt(a,e,n)}a.__dataHost=e}}(this,n),this.__dataReady&&pt(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let n=t.childNodes;for(let e=0;e<n.length;e++){let t=n[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,n,i){let r=t._parseTemplateNode.call(this,e,n,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=At(t)||" ",gt(this,n,i,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,n,i,r,a){let s=this._parseBindings(a,n);if(s){let t=r,a="property";ot.test(r)?a="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),a="attribute");let o=At(s);return o&&"attribute"==a&&("class"==r&&e.hasAttribute("class")&&(o+=" "+e.getAttribute(r)),e.setAttribute(r,o)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===a&&(r=Re(r)),gt(this,n,i,a,r,s,o),!0}return t._parseTemplateNodeAttribute.call(this,e,n,i,r,a)}static _parseTemplateNestedTemplate(e,n,i){let r=t._parseTemplateNestedTemplate.call(this,e,n,i),a=i.templateInfo.hostProps;for(let e in a)gt(this,n,i,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}]);return r}static _parseBindings(e,t){let n,i=[],r=0;for(;null!==(n=Pt.exec(e));){n.index>r&&i.push({literal:e.slice(r,n.index)});let a=n[1][0],s=Boolean(n[2]),o=n[3].trim(),l=!1,p="",d=-1;"{"==a&&(d=o.indexOf("::"))>0&&(p=o.substring(d+2),o=o.substring(0,d),l=!0);let h=kt(o),u=[];if(h){let{args:e,methodName:n}=h;for(let t=0;t<e.length;t++){let n=e[t];n.literal||u.push(n)}let i=t.dynamicFns;(i&&i[n]||h.static)&&(u.push(n),h.dynamicFn=!0)}else u.push(o);i.push({source:o,mode:a,negate:s,customEvent:l,signature:h,dependencies:u,event:p}),r=Pt.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,n,i,r,a){let s;return s=t.signature?Et(e,n,i,0,t.signature):n!=t.source?Ne(e,t.source):a&&Ee(n)?Ne(e,n):e.__data[n],t.negate&&(s=!s),s}}}),Dt=new class{constructor(){this.stack=[]}registerHost(e){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(e)}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}},Lt=[],Rt=de(e=>{const t=Ke(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let n in e){const i=e[n];t[n]="function"==typeof i?{type:i}:i}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){e=this.prototype,Lt.push(e);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(e=>this.attributeNameForProperty(e)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),Ft=window.ShadyCSS&&window.ShadyCSS.cssBuild,Bt=de(e=>{const t=Rt(Mt(e));return class extends t{static get polymerElementVersion(){return"3.3.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):e=e.cloneNode(!0)),this.prototype._template=e}static createProperties(e){for(let a in e)t=this.prototype,n=a,r=e,(i=e[a]).computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):t._createComputedProperty(n,i.computed,r)),i.readOnly&&!t._hasReadOnlyEffect(n)?t._createReadOnlyProperty(n,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(n)?t._createReflectedProperty(n):!1===i.reflectToAttribute&&t._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),i.notify&&!t._hasNotifyEffect(n)?t._createNotifyingProperty(n):!1===i.notify&&t._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),i.observer&&t._createPropertyObserver(n,i.observer,r[i.observer]),t._addPropertyToAttributeMap(n);var t,n,i,r}static createObservers(e,t){const n=this.prototype;for(let i=0;i<e.length;i++)n._createMethodObserver(e[i],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(t=_e.import(e,"template"),0))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=ae(e.url);else{const e=_e.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=se,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let i=t[n];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return re(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;(function(e,t,n,i){if(!Ft){const r=t.content.querySelectorAll("style"),a=ve(t),s=function(e){let t=me(e);return t?we(t):[]}(n),o=t.content.firstElementChild;for(let n=0;n<s.length;n++){let r=s[n];r.textContent=e._processStyleText(r.textContent,i),t.content.insertBefore(r,o)}let l=0;for(let t=0;t<a.length;t++){let n=a[t],s=r[l];s!==n?(n=n.cloneNode(!0),s.parentNode.insertBefore(n,s)):l++,n.textContent=e._processStyleText(n.textContent,i)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)})(this,t,e,n?ie(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=Ce(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=ie(this.importPath)),ie(e,t)}static _parseTemplateContent(e,n,i){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,i)}static _addTemplatePropertyEffect(e,n,i){return t._addTemplatePropertyEffect.call(this,e,n,i)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ht{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,$t.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),$t.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof Ht?e._cancelAsync():e=new Ht,e.setConfig(t,n),e}}let $t=new Set;const Vt=function(e){$t.add(e)},zt=function(){const e=Boolean($t.size);return $t.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/};let jt="string"==typeof document.head.style.touchAction,Ut="__polymerGesturesHandled",qt="__polymerGesturesTouchAction",Kt=["mousedown","mousemove","mouseup","click"],Yt=[0,1,4,2],Jt=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Wt(e){return Kt.indexOf(e)>-1}let Xt=!1;function Gt(e){Wt(e)}!function(){try{let e=Object.defineProperty({},"passive",{get(){Xt=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Zt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Qt=[],en={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},tn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function nn(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let i=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<i.length;e++)t.push(i[e])}}return t}let rn=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[Ut]={skip:!0},"click"===e.type)){let t=!1,i=dn(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)Qt.push(i[e]);else if(n=i[e],en[n.localName]){let n=nn(i[e]);for(let e=0;e<n.length;e++)t=t||Qt.indexOf(n[e])>-1}if(i[e]===on.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function an(e){let t=Zt?["click"]:Kt;for(let n,i=0;i<t.length;i++)n=t[i],e?(Qt.length=0,document.addEventListener(n,rn,!0)):document.removeEventListener(n,rn,!0)}function sn(e){let t=e.type;if(!Wt(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Jt&&(t=Yt[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let on={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ln(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function pn(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){on.mouse.mouseIgnoreJob||an(!0),on.mouse.target=dn(e)[0],on.mouse.mouseIgnoreJob=Ht.debounce(on.mouse.mouseIgnoreJob,je.after(2500),(function(){an(),on.mouse.target=null,on.mouse.mouseIgnoreJob=null}))}),!!Xt&&{passive:!0});const dn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],hn={},un=[];function cn(e){const t=dn(e);return t.length>0?t[0]:e.target}function fn(e){let t,n=e.type,i=e.currentTarget.__polymerGestures;if(!i)return;let r=i[n];if(r){if(!e[Ut]&&(e[Ut]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(on.touch.id=t.identifier),on.touch.id!==t.identifier)return;jt||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)on.touch.x=t.clientX,on.touch.y=t.clientY,on.touch.scrollDecided=!1;else if("touchmove"===n){if(on.touch.scrollDecided)return;on.touch.scrollDecided=!0;let n=function(e){let t="auto",n=dn(e);for(let e,i=0;i<n.length;i++)if(e=n[i],e[qt]){t=e[qt];break}return t}(e),i=!1,r=Math.abs(on.touch.x-t.clientX),a=Math.abs(on.touch.y-t.clientY);e.cancelable&&("none"===n?i=!0:"pan-x"===n?i=a>r:"pan-y"===n&&(i=r>a)),i?e.preventDefault():gn("track")}}(e)}if(t=e[Ut],!t.skip){for(let n,i=0;i<un.length;i++)n=un[i],r[n.name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let i,a=0;a<un.length;a++)i=un[a],r[i.name]&&!t[i.name]&&(t[i.name]=!0,i[n](e))}}}function _n(e){un.push(e);for(let t=0;t<e.emits.length;t++)hn[e.emits[t]]=e}function mn(e,t){jt&&e instanceof HTMLElement&&Ue.run(()=>{e.style.touchAction=t}),e[qt]=t}function yn(e,t,n){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,Ce(e).dispatchEvent(i),i.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function gn(e){let t=function(e){for(let t,n=0;n<un.length;n++){t=un[n];for(let n,i=0;i<t.emits.length;i++)if(n=t.emits[i],n===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function bn(e,t,n,i){t&&yn(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(e){return gn(e)}})}function vn(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),r=Math.abs(e.y-n);return i>=5||r>=5}function wn(e,t,n){if(!t)return;let i,r=e.moves[e.moves.length-2],a=e.moves[e.moves.length-1],s=a.x-e.x,o=a.y-e.y,l=0;r&&(i=a.x-r.x,l=a.y-r.y),yn(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:s,dy:o,ddx:i,ddy:l,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let r=i;if(i=i.shadowRoot.elementFromPoint(e,t),r===i)break;i&&(n=i)}return n}(n.clientX,n.clientY)}})}function xn(e,t,n){let i=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),a=cn(n||t);!a||tn[a.localName]&&a.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=cn(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),i=e.pageX,r=e.pageY;return!(i>=n.left&&i<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(t))&&(e.prevent||yn(a,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}_n({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){pn(this.info)},mousedown:function(e){if(!sn(e))return;let t=cn(e),n=this;ln(this.info,(function(e){sn(e)||(bn("up",t,e),pn(n.info))}),(function(e){sn(e)&&bn("up",t,e),pn(n.info)})),bn("down",t,e)},touchstart:function(e){bn("down",cn(e),e.changedTouches[0],e)},touchend:function(e){bn("up",cn(e),e.changedTouches[0],e)}}),_n({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,pn(this.info)},mousedown:function(e){if(!sn(e))return;let t=cn(e),n=this,i=function(e){let i=e.clientX,r=e.clientY;vn(n.info,i,r)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&gn("tap"),n.info.addMove({x:i,y:r}),sn(e)||(n.info.state="end",pn(n.info)),t&&wn(n.info,t,e),n.info.started=!0)};ln(this.info,i,(function(e){n.info.started&&i(e),pn(n.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=cn(e),n=e.changedTouches[0],i=n.clientX,r=n.clientY;vn(this.info,i,r)&&("start"===this.info.state&&gn("tap"),this.info.addMove({x:i,y:r}),wn(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=cn(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),wn(this.info,t,n))}}),_n({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){sn(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){sn(e)&&xn(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){xn(this.info,e.changedTouches[0],e)}});const Cn=de(e=>class extends e{_addEventListenerToNode(e,t,n){(function(e,t,n){return!!hn[t]&&(function(e,t,n){let i=hn[t],r=i.deps,a=i.name,s=e.__polymerGestures;s||(e.__polymerGestures=s={});for(let t,n,i=0;i<r.length;i++)t=r[i],Zt&&Wt(t)&&"click"!==t||(n=s[t],n||(s[t]=n={_count:0}),0===n._count&&e.addEventListener(t,fn,Gt(t)),n[a]=(n[a]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),i.touchAction&&mn(e,i.touchAction)}(e,t,n),!0)})(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){(function(e,t,n){return!!hn[t]&&(function(e,t,n){let i=hn[t],r=i.deps,a=i.name,s=e.__polymerGestures;if(s)for(let t,n,i=0;i<r.length;i++)t=r[i],n=s[t],n&&n[a]&&(n[a]=(n[a]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,fn,Gt(t)));e.removeEventListener(t,n)}(e,t,n),!0)})(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}),En=/:host\(:dir\((ltr|rtl)\)\)/g,Sn=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Pn=/:dir\((?:ltr|rtl)\)/,An=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),kn=[];let Tn=null,On="";function Nn(){On=document.documentElement.getAttribute("dir")}function In(e){e.__autoDirOptOut||e.setAttribute("dir",On)}function Mn(){Nn(),On=document.documentElement.getAttribute("dir");for(let e=0;e<kn.length;e++)In(kn[e])}const Dn=de(e=>{An||Tn||(Nn(),Tn=new MutationObserver(Mn),Tn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=We(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!An&&Pn.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(En,':host([dir="$1"])'),t=t.replace(Sn,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Tn&&Tn.takeRecords().length&&Mn(),kn.push(this),In(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=kn.indexOf(this);e>-1&&kn.splice(e,1)}}}return n.__activateDir=!1,n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ln(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Rn(e,t,n){return{index:e,removed:t,addedCount:n}}function Fn(e,t){return function(e,t,n,i,r,a){let s,o=0,l=0,p=Math.min(n-t,a-r);if(0==t&&0==r&&(o=function(e,t,n){for(let i=0;i<n;i++)if(!Bn(e[i],t[i]))return i;return n}(e,i,p)),n==e.length&&a==i.length&&(l=function(e,t,n){let i=e.length,r=t.length,a=0;for(;a<n&&Bn(e[--i],t[--r]);)a++;return a}(e,i,p-o)),r+=o,a-=l,(n-=l)-(t+=o)==0&&a-r==0)return[];if(t==n){for(s=Rn(t,[],0);r<a;)s.removed.push(i[r++]);return[s]}if(r==a)return[Rn(t,[],n-t)];let d=function(e){let t=e.length-1,n=e[0].length-1,i=e[t][n],r=[];for(;t>0||n>0;){if(0==t){r.push(2),n--;continue}if(0==n){r.push(3),t--;continue}let a,s=e[t-1][n-1],o=e[t-1][n],l=e[t][n-1];a=o<l?o<s?o:s:l<s?l:s,a==s?(s==i?r.push(0):(r.push(1),i=s),t--,n--):a==o?(r.push(3),t--,i=o):(r.push(2),n--,i=l)}return r.reverse(),r}(function(e,t,n,i,r,a){let s=a-r+1,o=n-t+1,l=new Array(s);for(let e=0;e<s;e++)l[e]=new Array(o),l[e][0]=e;for(let e=0;e<o;e++)l[0][e]=e;for(let n=1;n<s;n++)for(let a=1;a<o;a++)if(Bn(e[t+a-1],i[r+n-1]))l[n][a]=l[n-1][a-1];else{let e=l[n-1][a]+1,t=l[n][a-1]+1;l[n][a]=e<t?e:t}return l}(e,t,n,i,r,a));s=void 0;let h=[],u=t,c=r;for(let e=0;e<d.length;e++)switch(d[e]){case 0:s&&(h.push(s),s=void 0),u++,c++;break;case 1:s||(s=Rn(u,[],0)),s.addedCount++,u++,s.removed.push(i[c]),c++;break;case 2:s||(s=Rn(u,[],0)),s.addedCount++,u++;break;case 3:s||(s=Rn(u,[],0)),s.removed.push(i[c]),c++}return s&&h.push(s),h}(e,0,e.length,t,0,t.length)}function Bn(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Hn(e){return"slot"===e.localName}"interactive"===document.readyState||"complete"===document.readyState?Ln():window.addEventListener("DOMContentLoaded",Ln);let $n=class{static getFlattenedNodes(e){const t=Ce(e);return Hn(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Hn(e)?Ce(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Hn(this._target)?this._listenSlots([this._target]):Ce(this._target).children&&(this._listenSlots(Ce(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Hn(this._target)?this._unlistenSlots([this._target]):Ce(this._target).children&&(this._unlistenSlots(Ce(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ue.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=Fn(t,this._effectiveNodes);for(let t,i=0;i<n.length&&(t=n[i]);i++)for(let n,i=0;i<t.removed.length&&(n=t.removed[i]);i++)e.removedNodes.push(n);for(let i,r=0;r<n.length&&(i=n[r]);r++)for(let n=i.index;n<i.index+i.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Hn(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Hn(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vn=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=zt()}while(e||t)},zn=Element.prototype,jn=zn.matches||zn.matchesSelector||zn.mozMatchesSelector||zn.msMatchesSelector||zn.oMatchesSelector||zn.webkitMatchesSelector,Un=function(e,t){return jn.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class qn{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new $n(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Ce(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=Ce(t).parentNode||Ce(t).host;return t===this.node}getOwnerRoot(){return Ce(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Ce(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=Ce(this.node).assignedSlot;for(;t;)e.push(t),t=Ce(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Ce(n).importNode(e,t)}getEffectiveChildNodes(){return $n.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let i,r=0,a=t.length;r<a&&(i=t[r]);r++)i.nodeType===Node.ELEMENT_NODE&&Un(i,e)&&n.push(i);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function Kn(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}class Yn{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}qn.prototype.cloneNode,qn.prototype.appendChild,qn.prototype.insertBefore,qn.prototype.removeChild,qn.prototype.replaceChild,qn.prototype.setAttribute,qn.prototype.removeAttribute,qn.prototype.querySelector,qn.prototype.querySelectorAll,qn.prototype.parentNode,qn.prototype.firstChild,qn.prototype.lastChild,qn.prototype.nextSibling,qn.prototype.previousSibling,qn.prototype.firstElementChild,qn.prototype.lastElementChild,qn.prototype.nextElementSibling,qn.prototype.previousElementSibling,qn.prototype.childNodes,qn.prototype.children,qn.prototype.classList,qn.prototype.textContent,qn.prototype.innerHTML;let Jn=qn;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(qn.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=qn.prototype[t])}),Kn(e.prototype,["classList"]),Jn=e,Object.defineProperties(Yn.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Wn(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){const i=n[e];if(Wn(i).getOwnerRoot()===t)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let n=0;n<t.length;n++){let i=t[n];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}(qn.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Kn(qn.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}(qn.prototype,["textContent","innerHTML","className"]);const Wn=function(e){if((e=e||document)instanceof Jn)return e;if(e instanceof Yn)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Yn(e):new Jn(e),e.__domApi=t),t},Xn=window.ShadyDOM,Gn=window.ShadyCSS;function Zn(e,t){return Ce(e).getRootNode()===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Qn=window.ShadyCSS;const ei=de(e=>{const t=Dn(Cn(Bt(e))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,n,i){t!==n&&(super.attributeChangedCallback(e,t,n,i),this.attributeChanged(e,t,n))}attributeChanged(e,t,n){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let i,r=0;r<n.length&&(i=n[r]);r++){let n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=t;let r=n.node||this;return Ce(r).dispatchEvent(i),i}listen(e,t,n){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),r=i.get(e);r||(r={},i.set(e,r));let a=t+n;r[a]||(r[a]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),r=t+n,a=i&&i[r];a&&(this._removeEventListenerFromNode(e,t,a),i[r]=null)}setScrollDirection(e,t){mn(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=Ce(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Wn(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Wn(this).getEffectiveChildNodes()}queryDistributedElements(e){return Wn(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,i=0;n=e[i];i++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Wn(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&Ce(this).contains(e)&&Ce(this).getRootNode()===Ce(e).getRootNode()}isLocalDescendant(e){return this.root===Ce(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Xn||!Gn)return null;if(!Xn.handlesDynamicScoping)return null;const n=Gn.ScopingShim;if(!n)return null;const i=n.scopeForNode(e),r=Ce(e).getRootNode(),a=e=>{if(!Zn(e,r))return;const t=Array.from(Xn.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const a=t[e];if(!Zn(a,r))continue;const s=n.currentScopeForNode(a);s!==i&&(""!==s&&n.unscopeNode(a,s),n.scopeNode(a,i))}};if(a(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.addedNodes.length;e++){const t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&a(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Qn.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=Ht.debounce(this._debouncers[e],n>0?je.after(n):Ue,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?je.run(e.bind(this),t):~Ue.run(e.bind(this))}cancelAsync(e){e<0?Ue.cancel(~e):je.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return Un(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(Ce(n).setAttribute(e,""),!0):(Ce(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,i){i=i||this,this.transform("translate3d("+e+","+t+","+n+")",i)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else if(n=Ne(this,e).indexOf(t),n>=0)return this.splice(e,n,1);return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return i.prototype.is="",i}),ti={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},ni={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},ii=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},ni);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ri(e,t,n,i){!function(e,t,n){const i=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let a=0;a<r.length;a++){let s=r[a];if(!(s in n))if(i)t[s]=e[s];else{let n=Object.getOwnPropertyDescriptor(e,s);n&&(n.configurable=!0,Object.defineProperty(t,s,n))}}}(t,e,i);for(let e in ti)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function ai(e,t){for(const n in t){const i=e[n],r=t[n];e[n]=!("value"in r)&&i&&"value"in i?Object.assign({value:i.value},r):r}}const si=function(e){let t;return t="function"==typeof e?e:si.Class(e),customElements.define(t.is,t),t
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/};function oi(e,t,n,i,r){let a;r&&(a="object"==typeof n&&null!==n,a&&(i=e.__dataTemp[t]));let s=i!==n&&(i==i||n==n);return a&&s&&(e.__dataTemp[t]=n),s}si.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(ei(HTMLElement)):ei(HTMLElement);return n=function(e,t,n){let i;const r={};class a extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let e,t=0;t<i.length;t++)e=i[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(i)for(let e=0;e<i.length;e++)ai(t,i[e].properties);return ai(t,e.properties),t}static get observers(){let t=[];if(i)for(let e,n=0;n<i.length;n++)e=i[n],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=a.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered();const t=Object.getPrototypeOf(this);let n=r.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=r.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let i=r.attributeChanged;if(i)for(let r=0;r<i.length;r++)i[r].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;i=function e(t,n,i){n=n||[];for(let r=t.length-1;r>=0;r--){let a=t[r];a?Array.isArray(a)?e(a,n):n.indexOf(a)<0&&(!i||i.indexOf(a)<0)&&n.unshift(a):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,e),a.prototype.behaviors=e?e.concat(n):i}const s=t=>{i&&function(e,t,n){for(let i=0;i<t.length;i++)ri(e,t[i],n,ii)}(t,i,r),ri(t,e,r,ni)};return s(a.prototype),a.generatedFrom=e,a}(e,n,e.behaviors),n.is=n.prototype.is=e.is,n};const li=de(e=>class extends e{_shouldPropertyChange(e,t,n){return oi(this,e,t,n,!0)}}),pi=de(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return oi(this,e,t,n,this.mutableData)}});li._mutablePropertyChange=oi;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let di=null;function hi(){return di}hi.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:hi,writable:!0}});const ui=Mt(hi),ci=li(ui),fi=Mt(class{});class _i extends fi{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,n)}}_showHideChildren(e){let t=this.children;for(let n=0;n<t.length;n++){let i=t[n];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),Ce(Ce(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&Ce(Ce(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}_i.prototype.__dataHost,_i.prototype.__templatizeOptions,_i.prototype._methodHost,_i.prototype.__templatizeOwner,_i.prototype.__hostProps;const mi=li(_i);function yi(e){let t=e.__dataHost;return t&&t._methodHost||t}function gi(e,t){return function(e,n,i){t.call(e.__templatizeOwner,n.substring("_host_".length),i[n])}}function bi(e,t){return function(e,n,i){t.call(e.__templatizeOwner,e,n,i[n])}}function vi(e,t,n){if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:_i)._parseTemplate(e),r=i.templatizeInstanceClass;r||(r=function(e,t,n){let i=n.mutableData?mi:_i;vi.mixin&&(i=vi.mixin(i));let r=class extends i{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(e),function(e,t,n,i){let r=n.hostProps||{};for(let t in i.instanceProps){delete r[t];let n=i.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:bi(t,n)})}if(i.forwardHostProp&&t.__dataHost)for(let t in r)n.hasHostProps||(n.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(r,e,t,n),r}(e,i,n),i.templatizeInstanceClass=r),function(e,t,n){let i=n.forwardHostProp;if(i&&t.hasHostProps){let r=t.templatizeTemplateClass;if(!r){let e=n.mutableData?ci:ui;r=t.templatizeTemplateClass=class extends e{};let a=t.hostProps;for(let e in a)r.prototype._addPropertyEffect("_host_"+e,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:gi(e,i)}),r.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){di=e,Object.setPrototypeOf(e,t.prototype),new t,di=null}(e,r),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}(e,i,n);let a=class extends r{};return a.prototype._methodHost=yi(e),a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=i.hostProps,a=a,a}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const wi=Cn(pi(Mt(HTMLElement)));customElements.define("dom-bind",class extends wi{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,i){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Ce(Ce(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class xi{constructor(e){this.value=e.toString()}toString(){return this.value}}const Ci=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce((t,n,i)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof xi)return function(e){if(e instanceof xi)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(n)+e[i+1],e[0]),n},Ei=Bt(HTMLElement),Si=pi(Ei);class Pi extends Si{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=Ce(Ce(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=vi(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let n=this.__instances;for(let i,r=0;r<n.length&&(i=n[r]);r++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if((i=this.as)===(r=t)||Pe(i,r)||Ae(i,r)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=n);let r=ke(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,t);this.notifyPath(r,n)}var i,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=Ht.debounce(this.__renderDebouncer,t>0?je.after(t):Ue,e.bind(this)),Vt(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Vn()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;this.__filterFn&&(t=t.filter((t,n,i)=>this.__filterFn(e[t],n,i))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n]));const n=this.__itemsIdxToInstIdx={};let i=0;const r=Math.min(t.length,this.__limit);for(;i<r;i++){let r=this.__instances[i],a=t[i],s=e[a];n[a]=i,r?(r._setPendingProperty(this.as,s),r._setPendingProperty(this.indexAs,i),r._setPendingProperty(this.itemsIndexAs,a),r._flushProperties()):this.__insertInstance(s,i,a)}for(let e=this.__instances.length-1;e>=i;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const n=Ce(t.root);for(let e=0;e<t.children.length;e++){let i=t.children[e];n.appendChild(i)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,n){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(e,t,n){let i=this.__pool.pop();i?(i._setPendingProperty(this.as,e),i._setPendingProperty(this.indexAs,t),i._setPendingProperty(this.itemsIndexAs,n),i._flushProperties()):i=this.__stampInstance(e,t,n);let r=this.__instances[t+1],a=r?r.children[0]:this;return Ce(Ce(this).parentNode).insertBefore(i.root,a),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),i=n.indexOf("."),r=i<0?n:n.substring(0,i);if(r==parseInt(r,10)){let e=i<0?"":n.substring(i+1);this.__handleObservedPaths(e);let a=this.__itemsIdxToInstIdx[r],s=this.__instances[a];if(s){let n=this.as+(e?"."+e:"");s._setPendingPropertyOrPath(n,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let n;for(;t;)if(n=t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=Ce(t).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(this.template,e)}}customElements.define(Pi.is,Pi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ai extends Ei{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Ht.debounce(this.__renderDebouncer,Ue,()=>this.__render()),Vt(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=Ce(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Ce(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Vn()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=Ce(this).parentNode;if(e){if(!this.__ctor){let e=Ce(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!Ce(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=vi(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Se(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length&&Ce(this).previousSibling!==t[t.length-1])for(let n,i=0;i<t.length&&(n=t[i]);i++)Ce(e).insertBefore(n,this)}else this.__instance=new this.__ctor,Ce(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=Ce(e[0]).parentNode;if(t){t=Ce(t);for(let n,i=0;i<e.length&&(n=e[i]);i++)t.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(Ai.is,Ai);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ki=de(e=>{let t=Bt(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=Fn(n,i);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let i=e[n];t.forEach((e,n)=>{e<i.index||(e>=i.index+i.removed.length?t.set(n,e+i.addedCount-i.removed.length):t.set(n,-1))});for(let e=0;e<i.addedCount;e++){let n=i.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach((e,i)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(i)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,i)=>{t==e++&&this.deselect(i)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(Ei);class Ti extends ki{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ti.is,Ti);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Oi=new X;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){Oi.processStyles(),k(e,t)},styleElement(e){Oi.processStyles()},styleDocument(e){Oi.processStyles(),k(document.body,e)},getComputedStyleValue:(e,t)=>T(e,t),flushCustomStyles(){},nativeCss:l,nativeShadow:i,cssBuild:a,disableRuntime:o}),window.ShadyCSS.CustomStyleInterface=Oi;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ni=window.ShadyCSS.CustomStyleInterface;class Ii extends HTMLElement{constructor(){super(),this._style=null,Ni.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),n="";for(let e=0;e<t.length;e++)n+=xe(t[e]);return n}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/}}let Mi;window.customElements.define("custom-style",Ii),Mi=li._mutablePropertyChange,Boolean,ei(HTMLElement).prototype;const Di=Ci`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Di.setAttribute("style","display: none;"),document.head.appendChild(Di.content);var Li=document.createElement("style");Li.textContent="[hidden] { display: none !important; }",document.head.appendChild(Li);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ri=Ci`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;Ri.setAttribute("style","display: none;"),document.head.appendChild(Ri.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Fi=Ci`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;Fi.setAttribute("style","display: none;"),document.head.appendChild(Fi.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Bi={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Hi={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},$i={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Vi={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},zi=/[a-z0-9*]/,ji=/U\+/,Ui=/^arrow/,qi=/^space(bar)?/,Ki=/^escape$/;function Yi(e,t){var n="";if(e){var i=e.toLowerCase();" "===i||qi.test(i)?n="space":Ki.test(i)?n="esc":1==i.length?t&&!zi.test(i)||(n=i):n=Ui.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return n}function Ji(e,t){return function(e,t){return e.key?Yi(e.key,t):e.detail&&e.detail.key?Yi(e.detail.key,t):(i="",(n=e.keyIdentifier)&&(n in Hi?i=Hi[n]:ji.test(n)?(n=parseInt(n.replace("U+","0x"),16),i=String.fromCharCode(n).toLowerCase()):i=n.toLowerCase()),i||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):$i[e]),t}(e.keyCode)||"");var n,i}(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Wi(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var n=t.split(":"),i=n[0],r=n[1];return i in Vi?(e[Vi[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=r||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const Xi={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var n=Wi(t),i=0;i<n.length;++i)if(Ji(n[i],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var n=e[0].hasModifiers;return n===t[0].hasModifiers?0:n?-1:1}))},_addKeyBinding:function(e,t){Wi(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],n=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,n]),this.keyEventTarget.addEventListener(e,n)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,n,i;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],n=e[1],i=e[2],t.removeEventListener(n,i)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var n=0;n<e.length;n++){var i=e[n][0],r=e[n][1];if(Ji(i,t)&&(this._triggerKeyHandler(i,r,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,n){var i=Object.create(e);i.keyboardEvent=n;var r=new CustomEvent(e.event,{detail:i,cancelable:!0});this[t].call(this,r),r.defaultPrevented&&n.preventDefault()}},Gi={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,n=Wn(t).localTarget;this.isLightDescendant(n)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,n=Wn(t).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Zi=[Xi,Gi];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Qi={distance:function(e,t,n,i){var r=e-n,a=t-i;return Math.sqrt(r*r+a*a)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function er(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function tr(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Wn(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}er.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var n=Qi.distance(e,t,0,0),i=Qi.distance(e,t,this.width,0),r=Qi.distance(e,t,0,this.height),a=Qi.distance(e,t,this.width,this.height);return Math.max(n,i,r,a)}},tr.MAX_RADIUS=300,tr.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=Qi.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?Qi.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,n=1.1*Math.min(Math.sqrt(e+t),tr.MAX_RADIUS)+5,i=1.1-n/tr.MAX_RADIUS*.2,r=this.mouseInteractionSeconds/i,a=n*(1-Math.pow(80,-r));return Math.abs(a)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,tr.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,tr.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new er(this.element)},draw:function(){var e,t,n;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+n+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+n+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Qi.now(),this.center?(this.xStart=t,this.yStart=n,this.slideDistance=Qi.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=n,this.slideDistance=Qi.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=Qi.now())},remove:function(){Wn(Wn(this.waveContainer).parentNode).removeChild(this.waveContainer)}},si({_template:Ci`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[Xi],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==Wn(this).parentNode.nodeType?this.keyEventTarget=Wn(this).getOwnerRoot().host:this.keyEventTarget=Wn(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new tr(this);return Wn(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const nr={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){Gi._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&Wn(t).appendChild(this._ripple),e){var n=Wn(this._rippleContainer||this),i=Wn(e).rootTarget;n.deepContains(i)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}},ir={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){Gi._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){Gi._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},rr=[Zi,Bi,nr,ir],ar=Ci`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/;ar.setAttribute("strip-whitespace",""),si({_template:ar,is:"paper-button",behaviors:[rr],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?ir._calculateElevation.apply(this):this._setElevation(0)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const sr=si({_template:Ci`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){sr.instance||(sr.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});sr.instance=null,sr.requestAvailability=function(){sr.instance||(sr.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(sr.instance)
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/};class or{constructor(e){or[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return or.types[e]&&or.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=or.types[t]=or.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=or.types[this.type];return e?Object.keys(e).map((function(e){return lr[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}or[" "]=function(){},or.types={};var lr=or.types;si({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var i=new or({type:e,key:t});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new or({type:this.type,key:e}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
let pr=null;const dr={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){pr=new or({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return pr&&pr.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/if(si({_template:Ci`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[dr],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){sr.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Wn(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Wn(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":e=/[0-9.,e-]/}return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput)),this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,n=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&n)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var n=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(n)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+n+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=dr.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const hr=Ci`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;hr.setAttribute("style","display: none;"),document.head.appendChild(hr.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ur={attached:function(){this.fire("addon-attached")},update:function(e){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/si({_template:Ci`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[ur],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const cr=Ci`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;cr.setAttribute("style","display: none;"),document.head.appendChild(cr.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const fr=Ci`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;fr.setAttribute("style","display: none;"),document.head.appendChild(fr.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const _r=Ci`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;_r.setAttribute("style","display: none;"),document.head.appendChild(_r.content),si({_template:Ci`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Re(this.attrForValue)},get _inputElement(){return Wn(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t),this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,n=0;t=this._addons[n];n++)t.update(e)},_computeInputContentClass:function(e,t,n,i,r){var a="input-content";if(e)r&&(a+=" label-is-hidden"),i&&(a+=" is-invalid");else{var s=this.querySelector("label");t||r?(a+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",i?a+=" is-invalid":n&&(a+=" label-is-highlighted")):(s&&(this.$.labelAndInputContainer.style.position="relative"),i&&(a+=" is-invalid"))}return n&&(a+=" focused"),a},_computeUnderlineClass:function(e,t){var n="underline";return t?n+=" is-invalid":e&&(n+=" is-highlighted"),n},_computeAddOnContentClass:function(e,t){var n="add-on-content";return t?n+=" is-invalid":e&&(n+=" is-highlighted"),n}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
si({_template:Ci`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[ur],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const mr={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}},yr={NextLabelID:1,NextAddonID:1,NextInputID:1},gr={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!Ei&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e?e+" "+t:t},_onAddonAttached:function(e){var t=Wn(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var n="paper-input-add-on-"+yr.NextAddonID++;t.id=n,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,n)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){Bi._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(t){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=Wn(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+yr.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+yr.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}},br=[Bi,Xi,gr];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/si({is:"paper-input",_template:Ci`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[br,mr],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
si({_template:Ci`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name\$="[[name]]" aria-label\$="[[label]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" required\$="[[required]]" disabled\$="[[disabled]]" rows\$="[[rows]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[dr,Bi],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var e=this.$.textarea.validity.valid;return e&&(this.required&&""===this.value?e=!1:this.hasValidator()&&(e=dr.validate.call(this,this.value))),this.invalid=!e,this.fire("iron-input-validate"),e},_bindValueChanged:function(e){this.value=e},_valueChanged:function(e){var t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.bindValue=e,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var t=Wn(e).path;this.value=t?t[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
si({_template:Ci`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[br,mr],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(e){this.$.input.textarea.selectionStart=e},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(e){this.$.input.textarea.selectionEnd=e},_ariaLabelledByChanged:function(e){this._focusableElement.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this._focusableElement.setAttribute("aria-describedby",e)},get _focusableElement(){return this.inputElement.textarea}})}})},function(e,t,n){"use strict";var i=n(0);class r extends i.a{static get observedAttributes(){return["name","should-run","debug"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>"}connectedCallback(){super.connectedCallback()}}i.a.registerAAElement("aa-when",r)},function(e,t,n){"use strict";var i=n(0);class r extends i.a{constructor(){super()}connectedCallback(){super.connectedCallback()}}i.a.registerAAElement("aa-otherwise",r)},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},,function(e,t,n){"use strict";n.r(t);n(3);var i=n(0);class r extends i.a{static get observedAttributes(){return["name","value"]}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){this._getParentSession().setData(this.name,this.value)}}i.a.registerAAElement("aa-variable",r);class a extends i.a{static get observedAttributes(){return["name","debug","value","min","max"]}constructor(){super()}connectedCallback(){let e=this._getParentSession();this.value=this.getValue(),e.setData(this.name,this.value),this._dispatchEndEvent({autoDispatch:!0})}getValue(){var e=parseFloat(this.min),t=parseFloat(this.max);return this.getRandomInt(e,t)}getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+.5)+e}}i.a.registerAAElement("aa-function-random",a);var s=n(1);class o extends i.a{get observedAttributes(){return["name"]}constructor(){super()}connectedCallback(){}setData(e,t){this.dataset[e]=t}getData(e){return this.dataset[this.toHyphenated(e)]}}i.a.registerAAElement("aa-memory",o);class l extends i.a{static get observedAttributes(){return["submit-button-text","submit-button-hidden","name"]}attributeChangedCallback(e,t,n){switch(e){case"submit-button-text":this.submitButton.innerHTML=n;break;case"submit-button-hidden":this.root.querySelector(".submitButtonContainer").style.display=!0!==n||"true"!==n?"block":"none"}}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){super.connectedCallback(),this.root.innerHTML=this.css+this.html,this.submitButton=this.root.querySelector(".submitButton"),this._started||(this._started=!0,this.submitButtonHidden&&(this.root.querySelector(".submitButtonContainer").style.display="none"),this.root.querySelector(".submitButton").addEventListener("click",this.submitButtonClick.bind(this)))}get css(){return html`
            <style>
                :host {
                    display: block;
                    height: fit-content;
                    /* border: solid thin; */
                    padding:20px;
                    font-family:sans-serif;
                }

                .submitButtonContainer{
                    /* border:solid thin; */
                    /* width:100%; */
                    text-align:right;
                    /* display:flex;  */
                    justify-content: space-between; 
                    align-items:center;
                    padding:20px;
                }


                paper-button.darkBlue {
                    background-color: #0d47a1;
                    color: white;
                 }
  
         </style>
        `}get html(){return html`
            <slot></slot>
            <div id="userMessage">
            <div class='submitButtonContainer'>
                <div>
                    ${this.getSubmitButton()}
            </div>
                <div id='userMessage'></div>
            </div>`}getSubmitButton(){let e=this.submitButtonText||"submit";return customElements.get("paper-button")?html`<paper-button class="submitButton darkBlue" raised class="indigo">${e}</paper-button>`:html`<button class='submitButton'>${e}</button>`}submitButtonClick(e){let t=this.querySelector("#userMessage");if(this.hasChildrenThatDemandResponse())return void(t.innerHTML=html`
                    <div style="display:flex; align-items:center"> 
                        <div>please fill out the required fields</div> 
                            <div id="attention" style="color: red; font-size: 20px;  border: solid thin; border-radius: 50%; width: 20px;
                                                margin-left:20px; height: 20px; 
                                                text-align: center;
                                                padding: 5px;">!</div></div>`);let n=new CustomEvent("valueSubmit",{bubbles:!0,detail:{value:this.getValue()}});this.dispatchEvent(n),this._dispatchEndEvent(this.getValue()),void 0!==e.detail.callback&&e.detail.callback(e),0==this.dontHide&&this.hide()}hasChildrenThatDemandResponse(){let e=this.getAAChildren(this);for(let t=0;t<e.length;t++)e[t].mandatory&&null==child.getValue()&&(result=!0);return!1}getAAChildren(){let e=[];for(let t=0;t<this.children.length;t++)i.a.isAAElement(this.children[t])&&e.push(this.children[t]);return e}getChildrenValues(){let e=[];for(let t=0;t<this.children.length;t++){let n=this.children[t];n.getValue?e.push(n.getValue()):n.value&&e.push({[n.name]:n.value})}return e}getChildrenValuesOrder(e){void 0===e&&(e=this);for(var t=this.getEmaChildren(e),n=[],i=0;i<t.length;i++){var r=t[i];void 0!==this.name?n.push(this.name+"$"+r.getName()):n.push(r.getName())}}getValue(){this.attachedTimestamp,(new Date).getTime();return this.getChildrenValues(this)}getValueWithKey(){var e={};return e[this.name]=this.getValue(),e}automate(){for(var e=0;e<this.children.length;e++)this.isEmaElement(this.children[e])&&void 0!==this.children[e].automate&&this.children[e].automate();this.submitButtonClick()}hide(){this.style.display="none"}show(){this.style.display="block"}}i.a.registerAAElement("aa-screen",l);class p extends i.a{static get observedAttributes(){return["name","goto"]}connectedCallback(){this._dispatchEndEvent({goto:this.goto,autoDispatch:!0})}}i.a.registerAAElement("aa-jump",p);class d extends i.a{static get observedAttributes(){return["name","write-into","should-run","debug","type","stopped"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>"}connectedCallback(){this.root.addEventListener("endEvent",this.endEventListener.bind(this)),null!==this.shouldRun&&!0!==this.shouldRun||this.init()}get css(){return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `}get html(){return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `}init(){if(this.stopped=!1,this.writeInto?this.target=document.querySelector(this.writeInto):this.target=this,void 0===this.innerFragment)return console.warn(".innerFragment is undefined"),void this.restoreHeldNodes(this);this.sIndex=0,this.stopped||this.start()}start(){this.stopped||(this.stopped=!1,this.next())}stop(){this.stopped=!0}next(e){return new Promise((t,n)=>{if(this.stopped)return;if(this.sIndex>=this.innerFragment.childNodes.length)return null;if("string"==typeof e)for(let t=0;t<this.innerFragment.childNodes.length;t++)if(this.innerFragment.childNodes[t].getAttribute&&this.innerFragment.childNodes[t].getAttribute("name")==e){this.sIndex=t;break}let r=this.innerFragment.childNodes[this.sIndex];for(;r.nodeType!=Node.ELEMENT_NODE;){let e=i.a.copy(r);if(this.target.appendChild(e),this.currentNode=e,this.sIndex++,this.sIndex>=this.innerFragment.childNodes.length)return;r=this.innerFragment.childNodes[this.sIndex]}let a=i.a.copy(r);this.currentNode=a,this.sIndex+=1,a._dispatchEndEvent?(this.target.appendChild(a),setTimeout(()=>{t()},0)):t(this.next()),this.prevPerformance?(this.time=performance.now()-this.prevPerformance,this.prevPerformance=performance.now()):this.prevPerformance=performance.now()})}endEventListener(e){e.stopPropagation();e.detail?e.detail.goto?this.next(e.detail.goto):e.detail.autoDispatch?this.next(!0):setTimeout(()=>{this.next(!0)}):setTimeout(()=>{this.next(!0)})}}i.a.registerAAElement("aa-sequence",d);class h extends i.a{static get observedAttributes(){return["name","should-run","debug"]}constructor(){super(),this._mem=document.createElement("aa-memory"),this.myTemplate=document.createElement("template"),this.myTemplate.innerHTML=this.innerHTML,this.innerHTML="",this.addEventListener("valueSubmit",e=>{let t={data:e.detail.value,sessionID:this.sessionID,sessionTimestamp:this.sessionTime,sessionName:this.name,variables:Object.keys(e.detail.value)},n=new CustomEvent("inputSubmit",{bubbles:!0,detail:{input:t}});this.dispatchEvent(n)}),this.addEventListener("endEvent",e=>{this.debug||e.stopPropagation();let t=new CustomEvent("sessionEndEvent",{bubbles:!0,detail:"sessionEnd"});this.dispatchEvent(t)})}myIdGenerator(){return 0}connectedCallback(){this.sessionID=this.myIdGenerator(),this.sessionTime=(new Date).getTime();let e=Object.keys(this.dataset);for(let t in e)this.setData(e[t],this.dataset[e[t]]);null!==this.shouldRun&&!0!==this.shouldRun||this.run()}attachTemplateChildNodesToMyself(e){for(;e.content.childNodes.length;)if("TEMPLATE"===e.content.childNodes[0].nodeName){for(;e.content.childNodes[0].content.childNodes.length;)this.appendChild(e.content.childNodes[0].content.childNodes[0]);e.content.childNodes[0].remove()}else this.appendChild(e.content.childNodes[0])}run(){let e=this.myTemplate.cloneNode(!0);i.a.scanAndReplace(e),this.attachTemplateChildNodesToMyself(e)}getData(e){return this._mem.getData(e)}setData(e,t){return this._mem.setData(e,t)}getDataDump(){return this._mem.dataset}}i.a.registerAAElement("aa-session",h);class u extends i.a{static get observedAttributes(){return["long","label","name","value"]}changeInputItem(e){if("long"===e){let e=this.value,t=this.label;this.inputItem=customElements.get("paper-textarea")?document.createElement("paper-textarea"):document.createElement("textarea"),this.inputItem.value=e,this.inputItem.label=t,this.inputItem.classList.add("inputItem"),this.fixBugInPaperTextarea(this.inputItem),this.inputItem.addEventListener("change",e=>{this.value=e.target.value}),this.root.querySelector(".inputItem").replaceWith(this.inputItem)}else{let e=this.value,t=this.label;this.inputItem=customElements.get("paper-input")?document.createElement("paper-input"):document.createElement("input"),this.inputItem.value=e,this.inputItem.label=t,this.inputItem.classList.add("inputItem"),this.inputItem.addEventListener("change",e=>{this.value=e.target.value}),this.root.querySelector(".inputItem").replaceWith(this.inputItem)}}get value(){return this.inputItem?this.inputItem.value:this.getAttribute("value")}set value(e){this.inputItem||this.setAttribute("value",e),this.inputItem.value=e}get label(){return this.getAttribute("label")}set label(e){this.inputItem||this.setAttribute("label",e),this.inputItem.label=e}set long(e){this.setAttribute("long",e),e?this.changeInputItem("long"):this.changeInputItem("short")}get long(){return this.getAttribute("long")}constructor(){super(),this.root=this.attachShadow({mode:"open"});let e=this.long||""==this.long?this.longHtml:this.html;this.root.innerHTML=this.css+`<div class="inputContainer">${e}<div>`;let t=this.label,n=this.value;this.inputItem=this.root.querySelector(".inputItem"),t&&(this.inputItem.label=t),n&&(this.inputItem.value=n),this.fixBugInPaperTextarea(this.inputItem),this.inputItem.addEventListener("change",e=>{this.value=e.target.value})}fixBugInPaperTextarea(e){if("PAPER-TEXTAREA"===e.tagName){e.root.childNodes[2].children[1].textarea.style.overflow="hidden";let t=window.getComputedStyle(this.root.querySelector(".inputContainer")).width;e.root.childNodes[2].style.width=t,e.addEventListener("focus",t=>{let n=window.getComputedStyle(this.root.querySelector(".inputContainer")).width;e.root.childNodes[2].style.width=n}),window.addEventListener("resize",()=>{e.root.childNodes[2].style.width="",setTimeout(()=>{let t=window.getComputedStyle(this.root.querySelector(".inputContainer")).width;e.root.childNodes[2].style.width=t},100)})}}connectedCallback(){super.connectedCallback()}get css(){return"<style>\n        :host{\n            display:block;\n            overflow:hidden;        \n        }\n        paper-textarea textarea {\n           overflow:hidden;\n        }\n        </style>"}get html(){let e=customElements.get("paper-input")?'<paper-input class="inputItem"></paper-input>':'<input class="inputItem">';return html`${e}`}get longHtml(){let e=customElements.get("paper-input")?'<paper-textarea class="inputItem"></paper-input>':'<textarea class="inputItem"></textarea';return html`${e}`}}i.a.registerAAElement("aa-text-answer",u);let c={BaseElement:i.a,AAChoose:s.a,AAMemory:o,AAScreen:l,AASequence:d,AASession:h,AAVariable:r};window&&(window.aaCustomElements=c)}]);
//# sourceMappingURL=aaCustomElements.js.map