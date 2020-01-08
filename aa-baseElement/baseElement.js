
export default class BaseElement extends HTMLElement {


    constructor() {

        super();
        console.log("baseElement constructor");

        this._props = this.makePropertiesFromAttributes();
    }

    // get(target, name){
    //     debugger;
    // }

    // set(target, name){
    //     debugger;
    // }


    connectedCallback() {
        console.log("baseElement connectedCallback");
    }


    makePropertiesFromAttributes() {

        let ElementClass = customElements.get(this.tagName.toLowerCase());

        let attr = ElementClass.observedAttributes;
        let props = {};
        for (let i = 0; i < attr.length; i++) {
            let prop = this.toCamelCase(attr[i]);
            props[prop] = attr[i];


            if (typeof this[prop] != "undefined") {
                console.log(prop, this[prop]);
                continue;
            } else {
                debugger;
                Object.defineProperty(this, prop, {
                    get: () => {
                        let a = attr[i];
                        debugger;
                        return this.getAttribute(attr[i])
                    },
                    set: (value) => {
                        let a = attr[i];
                        debugger;
                        this.setAttribute(attr[i], value)
                    }
                });
            }
        }
        return props;
    }

    // setAttributes(){
    //     let propKeys = Object.keys(this._props)
    //     for(let i=0; i<propKeys.length; i++){
    //         let p = this._propKeys[i];
    //         if(this[p]){
    //             this.setAttribute(this._props[p])
    //         }
    //     }
    // }
    toCamelCase(str) {
        let words = str.split('-');
        let result = words[0];
        for (let i = 1; i < words.length; i++) {
            result += words[i][0].toUpperCase() + words[i].substr(1);
        }
        return result;
    }

}

