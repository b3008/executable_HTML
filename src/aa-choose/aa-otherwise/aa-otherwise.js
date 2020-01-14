import BaseElement from '../../aa-baseElement/baseElement.js';

export default class AAOtherwise extends BaseElement {

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.started) return;
        this.started = true;
        if (typeof this.innerFragment != "undefined") {
            this._analyzeChildNodesForElement(this.innerFragment);
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