import '../../lib/js-yaml-browserify.js';
export interface AAPropertyDefinition {
    type: StringConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor | DateConstructor;
    value?: any;
    userDefined?: boolean;
    valuesAllowed?: string[];
}
export interface AAPropertiesMap {
    [key: string]: AAPropertyDefinition;
}
declare global {
    interface Window {
        AANodeNames: string[];
        AAClasses: Record<string, typeof AABaseElement>;
        html: typeof html;
        nodeToJSON: typeof AABaseElement.nodeToJSON;
    }
}
export declare const html: (txt: TemplateStringsArray | string[], ...val: any[]) => string;
export declare const AAClasses: Record<string, typeof AABaseElement>;
export declare class AABaseElement extends HTMLElement {
    static get properties(): AAPropertiesMap;
    static registerAAElement(name: string, elem: CustomElementConstructor): void;
    static isAAElement(node: Node): boolean;
    static createFragmentForNode(node: Node): DocumentFragment;
    static createHolderForNode(o: any): any;
    static scanAndReplace(node: any): void;
    _props: Record<string, string> | null;
    _attachedTimestamp: number;
    _debug: boolean;
    _mem: any;
    innerFragment: any;
    root: ShadowRoot | undefined;
    [key: string]: any;
    constructor();
    connectedCallback(): void;
    getMemory(): any;
    /**
     * Properties are the member variables of the HTMLElement object.
     * Attributes are the html tag's attributes.
     * By convention, properties are in camelCase, e.g., someMembVariable
     * while the corresponding attribute whould be hyphenated, e.g., some-member-variable.
     * The purpose of this function is, based on the hyphenated attributes
     * of the element, to generate corresponding camelCase properties
     *
     * Attribute names are provided by observedAttributes of the HTMLElement object,
     * however objects that inherit from AABaseElement can also provide a more
     * meaningful declaration, including datatype and default value, in
     * a static get properties function, like so:
     *
     *  static get properties(){
        return {
            name:{
                type:String,
                userDefined:true
            },
            "submit-button-text":{
                type:String,
                value:"submit",
                userDefined:true
            },


     * This function also generates corresponding getter and setter functions
     * for each property, so that properties and attributes always remain in sync
     * with each other
     */
    makePropertiesFromAttributes(): Record<string, string> | null;
    toCamelCase(str: string): string;
    toHyphenated(str: string): string;
    setAttributeDefaultValues(): void;
    static copy(node: any): any;
    getAttributes(): Record<string, string>;
    toJSON(): any;
    static nodeToJSON(node: any): any;
    toYAML(): string;
    toJSL(): any;
    produceDiagram(): void;
    static getDomPathAsName(el: any): string;
    static getVariableName(el: Element): string;
    _dispatchDebugEvent(detail: any): void;
    _dispatchEndEvent(detail?: any): void;
    _getParentSession(): any;
}
