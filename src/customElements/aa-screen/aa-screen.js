import { AABaseElement } from '../aa-base-element/aa-base-element.js';
import * as  style from '@material/web/tokens/_index.scss'

console.log("style", style)

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


    attributeChangedCallback(name, oldValue, newValue) {
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

    connectedCallback() {
        super.connectedCallback();
        if (this.diagram) {
            this.produceDiagram();
            return;
        }
        this.root.innerHTML = this.css + this.html;
        // this.submitButton = this.root.querySelector('.submitButton');
        this.submitButtonContainer = this.root.querySelector('.submitButtonContainer');
        if (this._started) { return; }
        this._started = true;

        if (this.submitButtonHidden) {
            if (this.submitButtonContainer) {
                this.submitButtonContainer.style.display = 'none';
            }
        }


        this.root.querySelector('.submitButton').addEventListener('click', this.submitButtonClick.bind(this));


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
        let buttonText = this.submitButtonText || 'submit';
        // if (customElements.get('paper-button')) {
        //     return html`<paper-button class='submitButton darkBlue' raised class='indigo'>${buttonText}</paper-button>`;
        // }
        if (customElements.get('md-filled-button')) {
            return html`<md-filled-button class='submitButton'>${buttonText}</md-filled-button>`;
        }
        return html`<button class='submitButton'>${buttonText}</button>`;

    }

    submitButtonClick(e) {

        console.log("yo!!!");
        let userMessage = this.querySelector('#userMessage');
        if (this.hasChildrenThatDemandResponse()) {

            userMessage.innerHTML = html`
                    <div style='display:flex; align-items:center'>
                        <div>please fill out the required fields</div>
                        <div id='attention'
                            style='color: red; font-size: 20px;  border: solid thin; border-radius: 50%; width: 20px;
                                                                                                                                                    margin-left:20px; height: 20px; 
                                                                                                                                                    text-align: center;
                                                                                                                                                    padding: 5px;'>
                            !</div>
                    </div>`;
            return;
        }

        this.collectValues().then(val => {
            console.log("valueSubmit!, value", val);
            try {
                let valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: val } });
                this.dispatchEvent(valueSubmitEvent);
                this._dispatchEndEvent(val);
                if (typeof e.detail.callback != 'undefined') {
                    e.detail.callback(e);
                }
                if (this.autohide) {
                    this.hide();
                }
            } catch (e) {
                console.error(e);

            }
        })

    }



    collectValues() {

        return new Promise((resolve, reject) => {
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


    // get value() {
    //     let __meta = {
    //         attachedTimestamp: this._attachedTimestamp,
    //         submitTimestamp: new Date().getTime()
    //     };
    //     let result = this.getChildrenValues(this);
    //     result['__meta'] = __meta;
    //     return result;
    // }

    hasChildrenThatDemandResponse() {

        let aaChildren = this.getAAChildren(this);
        let isMissingValues = false;
        for (let i = 0; i < aaChildren.length; i++) {
            if (aaChildren[i].mandatory) {
                if (child.value === null) {
                    // console.log(child, 'demands response');
                    // TODO : add a class to the child
                    isMissingValues = true;
                }
            }
        }

        return isMissingValues;
    }



    getAAChildren(node, result, nodeName) {

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



    async getChildrenValues(node, result) {
        // return new Promise((resolve, reject)=>{


        node = node || this;
        result = result || {};

        for (let i = 0; i < node.children.length; i++) {

            let c = node.children[i];
            console.log(c)

            if (c.nodeName != 'AA-LABEL') {

                let name = AABaseElement.getVariableName(c);
                console.log(c.tagName, "has name", name);
                console.log(c, name);
                if (c.getValue) {
                    result[name] = c.getValue();
                    console.log(result);
                    debuggerl
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
        // })
    }

    // getChildrenValues(node, result) {
    //     node = node || this;
    //     result = result || {};
    //     for (let i = 0; i < node.children.length; i++) {
    //         let c = node.children[i];

    //         if (c.nodeName != 'AA-LABEL') {

    //             let name = AABaseElement.getVariableName(c);
    //             console.log(c, name);
    //             if (c.getValue) {
    //                 result[name] = c.getValue();
    //             } else if (c.value) {
    //                 if(c.value.then){
    //                     c.value.then((val)=>{
    //                         result[name] = c.value;    
    //                     })
    //                 }else{
    //                     result[name] = c.value;
    //                 }

    //             } else {
    //                 result[name] = null;
    //             }
    //         }
    //         else {
    //             this.getChildrenValues(c, result);
    //         }
    //     }
    //     return result;
    // }





    get value() {

        return this.collectValues();
        // new Promise(resolve,reject)=>{

        // }
    }

    valueWithKey() {
        return new Promise((resolve, reject) => {
            this.value.then((val) => {
                let result = {};
                result[this.name] = val;
                resolve(result);
            })
        })

    }


    automate() {
        for (let i = 0; i < this.children.length; i++) {
            if (AABaseElement.isAAElement(this.children[i])) {
                if (typeof this.children[i].automate != 'undefined') {
                    this.children[i].automate();
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

