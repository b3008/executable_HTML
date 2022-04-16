import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
import BaseElement, { AAClasses } from '../../customElements/aa-baseElement/baseElement.js';
import { AAElements } from '../../index.js';


export default class GenericEditor extends BaseElement {



    propInputsMap = {};

    static get tag() {
        return 'generic-editor';
    }

    static get properties() {
        return {
            for: {
                type: String,
                userDefined: true
            },
        }
    }

    constructor() {
        super();


        this.root = this.attachShadow({ mode: 'open' });

    }



    set for(elementId) {
        // reset contents
        this.root.innerHTML = this.css;
        this.elementId = elementId;
        const container = this.buildInterfaceForElement(elementId);
        if(!container){
            console.warn(`could not find element with id ${elementId}`)
        }
        container.style.width = "350px";
        this.root.appendChild(container);


    }

    buildInterfaceForElement(elementOrId) {

        let element;
        if (typeof elementOrId === "string") {
            element = document.getElementById(elementOrId);
        } else {
            element = elementOrId;
        }



        if (!element) {
            return
        }


        if (BaseElement.isAAElement(element)) {
            return this.buildInterfaceForAAElement(element)
        } else {
            return this.buildIntefaceForRegularElement(element);
        }
    }


    elementContainer(element) {
        const elementContainer = document.createElement("div");
        elementContainer.innerHTML = html`
            <div style="display:flex; justify-content:space-between; align-items:center; border:solid thin green;">
                <div style="padding:10px;">${element.tagName}</div>
                <div>
                    <paper-button>remove</paper-button>
                </div>
                
            </div>
            <div class="propertiesContainer"></div>
            <div class="contentContainer">content</div>
            
        `
        elementContainer.style.border = "solid thin";
        elementContainer.style.margin = "10px";
        elementContainer.propertiesContainer = elementContainer.querySelector(".propertiesContainer");
        elementContainer.contentContainer = elementContainer.querySelector(".contentContainer");


        return elementContainer
    }


    extractAttributes(element) {
        const openingTag = element.outerHTML.match(/<.*?>/g)[0];
        const attributes = openingTag.split(' ').filter((item) => {
            if (item.indexOf('=') !== -1) {
                if (item.indexOf('slot=') == -1) {
                    return item;
                }
            }
        })

        return attributes;
    }

    childElementContainer(element) {
        const attributes = this.extractAttributes(element);
        const attrString = attributes.reduce((prev, next) => {
            return prev + " " + next;
        }, "");
        const elementContainer = document.createElement("div");
        elementContainer.innerHTML = html`
        <div style="position:relative;">
            <div class = "header" style="display:flex; justify-content:space-between; align-items:center; border:solid thin green; cursor:pointer">
                <div style="padding:10px;">${element.tagName}: ${attrString}</div>
                
                <div class="close-button" style="font-size:1.5em; padding:10px">
                    <ion-icon name="close-circle"></ion-icon>
                </div>
                
            </div>
            <div class="popup" style="padding:10px; position:absolute; min-width:350px; display:none; box-shadow: 2px 2px 5px 5px rgba(0,0,0,0.5); background-color:white; z-index:1000;">
                <div class="propertiesContainer"></div>
                <div class="contentContainer">content</div>
            </div>
        </div>
        `
        elementContainer.style.border = "solid thin";
        elementContainer.style.margin = "10px";
        elementContainer.propertiesContainer = elementContainer.querySelector(".propertiesContainer");
        elementContainer.contentContainer = elementContainer.querySelector(".contentContainer");

        elementContainer.header = elementContainer.querySelector(".header");
        elementContainer.popup = elementContainer.querySelector(".popup");
        elementContainer.header.addEventListener("click", () => {
            if(elementContainer.popup.style.display == "none"){
                elementContainer.popup.style.display = "block";

            } else {
                elementContainer.popup.style.display = "none";
            }
        })

        return elementContainer
    }


    buildIntefaceForRegularElement(element) {
        const containerNode = this.elementContainer(element);
        return containerNode;
    }

    buildInterfaceForAAElement(element) {

        const containerNode = this.elementContainer(element);
        const elementProps = element.constructor.properties;
        const propNames = Object.keys(elementProps);


        containerNode.addEventListener("click", () => {
            setTimeout(() => {
                this.updateConfig(element);
            }, 10)
        })


        propNames.forEach((prop) => {
            if (elementProps[prop].userDefined) {

                const e = this.getConfigurationElementForProperty(prop, elementProps[prop], element);

                if (e) {

                    this.propInputsMap[prop] = e;

                    const containerDiv = document.createElement('div');
                    containerDiv.appendChild(document.createTextNode(`${prop}:`))
                    containerDiv.appendChild(e);
                    if (elementProps[prop].type === Boolean) {
                        containerDiv.classList.add("booleanDiv");
                    }
                    if (elementProps[prop].type === String) {
                        containerDiv.classList.add("stringDiv");
                    }

                    containerNode.propertiesContainer.appendChild(containerDiv);
                }
            }

        });


        for (let i = 0; i < element.childNodes.length; i++) {
            const content = this.buildInterfaceForChildElement(element.childNodes[i]);
            if (content) {
                containerNode.contentContainer.appendChild(content);
            }
        }

        // if (element.innerText.trim()) {
        //     const textArea = document.createElement('paper-textarea');
        //     textArea.value = element.innerText;
        //     containerNode.contentContainer.appendChild(textArea);
        // }

        const acceptedElements = element.constructor.acceptsElements
        for (let i = 0; i < acceptedElements.length; i++) {
            const acceptedElement = acceptedElements[i];
            const addContentButton = document.createElement('paper-button');
            addContentButton.style.backgroundColor = "indigo";
            addContentButton.style.color = "white";
            containerNode.contentContainer.appendChild(addContentButton);
            if (typeof acceptedElement === "string") {
                addContentButton.innerHTML = acceptedElement
                addContentButton.addEventListener("click", () => {
                    if (acceptedElement == "#text") {
                        const textArea = document.createElement('paper-textarea');
                        containerNode.contentContainer.appendChild(textArea)
                    }
                })
            }
        }
        return containerNode;
    }


    buildInterfaceForChildElement(element) {

        if (!BaseElement.isAAElement(element)) {
            return;
        }
        const containerNode = this.childElementContainer(element);
        const elementProps = element.constructor.properties;
        const propNames = Object.keys(elementProps);


        containerNode.addEventListener("click", () => {
            setTimeout(() => {
                this.updateConfig(element);
            }, 10)
        })


        propNames.forEach((prop) => {
            if (elementProps[prop].userDefined) {

                const e = this.getConfigurationElementForProperty(prop, elementProps[prop], element);

                if (e) {

                    this.propInputsMap[prop] = e;

                    const containerDiv = document.createElement('div');
                    containerDiv.appendChild(document.createTextNode(`${prop}:`))
                    containerDiv.appendChild(e);
                    if (elementProps[prop].type === Boolean) {
                        containerDiv.classList.add("booleanDiv");
                    }
                    if (elementProps[prop].type === String) {
                        containerDiv.classList.add("stringDiv");
                    }

                    containerNode.propertiesContainer.appendChild(containerDiv);
                }
            }

        });


        for (let i = 0; i < element.childNodes.length; i++) {
            const content = this.buildInterfaceForChildElement(element.childNodes[i]);
            if (content) {
                containerNode.contentContainer.appendChild(content);
            }
        }

        if (element.innerText.trim()) {
            const textArea = document.createElement('paper-textarea');
            textArea.value = element.innerText;
            containerNode.contentContainer.appendChild(textArea);
        }

        const acceptedElements = element.constructor.acceptsElements
        for (let i = 0; i < acceptedElements.length; i++) {
            const acceptedElement = acceptedElements[i];
            const addContentButton = document.createElement('paper-button');
            addContentButton.style.backgroundColor = "indigo";
            addContentButton.style.color = "white";
            containerNode.contentContainer.appendChild(addContentButton);
            if (typeof acceptedElement === "string") {
                addContentButton.innerHTML = acceptedElement
                addContentButton.addEventListener("click", () => {
                    if (acceptedElement == "#text") {
                        const textArea = document.createElement('paper-textarea');
                        containerNode.contentContainer.appendChild(textArea)
                    }
                })
            }
        }
        return containerNode;
    }




    updateConfig(element) {
        let props = Object.keys(this.propInputsMap);

        props.forEach((prop) => {
            const propElement = this.propInputsMap[prop];

            if (propElement.type == "checkbox") {
                propElement.checked = (element.getAttribute(prop) === "true") ? true : false;
            }

            if (propElement.type == "text") {
                propElement.value = element.getAttribute(prop);
            }
        })
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.getAttribute("for")) {
            if (this.elementId !== this.getAttribute("for")) {
                this.for = this.getAttribute("for");
            }
        }

    }

    getConfigurationElementForProperty(propertyName, propertyObject, element) {
        switch (propertyObject.type) {

            case String:

                const inputElement = document.createElement('paper-input');
                inputElement.type = "text";
                inputElement.name = propertyName;
                inputElement.value = propertyObject.value
                inputElement.addEventListener("change", (e) => {
                    element?.setAttribute(propertyName, e.target.value);

                })
                return inputElement;

            case Boolean:
                const checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.name = propertyName;
                checkbox.checked = ((propertyObject.value === "true") || (propertyObject.value === true)) ? true : false;
                checkbox.addEventListener("change", (e) => {
                    const isChecked = e.target.checked;
                    element?.setAttribute(propertyName, String(isChecked));

                })
                return checkbox;

            default:
                return undefined;
        }
    }


    get css() {
        return html`<style>
            :host{
                font-family:"Roboto";
            }
            .booleanDiv{
                display:inline-block;
                padding:10px;
            }

            .stringDiv{
                padding:10px;
            }
        </style>`
    }
}



BaseElement.registerAAElement('generic-editor', GenericEditor);