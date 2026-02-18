import { AABaseElement, type AAPropertiesMap } from '../../aa-base-element/aa-base-element';
export declare class AAWhen extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    root: ShadowRoot;
    constructor();
    connectedCallback(): void;
}
