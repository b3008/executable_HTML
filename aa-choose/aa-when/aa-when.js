import BaseElement from './../../aa-baseElement/baseElement.js'

export default class AAWhen extends BaseElement {

}



if (!customElements.get('aa-when')) {
    window.AANodeNames = window.AANodeNames|| []; 
    window.AANodeNames.push("AA-WHEN");
    customElements.define('aa-when', AAWhen);
}
