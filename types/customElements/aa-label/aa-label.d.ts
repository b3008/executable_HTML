import { AABaseElement } from '../aa-base-element/aa-base-element';
export declare class AALabel extends AABaseElement {
    static get tag(): string;
    root: ShadowRoot;
    constructor();
    connectedCallback(): void;
    get css(): string;
    get html(): string;
}
