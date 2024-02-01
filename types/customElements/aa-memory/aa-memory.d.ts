export default class AAMemory extends BaseElement {
    static get tag(): string;
    get observedAttributes(): string[];
    setData(name: any, value: any): void;
    getData(name: any): any;
    getDataDump(): Storage;
}
import BaseElement from './../aa-baseElement/baseElement.js';
