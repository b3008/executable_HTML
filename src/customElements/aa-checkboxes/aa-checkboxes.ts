import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import '../aa-choice-item/aa-choice-item';

export class AACheckboxes extends AABaseElement {

    static get category(): string {
        return "response item";
    }




    static get tag(): string {
        return 'aa-checkboxes';
    }

    static get properties(): AAPropertiesMap {
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

    static get acceptsElements(): string[] {
        return [
            'aa-choice-item'
        ]
    }

    static get observedAttributes(): string[] {
        return ['horizontal', 'vertical'];
    }


    get value(): (string | null)[] {
        const result: (string | null)[] = [];
        for (let i = 0; i < this.children.length; i++) {
            const node = this.children[i] as any;
            if (node.tagName === 'AA-CHOICE-ITEM') {
                if (node.checked) {
                    result.push(node.value);
                } else {
                    result.push(null);
                }
            }
        }
        return result;
    }

    set value(val: any) {
        if (!Array.isArray(val)) {
            val = [val];
        }


        for (let i = 0; i < this.children.length; i++) {
            const node = this.children[i] as any;
            if (node.tagName === 'AA-CHOICE-ITEM') {
                if (val.includes(node.value)) {
                    node.checked = true;
                }
                else {
                    node.checked = false;
                }
            }
        }
    }

    horizontal_wasChangedInternally__: boolean;
    vertical_wasChangedInternally__: boolean;

    constructor() {
        super();
        this.horizontal_wasChangedInternally__ = false;
        this.vertical_wasChangedInternally__ = false;

    }


    connectedCallback(): void {
        super.connectedCallback();



        this.addEventListener("change", (e: Event) => {
            e.stopPropagation();
            this.parentElement!.dispatchEvent(new CustomEvent("change", { bubbles: true, detail: { value: this.value } }))
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

    toJSON(): any {
        let result = super.toJSON();
        let children: any[] = [];
        for (let i = 0; i < this.children.length; i++) {
            children.push((this.children[i] as any).toJSON());
        }

        result[this.tagName.toLowerCase()].items = children;
        return result;
    }

}


AABaseElement.registerAAElement('aa-checkboxes', AACheckboxes);