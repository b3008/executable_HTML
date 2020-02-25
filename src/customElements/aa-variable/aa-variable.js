import BaseElement from './../aa-baseElement/baseElement.js'
export default class AAVariable extends BaseElement {

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
    };


}

BaseElement.registerAAElement('aa-variable', AAVariable);

