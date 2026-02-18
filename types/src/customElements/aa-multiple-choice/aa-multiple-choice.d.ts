import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import '../aa-choice-item/aa-choice-item';
export declare class AAMultipleChoice extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null): void;
    get staticObject(): typeof AAMultipleChoice;
    get value(): string | undefined;
    set value(val: any);
    horizontal_wasChangedInternally__: boolean;
    vertical_wasChangedInternally__: boolean;
    constructor();
    updateState(checkedNode: EventTarget | null): void;
    getValueOfSelectedItem(): string | undefined;
    connectedCallback(): void;
    toJSON(): any;
}
