export default class AASession extends BaseElement {
    static get tag(): string;
    static get properties(): {
        'should-run': {
            type: BooleanConstructor;
            userDefined: boolean;
            value: boolean;
        };
        debug: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
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
    static get acceptsElements(): any;
    static get observedAttributes(): string[];
    myTemplate: HTMLTemplateElement;
    _mem: HTMLElement;
    myIdGenerator(): number;
    sessionID: number;
    sessionTime: number;
    attachTemplateChildNodesToMyself(templateClone: any): void;
    run(): void;
    getData(name: any): any;
    setData(name: any, value: any): any;
    getDataDump(): any;
    toJSL(): string;
    get originalChildNodes(): any;
}
import BaseElement from "./../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-session.d.ts.map