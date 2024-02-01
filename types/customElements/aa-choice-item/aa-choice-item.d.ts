export default class AAChoiceItem extends BaseElement {
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
    set checked(val: any);
    get checked(): any;
    set value(val: string);
    get value(): string;
    kind: string;
    item: HTMLElement | null;
    itemBlock: HTMLDivElement;
    label: HTMLDivElement;
    root: ShadowRoot;
    get css(): any;
}
import BaseElement from '../aa-baseElement/baseElement.js';
