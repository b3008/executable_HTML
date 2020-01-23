


var html = function (txt, ...val) {

    let result = txt[0];
    for (let i = 0; i < val.length; i++) {
        result += val[i];
        result += txt[i + 1];
    }
    return result;
}

if(window) window.html = html;

export default class BaseElement extends HTMLElement {

    static registerAAElement(name, elem){
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
        //  first get references to the children,
        //  because the element.children array will be modified as they are appended to the fragment
        let childNodes = [];
        for(let i=0; i<node.childNodes.length; i++){
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
        if (node.nodeName == "TEMPLATE") {
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
        this._props = this.makePropertiesFromAttributes();
    }

    connectedCallback() {
        console.log(this.tagName, this.id, " connected");
        this._attachedTimestamp = new Date().getTime();
        this._debug = (this.debug===true)||(this.debug===null);
        if(this.innerFragment){
            BaseElement.scanAndReplace(this.innerFragment);
            for(let i=0; i<this.innerFragment.childNodes.length; i++){
                this.appendChild(BaseElement.copy(this.innerFragment.childNodes[i]))
            }
            
        }
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

    static copy(node){
        let nodeCopy;
        if (BaseElement.isAAElement(node)) {
            
            if(node.innerFragment){
                nodeCopy = node.cloneNode();
                nodeCopy.innerFragment = BaseElement.createFragmentForNode(node.innerFragment);
            }else{
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
            this.dispatchEvent(new CustomEvent('debugEvent', { detail, bubbles:true }));
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