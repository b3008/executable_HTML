import { AABaseElement } from '../aa-base-element/aa-base-element.js';
import '../aa-memory/aa-memory.js';
import { AAMemory } from '../aa-memory/aa-memory.js';
export type AASessionInput = {
    data: any;
    sessionID: string;
    sessionTimestamp: number;
    sessionName: string;
    variables: string[];
};
export type AASessionInputSubmitEventDetail = {
    input: AASessionInput;
};
export declare class AASession extends AABaseElement {
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
    _mem: AAMemory;
    sessionID: string;
    sessionTime: number;
    name: string;
    debug: boolean;
    diagram: boolean;
    shouldRun: boolean;
    diagramTransparent: boolean;
    constructor();
    myIdGenerator(): string;
    connectedCallback(): void;
    attachTemplateChildNodesToMyself(templateClone: any): void;
    run(): void;
    getData(name: any): any;
    setData(name: any, value: any): void;
    getDataDump(): Storage;
    toJSON(): {};
    toJSL(): string;
    get originalChildNodes(): any;
}
