import BaseElement from './../aa-baseElement/baseElement.js'



export default class AAMemory extends BaseElement {

    get observedAttributes(){
        return ["name"];
    }

    constructor(){
        super();
    }

    connectedCallback(){
        
    }

    setData(name,value){
        this.dataset[name] = value;
    }

    getData(name){
        return this.dataset[this.toHyphenated(name)];
    }
}


if (!customElements.get('aa-memory')) {

    if (typeof window.AANodeNames ==="undefined") { 
        window.AANodeNames = []; 
    }
    window.AANodeNames.push("AA-MEMORY");
    customElements.define('aa-memory', AAMemory);
}