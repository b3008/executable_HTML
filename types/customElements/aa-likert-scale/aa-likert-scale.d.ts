export class AALikertScale extends AABaseElement {
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
    value: string | null;
    items: number | undefined;
    currentvalue: any;
    getTags(): string;
    get css(): any;
    get html(): string;
    arrangeLabels(): void;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
