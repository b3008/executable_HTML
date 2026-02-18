import { AABaseElement, html, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export class AATextAnswer extends AABaseElement {

    static get category(): string {
        return "response item";
    }

    static get tag(): string {
        return 'aa-text-answer';
    }

    static get properties(): AAPropertiesMap {
        return {
            name: {
                type: String,
                userDefined: true
            },

            label: {
                type: String,
                userDefined: true
            },
            'value': {
                type: String,
                userDefined: false
            },
            'type': {
                type: String,
                userDefined: true,
                value: "text",
                valuesAllowed: ["date", "datetime", "datetime-local", "email", "number", "password", "tel", "text", "time", "textarea"]
            }

        }
    }

    static get acceptsElements(): null {
        return null
    }

    static get observedAttributes(): string[] {
        return Object.keys(AATextAnswer.properties);
    }

    inputItem: any;
    root: ShadowRoot;
    keyUpTimeout: ReturnType<typeof setTimeout> | null = null;

    get value(): any {
        if (!this.inputItem) {
            return this.getAttribute('value');
        }
        return this.inputItem.value;
    }
    set value(val: any) {
        this.setAttribute('value', val);
        if (this.inputItem) {
            this.inputItem.value = val;
        }

        let memory = this.getMemory();
        if (memory) memory.setData(AABaseElement.getVariableName(this), val);

    }

    get label(): string | null {
        return this.getAttribute('label');
    }

    set label(val: any) {
        this.setAttribute('label', val);
        if (this.inputItem) {
            this.inputItem.label = val;
        }
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });



    }



    connectedCallback(): void {
        super.connectedCallback();

        this.root.innerHTML = this.css + this.html;

        let label = this.label;
        let value = this.value;
        this.inputItem = this.root.querySelector('.inputItem');
        if (label) { this.inputItem.label = label; }
        if (value) { this.inputItem.value = value; }

        this.inputItem.addEventListener('sl-change', (e: Event) => {
            this.value = (e.target as any).value;
            this.dispatchEvent(new CustomEvent("change"))
        });
        this.inputItem.addEventListener('change', (e: Event) => {
            this.value = (e.target as any).value;
            this.dispatchEvent(new CustomEvent("change"))
        });

        this.keyUpTimeout = null;
        this.inputItem.addEventListener('sl-input', (e: Event) => {
            this.value = (e.target as any).value;
            if (this.keyUpTimeout) {
                clearTimeout(this.keyUpTimeout);
            }
            this.keyUpTimeout = setTimeout(() => {
                this.dispatchEvent(new CustomEvent("change"))
            }, 1500)
        });
        this.inputItem.addEventListener('keyup', (e: Event) => {
            this.value = (e.target as any).value;
            if (this.keyUpTimeout) {
                clearTimeout(this.keyUpTimeout);
            }
            this.keyUpTimeout = setTimeout(() => {
                this.dispatchEvent(new CustomEvent("change"))
            }, 1500)
        });

    }

    get css(): string {
        return html`<style>
        :host{
            display:block;
            overflow:hidden;        
            text-align: center;
        }

        sl-input {
            width: 100%;
        }
        
        </style>`;
    }

    get html(): string {
        let inputElement = customElements.get('sl-input')
            ? `<sl-input type='${this.type}' class='inputItem'></sl-input>`
            : `<input type='${this.type}' class='inputItem'>`;
        return html`${inputElement}`
    }

}

AABaseElement.registerAAElement('aa-text-answer', AATextAnswer);

