import BaseElement from "../../aa-baseElement/baseElement.js";

export default class AAJump extends BaseElement {

    static get observedAttributes() {
        return ["name", "goto"]
    }

    connectedCallback() {
        this._dispatchEndEvent({goto:this.name})
    }
}


if (!customElements.get('aa-jump')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-JUMP');
    customElements.define('aa-jump', AAJump);
}