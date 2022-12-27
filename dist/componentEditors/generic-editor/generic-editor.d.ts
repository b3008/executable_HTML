export default class GenericEditor extends BaseElement {
    static get tag(): string;
    static get properties(): {
        for: {
            type: StringConstructor;
            userDefined: boolean;
        };
    };
    propInputsMap: {};
    set for(arg: any);
    elementId: any;
    buildInterfaceForElement(elementOrId: any): HTMLDivElement;
    elementContainer(element: any): HTMLDivElement;
    extractAttributes(element: any): any;
    childElementContainer(element: any): HTMLDivElement;
    buildIntefaceForRegularElement(element: any): HTMLDivElement;
    buildInterfaceForAAElement(element: any): HTMLDivElement;
    buildInterfaceForChildElement(element: any): HTMLDivElement;
    updateConfig(element: any): void;
    getConfigurationElementForProperty(propertyName: any, propertyObject: any, element: any): HTMLElement;
    get css(): any;
}
import BaseElement from "../../customElements/aa-baseElement/baseElement.js";
//# sourceMappingURL=generic-editor.d.ts.map