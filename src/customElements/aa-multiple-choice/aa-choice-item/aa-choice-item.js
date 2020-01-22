import BaseElement from "../aa-baseElement/baseElement.js";
export default class AAChoiceItem extends BaseElement {

    static get observedAttributes() {
        return [
            'name',
            'value'
        ];
    }



    get value() {
        if (!this.inputItem) {
            return this.getAttribute("value");
        }
        return this.inputItem.value;
    }
    
    set value(val) {
        if (!this.inputItem) {
            this.setAttribute("value", val)
        }
        this.inputItem.value = val;
    }


    get label() {
        return this.getAttribute("label");
    }

    set label(val) {

        if (!this.inputItem) {
            this.setAttribute("label", val)
        }
        this.inputItem.label = val;
    }

    

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        let html = (this.long || (this.long == "")) ? this.longHtml : this.html;

        this.root.innerHTML = this.css + `<div class="inputContainer">${html}<div>`;
        this.content = this.innerHTML;

        let label = this.label;
        let value = this.value;
        this.inputItem = this.root.querySelector('.inputItem');
        if (label) this.inputItem.label = label;
        if (value) this.inputItem.value = value;
        this.fixBugInPaperTextarea(this.inputItem);

        this.inputItem.addEventListener("change", (e) => {
            this.value = e.target.value;
        })
    }


    
    connectedCallback() {
        super.connectedCallback();
        debugger;
    }

    get css() {
        return `<style>
        :host{
            display:block;
        }

        paper-textarea textarea {
           overflow:hidden;
        }
        
        </style>`;
    }

    get html() {
       
        // return html`<paper-`
    }
    get longHtml() {
       
        return html``
    }

}

BaseElement.registerAAElement('aa-choice-item', AAChoiceItem);