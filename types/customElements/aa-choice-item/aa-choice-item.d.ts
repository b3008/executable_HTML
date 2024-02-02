export class AAChoiceItem extends AABaseElement {
    static get tag(): string;
    static get properties(): {
        value: {
            type: StringConstructor;
            userDefined: boolean;
        };
        checked: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    static get observedAttributes(): string[];
    static get acceptsElements(): string[];
    get staticObject(): typeof AAChoiceItem;
    set orientation(val: string);
    get orientation(): string;
    _orientation: string;
    set checked(val: boolean | undefined);
    get checked(): boolean | undefined;
    set value(val: string);
    get value(): string;
    kind: string;
    item: HTMLInputElement | import("@material/web/checkbox/checkbox.js").MdCheckbox | import("@material/web/radio/radio.js").MdRadio | null;
    itemBlock: HTMLDivElement;
    label: HTMLDivElement;
    root: ShadowRoot;
    getRadioButton(): HTMLInputElement | import("@material/web/radio/radio.js").MdRadio;
    getCheckbox(): HTMLInputElement | import("@material/web/checkbox/checkbox.js").MdCheckbox;
    get css(): any;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
