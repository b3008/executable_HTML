import BaseElement from './../aa-baseElement/baseElement.js'


export default class AAScreen extends BaseElement {



    static get observedAttributes() { 
        return [
            'submit-button-text',
            'submit-button-hidden',
            'name'
        ];
    }

    constructor() {        
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();
        this.submitButtonText = this._submitButtonText || 'submit';
        this.root.innerHTML = this.css + this.html;

        if (this._started) { return; }
        this._started = true;

        if (this.submitButtonHidden) {
            this.root.querySelector('.submitButtonContainer').style.display = 'none';
        }


        if (typeof this.innerFragment != 'undefined') {
            this._analyzeChildNodesForElement(this.innerFragment);
            this.appendChild(this.innerFragment);
            this._restoreHeldNodes(this);
        }

        this.root.querySelector('.submitButton').addEventListener('click', this.submitButtonClick.bind(this));

    }


    get css() {

        return html`
            <style>
                :host {
                    display: block;
                    height: fit-content;
                    border: solid thin;
                }

                .submitButtonContainer{
                    display:flex; 
                    justify-content: space-between; 
                    align-items:center;
                }
            
            </style>
        `;
    }

    get html() {

        return html`
            <slot></slot>
            hey
            <div class='submitButtonContainer'>
                <div>
                    <button class='submitButton'> button: ${this.submitButtonText}</button>
                </div>
                <div id='userMessage'></div>
            </div>
        
        `
    }




    attributeChangedCallback() {

    }




    hasChildrenThatDemandResponse() {

        let emaChildren = this.getEmaChildren(this);
        let result = false;
        for (let i = 0; i < emaChildren.length; i++) {
            let child = emaChildren[i];
            if (child.demandsResponse) {
                if (child.getValue() == null) {
                    // console.log(child, 'demands response');

                    if (child.displayAttention) {
                        child.displayAttention();
                    }

                    result = true;
                }
            }
        }
        if (result) {
            this.userMessage.innerHTML = `<div style="display:flex; align-items:center"> <div>please fill out the required fields</div> <div id="attention" style="color: red; font-size: 20px;  border: solid thin; border-radius: 50%; width: 20px;
                                            margin-left:20px; height: 20px; 
                                            text-align: center;
                                            padding: 5px;">!</div></div>`
            this.userMessage.style.color = 'red';
        }
        return result;
    }


    submitButtonClick(e) {




        this.$.userMessage.innerHTML = '';

        if (this.hasChildrenThatDemandResponse()) {
            return;
        }

        //dispatch assignableEnd event
        let valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: this.getValue() } });
        this.dispatchEvent(valueSubmitEvent);

        let assignableEndEvent = new CustomEvent('assignableEnd', { bubbles: true, detail: { value: this.getValue() } });
        this.dispatchEvent(assignableEndEvent);

        if (typeof e.detail.callback != 'undefined') {
            e.detail.callback(e);
        }


        //hide the screen

        if (this.dontHide == false) this.hide();

    }


    getChildrenValuesOrder(element) {
        if (typeof element === 'undefined') element = this;
        var emaChildren = this.getEmaChildren(element);
        var result = [];
        for (var i = 0; i < emaChildren.length; i++) {
            var child = emaChildren[i]
            if (typeof this.name != 'undefined') {
                result.push(this.name + '$' + child.getName());
            }
            else {
                result.push(child.getName());
            }
        }
    }



    getValue() {
        var __meta = {
            attachedTimestamp: this.attachedTimestamp,
            submitTimestamp: new Date().getTime()
        }
        var result = this.getChildrenValues(this);
        return result;
    }

    getValueWithKey() {
        var result = {}
        result[this.name] = this.getValue();
        return result;
    }


    automate() {
        for (var i = 0; i < this.children.length; i++) {
            if (this.isEmaElement(this.children[i])) {
                if (typeof this.children[i].automate != 'undefined') {
                    this.children[i].automate();
                }
            }
        }
        this.submitButtonClick();
    }


    hide() {
        this.style.display = 'none'

    }

    show() {
        this.style.display = 'block'
        //this.removeAttribute('hidden');
    }


}


if (!customElements.get('aa-screen')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-SCREEN');
    customElements.define('aa-screen', AAScreen);
}