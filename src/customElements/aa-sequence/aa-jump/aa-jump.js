import BaseElement from "../../aa-baseElement/baseElement.js";

export default class AAJump extends BaseElement {

    static get observedAttributes() {
        return ["name", "goto"]
    }

    connectedCallback() {
        this._dispatchEndEvent({ goto: this.goto, autoDispatch: true })
    }
}

BaseElement.registerAAElement('aa-jump', AAJump);
