import BaseElement from './../../aa-baseElement/baseElement.js'

export default class AAWhen extends BaseElement {

}



if (!customElements.get('aa-when')) {


    if (typeof window.AANodeNames ==="undefined") { 
        window.AANodeNames = []; 
    }
    window.AANodeNames.push("AA-WHEN");

    customElements.define('aa-when', AAWhen);


}
