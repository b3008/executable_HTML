export default class AAGeolocation extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        'get-on-request': {
            type: BooleanConstructor;
            userDefined: boolean;
            value: boolean;
        };
        ready: {
            type: BooleanConstructor;
            userDefined: boolean;
            value: boolean;
        };
    };
    static get acceptsElements(): never[];
    static get observedAttributes(): string[];
    root: ShadowRoot;
    set value(val: Promise<any>);
    get value(): Promise<any>;
    _getValue(): Promise<any>;
    _getLocation(): Promise<any>;
    _ready: boolean | undefined;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
