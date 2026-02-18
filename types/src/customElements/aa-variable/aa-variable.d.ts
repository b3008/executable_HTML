import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export declare class AAVariable extends AABaseElement {
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    root: ShadowRoot;
    constructor();
    connectedCallback(): void;
    evaluateValueExpression(test: string): any;
    replaceExpressionIdentifiersWithValues(expression: string, memoryElement?: any): string;
}
