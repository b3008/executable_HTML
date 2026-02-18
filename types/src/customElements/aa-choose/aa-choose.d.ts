import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import './aa-when/aa-when';
import './aa-otherwise/aa-otherwise';
export declare class AAChoose extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    root: ShadowRoot;
    originalContent: string;
    _shouldRun: boolean;
    sessionElement: any;
    constructor();
    connectedCallback(): void;
    _getNodeToInstantiate(): any[];
    evaluate(element: Element): any;
    evaluateTestExpression(test: string): any;
    replaceExpressionIdentifiersWithValues(expression: string, memoryElement?: any): string;
}
