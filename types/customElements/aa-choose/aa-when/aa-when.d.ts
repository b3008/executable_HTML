export default class AAWhen extends AABaseElement {
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
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    root: ShadowRoot;
}
import { AABaseElement } from '../../aa-base-element/aa-base-element.js';
