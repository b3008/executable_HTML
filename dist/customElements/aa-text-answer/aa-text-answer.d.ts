export default class AATextAnswer extends BaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        long: {
            type: BooleanConstructor;
            userDefined: boolean;
        };
        label: {
            type: StringConstructor;
            userDefined: boolean;
        };
        value: {
            type: StringConstructor;
            userDefined: boolean;
        };
        type: {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
            valuesAllowed: string[];
        };
    };
    static get acceptsElements(): any;
    static get observedAttributes(): string[];
    changeInputItem(type: any): void;
    inputItem: Element;
    set value(arg: any);
    get value(): any;
    set label(arg: string);
    get label(): string;
    set long(arg: string);
    get long(): string;
    keyUpTimeout: any;
    fixBugInPaperTextarea(inputItem: any): void;
    get css(): string;
    get html(): any;
    get longHtml(): any;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-text-answer.d.ts.map