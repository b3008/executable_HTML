export default class AALikertScale extends BaseElement {
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
    static get acceptsElements(): any[];
    static get observedAttributes(): string[];
    mChoice: Element;
    choiceItems: any;
    currentvalue: any;
    getTags(): string;
    get html(): any;
    items: number;
    get value(): number;
    getValue(): any;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-likert-scale.d.ts.map