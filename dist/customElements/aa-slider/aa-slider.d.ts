export default class AASlider extends BaseElement {
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
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
        'min-label': {
            type: StringConstructor;
            userDefined: boolean;
        };
        'max-label': {
            type: StringConstructor;
            userDefined: boolean;
        };
        value: {
            type: NumberConstructor;
            userDefined: boolean;
        };
    };
    static get acceptsElements(): any;
    static get observedAttributes(): string[];
    set value(arg: any);
    get value(): any;
    set minLabel(arg: string);
    get minLabel(): string;
    set maxLabel(arg: string);
    get maxLabel(): string;
    set min(arg: any);
    set max(arg: any);
    inputItem: Element;
    minLabelItem: Element;
    maxLabelItem: Element;
    get css(): string;
    get html(): any;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-slider.d.ts.map