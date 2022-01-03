import BaseElement from '../aa-baseElement/baseElement.js';
export default class AAChoiceItem extends BaseElement {

    static get tag() { 
        return 'aa-choice-item';
    }

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
        return result;
    }
}

BaseElement.registerAAElement('aa-choice-item', AAChoiceItem);