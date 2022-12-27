export default class AAScreen extends BaseElement {
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
    static get acceptsElements(): any[];
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    submitButtonContainer: Element;
    _started: boolean;
    get css(): any;
    get html(): any;
    getSubmitButton(): any;
    submitButtonClick(e: any): void;
    collectValues(): Promise<any>;
    hasChildrenThatDemandResponse(): boolean;
    getAAChildren(node: any, result: any, nodeName: any): any;
    getChildrenValues(node: any, result: any): Promise<any>;
    get value(): Promise<any>;
    valueWithKey(): Promise<any>;
    automate(): void;
    hide(): void;
    show(): void;
}
import BaseElement from "./../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-screen.d.ts.map