export class AATextAnswer extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        label: {
            type: StringConstructor;
            userDefined: boolean;
        };
        value: {
            type: StringConstructor;
            userDefined: boolean;
        };
        type: {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
            valuesAllowed: string[];
        };
    };
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    set value(val: any);
    get value(): any;
    set label(val: string | null);
    get label(): string | null;
    root: ShadowRoot;
    inputItem: Element | null | undefined;
    keyUpTimeout: any;
    get css(): string;
    get html(): any;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
