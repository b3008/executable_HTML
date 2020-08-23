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

            "tag-start":{
                type:String,
                userDefined:true,
                value:''
            },
            "tag-end":{
                type:String,
                userDefined:true,
                value:''
            },
            "tag-middle":{
                type:String,
                userDefined:true,
                value:''
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


    getTags(){
        
        let c = '';
        let start = `<div style="width:100px; white-space:nowrap">${this.getAttribute("tag-start") || ''}</div>`
        let middle = `<div style="width:100px; white-space:nowrap">${this.getAttribute("tag-middle") || ''}</div>`
        let end = `<div style="width:100px; white-space:nowrap">${this.getAttribute("tag-end") || ''}</div>`
        let placeholder = `<div style="width:50px"></div>`;
        

        let items = parseInt(this.items)
        for(let i=1; i<=items; i++){
            
            console.log(Math.floor((items+1)/2));
            
            if(i==1) {
                c+=start;
            }
            else if(i==Math.floor((items+1)/2)) {

                c+=middle;
            }
            else if(i==items) {
                c+=end;
            } else{
                c+=placeholder;
            }

            
        }   

        let result = `<div style="font-family: Roboto, Noto, sans-serif; width:100%; display:flex; justify-content:space-evenly; text-align:center">${c}</div>`
            console.log(result);
            return result;

    }
    get html(){
        let items = ``;
        if((!this.items)||(this.items==="undefined")) this.items = 5;
        for(let i=0; i<this.items; i++){
            items += `<aa-choice-item name="${i+1}">${i+1}</aa-choice-item>`;
        }
        let result =  html`<div>
                                <aa-multiple-choice horizontal="true" name="${this.name}">${items}</aa-multiple-choice>
                                ${this.getTags()}    
                            </div>
                                `
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

