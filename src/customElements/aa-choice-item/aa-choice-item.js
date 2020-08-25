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
        let result= super.toJSON();
        result[this.tagName.toLowerCase()].label = this.innerHTML.trim();
        return result;
    }
}

BaseElement.registerAAElement('aa-choice-item', AAChoiceItem);