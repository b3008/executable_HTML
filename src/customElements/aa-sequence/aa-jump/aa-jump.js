import { AABaseElement } from '../../aa-base-element/aa-base-element.js';

export class AAJump extends AABaseElement {

    static get category() {
        return "control";
    }

    static get tag() {
        return 'aa-jump';
    }

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            "goto": {
                type: String,
                userDefined: true
            },

        }
    }

    static get acceptsElements() {
        return []
    }

    static get observedAttributes() {
        return Object.keys(AAJump.properties);
    }

    connectedCallback() {
        this._dispatchEndEvent({ goto: this.goto, autoDispatch: true });
        this.remove();
    }
}

AABaseElement.registerAAElement('aa-jump', AAJump);
