export default class AAJump extends BaseElement {
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
    static get acceptsElements(): any[];
    static get observedAttributes(): string[];
}
import BaseElement from "../../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-jump.d.ts.map