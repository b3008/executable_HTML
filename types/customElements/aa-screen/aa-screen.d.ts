import { AABaseElement } from '../aa-base-element/aa-base-element.js';
export type AAScreenValue = {
    [key: string]: any;
    __meta: {
        attachedTimestamp: number;
        submitTimestamp: number;
    };
};
export type AAScreenValueSubmitEventDetail = {
    value: AAScreenValue;
};
export declare class AAScreen extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        "submit-button-text": {
            type: StringConstructor;
            value: string;
            userDefined: boolean;
        };
        "submit-button-hidden": {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        'expect-wait': {
            type: BooleanConstructor;
            userDefined: boolean;
            value: boolean;
        };
        autohide: {
            type: BooleanConstructor;
            userDefined: boolean;
            value: boolean;
        };
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        diagram: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        'diagram-transparent': {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
    };
    static get acceptsElements(): never[];
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, _oldValue: any, newValue: any): void;
    constructor();
    submitButton: HTMLElement | null;
    submitButtonContainer: HTMLElement | null;
    submitButtonText: string;
    submitButtonHidden: boolean;
    root: ShadowRoot;
    diagram: boolean;
    _started: boolean;
    _attachedTimestamp: number;
    connectedCallback(): void;
    get css(): any;
    get html(): any;
    getSubmitButton(): any;
    submitButtonClick(e?: CustomEvent | MouseEvent): Promise<void>;
    collectValues(): Promise<AAScreenValue>;
    doesArrayConsistOfNullsOrUndefined(arr: any): any;
    getNodeValue(n: any): Promise<any>;
    hasChildrenThatRequireResponse(): Promise<Element[]>;
    getAAChildren(node: any, result?: any, nodeName?: any): any;
    getChildrenValues(node: any, result?: any): Promise<any>;
    get value(): Promise<AAScreenValue>;
    valueWithKey(): Promise<unknown>;
    automate(): void;
    hide(): void;
    show(): void;
}
