export default class AAChoose extends BaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        "should-run": {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        debug: {
            type: BooleanConstructor;
            value: boolean;
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
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    root: ShadowRoot;
    originalContent: string;
    _shouldRun: boolean | undefined;
    sessionElement: this | undefined;
    _getNodeToInstantiate(): any[];
    evaluate(element: any): any;
    evaluateTestExpression(test: any): any;
    replaceExpressionIdentifiersWithValues(expression: any, memoryElement: any): any;
}
import BaseElement from './../aa-baseElement/baseElement.js';
