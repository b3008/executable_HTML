(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["executableHTML"] = factory();
	else
		root["executableHTML"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/customElements/aa-baseElement/baseElement.js":
/*!**********************************************************!*\
  !*** ./src/customElements/aa-baseElement/baseElement.js ***!
  \**********************************************************/
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

if (window) window.html = html;

class BaseElement extends HTMLElement {

    static registerAAElement(name, elem) {
        if (!customElements.get(name)) {
            window.AANodeNames = window.AANodeNames || [];
            window.AANodeNames.push(name.toUpperCase());
            customElements.define(name, elem);
        }
    }

    static isAAElement(node) {
        if (AANodeNames.indexOf(node.nodeName) != -1) {
            return true;
        }
        return false;
    }

    static createFragmentForNode(node) {
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < node.childNodes.length; i++) {
            fragment.append(node.childNodes[i].cloneNode(true));
        }
        return fragment;
    }

    static createHolderForNode(o) {
        let node = o.cloneNode(false);
        node.innerFragment = BaseElement.createFragmentForNode(o);
        return node;
    }

    static scanAndReplace(node) {
        if (node.nodeName === "TEMPLATE") {
            BaseElement.scanAndReplace(node.content);
        }
        else if (BaseElement.isAAElement(node)) {
            let holder = BaseElement.createHolderForNode(node);
            node.replaceWith(holder);
        } else
            for (let i = 0; i < node.childNodes.length; i++) {
                BaseElement.scanAndReplace(node.childNodes[i]);
            }
    }

    constructor() {
        super();
        // console.log(this.nodeName+"#"+this.id, "created");
        this._props = this.makePropertiesFromAttributes();
    }

    connectedCallback() {
       
        // console.log(this.id, " connected");
        this._attachedTimestamp = new Date().getTime();
        this._debug = (this.debug === true) || (this.debug === null);
        if (this.innerFragment) {
            BaseElement.scanAndReplace(this.innerFragment);
            for (let i = 0; i < this.innerFragment.childNodes.length; i++) {
                this.appendChild(BaseElement.copy(this.innerFragment.childNodes[i]));
            }

        }

        this.setAttributeDefaultValues();
    }

    /**
     * Properties are the member variables of the HTMLElement object.
     * Attributes are the html tag's attributes.
     * By convention, properties are in camelCase, e.g., someMembVariable
     * while the corresponding attribute whould be hyphenated, e.g., some-member-variable.
     * The purpose of this function is, based on the hyphenated attributes 
     * of the element, to generate corresponding camelCase properties
     * 
     * Attribute names are provided by observedAttributes of the HTMLElement object,
     * however objects that inherit from baseElement can also provide a more
     * meaningful declaration, including datatype and default value, in 
     * a static get properties function, like so:
     * 
     *  static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
            "submit-button-text":{
                type:String,
                value:"submit",
                userDefined:true
            },

    
     * This function also generates corresponding getter and setter functions
     * for each property, so that properties and attributes always remain in sync
     * with each other 
     */
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

    setAttributeDefaultValues(){

        let p = this.constructor.properties;
        if(p){
            let keys =Object.keys(p)
            for(let i=0; i<keys.length; i++){
                console.log(keys[i], p[keys[i]].value)
                
                let prop = this.toCamelCase(keys[i]);
                if((typeof this[prop]==="undefined")||(this[prop]===null)){
                    // this[prop] = p[keys[i]].value ;
                    this.setAttribute(keys[i], this.getAttribute(keys[i]) || p[keys[i]].value);
                }
                
            }
        }
        
    }

    static copy(node) {
        let nodeCopy;
        if (BaseElement.isAAElement(node)) {

            if (node.innerFragment) {
                nodeCopy = node.cloneNode();
                nodeCopy.innerFragment = BaseElement.createFragmentForNode(node.innerFragment);
            } else {
                nodeCopy = node.cloneNode();
                nodeCopy.innerFragment = BaseElement.createFragmentForNode(node);
            }
        }
        else {
            nodeCopy = node.cloneNode(true);
        }
        return nodeCopy;
    }


    _dispatchDebugEvent(detail) {
        if (this.debug) {
            this.dispatchEvent(new CustomEvent('debugEvent', { detail, bubbles: true }));
        }
    }



    _dispatchEndEvent(detail) {
        //  use setTimeout to allow aaSequence.next() to return,
        //  so that calls to aaSequence.next are not recursive
        // setTimeout(()=>{
        // debugger;
        this.dispatchEvent(new CustomEvent('endEvent', { bubbles: true, detail }));
        // },0);
    }

    _getParentSession() {
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

/***/ "./src/customElements/aa-checkboxes/aa-checkboxes.js":
/*!***********************************************************!*\
  !*** ./src/customElements/aa-checkboxes/aa-checkboxes.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AACheckboxes; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_choice_item_aa_choice_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aa-choice-item/aa-choice-item.js */ "./src/customElements/aa-choice-item/aa-choice-item.js");



class AACheckboxes extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {



    static get properties() {
        return {
            horizontal: {
                type: Boolean,
                value: false,
                userDefined: true
            },

            vertical: {
                type: Boolean,
                value: true,
                userDefined: true
            },

            name: {
                type: String,
                userDefined: true
            },

            value: {
                type: String,
                userDefined: false
            },
            



        }
    }

    static get acceptsElements() {
        return [
            'aa-choice-item'
        ]
    }

    static get observedAttributes() {
        return Object.keys(AACheckboxes.properties);
    }


    get value() {

        let result = [];
        if (this.boxes) {
            for (let i = 0; i < this.boxes.length; i++) {
                if (this.boxes[i].checked) {
                    result.push(this.boxes[i].value);
                }
                else {
                    result.push(null);
                }
            }

        }
        console.log(result);
        return result
    }

    set value(val) {
        this.setAttribute('value', val);
        this.boxGroup.selected = val;
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();
        this.root.innerHTML = this.css + this.html;
        this.boxes = [];
        for (let i = 0; i < this.childNodes.length; i++) {
            this.attachToShadowDomAccordingToKind(this.childNodes[i]);
        }

        this.boxes = this.root.querySelectorAll('paper-checkbox')

        let val = this.getAttribute('value');
        if (this.boxes) {
            for (let i = 0; i < this.boxes.length; i++) {
                if (this.boxes[i].value == val) {
                    this.boxes[i].checked = true
                }
            }
        }


    }

    attachToShadowDomAccordingToKind(node) {


        if (!_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(node)) {
            this.root.appendChild(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(node));
        } else {
            if (node.tagName === 'AA-CHOICE-ITEM') {
                let child = document.createElement('paper-checkbox');
                if (node.getAttribute('value')) {
                    child.setAttribute('name', node.getAttribute('value'));
                    child.setAttribute('value', node.getAttribute('value'));
                } else {
                    child.setAttribute('name', node.innerText.trim());
                    child.setAttribute('value', node.innerText.trim());
                }
                if (!((this.horizontal === '') || (this.horizontal))) {
                    child.style.display = 'block';
                }
                child.innerHTML = node.innerHTML;
                this.root.appendChild(child);

                console.log('name: ', child.name)
                this.boxes.push(child);
            }
        }
    }

    get html() {
        return html``;
    }

    get css() {
        return ``;
    }

}


_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-checkboxes', AACheckboxes);

/***/ }),

/***/ "./src/customElements/aa-choice-item/aa-choice-item.js":
/*!*************************************************************!*\
  !*** ./src/customElements/aa-choice-item/aa-choice-item.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAChoiceItem; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AAChoiceItem extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get properties(){
        return{
            value:{
                type:String,
                userDefined:true
            }           
        }
    }
    static get observedAttributes() {
        return [
            'name',
            'value'
        ];
    }

    static get acceptsElements(){
        return null;
    }

    constructor() {
        super();

    }

    connectedCallback() {
        super.connectedCallback();

    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-choice-item', AAChoiceItem);

/***/ }),

/***/ "./src/customElements/aa-choose/aa-choose.js":
/*!***************************************************!*\
  !*** ./src/customElements/aa-choose/aa-choose.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAChoose; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aa-when/aa-when.js */ "./src/customElements/aa-choose/aa-when/aa-when.js");
/* harmony import */ var _aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aa-otherwise/aa-otherwise.js */ "./src/customElements/aa-choose/aa-otherwise/aa-otherwise.js");
/* harmony import */ var _lib_jsep_jsep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/jsep/jsep.js */ "./src/lib/jsep/jsep.js");






class AAChoose extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
            "should-run":{
                type:Boolean,
                value:true,
                userDefined:false
            },
            "debug":{
                type:Boolean,
                value:false,
                userDefined:false
            }
        }
    }

    static get acceptsElements(){
        return[
            "aa-when", "aa-otherwise"
        ]
    }

    static get observedAttributes() {
        return Object.keys(AAChoose.properties);
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>';
        this.originalContent = this.innerHTML;
    }


    connectedCallback() {
        this._shouldRun = (this.shouldRun === null) || (this.shouldRun === true);
        this.sessionElement = this._getParentSession();

        
        if (this._shouldRun) {
            if (typeof this.innerFragment !== 'undefined') {
                _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].scanAndReplace(this.innerFragment);
                let nodes = this._getNodeToInstantiate();
                if (nodes.length === 0) {
                    this._dispatchEndEvent();
                } else {
                    let doesAnyNodeExpectWait = false;
                    for (let i = 0; i < nodes.length; i++) {
                        let node = nodes[i];
                        if (typeof node !== 'undefined') {

                            /**
                             * certain elements, mainly the screen,
                             * are synchronous and need to dispatch
                             * their own "end" events.
                             * 
                             * so look into the list of childNodes
                             * contained into the part of the choose-when-otherwise
                             * block that gets instantiated, and if you see
                             * one with the property expectWait, don't tell
                             * the sequence to move forward.
                             * 
                             * Possibly the architecture for this needs to change,
                             * and have the sequence specifically extract newly
                             * produced nodes and insert them itself
                            **/
                           
                            for(let j=0; j<node.childNodes.length;j++){
                                
                                // the element has not been attached
                                // so we have to access the static properties getter
                                // to get the default value for expectWait
                                if(node.childNodes[j].constructor)
                                if(node.childNodes[j].constructor.properties)
                                if(node.childNodes[j].constructor.properties['expect-wait']){
                                    doesAnyNodeExpectWait = true;
                                }
                            }

                            this.parentNode.insertBefore(node, this.nextSibling);
                        }
                    }
            
                    /** 
                     * so here dispatch evdEvent only if you haven't encountered
                     * something that has expectWait:true
                     */
                    if(!doesAnyNodeExpectWait) {
                        this._dispatchEndEvent();
                    }
                }
            }
            else {
                if (this.childNodes.length === 0) {
                    this._dispatchEndEvent();
                }
            }
        }
        this.remove();
    }

    _getNodeToInstantiate() {
        let nodesToReturn = [];
        let nodeOtherwise = [];
        let isChildTrue = false;
        for (let i = 0; i < this.innerFragment.children.length; i++) {
            let child = this.innerFragment.children[i];
            if (child.nodeName === 'AA-WHEN') {
                isChildTrue = this.evaluate(child);
                if (isChildTrue) {
                    nodesToReturn.push(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(child).innerFragment);
                }
            } else if (child.nodeName === 'AA-OTHERWISE') {
                nodeOtherwise.push(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(child).innerFragment);
            }
        }
        if (nodesToReturn.length === 0) {
            return nodeOtherwise;
        }
        else {
            return nodesToReturn;
        }
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
            if ((parseTree.left.type === 'Literal') && (parseTree.right.type === 'Literal')) {
                return eval(expr);
            }
            else {
                // there are still strings in the expression, which are unknown, an exception should be raised
                throw 'unknown identifiers in expression : ' + expr;
            }
        } catch (e) {
            console.error('parse error:', e);
        }
    }

    replaceExpressionIdentifiersWithValues(expression, sessionElement) {
        let session = sessionElement || this._getParentSession();
        let result = expression.toUpperCase();

        let originalIdentifiers = Object.keys(session.getDataDump());
        let upperCaseIdentifiers = originalIdentifiers.map(s => s.toUpperCase());
        for (let i in upperCaseIdentifiers) {
            let value = session.getData(originalIdentifiers[i]);
            let finalValue = parseInt(value);
            if (finalValue != value) {
                if (value === 'null') { finalValue = 'null'; }
                else if (value === 'true') { finalValue = 'true'; }
                else if (value === 'false') { finalValue = 'false'; }
                else finalValue = `"${value}"`
            }
            let r = new RegExp(upperCaseIdentifiers[i], 'g');
            result = result.replace(r, finalValue);
        }
        return result;
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-choose', AAChoose);



/***/ }),

/***/ "./src/customElements/aa-choose/aa-otherwise/aa-otherwise.js":
/*!*******************************************************************!*\
  !*** ./src/customElements/aa-choose/aa-otherwise/aa-otherwise.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAOtherwise; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");


class AAOtherwise extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get acceptsElements(){
        return null;
    }
    
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }
}


_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-otherwise', AAOtherwise);


/***/ }),

/***/ "./src/customElements/aa-choose/aa-when/aa-when.js":
/*!*********************************************************!*\
  !*** ./src/customElements/aa-choose/aa-when/aa-when.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAWhen; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");


class AAWhen extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get properties(){
        return {
            name:{
                type:String,
                userDefined:false
            },
            "should-run":{
                type:Boolean,
                value:true,
                userDefined:false
            },
            "debug":{
                type:Boolean,
                value:false,
                userDefined:false
            },
            "test":{
                type:String,
                userDefined:true
            }
        }
    }
    static get acceptsElements(){
        return null;
    }

    static get observedAttributes() {
        return Object.keys(AAWhen.properties);
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>'
    }

    connectedCallback() {
        super.connectedCallback();
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-when', AAWhen);



/***/ }),

/***/ "./src/customElements/aa-function/aa-function-random.js":
/*!**************************************************************!*\
  !*** ./src/customElements/aa-function/aa-function-random.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAFunctionRandom; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");


class AAFunctionRandom extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
           
            "debug":{
                type:Boolean,
                value:false,
                userDefined:false
            },

            "value":{
                type:Number,
                userDefined:false,
            },

            "min":{
                type:Number,
                userDefined:true,
            },
            
            "max":{
                type:Number,
                userDefined:true,
            },
            

        }
    }

    static get acceptsElements(){
        return null
    }

    static get observedAttributes() {
        return Object.keys(AAFunctionRandom.properties);
    }



    constructor(){

        super();
    }

    connectedCallback() {

        let session = this._getParentSession();
        this.value = this.getValue();
        session.setData(this.name, this.value);
        this._dispatchEndEvent({ autoDispatch: true });
        if (!this.debug) { this.remove(); }
    }

    getValue() {
        var parsedMin = parseFloat(this.min);
        var parsedMax = parseFloat(this.max);
        return this.getRandomInt(parsedMin, parsedMax);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + 0.5) + min;
    }


}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-function-random', AAFunctionRandom);



/***/ }),

/***/ "./src/customElements/aa-likert-scale/aa-likert-scale.js":
/*!***************************************************************!*\
  !*** ./src/customElements/aa-likert-scale/aa-likert-scale.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AALikertScale; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_multiple_choice_aa_multiple_choice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aa-multiple-choice/aa-multiple-choice.js */ "./src/customElements/aa-multiple-choice/aa-multiple-choice.js");



class AALikertScale extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
           
            "debug":{
                type:Boolean,
                value:false,
                userDefined:false
            },

            "value":{
                type:Number,
                userDefined:false,
            },

            "items":{
                type:Number,
                userDefined:true,
            },
            

        }
    }

    static get acceptsElements(){
        return [];
    }

    static get observedAttributes() {
        return Object.keys(AALikertScale.properties);
    }



    constructor(){

        super();

        this.root = this.attachShadow({ mode: 'open' });


    }

    connectedCallback() {
        super.connectedCallback();

        this.root.innerHTML = this.html;

        this.mChoice = this.root.querySelector("aa-multiple-choice")
        this.choiceItems = this.mChoice.choiceItems
    }


    get html(){
        let items = ``;
        if((!this.items)||(this.items==="undefined")) this.items = 5;
        for(let i=0; i<this.items; i++){
            items += `<aa-choice-item name="${i+1}">${i+1}</aa-choice-item>`;
        }
        let result =  html`<aa-multiple-choice horizontal="true" name="${this.name}">${items}</aa-multiple-choice>`
        console.log(result);
        return result;
    }


    get value(){

        if(this.mChoice)
        {
            return parseInt(this.mChoice.value);
        } else{
            return parseInt(this.getAttribute('value'));
        }
    }


    getValue() {
       return this.mChoice.value; 
    }

 


}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-likert-scale', AALikertScale);



/***/ }),

/***/ "./src/customElements/aa-memory/aa-memory.js":
/*!***************************************************!*\
  !*** ./src/customElements/aa-memory/aa-memory.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAMemory; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");




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

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-memory', AAMemory);


/***/ }),

/***/ "./src/customElements/aa-multiple-choice/aa-multiple-choice.js":
/*!*********************************************************************!*\
  !*** ./src/customElements/aa-multiple-choice/aa-multiple-choice.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAMultipleChoice; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_choice_item_aa_choice_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aa-choice-item/aa-choice-item.js */ "./src/customElements/aa-choice-item/aa-choice-item.js");



class AAMultipleChoice extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {



    static get properties() {
        return {
            horizontal: {
                type: Boolean,
                value: false,
                userDefined: true
            },

            vertical: {
                type: Boolean,
                value: true,
                userDefined: true
            },

            name: {
                type: String,
                userDefined: true
            },

            value: {
                type: String,
                userDefined: true
            },

        }
    }

    static get acceptsElements() {
        return [
            'aa-choice-item'
        ]
    }

    static get observedAttributes() {
        return Object.keys(AAMultipleChoice.properties);
    }


    get value() {

        if (this.radioGroup) {
            return this.radioGroup.selected;
        }
        return this.getAttribute('value');
    }

    set value(val) {

        this.setAttribute('value', val);
        this.radioGroup.selected = val;
    }

    constructor() {
        super();

        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = this.css + this.html;

        this.radioGroup = this.root.querySelector('#radioGroup');
        this.radioGroup.addEventListener('change', (e) => {
            this.value = e.target.name;
            console.log(this.value);
        });

    }

    connectedCallback() {
        super.connectedCallback();

        this.choiceItems = [];
        for (let i = 0; i < this.childNodes.length; i++) {
            this.attachToShadowDomAccordingToKind(this.childNodes[i]);
        }

        if (this.getAttribute('value')) {
            this.radioGroup.setAttribute('selected', this.getAttribute('value'));
        }

        this.style.display = 'block';
    }

    attachToShadowDomAccordingToKind(node) {

        if (!_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(node)) {
            this.root.appendChild(_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(node));
        } else {
            if (node.tagName === 'AA-CHOICE-ITEM') {

                let child = document.createElement('paper-radio-button');
                if (node.getAttribute('value')) {
                    child.setAttribute('name', node.getAttribute('value'));
                } else {
                    child.setAttribute('name', node.innerText.trim());
                }
                if (!((this.horizontal === '') || (this.horizontal))) {
                    child.style.display = 'block';
                }

                child.innerHTML = node.innerHTML;
                 
                this.radioGroup.appendChild(child);
                this.choiceItems.push(child);


                if (((this.horizontal === '') || (this.horizontal))) {
                    

                    this.radioGroup.style.display='flex';
                    this.radioGroup.style.justifyContent='space-around';

                    // debugger;
                    let d1 = child.shadowRoot.querySelector('#radioContainer');
                    let d2 = child.shadowRoot.querySelector('#radioLabel');
                    d2.style.textAlign = 'center'
                    d2.style.marginLeft = '0px';
                    d2.style.padding = '5px';
                    d2.style.whiteSpace = "nowrap";
                    d2.style.minWidth = "100px";
                    let newDiv = document.createElement('div');
                    newDiv.style.marginLeft = 'var(--paper-radio-button-label-spacing,10px)';
                    newDiv.style.display='flex';
                    newDiv.style.flexDirection='column';
                    newDiv.style.alignItems = 'center';
                    newDiv.style.textAlign = 'center';
                    child.shadowRoot.appendChild(newDiv);
                    newDiv.appendChild(d1);
                    newDiv.appendChild(d2);
 
                
                } else {

                }

            }
        }
    }

    get html() {
        return html`<paper-radio-group id='radioGroup'></paper-radio-group>`;
    }

    get css() {
        return ``;
    }

}


_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-multiple-choice', AAMultipleChoice);

/***/ }),

/***/ "./src/customElements/aa-screen/aa-screen.js":
/*!***************************************************!*\
  !*** ./src/customElements/aa-screen/aa-screen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAScreen; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");



class AAScreen extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


   
    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
            "submit-button-text":{
                type:String,
                value:"submit",
                userDefined:true
            },

            "submit-button-hidden":{
                type:Boolean,
                value:false,
                userDefined:true
            },

            'expect-wait':{
                type:Boolean,
                userDefined:false,
                value:true
            },

            'autohide':{
                type:Boolean,
                userDefined:false,
                value:true
            }
            
        }
    }

    static get acceptsElements(){
        return null;
    }
    static get observedAttributes() {
        return Object.keys(AAScreen.properties);
    }


    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'submit-button-text':
                if (this.submitButton) { this.submitButton.innerHTML = newValue; }
                break;
            case 'submit-button-hidden':
                if(this.submitButtonContainer){
                    if ((newValue !== true) || (newValue !== 'true')) {
                        this.submitButtonContainer.style.display = 'block';
                    } else {
                        this.submitButtonContainer.style.display = 'none';
                    }
                }
                break;
        }
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        // this.expectWait = true;

    }

    connectedCallback() {
       
        debugger;
        super.connectedCallback();
        


        this.root.innerHTML = this.css + this.html;
        this.submitButton = this.root.querySelector('.submitButton');
        this.submitButtonContainer = this.root.querySelector('.submitButtonContainer');

        if (this._started) { return; }
        this._started = true;

        if (this.submitButtonHidden) {
            if(this.submitButtonContainer){
                this.submitButtonContainer.style.display = 'none';
            }
        }


        this.root.querySelector('.submitButton').addEventListener('click', this.submitButtonClick.bind(this));

        
    }


    get css() {

        return html`<style>
                :host {
                    display: block;
                    height: fit-content;
                    padding:20px;
                    font-family:sans-serif;
                }

                .submitButtonContainer{
                    text-align:right;
                    justify-content: space-between; 
                    align-items:center;
                    padding:20px;
                }


                paper-button.darkBlue {
                    background-color: #0d47a1;
                    color: white;
                 }
  
         </style>`;
    }

    get html() {
        return html`
            <slot></slot>
            <div id='userMessage'>
            <div class='submitButtonContainer'>
                <div>
                    ${this.getSubmitButton()}
            </div>
                <div id='userMessage'></div>
            </div>`;
    }

    getSubmitButton() {
        let buttonText = this.submitButtonText || 'submit';
        if (customElements.get('paper-button')) {
            return html`<paper-button class='submitButton darkBlue' raised class='indigo'>${buttonText}</paper-button>`;
        } else {
            return html`<button class='submitButton'>${buttonText}</button>`;
        }
    }

    submitButtonClick(e) {
        debugger;
        let userMessage = this.querySelector('#userMessage');
        if (this.hasChildrenThatDemandResponse()) {

            userMessage.innerHTML = html`
                    <div style='display:flex; align-items:center'> 
                        <div>please fill out the required fields</div> 
                            <div id='attention' style='color: red; font-size: 20px;  border: solid thin; border-radius: 50%; width: 20px;
                                                margin-left:20px; height: 20px; 
                                                text-align: center;
                                                padding: 5px;'>!</div></div>`;
            return;
        }

        let valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: this.getValue() } });
        this.dispatchEvent(valueSubmitEvent);
        this._dispatchEndEvent(this.getValue());
        if (typeof e.detail.callback != 'undefined') {
            e.detail.callback(e);
        }
        if (this.autohide) { 
            debugger;
            this.hide(); 
        }

    }






    hasChildrenThatDemandResponse() {

        let aaChildren = this.getAAChildren(this);
        let isMissingValues = false;
        for (let i = 0; i < aaChildren.length; i++) {
            if (aaChildren[i].mandatory) {
                if (child.getValue() === null) {
                    // console.log(child, 'demands response');
                    // TODO : add a class to the child
                    isMissingValues = true;
                }
            }
        }

        return isMissingValues;
    }

    getAAChildren() {
        let result = [];
        for (let i = 0; i < this.children.length; i++) {
            if (_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(this.children[i])) { result.push(this.children[i]); }
        }
        return result;
    }



    getChildrenValues() {
        let result = [];

        for (let i = 0; i < this.children.length; i++) {
            let c = this.children[i];
            if (c.getValue) {
                result.push(c.getValue());
            } else {
                if (c.value) {
                    result.push({ [c.name]: c.value });
                }
            }
        }
        return result;
    }





    getValue() {
        let __meta = {
            attachedTimestamp: this.attachedTimestamp,
            submitTimestamp: new Date().getTime()
        };
        let result = this.getChildrenValues(this);
        return result;
    }

    getValueWithKey() {
        let result = {};
        result[this.name] = this.getValue();
        return result;
    }


    automate() {
        for (let i = 0; i < this.children.length; i++) {
            if (_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].isAAElement(this.children[i])) {
                if (typeof this.children[i].automate != 'undefined') {
                    this.children[i].automate();
                }
            }
        }
        this.submitButtonClick();
    }

    hide() {
        this.style.display = 'none';
    }

    show() {
        this.style.display = 'block';
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-screen', AAScreen);



/***/ }),

/***/ "./src/customElements/aa-sequence/aa-jump/aa-jump.js":
/*!***********************************************************!*\
  !*** ./src/customElements/aa-sequence/aa-jump/aa-jump.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAJump; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");


class AAJump extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {



    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
            "goto":{
                type:String,
                userDefined:true
            }
        }
    }

    static get acceptsElements(){
        return []
    }

    static get observedAttributes() {
        return Object.keys(AAJump.properties);
    }

    connectedCallback() {
        this._dispatchEndEvent({ goto: this.goto, autoDispatch: true });
        this.remove();
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-jump', AAJump);


/***/ }),

/***/ "./src/customElements/aa-sequence/aa-sequence.js":
/*!*******************************************************!*\
  !*** ./src/customElements/aa-sequence/aa-sequence.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AASequence; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_jump_aa_jump_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aa-jump/aa-jump.js */ "./src/customElements/aa-sequence/aa-jump/aa-jump.js");





class AASequence extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'write-into': {
                type: String,
                userDefined: true
            },

            'should-run':{
                type:Boolean,
                userDefined:true,
                value:true
            },

            'debug': {
                type: Boolean,
                value: false,
                userDefined: false
            },
            'type':{
                type:String, //there should be an array of options type
                userDefined: false
            },
            'stopped':{
                type:Boolean,
                userDefined:false
            },

        }
    }

    static get acceptsElements(){
        return null
    }

    static get observedAttributes() {
        return Object.keys(AASequence.properties);
    }

    constructor() {
        super();
        // this.root = this.attachShadow({ mode: 'open' });
        // this.root.innerHTML = '<slot></slot>';
    }
    connectedCallback() {
        this.addEventListener('endEvent', this.endEventListener.bind(this));
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.init()
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

    init() {
        this.stopped = false;
        if (this.writeInto) {
            this.target = document.querySelector(this.writeInto);
        } else {
            this.target = this;
        }



        if (typeof this.innerFragment === 'undefined') {
            console.warn('.innerFragment is undefined');
            this.restoreHeldNodes(this)
            return;
        }


        this.sIndex = 0;
        if (!this.stopped) { this.start() }
    }

    start() {
        this.stopped = false;
        this.next();
    }

    stop() {
        this.stopped = true;
    }




    next(name) {

        return new Promise((resolve, reject) => {

            if (this.stopped) { return; }
            if (this.sIndex >= this.innerFragment.childNodes.length) return null;

            if (typeof name === 'string') {
                for (let i = 0; i < this.innerFragment.childNodes.length; i++) {
                    if (this.innerFragment.childNodes[i].getAttribute) if (this.innerFragment.childNodes[i].getAttribute('name') == name) {
                        this.sIndex = i;
                        break;
                    }
                }
            }

            let fragmentChild = this.innerFragment.childNodes[this.sIndex];
            //  if the child is not an element just add it immediately 
            //  and move on to the next, there won't be a connectecCallback Function to execute anyway
            while (fragmentChild.nodeType != Node.ELEMENT_NODE) {

                let fragmentChildCopy = _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(fragmentChild);
                this.target.appendChild(fragmentChildCopy);
                this.currentNode = fragmentChildCopy;
                this.sIndex++;
                if (this.sIndex >= this.innerFragment.childNodes.length) { return; }
                fragmentChild = this.innerFragment.childNodes[this.sIndex];
            }
            let fragmentChildCopy = _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(fragmentChild);
            this.currentNode = fragmentChildCopy;
            this.sIndex += 1;
            if (!fragmentChildCopy._dispatchEndEvent) {
                resolve(this.next());
            } else {
                this.target.appendChild(fragmentChildCopy);
                setTimeout(() => resolve());
            }
        })
    }

    endEventListener(e) {
        e.stopPropagation();
        if (e.detail) {
            if (e.detail.goto) { this.next(e.detail.goto); }
            else if (e.detail.autoDispatch) { this.next(true); }
            else { setTimeout(() => this.next(true)); }
        } else {
            setTimeout(() => this.next(true))
        }
    }
}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-sequence', AASequence);




/***/ }),

/***/ "./src/customElements/aa-session/aa-session.js":
/*!*****************************************************!*\
  !*** ./src/customElements/aa-session/aa-session.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AASession; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony import */ var _aa_memory_aa_memory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../aa-memory/aa-memory.js */ "./src/customElements/aa-memory/aa-memory.js");




class AASession extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
            'should-run':{
                type:Boolean,
                userDefined:true
            },

            'debug': {
                type: Boolean,
                value: false,
                userDefined: false
            },

        }
    }

    static get acceptsElements(){
        return null
    }

    static get observedAttributes() {
      return Object.keys(AASession.properties);
    }



    constructor() {
        super();
        

        this.myTemplate = document.createElement('template');
        this.myTemplate.innerHTML = this.innerHTML;
        this.innerHTML = '';

        // this.root = this.attachShadow({ mode: 'closed' });
        // this.root.innerHTML = '<template><slot></slot></template>'
        this._mem = document.createElement('aa-memory');
        this.addEventListener('valueSubmit', (e) => {


            // e.stopPropagation();
            let input = {
                data: e.detail.value,
                sessionID: this.sessionID,
                sessionTimestamp: this.sessionTime,
                sessionName: this.name,
                variables: Object.keys(e.detail.value),
            };
           // TODO:  this._mem.saveReplyValue(e.detail.value, false);


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

        return 0;
    }

    connectedCallback() {
        // console.log(this.tagName+"#"+this.id,"connected");

        this.sessionID = this.myIdGenerator();
        this.sessionTime = new Date().getTime();
        let sessionDatum = Object.keys(this.dataset);
        for(let i in sessionDatum){
            this.setData(sessionDatum[i], this.dataset[sessionDatum[i]]);
        }
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.run();
        }
    }


    attachTemplateChildNodesToMyself(templateClone){
        
        while(templateClone.content.childNodes.length){
            //  if there's a direct template child, we want its children appended too
            if(templateClone.content.childNodes[0].nodeName==="TEMPLATE"){
                while(templateClone.content.childNodes[0].content.childNodes.length){
                    this.appendChild(templateClone.content.childNodes[0].content.childNodes[0]);
                }
                //  we are not appending the template element elsewhere 
                //  so throw it way so that the childnode count can be reduced
                templateClone.content.childNodes[0].remove();
            }else{
                this.appendChild(templateClone.content.childNodes[0]);
            }
        }
    }

    run() {

        let myTemplateClone = this.myTemplate.cloneNode(true);
        _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].scanAndReplace(myTemplateClone);   
        this.attachTemplateChildNodesToMyself(myTemplateClone);
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

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-session', AASession);









/***/ }),

/***/ "./src/customElements/aa-slider/aa-slider.js":
/*!***************************************************!*\
  !*** ./src/customElements/aa-slider/aa-slider.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AASlider; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AASlider extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {



    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'min': {
                type: Number,
                userDefined: true
            },
            'max': {
                type: Number,
                userDefined: true
            },
            minLabel: {
                type: String,
                userDefined: true
            },
            maxLabel: {
                type: String,
                userDefined: true
            },
            'value': {
                type: Number,
                userDefined: false
            },

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AASlider.properties);
    }


    changeInputItem(type) {
        if (type === 'long') {
            let value = this.value;
            let label = this.label;
            this.inputItem = customElements.get('paper-textarea') ?
                document.createElement('paper-textarea') : document.createElement('textarea');
            this.inputItem.value = value;
            this.inputItem.label = label;
            this.inputItem.classList.add('inputItem');
            this.fixBugInPaperTextarea(this.inputItem);
            this.inputItem.addEventListener('change', (e) => {
                this.value = e.target.value;
            })
            this.root.querySelector('.inputItem').replaceWith(this.inputItem);
        } else {
            let value = this.value;
            let label = this.label;
            this.inputItem = customElements.get('paper-input') ?
                document.createElement('paper-input') : document.createElement('input');
            this.inputItem.value = value;
            this.inputItem.label = label;
            this.inputItem.classList.add('inputItem');
            this.inputItem.addEventListener('change', (e) => {
                this.value = e.target.value;
            })
            this.root.querySelector('.inputItem').replaceWith(this.inputItem);
        }
    }


    get value() {
        if (!this.inputItem) {
            return this.getAttribute('value');
        }
        return this.inputItem.value;
    }
    set value(val) {
        this.setAttribute('value', val);
        if (this.inputItem) {
            this.inputItem.value = val;
        }

    }

    get minLabel() {
        return this.getAttribute('min-label');
    }

    get maxLabel() {
        return this.getAttribute('max-label');
    }

    set minLabel(val) {
        this.setAttribute('min-label', val);
        if (this.inputItem) {
            this.inputItem.minLabel = val;
        }
    }

    set maxLabel(val) {
        this.setAttribute('max-label', val);
        if (this.inputItem) {
            this.inputItem.maxLabel = val;
        }
    }

    set min(val) {
        this.setAttribute('min', val);
        if (this.inputItem) {
            this.inputItem.min = val;
        }
    }

    set max(val) {
        this.setAttribute('max', val);
        if (this.inputItem) {
            this.inputItem.max = val;
        }
    }


    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        
        let innerHTML = this.css + `<div class='inputContainer'>${this.html}</div>`;
        this.root.innerHTML = innerHTML;

        let minLabel = this.minLabel;
        let maxLabel = this.maxLabel;
        let min = this.min || 0;
        let max = this.max || 100;
        let value = this.value || (this.min + this.max)/2;
        this.inputItem = this.root.querySelector('.inputItem');
        this.minLabelItem = this.root.querySelector('.minLabel');
        this.maxLabelItem = this.root.querySelector('.maxLabel');
        
        if (minLabel) { this.minLabelItem.innerHTML = minLabel;}
        if (maxLabel) { this.maxLabelItem.innerHTML = maxLabel;}
        if (value) { this.inputItem.value = value; }
        


        this.inputItem.addEventListener('change', (e) => {
            this.value = e.target.value;
        });
    }



    connectedCallback() {
        super.connectedCallback();


    }

    get css() {
        return `<style>
        :host{
            display:block;
            overflow:hidden;        
        }
        </style>
        `;
    }

    get html() {
        let inputElement = customElements.get('paper-slider')
            ? `<paper-slider style="width:100%" class='inputItem min=${this.min} max=${this.max}'></paper-slider>`
            : `<input style="width:100%" type="range" class="inputItem" min="${this.min}" max="${this.max}" value="${(this.max+this.min)/2}">`;
        

        let source = html`
        <div>${inputElement}</div>
        <div style="display:flex; justify-content:space-between">
            <div class="minLabel">${this.minLabel || ''}</div>
            <div style="text-align:right" class="maxLabel">${this.maxLabel || ''}</div>
        </div>
        `
        return source;
    }
   

}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-slider', AASlider);

/***/ }),

/***/ "./src/customElements/aa-text-answer/aa-text-answer.js":
/*!*************************************************************!*\
  !*** ./src/customElements/aa-text-answer/aa-text-answer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AATextAnswer; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AATextAnswer extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {



    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'long': {
                type: Boolean,
                userDefined: true
            },
            label: {
                type: String,
                userDefined: true
            },
            'value': {
                type: String,
                userDefined: false
            },

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AATextAnswer.properties);
    }


    changeInputItem(type) {
        if (type === 'long') {
            let value = this.value;
            let label = this.label;
            this.inputItem = customElements.get('paper-textarea') ?
                document.createElement('paper-textarea') : document.createElement('textarea');
            this.inputItem.value = value;
            this.inputItem.label = label;
            this.inputItem.classList.add('inputItem');
            this.fixBugInPaperTextarea(this.inputItem);
            this.inputItem.addEventListener('change', (e) => {
                this.value = e.target.value;
            })
            this.root.querySelector('.inputItem').replaceWith(this.inputItem);
        } else {
            let value = this.value;
            let label = this.label;
            this.inputItem = customElements.get('paper-input') ?
                document.createElement('paper-input') : document.createElement('input');
            this.inputItem.value = value;
            this.inputItem.label = label;
            this.inputItem.classList.add('inputItem');
            this.inputItem.addEventListener('change', (e) => {
                this.value = e.target.value;
            })
            this.root.querySelector('.inputItem').replaceWith(this.inputItem);
        }
    }


    get value() {
        if (!this.inputItem) {
            return this.getAttribute('value');
        }
        return this.inputItem.value;
    }
    set value(val) {
        this.setAttribute('value', val);
        if (this.inputItem) {
            this.inputItem.value = val;
        }

    }

    get label() {
        return this.getAttribute('label');
    }

    set label(val) {
        this.setAttribute('label', val);
        if (this.inputItem) {
            this.inputItem.label = val;
        }
    }

    set long(val) {
        this.setAttribute('long', val);
        if (val) {
            this.changeInputItem('long');
        } else {
            this.changeInputItem('short');
        }
    }

    get long() {
        return this.getAttribute('long');
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        let html = (this.long || (this.long === '')) ? this.longHtml : this.html;

        this.root.innerHTML = this.css + `<div class='inputContainer'>${html}</div>`;

        let label = this.label;
        let value = this.value;
        this.inputItem = this.root.querySelector('.inputItem');
        if (label) { this.inputItem.label = label; }
        if (value) { this.inputItem.value = value; }
        this.fixBugInPaperTextarea(this.inputItem);

        this.inputItem.addEventListener('change', (e) => {
            this.value = e.target.value;
        });
    }


    fixBugInPaperTextarea(inputItem) {
        // solves issue documented here: https://github.com/PolymerElements/paper-input/issues/125

        setTimeout(() => {
            if (inputItem.tagName === 'PAPER-TEXTAREA') {
                inputItem.root.childNodes[2].children[1].textarea.style.overflow = 'hidden';
                let width = window.getComputedStyle(this.root.querySelector('.inputContainer')).width;

                inputItem.root.childNodes[2].style.width = width;
                inputItem.addEventListener('focus', (e) => {
                    let width = window.getComputedStyle(this.root.querySelector('.inputContainer')).width;
                    inputItem.root.childNodes[2].style.width = width;
                })

                window.addEventListener('resize', () => {
                    inputItem.root.childNodes[2].style.width = '';
                    setTimeout(() => {
                        let width = window.getComputedStyle(this.root.querySelector('.inputContainer')).width;
                        inputItem.root.childNodes[2].style.width = width;
                    }, 100);

                })
            };
        }, 0);

    }

    connectedCallback() {
        super.connectedCallback();


    }

    get css() {
        return `<style>
        :host{
            display:block;
            overflow:hidden;        
        }
        paper-textarea textarea {
           overflow:hidden;
        }
        </style>`;
    }

    get html() {
        let inputElement = customElements.get('paper-input')
            ? `<paper-input class='inputItem'></paper-input>`
            : `<input class='inputItem'>`;
        return html`${inputElement}`
    }
    get longHtml() {
        let inputElement = customElements.get('paper-input')
            ? `<paper-textarea class='inputItem'></paper-input>`
            : `<textarea class='inputItem'></textarea`;
        return html`${inputElement}`
    }

}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-text-answer', AATextAnswer);

/***/ }),

/***/ "./src/customElements/aa-variable/aa-variable.js":
/*!*******************************************************!*\
  !*** ./src/customElements/aa-variable/aa-variable.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAVariable; });
/* harmony import */ var _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");

class AAVariable extends _aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'value': {
                type: String,
                userDefined: true
            },

        }
    }

    static get acceptsElements() {
        return []
    }

    static get observedAttributes() {

        return Object.keys(AAVariable.properties);

    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let session = this._getParentSession();
        session.setData(this.name, this.value);
        this._dispatchEndEvent({autoDispatch:true});
        if(!this.debug) {this.remove();}
    };


}

_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerAAElement('aa-variable', AAVariable);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: BaseElement, AAVariable, AAFunctionRandom, AAChoose, AAWhen, AAOtherwise, AAMemory, AAScreen, AASequence, AASession, AATextAnswer, AAChoiceItem, AAMultipleChoice, AACheckboxes, AALikertScale, AASlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customElements_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customElements/aa-baseElement/baseElement.js */ "./src/customElements/aa-baseElement/baseElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _customElements_aa_baseElement_baseElement_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _customElements_aa_variable_aa_variable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customElements/aa-variable/aa-variable.js */ "./src/customElements/aa-variable/aa-variable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AAVariable", function() { return _customElements_aa_variable_aa_variable_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _customElements_aa_function_aa_function_random_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customElements/aa-function/aa-function-random.js */ "./src/customElements/aa-function/aa-function-random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AAFunctionRandom", function() { return _customElements_aa_function_aa_function_random_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _customElements_aa_choose_aa_choose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customElements/aa-choose/aa-choose.js */ "./src/customElements/aa-choose/aa-choose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AAChoose", function() { return _customElements_aa_choose_aa_choose_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _customElements_aa_choose_aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customElements/aa-choose/aa-when/aa-when.js */ "./src/customElements/aa-choose/aa-when/aa-when.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AAWhen", function() { return _customElements_aa_choose_aa_when_aa_when_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _customElements_aa_choose_aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customElements/aa-choose/aa-otherwise/aa-otherwise.js */ "./src/customElements/aa-choose/aa-otherwise/aa-otherwise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AAOtherwise", function() { return _customElements_aa_choose_aa_otherwise_aa_otherwise_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _customElements_aa_memory_aa_memory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customElements/aa-memory/aa-memory.js */ "./src/customElements/aa-memory/aa-memory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AAMemory", function() { return _customElements_aa_memory_aa_memory_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _customElements_aa_screen_aa_screen_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customElements/aa-screen/aa-screen.js */ "./src/customElements/aa-screen/aa-screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AAScreen", function() { return _customElements_aa_screen_aa_screen_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _customElements_aa_sequence_aa_sequence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customElements/aa-sequence/aa-sequence.js */ "./src/customElements/aa-sequence/aa-sequence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AASequence", function() { return _customElements_aa_sequence_aa_sequence_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _customElements_aa_session_aa_session_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customElements/aa-session/aa-session.js */ "./src/customElements/aa-session/aa-session.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AASession", function() { return _customElements_aa_session_aa_session_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _customElements_aa_text_answer_aa_text_answer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customElements/aa-text-answer/aa-text-answer.js */ "./src/customElements/aa-text-answer/aa-text-answer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AATextAnswer", function() { return _customElements_aa_text_answer_aa_text_answer_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _customElements_aa_multiple_choice_aa_multiple_choice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customElements/aa-multiple-choice/aa-multiple-choice.js */ "./src/customElements/aa-multiple-choice/aa-multiple-choice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AAMultipleChoice", function() { return _customElements_aa_multiple_choice_aa_multiple_choice_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _customElements_aa_choice_item_aa_choice_item_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customElements/aa-choice-item/aa-choice-item.js */ "./src/customElements/aa-choice-item/aa-choice-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AAChoiceItem", function() { return _customElements_aa_choice_item_aa_choice_item_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _customElements_aa_checkboxes_aa_checkboxes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customElements/aa-checkboxes/aa-checkboxes.js */ "./src/customElements/aa-checkboxes/aa-checkboxes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AACheckboxes", function() { return _customElements_aa_checkboxes_aa_checkboxes_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _customElements_aa_likert_scale_aa_likert_scale_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customElements/aa-likert-scale/aa-likert-scale.js */ "./src/customElements/aa-likert-scale/aa-likert-scale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AALikertScale", function() { return _customElements_aa_likert_scale_aa_likert_scale_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _customElements_aa_slider_aa_slider_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customElements/aa-slider/aa-slider.js */ "./src/customElements/aa-slider/aa-slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AASlider", function() { return _customElements_aa_slider_aa_slider_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

// import '../dist/paper-polymer.js';
















// debugger;




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
					var  to_check = expr.substr(index, max_binop_len), tc_len = to_check.length;
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
					var node, biop, prec, stack, biop_info, left, right, i;

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
});
//# sourceMappingURL=aaCustomElements.js.map