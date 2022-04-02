export default class AAGeolocation extends BaseElement {
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
    static get acceptsElements(): any[];
    static get observedAttributes(): string[];
    set value(arg: Promise<any>);
    get value(): Promise<any>;
    _getValue(): Promise<any>;
    _getLocation(): Promise<any>;
    _ready: boolean;
}
import BaseElement from "./../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-geolocation.d.ts.map