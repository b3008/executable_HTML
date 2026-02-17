import { AABaseElement, type AAPropertiesMap } from '../../aa-base-element/aa-base-element';

export class AAJump extends AABaseElement {

    static get category(): string {
        return "control";
    }

    static get tag(): string {
        return 'aa-jump';
    }

    static get properties(): AAPropertiesMap {
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

    static get acceptsElements(): string[] {
        return []
    }

    static get observedAttributes(): string[] {
        return Object.keys(AAJump.properties);
    }

    connectedCallback(): void {
        this._dispatchEndEvent({ goto: this.goto, autoDispatch: true });
        this.remove();
    }
}

AABaseElement.registerAAElement('aa-jump', AAJump);
