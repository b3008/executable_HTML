import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export declare class AAGeolocation extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    root: ShadowRoot;
    _ready: boolean;
    constructor();
    get value(): Promise<{
        lat: number;
        lon: number;
        timestamp: Date;
    }>;
    set value(val: any);
    _getValue(): Promise<{
        lat: number;
        lon: number;
        timestamp: Date;
    }>;
    _getLocation(): Promise<{
        lat: number;
        lon: number;
        timestamp: Date;
    }>;
    connectedCallback(): void;
}
