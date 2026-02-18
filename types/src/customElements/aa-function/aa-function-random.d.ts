import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export declare class AAFunctionRandom extends AABaseElement {
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    get value(): number;
    getRandomInt(min: number, max: number): number;
}
