import BaseElement from '../../aa-baseElement/baseElement.js';

export default class AAJump extends BaseElement {

    static get tag() { 
        return 'aa-jump';
    }

    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
            "goto":{
                type:String,
                userDefined:true
            },

        }
    }

    static get acceptsElements(){
        return []
    }

    static get observedAttributes() {
        return Object.keys(AAJump.properties);
    }

    connectedCallback() {
        this._dispatchEndEvent({ goto: this.goto, autoDispatch: true });
        this.remove();
    }
}

BaseElement.registerAAElement('aa-jump', AAJump);
