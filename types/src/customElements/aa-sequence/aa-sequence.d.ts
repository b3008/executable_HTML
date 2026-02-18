import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import './aa-jump/aa-jump';
export declare class AASequence extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    target: Element | null;
    sIndex: number;
    currentNode: any;
    constructor();
    connectedCallback(): void;
    get css(): string;
    get html(): string;
    init(): void;
    start(): void;
    stop(): void;
    next(name?: any): Promise<void>;
    endEventListener(e: Event): void;
}
