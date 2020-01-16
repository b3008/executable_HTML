import BaseElement from '../aa-baseElement/baseElement.js';

export default class AAFunctionRandom extends BaseElement {

    static get observedAttributes() {
        return ['name', 'debug', 'value', 'min', 'max'];
    }
    constructor(){
        super();
    }

    connectedCallback(){
        let session = this._getParentSession()
        this.value = this.getValue();
        session.setData(this.name, this.value);
        this._dispatchEndEvent();
    }

    getValue()
    {
        var parsedMin = parseFloat(this.min);
        var parsedMax = parseFloat(this.max);
        return this.getRandomInt(parsedMin, parsedMax);
    }

    getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + 0.5) + min;
    }


}



if (!customElements.get('aa-function-random')) {
    
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-FUNCTION-RANDOM');
    customElements.define('aa-function-random', AAFunctionRandom);
}