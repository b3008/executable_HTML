export default class AATextAnswer extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        long: {
            type: BooleanConstructor;
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
    changeInputItem(type: any): void;
    inputItem: Element | null;
    set value(val: any);
    get value(): any;
    set label(val: string | null);
    get label(): string | null;
    set long(val: string | null);
    get long(): string | null;
    root: ShadowRoot;
    keyUpTimeout: any;
    fixBugInPaperTextarea(inputItem: any): void;
    get css(): string;
    get html(): any;
    get longHtml(): any;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
