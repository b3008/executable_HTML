import BaseElement from '../../aa-baseElement/baseElement.js';

export default class AAOtherwise extends BaseElement {

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
