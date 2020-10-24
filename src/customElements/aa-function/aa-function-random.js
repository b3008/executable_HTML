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

        let memory = this.getMemory();
        if(memory) memory.setData(this.name, this.value);
        this._dispatchEndEvent({ autoDispatch: true });
        if (!this.debug) { this.remove(); }
    }

  
    get value() {
        var parsedMin = parseFloat(this.min);
        var parsedMax = parseFloat(this.max);
        let val = this.getRandomInt(parsedMin, parsedMax);
        let memory = this.getMemory();
        if(memory) memory.setData(BaseElement.getVariableName(this), val);
        return  val;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + 0.5) + min;
    }


}

BaseElement.registerAAElement('aa-function-random', AAFunctionRandom);

