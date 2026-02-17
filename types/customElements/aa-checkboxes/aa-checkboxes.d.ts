import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import '../aa-choice-item/aa-choice-item';
export declare class AACheckboxes extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    get value(): (string | null)[];
    set value(val: any);
    horizontal_wasChangedInternally__: boolean;
    vertical_wasChangedInternally__: boolean;
    constructor();
    connectedCallback(): void;
    toJSON(): any;
}
