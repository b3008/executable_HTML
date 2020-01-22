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

BaseElement.registerAAElement('aa-memory', AAMemory);
