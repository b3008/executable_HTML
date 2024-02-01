import BaseElement from '../aa-baseElement/baseElement.js';
import '../aa-choice-item/aa-choice-item.js';

export default class AACheckboxes extends BaseElement {

    static get category(){
        return "response item";
    }

   


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
        return ['horizontal', 'vertical'];
    }


    get value() {
        const result = [];
        for (let i = 0; i < this.children.length; i++) {
            const node = this.children[i];
            if (node.tagName === 'AA-CHOICE-ITEM') {
                if (node.checked) {
                    result.push(node.value);
                }else
                {
                    result.push(null);
                }
            }
        }
        return result;
    }

    set value(val) {
        if(!Array.isArray(val)){
            val= [va];
        }


        for (let i = 0; i < this.children.length; i++) {
            const node = this.children[i];
            if (node.tagName === 'AA-CHOICE-ITEM') {
                if(val.includes(node.value)){
                    node.checked=true;
                }
                else{
                    node.checked=false;
                }
            }
        }
    }

    constructor() {
        super();
        this.horizontal_wasChangedInternally__ = false;
        this.vertical_wasChangedInternally__ = false;
    
    }


    connectedCallback() {
        super.connectedCallback();
       


        this.addEventListener("change", (e) => {
            e.stopPropagation();
            this.parentElement.dispatchEvent(new CustomEvent("change", { bubbles: true, detail: { value: this.value } }))
        })



        // let val = this.getAttribute('value');
        // if (this.boxes) {
        //     for (let i = 0; i < this.boxes.length; i++) {
        //         if (this.boxes[i].value == val) {
        //             this.boxes[i].checked = true
        //         }
        //     }
        // }


    }



    // get html() {
    //     return html``;
    // }

    // get css() {
    //     return html`
    //     <style>
    //         paper-checkbox{
    //             padding:12px;
    //         }
    //     </style>


    //     `;
    // }

    toJSON() {
        let result = super.toJSON();
        let children = [];
        for (let i = 0; i < this.children.length; i++) {
            children.push(this.children[i].toJSON());
        }

        result[this.tagName.toLowerCase()].items = children;
        return result;
    }

}


BaseElement.registerAAElement('aa-checkboxes', AACheckboxes);