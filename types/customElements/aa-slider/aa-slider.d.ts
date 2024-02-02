export class AASlider extends AABaseElement {
    static get category(): string;
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
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    set value(val: any);
    get value(): any;
    set minLabel(val: string | null);
    get minLabel(): string | null;
    set maxLabel(val: string | null);
    get maxLabel(): string | null;
    set min(val: any);
    set max(val: any);
    root: ShadowRoot;
    inputItem: Element | null | undefined;
    minLabelItem: Element | null | undefined;
    maxLabelItem: Element | null | undefined;
    get css(): string;
    get html(): any;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
