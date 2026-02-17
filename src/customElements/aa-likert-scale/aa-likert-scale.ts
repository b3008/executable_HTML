import { AABaseElement, html, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import '../aa-multiple-choice/aa-multiple-choice';
import { v4 } from 'uuid';
export class AALikertScale extends AABaseElement {

    static get category(): string {
        return "response item";
    }

    static get tag(): string {
        return 'aa-likert-scale';
    }

    static get properties(): AAPropertiesMap {
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
            },

            "show-radio-numbers": {
                type: Boolean,
                userDefined: true,
                value: true
            },

            "number-position": {
                type: String,
                userDefined: true,
                value: "right"
            }




        }
    }

    static get acceptsElements(): string[] {
        return [];
    }

    static get observedAttributes(): string[] {
        return Object.keys(AALikertScale.properties);
    }

    root: ShadowRoot;
    currentvalue: any;

    constructor() {

        super();

        this.root = this.attachShadow({ mode: 'open' });
        this.value = this.getAttribute('value');

    }

    connectedCallback(): void {
        super.connectedCallback();

        if (!this.items) {
            this.items = 5;
        }
        this.root.innerHTML = this.css + this.html;

        this.root.querySelectorAll('sl-radio').forEach(radio => {
            radio.addEventListener('sl-change', () => {
                this.value = (radio as any).value;
            });
            radio.addEventListener('change', () => {
                this.value = (radio as any).value;
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


    getTags(): string {

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

    get css(): string {
        return html`<style>
           
            sl-radio {
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
                position: relative;
               
                width: fit-content;
                margin:0px auto;
            }



            .label-container {
                width:100%; 
                position:relative;
               
                height: 200px;
            }

            .start-label {
                position:absolute;
                left:0px;
            }

            .middle-label {
                position:absolute;
                left:50%;
               
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
                flex-direction: ${this.numberPosition === "right" ? "row" : this.numberPosition === "bottom" ? "column" : this.numberPosition === "left" ? "row-reverse" : "column-reverse"};
                align-items:center;
                gap: 8px;
            }

            label{
                display: ${this.showRadioNumbers ? "block" : "none"};
            }
            </style>`
    }

    get html(): string {

        const transposeValue = this.startItem ? parseInt(this.startItem) : 0;
        const groupName = this.name ?? v4();


        let buttons = ``;
        for (let i = 0; i < this.items; i++) {
            const index = i + transposeValue;
            buttons += `<div class="radio-container"><sl-radio id="${groupName}-${index}" class="radio" name="${groupName}" value=${index}></sl-radio>`;
            buttons += `<label for="${groupName}-${index}">${index}</label></div>`
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


    arrangeLabels(): void {
        const labelContainer = this.root.querySelector(".label-container") as HTMLElement;
        const groupContainer = this.root.querySelector(".group-container") as HTMLElement;


        groupContainer.getBoundingClientRect().width;



        const startLabel = this.root.querySelector(".start-label") as HTMLElement;
        const middleLabel = this.root.querySelector(".middle-label") as HTMLElement;
        const endLabel = this.root.querySelector(".end-label") as HTMLElement;


        // startLabel.style.left = -startWidth + 16 + "px";

        // so that calculation can be done after the element is rendered
        setTimeout(() => {

            labelContainer.style.width = groupContainer.getBoundingClientRect().width + "px";

            // startLabel.style.left = -startWidth + 16 + "px";

            const middleWidth = middleLabel.getBoundingClientRect().width;
            const length = groupContainer.getBoundingClientRect().width;
            middleLabel.style.left = length / 2 - middleWidth / 2 + "px";

            // endLabel.style.right = -endWidth + 16 + "px";

            labelContainer.style.height = Math.max(startLabel.getBoundingClientRect().height, middleLabel.getBoundingClientRect().height, endLabel.getBoundingClientRect().height) + "px";

        }, 0);



    }









}

AABaseElement.registerAAElement('aa-likert-scale', AALikertScale);

