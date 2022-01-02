import BaseElement from '../aa-baseElement/baseElement.js';
import '../aa-choice-item/aa-choice-item.js';

export default class AACheckboxes extends BaseElement {

    static get tag() { 
        return 'aa-checkboxes';
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
                userDefined: false
            },
            



        }
    }

    static get acceptsElements() {
        return [
            'aa-choice-item'
        ]
    }

    static get observedAttributes() {
        return Object.keys(AACheckboxes.properties);
    }


    get value() {

        let result = [];
        if (this.boxes) {
            for (let i = 0; i < this.boxes.length; i++) {
                if (this.boxes[i].checked) {
                    result.push(this.boxes[i].value);
                }
                else {
                    result.push(null);
                }
            }

        }
        // console.log(result);
        return result
    }

    set value(val) {
        this.setAttribute('value', val);
        this.boxGroup.selected = val;
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();
        this.root.innerHTML = this.css + this.html;
        this.boxes = [];
        for (let i = 0; i < this.childNodes.length; i++) {
            this.attachToShadowDomAccordingToKind(this.childNodes[i]);
        }

        this.boxes = this.root.querySelectorAll('paper-checkbox')

        let val = this.getAttribute('value');
        if (this.boxes) {
            for (let i = 0; i < this.boxes.length; i++) {
                if (this.boxes[i].value == val) {
                    this.boxes[i].checked = true
                }
            }
        }


    }

    attachToShadowDomAccordingToKind(node) {


        if (!BaseElement.isAAElement(node)) {
            this.root.appendChild(BaseElement.copy(node));
        } else {
            if (node.tagName === 'AA-CHOICE-ITEM') {
                let child = document.createElement('paper-checkbox');
                if (node.getAttribute('value')) {
                    child.setAttribute('name', node.getAttribute('value'));
                    child.setAttribute('value', node.getAttribute('value'));
                } else {
                    child.setAttribute('name', node.innerText.trim());
                    child.setAttribute('value', node.innerText.trim());
                }
                if (!((this.horizontal === '') || (this.horizontal))) {
                    child.style.display = 'block';
                }
                child.innerHTML = node.innerHTML;
                this.root.appendChild(child);
                this.boxes.push(child);
            }
        }
    }

    get html() {
        return html``;
    }

    get css() {
        return html`
        <style>
            paper-checkbox{
                padding:12px;
            }
        </style>
        
        
        `;
    }

    toJSON(){
        let result = super.toJSON();
        let children = [];
        for(let i=0; i<this.children.length; i++){
            children.push(this.children[i].toJSON());
        }
        
        result[this.tagName.toLowerCase()].items = children;
        return result; 
    }

}


BaseElement.registerAAElement('aa-checkboxes', AACheckboxes);