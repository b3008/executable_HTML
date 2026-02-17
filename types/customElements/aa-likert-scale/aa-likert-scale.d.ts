import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import '../aa-multiple-choice/aa-multiple-choice';
export declare class AALikertScale extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    root: ShadowRoot;
    currentvalue: any;
    constructor();
    connectedCallback(): void;
    getTags(): string;
    get css(): string;
    get html(): string;
    arrangeLabels(): void;
}
