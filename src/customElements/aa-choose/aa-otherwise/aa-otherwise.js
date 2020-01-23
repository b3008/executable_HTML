import BaseElement from '../../aa-baseElement/baseElement.js';

export default class AAOtherwise extends BaseElement {

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }
}


BaseElement.registerAAElement('aa-otherwise', AAOtherwise);
