export default class AALabel extends BaseElement {
    static get tag(): string;
    root: ShadowRoot;
    get css(): any;
    get html(): string;
}
import BaseElement from '../aa-baseElement/baseElement.js';
