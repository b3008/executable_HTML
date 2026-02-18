import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export declare class AASlider extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    inputItem: any;
    minLabelItem: HTMLElement | null;
    maxLabelItem: HTMLElement | null;
    root: ShadowRoot;
    get value(): any;
    set value(val: any);
    get minLabel(): string | null;
    get maxLabel(): string | null;
    set minLabel(val: any);
    set maxLabel(val: any);
    set min(val: any);
    set max(val: any);
    constructor();
    connectedCallback(): void;
    get css(): string;
    get html(): string;
}
