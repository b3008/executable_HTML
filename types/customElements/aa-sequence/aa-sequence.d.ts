export default class AASequence extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        'write-into': {
            type: StringConstructor;
            userDefined: boolean;
        };
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
        type: {
            type: StringConstructor;
            userDefined: boolean;
        };
        stopped: {
            type: BooleanConstructor;
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
    get css(): any;
    get html(): any;
    init(): void;
    stopped: boolean | undefined;
    target: any;
    sIndex: number | undefined;
    start(): void;
    stop(): void;
    next(name: any): Promise<any>;
    currentNode: any;
    endEventListener(e: any): void;
}
import { AABaseElement } from './../aa-AABaseElement/AABaseElement.js';
