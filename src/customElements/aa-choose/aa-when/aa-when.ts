import { AABaseElement, type AAPropertiesMap } from '../../aa-base-element/aa-base-element';

export class AAWhen extends AABaseElement {

    static get category(): string {
        return "control";
    }

    static get tag(): string {
        return 'aa-when'
    }

    static get properties(): AAPropertiesMap {
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
    static get acceptsElements(): null {
        return null;
    }

    static get observedAttributes(): string[] {
        return Object.keys(AAWhen.properties);
    }

    root: ShadowRoot;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>'
    }

    connectedCallback(): void {
        super.connectedCallback();
    }
}

AABaseElement.registerAAElement('aa-when', AAWhen);

