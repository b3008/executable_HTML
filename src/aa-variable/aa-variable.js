import BaseElement from './../aa-baseElement/baseElement.js'
export default class AAVariable extends BaseElement {


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
        this.mem = this._getParentSession().mem;
        this.mem.setData(this.name, this.value);
    };


}


if (!customElements.get('aa-variable')) {
    window.AANodeNames = window.AANodeNames|| []; 
    window.AANodeNames.push('AA-VARIABLE');
    customElements.define('aa-variable', AAVariable);
}
