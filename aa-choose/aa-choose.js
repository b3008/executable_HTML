import BaseElement from './../aa-baseElement/baseElement.js'
import AAWhen from './aa-when/aa-when.js';

export default class AAChoose extends BaseElement {

    static get observedAttributes(){
        
        return ['name', 'should-run', 'debug'];
        
    }

    constructor(){
        super();
        console.log("creating aa-choose");
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){

        console.log("aa-choose attached");
        this._shouldRun = (this.shouldRun===null) || (this.shouldRun===true);
        if(this._shouldRun){
            this.run();
        }
    }

    run(){
        this._sessionElement = this;
        while ((this._sessionElement != null) && (this._sessionElement.nodeName != "AA-SESSION")) {
            this._sessionElement = this._sessionElement.parentNode;
        }
        if (this.sessionElement) if (this.sessionElement.mem) this.mem = this.sessionElement.mem;

    }
}



if (!customElements.get('aa-choose')) {


    if (typeof window.AANodeNames ==="undefined") { 
        window.AANodeNames = []; 
    }
    window.AANodeNames.push("AA-CHOOSE");

    customElements.define('aa-choose', AAChoose);


}
