import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export declare class AATextAnswer extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    inputItem: any;
    root: ShadowRoot;
    keyUpTimeout: ReturnType<typeof setTimeout> | null;
    get value(): any;
    set value(val: any);
    get label(): string | null;
    set label(val: any);
    constructor();
    connectedCallback(): void;
    get css(): string;
    get html(): string;
}
