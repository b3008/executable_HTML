import { AABaseElement, html, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export class AAChoiceItem extends AABaseElement {

    static get tag(): string {
        return 'aa-choice-item';
    }

    static get properties(): AAPropertiesMap {
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
    static get observedAttributes(): string[] {
        return [
            'name',
            // not listing checked because the getter and setter are defined here
        ];
    }

    static get acceptsElements(): string[] {
        return ["#text"];
    }

    // you can get the same effect by accessing the object's constructor, perhaps this should be phased out
    get staticObject() {
        return AAChoiceItem;
    }




    set orientation(val: string) {
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

    get orientation(): string {
        return this._orientation;
    }


    get checked(): boolean | undefined {
        if (this.item) return this.item.checked;
    }

    set checked(val: any) {
        if (this.item) this.item.checked = val === 'false' ? false : val === 'true' ? true : val;
    }

    get value(): string {
        const v = this.getAttribute('value')
        const val = v ? v : this.innerHTML.trim();
        return val;
    }


    set value(val: string) {
        this.setAttribute('value', val);
    }

    kind: string;
    item: any;
    itemBlock: HTMLDivElement;
    label: HTMLDivElement;
    _orientation: string;
    root: ShadowRoot;

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


    getRadioButton(): HTMLElement {

        if (customElements.get('sl-radio')) {
            const slradio = document.createElement('sl-radio');
            return slradio;
        }

        const defaultRadio = document.createElement('input');

        defaultRadio.type = "radio"
        return defaultRadio;
    }

    getCheckbox(): HTMLElement {

        if (customElements.get('sl-checkbox')) {
            return document.createElement('sl-checkbox');
        }

        const defaultCheckbox = document.createElement('input');
        defaultCheckbox.type = "checkbox"
        return defaultCheckbox;
    }


    connectedCallback(): void {

        super.connectedCallback();

        this.slot = document.createElement('slot') as any;
        this.label.innerHTML = `<slot></slot>`;

        if (this.parentElement!.tagName === 'AA-CHECKBOXES') {
            this.kind = "checkBox"
        }

        if ((this.parentElement as any).value === this.value) {
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
                this.item.checked = !this.item.checked;
                this.dispatchEvent(new CustomEvent("change", { bubbles: true }))
            })

            this.label.addEventListener("click", () => {
                this.item.checked = true;
                this.dispatchEvent(new CustomEvent("change", { bubbles: true }))
            })

            this.itemBlock.appendChild(this.item);
            this.itemBlock.appendChild(this.label);
            this.root.appendChild(this.itemBlock);






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



    get css(): string {
        return html`<style>
            :host{
                cursor:pointer;
                font-family:"Roboto Flex", Roboto, Noto, sans-serif;
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
            
            

            
        sl-radio {
            user-select:none;
            display: block;
        } 
        </style>`;
    }

    toJSON(): any {
        let result = super.toJSON();
        return result;
    }
}

AABaseElement.registerAAElement('aa-choice-item', AAChoiceItem);