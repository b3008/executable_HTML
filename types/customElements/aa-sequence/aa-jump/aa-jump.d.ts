import { AABaseElement, type AAPropertiesMap } from '../../aa-base-element/aa-base-element';
export declare class AAJump extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    connectedCallback(): void;
}
