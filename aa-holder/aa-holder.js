import BaseElement from './../aa-baseElement/baseElement.js'
export default class AAHolder extends BaseElement {


    constructor() {
        super();
        this._templateHolders = [];
    }


    get css() {
        return html`
            <style>
            
            </style>
        `
    }

    get html() {
        return html`
            <slot>
            </slot>

            <pre id="display" class="prettyprint lang-html" hidden >

            </pre>
        `
    }







    connectedCallback() {
    }

    display() {
        console.log("display on", this);
        this.$.display.hidden = false;

        console.log("outerhtml is", this.heldElement.outerHTML);
        this.$.display.innerText = this.heldElementOuterHTML;
        debugger;
    }

}


if (!customElements.get('aa-holder')) {
    window.AANodeNames = window.AANodeNames|| []; 
    window.AANodeNames.push("AA-HOLDER");
    customElements.define('aa-holder', AAHolder);
}
