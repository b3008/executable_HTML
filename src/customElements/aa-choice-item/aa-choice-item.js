import { createElement } from 'react';
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
export class AAChoiceItem extends AABaseElement {

    static get tag() {
        return 'aa-choice-item';
    }

    static get properties() {
        return {
            value: {
                type: String,
                userDefined: true
            },

            checked: {
                type: Boolean,
                value: false
            }
        }
    }
    static get observedAttributes() {
        return [
            'name',
            // not listing checked because the getter and setter are defined here
        ];
    }

    static get acceptsElements() {
        return ["#text"];
    }

    // you can get the same effect by accessing the object's constructor, perhaps this should be phased out
    get staticObject() {
        return AAChoiceItem;
    }




    set orientation(val) {
        this._orientation = val;

        if (val == "vertical") {
            this.itemBlock.style.flexDirection = "column";
            this.label.classList.add("label-vertical");
            this.label.classList.remove("label-horizontal");
        } else if (val == "horizontal") {
            this.itemBlock.style.flexDirection = "row";
            this.itemBlock.style.alignItems = "center";

            this.label.classList.remove("label-vertical");
            this.label.classList.add("label-horizontal");
        }
        return;
    }

    get orientation() {
        return this._orientation;
    }


    get checked() {
        if (this.item) return this.item.checked;
    }

    set checked(val) {
        debugger;
        if (this.item) this.item.checked = eval(val);
    }

    get value() {
        const v = this.getAttribute('value')
        const val = v ? v : this.innerHTML.trim();
        return val;
    }



    set value(val) {
        this.setAttribute('value', val);
    }



    constructor() {
        super();

        this.kind = "radioButton";
        this.item = null;
        this.itemBlock = document.createElement('div');
        this.label = document.createElement('div');
        this._orientation = "vertical"

        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = this.css;

    }


    getRadioButton() {
        // if (customElements.get('paper-radio-button')) {
        //     return document.createElement('paper-radio-button');
        // }
        if (customElements.get('md-radio')) {
            const mdradio = document.createElement('md-radio');
            return mdradio;
        }

        const defaultRadio = document.createElement('input');

        defaultRadio.type = "radio"
        return defaultRadio;
    }

    getCheckbox() {
        // if (customElements.get('paper-checkbox')) {
        //     return document.createElement('paper-radio-button');
        // }

        if (customElements.get('md-checkbox')) {
            return document.createElement('md-checkbox');
        }

        const defaultCheckbox = document.createElement('input');
        defaultCheckbox.type = "checkbox"
        return defaultCheckbox;
    }


    connectedCallback() {

        super.connectedCallback();

        this.slot = document.createElement('slot');
        this.label.innerHTML = `<slot></slot>`;

        if (this.parentElement.tagName === 'AA-CHECKBOXES') {
            this.kind = "checkBox"
        }

        if (this.parentElement.value === this.value) {
            this.checked = true;
        }


        if (this.kind == "radioButton") {
            if (this.item) {
                this.item.remove();
            }

            // this.item = document.createElement('paper-radio-button');
            this.item = this.getRadioButton();
            this.item.style.display = "block"
            this.item.checked = this.checked;


            this.item.addEventListener("click", () => {
                this.item.checked = true;
                this.dispatchEvent(new CustomEvent("change", { bubbles: true }))
            })

            this.label.addEventListener("click", () => {
                this.item.checked = true;
                this.dispatchEvent(new CustomEvent("change", { bubbles: true }))
            })

            this.itemBlock.appendChild(this.item);
            this.itemBlock.appendChild(this.label);
            this.root.appendChild(this.itemBlock);

            // TODO: what is this for? probably something internal to polymer?
            // this.item.shadowRoot.querySelector("#radioLabel").remove();



        } else {
            if (this.item) {
                this.item.remove();
            }
            this.item = this.getCheckbox();
            this.item.style.display = "block"
            this.item.checked = this.checked;

            this.item.addEventListener("click", () => {
                this.item.checked = !this.item.checked;
                this.checked = this.item.checked;
                this.dispatchEvent(new CustomEvent("change", { bubbles: true }))
            })
            this.label.addEventListener("click", () => {
                this.item.checked = !this.item.checked;
                this.checked = this.item.checked;
                this.dispatchEvent(new CustomEvent("change", { bubbles: true }))
            })

            this.itemBlock.appendChild(this.item);
            this.itemBlock.appendChild(this.label);
            this.root.appendChild(this.itemBlock);

        }


        this.label.classList.add("label-horizontal");


        this.itemBlock.style.display = "flex";
        this.itemBlock.style.alignItems = "center";
        this.itemBlock.style.padding = "10px";

    }



    get css() {
        return html`<style>
            :host{
                cursor:pointer;
                font-family:Roboto;
            }
            :host(:focus) {
                 outline: none;
            }

            .label-horizontal{
                
                padding-left:16px;
            }
            
            .label-vertical{
                padding-top:16px;
            }
            
            

            
        {{/*  paper-radio-button {
            user-select:none;
            display: block;
        }  */}}
        </style>`;
    }

    toJSON() {
        let result = super.toJSON();
        return result;
    }
}

AABaseElement.registerAAElement('aa-choice-item', AAChoiceItem);