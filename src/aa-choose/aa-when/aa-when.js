import BaseElement from './../../aa-baseElement/baseElement.js'
import AAHolder from './../../aa-holder/aa-holder.js'
export default class AAWhen extends BaseElement {

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
            AAHolder.scanAndReplace(this.innerFragment);
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
