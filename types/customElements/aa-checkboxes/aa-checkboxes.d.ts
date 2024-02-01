export default class AACheckboxes extends AABaseElement {
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
    set value(val: any[]);
    get value(): any[];
    horizontal_wasChangedInternally__: boolean;
    vertical_wasChangedInternally__: boolean;
}
import { AABaseElement } from '../aa-AABaseElement/AABaseElement.js';
