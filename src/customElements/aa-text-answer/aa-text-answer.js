import { AABaseElement, html } from '../aa-base-element/aa-base-element.js';
export class AATextAnswer extends AABaseElement {

    static get category() {
        return "response item";
    }

    static get tag() {
        return 'aa-text-answer';
    }

    static get properties() {
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

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AATextAnswer.properties);
    }


    get value() {
        if (!this.inputItem) {
            return this.getAttribute('value');
        }
        return this.inputItem.value;
    }
    set value(val) {
        this.setAttribute('value', val);
        if (this.inputItem) {
            this.inputItem.value = val;
        }

        let memory = this.getMemory();
        if (memory) memory.setData(AABaseElement.getVariableName(this), val);

    }

    get label() {
        return this.getAttribute('label');
    }

    set label(val) {
        this.setAttribute('label', val);
        if (this.inputItem) {
            this.inputItem.label = val;
        }
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });



    }



    connectedCallback() {
        super.connectedCallback();

        this.root.innerHTML = this.css + this.html;

        let label = this.label;
        let value = this.value;
        this.inputItem = this.root.querySelector('.inputItem');
        if (label) { this.inputItem.label = label; }
        if (value) { this.inputItem.value = value; }

        this.inputItem.addEventListener('change', (e) => {

            this.value = e.target.value;
            this.dispatchEvent(new CustomEvent("change"))
        });

        this.keyUpTimeout = null;
        this.inputItem.addEventListener('keyup', (e) => {

            this.value = e.target.value;
            if (this.keyUpTimeout) {
                clearTimeout(this.keyUpTimeout);
            }
            setTimeout(() => {
                this.dispatchEvent(new CustomEvent("change"))
            }, 1500)

        });

    }

    get css() {
        return html`<style>
        :host{
            display:block;
            overflow:hidden;        
            text-align: center;
        }

        md-filled-text-field {
            width: 100%;
        }
        
        </style>`;
    }

    get html() {
        let inputElement = customElements.get('md-filled-text-field')
            ? `<md-filled-text-field type='${this.type}' class='inputItem'></md-filled-textfield>`
            : `<input type='${this.type}' class='inputItem'>`;
        return html`${inputElement}`
    }

}

AABaseElement.registerAAElement('aa-text-answer', AATextAnswer);

