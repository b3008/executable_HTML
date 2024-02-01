import BaseElement from '../../aa-baseElement/baseElement.js';

export default class AAOtherwise extends BaseElement {

    static get category(){
        return "control";
    }

    static get tag() { 
        return 'aa-otherwise';
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
}


BaseElement.registerAAElement('aa-otherwise', AAOtherwise);
