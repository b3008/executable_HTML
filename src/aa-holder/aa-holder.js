import BaseElement from './../aa-baseElement/baseElement.js'
export default class AAHolder extends BaseElement {


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
        else if (BaseElement.isAAElement(node)) {
            let holder = AAHolder.createHolderForNode(node);
            node.replaceWith(holder);
        } else
            for (let i = 0; i < node.childNodes.length; i++) {
                AAHolder.scanAndReplace(node.childNodes[i]);
            }

    }

    static scanAndRestore(node) {

        if (node.nodeName == "TEMPLATE") AAHolder.scanAndRestore(node.content);
        else if (BaseElement.isAAElement(node)) {
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
        this.holdsAAElement = BaseElement.isAAElement(o);
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
