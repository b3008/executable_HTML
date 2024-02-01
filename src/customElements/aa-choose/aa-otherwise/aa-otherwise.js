import { AABaseElement } from '../../aa-base-element/aa-base-element.js';

export class AAOtherwise extends AABaseElement {

    static get category() {
        return "control";
    }

    static get tag() {
        return 'aa-otherwise';
    }

    static get acceptsElements() {
        return null;
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }
}


AABaseElement.registerAAElement('aa-otherwise', AAOtherwise);
