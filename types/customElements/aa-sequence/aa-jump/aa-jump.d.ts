export default class AAJump extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        goto: {
            type: StringConstructor;
            userDefined: boolean;
        };
    };
    static get acceptsElements(): never[];
    static get observedAttributes(): string[];
}
import { AABaseElement } from '../../aa-base-element/aa-base-element.js';
