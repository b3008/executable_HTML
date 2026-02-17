import { AABaseElement } from '../aa-base-element/aa-base-element';
export declare class AAMemory extends AABaseElement {
    static get tag(): string;
    get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    setData(name: string, value: any): void;
    getData(name: string): string | null;
    getDataDump(): Storage;
}
