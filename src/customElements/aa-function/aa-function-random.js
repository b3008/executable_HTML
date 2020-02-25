import BaseElement from '../aa-baseElement/baseElement.js';

export default class AAFunctionRandom extends BaseElement {


    static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
           
            "debug":{
                type:Boolean,
                value:false,
                userDefined:false
            },

            "value":{
                type:Number,
                userDefined:false,
            },

            "min":{
                type:Number,
                userDefined:true,
            },
            
            "max":{
                type:Number,
                userDefined:true,
            },
            

        }
    }

    static get acceptsElements(){
        return null
    }

    static get observedAttributes() {
        return Object.keys(AAFunctionRandom.properties);
    }



    constructor(){

        super();
    }

    connectedCallback() {
        let session = this._getParentSession();
        this.value = this.getValue();
        session.setData(this.name, this.value);
        this._dispatchEndEvent({ autoDispatch: true });
        if (!this.debug) { this.remove(); }
    }

    getValue() {
        var parsedMin = parseFloat(this.min);
        var parsedMax = parseFloat(this.max);
        return this.getRandomInt(parsedMin, parsedMax);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + 0.5) + min;
    }


}

BaseElement.registerAAElement('aa-function-random', AAFunctionRandom);

