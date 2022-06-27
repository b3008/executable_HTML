export default class AACheckboxes extends BaseElement {
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
    set value(arg: any[]);
    get value(): any[];
    horizontal_wasChangedInternally__: boolean;
    vertical_wasChangedInternally__: boolean;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-checkboxes.d.ts.map