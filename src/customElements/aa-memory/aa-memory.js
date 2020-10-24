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
        // this.dataset[name] = value;
        localStorage[name] = value;
    }

    getData(name){
        return localStorage[name];
    }

    getDataDump(){
        return localStorage;
    }
}

BaseElement.registerAAElement('aa-memory', AAMemory);
