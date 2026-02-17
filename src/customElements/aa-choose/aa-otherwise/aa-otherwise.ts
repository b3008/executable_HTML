import { AABaseElement } from '../../aa-base-element/aa-base-element';

export class AAOtherwise extends AABaseElement {

    static get category(): string {
        return "control";
    }

    static get tag(): string {
        return 'aa-otherwise';
    }

    static get acceptsElements(): null {
        return null;
    }

    constructor() {
        super();
    }

    connectedCallback(): void {
        super.connectedCallback();
    }
}


AABaseElement.registerAAElement('aa-otherwise', AAOtherwise);
