export default class AAChoiceItem extends BaseElement {
    static get tag(): string;
    static get properties(): {
        value: {
            type: StringConstructor;
            userDefined: boolean;
        };
    };
    static get observedAttributes(): string[];
    static get acceptsElements(): any;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-choice-item.d.ts.map