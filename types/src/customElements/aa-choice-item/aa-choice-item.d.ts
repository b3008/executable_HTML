import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export declare class AAChoiceItem extends AABaseElement {
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get observedAttributes(): string[];
    static get acceptsElements(): string[];
    get staticObject(): typeof AAChoiceItem;
    set orientation(val: string);
    get orientation(): string;
    get checked(): boolean | undefined;
    set checked(val: any);
    get value(): string;
    set value(val: string);
    kind: string;
    item: any;
    itemBlock: HTMLDivElement;
    label: HTMLDivElement;
    _orientation: string;
    root: ShadowRoot;
    constructor();
    getRadioButton(): HTMLElement;
    getCheckbox(): HTMLElement;
    connectedCallback(): void;
    get css(): string;
    toJSON(): any;
}
