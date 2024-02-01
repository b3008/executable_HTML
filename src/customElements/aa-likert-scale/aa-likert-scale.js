import { AABaseElement } from '../aa-base-element/aa-base-element.js';
import '../aa-multiple-choice/aa-multiple-choice.js';

export default class AALikertScale extends AABaseElement {

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


    }

    connectedCallback() {
        super.connectedCallback();

        this.root.innerHTML = this.html;

        this.mChoice = this.root.querySelector("aa-multiple-choice")
        this.choiceItems = this.mChoice.choiceItems

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
        let start = `<div style="width:100px; white-space:nowrap">${this.getAttribute("start-label") || ''}</div>`
        let middle = `<div style="width:100px; white-space:nowrap">${this.getAttribute("middle-label") || ''}</div>`
        let end = `<div style="width:100px; white-space:nowrap">${this.getAttribute("end-label") || ''}</div>`
        let placeholder = `<div style="width:50px"></div>`;



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
                c += placeholder;
            }


        }

        let result = `<div style="font-family: Roboto, Noto, sans-serif; width:100%; display:flex; justify-content:space-evenly; text-align:center">${c}</div>`
        return result;

    }
    get html() {
        let items = ``;

        let startItem = parseFloat(this.startItem)

        if ((!this.items) || (this.items === "undefined")) this.items = 5;
        for (let i = 0; i < this.items; i++) {
            items += `<aa-choice-item name="${i + startItem}">${i + startItem}</aa-choice-item>`;
        }
        let result = html`<div>
                                <aa-multiple-choice horizontal="true" name="${this.name}">${items}</aa-multiple-choice>
                                ${this.getTags()}    
                            </div>
                                `

        return result;
    }


    get value() {

        if (this.mChoice) {
            return parseInt(this.mChoice.value);
        } else {
            return parseInt(this.getAttribute('value'));
        }
    }


    getValue() {
        return this.mChoice.value;
    }




}

AABaseElement.registerAAElement('aa-likert-scale', AALikertScale);

