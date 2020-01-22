import BaseElement from "../aa-baseElement/baseElement.js";
export default class AAMultipleChoice extends BaseElement {

    static get observedAttributes() {
        return [
            'name',
            'value'
        ];
    }


    constructor(){
        super();
        this.root = this.attachShadow({ mode: 'open' });

    }

    connectedCallback(){
        debugger;
        this.root.appenc
    }
}


BaseElement.registerAAElement('aa-multiple-choice', AAMultipleChoice);