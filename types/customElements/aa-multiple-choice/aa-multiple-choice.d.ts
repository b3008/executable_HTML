export default class AAMultipleChoice extends AABaseElement {
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
    vertical: boolean | undefined;
    horizontal_wasChangedInternally__: boolean;
    horizontal: boolean | undefined;
    get staticObject(): typeof AAMultipleChoice;
    set value(val: any);
    get value(): any;
    updateState(checkedNode: any): void;
    getValueOfSelectedItem(): any;
}
import { AABaseElement } from '../aa-AABaseElement/AABaseElement.js';
