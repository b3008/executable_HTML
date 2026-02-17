import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';

export class AAFunctionRandom extends AABaseElement {

    static get tag(): string {
        return 'aa-function-random'
    }

    static get properties(): AAPropertiesMap {
        return {
            name: {
                type: String,
                userDefined: true
            },

            "debug": {
                type: Boolean,
                value: false,
                userDefined: false
            },

            "value": {
                type: Number,
                userDefined: false,
            },

            "min": {
                type: Number,
                userDefined: true,
            },

            "max": {
                type: Number,
                userDefined: true,
            },


        }
    }

    static get acceptsElements(): null {
        return null
    }

    static get observedAttributes(): string[] {
        return Object.keys(AAFunctionRandom.properties);
    }



    constructor() {

        super();
    }

    connectedCallback(): void {

        let memory = this.getMemory();
        if (memory) memory.setData(this.name, this.value);
        this._dispatchEndEvent({ autoDispatch: true });
        if (!this.debug) { this.remove(); }
    }


    get value(): number {
        var parsedMin = parseFloat(this.min);
        var parsedMax = parseFloat(this.max);
        let val = this.getRandomInt(parsedMin, parsedMax);
        let memory = this.getMemory();
        if (memory) memory.setData(AABaseElement.getVariableName(this), val);
        return val;
    }

    getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + 0.5) + min;
    }


}

AABaseElement.registerAAElement('aa-function-random', AAFunctionRandom);

