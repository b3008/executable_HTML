import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export declare class AAAffectGrid extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    get x(): number | null;
    get y(): number | null;
    get value(): [number, number] | null;
    set value(val: any);
    get minLabel(): string | null;
    get maxLabel(): string | null;
    set minLabel(val: any);
    set maxLabel(val: any);
    set min(val: any);
    set max(val: any);
    root: ShadowRoot;
    grid: HTMLElement | null;
    selectedCell: HTMLElement | null;
    totalContainer: HTMLElement | null;
    constructor();
    connectedCallback(): void;
    get css(): string;
    get html(): string;
}
