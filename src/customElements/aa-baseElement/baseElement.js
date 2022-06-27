// import '../../lib/yaml/js-yaml.js';
import '../../lib/js-yaml-browserify.js';
// import 'js-yaml';
import * as html2jsl from '../../lib/html2jsl/html2jsl.js';
import { mySVG } from '../../lib/mySVG/mySVG.js';

var html = function (txt, ...val) {

    let result = txt[0];
    for (let i = 0; i < val.length; i++) {

        result += val[i];
        result += txt[i + 1];
    }
    return result;
}

if (window) window.html = html;


export const AAClasses = [];
window.AAClasses = AAClasses;

export default class BaseElement extends HTMLElement {



    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },

            'diagram': {
                type: Boolean,
                value: false,
                userDefined: true
            },

            'diagram-transparent': {
                type: Boolean,
                value: false,
                userDefined: true
            },
        }
    }
    static registerAAElement(name, elem) {       
        if (!customElements.get(name)) {
            window.AANodeNames = window.AANodeNames || [];
            window.AANodeNames.push(name.toUpperCase());
            customElements.define(name, elem);
        }
        AAClasses[name.toUpperCase()] = elem;
    }

    static isAAElement(node) {
        if (AANodeNames.indexOf(node.nodeName.toUpperCase()) != -1) {
            return true;
        }
        return false;
    }

    static createFragmentForNode(node) {
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < node.childNodes.length; i++) {
            fragment.append(node.childNodes[i].cloneNode(true));
            // fragment.append(BaseElement.copy(node.childNodes[i])
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
            // if(node.innerFragment) { return };
            let holder = BaseElement.createHolderForNode(node);
            node.replaceWith(holder);
        } else
            for (let i = 0; i < node.childNodes.length; i++) {
                BaseElement.scanAndReplace(node.childNodes[i]);
            }
    }

    constructor() {
        super();
        this._props = this.makePropertiesFromAttributes();

    }

    connectedCallback() {
        this._attachedTimestamp = new Date().getTime();
        this._debug = (this.debug === true) || (this.debug === null);
        if (this.innerFragment) {

            // I have commented BaseElement.scanAndReplace out because a shallow copy and an innerFragment
            // is already created by BaseElement.copy for childNodes of this.innerFrament
            // as they are appended to this element.
            // BaseElement.scanAndReplace(this.innerFragment);
            for (let i = 0; i < this.innerFragment.childNodes.length; i++) {
                this.appendChild(BaseElement.copy(this.innerFragment.childNodes[i]));
            }

        }

        this.setAttributeDefaultValues();
    }

    getMemory() {
        let el = this;
        while (el.parentNode != null) {
            if (el._mem) return el._mem;
            el = el.parentNode;
        }
        return null;
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

    setAttributeDefaultValues() {
        let p = this.constructor.properties;
        if (p) {
            let keys = Object.keys(p);
            for (let i = 0; i < keys.length; i++) {
                let prop = this.toCamelCase(keys[i]);
                if ((typeof this[prop] === 'undefined') || (this[prop] === null) || (this[prop] === '')) {
                    if (p[keys[i]].type === Boolean) {
                        if (this.getAttribute(keys[i]) === '') {
                            this.setAttribute(keys[i], true);

                        } else if (this.getAttribute(keys[i]) === 'true') {
                            this.setAttribute(keys[i], true);

                        } else if (this.getAttribute(keys[i]) === 'false') {
                            this.setAttribute(keys[i], false);

                        } else if (this.getAttribute(keys[i]) === null) {
                            this.setAttribute(keys[i], p[keys[i]].value);
                        }
                    }
                    else {
                        let val = this.getAttribute(keys[i]) || (p[keys[i]].value || null);
                        if (val) this.setAttribute(keys[i], val);
                        if (val === false) this.setAttribute(keys[i], val);
                    }
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

    getAttributes() {
        let result = {};
        let attributes = Object.keys(this.constructor.properties);
        for (let i = 0; i < attributes.length; i++) {
            if (!this.constructor.properties[attributes[i]].userDefined) {
                // users should need not be concerned
                continue;
            }
            if ((typeof this.getAttribute(attributes[i]) !== 'undefined') && (this.getAttribute(attributes[i]) !== 'undefined')) {
                if (this.constructor.properties[attributes[i]].value == this.getAttribute(attributes[i])) {
                    // value is default value, no need to be part of specification
                    continue;
                }
                result[attributes[i]] = this.getAttribute(attributes[i]);
            }
        }
        return result;
    }

    toJSON() {
        let result = {};
        let tagName = this.tagName.toLowerCase()
        result[tagName] = this.getAttributes()
        if(this.childNodes.length){
            result[tagName].childNodes = [];
        
            this.childNodes.forEach(childNode=>{
                result[tagName].childNodes.push(BaseElement.nodeToJSON(childNode))
            });
        }
        return result;
    }

    static nodeToJSON(node) {

        if ((node.nodeType === document.TEXT_NODE) || (node.nodeType === document.COMMENT_NODE)) {
            let result = {};
            let text = node.textContent.replace(/\n/g, ' ').replace(/\t/g, ' ').replace(/\s\s+/g, ' ').trim();
            if (text !== '') {
                result[node.nodeName] = text;
                return result;
            }
            else { return null; }
        }
        else if (node.toJSON) {
            return node.toJSON();
        }
        else try {

            let result = {};

            let attrs = node.getAttributeNames();
            let attrObj = {};
            for (let i = 0; i < attrs.length; i++) {
                attrObj[attrs[i]] = node.getAttribute(attrs[i]);
            }
            let childNodes = [];
            for (let i = 0; i < node.childNodes.length; i++) {
                let el = BaseElement.nodeToJSON(node.childNodes[i]);
                if (el) {
                    childNodes.push(BaseElement.nodeToJSON(node.childNodes[i]));
                }
            }
            result[node.tagName] = attrObj;
            result[node.tagName].childNodes = childNodes;

            return result;
        } catch (e) {
            console.error(e);
        }
    }

    toYAML() {
        return jsyaml.dump(this.toJSON())
    }


    toJSL() {
        return html2jsl.nodeToJSL(this);
    }



    produceDiagram() {
        if (!this.root) {
            this.root = this.attachShadow({ mode: 'open' });
        }
        this.root.innerHTML = '<div id="svgContainer" ></div>'
        let div = this.root.childNodes[0];
        let diagram = new mySVG();
        let svg = diagram.render(this);

        let button = document.createElement('paper-button');
        button.innerHTML = "download";
        button.raised = true;
        button.style.backgroundColor = "#0d47a1";
        button.style.color = "white";
        button.classList.add('indigo');
        div.appendChild(svg);
        div.appendChild(button);
        // div.appendChild(diagram.renderKey());

        let filename = '';
        if (this.name) {
            filename = this.name + "." + this.nodeName.toLowerCase() + ".svg";
        } else {
            filename = this.nodeName.toLowerCase() + ".svg";
        }
        button.addEventListener("click", () => {
            diagram.download(filename);
        })

    }





    static getDomPathAsName(el) {
        var stack = [];
       
        while ((el.nodeName !== "AA-SESSION") && (el.parentNode != null)) {

            var sibCount = 0;
            var sibIndex = 0;
            for (var i = 0; i < el.parentNode.childNodes.length; i++) {
                var sib = el.parentNode.childNodes[i];
                if (sib.nodeName == el.nodeName) {
                    if (sib === el) {
                        sibIndex = sibCount;
                    }
                    sibCount++;
                }
            }
            if (!BaseElement.isAAElement(el)) {
                el = el.parentNode;
                continue;

            }
            if (el.hasAttribute('name') && el.name != '') {
                stack.unshift(el.name);
            } else if (el.hasAttribute('id') && el.id != '') {
                stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
            } else if (sibCount > 1) {
                stack.unshift(el.nodeName.toLowerCase() + ':eq(' + sibIndex + ')');
            } else {
                stack.unshift(el.nodeName.toLowerCase());
            }
            el = el.parentNode;
        }
        if (el.nodeName === "AA-SESSION") {
            if (el.hasAttribute('name') && el.name != '') {
                stack.unshift(el.name);
            } else if (el.hasAttribute('id') && el.id != '') {
                stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
            } else if (sibCount > 1) {
                stack.unshift(el.nodeName.toLowerCase() + ':eq(' + sibIndex + ')');
            } else {
                stack.unshift(el.nodeName.toLowerCase());
            }
        }
        let name = "";
        for (let i = 0; i < stack.length - 1; i++) {
            name += stack[i] + ".";
        }
        name += stack[stack.length - 1];

       
        return name; // removes the html element
    }

    static getVariableName(el) {
        if (el.name) {
            return el.name;
        } else {
            return BaseElement.getDomPathAsName(el);
        }
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


window.nodeToJSON = BaseElement.nodeToJSON;

