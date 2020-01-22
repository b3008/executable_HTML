import BaseElement from './../../aa-baseElement/baseElement.js'

export default class AAWhen extends BaseElement {

    static get observedAttributes() {
        return ['name', 'should-run', 'debug'];
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

BaseElement.registerAAElement('aa-when', AAWhen);

