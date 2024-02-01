import { AABaseElement } from '../../aa-base-element/aa-base-element.js';

export default class AAWhen extends AABaseElement {

    static get category() {
        return "control";
    }

    static get tag() {
        return 'aa-when'
    }

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: false
            },
            "should-run": {
                type: Boolean,
                value: true,
                userDefined: false
            },
            "debug": {
                type: Boolean,
                value: false,
                userDefined: false
            },
            "test": {
                type: String,
                userDefined: true
            }
        }
    }
    static get acceptsElements() {
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

AABaseElement.registerAAElement('aa-when', AAWhen);

