export default class AAFunctionRandom extends BaseElement {
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
    static get acceptsElements(): any;
    static get observedAttributes(): string[];
    get value(): any;
    getRandomInt(min: any, max: any): any;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-function-random.d.ts.map