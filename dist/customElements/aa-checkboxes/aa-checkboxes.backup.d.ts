export default class AACheckboxes extends BaseElement {
    static get tag(): string;
    static get properties(): {
        horizontal: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        value: {
            type: StringConstructor;
            userDefined: boolean;
        };
    };
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    set value(arg: any[]);
    get value(): any[];
    boxes: any[] | NodeListOf<Element>;
    attachToShadowDomAccordingToKind(node: any): void;
    get html(): any;
    get css(): any;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-checkboxes.backup.d.ts.map