import BaseElement from '../aa-baseElement/baseElement.js';
import '../aa-multiple-choice/aa-multiple-choice.js';

export default class AALikertScale extends BaseElement {


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

            "items":{
                type:Number,
                userDefined:true,
            },
            

        }
    }

    static get acceptsElements(){
        return [];
    }

    static get observedAttributes() {
        return Object.keys(AALikertScale.properties);
    }



    constructor(){

        super();

        this.root = this.attachShadow({ mode: 'open' });


    }

    connectedCallback() {
        super.connectedCallback();

        this.root.innerHTML = this.html;

        this.mChoice = this.root.querySelector("aa-multiple-choice")
        this.choiceItems = this.mChoice.choiceItems
    }


    get html(){
        let items = ``;
        if((!this.items)||(this.items==="undefined")) this.items = 5;
        for(let i=0; i<this.items; i++){
            items += `<aa-choice-item name="${i+1}">${i+1}</aa-choice-item>`;
        }
        let result =  html`<aa-multiple-choice horizontal="true" name="${this.name}">${items}</aa-multiple-choice>`
        console.log(result);
        return result;
    }


    get value(){

        if(this.mChoice)
        {
            return parseInt(this.mChoice.value);
        } else{
            return parseInt(this.getAttribute('value'));
        }
    }


    getValue() {
       return this.mChoice.value; 
    }

 


}

BaseElement.registerAAElement('aa-likert-scale', AALikertScale);

