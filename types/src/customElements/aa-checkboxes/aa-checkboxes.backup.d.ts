export default class AACheckboxes extends AABaseElement {
    static get tag(): string;
    static get properties(): {
        horizontal: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        value: {
            type: StringConstructor;
            userDefined: boolean;
        };
    };
    static get acceptsElements(): string[];
    static get observedAttributes(): string[];
    set value(val: any[]);
    get value(): any[];
    root: ShadowRoot;
    boxes: any[] | NodeListOf<Element> | undefined;
    attachToShadowDomAccordingToKind(node: any): void;
    get html(): string;
    get css(): string;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
