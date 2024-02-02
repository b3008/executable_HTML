export class AASession extends AABaseElement {
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
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    myTemplate: HTMLTemplateElement;
    _mem: HTMLElement;
    myIdGenerator(): number;
    sessionID: number | undefined;
    sessionTime: number | undefined;
    attachTemplateChildNodesToMyself(templateClone: any): void;
    run(): void;
    getData(name: any): any;
    setData(name: any, value: any): any;
    getDataDump(): any;
    toJSL(): string;
    get originalChildNodes(): any;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
