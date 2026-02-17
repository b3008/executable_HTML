import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import '../aa-choice-item/aa-choice-item';

export class AAMultipleChoice extends AABaseElement {


    static get category(): string {
        return "response item";
    }



    static get tag(): string {
        return 'aa-multiple-choice';
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
                userDefined: true,

            },

        }
    }

    static get acceptsElements(): string[] {
        return [
            'aa-choice-item'
        ]
    }

    static get observedAttributes(): string[] {
        return ["horizontal", "vertical"];
    }


    attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null): void {

        switch (name) {
            case "horizontal":

                if (newValue == "true") {
                    this.style.display = "flex";
                    for (let i = 0; i < this.children.length; i++) {
                        const node = this.children[i] as any;
                        if (node.tagName == 'AA-CHOICE-ITEM') {
                            node.orientation = "vertical";
                        }
                    }
                }

                if (this.vertical_wasChangedInternally__) {
                    this.vertical_wasChangedInternally__ = false;
                    return
                }
                this.vertical_wasChangedInternally__ = true;
                if ((newValue === "false") || (!newValue)) {
                    this.vertical = true;

                } else {
                    this.vertical = false;
                }

                // make a horizontal collection of items
                // and set each item to be oriented vertically

                return;
            case "vertical":

                if (newValue == "true") {
                    this.style.display = "block";
                    for (let i = 0; i < this.children.length; i++) {
                        const node = this.children[i] as any;
                        if (node.tagName == 'AA-CHOICE-ITEM') {
                            node.orientation = "horizontal";
                        }
                    }
                }

                if (this.vertical_wasChangedInternally__) {
                    this.vertical_wasChangedInternally__ = false;
                    return
                }
                this.horizontal_wasChangedInternally__ = true;
                if ((newValue === "false") || (!newValue)) {
                    this.horizontal = true;
                } else {
                    this.horizontal = false;
                }

                // make a vertical collection of items
                // and set each item to be oriented horizontally

                return;

        }
    }
    get staticObject() {
        return AAMultipleChoice;
    }

    get value(): string | undefined {
        return this.getValueOfSelectedItem();
    }

    set value(val: any) {
        for (let i = 0; i < this.children.length; i++) {
            const node = this.children[i] as any;
            if (node.tagName === 'AA-CHOICE-ITEM') {
                if (node.value !== val) {
                    node.checked = false;
                } else {
                    node.checked = true
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

    updateState(checkedNode: EventTarget | null): void {

        for (let i = 0; i < this.children.length; i++) {
            const node = this.children[i] as any;

            if (node.tagName === 'AA-CHOICE-ITEM') {
                if (node !== checkedNode) {
                    node.checked = false;

                } else {
                    node.checked = true;

                }
            }
        }
    }

    getValueOfSelectedItem(): string | undefined {
        for (let i = 0; i < this.children.length; i++) {
            const node = this.children[i] as any;
            if (node.tagName === 'AA-CHOICE-ITEM') {
                if (node.checked) {
                    return node.value;
                }
            }
        }
    }

    connectedCallback(): void {

        super.connectedCallback();




        this.value = this.getAttribute("value");

        this.addEventListener("change", (e: Event) => {

            e.stopPropagation();
            this.updateState(e.target)
            this.parentElement!.dispatchEvent(new CustomEvent("change", { bubbles: true, detail: { value: this.value } }))
        })

    }




    toJSON(): any {
        let result = super.toJSON();
        if ((result.horizontal)) {
            result.horizontal = true;
        }
        return result;
    }
}


AABaseElement.registerAAElement('aa-multiple-choice', AAMultipleChoice);