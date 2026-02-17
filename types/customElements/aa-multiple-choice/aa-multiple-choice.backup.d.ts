export default class AAMultipleChoice extends AABaseElement {
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
    get staticObject(): typeof AAMultipleChoice;
    set value(val: any);
    get value(): any;
    horizontal: boolean | undefined;
    root: ShadowRoot;
    radioGroup: Element | null;
    choiceItems: any[] | undefined;
    attachToShadowDomAccordingToKind(node: any): void;
    get html(): string;
    get css(): string;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
