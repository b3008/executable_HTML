export class AAFunctionRandom extends AABaseElement {
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
        min: {
            type: NumberConstructor;
            userDefined: boolean;
        };
        max: {
            type: NumberConstructor;
            userDefined: boolean;
        };
    };
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    get value(): any;
    getRandomInt(min: any, max: any): any;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
