import BaseElement from "../../aa-baseElement/baseElement.js";

export default class AAJump extends BaseElement {

    static get observedAttributes() {
        return ["name", "goto"]
    }

     autoDispatch=true

    connectedCallback() {
        debugger;
        this._dispatchEndEvent({goto:this.goto, autoDispatch:true})
    }
}


if (!customElements.get('aa-jump')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-JUMP');
    customElements.define('aa-jump', AAJump);
}