export default class AAChoiceItem extends BaseElement {
    static get tag(): string;
    static get properties(): {
        value: {
            type: StringConstructor;
            userDefined: boolean;
        };
        checked: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    static get observedAttributes(): string[];
    static get acceptsElements(): string[];
    get staticObject(): typeof AAChoiceItem;
    set orientation(arg: string);
    get orientation(): string;
    _orientation: string;
    set checked(arg: any);
    get checked(): any;
    set value(arg: string);
    get value(): string;
    kind: string;
    item: HTMLElement;
    itemBlock: HTMLDivElement;
    label: HTMLDivElement;
    get css(): any;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-choice-item.d.ts.map