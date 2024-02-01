export default class AALikertScale extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        debug: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        value: {
            type: NumberConstructor;
            userDefined: boolean;
        };
        items: {
            type: StringConstructor;
            userDefined: boolean;
        };
        "start-label": {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        "middle-label": {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        "end-label": {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        "start-item": {
            type: NumberConstructor;
            userDefined: boolean;
            value: number;
        };
    };
    static get acceptsElements(): never[];
    static get observedAttributes(): string[];
    root: ShadowRoot;
    mChoice: Element | null | undefined;
    choiceItems: any;
    currentvalue: any;
    getTags(): string;
    get html(): any;
    items: number | undefined;
    get value(): number;
    getValue(): any;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
