/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/aa-baseElement/baseElement.js":
/*!*******************************************!*\
  !*** ./src/aa-baseElement/baseElement.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseElement; });



var html = function (txt, ...val) {

    let result = txt[0];
    for (let i = 0; i < val.length; i++) {
        result += val[i];
        result += txt[i + 1];
    }
    return result;
}

if(window) window.html = html;

class BaseElement extends HTMLElement {


    constructor() {
        super();
        this._props = this.makePropertiesFromAttributes();
    }

    connectedCallback() {
        console.log(this.tagName, " connected");
        this._attachedTimestamp = new Date().getTime();
        this._debug = (this.debug===true)||(this.debug===null);
    }


    makePropertiesFromAttributes() {
        
        let ElementClass = customElements.get(this.tagName.toLowerCase());

        let attr = ElementClass.observedAttributes;
        if (!attr) return null;
        let props = {};
        for (let i = 0; i < attr.length; i++) {
            let prop = this.toCamelCase(attr[i]);
            props[prop] = attr[i];


            if (typeof this[prop] != 'undefined') {
                continue;
            } else {
                
                Object.defineProperty(this, prop, {
                    get: () => {
                     
                        let result = this.getAttribute(attr[i]);
                        if (result === 'true') { return true; }
                        else if (result === 'false') { return false; }
                        else { return result; }
                    },
                    set: (value) => {
                        this.setAttribute(attr[i], value);
                    }
                });
            }
        }
        return props;
    }

    // setAttributes(){
    //     let propKeys = Object.keys(this._props)
    //     for(let i=0; i<propKeys.length; i++){
    //         let p = this._propKeys[i];
    //         if(this[p]){
    //             this.setAttribute(this._props[p])
    //         }
    //     }
    // }
    toCamelCase(str) {
        let words = str.split('-');
        let result = words[0];
        for (let i = 1; i < words.length; i++) {
            result += words[i][0].toUpperCase() + words[i].substr(1);
        }
        return result;
    }

    toHyphenated(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let letter = str[i];
            if (letter.toLowerCase() !== letter) {
                // letter is uppercase
                result += `-${letter.toLowerCase()}`;
            } else {
                result += letter;
            }
        }
        return result;
    }




    static isAAElement(node) {
        if (AANodeNames.indexOf(node.nodeName) != -1) {
            return true;
        }
        return false;
    }



    _restoreHeldNodes(element) {
        
        console.log("restoring", element)
        let childNodes = element.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            let child = childNodes[i];
            if (child.nodeName=='AA-HOLDER') {
                child.restoreNode();
            }
            else if (child.childNodes.length > 0) {
                this._restoreHeldNodes(child);
            } 
        }
    }


    
   

    _createFragmentForNode(node) {
        let fragment = document.createDocumentFragment();
        //  first get references to the children,
        //  because the element.children array will be modified as they are appended to the fragment
        let childNodes = [];
        for(let i=0; i<node.childNodes.length; i++){
            fragment.append(node.childNodes[i].cloneNode(true));
        }
        return fragment;
    }


    copy(node){
        let nodeCopy;
        if (node.nodeName == "AA-HOLDER") {
            nodeCopy = node.clone();
        } else if (BaseElement.isAAElement(node)) {
            nodeCopy = node.cloneNode();
            nodeCopy.innerFragment = this._createFragmentForNode(node);
        }
        else {
            nodeCopy = node.cloneNode(true);
        }
        return nodeCopy;
    }


    _dispatchDebugEvent(detail) {
        if (this.debug) {
            this.dispatchEvent(new CustomEvent('debugEvent', { detail, bubbles:true }));
        }
    }

    

    _dispatchEndEvent(detail) {
        this.dispatchEvent(new CustomEvent('endEvent', { bubbles: true, detail }));
    }

    _getParentSession(){
        let _sessionElement = this;
        while ((_sessionElement != null) && (_sessionElement.nodeName != 'AA-SESSION')) {
            _sessionElement = _sessionElement.parentNode;
        }
        return _sessionElement;
    }

}


if (!customElements.get('aa-base-element')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-BASE-ELEMENT');
    customElements.define('aa-base-element', BaseElement);
}


/***/ }),

/***/ "./src/aa-choose/aa-choose.js":
/*!************************************!*\
  !*** ./src/aa-choose/aa-choose.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAChoose; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aa-when/aa-when.js */ "./src/aa-choose/aa-when/aa-when.js");
/* harmony import */ var _aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aa-otherwise/aa-otherwise.js */ "./src/aa-choose/aa-otherwise/aa-otherwise.js");
/* harmony import */ var _lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../lib/jsep/jsep.js */ "./src/lib/jsep/jsep.js");






class AAChoose extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get observedAttributes() {
        return ['name', 'should-run', 'debug'];
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = "<slot></slot>"
        this.originalContent = this.innerHTML;
    }

    _restoreOriginalContent(){

    }
    connectedCallback() {
        debugger;
        this._shouldRun = (this.shouldRun === null) || (this.shouldRun === true);
        this.sessionElement = this._getParentSession();
        debugger;
      
        if (this._shouldRun) {
            if (typeof this.innerFragment !== 'undefined') {
                
                let nodes = this._getNodeToInstantiate();
                if (nodes.length == 0) {
                    this._dispatchEndEvent();
                } else {
                    for (let i = 0; i < nodes.length; i++) {
                        let node = nodes[i];
                        if (typeof node!== 'undefined') {
                            this.appendChild(node);
                            // this._restoreHeldNodes(this);
                        }
                       
                    }
                    this._dispatchEndEvent();
                }
            }
            else {
                // this._restoreHeldNodes(this);
                if (this.childNodes.length == 0) {
                    this._dispatchEndEvent();
                }
            }
        }
    }

    _getNodeToInstantiate() {

        debugger;
        this.started = true;
        let nodesToReturn = [];
        let nodeOtherwise = [];

        this.myFragmentChildren = [];
        let isChildTrue = false;
        for (let i = 0; i < this.innerFragment.children.length; i++) {

            let child = this.innerFragment.children[i];

            this.myFragmentChildren.push(child)
            // if (child.nodeName==='AA-HOLDER') {
                
            if (child.nodeName == 'AA-WHEN') {
                    isChildTrue = this.evaluate(child);
                    if (isChildTrue) {
                        nodesToReturn.push(this.copy(child))
                        // return child;
                    };
                }

                if (child.nodeName == 'AA-OTHERWISE') {
                    //we reached otherwise, should we stop and attach it?
                    // /return child;
                    nodeOtherwise.push(this.copy(child))
                }
            // }
        }

        if (nodesToReturn.length == 0) {
            return nodeOtherwise;
        }
        else {
            return nodesToReturn;
        }

    }

    run() {
        this.started = true;
        if (this.myFragmentChildren.length === 0) return;
        if (this.fragmentChildrenCounter >= this.myFragmentChildren.length) return;
        if (!this.currentNode) { this.formerNodes.push(this.currentNode); }

        let finalFragmentChild;
        let fragmentChild = this.myFragmentChildren[this.fragmentChildrenCounter];
        if (this.isHolder(fragmentChild)) {
            finalFragmentChild = this.replaceHolderWithElement(fragmentChild);
        }
        else {
            finalFragmentChild = fragmentChild;
        }
        this.appendChild(finalFragmentChild);
        this._restoreHeldNodes(finalFragmentChild);
        this.fragmentChildrenCounter += 1;
    }

    evaluate(element) {

        let test = element.getAttribute('test');
        if ((test == null) || (test == '')) return null;
        return this.evaluateTestExpression(test);
        
    }

    evaluateTestExpression(test) {

        let expr = this.replaceExpressionIdentifiersWithValues(test);
        // after replacing known variable names with their values in the string, test to see if the expression can be parsed
        try {
            var parseTree = Object(_lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(expr);
            if ((parseTree.left.type == "Literal") && (parseTree.right.type == "Literal")) {
                return eval(expr);
            } 
            else {
              // there are still strings in the expression, which are unknown, an exception should be raised
              throw "unknown identifiers in expression : " + expr;
            }

        } catch (e) {
            console.error("parse error:", e);
        }

    }


    replaceExpressionIdentifiersWithValues(expression){
        let session = this._getParentSession();
         let result = expression.toUpperCase();
        
        let originalIdentifiers = Object.keys(session.getDataDump());
        let upperCaseIdentifiers = originalIdentifiers.map(s=>s.toUpperCase());
        for(let i in upperCaseIdentifiers)
        {
            let value = session.getData(originalIdentifiers[i]);
            let finalValue = parseInt(value);
            if(finalValue!=value) {
                if(value==="null") { finalValue = `null`; }
                else if(value==="true") {finalValue = "true";}
                else if(value==="false") { finalValue = "false"}
                else finalValue = `"${value}"`
            }
            let r = new RegExp(upperCaseIdentifiers[i], "g");
            result = result.replace( r, finalValue );
        }
       return result;
    }
}



if (!customElements.get('aa-choose')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-CHOOSE');
    customElements.define('aa-choose', AAChoose);
}


/***/ }),

/***/ "./src/aa-choose/aa-otherwise/aa-otherwise.js":
/*!****************************************************!*\
  !*** ./src/aa-choose/aa-otherwise/aa-otherwise.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAOtherwise; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");


class AAOtherwise extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.started) return;
        this.started = true;
        if (typeof this.innerFragment != "undefined") {
            this._replaceChildNodesWithHolderElements(this.innerFragment);
            this.appendChild(this.innerFragment);
            this._restoreHeldNodes(this);
        }
     
    }
}

if (!customElements.get('aa-otherwise')) {
    window.AANodeNames = window.AANodeNames|| []; 
    window.AANodeNames.push('AA-OTHERWISE');
    customElements.define('aa-otherwise', AAOtherwise);
}

/***/ }),

/***/ "./src/aa-choose/aa-when/aa-when.js":
/*!******************************************!*\
  !*** ./src/aa-choose/aa-when/aa-when.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAWhen; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../aa-holder/aa-holder.js */ "./src/aa-holder/aa-holder.js");


class AAWhen extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get observedAttributes() {
        return ['name', 'should-run', 'debug'];
    }

    constructor(){
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>'
    }
    
    connectedCallback(){
        if(this.started) return;
        this.started = true;
        if(typeof this.innerFragment!="undefined")
        {
            _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].scanAndReplace(this.innerFragment);
            this.appendChild(this.innerFragment);
            this._restoreHeldNodes(this);
        }
    }
}



if (!customElements.get('aa-when')) {
    window.AANodeNames = window.AANodeNames|| []; 
    window.AANodeNames.push("AA-WHEN");
    customElements.define('aa-when', AAWhen);
}


/***/ }),

/***/ "./src/aa-function/aa-function-random.js":
/*!***********************************************!*\
  !*** ./src/aa-function/aa-function-random.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAFunctionRandom; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");


class AAFunctionRandom extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get observedAttributes() {
        return ['name', 'debug', 'value', 'min', 'max'];
    }
    constructor(){
        super();
    }

    connectedCallback(){
        let session = this._getParentSession()
        this.value = this.getValue();
        session.setData(this.name, this.value);
        this._dispatchEndEvent();
    }

    getValue()
    {
        var parsedMin = parseFloat(this.min);
        var parsedMax = parseFloat(this.max);
        return this.getRandomInt(parsedMin, parsedMax);
    }

    getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + 0.5) + min;
    }


}



if (!customElements.get('aa-function-random')) {
    
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-FUNCTION-RANDOM');
    customElements.define('aa-function-random', AAFunctionRandom);
}


/***/ }),

/***/ "./src/aa-holder/aa-holder.js":
/*!************************************!*\
  !*** ./src/aa-holder/aa-holder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAHolder; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");

class AAHolder extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    // static holderInstances = [];
    static get observedAttributes() {
        return ["name"];
    }

    static createHolderForNode(node) {
        let holder = document.createElement("aa-holder");
        holder.holdNode(node);
        // AAHolder.holderInstances.push(holder);
        return holder;

    }


    static scanAndReplace(node) {
        if (node.nodeName == "TEMPLATE") {
            AAHolder.scanAndReplace(node.content);
        }
        else if (_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(node)) {
            let holder = AAHolder.createHolderForNode(node);
            node.replaceWith(holder);
        } else
            for (let i = 0; i < node.childNodes.length; i++) {
                AAHolder.scanAndReplace(node.childNodes[i]);
            }

    }

    static scanAndRestore(node) {

        if (node.nodeName == "TEMPLATE") AAHolder.scanAndRestore(node.content);
        else if (_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(node)) {
            if (node.nodeName == "AA-HOLDER") {
                node.restoreHeldNode();
            }
        }
        else for (let i = 0; i < node.childNodes.length; i++) {
            AAHolder.scanAndRestore(node.childNodes[i]);
        }

    }

    clone(){
        let clone = document.createElement('aa-holder');
        clone.name = this.name;
        clone.id = this.id;
        clone.node = this.node.cloneNode(true);
        clone.innerFragment =   document.createDocumentFragment();        
        for(let i=0; i<this.innerFragment.childNodes.length; i++){
            clone.innerFragment.appendChild(this.innerFragment.childNodes[i].cloneNode(true));
        }
        clone.holdsAAElement = this.holdsAAElement;
        return clone;
    }

    constructor() {
        super();
    }



    holdNode(o) {
        this.node = o.cloneNode(false);

        if (o.id) {
            this.id = o.id;
        }
        else {
            this.id = o.nodeName;
        }
        this.innerFragment = this._createFragmentForNode(o);
        this.holdsAAElement = _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(o);
    }




    replace(node) {
        node.replaceWith(this);
    }

    restoreHeldNode() {

        if (this.node) {
            if (!this.holdsAAElement) {
                while (this.innerFragment.childNodes.length) {

                    this.node.appendChild(this.innerFragment.childNodes[0]);
                }

            } else if (this.holdsAAElement) {
                this.node.innerFragment = this.innerFragment;
            }
            this.replaceWith(this.node);
        }
    }



    connectedCallback() {
    }



}


if (!customElements.get('aa-holder')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-HOLDER');
    customElements.define('aa-holder', AAHolder);
}


/***/ }),

/***/ "./src/aa-memory/aa-memory.js":
/*!************************************!*\
  !*** ./src/aa-memory/aa-memory.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAMemory; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");




class AAMemory extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    get observedAttributes(){
        return ["name"];
    }

    constructor(){
        super();
    }

    connectedCallback(){
        
    }

    setData(name,value){
        this.dataset[name] = value;
    }

    getData(name){
        return this.dataset[this.toHyphenated(name)];
    }
}


if (!customElements.get('aa-memory')) {

    if (typeof window.AANodeNames ==="undefined") { 
        window.AANodeNames = []; 
    }
    window.AANodeNames.push("AA-MEMORY");
    customElements.define('aa-memory', AAMemory);
}

/***/ }),

/***/ "./src/aa-screen/aa-screen.js":
/*!************************************!*\
  !*** ./src/aa-screen/aa-screen.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAScreen; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");



class AAScreen extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {



    static get observedAttributes() { 
        return [
            'submit-button-text',
            'submit-button-hidden',
            'name'
        ];
    }

    constructor() {        
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();

        this.submitButtonText = this._submitButtonText || 'submit';
        this.root.innerHTML = this.css + this.html;

        if (this._started) { return; }
        this._started = true;

        if (this.submitButtonHidden) {
            this.root.querySelector('.submitButtonContainer').style.display = 'none';
        }


        // if (typeof this.innerFragment != 'undefined') {
        //     this._replaceChildNodesWithHolderElements(this.innerFragment);
        //     this.appendChild(this.innerFragment);
        //     this._restoreHeldNodes(this);
        // }

        this.root.querySelector('.submitButton').addEventListener('click', this.submitButtonClick.bind(this));

    }


    get css() {

        return html`
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
        `;
    }

    get html() {

        return html`
            <slot></slot>
            
            <div class='submitButtonContainer'>
                <div>
                    <button class='submitButton'> button: ${this.submitButtonText}</button>
                </div>
                <div id='userMessage'></div>
            </div>
        
        `
    }




    attributeChangedCallback() {

    }




    hasChildrenThatDemandResponse() {

        let emaChildren = this.getEmaChildren(this);
        let result = false;
        for (let i = 0; i < emaChildren.length; i++) {
            let child = emaChildren[i];
            if (child.demandsResponse) {
                if (child.getValue() == null) {
                    // console.log(child, 'demands response');

                    if (child.displayAttention) {
                        child.displayAttention();
                    }

                    result = true;
                }
            }
        }
        if (result) {
            this.userMessage.innerHTML = `<div style="display:flex; align-items:center"> <div>please fill out the required fields</div> <div id="attention" style="color: red; font-size: 20px;  border: solid thin; border-radius: 50%; width: 20px;
                                            margin-left:20px; height: 20px; 
                                            text-align: center;
                                            padding: 5px;">!</div></div>`
            this.userMessage.style.color = 'red';
        }
        return result;
    }


    submitButtonClick(e) {




        this.$.userMessage.innerHTML = '';

        if (this.hasChildrenThatDemandResponse()) {
            return;
        }

        //dispatch endEvent 
        let valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: this.getValue() } });
        this.dispatchEvent(valueSubmitEvent);

        this._dispatchEndEvent(this.getValue());
        

        if (typeof e.detail.callback != 'undefined') {
            e.detail.callback(e);
        }


        //hide the screen

        if (this.dontHide == false) this.hide();

    }


    getChildrenValuesOrder(element) {
        if (typeof element === 'undefined') element = this;
        var emaChildren = this.getEmaChildren(element);
        var result = [];
        for (var i = 0; i < emaChildren.length; i++) {
            var child = emaChildren[i]
            if (typeof this.name != 'undefined') {
                result.push(this.name + '$' + child.getName());
            }
            else {
                result.push(child.getName());
            }
        }
    }



    getValue() {
        var __meta = {
            attachedTimestamp: this.attachedTimestamp,
            submitTimestamp: new Date().getTime()
        }
        var result = this.getChildrenValues(this);
        return result;
    }

    getValueWithKey() {
        var result = {}
        result[this.name] = this.getValue();
        return result;
    }


    automate() {
        for (var i = 0; i < this.children.length; i++) {
            if (this.isEmaElement(this.children[i])) {
                if (typeof this.children[i].automate != 'undefined') {
                    this.children[i].automate();
                }
            }
        }
        this.submitButtonClick();
    }


    hide() {
        this.style.display = 'none'

    }

    show() {
        this.style.display = 'block'
        //this.removeAttribute('hidden');
    }


}


if (!customElements.get('aa-screen')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-SCREEN');
    customElements.define('aa-screen', AAScreen);
}


/***/ }),

/***/ "./src/aa-sequence/aa-jump/aa-jump.js":
/*!********************************************!*\
  !*** ./src/aa-sequence/aa-jump/aa-jump.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAJump; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");


class AAJump extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get observedAttributes() {
        return ["name", "goto"]
    }

    connectedCallback() {
        debugger;
        this.dispatchEvent(new CustomEvent("endEvent", {
            bubbles: true, 
            detail: {
                goto: this.goto
            }
        }))
    }
}


if (!customElements.get('aa-jump')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-JUMP');
    customElements.define('aa-jump', AAJump);
}

/***/ }),

/***/ "./src/aa-sequence/aa-sequence.js":
/*!****************************************!*\
  !*** ./src/aa-sequence/aa-sequence.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AASequence; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_function_aa_function_random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aa-function/aa-function-random.js */ "./src/aa-function/aa-function-random.js");
/* harmony import */ var _aa_jump_aa_jump_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aa-jump/aa-jump.js */ "./src/aa-sequence/aa-jump/aa-jump.js");
/* harmony import */ var _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aa-holder/aa-holder.js */ "./src/aa-holder/aa-holder.js");





debugger;
class AASequence extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get observedAttributes() {
        return ['name', 'write-into', 'should-run', 'debug'];
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>';
    }
    connectedCallback() {

        debugger;
        this.root.addEventListener("endEvent", this.endEventListener.bind(this));
        // if (this.id === '') console.warn(this, 'has no id');

        // console.log('ready sequence', this.name);
        this.started = false;

        if ((this.shouldRun === null) || (this.shouldRun === true)) {

            this.start()
        };



    }


    get css() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `
    }

    get html() {
        return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `

    }




    properties() {

        return {
            shouldRun: {
                type: Boolean,
                value: true,
                reflectToAttribute: false,
                reflectToConfig: false
            },

            showNextButton: {
                type: Boolean,
                value: false
            },

            nextKeyCode: {
                type: Number,
                value: 0
            },

            prevKeyCode: {
                type: Number,
                value: 0
            },

            displayAll: {
                type: Boolean,
                value: false
            }
        }
    }








    start() {

        if (this.writeInto) {
            this.target = document.querySelector(this.writeInto);
        } else {
            this.target = this;
        }

        if (this.started) return;

        if (typeof this.innerFragment === 'undefined') {
            console.warn('.innerFragment is undefined');
            this.restoreHeldNodes(this)
            return;
        }
        else {

        }


        this.started = true;
        this.sIndex = 0;
        this.formerNodes = [];
        this.formerIndex = 0;
        this.myFragmentChildren = [];

        // //  don't assign listeners here, only to the final fragment child
        // for (let i = 0; i < this.innerFragment.children.length; i++) {
        //     //  keep innerFragment unchanged by pushing deep copies of its children into
        //     //  myFragmentChildren. This way, it is possible to replicate and rerun
        //     // the sequence elsewhere at a later time
        //     this.myFragmentChildren.push(this.innerFragment.children[i])
        //     // this.innerFragment.children[i].endEventListener = this.endEventListener.bind(this);
        // }
        let nextNode = this.next()



        if (this.nextKeyCode) {
            this.addEventListener('keyup', function (e) {

            })
        }
    }

    next(name) {

        if (!this.counter) {
            this.counter = 1;
        } else {
            this.counter++;
            // if (this.counter > 500) {
            //     return null;
            // }
        }
        if (!this.started) {
            this.start();
        }

        // if (this.myFragmentChildren.length === 0) return;       
        // this._makeCurrentNodeAFormerNode();
        if (this.sIndex >= this.innerFragment.childNodes.length) return null;

        if (name) {
            for (let i = 0; i < this.innerFragment.childNodes.length; i++) {
                // console.log(this.innerFragment.childNodes[i]);
                // debugger;
                if (this.innerFragment.childNodes[i].getAttribute) if (this.innerFragment.childNodes[i].getAttribute("name") == name) {
                    this.sIndex = i;
                    break;
                }
            }

        }


        let fragmentChild = this.innerFragment.childNodes[this.sIndex];
        let fragmentChildCopy = this.copy(fragmentChild);
        
        // console.log(this.innerFragment.childNodes);
        // console.log(fragmentChildCopy);
        this.formerNodes.push(fragmentChildCopy);
        console.log("original", fragmentChild);
        console.log("copy", fragmentChildCopy);
        this.sIndex += 1;


        //  it's important that the listener is added and the fragmentChildrenCounter increase
        //  before appending the child, otherwise, because appending nodes triggers their attached callback,
        //  certain nodes (like ema-choose that fails to be true in any condition)
        //  will immediately dispatch an 'endEvent'Event which in this case will call next()
        //  again, before the current next() returns.
        //  If the listener has not been added, no one will catch the event
        //  and if fragmentChildrenCounter has not increased,
        //  next() will grab the same object again from this.myFragmentChildren

        // this.currentNode.addEventListener('endEvent', this.currentNode.endEventListener);
        // console.log(this.currentNode);

        setTimeout(() => {
            let n = this.formerNodes[this.formerIndex];
            // debugger;
            this.appendChild(n);
            this.formerIndex++;
            _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].scanAndRestore(this.childNodes[this.childNodes.length - 1]);
            if (!n._dispatchEndEvent) {
                this.next();
            }


        }, 0)
    }

    _replaceWithElementIfChildIsHolder(fragmentChild) {
        if (fragmentChild.nodeName === "AA-HOLDER") {
            _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].scanAndRestore(fragmentChild);
        }

        return fragmentChild;
    }

    // _makeCurrentNodeAFormerNode(){
    //     if (typeof this.currentNode != 'undefined') {
    //         this.currentNode.removeEventListener('endEvent', this.currentNode.endEventListener);
    //         this.formerNodes.push(this.currentNode);
    //     }
    // }



    endEventListener(e) {

        e.stopPropagation();
        let goto = null
        if (e.detail) if (e.detail.goto) {

            goto = e.detail.goto;
        }
        let next = this.next(goto);


        if (next === null) {
            this._dispatchEndEvent();

        }
    }

}



if (!customElements.get('aa-sequence')) {

    if (typeof window.AANodeNames === 'undefined') { window.AANodeNames = []; }
    window.AANodeNames.push('AA-SEQUENCE');

    customElements.define('aa-sequence', AASequence);


}



/***/ }),

/***/ "./src/aa-session/aa-session.js":
/*!**************************************!*\
  !*** ./src/aa-session/aa-session.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AASession; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aa-holder/aa-holder.js */ "./src/aa-holder/aa-holder.js");
/* harmony import */ var _aa_memory_aa_memory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../aa-memory/aa-memory.js */ "./src/aa-memory/aa-memory.js");




class AASession extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get observedAttributes() {
        return ['name', 'should-run', 'debug'];
    }



    constructor() {
        super();
        // console.log('creating session');
        debugger;
        this._mem = document.createElement('aa-memory');

        this.myTemplate = document.createElement('template');
        this.myTemplate.innerHTML = this.innerHTML;
        this.innerHTML = '';

        // this.root = this.attachShadow({ mode: 'closed' });
        // this.root.innerHTML = '<template><slot></slot></template>'

        this.addEventListener('valueSubmit', (e) => {


            // e.stopPropagation();
            let input = {
                data: e.detail.value,
                sessionID: this.sessionID,
                sessionTimestamp: this.sessionTime,
                sessionName: this.name,
                variables: Object.keys(e.detail.value),
            };
            this._mem.saveReplyValue(e.detail.value, false);


            let inputSubmitEvent = new CustomEvent('inputSubmit', { bubbles: true, detail: { input } });
            this.dispatchEvent(inputSubmitEvent);
            //  ema-participant-client needs to catch this and either send it to the server,
            //  or store it locally if we are offline
            //  A reason that ema-participant-client needs to do this, is because it cares
            //  about identification tokens


        })

        this.addEventListener('endEvent', (e) => {
            if(!this.debug) e.stopPropagation();
            let sessionEndEvent = new CustomEvent('sessionEndEvent', { bubbles: true, detail: 'sessionEnd' });
            this.dispatchEvent(sessionEndEvent);
        })


    }

    myIdGenerator() {
        // debugger;
        // TODO: generate an id
        return 0;
    }




    connectedCallback() {

        debugger;
        // console.log('attaching session');
        this.sessionID = this.myIdGenerator();
        this.sessionTime = new Date().getTime();

        let sessionDatum = Object.keys(this.dataset);
        for(let i in sessionDatum){
            this.setData(sessionDatum[i], this.dataset[sessionDatum[i]]);
        }
        // console.log('shouldRun = ', this.shouldRun);
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.run();
        }


    }






    
    attachTemplateChildNodesToMyself(templateClone){
        
        while(templateClone.content.childNodes.length){
            //  if there's a direct template child, we want its children appended too
            if(templateClone.content.childNodes[0].nodeName==="TEMPLATE"){
                while(templateClone.content.childNodes[0].content.childNodes.length){
                    this.appendChild(templateClone.content.childNodes[0].content.childNodes[0])
                }
                //  we are not appending this elsewhere 
                //  so throw it way so that the childnode count can be reduced
                templateClone.content.childNodes[0].remove();
            }else{
                this.appendChild(templateClone.content.childNodes[0]);
            }
        }
    }


   
    run() {
    
       
        let myTemplateClone = this.myTemplate.cloneNode(true);
        _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].scanAndReplace(myTemplateClone);
       
        this.attachTemplateChildNodesToMyself(myTemplateClone);
       
        for(let i=0; i<this.childNodes.length; i++){
            _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].scanAndRestore(this.childNodes[i]);
        }
       
        // this.started = true;
       
        // this._replaceChildrenHolderElements(this.myTemplate.content);
        // this.appendChild(this.myTemplate.content);

        // if ((this.shouldRun === null) || (this.shouldRun === true)) {
        //     this._restoreHeldNodes(this);
        // }

        // this.initialChildNodesList = [];
        // for (let i = 0; i < this.childNodes.length; i++) {
        //     this.initialChildNodesList.push(this.childNodes[i]);
        // }
        // for (let i = 0; i < this.initialChildNodesList.length; i++) {
        //     let child = this.initialChildNodesList[i];
        //     if (typeof child.nodeName != 'undefined') {
        //         if (child.nodeName === 'TEMPLATE') {
        //             this._replaceChildrenHolderElements(child.content);
        //             this.appendChild(child.content);

        //             if ((this.shouldRun === null) || (this.shouldRun === true)) {
        //                 debugger;
        //                 this._restoreHeldNodes(this);
        //             }
        //         }
        //     }
        // }
    }

    _createElementWithHolderOrCloneDeep(node){
        if(node.nodeType==Node.ELEMENT_NODE){
            if(node.nodeName=="TEMPLATE"){
                createMirrorForNode()
            }
            return _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createHolderForElement(node);
        } else{
            return node.cloneNode(true);
        }
    }




    getReferencedItems(element) {

        let referencedItems = [];
        if (this._isAAElement(element)) referencedItems.push(element);
        for (let i = 0; i < element.childNodes.length; i++) {
            let child = element.childNodes[i];
            if (this._isAAElement(child)) {
                referencedItems = referencedItems.concat(this.getReferencedItems(child))
            }
        }
        return referencedItems;
    }

    getData(name){
        return this._mem.getData(name);
    }
    setData(name, value){
        return this._mem.setData(name, value);
    }

    getDataDump(){
        return this._mem.dataset;
    }




















}




if (!customElements.get('aa-session')) {
    window.AANodeNames = window.AANodeNames|| []; 
    window.AANodeNames.push('AA-SESSION');
    customElements.define('aa-session', AASession);
}








/***/ }),

/***/ "./src/aa-variable/aa-variable.js":
/*!****************************************!*\
  !*** ./src/aa-variable/aa-variable.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAVariable; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");

class AAVariable extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get observedAttributes() {
        return [
            'name',
            'value'
        ];
    }
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        let session = this._getParentSession();
        session.setData(this.name, this.value);
    };


}


if (!customElements.get('aa-variable')) {
    window.AANodeNames = window.AANodeNames|| []; 
    window.AANodeNames.push('AA-VARIABLE');
    customElements.define('aa-variable', AAVariable);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aa-baseElement/baseElement.js */ "./src/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_variable_aa_variable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aa-variable/aa-variable.js */ "./src/aa-variable/aa-variable.js");
/* harmony import */ var _aa_function_aa_function_random_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aa-function/aa-function-random.js */ "./src/aa-function/aa-function-random.js");
/* harmony import */ var _aa_choose_aa_choose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aa-choose/aa-choose.js */ "./src/aa-choose/aa-choose.js");
/* harmony import */ var _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aa-holder/aa-holder.js */ "./src/aa-holder/aa-holder.js");
/* harmony import */ var _aa_memory_aa_memory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aa-memory/aa-memory.js */ "./src/aa-memory/aa-memory.js");
/* harmony import */ var _aa_screen_aa_screen_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aa-screen/aa-screen.js */ "./src/aa-screen/aa-screen.js");
/* harmony import */ var _aa_sequence_aa_sequence_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aa-sequence/aa-sequence.js */ "./src/aa-sequence/aa-sequence.js");
/* harmony import */ var _aa_session_aa_session_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aa-session/aa-session.js */ "./src/aa-session/aa-session.js");









//make sure session loads last



let aaCustomElements = {
    BaseElement: _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    AAChoose: _aa_choose_aa_choose_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    AAMemory: _aa_memory_aa_memory_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    AAScreen: _aa_screen_aa_screen_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    AASequence: _aa_sequence_aa_sequence_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    AASession: _aa_session_aa_session_js__WEBPACK_IMPORTED_MODULE_8__["default"],
    AAVariable: _aa_variable_aa_variable_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    AAHolder: _aa_holder_aa_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    // __VERSION: VERSION,
    // __BUILD_NUMBER: BUILD_NUMBER,
    // // __BUILD_BRANCH:BUILD_BRANCH,
    // __BUILD_STRING: BUILD_STRING

}

if(window){
    window.aaCustomElements = aaCustomElements
}
// export default aaCustomElements;

/***/ }),

/***/ "./src/lib/jsep/jsep.js":
/*!******************************!*\
  !*** ./src/lib/jsep/jsep.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/**
 * this is a modified version of the original jsep 
 * which if the root parameter is undefined,
 * the jsep object returned so as to be exported   
 **/ 


//     JavaScript Expression Parser (JSEP) 0.3.4
//     JSEP may be freely distributed under the MIT License
//     http://jsep.from.so/

/*global module: true, exports: true, console: true */
/* harmony default export */ __webpack_exports__["default"] = (function (root) {
	'use strict';
	// Node Types
	// ----------
	
	// This is the full set of types that any JSEP node can be.
	// Store them here to save space when minified
	var COMPOUND = 'Compound',
		IDENTIFIER = 'Identifier',
		MEMBER_EXP = 'MemberExpression',
		LITERAL = 'Literal',
		THIS_EXP = 'ThisExpression',
		CALL_EXP = 'CallExpression',
		UNARY_EXP = 'UnaryExpression',
		BINARY_EXP = 'BinaryExpression',
		LOGICAL_EXP = 'LogicalExpression',
		CONDITIONAL_EXP = 'ConditionalExpression',
		ARRAY_EXP = 'ArrayExpression',

		PERIOD_CODE = 46, // '.'
		COMMA_CODE  = 44, // ','
		SQUOTE_CODE = 39, // single quote
		DQUOTE_CODE = 34, // double quotes
		OPAREN_CODE = 40, // (
		CPAREN_CODE = 41, // )
		OBRACK_CODE = 91, // [
		CBRACK_CODE = 93, // ]
		QUMARK_CODE = 63, // ?
		SEMCOL_CODE = 59, // ;
		COLON_CODE  = 58, // :

		throwError = function(message, index) {
			var error = new Error(message + ' at character ' + index);
			error.index = index;
			error.description = message;
			throw error;
		},

	// Operations
	// ----------

	// Set `t` to `true` to save space (when minified, not gzipped)
		t = true,
	// Use a quickly-accessible map to store all of the unary operators
	// Values are set to `true` (it really doesn't matter)
		unary_ops = {'-': t, '!': t, '~': t, '+': t},
	// Also use a map for the binary operations but set their values to their
	// binary precedence for quick reference:
	// see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
		binary_ops = {
			'||': 1, '&&': 2, '|': 3,  '^': 4,  '&': 5,
			'==': 6, '!=': 6, '===': 6, '!==': 6,
			'<': 7,  '>': 7,  '<=': 7,  '>=': 7,
			'<<':8,  '>>': 8, '>>>': 8,
			'+': 9, '-': 9,
			'*': 10, '/': 10, '%': 10
		},
	// Get return the longest key length of any object
		getMaxKeyLen = function(obj) {
			var max_len = 0, len;
			for(var key in obj) {
				if((len = key.length) > max_len && obj.hasOwnProperty(key)) {
					max_len = len;
				}
			}
			return max_len;
		},
		max_unop_len = getMaxKeyLen(unary_ops),
		max_binop_len = getMaxKeyLen(binary_ops),
	// Literals
	// ----------
	// Store the values to return for the various literals we may encounter
		literals = {
			'true': true,
			'false': false,
			'null': null
		},
	// Except for `this`, which is special. This could be changed to something like `'self'` as well
		this_str = 'this',
	// Returns the precedence of a binary operator or `0` if it isn't a binary operator
		binaryPrecedence = function(op_val) {
			return binary_ops[op_val] || 0;
		},
	// Utility function (gets called from multiple places)
	// Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
		createBinaryExpression = function (operator, left, right) {
			var type = (operator === '||' || operator === '&&') ? LOGICAL_EXP : BINARY_EXP;
			return {
				type: type,
				operator: operator,
				left: left,
				right: right
			};
		},
		// `ch` is a character code in the next three functions
		isDecimalDigit = function(ch) {
			return (ch >= 48 && ch <= 57); // 0...9
		},
		isIdentifierStart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},
		isIdentifierPart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
					(ch >= 48 && ch <= 57) || // 0...9
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},

		// Parsing
		// -------
		// `expr` is a string with the passed in expression
		jsep = function(expr) {
			// `index` stores the character number we are currently at while `length` is a constant
			// All of the gobbles below will modify `index` as we move along
			var index = 0,
				charAtFunc = expr.charAt,
				charCodeAtFunc = expr.charCodeAt,
				exprI = function(i) { return charAtFunc.call(expr, i); },
				exprICode = function(i) { return charCodeAtFunc.call(expr, i); },
				length = expr.length,

				// Push `index` up to the next non-space character
				gobbleSpaces = function() {
					var ch = exprICode(index);
					// space or tab
					while(ch === 32 || ch === 9 || ch === 10 || ch === 13) {
						ch = exprICode(++index);
					}
				},

				// The main parsing function. Much of this code is dedicated to ternary expressions
				gobbleExpression = function() {
					var test = gobbleBinaryExpression(),
						consequent, alternate;
					gobbleSpaces();
					if(exprICode(index) === QUMARK_CODE) {
						// Ternary expression: test ? consequent : alternate
						index++;
						consequent = gobbleExpression();
						if(!consequent) {
							throwError('Expected expression', index);
						}
						gobbleSpaces();
						if(exprICode(index) === COLON_CODE) {
							index++;
							alternate = gobbleExpression();
							if(!alternate) {
								throwError('Expected expression', index);
							}
							return {
								type: CONDITIONAL_EXP,
								test: test,
								consequent: consequent,
								alternate: alternate
							};
						} else {
							throwError('Expected :', index);
						}
					} else {
						return test;
					}
				},

				// Search for the operation portion of the string (e.g. `+`, `===`)
				// Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
				// and move down from 3 to 2 to 1 character until a matching binary operation is found
				// then, return that binary operation
				gobbleBinaryOp = function() {
					gobbleSpaces();
					var biop, to_check = expr.substr(index, max_binop_len), tc_len = to_check.length;
					while(tc_len > 0) {
						// Don't accept a binary op when it is an identifier.
						// Binary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
						if(binary_ops.hasOwnProperty(to_check) && (
							!isIdentifierStart(exprICode(index)) ||
							(index+to_check.length< expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
						)) {
							index += tc_len;
							return to_check;
						}
						to_check = to_check.substr(0, --tc_len);
					}
					return false;
				},

				// This function is responsible for gobbling an individual expression,
				// e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
				gobbleBinaryExpression = function() {
					var ch_i, node, biop, prec, stack, biop_info, left, right, i;

					// First, try to get the leftmost thing
					// Then, check to see if there's a binary operator operating on that leftmost thing
					left = gobbleToken();
					biop = gobbleBinaryOp();

					// If there wasn't a binary operator, just return the leftmost node
					if(!biop) {
						return left;
					}

					// Otherwise, we need to start a stack to properly place the binary operations in their
					// precedence structure
					biop_info = { value: biop, prec: binaryPrecedence(biop)};

					right = gobbleToken();
					if(!right) {
						throwError("Expected expression after " + biop, index);
					}
					stack = [left, biop_info, right];

					// Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)
					while((biop = gobbleBinaryOp())) {
						prec = binaryPrecedence(biop);

						if(prec === 0) {
							break;
						}
						biop_info = { value: biop, prec: prec };

						// Reduce: make a binary expression from the three topmost entries.
						while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
							right = stack.pop();
							biop = stack.pop().value;
							left = stack.pop();
							node = createBinaryExpression(biop, left, right);
							stack.push(node);
						}

						node = gobbleToken();
						if(!node) {
							throwError("Expected expression after " + biop, index);
						}
						stack.push(biop_info, node);
					}

					i = stack.length - 1;
					node = stack[i];
					while(i > 1) {
						node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node);
						i -= 2;
					}
					return node;
				},

				// An individual part of a binary expression:
				// e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
				gobbleToken = function() {
					var ch, to_check, tc_len;

					gobbleSpaces();
					ch = exprICode(index);

					if(isDecimalDigit(ch) || ch === PERIOD_CODE) {
						// Char code 46 is a dot `.` which can start off a numeric literal
						return gobbleNumericLiteral();
					} else if(ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
						// Single or double quotes
						return gobbleStringLiteral();
					} else if (ch === OBRACK_CODE) {
						return gobbleArray();
					} else {
						to_check = expr.substr(index, max_unop_len);
						tc_len = to_check.length;
						while(tc_len > 0) {
						// Don't accept an unary op when it is an identifier.
						// Unary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
							if(unary_ops.hasOwnProperty(to_check) && (
								!isIdentifierStart(exprICode(index)) ||
								(index+to_check.length < expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
							)) {
								index += tc_len;
								return {
									type: UNARY_EXP,
									operator: to_check,
									argument: gobbleToken(),
									prefix: true
								};
							}
							to_check = to_check.substr(0, --tc_len);
						}

						if (isIdentifierStart(ch) || ch === OPAREN_CODE) { // open parenthesis
							// `foo`, `bar.baz`
							return gobbleVariable();
						}
					}

					return false;
				},
				// Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
				// keep track of everything in the numeric literal and then calling `parseFloat` on that string
				gobbleNumericLiteral = function() {
					var number = '', ch, chCode;
					while(isDecimalDigit(exprICode(index))) {
						number += exprI(index++);
					}

					if(exprICode(index) === PERIOD_CODE) { // can start with a decimal marker
						number += exprI(index++);

						while(isDecimalDigit(exprICode(index))) {
							number += exprI(index++);
						}
					}

					ch = exprI(index);
					if(ch === 'e' || ch === 'E') { // exponent marker
						number += exprI(index++);
						ch = exprI(index);
						if(ch === '+' || ch === '-') { // exponent sign
							number += exprI(index++);
						}
						while(isDecimalDigit(exprICode(index))) { //exponent itself
							number += exprI(index++);
						}
						if(!isDecimalDigit(exprICode(index-1)) ) {
							throwError('Expected exponent (' + number + exprI(index) + ')', index);
						}
					}


					chCode = exprICode(index);
					// Check to make sure this isn't a variable name that start with a number (123abc)
					if(isIdentifierStart(chCode)) {
						throwError('Variable names cannot start with a number (' +
									number + exprI(index) + ')', index);
					} else if(chCode === PERIOD_CODE) {
						throwError('Unexpected period', index);
					}

					return {
						type: LITERAL,
						value: parseFloat(number),
						raw: number
					};
				},

				// Parses a string literal, staring with single or double quotes with basic support for escape codes
				// e.g. `"hello world"`, `'this is\nJSEP'`
				gobbleStringLiteral = function() {
					var str = '', quote = exprI(index++), closed = false, ch;

					while(index < length) {
						ch = exprI(index++);
						if(ch === quote) {
							closed = true;
							break;
						} else if(ch === '\\') {
							// Check for all of the common escape codes
							ch = exprI(index++);
							switch(ch) {
								case 'n': str += '\n'; break;
								case 'r': str += '\r'; break;
								case 't': str += '\t'; break;
								case 'b': str += '\b'; break;
								case 'f': str += '\f'; break;
								case 'v': str += '\x0B'; break;
								default : str += ch;
							}
						} else {
							str += ch;
						}
					}

					if(!closed) {
						throwError('Unclosed quote after "'+str+'"', index);
					}

					return {
						type: LITERAL,
						value: str,
						raw: quote + str + quote
					};
				},

				// Gobbles only identifiers
				// e.g.: `foo`, `_value`, `$x1`
				// Also, this function checks if that identifier is a literal:
				// (e.g. `true`, `false`, `null`) or `this`
				gobbleIdentifier = function() {
					var ch = exprICode(index), start = index, identifier;

					if(isIdentifierStart(ch)) {
						index++;
					} else {
						throwError('Unexpected ' + exprI(index), index);
					}

					while(index < length) {
						ch = exprICode(index);
						if(isIdentifierPart(ch)) {
							index++;
						} else {
							break;
						}
					}
					identifier = expr.slice(start, index);

					if(literals.hasOwnProperty(identifier)) {
						return {
							type: LITERAL,
							value: literals[identifier],
							raw: identifier
						};
					} else if(identifier === this_str) {
						return { type: THIS_EXP };
					} else {
						return {
							type: IDENTIFIER,
							name: identifier
						};
					}
				},

				// Gobbles a list of arguments within the context of a function call
				// or array literal. This function also assumes that the opening character
				// `(` or `[` has already been gobbled, and gobbles expressions and commas
				// until the terminator character `)` or `]` is encountered.
				// e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
				gobbleArguments = function(termination) {
					var ch_i, args = [], node, closed = false;
					while(index < length) {
						gobbleSpaces();
						ch_i = exprICode(index);
						if(ch_i === termination) { // done parsing
							closed = true;
							index++;
							break;
						} else if (ch_i === COMMA_CODE) { // between expressions
							index++;
						} else {
							node = gobbleExpression();
							if(!node || node.type === COMPOUND) {
								throwError('Expected comma', index);
							}
							args.push(node);
						}
					}
					if (!closed) {
						throwError('Expected ' + String.fromCharCode(termination), index);
					}
					return args;
				},

				// Gobble a non-literal variable name. This variable name may include properties
				// e.g. `foo`, `bar.baz`, `foo['bar'].baz`
				// It also gobbles function calls:
				// e.g. `Math.acos(obj.angle)`
				gobbleVariable = function() {
					var ch_i, node;
					ch_i = exprICode(index);

					if(ch_i === OPAREN_CODE) {
						node = gobbleGroup();
					} else {
						node = gobbleIdentifier();
					}
					gobbleSpaces();
					ch_i = exprICode(index);
					while(ch_i === PERIOD_CODE || ch_i === OBRACK_CODE || ch_i === OPAREN_CODE) {
						index++;
						if(ch_i === PERIOD_CODE) {
							gobbleSpaces();
							node = {
								type: MEMBER_EXP,
								computed: false,
								object: node,
								property: gobbleIdentifier()
							};
						} else if(ch_i === OBRACK_CODE) {
							node = {
								type: MEMBER_EXP,
								computed: true,
								object: node,
								property: gobbleExpression()
							};
							gobbleSpaces();
							ch_i = exprICode(index);
							if(ch_i !== CBRACK_CODE) {
								throwError('Unclosed [', index);
							}
							index++;
						} else if(ch_i === OPAREN_CODE) {
							// A function call is being made; gobble all the arguments
							node = {
								type: CALL_EXP,
								'arguments': gobbleArguments(CPAREN_CODE),
								callee: node
							};
						}
						gobbleSpaces();
						ch_i = exprICode(index);
					}
					return node;
				},

				// Responsible for parsing a group of things within parentheses `()`
				// This function assumes that it needs to gobble the opening parenthesis
				// and then tries to gobble everything within that parenthesis, assuming
				// that the next thing it should see is the close parenthesis. If not,
				// then the expression probably doesn't have a `)`
				gobbleGroup = function() {
					index++;
					var node = gobbleExpression();
					gobbleSpaces();
					if(exprICode(index) === CPAREN_CODE) {
						index++;
						return node;
					} else {
						throwError('Unclosed (', index);
					}
				},

				// Responsible for parsing Array literals `[1, 2, 3]`
				// This function assumes that it needs to gobble the opening bracket
				// and then tries to gobble the expressions as arguments.
				gobbleArray = function() {
					index++;
					return {
						type: ARRAY_EXP,
						elements: gobbleArguments(CBRACK_CODE)
					};
				},

				nodes = [], ch_i, node;

			while(index < length) {
				ch_i = exprICode(index);

				// Expressions can be separated by semicolons, commas, or just inferred without any
				// separators
				if(ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
					index++; // ignore separators
				} else {
					// Try to gobble each expression individually
					if((node = gobbleExpression())) {
						nodes.push(node);
					// If we weren't able to find a binary expression and are out of room, then
					// the expression passed in probably has too much
					} else if(index < length) {
						throwError('Unexpected "' + exprI(index) + '"', index);
					}
				}
			}

			// If there's only one expression just try returning the expression
			if(nodes.length === 1) {
				return nodes[0];
			} else {
				return {
					type: COMPOUND,
					body: nodes
				};
			}
		};

	// To be filled in by the template
	jsep.version = '0.3.4';
	jsep.toString = function() { return 'JavaScript Expression Parser (JSEP) v' + jsep.version; };

	/**
	 * @method jsep.addUnaryOp
	 * @param {string} op_name The name of the unary op to add
	 * @return jsep
	 */
	jsep.addUnaryOp = function(op_name) {
		max_unop_len = Math.max(op_name.length, max_unop_len);
		unary_ops[op_name] = t; return this;
	};

	/**
	 * @method jsep.addBinaryOp
	 * @param {string} op_name The name of the binary op to add
	 * @param {number} precedence The precedence of the binary op (can be a float)
	 * @return jsep
	 */
	jsep.addBinaryOp = function(op_name, precedence) {
		max_binop_len = Math.max(op_name.length, max_binop_len);
		binary_ops[op_name] = precedence;
		return this;
	};

	/**
	 * @method jsep.addLiteral
	 * @param {string} literal_name The name of the literal to add
	 * @param {*} literal_value The value of the literal
	 * @return jsep
	 */
	jsep.addLiteral = function(literal_name, literal_value) {
		literals[literal_name] = literal_value;
		return this;
	};

	/**
	 * @method jsep.removeUnaryOp
	 * @param {string} op_name The name of the unary op to remove
	 * @return jsep
	 */
	jsep.removeUnaryOp = function(op_name) {
		delete unary_ops[op_name];
		if(op_name.length === max_unop_len) {
			max_unop_len = getMaxKeyLen(unary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllUnaryOps
	 * @return jsep
	 */
	jsep.removeAllUnaryOps = function() {
		unary_ops = {};
		max_unop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeBinaryOp
	 * @param {string} op_name The name of the binary op to remove
	 * @return jsep
	 */
	jsep.removeBinaryOp = function(op_name) {
		delete binary_ops[op_name];
		if(op_name.length === max_binop_len) {
			max_binop_len = getMaxKeyLen(binary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllBinaryOps
	 * @return jsep
	 */
	jsep.removeAllBinaryOps = function() {
		binary_ops = {};
		max_binop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeLiteral
	 * @param {string} literal_name The name of the literal to remove
	 * @return jsep
	 */
	jsep.removeLiteral = function(literal_name) {
		delete literals[literal_name];
		return this;
	};

	/**
	 * @method jsep.removeAllLiterals
	 * @return jsep
	 */
	jsep.removeAllLiterals = function() {
		literals = {};

		return this;
	};

	// In desktop environments, have a way to restore the old value for `jsep`
	if (typeof exports === 'undefined') {

		if(!root){
			return  jsep;
		}
		var old_jsep = root.jsep;
		// The star of the show! It's a function!
		root.jsep = jsep;
		// And a courteous function willing to move out of the way for other similarly-named objects!
		jsep.noConflict = function() {
			if(root.jsep === jsep) {
				root.jsep = old_jsep;
			}
			return jsep;
		};
	} else {
		// In Node.JS environments
		if ( true && module.exports) {
			exports = module.exports = jsep;
		} else {
			exports.parse = jsep;
		}
	}
}(undefined));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=aaCustomElements.js.map