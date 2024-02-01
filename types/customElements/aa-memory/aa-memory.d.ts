export default class AAMemory extends AABaseElement {
    static get tag(): string;
    get observedAttributes(): string[];
    setData(name: any, value: any): void;
    getData(name: any): any;
    getDataDump(): Storage;
}
import { AABaseElement } from './../aa-AABaseElement/AABaseElement.js';
