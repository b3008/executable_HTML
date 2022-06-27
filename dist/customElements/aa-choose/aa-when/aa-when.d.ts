export default class AAWhen extends BaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        "should-run": {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        debug: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        test: {
            type: StringConstructor;
            userDefined: boolean;
        };
    };
    static get acceptsElements(): any;
    static get observedAttributes(): string[];
}
import BaseElement from "./../../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-when.d.ts.map