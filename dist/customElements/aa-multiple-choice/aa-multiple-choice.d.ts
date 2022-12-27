export default class AAMultipleChoice extends BaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        horizontal: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        value: {
            type: StringConstructor;
            userDefined: boolean;
        };
    };
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    vertical_wasChangedInternally__: boolean;
    vertical: boolean;
    horizontal_wasChangedInternally__: boolean;
    horizontal: boolean;
    get staticObject(): typeof AAMultipleChoice;
    set value(arg: any);
    get value(): any;
    updateState(checkedNode: any): void;
    getValueOfSelectedItem(): any;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-multiple-choice.d.ts.map