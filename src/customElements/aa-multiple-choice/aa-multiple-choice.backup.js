import { AABaseElement } from '../aa-base-element/aa-base-element.js';
import '../aa-choice-item/aa-choice-item.js';

export default class AAMultipleChoice extends AABaseElement {

    static get tag() {
        return 'aa-multiple-choice';
    }

    static get properties() {
        return {
            horizontal: {
                type: Boolean,
                value: false,
                userDefined: true
            },

            vertical: {
                type: Boolean,
                value: true,
                userDefined: true
            },

            name: {
                type: String,
                userDefined: true
            },

            value: {
                type: String,
                userDefined: true,

            },

        }
    }

    static get acceptsElements() {
        return [
            'aa-choice-item'
        ]
    }

    static get observedAttributes() {
        return Object.keys(AAMultipleChoice.properties);
    }

    // if the rendered element should react to change of attribute, the followin needs to be used 
    // attributeChangedCallback(name, oldValue, newValue) {
    //     if (oldValue === newValue) {
    //         return;
    // }
    get staticObject() {
        return AAMultipleChoice;
    }

    get value() {

        if (this.radioGroup) {
            return this.radioGroup.selected;
        }
        return this.getAttribute('value');
    }

    set value(val) {

        this.setAttribute('value', val);
        this.radioGroup.selected = val;
    }

    constructor() {
        super();
        if (this.horizontal === '') {
            this.horizontal = true;
        }
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = this.css + this.html;

        this.radioGroup = this.root.querySelector('#radioGroup');
        this.radioGroup.addEventListener('change', (e) => {
            this.value = e.target.name;
            // console.log(this.value);
        });

        console.log(this.getAttribute("horizontal"))


    }

    connectedCallback() {

        super.connectedCallback();


        this.choiceItems = [];
        for (let i = 0; i < this.childNodes.length; i++) {
            this.attachToShadowDomAccordingToKind(this.childNodes[i]);
        }

        if ((this.getAttribute('value')) && (this.getAttribute('value') !== 'undefined')) {
            this.radioGroup.setAttribute('selected', this.getAttribute('value'));
        }

        this.style.display = 'block';


        // this.addEventListener("click", ()=>{
        //     if(!this.currentvalue){
        //         this.dispatchEvent(new CustomEvent("change"))
        //     }else
        //     {
        //         if(this.currentvalue!=this.value){
        //             this.dispatchEvent(new CustomEvent("change", {bubbles:true}))
        //         }
        //         this.currentvalue = this.value;
        //     }
        // })
    }

    attachToShadowDomAccordingToKind(node) {

        if (!AABaseElement.isAAElement(node)) {
            this.root.appendChild(AABaseElement.copy(node));
        } else {
            if (node.tagName === 'AA-CHOICE-ITEM') {

                let child = document.createElement('paper-radio-button');
                if (node.getAttribute('value')) {
                    child.setAttribute('name', node.getAttribute('value'));
                } else {
                    child.setAttribute('name', node.innerText.trim());
                }
                if (!((this.horizontal === '') || (this.horizontal))) {
                    child.style.display = 'block';
                }

                child.innerHTML = node.innerHTML;

                this.radioGroup.appendChild(child);
                this.choiceItems.push(child);


                // if(vertical){return}
                if (((this.horizontal === '') || (this.horizontal))) {


                    this.radioGroup.style.display = 'flex';
                    this.radioGroup.style.justifyContent = 'space-evenly';
                    this.radioGroup.classList.add("horizontal");

                    let d1 = child.shadowRoot.querySelector('#radioContainer');
                    let d2 = child.shadowRoot.querySelector('#radioLabel');
                    d2.style.textAlign = 'center';
                    d2.style.marginLeft = '0px';
                    d2.style.padding = '5px';
                    // d2.style.whiteSpace = "nowrap";
                    // d2.style.minWidth = "50px";
                    // d2.style.maxWidth = "90px";
                    let newDiv = document.createElement('div');
                    // newDiv.style.marginLeft = 'var(--paper-radio-button-label-spacing,10px)';
                    newDiv.style.display = 'flex';
                    newDiv.style.flexDirection = 'column';
                    newDiv.style.alignItems = 'center';
                    newDiv.style.textAlign = 'center';
                    child.shadowRoot.appendChild(newDiv);
                    newDiv.appendChild(d1);
                    newDiv.appendChild(d2);

                }
                // else {

                // }

            }
        }
    }

    get html() {
        return html`<paper-radio-group id='radioGroup'></paper-radio-group>`;
    }

    get css() {
        return html`<style>
            paper-radio-group{
                user-select:none;
            }

        paper-radio-button {
            padding: var(--paper-radio-group-item-padding, 10px);
            user-select:none;
            display: block;
        }
        </style>`;
    }


    toJSON() {
        let result = super.toJSON();
        if ((result.horizontal)) {
            result.horizontal = true;
        }
        return result;
    }
}


AABaseElement.registerAAElement('aa-multiple-choice', AAMultipleChoice);