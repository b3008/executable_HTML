import { isArray } from 'lodash';
import { AABaseElement, html } from '../aa-base-element/aa-base-element';



export type AAScreenValue = {
    [key: string]: any
    __meta: {
        attachedTimestamp: number,
        submitTimestamp: number
    }
}

export type AAScreenValueSubmitEventDetail = {
    value: AAScreenValue
}


export class AAScreen extends AABaseElement {


    static get category() {
        return "UI";
    };

    static get tag() {
        return 'aa-screen';
    }

    static get properties() {
        return {

            ...AABaseElement.properties,


            "submit-button-text": {
                type: String,
                value: "submit",
                userDefined: true
            },

            "submit-button-hidden": {
                type: Boolean,
                value: false,
                userDefined: true
            },

            'expect-wait': {
                type: Boolean,
                userDefined: false,
                value: true
            },

            'autohide': {
                type: Boolean,
                userDefined: false,
                value: true
            }



        }
    }

    static get acceptsElements() {
        return [];
    }
    static get observedAttributes() {
        return Object.keys(AAScreen.properties);
    }


    attributeChangedCallback(name: string, _oldValue: any, newValue: any) {
        switch (name) {
            case 'submit-button-text':
                if (this.submitButton) { this.submitButton.innerHTML = newValue; }
                break;
            case 'submit-button-hidden':
                if (this.submitButtonContainer) {
                    if ((newValue !== true) || (newValue !== 'true')) {
                        this.submitButtonContainer.style.display = 'block';
                    } else {
                        this.submitButtonContainer.style.display = 'none';
                    }
                }
                break;
        }
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });


    }

    submitButton: HTMLElement | null = null;
    submitButtonContainer: HTMLElement | null = null;
    declare submitButtonText: string;
    declare submitButtonHidden: boolean;

    root: ShadowRoot;
    declare diagram: boolean;
    _started = false;
    _attachedTimestamp = new Date().getTime();

    connectedCallback() {

        super.connectedCallback();
        if (this.diagram) {
            this.produceDiagram();
            return;
        }
        this.root.innerHTML = this.css + this.html;

        this.submitButtonContainer = this.root.querySelector('.submitButtonContainer');
        if (this._started) { return; }
        this._started = true;

        if (this.submitButtonHidden) {
            if (this.submitButtonContainer) {
                this.submitButtonContainer.style.display = 'none';
            }
        }


        this.submitButton = this.root.querySelector('.submitButton');

        this.submitButton?.addEventListener('click', (e) => {
            this.submitButtonClick(e)
        });


    }


    get css() {

        return html`<style>
                :host {
                    display: block;
                    height: fit-content;
                    padding:20px;
                    font-family: "Roboto Flex",  sans-serif;
                }

                .submitButtonContainer{
                    text-align:center;
                    justify-content: space-between; 
                    align-items:center;
                    padding:20px;
                    font-family: "Roboto Flex",  sans-serif;
                }


              

                .submitButton{
                    
                    font-family: "Roboto Flex",  sans-serif;
                }

                 .missing-value{
                    border:red;
                }
  
         </style>`;
    }

    get html() {
        return html`
            <slot></slot>
            <div id='userMessage'>
                <div class='submitButtonContainer'>
                    <div>
                        ${this.getSubmitButton()}
                    </div>
                    <div id='userMessage'></div>
                </div>`;
    }

    getSubmitButton() {


        let buttonText = this.submitButtonText || this.getAttribute('submit-button-text') || 'submit';

        if (customElements.get('sl-button')) {
            return html`<sl-button variant="primary" class='submitButton'>${buttonText}</sl-button>`;
        }
        return html`<button class='submitButton'>${buttonText}</button>`;

    }


    async submitButtonClick(e?: CustomEvent | MouseEvent) {




        const childrenThatRequireResponse = await this.hasChildrenThatRequireResponse();
        if (childrenThatRequireResponse.length > 0) {
            return;
        }

        this.collectValues().then((val: AAScreenValue) => {

            try {
                const detail: AAScreenValueSubmitEventDetail = { value: val };
                let valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail });

                this.dispatchEvent(valueSubmitEvent);
                this._dispatchEndEvent(val);
                if (typeof e?.detail.callback != 'undefined') {
                    e?.detail.callback(e);
                }
                if (this.getAttribute('autohide') === 'true') {
                    this.hide();
                }
            } catch (error) {
                console.error(error);

            }
        })

    }



    collectValues(): Promise<AAScreenValue> {

        return new Promise((resolve, _reject) => {
            let __meta = {
                attachedTimestamp: this._attachedTimestamp,
                submitTimestamp: new Date().getTime()
            };
            this.getChildrenValues(this).then(result => {
                result['__meta'] = __meta;
                resolve(result);
            })

        })
    }

    doesArrayConsistOfNullsOrUndefined(arr) {
        return arr.every((v) => {
            return v === null || v === undefined;
        });
    }

    async getNodeValue(n) {

        if (n.getValue) {
            return n.getValue();
        } else if (n.value) {
            if (n.value.then) {
                return await n.value;
            } else {
                if (isArray(n.value)) {
                    if (this.doesArrayConsistOfNullsOrUndefined(n.value)) {
                        return null;
                    } else {
                        return n.value;
                    }
                }
                return n.value;
            }
        } else {
            return null;
        }
    }

    async hasChildrenThatRequireResponse() {
        const requiredChildren = this.querySelectorAll('[required]');
        const result: Element[] = [];
        for (const child of Array.from(requiredChildren)) {

            const value = await this.getNodeValue(child);
            if (['', null, undefined].includes(value)) {
                child.classList.add("missing-value");
                result.push(child);
            } else {
                child.classList.remove("missing-value");
            }
        };
        return result;
    }



    getAAChildren(node, result?, nodeName?) {

        result = result || [];
        node = node || this;
        for (let i = 0; i < node.children.length; i++) {
            if (AABaseElement.isAAElement(node.children[i])) {
                if (nodeName) {
                    if (node.children[i].nodeName === nodeName) {
                        result.push(node.children[i]);
                    }
                }
                else {
                    result.push(node.children[i]);
                }
            }
            else {

                this.getAAChildren(node.children[i], result, nodeName)
            }
        }
        return result;
    }



    async getChildrenValues(node, result?) {

        node = node || this;
        result = result || {};

        for (let i = 0; i < node.children.length; i++) {

            let c = node.children[i];


            if (c.nodeName != 'AA-LABEL') {

                let name = AABaseElement.getVariableName(c);


                if (c.getValue) {
                    result[name] = c.getValue();


                } else if (c.value) {
                    if (c.value.then) {
                        result[name] = await c.value;
                    } else {
                        result[name] = c.value;
                    }

                } else {
                    // result[name] = null;
                    await this.getChildrenValues(c, result);
                }
            }
            else {
                await this.getChildrenValues(c, result);
            }
        }

        return result;

    }

    get value() {
        return this.collectValues();
    }

    valueWithKey() {
        return new Promise((resolve, _reject) => {
            this.value.then((val) => {
                let result = {};
                result[this.getAttribute("name") as string] = val;
                resolve(result);
            })
        })

    }


    automate() {
        for (let i = 0; i < this.children.length; i++) {
            if (AABaseElement.isAAElement(this.children[i])) {
                if (typeof (this.children[i] as any).automate != 'undefined') {
                    (this.children[i] as any).automate();
                }
            }
        }
        this.submitButtonClick();
    }

    hide() {

        let aaChildren = this.getAAChildren(this, []);
        for (let i = 0; i < aaChildren.length; i++) {
            if (aaChildren[i].stop) {
                aaChildren[i].stop();
            }
        }
        this.style.display = 'none';
    }

    show() {
        this.style.display = 'block';
    }





}

AABaseElement.registerAAElement('aa-screen', AAScreen);

