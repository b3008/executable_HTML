import BaseElement from '../aa-baseElement/baseElement.js';
import '../aa-choice-item/aa-choice-item.js';

export default class AAMultipleChoice extends BaseElement {



    static get properties(){
        return {
            horizontal:{
                type:Boolean,
                value:false,
                userDefined:true
            },

            vertical:{
                type:Boolean,
                value:true,
                userDefined:true
            },
            
            name:{
                type:String,
                userDefined:true
            },

            value:{
                type:String,
                userDefined:false
            },

        }
    }

    static get acceptsElements(){
        return [
            "aa-choice-item"
        ]
    }

    static get observedAttributes() {
        return Object.keys(AAMultipleChoice.properties);
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
        
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = this.css + this.html;
        
        this.radioGroup = this.root.querySelector('#radioGroup');
        this.radioGroup.addEventListener('change', (e) => {
            this.value = e.target.name;
            console.log(this.value);
        });

    }

    connectedCallback() {
        super.connectedCallback();

        this.choiceItems = [];
        for (let i = 0; i < this.childNodes.length; i++) {
            this.attachToShadowDomAccordingToKind(this.childNodes[i]);
        }

        if (this.getAttribute('value')) {
            this.radioGroup.setAttribute('selected', this.getAttribute('value'));
        }

        this.style.display="block";
    }

    attachToShadowDomAccordingToKind(node) {
        
        if (!BaseElement.isAAElement(node)) {
            this.root.appendChild(BaseElement.copy(node));
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
            }
        }
    }

    get html() {
        return html`<paper-radio-group id='radioGroup'></paper-radio-group>`;
    }

    get css() {
        return ``;
    }

}


BaseElement.registerAAElement('aa-multiple-choice', AAMultipleChoice);