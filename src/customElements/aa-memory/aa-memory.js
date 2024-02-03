import { AABaseElement } from '../aa-base-element/aa-base-element.js'



export class AAMemory extends AABaseElement {

    static get tag() {
        return 'aa-memory';
    }

    get observedAttributes() {
        return ["name"];
    }

    constructor() {
        super();
    }

    connectedCallback() {

    }



    setData(name, value) {
        // this.dataset[name] = value;
        localStorage.setItem(name, value);
    }

    getData(name) {
        return localStorage[name];
    }

    getDataDump() {
        return localStorage;
    }
}

AABaseElement.registerAAElement('aa-memory', AAMemory);
