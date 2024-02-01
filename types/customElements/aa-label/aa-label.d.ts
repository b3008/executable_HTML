export default class AALabel extends AABaseElement {
    static get tag(): string;
    root: ShadowRoot;
    get css(): any;
    get html(): string;
}
import { AABaseElement } from '../aa-base-element/aa-base-element.js';
