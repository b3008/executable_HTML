import BaseElement from './../aa-baseElement/baseElement.js';


export default class AAScreen extends BaseElement {



    static get observedAttributes() {
        return [
            'submit-button-text',
            'submit-button-hidden',
            'name'
        ];
    }


    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case 'submit-button-text':
                this.submitButton.innerHTML = newValue;
                break;
            case 'submit-button-hidden':
                if((newValue!==true)||(newValue!=='true')){
                    this.root.querySelector('.submitButtonContainer').style.display='block';
                } else{
                    this.root.querySelector('.submitButtonContainer').style.display='none';
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
       
        this.root.innerHTML = this.css + this.html;
        this.submitButton = this.root.querySelector('.submitButton');

        if (this._started) { return; }
        this._started = true;

        if (this.submitButtonHidden) {
            this.root.querySelector('.submitButtonContainer').style.display = 'none';
        }

        
        this.root.querySelector('.submitButton').addEventListener('click', this.submitButtonClick.bind(this));

    }


    get css() {

        return html`<style>
                :host {
                    display: block;
                    height: fit-content;
                    padding:20px;
                    font-family:sans-serif;
                }

                .submitButtonContainer{
                    text-align:right;
                    justify-content: space-between; 
                    align-items:center;
                    padding:20px;
                }


                paper-button.darkBlue {
                    background-color: #0d47a1;
                    color: white;
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
        if (customElements.get('paper-button')) {
            return html`<paper-button class='submitButton darkBlue' raised class='indigo'>${buttonText}</paper-button>`;
        } else {
            return html`<button class='submitButton'>${buttonText}</button>`;
        }
    }

    submitButtonClick(e) {

        let userMessage = this.querySelector('#userMessage');
        if (this.hasChildrenThatDemandResponse()) {

            userMessage.innerHTML = html`
                    <div style='display:flex; align-items:center'> 
                        <div>please fill out the required fields</div> 
                            <div id='attention' style='color: red; font-size: 20px;  border: solid thin; border-radius: 50%; width: 20px;
                                                margin-left:20px; height: 20px; 
                                                text-align: center;
                                                padding: 5px;'>!</div></div>`;
            return;
        }

        let valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: this.getValue() } });
        this.dispatchEvent(valueSubmitEvent);
        this._dispatchEndEvent(this.getValue());
        if (typeof e.detail.callback != 'undefined') {
            e.detail.callback(e);
        }
        if (this.dontHide === false) {this.hide();}

    }






    hasChildrenThatDemandResponse() {

        let aaChildren = this.getAAChildren(this);
        let isMissingValues = false;
        for (let i = 0; i < aaChildren.length; i++) {
            if (aaChildren[i].mandatory) {
                if (child.getValue() === null) {
                    // console.log(child, 'demands response');
                    // TODO : add a class to the child
                    isMissingValues = true;
                }
            }
        }

        return isMissingValues;
    }

    getAAChildren() {
        let result = [];
        for (let i = 0; i < this.children.length; i++) {
            if (BaseElement.isAAElement(this.children[i])) { result.push(this.children[i]); }
        }
        return result;
    }



    getChildrenValues(){
        let result = [];
        
        for(let i=0; i<this.children.length; i++){
            let c = this.children[i];
            if(c.getValue){
                result.push(c.getValue());
            } else{
                if(c.value){
                    result.push({ [c.name]: c.value });
                }
            }
        }
        return result;
    }





    getValue() {
        let __meta = {
            attachedTimestamp: this.attachedTimestamp,
            submitTimestamp: new Date().getTime()
        };
        let result = this.getChildrenValues(this);
        return result;
    }

    getValueWithKey() {
        let result = {};
        result[this.name] = this.getValue();
        return result;
    }


    automate() {
        for (let i = 0; i < this.children.length; i++) {
            if (BaseElement.isAAElement(this.children[i])) {
                if (typeof this.children[i].automate != 'undefined') {
                    this.children[i].automate();
                }
            }
        }
        this.submitButtonClick();
    }

    hide() {
        this.style.display = 'none';
    }

    show() {
        this.style.display = 'block';
    }
}

BaseElement.registerAAElement('aa-screen', AAScreen);

