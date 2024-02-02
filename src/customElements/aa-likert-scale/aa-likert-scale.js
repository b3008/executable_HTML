import { AABaseElement } from '../aa-base-element/aa-base-element.js';
import '../aa-multiple-choice/aa-multiple-choice.js';
import { v4 } from 'uuid';
export class AALikertScale extends AABaseElement {

    static get category() {
        return "response item";
    }

    static get tag() {
        return 'aa-likert-scale';
    }

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },

            "debug": {
                type: Boolean,
                value: false,
                userDefined: false
            },

            "value": {
                type: Number,
                userDefined: false,
            },

            "items": {
                type: String,
                userDefined: true,
            },

            "start-label": {
                type: String,
                userDefined: true,
                value: ''
            },

            "middle-label": {
                type: String,
                userDefined: true,
                value: ''
            },

            "end-label": {
                type: String,
                userDefined: true,
                value: ''
            },

            "start-item": {
                type: Number,
                userDefined: true,
                value: 1
            }



        }
    }

    static get acceptsElements() {
        return [];
    }

    static get observedAttributes() {
        return Object.keys(AALikertScale.properties);
    }



    constructor() {

        super();

        this.root = this.attachShadow({ mode: 'open' });
        this.value = this.getAttribute('value');

    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.items) {
            this.items = 5;
        }
        this.root.innerHTML = this.css + this.html;

        const radios = this.root.querySelectorAll('md-radio').forEach(radio => {
            radio.addEventListener('change', (e) => {

                this.value = radio.value;
            });
        });

        this.arrangeLabels();
        this.addEventListener("click", () => {
            if (!this.currentvalue) {
                this.dispatchEvent(new CustomEvent("change"))
            } else {
                if (this.currentvalue != this.value) {
                    this.dispatchEvent(new CustomEvent("change"))
                }
                this.currentvalue = this.value;
            }
        })
    }


    getTags() {

        let c = '';
        let start = `<div class='start-label'>${this.getAttribute("start-label") || ''}</div>`
        let middle = `<div class='middle-label'>${this.getAttribute("middle-label") || ''}</div>`
        let end = `<div class='end-label'>${this.getAttribute("end-label") || ''}</div>`





        let items = parseInt(this.items)

        for (let i = 1; i <= items; i++) {



            if (i == 1) {
                c += start;
            }
            else if (i == Math.floor((items + 1) / 2)) {

                c += middle;
            }
            else if (i == items) {
                c += end;
            } else {
                // c += placeholder;
            }


        }

        let result = `<div class="label-container">${c}</div>`

        return result;

    }

    get css() {
        return html`<style>
           
            md-radio {
                display:block;
                {{/*  width:48px;  */}}

            }   
            label {
               
                display:block;
            }

            .container {
                display:flex;
                flex-direction:column;
                align-items:center;
            }

            .label-container {
                width:0px;
                position:relative;
            }
            .start-label {
                position:absolute;
                left:0px;
            }

            .middle-label {
                position:absolute;

            }

            .end-label {
                position:absolute;
                right:0px;
            }

            .tag-container{
                
            }
            .group-container{
                display:flex;
                flex-direction:row;
                align-items:center;
                
                gap:32px;
            }
            .radio-container {
                display:flex;
                flex-direction:row;
                align-items:center;
                gap: 8px;
            }
            </style>`
    }

    get html() {

        const groupName = this.name ?? v4();

        let buttons = ``;
        for (let i = 0; i < this.items; i++) {
            buttons += `<div class="radio-container"><md-radio id="${groupName}-${i}" class="radio" name="${groupName}" value=${i}></md-radio>`;
            buttons += `<label for="${groupName}-${i}">${i}</label></div>`
        }
        return `
        
        <div class="container">
            <div class="group-container">
            ${buttons}
            </div>
            ${this.getTags()}
        </div>
        `;
    }


    arrangeLabels() {
        const labelContainer = this.root.querySelector(".label-container");
        const groupContainer = this.root.querySelector(".group-container");

        labelContainer.style.width = groupContainer.getBoundingClientRect().width + "px";
        const length = groupContainer.getBoundingClientRect().width;



        const startLabel = this.root.querySelector(".start-label");
        const middleLabel = this.root.querySelector(".middle-label");
        const endLabel = this.root.querySelector(".end-label");

        const startWidth = startLabel.getBoundingClientRect().width;
        startLabel.style.left = -startWidth + 16 + "px";

        const middleWidth = middleLabel.getBoundingClientRect().width;
        middleLabel.style.left = length / 2 - middleWidth / 2 + "px";


        const endWidth = endLabel.getBoundingClientRect().width;
        endLabel.style.right = -endWidth + 16 + "px";

        labelContainer.style.height = Math.max(startLabel.getBoundingClientRect().height, middleLabel.getBoundingClientRect().height, endLabel.getBoundingClientRect().height) + "px";
    }









}

AABaseElement.registerAAElement('aa-likert-scale', AALikertScale);

