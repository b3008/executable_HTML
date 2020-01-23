import BaseElement from "../../aa-baseElement/baseElement.js";
export default class AAChoiceItem extends BaseElement {

    static get observedAttributes() {
        return [
            'name',
            'value'
        ];
    }

    constructor() {
        super();

    }


    
    connectedCallback() {
        super.connectedCallback();

    }

    get css() {
        return `<style>
        :host{
            display:block;
        }

        paper-textarea textarea {
           overflow:hidden;
        }
        
        </style>`;
    }

    get html() {
       
        // return html`<paper-`
    }
    get longHtml() {
       
        return html``
    }

}

BaseElement.registerAAElement('aa-choice-item', AAChoiceItem);