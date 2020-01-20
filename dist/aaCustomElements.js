!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));window&&(window.html=function(e,...t){let n=e[0];for(let i=0;i<t.length;i++)n+=t[i],n+=e[i+1];return n});class i extends HTMLElement{constructor(){super(),this._props=this.makePropertiesFromAttributes()}connectedCallback(){console.log(this.tagName," connected"),this._attachedTimestamp=(new Date).getTime(),this._debug=!0===this.debug||null===this.debug}makePropertiesFromAttributes(){let e=customElements.get(this.tagName.toLowerCase()).observedAttributes;if(!e)return null;let t={};for(let n=0;n<e.length;n++){let i=this.toCamelCase(e[n]);t[i]=e[n],void 0===this[i]&&Object.defineProperty(this,i,{get:()=>{let t=this.getAttribute(e[n]);return"true"===t||"false"!==t&&t},set:t=>{this.setAttribute(e[n],t)}})}return t}toCamelCase(e){let t=e.split("-"),n=t[0];for(let e=1;e<t.length;e++)n+=t[e][0].toUpperCase()+t[e].substr(1);return n}toHyphenated(e){let t="";for(let n=0;n<e.length;n++){let i=e[n];i.toLowerCase()!==i?t+=`-${i.toLowerCase()}`:t+=i}return t}static isAAElement(e){return-1!=AANodeNames.indexOf(e.nodeName)}_restoreHeldNodes(e){let t=e.childNodes;for(let e=0;e<t.length;e++){let n=t[e];"AA-HOLDER"==n.nodeName?n.restoreNode():n.childNodes.length>0&&this._restoreHeldNodes(n)}}_createFragmentForNode(e){let t=document.createDocumentFragment();for(let n=0;n<e.childNodes.length;n++)t.append(e.childNodes[n].cloneNode(!0));return t}copy(e){let t;return"AA-HOLDER"==e.nodeName?t=e.clone():i.isAAElement(e)?(t=e.cloneNode(),t.innerFragment=this._createFragmentForNode(e)):t=e.cloneNode(!0),t}_dispatchDebugEvent(e){this.debug&&this.dispatchEvent(new CustomEvent("debugEvent",{detail:e,bubbles:!0}))}_dispatchEndEvent(e){this.dispatchEvent(new CustomEvent("endEvent",{bubbles:!0,detail:e}))}_getParentSession(){let e=this;for(;null!=e&&"AA-SESSION"!=e.nodeName;)e=e.parentNode;return e}}customElements.get("aa-base-element")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-BASE-ELEMENT"),customElements.define("aa-base-element",i))},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(0);class s extends i.a{static get observedAttributes(){return["name"]}static createHolderForNode(e){let t=document.createElement("aa-holder");return t.holdNode(e),t}static scanAndReplace(e){if("TEMPLATE"==e.nodeName)s.scanAndReplace(e.content);else if(i.a.isAAElement(e)){let t=s.createHolderForNode(e);e.replaceWith(t)}else for(let t=0;t<e.childNodes.length;t++)s.scanAndReplace(e.childNodes[t])}static scanAndRestore(e){if("TEMPLATE"==e.nodeName)s.scanAndRestore(e.content);else if(i.a.isAAElement(e))"AA-HOLDER"==e.nodeName&&e.restoreHeldNode();else for(let t=0;t<e.childNodes.length;t++)s.scanAndRestore(e.childNodes[t])}clone(){let e=document.createElement("aa-holder");e.name=this.name,e.id=this.id,e.node=this.node.cloneNode(!0),e.innerFragment=document.createDocumentFragment();for(let t=0;t<this.innerFragment.childNodes.length;t++)e.innerFragment.appendChild(this.innerFragment.childNodes[t].cloneNode(!0));return e.holdsAAElement=this.holdsAAElement,e}constructor(){super()}holdNode(e){this.node=e.cloneNode(!1),e.id?this.id=e.id:this.id=e.nodeName,this.innerFragment=this._createFragmentForNode(e),this.holdsAAElement=i.a.isAAElement(e)}replace(e){e.replaceWith(this)}restoreHeldNode(){if(this.node){if(this.holdsAAElement)this.holdsAAElement&&(this.node.innerFragment=this.innerFragment);else for(;this.innerFragment.childNodes.length;)this.node.appendChild(this.innerFragment.childNodes[0]);this.replaceWith(this.node)}}connectedCallback(){}}customElements.get("aa-holder")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-HOLDER"),customElements.define("aa-holder",s))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AAChoose}));var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);class AAChoose extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__.a{static get observedAttributes(){return["name","should-run","debug"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>",this.originalContent=this.innerHTML}_restoreOriginalContent(){}connectedCallback(){if(this._shouldRun=null===this.shouldRun||!0===this.shouldRun,this.sessionElement=this._getParentSession(),this._shouldRun)if(void 0!==this.innerFragment){let e=this._getNodeToInstantiate();if(0==e.length)this._dispatchEndEvent();else{for(let t=0;t<e.length;t++){let n=e[t];void 0!==n&&this.appendChild(n)}this._dispatchEndEvent()}}else 0==this.childNodes.length&&this._dispatchEndEvent()}_getNodeToInstantiate(){this.started=!0;let e=[],t=[];this.myFragmentChildren=[];let n=!1;for(let i=0;i<this.innerFragment.children.length;i++){let s=this.innerFragment.children[i];this.myFragmentChildren.push(s),"AA-WHEN"==s.nodeName&&(n=this.evaluate(s),n&&e.push(this.copy(s))),"AA-OTHERWISE"==s.nodeName&&t.push(this.copy(s))}return 0==e.length?t:e}run(){if(this.started=!0,0===this.myFragmentChildren.length)return;if(this.fragmentChildrenCounter>=this.myFragmentChildren.length)return;let e;this.currentNode||this.formerNodes.push(this.currentNode);let t=this.myFragmentChildren[this.fragmentChildrenCounter];e=this.isHolder(t)?this.replaceHolderWithElement(t):t,this.appendChild(e),this._restoreHeldNodes(e),this.fragmentChildrenCounter+=1}evaluate(e){let t=e.getAttribute("test");return null==t||""==t?null:this.evaluateTestExpression(t)}evaluateTestExpression(test){let expr=this.replaceExpressionIdentifiersWithValues(test);try{var parseTree=Object(_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__.a)(expr);if("Literal"==parseTree.left.type&&"Literal"==parseTree.right.type)return eval(expr);throw"unknown identifiers in expression : "+expr}catch(e){console.error("parse error:",e)}}replaceExpressionIdentifiersWithValues(e){let t=this._getParentSession(),n=e.toUpperCase(),i=Object.keys(t.getDataDump()),s=i.map(e=>e.toUpperCase());for(let e in s){let r=t.getData(i[e]),o=parseInt(r);o!=r&&(o="null"===r?"null":"true"===r?"true":"false"===r?"false":`"${r}"`);let a=new RegExp(s[e],"g");n=n.replace(a,o)}return n}}customElements.get("aa-choose")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-CHOOSE"),customElements.define("aa-choose",AAChoose))},function(e,t,n){"use strict";(function(e){t.a=function(t){var n=function(e,t){var n=new Error(e+" at character "+t);throw n.index=t,n.description=e,n},i={"-":!0,"!":!0,"~":!0,"+":!0},s={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},r=function(e){var t,n=0;for(var i in e)(t=i.length)>n&&e.hasOwnProperty(i)&&(n=t);return n},o=r(i),a=r(s),l={true:!0,false:!1,null:null},h=function(e){return s[e]||0},d=function(e,t,n){return{type:"||"===e||"&&"===e?"LogicalExpression":"BinaryExpression",operator:e,left:t,right:n}},c=function(e){return e>=48&&e<=57},u=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=128&&!s[String.fromCharCode(e)]},p=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e>=128&&!s[String.fromCharCode(e)]},_=function(e){for(var t,r,_=0,f=e.charAt,m=e.charCodeAt,y=function(t){return f.call(e,t)},g=function(t){return m.call(e,t)},b=e.length,v=function(){for(var e=g(_);32===e||9===e||10===e||13===e;)e=g(++_)},w=function(){var e,t,i=x();return v(),63!==g(_)?i:(_++,(e=w())||n("Expected expression",_),v(),58===g(_)?(_++,(t=w())||n("Expected expression",_),{type:"ConditionalExpression",test:i,consequent:e,alternate:t}):void n("Expected :",_))},C=function(){v();for(var t=e.substr(_,a),n=t.length;n>0;){if(s.hasOwnProperty(t)&&(!u(g(_))||_+t.length<e.length&&!p(g(_+t.length))))return _+=n,t;t=t.substr(0,--n)}return!1},x=function(){var e,t,i,s,r,o,a,l;if(o=E(),!(t=C()))return o;for(r={value:t,prec:h(t)},(a=E())||n("Expected expression after "+t,_),s=[o,r,a];(t=C())&&0!==(i=h(t));){for(r={value:t,prec:i};s.length>2&&i<=s[s.length-2].prec;)a=s.pop(),t=s.pop().value,o=s.pop(),e=d(t,o,a),s.push(e);(e=E())||n("Expected expression after "+t,_),s.push(r,e)}for(e=s[l=s.length-1];l>1;)e=d(s[l-1].value,s[l-2],e),l-=2;return e},E=function(){var t,n,s;if(v(),t=g(_),c(t)||46===t)return P();if(39===t||34===t)return S();if(91===t)return k();for(s=(n=e.substr(_,o)).length;s>0;){if(i.hasOwnProperty(n)&&(!u(g(_))||_+n.length<e.length&&!p(g(_+n.length))))return _+=s,{type:"UnaryExpression",operator:n,argument:E(),prefix:!0};n=n.substr(0,--s)}return!(!u(t)&&40!==t)&&O()},P=function(){for(var e,t,i="";c(g(_));)i+=y(_++);if(46===g(_))for(i+=y(_++);c(g(_));)i+=y(_++);if("e"===(e=y(_))||"E"===e){for(i+=y(_++),"+"!==(e=y(_))&&"-"!==e||(i+=y(_++));c(g(_));)i+=y(_++);c(g(_-1))||n("Expected exponent ("+i+y(_)+")",_)}return t=g(_),u(t)?n("Variable names cannot start with a number ("+i+y(_)+")",_):46===t&&n("Unexpected period",_),{type:"Literal",value:parseFloat(i),raw:i}},S=function(){for(var e,t="",i=y(_++),s=!1;_<b;){if((e=y(_++))===i){s=!0;break}if("\\"===e)switch(e=y(_++)){case"n":t+="\n";break;case"r":t+="\r";break;case"t":t+="\t";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=e}else t+=e}return s||n('Unclosed quote after "'+t+'"',_),{type:"Literal",value:t,raw:i+t+i}},A=function(){var t,i=g(_),s=_;for(u(i)?_++:n("Unexpected "+y(_),_);_<b&&(i=g(_),p(i));)_++;return t=e.slice(s,_),l.hasOwnProperty(t)?{type:"Literal",value:l[t],raw:t}:"this"===t?{type:"ThisExpression"}:{type:"Identifier",name:t}},N=function(e){for(var t,i,s=[],r=!1;_<b;){if(v(),(t=g(_))===e){r=!0,_++;break}44===t?_++:((i=w())&&"Compound"!==i.type||n("Expected comma",_),s.push(i))}return r||n("Expected "+String.fromCharCode(e),_),s},O=function(){var e,t;for(t=40===(e=g(_))?T():A(),v(),e=g(_);46===e||91===e||40===e;)_++,46===e?(v(),t={type:"MemberExpression",computed:!1,object:t,property:A()}):91===e?(t={type:"MemberExpression",computed:!0,object:t,property:w()},v(),93!==(e=g(_))&&n("Unclosed [",_),_++):40===e&&(t={type:"CallExpression",arguments:N(41),callee:t}),v(),e=g(_);return t},T=function(){_++;var e=w();if(v(),41===g(_))return _++,e;n("Unclosed (",_)},k=function(){return _++,{type:"ArrayExpression",elements:N(93)}},M=[];_<b;)59===(t=g(_))||44===t?_++:(r=w())?M.push(r):_<b&&n('Unexpected "'+y(_)+'"',_);return 1===M.length?M[0]:{type:"Compound",body:M}};if(_.version="0.3.4",_.toString=function(){return"JavaScript Expression Parser (JSEP) v"+_.version},_.addUnaryOp=function(e){return o=Math.max(e.length,o),i[e]=!0,this},_.addBinaryOp=function(e,t){return a=Math.max(e.length,a),s[e]=t,this},_.addLiteral=function(e,t){return l[e]=t,this},_.removeUnaryOp=function(e){return delete i[e],e.length===o&&(o=r(i)),this},_.removeAllUnaryOps=function(){return i={},o=0,this},_.removeBinaryOp=function(e){return delete s[e],e.length===a&&(a=r(s)),this},_.removeAllBinaryOps=function(){return s={},a=0,this},_.removeLiteral=function(e){return delete l[e],this},_.removeAllLiterals=function(){return l={},this},"undefined"==typeof exports){if(!t)return _;var f=t.jsep;t.jsep=_,_.noConflict=function(){return t.jsep===_&&(t.jsep=f),_}}else e.exports?exports=e.exports=_:exports.parse=_}(void 0)}).call(this,n(7)(e))},function(e,t){!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}({7:function(e,t,n){"use strict";n.r(t);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=!(window.ShadyDOM&&window.ShadyDOM.inUse);let s,r;function o(e){s=(!e||!e.shimcssproperties)&&(i||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(r=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?s=window.ShadyCSS.nativeCss:window.ShadyCSS?(o(window.ShadyCSS),window.ShadyCSS=void 0):o(window.WebComponents&&window.WebComponents.flags);const l=s;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class h{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function d(e){return function e(t,n){let i=n.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;i=n.substring(e,t.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(_.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let s=t.parsedSelector=t.selector=i.trim();t.atRule=0===s.indexOf(y),t.atRule?0===s.indexOf(m)?t.type=c.MEDIA_RULE:s.match(_.keyframesRule)&&(t.type=c.KEYFRAMES_RULE,t.keyframesName=t.selector.split(_.multipleSpaces).pop()):0===s.indexOf(f)?t.type=c.MIXIN_RULE:t.type=c.STYLE_RULE}let s=t.rules;if(s)for(let t,i=0,r=s.length;i<r&&(t=s[i]);i++)e(t,n);return t}(function(e){let t=new h;t.start=0,t.end=e.length;let n=t;for(let i=0,s=e.length;i<s;i++)if(e[i]===u){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;n=new h,n.start=i+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[i]===p&&(n.end=i+1,n=n.parent||t);return t}(e=e.replace(_.comments,"").replace(_.port,"")),e)}const c={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},u="{",p="}",_={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},f="--",m="@media",y="@",g=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,b=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,v=/@media\s(.*)/,w=new Set;function C(e){const t=e.textContent;if(!w.has(t)){w.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function x(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function E(e,t){return e?("string"==typeof e&&(e=d(e)),t&&S(e,t),function e(t,n,i=""){let s="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(f)}(i))for(let t,r=0,o=i.length;r<o&&(t=i[r]);r++)s=e(t,n,s);else s=n?t.cssText:function(e){return function(e){return e.replace(_.mixinApply,"").replace(_.varApply,"")}(e=function(e){return e.replace(_.customProp,"").replace(_.mixinProp,"")}(e))}(t.cssText),s=s.trim(),s&&(s="  "+s+"\n")}return s&&(t.selector&&(i+=t.selector+" "+u+"\n"),i+=s,t.selector&&(i+=p+"\n\n")),i}(e,l)):""}function P(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=d(e.textContent)),e.__cssRules||null}function S(e,t,n,i){if(!e)return;let s=!1,r=e.type;if(i&&r===c.MEDIA_RULE){let t=e.selector.match(v);t&&(window.matchMedia(t[1]).matches||(s=!0))}r===c.STYLE_RULE?t(e):n&&r===c.KEYFRAMES_RULE?n(e):r===c.MIXIN_RULE&&(s=!0);let o=e.rules;if(o&&!s)for(let e,s=0,r=o.length;s<r&&(e=o[s]);s++)S(e,t,n,i)}function A(e){return""!==function(e){if(void 0!==r)return r;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}(e)}function N(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function O(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyDOM&&window.ShadyDOM.wrap;const T=/;\s*/m,k=/^\s*(initial)|(inherit)\s*$/,M=/\s*!important/;class I{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let D=null;class R{constructor(){this._currentElement=null,this._measureElement=null,this._map=new I}detectMixin(e){return function(e){const t=b.test(e)||g.test(e);return b.lastIndex=0,g.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let e=0;e<n.length;e++){const s=n[e];x(s)?i||(C(s),s.parentNode.removeChild(s)):(t.push(s.textContent),s.parentNode.removeChild(s))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=P(e);return this.transformRules(n,t),e.textContent=E(n),n}transformCustomStyle(e){let t=P(e);return S(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=E(t),t}transformRules(e,t){this._currentElement=t,S(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(g,(e,n,i,s)=>this._produceCssProperties(e,n,i,s,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let i=!1;return S(t,t=>{i=i||t===e,i||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=b.exec(e);){let i=n[0],s=n[1],r=n.index,o=r+i.indexOf("@apply"),a=r+i.length,l=e.slice(0,o),h=e.slice(a),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let c=this._atApplyToCssProperties(s,d);e=`${l}${c}${h}`,b.lastIndex=r+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(T,"");let n=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let s,r,o;this._currentElement&&(i.dependants[this._currentElement]=!0);const a=i.properties;for(s in a)o=t&&t[s],r=[s,": var(",e,"_-_",s],o&&r.push(",",o.replace(M,"")),r.push(")"),M.test(a[s])&&r.push(" !important"),n.push(r.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=k.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,i,s=e.split(";"),r={};for(let e,o,a=0;a<s.length;a++)e=s[a],e&&(o=e.split(":"),o.length>1&&(n=o[0].trim(),i=o.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(n,i)),r[n]=i));return r}_invalidateMixinEntry(e){if(D)for(let t in e.dependants)t!==this._currentElement&&D(t)}_produceCssProperties(e,t,n,i,s){if(n&&function e(t,n){let i=t.indexOf("var(");if(-1===i)return n(t,"","","");let s=function(e,t){let n=0;for(let i=t,s=e.length;i<s;i++)if("("===e[i])n++;else if(")"===e[i]&&0==--n)return i;return-1}(t,i+3),r=t.substring(i+4,s),o=t.substring(0,i),a=e(t.substring(s+1),n),l=r.indexOf(",");return-1===l?n(o,r.trim(),"",a):n(o,r.substring(0,l).trim(),r.substring(l+1).trim(),a)}(n,(e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)}),!i)return e;let r=this._consumeCssProperties(""+i,s),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(r,!0),l=a,h=this._map.get(t),d=h&&h.properties;d?l=Object.assign(Object.create(d),a):this._map.set(t,l);let c,u,p=[],_=!1;for(c in l)u=a[c],void 0===u&&(u="initial"),!d||c in d||(_=!0),p.push(`${t}_-_${c}: ${u}`);return _&&this._invalidateMixinEntry(h),h&&(h.properties=l),n&&(o=`${e};${o}`),`${o}${p.join("; ")};`}}R.prototype.detectMixin=R.prototype.detectMixin,R.prototype.transformStyle=R.prototype.transformStyle,R.prototype.transformCustomStyle=R.prototype.transformCustomStyle,R.prototype.transformRules=R.prototype.transformRules,R.prototype.transformRule=R.prototype.transformRule,R.prototype.transformTemplate=R.prototype.transformTemplate,R.prototype._separator="_-_",Object.defineProperty(R.prototype,"invalidCallback",{get:()=>D,set(e){D=e}});var L=R,F={};
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
const H="_applyShimCurrentVersion",B="_applyShimNextVersion",j=Promise.resolve();function z(e){let t=F[e];t&&function(e){e[H]=e[H]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[B]=(e[B]||0)+1}(t)}function U(e){return e[H]===e[B]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let K,q=null,$=window.HTMLImports&&window.HTMLImports.whenReady||null;function V(e){requestAnimationFrame((function(){$?$(e):(q||(q=new Promise(e=>{K=e}),"complete"===document.readyState?K():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&K()})),q.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Y="__shadyCSSCachedStyle";let J=null,W=null;class X{constructor(){this.customStyles=[],this.enqueued=!1,V(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&W&&(this.enqueued=!0,V(W))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Y])return e[Y];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[Y])continue;const i=this.getStyleForCustomStyle(n);if(i){const e=i.__appliedElement||i;J&&J(e),n[Y]=e}}return e}}X.prototype.addCustomStyle=X.prototype.addCustomStyle,X.prototype.getStyleForCustomStyle=X.prototype.getStyleForCustomStyle,X.prototype.processStyles=X.prototype.processStyles,Object.defineProperties(X.prototype,{transformCallback:{get:()=>J,set(e){J=e}},validateCallback:{get:()=>W,set(e){let t=!1;W||(t=!0),W=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const G=new L;class Z{constructor(){this.customStyleInterface=null,G.invalidCallback=z}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{G.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),A(e))return;F[t]=e;let n=G.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&G.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&N(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,n="",i="";return t?t.indexOf("-")>-1?n=t:(i=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,i=e.extends),{is:n,typeExtension:i}}(e),n=F[t];if((!n||!A(n))&&n&&!U(n)){(function(e){return!U(e)&&e._applyShimValidatingVersion===e[B]})(n)||(this.prepareTemplate(n,t),function(e){e._applyShimValidatingVersion=e[B],e._validating||(e._validating=!0,j.then((function(){e[H]=e[B],e._validating=!1})))}(n));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=E(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Z;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,i){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>O(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:l,nativeShadow:i,cssBuild:r,disableRuntime:a},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=G,
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
let Q,ee,te=/(url\()([^)]*)(\))/g,ne=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function ie(e,t){if(e&&ne.test(e))return e;if("//"===e)return e;if(void 0===Q){Q=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Q="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),Q)try{return new URL(e,t).href}catch(t){return e}return ee||(ee=document.implementation.createHTMLDocument("temp"),ee.base=ee.createElement("base"),ee.head.appendChild(ee.base),ee.anchor=ee.createElement("a"),ee.body.appendChild(ee.anchor)),ee.base.href=t,ee.anchor.href=e,ee.anchor.href||e}function se(e,t){return e.replace(te,(function(e,n,i,s){return n+"'"+ie(i.replace(/["']/g,""),t)+"'"+s}))}function re(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let oe=re(document.baseURI||window.location.href),ae=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,le=0;function he(){}he.prototype.__mixinApplications,he.prototype.__mixinSet;const de=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=le++;return function(i){let s=i.__mixinSet;if(s&&s[n])return i;let r=t,o=r.get(i);o||(o=e(i),r.set(i,o));let a=Object.create(o.__mixinSet||s||null);return a[n]=!0,o.__mixinSet=a,o}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ce={},ue={};function pe(e,t){ce[e]=ue[e.toLowerCase()]=t}function _e(e){return ce[e]||ue[e.toLowerCase()]}class fe extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=_e(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,i){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=ie(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=re(t)}return this.__assetpath}register(e){var t;(e=e||this.id)&&(this.id=e,pe(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id))}}function me(e){return fe.import(e)}function ye(e){const t=se((e.body?e.body:e).textContent,e.baseURI),n=document.createElement("style");return n.textContent=t,n}function ge(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...be(t[e]));return n}function be(e){const t=me(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...we(t));const n=t.querySelector("template");n&&e.push(...ve(n,t.assetpath)),t._styles=e}return t._styles}function ve(e,t){if(!e._styles){const n=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let s=i[e],r=s.getAttribute("include");r&&n.push(...ge(r).filter((function(e,t,n){return n.indexOf(e)===t}))),t&&(s.textContent=se(s.textContent,t)),n.push(s)}e._styles=n}return e._styles}function we(e){const t=[],n=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<n.length;e++){let i=n[e];if(i.import){const e=i.import,n=i.hasAttribute("shady-unscoped");if(n&&!e._unscopedStyle){const t=ye(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=ye(e));t.push(n?e._unscopedStyle:e._style)}}return t}function Ce(e){let t=me(e);if(t&&void 0===t._cssText){let e=function(e){let t="",n=we(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),n=t.querySelector("template");n&&(e+=function(e,t){let n="";const i=ve(e,t);for(let e=0;e<i.length;e++){let t=i[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}fe.prototype.modules=ce,customElements.define("dom-module",fe);const xe=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;function Ee(e){return e.indexOf(".")>=0}function Pe(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function Se(e,t){return 0===e.indexOf(t+".")}function Ae(e,t){return 0===t.indexOf(e+".")}function Ne(e,t,n){return t+n.slice(e.length)}function Oe(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let i=e[n].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function Te(e){return Array.isArray(e)?Oe(e).split("."):e.toString().split(".")}function ke(e,t,n){let i=e,s=Te(t);for(let e=0;e<s.length;e++){if(!i)return;i=i[s[e]]}return n&&(n.path=s.join(".")),i}function Me(e,t,n){let i=e,s=Te(t),r=s[s.length-1];if(s.length>1){for(let e=0;e<s.length-1;e++)if(i=i[s[e]],!i)return;i[r]=n}else i[t]=n;return s.join(".")}const Ie={},De=/-[a-z]/g,Re=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Le(e){return Ie[e]||(Ie[e]=e.indexOf("-")<0?e:e.replace(De,e=>e[1].toUpperCase()))}function Fe(e){return Ie[e]||(Ie[e]=e.replace(Re,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let He=0,Be=0,je=[],ze=0,Ue=document.createTextNode("");new window.MutationObserver((function(){const e=je.length;for(let t=0;t<e;t++){let n=je[t];if(n)try{n()}catch(e){setTimeout(()=>{throw e})}}je.splice(0,e),Be+=e})).observe(Ue,{characterData:!0});const Ke={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},qe={run:e=>(Ue.textContent=ze++,je.push(e),He++),cancel(e){const t=e-Be;if(t>=0){if(!je[t])throw new Error("invalid async handle: "+e);je[t]=null}}},$e=qe,Ve=de(e=>class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let i=this.__data[e],s=this._shouldPropertyChange(e,t,i);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),s}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,$e.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,i){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,i)}_attributeToProperty(e,t,n){if(!this.__serializing){const i=this.__dataAttributes,s=i&&i[e]||e;this[s]=this._deserializeValue(t,n||this.constructor.typeForProperty(s))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const i=this._serializeValue(t);"class"!==n&&"name"!==n&&"slot"!==n||(e=xe(e)),void 0===i?e.removeAttribute(n):e.setAttribute(n,i)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),Ye={};let Je=HTMLElement.prototype;for(;Je;){let e=Object.getOwnPropertyNames(Je);for(let t=0;t<e.length;t++)Ye[e[t]]=!0;Je=Object.getPrototypeOf(Je)}const We=de(e=>{const t=Ve(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Le(e[t]))}static attributeNameForProperty(e){return Fe(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!Ye[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),Xe={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ge=!1,Ze=!1;function Qe(e){let t=e.getAttribute("is");if(t&&Xe[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function et(e,t){let n=t.parentInfo&&et(e,t.parentInfo);if(!n)return e;for(let e=n.firstChild,i=0;e;e=e.nextSibling)if(t.parentIndex===i++)return e}function tt(e,t,n,i){i.id&&(t[i.id]=n)}function nt(e,t,n){if(n.events&&n.events.length)for(let i,s=0,r=n.events;s<r.length&&(i=r[s]);s++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function it(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}const st=de(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let i=!1,s=e;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(s,t,n)||i,function(e){(function(){if(!Ge){Ge=!0;const e=document.createElement("textarea");e.placeholder="a",Ze=e.placeholder===e.textContent}return Ze})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}(s),s.firstChild&&this._parseTemplateChildNodes(s,t,n),s.hasAttributes&&s.hasAttributes()&&(i=this._parseTemplateNodeAttributes(s,t,n)||i),i}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName)for(let i,s=e.firstChild,r=0;s;s=i){if("template"==s.localName&&(s=Qe(s)),i=s.nextSibling,s.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)s.textContent+=n.textContent,i=n.nextSibling,e.removeChild(n),n=i;if(t.stripWhiteSpace&&!s.textContent.trim()){e.removeChild(s);continue}}let o={parentIndex:r,parentInfo:n};this._parseTemplateNode(s,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),s.parentNode&&r++}}static _parseTemplateNestedTemplate(e,t,n){let i=e,s=this._parseTemplate(i,t);return(s.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),n.templateInfo=s,!0}static _parseTemplateNodeAttributes(e,t,n){let i=!1,s=Array.from(e.attributes);for(let r,o=s.length-1;r=s[o];o--)i=this._parseTemplateNodeAttribute(e,t,n,r.name,r.value)||i;return i}static _parseTemplateNodeAttribute(e,t,n,i,s){return"on-"===i.slice(0,3)?(e.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:s}),!0):"id"===i&&(n.id=s,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),n=t.nodeInfoList,i=t.content||e.content,s=document.importNode(i,!0);s.__noInsertionPoint=!t.hasInsertionPoint;let r=s.nodeList=new Array(n.length);s.$={};for(let e,t=0,i=n.length;t<i&&(e=n[t]);t++){let n=r[t]=et(s,e);tt(0,s.$,n,e),it(0,n,e),nt(this,n,e)}return s=s,s}_addMethodEventListenerToNode(e,t,n,i){let s=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(i=i||e,0,n);return this._addEventListenerToNode(e,t,s),s}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}});
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
 */let rt=0;const ot={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},at=/[A-Z]/;function lt(e,t){let n=e[t];if(n){if(!e.hasOwnProperty(t)){n=e[t]=Object.create(e[t]);for(let e in n){let t=n[e],i=n[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}}else n=e[t]={};return n}function ht(e,t,n,i,s,r){if(t){let o=!1,a=rt++;for(let l in n)dt(e,t,a,l,n,i,s,r)&&(o=!0);return o}return!1}function dt(e,t,n,i,s,r,o,a){let l=!1,h=t[o?Pe(i):i];if(h)for(let t,d=0,c=h.length;d<c&&(t=h[d]);d++)t.info&&t.info.lastRun===n||o&&!ct(i,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,i,s,r,t.info,o,a),l=!0);return l}function ct(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!Se(n,e))||!(!t.wildcard||!Ae(n,e))}return!0}function ut(e,t,n,i,s){let r="string"==typeof s.method?e[s.method]:s.method,o=s.property;r?r.call(e,e.__data[o],i[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function pt(e,t,n){let i=Pe(t);return i!==t&&(_t(e,Fe(i)+"-changed",n[t],t),!0)}function _t(e,t,n,i){let s={value:n,queueProperty:!0};i&&(s.path=i),xe(e).dispatchEvent(new CustomEvent(t,{detail:s}))}function ft(e,t,n,i,s,r){let o=(r?Pe(t):t)!=t?t:null,a=o?ke(e,o):e.__data[t];o&&void 0===a&&(a=n[t]),_t(e,s.eventName,a,o)}function mt(e,t,n,i,s){let r=e.__data[t];ae&&(r=ae(r,s.attrName,"attribute",e)),e._propertyToAttribute(t,s.attrName,r)}function yt(e,t,n,i,s){let r=Et(e,t,n,i,s),o=s.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,r,!0):e[o]=r}function gt(e,t,n,i,s,r,o){n.bindings=n.bindings||[];let a={kind:i,target:s,parts:r,literal:o,isCompound:1!==r.length};if(n.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Fe(s)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let i=a.parts[n];i.compoundIndex=n,bt(e,t,a,i,l)}}function bt(e,t,n,i,s){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let r=i.dependencies,o={index:s,binding:n,part:i,evaluator:e};for(let n=0;n<r.length;n++){let i=r[n];"string"==typeof i&&(i=Ot(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:vt,info:o,trigger:i})}}}function vt(e,t,n,i,s,r,o){let a=o[s.index],l=s.binding,h=s.part;if(r&&h.source&&t.length>h.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=n[t];t=Ne(h.source,l.target,t),a._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(a)}else!function(e,t,n,i,s){if(s=function(e,t,n,i){if(n.isCompound){let s=e.__dataCompoundStorage[n.target];s[i.compoundIndex]=t,t=s.join("")}return"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}(t,s,n,i),ae&&(s=ae(s,n.target,n.kind,t)),"attribute"==n.kind)e._valueToNodeAttribute(t,s,n.target);else{let i=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[ot.READ_ONLY]&&t[ot.READ_ONLY][i]||t._setPendingProperty(i,s)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,s)}}(e,a,l,h,s.evaluator._evaluateBinding(e,h,t,n,i,r))}function wt(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,s=new Array(i.length);for(let e=0;e<i.length;e++)s[e]=i[e].literal;let r=t.target;n[r]=s,t.literal&&"property"==t.kind&&("className"===r&&(e=xe(e)),e[r]=t.literal)}}function Ct(e,t,n){if(n.listenerEvent){let i=n.parts[0];e.addEventListener(n.listenerEvent,(function(e){!function(e,t,n,i,s){let r,o=e.detail,a=o&&o.path;a?(i=Ne(n,i,a),r=o&&o.value):r=e.currentTarget[n],r=s?!r:r,t[ot.READ_ONLY]&&t[ot.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,r,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,n.target,i.source,i.negate)}))}}function xt(e,t,n,i,s,r){r=t.static||r&&("object"!=typeof r||r[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:r};for(let s,r=0;r<t.args.length&&(s=t.args[r]);r++)s.literal||e._addPropertyEffect(s.rootProperty,n,{fn:i,info:o,trigger:s});r&&e._addPropertyEffect(t.methodName,n,{fn:i,info:o})}function Et(e,t,n,i,s){let r=e._methodHost||e,o=r[s.methodName];if(o){let i=e._marshalArgs(s.args,t,n);return o.apply(r,i)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Pt=[],St=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function At(e){let t="";for(let n=0;n<e.length;n++)t+=e[n].literal||"";return t}function Nt(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Pt};return t[2].trim()?function(e,t){return t.args=e.map((function(e){let n=Ot(e);return n.literal||(t.static=!1),n}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e):e}return null}function Ot(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=Pe(t),n.structured=Ee(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function Tt(e,t,n){let i=ke(e,n);return void 0===i&&(i=t[n]),i}function kt(e,t,n,i){e.notifyPath(n+".splices",{indexSplices:i}),e.notifyPath(n+".length",t.length)}function Mt(e,t,n,i,s,r){kt(e,t,n,[{index:i,addedCount:s,removed:r,object:t,type:"splice"}])}const It=de(e=>{const t=st(We(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return ot}_initializeProperties(){super._initializeProperties(),Dt.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[ot.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==ot.READ_ONLY);let i=lt(this,t)[e];i||(i=this[t][e]=[]),i.push(n)}_removePropertyEffect(e,t,n){let i=lt(this,t)[e],s=i.indexOf(n);s>=0&&i.splice(s,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,ot.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,ot.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,ot.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,ot.COMPUTE)}_setPendingPropertyOrPath(e,t,n,i){if(i||Pe(Array.isArray(e)?e[0]:e)!==e){if(!i){let n=ke(this,e);if(!(e=Me(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let i=e.__dataLinkedPaths;if(i){let s;for(let r in i){let o=i[r];Ae(r,t)?(s=Ne(r,o,t),e._setPendingPropertyOrPath(s,n,!0,!0)):Ae(o,t)&&(s=Ne(o,r,t),e._setPendingPropertyOrPath(s,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||("className"===t&&(e=xe(e)),e[t]=n)}_setPendingProperty(e,t,n){let i=this.__dataHasPaths&&Ee(e),s=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,s[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[ot.NOTIFY]&&this[ot.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[ot.READ_ONLY]&&this[ot.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let i=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,i){let s=e[ot.COMPUTE];if(s){let r=t;for(;ht(e,s,r,n,i);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}(this,t,n,i);let s=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,i),this._flushClients(),ht(this,this[ot.REFLECT],t,n,i),ht(this,this[ot.OBSERVE],t,n,i),s&&function(e,t,n,i,s){let r,o,a=e[ot.NOTIFY],l=rt++;for(let o in t)t[o]&&(a&&dt(e,a,l,o,n,i,s)?r=!0:s&&pt(e,o,n)&&(r=!0));r&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,s,t,n,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[ot.PROPAGATE]&&ht(this,this[ot.PROPAGATE],e,t,n);let i=this.__templateInfo;for(;i;)ht(this,i.propertyEffects,e,t,n,i.nodeList),i=i.nextTemplateInfo}linkPaths(e,t){e=Oe(e),t=Oe(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Oe(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};kt(this,ke(this,e,n),n.path,t)}get(e,t){return ke(t||this,e)}set(e,t,n){n?Me(n,e,t):this[ot.READ_ONLY]&&this[ot.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},i=ke(this,e,n),s=i.length,r=i.push(...t);return t.length&&Mt(this,i,n.path,s,t.length,[]),r}pop(e){let t={path:""},n=ke(this,e,t),i=Boolean(n.length),s=n.pop();return i&&Mt(this,n,t.path,n.length,0,[s]),s}splice(e,t,n,...i){let s,r={path:""},o=ke(this,e,r);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),s=2===arguments.length?o.splice(t):o.splice(t,n,...i),(i.length||s.length)&&Mt(this,o,r.path,t,i.length,s),s}shift(e){let t={path:""},n=ke(this,e,t),i=Boolean(n.length),s=n.shift();return i&&Mt(this,n,t.path,0,0,[s]),s}unshift(e,...t){let n={path:""},i=ke(this,e,n),s=i.unshift(...t);return t.length&&Mt(this,i,n.path,0,t.length,[]),s}notifyPath(e,t){let n;if(1==arguments.length){let i={path:""};t=ke(this,e,i),n=i.path}else n=Array.isArray(e)?Oe(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,ot.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let i={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,ot.OBSERVE,{fn:ut,info:i,trigger:{name:e}}),n&&this._addPropertyEffect(t,ot.OBSERVE,{fn:ut,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let n=Nt(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");xt(this,n,ot.OBSERVE,Et,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,ot.NOTIFY,{fn:ft,info:{eventName:Fe(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,ot.REFLECT,{fn:mt,info:{attrName:t}})}_createComputedProperty(e,t,n){let i=Nt(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");xt(this,i,ot.COMPUTE,yt,e,n)}_marshalArgs(e,t,n){const i=this.__data,s=[];for(let r=0,o=e.length;r<o;r++){let{name:o,structured:a,wildcard:l,value:h,literal:d}=e[r];if(!d)if(l){const e=Ae(o,t),s=Tt(i,n,e?t:o);h={path:e?t:o,value:s,base:e?ke(i,o):s}}else h=a?Tt(i,n,o):i[o];s[r]=h}return s}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),i=this.__templateInfo==n;if(!i)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t&&(n=Object.create(n),n.wasPreBound=i,!i&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=n,n.previousTemplateInfo=e,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e){Dt.beginHosting(this);let t=super._stampTemplate(e);Dt.endHosting(this);let n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound){let e=n.childNodes=[];for(let n=t.firstChild;n;n=n.nextSibling)e.push(n)}return t.templateInfo=n,function(e,t){let{nodeList:n,nodeInfoList:i}=t;if(i.length)for(let t=0;t<i.length;t++){let s=i[t],r=n[t],o=s.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];wt(r,n),Ct(r,e,n)}r.__dataHost=e}}(this,n),this.__dataReady&&ht(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let n=t.childNodes;for(let e=0;e<n.length;e++){let t=n[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,n,i){let s=t._parseTemplateNode.call(this,e,n,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=At(t)||" ",gt(this,n,i,"text","textContent",t),s=!0)}return s}static _parseTemplateNodeAttribute(e,n,i,s,r){let o=this._parseBindings(r,n);if(o){let t=s,r="property";at.test(s)?r="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),r="attribute");let a=At(o);return a&&"attribute"==r&&("class"==s&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(s)),e.setAttribute(s,a)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===r&&(s=Le(s)),gt(this,n,i,r,s,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,n,i,s,r)}static _parseTemplateNestedTemplate(e,n,i){let s=t._parseTemplateNestedTemplate.call(this,e,n,i),r=i.templateInfo.hostProps;for(let e in r)gt(this,n,i,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}]);return s}static _parseBindings(e,t){let n,i=[],s=0;for(;null!==(n=St.exec(e));){n.index>s&&i.push({literal:e.slice(s,n.index)});let r=n[1][0],o=Boolean(n[2]),a=n[3].trim(),l=!1,h="",d=-1;"{"==r&&(d=a.indexOf("::"))>0&&(h=a.substring(d+2),a=a.substring(0,d),l=!0);let c=Nt(a),u=[];if(c){let{args:e,methodName:n}=c;for(let t=0;t<e.length;t++){let n=e[t];n.literal||u.push(n)}let i=t.dynamicFns;(i&&i[n]||c.static)&&(u.push(n),c.dynamicFn=!0)}else u.push(a);i.push({source:a,mode:r,negate:o,customEvent:l,signature:c,dependencies:u,event:h}),s=St.lastIndex}if(s&&s<e.length){let t=e.substring(s);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,n,i,s,r){let o;return o=t.signature?Et(e,n,i,0,t.signature):n!=t.source?ke(e,t.source):r&&Ee(n)?ke(e,n):e.__data[n],t.negate&&(o=!o),o}}}),Dt=new class{constructor(){this.stack=[]}registerHost(e){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(e)}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}},Rt=[],Lt=de(e=>{const t=Ve(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof s?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let n in e){const i=e[n];t[n]="function"==typeof i?{type:i}:i}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){e=this.prototype,Rt.push(e);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(e=>this.attributeNameForProperty(e)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s}),Ft=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ht=de(e=>{const t=Lt(It(e));return class extends t{static get polymerElementVersion(){return"3.3.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):e=e.cloneNode(!0)),this.prototype._template=e}static createProperties(e){for(let r in e)t=this.prototype,n=r,s=e,(i=e[r]).computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):t._createComputedProperty(n,i.computed,s)),i.readOnly&&!t._hasReadOnlyEffect(n)?t._createReadOnlyProperty(n,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(n)?t._createReflectedProperty(n):!1===i.reflectToAttribute&&t._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),i.notify&&!t._hasNotifyEffect(n)?t._createNotifyingProperty(n):!1===i.notify&&t._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),i.observer&&t._createPropertyObserver(n,i.observer,s[i.observer]),t._addPropertyToAttributeMap(n);var t,n,i,s}static createObservers(e,t){const n=this.prototype;for(let i=0;i<e.length;i++)n._createMethodObserver(e[i],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(t=fe.import(e,"template"),0))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=re(e.url);else{const e=fe.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=oe,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let i=t[n];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return se(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;(function(e,t,n,i){if(!Ft){const s=t.content.querySelectorAll("style"),r=ve(t),o=function(e){let t=me(e);return t?we(t):[]}(n),a=t.content.firstElementChild;for(let n=0;n<o.length;n++){let s=o[n];s.textContent=e._processStyleText(s.textContent,i),t.content.insertBefore(s,a)}let l=0;for(let t=0;t<r.length;t++){let n=r[t],o=s[l];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):l++,n.textContent=e._processStyleText(n.textContent,i)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)})(this,t,e,n?ie(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=xe(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=ie(this.importPath)),ie(e,t)}static _parseTemplateContent(e,n,i){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,i)}static _addTemplatePropertyEffect(e,n,i){return t._addTemplatePropertyEffect.call(this,e,n,i)}}});
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
class Bt{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,jt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),jt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof Bt?e._cancelAsync():e=new Bt,e.setConfig(t,n),e}}let jt=new Set;const zt=function(e){jt.add(e)},Ut=function(){const e=Boolean(jt.size);return jt.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/};let Kt="string"==typeof document.head.style.touchAction,qt="__polymerGesturesHandled",$t="__polymerGesturesTouchAction",Vt=["mousedown","mousemove","mouseup","click"],Yt=[0,1,4,2],Jt=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Wt(e){return Vt.indexOf(e)>-1}let Xt=!1;function Gt(e){Wt(e)}!function(){try{let e=Object.defineProperty({},"passive",{get(){Xt=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Zt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Qt=[],en={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},tn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function nn(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let i=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<i.length;e++)t.push(i[e])}}return t}let sn=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[qt]={skip:!0},"click"===e.type)){let t=!1,i=dn(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)Qt.push(i[e]);else if(n=i[e],en[n.localName]){let n=nn(i[e]);for(let e=0;e<n.length;e++)t=t||Qt.indexOf(n[e])>-1}if(i[e]===an.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function rn(e){let t=Zt?["click"]:Vt;for(let n,i=0;i<t.length;i++)n=t[i],e?(Qt.length=0,document.addEventListener(n,sn,!0)):document.removeEventListener(n,sn,!0)}function on(e){let t=e.type;if(!Wt(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Jt&&(t=Yt[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let an={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ln(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function hn(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){an.mouse.mouseIgnoreJob||rn(!0),an.mouse.target=dn(e)[0],an.mouse.mouseIgnoreJob=Bt.debounce(an.mouse.mouseIgnoreJob,Ke.after(2500),(function(){rn(),an.mouse.target=null,an.mouse.mouseIgnoreJob=null}))}),!!Xt&&{passive:!0});const dn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],cn={},un=[];function pn(e){const t=dn(e);return t.length>0?t[0]:e.target}function _n(e){let t,n=e.type,i=e.currentTarget.__polymerGestures;if(!i)return;let s=i[n];if(s){if(!e[qt]&&(e[qt]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(an.touch.id=t.identifier),an.touch.id!==t.identifier)return;Kt||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)an.touch.x=t.clientX,an.touch.y=t.clientY,an.touch.scrollDecided=!1;else if("touchmove"===n){if(an.touch.scrollDecided)return;an.touch.scrollDecided=!0;let n=function(e){let t="auto",n=dn(e);for(let e,i=0;i<n.length;i++)if(e=n[i],e[$t]){t=e[$t];break}return t}(e),i=!1,s=Math.abs(an.touch.x-t.clientX),r=Math.abs(an.touch.y-t.clientY);e.cancelable&&("none"===n?i=!0:"pan-x"===n?i=r>s:"pan-y"===n&&(i=s>r)),i?e.preventDefault():gn("track")}}(e)}if(t=e[qt],!t.skip){for(let n,i=0;i<un.length;i++)n=un[i],s[n.name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let i,r=0;r<un.length;r++)i=un[r],s[i.name]&&!t[i.name]&&(t[i.name]=!0,i[n](e))}}}function fn(e){un.push(e);for(let t=0;t<e.emits.length;t++)cn[e.emits[t]]=e}function mn(e,t){Kt&&e instanceof HTMLElement&&qe.run(()=>{e.style.touchAction=t}),e[$t]=t}function yn(e,t,n){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,xe(e).dispatchEvent(i),i.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function gn(e){let t=function(e){for(let t,n=0;n<un.length;n++){t=un[n];for(let n,i=0;i<t.emits.length;i++)if(n=t.emits[i],n===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function bn(e,t,n,i){t&&yn(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(e){return gn(e)}})}function vn(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),s=Math.abs(e.y-n);return i>=5||s>=5}function wn(e,t,n){if(!t)return;let i,s=e.moves[e.moves.length-2],r=e.moves[e.moves.length-1],o=r.x-e.x,a=r.y-e.y,l=0;s&&(i=r.x-s.x,l=r.y-s.y),yn(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:o,dy:a,ddx:i,ddy:l,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let s=i;if(i=i.shadowRoot.elementFromPoint(e,t),s===i)break;i&&(n=i)}return n}(n.clientX,n.clientY)}})}function Cn(e,t,n){let i=Math.abs(t.clientX-e.x),s=Math.abs(t.clientY-e.y),r=pn(n||t);!r||tn[r.localName]&&r.hasAttribute("disabled")||(isNaN(i)||isNaN(s)||i<=25&&s<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=pn(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),i=e.pageX,s=e.pageY;return!(i>=n.left&&i<=n.right&&s>=n.top&&s<=n.bottom)}return!1}(t))&&(e.prevent||yn(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}fn({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){hn(this.info)},mousedown:function(e){if(!on(e))return;let t=pn(e),n=this;ln(this.info,(function(e){on(e)||(bn("up",t,e),hn(n.info))}),(function(e){on(e)&&bn("up",t,e),hn(n.info)})),bn("down",t,e)},touchstart:function(e){bn("down",pn(e),e.changedTouches[0],e)},touchend:function(e){bn("up",pn(e),e.changedTouches[0],e)}}),fn({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,hn(this.info)},mousedown:function(e){if(!on(e))return;let t=pn(e),n=this,i=function(e){let i=e.clientX,s=e.clientY;vn(n.info,i,s)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&gn("tap"),n.info.addMove({x:i,y:s}),on(e)||(n.info.state="end",hn(n.info)),t&&wn(n.info,t,e),n.info.started=!0)};ln(this.info,i,(function(e){n.info.started&&i(e),hn(n.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=pn(e),n=e.changedTouches[0],i=n.clientX,s=n.clientY;vn(this.info,i,s)&&("start"===this.info.state&&gn("tap"),this.info.addMove({x:i,y:s}),wn(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=pn(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),wn(this.info,t,n))}}),fn({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){on(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){on(e)&&Cn(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Cn(this.info,e.changedTouches[0],e)}});const xn=de(e=>class extends e{_addEventListenerToNode(e,t,n){(function(e,t,n){return!!cn[t]&&(function(e,t,n){let i=cn[t],s=i.deps,r=i.name,o=e.__polymerGestures;o||(e.__polymerGestures=o={});for(let t,n,i=0;i<s.length;i++)t=s[i],Zt&&Wt(t)&&"click"!==t||(n=o[t],n||(o[t]=n={_count:0}),0===n._count&&e.addEventListener(t,_n,Gt(t)),n[r]=(n[r]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),i.touchAction&&mn(e,i.touchAction)}(e,t,n),!0)})(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){(function(e,t,n){return!!cn[t]&&(function(e,t,n){let i=cn[t],s=i.deps,r=i.name,o=e.__polymerGestures;if(o)for(let t,n,i=0;i<s.length;i++)t=s[i],n=o[t],n&&n[r]&&(n[r]=(n[r]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,_n,Gt(t)));e.removeEventListener(t,n)}(e,t,n),!0)})(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}),En=/:host\(:dir\((ltr|rtl)\)\)/g,Pn=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Sn=/:dir\((?:ltr|rtl)\)/,An=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Nn=[];let On=null,Tn="";function kn(){Tn=document.documentElement.getAttribute("dir")}function Mn(e){e.__autoDirOptOut||e.setAttribute("dir",Tn)}function In(){kn(),Tn=document.documentElement.getAttribute("dir");for(let e=0;e<Nn.length;e++)Mn(Nn[e])}const Dn=de(e=>{An||On||(kn(),On=new MutationObserver(In),On.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=We(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!An&&Sn.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(En,':host([dir="$1"])'),t=t.replace(Pn,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(On&&On.takeRecords().length&&In(),Nn.push(this),Mn(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Nn.indexOf(this);e>-1&&Nn.splice(e,1)}}}return n.__activateDir=!1,n});
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
*/function Rn(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ln(e,t,n){return{index:e,removed:t,addedCount:n}}function Fn(e,t){return function(e,t,n,i,s,r){let o,a=0,l=0,h=Math.min(n-t,r-s);if(0==t&&0==s&&(a=function(e,t,n){for(let i=0;i<n;i++)if(!Hn(e[i],t[i]))return i;return n}(e,i,h)),n==e.length&&r==i.length&&(l=function(e,t,n){let i=e.length,s=t.length,r=0;for(;r<n&&Hn(e[--i],t[--s]);)r++;return r}(e,i,h-a)),s+=a,r-=l,(n-=l)-(t+=a)==0&&r-s==0)return[];if(t==n){for(o=Ln(t,[],0);s<r;)o.removed.push(i[s++]);return[o]}if(s==r)return[Ln(t,[],n-t)];let d=function(e){let t=e.length-1,n=e[0].length-1,i=e[t][n],s=[];for(;t>0||n>0;){if(0==t){s.push(2),n--;continue}if(0==n){s.push(3),t--;continue}let r,o=e[t-1][n-1],a=e[t-1][n],l=e[t][n-1];r=a<l?a<o?a:o:l<o?l:o,r==o?(o==i?s.push(0):(s.push(1),i=o),t--,n--):r==a?(s.push(3),t--,i=a):(s.push(2),n--,i=l)}return s.reverse(),s}(function(e,t,n,i,s,r){let o=r-s+1,a=n-t+1,l=new Array(o);for(let e=0;e<o;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let n=1;n<o;n++)for(let r=1;r<a;r++)if(Hn(e[t+r-1],i[s+n-1]))l[n][r]=l[n-1][r-1];else{let e=l[n-1][r]+1,t=l[n][r-1]+1;l[n][r]=e<t?e:t}return l}(e,t,n,i,s,r));o=void 0;let c=[],u=t,p=s;for(let e=0;e<d.length;e++)switch(d[e]){case 0:o&&(c.push(o),o=void 0),u++,p++;break;case 1:o||(o=Ln(u,[],0)),o.addedCount++,u++,o.removed.push(i[p]),p++;break;case 2:o||(o=Ln(u,[],0)),o.addedCount++,u++;break;case 3:o||(o=Ln(u,[],0)),o.removed.push(i[p]),p++}return o&&c.push(o),c}(e,0,e.length,t,0,t.length)}function Hn(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Bn(e){return"slot"===e.localName}"interactive"===document.readyState||"complete"===document.readyState?Rn():window.addEventListener("DOMContentLoaded",Rn);let jn=class{static getFlattenedNodes(e){const t=xe(e);return Bn(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Bn(e)?xe(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Bn(this._target)?this._listenSlots([this._target]):xe(this._target).children&&(this._listenSlots(xe(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Bn(this._target)?this._unlistenSlots([this._target]):xe(this._target).children&&(this._unlistenSlots(xe(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,qe.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=Fn(t,this._effectiveNodes);for(let t,i=0;i<n.length&&(t=n[i]);i++)for(let n,i=0;i<t.removed.length&&(n=t.removed[i]);i++)e.removedNodes.push(n);for(let i,s=0;s<n.length&&(i=n[s]);s++)for(let n=i.index;n<i.index+i.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Bn(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Bn(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zn=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Ut()}while(e||t)},Un=Element.prototype,Kn=Un.matches||Un.matchesSelector||Un.mozMatchesSelector||Un.msMatchesSelector||Un.oMatchesSelector||Un.webkitMatchesSelector,qn=function(e,t){return Kn.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class $n{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new jn(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(xe(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=xe(t).parentNode||xe(t).host;return t===this.node}getOwnerRoot(){return xe(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?xe(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=xe(this.node).assignedSlot;for(;t;)e.push(t),t=xe(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return xe(n).importNode(e,t)}getEffectiveChildNodes(){return jn.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let i,s=0,r=t.length;s<r&&(i=t[s]);s++)i.nodeType===Node.ELEMENT_NODE&&qn(i,e)&&n.push(i);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function Vn(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}class Yn{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}$n.prototype.cloneNode,$n.prototype.appendChild,$n.prototype.insertBefore,$n.prototype.removeChild,$n.prototype.replaceChild,$n.prototype.setAttribute,$n.prototype.removeAttribute,$n.prototype.querySelector,$n.prototype.querySelectorAll,$n.prototype.parentNode,$n.prototype.firstChild,$n.prototype.lastChild,$n.prototype.nextSibling,$n.prototype.previousSibling,$n.prototype.firstElementChild,$n.prototype.lastElementChild,$n.prototype.nextElementSibling,$n.prototype.previousElementSibling,$n.prototype.childNodes,$n.prototype.children,$n.prototype.classList,$n.prototype.textContent,$n.prototype.innerHTML;let Jn=$n;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames($n.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=$n.prototype[t])}),Vn(e.prototype,["classList"]),Jn=e,Object.defineProperties(Yn.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Wn(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){const i=n[e];if(Wn(i).getOwnerRoot()===t)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let n=0;n<t.length;n++){let i=t[n];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}($n.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Vn($n.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}($n.prototype,["textContent","innerHTML","className"]);const Wn=function(e){if((e=e||document)instanceof Jn)return e;if(e instanceof Yn)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Yn(e):new Jn(e),e.__domApi=t),t},Xn=window.ShadyDOM,Gn=window.ShadyCSS;function Zn(e,t){return xe(e).getRootNode()===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Qn=window.ShadyCSS;const ei=de(e=>{const t=Dn(xn(Ht(e))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,n,i){t!==n&&(super.attributeChangedCallback(e,t,n,i),this.attributeChanged(e,t,n))}attributeChanged(e,t,n){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let i,s=0;s<n.length&&(i=n[s]);s++){let n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=t;let s=n.node||this;return xe(s).dispatchEvent(i),i}listen(e,t,n){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),s=i.get(e);s||(s={},i.set(e,s));let r=t+n;s[r]||(s[r]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),s=t+n,r=i&&i[s];r&&(this._removeEventListenerFromNode(e,t,r),i[s]=null)}setScrollDirection(e,t){mn(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=xe(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Wn(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Wn(this).getEffectiveChildNodes()}queryDistributedElements(e){return Wn(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,i=0;n=e[i];i++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Wn(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&xe(this).contains(e)&&xe(this).getRootNode()===xe(e).getRootNode()}isLocalDescendant(e){return this.root===xe(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Xn||!Gn)return null;if(!Xn.handlesDynamicScoping)return null;const n=Gn.ScopingShim;if(!n)return null;const i=n.scopeForNode(e),s=xe(e).getRootNode(),r=e=>{if(!Zn(e,s))return;const t=Array.from(Xn.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const r=t[e];if(!Zn(r,s))continue;const o=n.currentScopeForNode(r);o!==i&&(""!==o&&n.unscopeNode(r,o),n.scopeNode(r,i))}};if(r(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.addedNodes.length;e++){const t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&r(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Qn.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=Bt.debounce(this._debouncers[e],n>0?Ke.after(n):qe,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Ke.run(e.bind(this),t):~qe.run(e.bind(this))}cancelAsync(e){e<0?qe.cancel(~e):Ke.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return qn(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(xe(n).setAttribute(e,""),!0):(xe(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,i){i=i||this,this.transform("translate3d("+e+","+t+","+n+")",i)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else if(n=ke(this,e).indexOf(t),n>=0)return this.splice(e,n,1);return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return i.prototype.is="",i}),ti={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},ni={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},ii=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},ni);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function si(e,t,n,i){!function(e,t,n){const i=e._noAccessors,s=Object.getOwnPropertyNames(e);for(let r=0;r<s.length;r++){let o=s[r];if(!(o in n))if(i)t[o]=e[o];else{let n=Object.getOwnPropertyDescriptor(e,o);n&&(n.configurable=!0,Object.defineProperty(t,o,n))}}}(t,e,i);for(let e in ti)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function ri(e,t){for(const n in t){const i=e[n],s=t[n];e[n]=!("value"in s)&&i&&"value"in i?Object.assign({value:i.value},s):s}}const oi=function(e){let t;return t="function"==typeof e?e:oi.Class(e),customElements.define(t.is,t),t
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
*/};function ai(e,t,n,i,s){let r;s&&(r="object"==typeof n&&null!==n,r&&(i=e.__dataTemp[t]));let o=i!==n&&(i==i||n==n);return r&&o&&(e.__dataTemp[t]=n),o}oi.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(ei(HTMLElement)):ei(HTMLElement);return n=function(e,t,n){let i;const s={};class r extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let e,t=0;t<i.length;t++)e=i[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(i)for(let e=0;e<i.length;e++)ri(t,i[e].properties);return ri(t,e.properties),t}static get observers(){let t=[];if(i)for(let e,n=0;n<i.length;n++)e=i[n],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=s.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=r.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered();const t=Object.getPrototypeOf(this);let n=s.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=s.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=s.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=s.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=s.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=s.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=s.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let i=s.attributeChanged;if(i)for(let s=0;s<i.length;s++)i[s].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;i=function e(t,n,i){n=n||[];for(let s=t.length-1;s>=0;s--){let r=t[s];r?Array.isArray(r)?e(r,n):n.indexOf(r)<0&&(!i||i.indexOf(r)<0)&&n.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,e),r.prototype.behaviors=e?e.concat(n):i}const o=t=>{i&&function(e,t,n){for(let i=0;i<t.length;i++)si(e,t[i],n,ii)}(t,i,s),si(t,e,s,ni)};return o(r.prototype),r.generatedFrom=e,r}(e,n,e.behaviors),n.is=n.prototype.is=e.is,n};const li=de(e=>class extends e{_shouldPropertyChange(e,t,n){return ai(this,e,t,n,!0)}}),hi=de(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return ai(this,e,t,n,this.mutableData)}});li._mutablePropertyChange=ai;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let di=null;function ci(){return di}ci.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ci,writable:!0}});const ui=It(ci),pi=li(ui),_i=It(class{});class fi extends _i{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,n)}}_showHideChildren(e){let t=this.children;for(let n=0;n<t.length;n++){let i=t[n];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),xe(xe(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&xe(xe(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}fi.prototype.__dataHost,fi.prototype.__templatizeOptions,fi.prototype._methodHost,fi.prototype.__templatizeOwner,fi.prototype.__hostProps;const mi=li(fi);function yi(e){let t=e.__dataHost;return t&&t._methodHost||t}function gi(e,t){return function(e,n,i){t.call(e.__templatizeOwner,n.substring("_host_".length),i[n])}}function bi(e,t){return function(e,n,i){t.call(e.__templatizeOwner,e,n,i[n])}}function vi(e,t,n){if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:fi)._parseTemplate(e),s=i.templatizeInstanceClass;s||(s=function(e,t,n){let i=n.mutableData?mi:fi;vi.mixin&&(i=vi.mixin(i));let s=class extends i{};return s.prototype.__templatizeOptions=n,s.prototype._bindTemplate(e),function(e,t,n,i){let s=n.hostProps||{};for(let t in i.instanceProps){delete s[t];let n=i.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:bi(t,n)})}if(i.forwardHostProp&&t.__dataHost)for(let t in s)n.hasHostProps||(n.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(s,e,t,n),s}(e,i,n),i.templatizeInstanceClass=s),function(e,t,n){let i=n.forwardHostProp;if(i&&t.hasHostProps){let s=t.templatizeTemplateClass;if(!s){let e=n.mutableData?pi:ui;s=t.templatizeTemplateClass=class extends e{};let r=t.hostProps;for(let e in r)s.prototype._addPropertyEffect("_host_"+e,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:gi(e,i)}),s.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){di=e,Object.setPrototypeOf(e,t.prototype),new t,di=null}(e,s),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}(e,i,n);let r=class extends s{};return r.prototype._methodHost=yi(e),r.prototype.__dataHost=e,r.prototype.__templatizeOwner=t,r.prototype.__hostProps=i.hostProps,r=r,r}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const wi=xn(hi(It(HTMLElement)));customElements.define("dom-bind",class extends wi{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,i){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){xe(xe(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ci{constructor(e){this.value=e.toString()}toString(){return this.value}}const xi=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce((t,n,i)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Ci)return function(e){if(e instanceof Ci)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(n)+e[i+1],e[0]),n},Ei=Ht(HTMLElement),Pi=hi(Ei);class Si extends Pi{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=xe(xe(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=vi(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let n=this.__instances;for(let i,s=0;s<n.length&&(i=n[s]);s++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if((i=this.as)===(s=t)||Se(i,s)||Ae(i,s)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=n);let s=Ne(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,t);this.notifyPath(s,n)}var i,s}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=Bt.debounce(this.__renderDebouncer,t>0?Ke.after(t):qe,e.bind(this)),zt(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),zn()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;this.__filterFn&&(t=t.filter((t,n,i)=>this.__filterFn(e[t],n,i))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n]));const n=this.__itemsIdxToInstIdx={};let i=0;const s=Math.min(t.length,this.__limit);for(;i<s;i++){let s=this.__instances[i],r=t[i],o=e[r];n[r]=i,s?(s._setPendingProperty(this.as,o),s._setPendingProperty(this.indexAs,i),s._setPendingProperty(this.itemsIndexAs,r),s._flushProperties()):this.__insertInstance(o,i,r)}for(let e=this.__instances.length-1;e>=i;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const n=xe(t.root);for(let e=0;e<t.children.length;e++){let i=t.children[e];n.appendChild(i)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,n){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(e,t,n){let i=this.__pool.pop();i?(i._setPendingProperty(this.as,e),i._setPendingProperty(this.indexAs,t),i._setPendingProperty(this.itemsIndexAs,n),i._flushProperties()):i=this.__stampInstance(e,t,n);let s=this.__instances[t+1],r=s?s.children[0]:this;return xe(xe(this).parentNode).insertBefore(i.root,r),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),i=n.indexOf("."),s=i<0?n:n.substring(0,i);if(s==parseInt(s,10)){let e=i<0?"":n.substring(i+1);this.__handleObservedPaths(e);let r=this.__itemsIdxToInstIdx[s],o=this.__instances[r];if(o){let n=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(n,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let n;for(;t;)if(n=t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=xe(t).parentNode;return null}
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
*/(this.template,e)}}customElements.define(Si.is,Si);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ai extends Ei{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Bt.debounce(this.__renderDebouncer,qe,()=>this.__render()),zt(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=xe(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||xe(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){zn()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=xe(this).parentNode;if(e){if(!this.__ctor){let e=xe(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!xe(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=vi(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Pe(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length&&xe(this).previousSibling!==t[t.length-1])for(let n,i=0;i<t.length&&(n=t[i]);i++)xe(e).insertBefore(n,this)}else this.__instance=new this.__ctor,xe(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=xe(e[0]).parentNode;if(t){t=xe(t);for(let n,i=0;i<e.length&&(n=e[i]);i++)t.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(Ai.is,Ai);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ni=de(e=>{let t=Ht(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=Fn(n,i);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let i=e[n];t.forEach((e,n)=>{e<i.index||(e>=i.index+i.removed.length?t.set(n,e+i.addedCount-i.removed.length):t.set(n,-1))});for(let e=0;e<i.addedCount;e++){let n=i.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach((e,i)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(i)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,i)=>{t==e++&&this.deselect(i)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(Ei);class Oi extends Ni{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Oi.is,Oi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ti=new X;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){Ti.processStyles(),N(e,t)},styleElement(e){Ti.processStyles()},styleDocument(e){Ti.processStyles(),N(document.body,e)},getComputedStyleValue:(e,t)=>O(e,t),flushCustomStyles(){},nativeCss:l,nativeShadow:i,cssBuild:r,disableRuntime:a}),window.ShadyCSS.CustomStyleInterface=Ti;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ki=window.ShadyCSS.CustomStyleInterface;class Mi extends HTMLElement{constructor(){super(),this._style=null,ki.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),n="";for(let e=0;e<t.length;e++)n+=Ce(t[e]);return n}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/}}let Ii;window.customElements.define("custom-style",Mi),Ii=li._mutablePropertyChange,Boolean,ei(HTMLElement).prototype;const Di=xi`
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
</custom-style>`;Di.setAttribute("style","display: none;"),document.head.appendChild(Di.content);var Ri=document.createElement("style");Ri.textContent="[hidden] { display: none !important; }",document.head.appendChild(Ri);
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
const Li=xi`
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
</custom-style>`;Li.setAttribute("style","display: none;"),document.head.appendChild(Li.content);
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
const Fi=xi`
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
const Hi={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Bi={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},ji={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},zi={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Ui=/[a-z0-9*]/,Ki=/U\+/,qi=/^arrow/,$i=/^space(bar)?/,Vi=/^escape$/;function Yi(e,t){var n="";if(e){var i=e.toLowerCase();" "===i||$i.test(i)?n="space":Vi.test(i)?n="esc":1==i.length?t&&!Ui.test(i)||(n=i):n=qi.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return n}function Ji(e,t){return function(e,t){return e.key?Yi(e.key,t):e.detail&&e.detail.key?Yi(e.detail.key,t):(i="",(n=e.keyIdentifier)&&(n in Bi?i=Bi[n]:Ki.test(n)?(n=parseInt(n.replace("U+","0x"),16),i=String.fromCharCode(n).toLowerCase()):i=n.toLowerCase()),i||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):ji[e]),t}(e.keyCode)||"");var n,i}(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Wi(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var n=t.split(":"),i=n[0],s=n[1];return i in zi?(e[zi[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=s||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const Xi={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var n=Wi(t),i=0;i<n.length;++i)if(Ji(n[i],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var n=e[0].hasModifiers;return n===t[0].hasModifiers?0:n?-1:1}))},_addKeyBinding:function(e,t){Wi(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],n=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,n]),this.keyEventTarget.addEventListener(e,n)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,n,i;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],n=e[1],i=e[2],t.removeEventListener(n,i)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var n=0;n<e.length;n++){var i=e[n][0],s=e[n][1];if(Ji(i,t)&&(this._triggerKeyHandler(i,s,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,n){var i=Object.create(e);i.keyboardEvent=n;var s=new CustomEvent(e.event,{detail:i,cancelable:!0});this[t].call(this,s),s.defaultPrevented&&n.preventDefault()}},Gi={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,n=Wn(t).localTarget;this.isLightDescendant(n)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,n=Wn(t).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Zi=[Xi,Gi];
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
*/var Qi={distance:function(e,t,n,i){var s=e-n,r=t-i;return Math.sqrt(s*s+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function es(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function ts(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Wn(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}es.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var n=Qi.distance(e,t,0,0),i=Qi.distance(e,t,this.width,0),s=Qi.distance(e,t,0,this.height),r=Qi.distance(e,t,this.width,this.height);return Math.max(n,i,s,r)}},ts.MAX_RADIUS=300,ts.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=Qi.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?Qi.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,n=1.1*Math.min(Math.sqrt(e+t),ts.MAX_RADIUS)+5,i=1.1-n/ts.MAX_RADIUS*.2,s=this.mouseInteractionSeconds/i,r=n*(1-Math.pow(80,-s));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,ts.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,ts.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new es(this.element)},draw:function(){var e,t,n;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+n+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+n+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Qi.now(),this.center?(this.xStart=t,this.yStart=n,this.slideDistance=Qi.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=n,this.slideDistance=Qi.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=Qi.now())},remove:function(){Wn(Wn(this.waveContainer).parentNode).removeChild(this.waveContainer)}},oi({_template:xi`
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
`,is:"paper-ripple",behaviors:[Xi],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==Wn(this).parentNode.nodeType?this.keyEventTarget=Wn(this).getOwnerRoot().host:this.keyEventTarget=Wn(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new ts(this);return Wn(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}});
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
const ns={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){Gi._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&Wn(t).appendChild(this._ripple),e){var n=Wn(this._rippleContainer||this),i=Wn(e).rootTarget;n.deepContains(i)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}},is={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){Gi._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){Gi._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},ss=[Zi,Hi,ns,is],rs=xi`
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
*/;rs.setAttribute("strip-whitespace",""),oi({_template:rs,is:"paper-button",behaviors:[ss],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?is._calculateElevation.apply(this):this._setElevation(0)}})}})},function(e,t,n){"use strict";var i=n(0),s=n(1);class r extends i.a{static get observedAttributes(){return["name","should-run","debug"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>"}connectedCallback(){this.started||(this.started=!0,void 0!==this.innerFragment&&(s.a.scanAndReplace(this.innerFragment),this.appendChild(this.innerFragment),this._restoreHeldNodes(this)))}}customElements.get("aa-when")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-WHEN"),customElements.define("aa-when",r))},function(e,t,n){"use strict";var i=n(0);class s extends i.a{constructor(){super()}connectedCallback(){this.started||(this.started=!0,void 0!==this.innerFragment&&(this.appendChild(this.innerFragment),this._restoreHeldNodes(this)))}}customElements.get("aa-otherwise")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-OTHERWISE"),customElements.define("aa-otherwise",s))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},,function(e,t,n){"use strict";n.r(t);n(4);var i=n(0);class s extends i.a{static get observedAttributes(){return["name","value"]}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){this._getParentSession().setData(this.name,this.value)}}customElements.get("aa-variable")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-VARIABLE"),customElements.define("aa-variable",s));class r extends i.a{static get observedAttributes(){return["name","debug","value","min","max"]}constructor(){super()}connectedCallback(){let e=this._getParentSession();this.value=this.getValue(),e.setData(this.name,this.value),this._dispatchEndEvent()}getValue(){var e=parseFloat(this.min),t=parseFloat(this.max);return this.getRandomInt(e,t)}getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+.5)+e}}customElements.get("aa-function-random")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-FUNCTION-RANDOM"),customElements.define("aa-function-random",r));var o=n(2),a=n(1);class l extends i.a{get observedAttributes(){return["name"]}constructor(){super()}connectedCallback(){}setData(e,t){this.dataset[e]=t}getData(e){return this.dataset[this.toHyphenated(e)]}}customElements.get("aa-memory")||(void 0===window.AANodeNames&&(window.AANodeNames=[]),window.AANodeNames.push("AA-MEMORY"),customElements.define("aa-memory",l));class h extends i.a{static get observedAttributes(){return["submit-button-text","submit-button-hidden","name"]}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){super.connectedCallback(),this.submitButtonText=this._submitButtonText||"submit",this.root.innerHTML=this.css+this.html,this._started||(this._started=!0,this.submitButtonHidden&&(this.root.querySelector(".submitButtonContainer").style.display="none"),this.root.querySelector(".submitButton").addEventListener("click",this.submitButtonClick.bind(this)))}get css(){return html`
            <style>
                :host {
                    display: block;
                    height: fit-content;
                    border: solid thin;
                }

                .submitButtonContainer{
                    display:flex; 
                    justify-content: space-between; 
                    align-items:center;
                }
            
            </style>
        `}get html(){return html`
            <slot></slot>
            
            <div class='submitButtonContainer'>
                <div>
                    <button class='submitButton'> button: ${this.submitButtonText}</button>
                </div>
                <div id='userMessage'></div>
            </div>
        
        `}attributeChangedCallback(){}hasChildrenThatDemandResponse(){let e=this.getEmaChildren(this),t=!1;for(let n=0;n<e.length;n++){let i=e[n];i.demandsResponse&&null==i.getValue()&&(i.displayAttention&&i.displayAttention(),t=!0)}return t&&(this.userMessage.innerHTML='<div style="display:flex; align-items:center"> <div>please fill out the required fields</div> <div id="attention" style="color: red; font-size: 20px;  border: solid thin; border-radius: 50%; width: 20px;\n                                            margin-left:20px; height: 20px; \n                                            text-align: center;\n                                            padding: 5px;">!</div></div>',this.userMessage.style.color="red"),t}submitButtonClick(e){if(this.$.userMessage.innerHTML="",this.hasChildrenThatDemandResponse())return;let t=new CustomEvent("valueSubmit",{bubbles:!0,detail:{value:this.getValue()}});this.dispatchEvent(t),this._dispatchEndEvent(this.getValue()),void 0!==e.detail.callback&&e.detail.callback(e),0==this.dontHide&&this.hide()}getChildrenValuesOrder(e){void 0===e&&(e=this);for(var t=this.getEmaChildren(e),n=[],i=0;i<t.length;i++){var s=t[i];void 0!==this.name?n.push(this.name+"$"+s.getName()):n.push(s.getName())}}getValue(){this.attachedTimestamp,(new Date).getTime();return this.getChildrenValues(this)}getValueWithKey(){var e={};return e[this.name]=this.getValue(),e}automate(){for(var e=0;e<this.children.length;e++)this.isEmaElement(this.children[e])&&void 0!==this.children[e].automate&&this.children[e].automate();this.submitButtonClick()}hide(){this.style.display="none"}show(){this.style.display="block"}}customElements.get("aa-screen")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-SCREEN"),customElements.define("aa-screen",h));class d extends i.a{static get observedAttributes(){return["name","goto"]}connectedCallback(){this.dispatchEvent(new CustomEvent("endEvent",{bubbles:!0,detail:{goto:this.goto}}))}}customElements.get("aa-jump")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-JUMP"),customElements.define("aa-jump",d));class c extends i.a{static get observedAttributes(){return["name","write-into","should-run","debug","type","stopped"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>"}connectedCallback(){this.root.addEventListener("endEvent",this.endEventListener.bind(this)),this.started=!1,null!==this.shouldRun&&!0!==this.shouldRun||this.init()}get css(){return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `}get html(){return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `}init(){if(this.nextStarted=!1,this.writeInto?this.target=document.querySelector(this.writeInto):this.target=this,!this.started){if(void 0===this.innerFragment)return console.warn(".innerFragment is undefined"),void this.restoreHeldNodes(this);this.sIndex=0,this.nextCalls=[!0],this.nextIndex=0,this.stopped||this.start()}}start(){this.started||(this.started=!0,this.nextWithTimeout(this.hasNext()))}stop(){this.stopped=!0,this.started=!1}nextWithTimeout(e){this.next(e),setTimeout(()=>{let e=this.hasNext();e?this.nextWithTimeout(e):null==e&&this._dispatchEndEvent()},0)}next(e){if(this.sIndex>=this.innerFragment.childNodes.length)return null;if("string"==typeof e)for(let t=0;t<this.innerFragment.childNodes.length;t++)if(this.innerFragment.childNodes[t].getAttribute&&this.innerFragment.childNodes[t].getAttribute("name")==e){this.sIndex=t;break}let t=this.innerFragment.childNodes[this.sIndex];for(;t.nodeType!=Node.ELEMENT_NODE;){let e=this.copy(t);this.target.appendChild(e),this.sIndex++,t=this.innerFragment.childNodes[this.sIndex]}let n=this.copy(t);this.sIndex+=1,this.target.appendChild(n),a.a.scanAndRestore(this.target.childNodes[this.childNodes.length-1]),n._dispatchEndEvent||this.nextCalls.push(!0),this.prevPerformance?(this.time=performance.now()-this.prevPerformance,this.prevPerformance=performance.now()):this.prevPerformance=performance.now()}hasNext(){if(!1===this.started)return null;if(this.nextIndex<this.nextCalls.length){let e=this.nextCalls[this.nextIndex];return this.nextIndex++,e}return null}endEventListener(e){e.stopPropagation();let t=null;e.detail&&e.detail.goto?(t=e.detail.goto,this.nextCalls.push(t)):this.nextCalls.push(!0),this.nextCalls[this.nextIndex]||this.nextWithTimeout(this.hasNext())}}customElements.get("aa-sequence")||(void 0===window.AANodeNames&&(window.AANodeNames=[]),window.AANodeNames.push("AA-SEQUENCE"),customElements.define("aa-sequence",c));class u extends i.a{static get observedAttributes(){return["name","should-run","debug"]}constructor(){super(),this._mem=document.createElement("aa-memory"),this.myTemplate=document.createElement("template"),this.myTemplate.innerHTML=this.innerHTML,this.innerHTML="",this.addEventListener("valueSubmit",e=>{let t={data:e.detail.value,sessionID:this.sessionID,sessionTimestamp:this.sessionTime,sessionName:this.name,variables:Object.keys(e.detail.value)};this._mem.saveReplyValue(e.detail.value,!1);let n=new CustomEvent("inputSubmit",{bubbles:!0,detail:{input:t}});this.dispatchEvent(n)}),this.addEventListener("endEvent",e=>{this.debug||e.stopPropagation();let t=new CustomEvent("sessionEndEvent",{bubbles:!0,detail:"sessionEnd"});this.dispatchEvent(t)})}myIdGenerator(){return 0}connectedCallback(){this.sessionID=this.myIdGenerator(),this.sessionTime=(new Date).getTime();let e=Object.keys(this.dataset);for(let t in e)this.setData(e[t],this.dataset[e[t]]);null!==this.shouldRun&&!0!==this.shouldRun||this.run()}attachTemplateChildNodesToMyself(e){for(;e.content.childNodes.length;)if("TEMPLATE"===e.content.childNodes[0].nodeName){for(;e.content.childNodes[0].content.childNodes.length;)this.appendChild(e.content.childNodes[0].content.childNodes[0]);e.content.childNodes[0].remove()}else this.appendChild(e.content.childNodes[0])}run(){let e=this.myTemplate.cloneNode(!0);a.a.scanAndReplace(e),this.attachTemplateChildNodesToMyself(e);for(let e=0;e<this.childNodes.length;e++)a.a.scanAndRestore(this.childNodes[e])}getData(e){return this._mem.getData(e)}setData(e,t){return this._mem.setData(e,t)}getDataDump(){return this._mem.dataset}}customElements.get("aa-session")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-SESSION"),customElements.define("aa-session",u));let p={BaseElement:i.a,AAChoose:o.a,AAMemory:l,AAScreen:h,AASequence:c,AASession:u,AAVariable:s,AAHolder:a.a};window&&(window.aaCustomElements=p)}]);
//# sourceMappingURL=aaCustomElements.js.map