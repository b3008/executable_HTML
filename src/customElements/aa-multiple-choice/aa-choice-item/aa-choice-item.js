import BaseElement from '../../aa-baseElement/baseElement.js';
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
}

BaseElement.registerAAElement('aa-choice-item', AAChoiceItem);