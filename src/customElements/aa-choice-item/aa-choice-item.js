import BaseElement from '../aa-baseElement/baseElement.js';
export default class AAChoiceItem extends BaseElement {


    static get properties(){
        return{
            value:{
                type:String,
                userDefined:true
            }           
        }
    }
    static get observedAttributes() {
        return [
            'name',
            'value'
        ];
    }

    static get acceptsElements(){
        return null;
    }

    constructor() {
        super();

    }

    connectedCallback() {
        super.connectedCallback();

    }

    toJSON(){
        return {
            'aa-choice-item':{
                value: this.getAttribute("value"),
                label: this.innerHTML.trim()
            }
        }
    }
}

BaseElement.registerAAElement('aa-choice-item', AAChoiceItem);