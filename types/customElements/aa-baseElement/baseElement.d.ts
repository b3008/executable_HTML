export const AAClasses: any[];
export default class BaseElement extends HTMLElement {
    static get properties(): {
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
    static registerAAElement(name: any, elem: any): void;
    static isAAElement(node: any): boolean;
    static createFragmentForNode(node: any): DocumentFragment;
    static createHolderForNode(o: any): any;
    static scanAndReplace(node: any): void;
    static copy(node: any): any;
    static nodeToJSON(node: any): any;
    static getDomPathAsName(el: any): string;
    static getVariableName(el: any): any;
    _props: {} | null;
    connectedCallback(): void;
    _attachedTimestamp: number | undefined;
    _debug: boolean | undefined;
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
     * however objects that inherit from baseElement can also provide a more
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
    makePropertiesFromAttributes(): {} | null;
    toCamelCase(str: any): any;
    toHyphenated(str: any): string;
    setAttributeDefaultValues(): void;
    getAttributes(): {};
    toJSON(): {};
    toYAML(): any;
    toJSL(): any;
    produceDiagram(): void;
    root: ShadowRoot | undefined;
    _dispatchDebugEvent(detail: any): void;
    _dispatchEndEvent(detail: any): void;
    _getParentSession(): this;
}
