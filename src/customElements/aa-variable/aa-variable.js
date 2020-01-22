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
        let session = this._getParentSession();
        session.setData(this.name, this.value);
    };


}

BaseElement.registerAAElement('aa-variable', AAVariable);

