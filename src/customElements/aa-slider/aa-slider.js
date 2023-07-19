import BaseElement from '../aa-baseElement/baseElement.js';
export default class AASlider extends BaseElement {

    static get category() {
        return "response item";
    }

    static get tag() {
        return 'aa-slider';
    }

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'min': {
                type: Number,
                userDefined: true
            },
            'max': {
                type: Number,
                userDefined: true
            },
            'min-label': {
                type: String,
                userDefined: true
            },
            'max-label': {
                type: String,
                userDefined: true
            },
            'value': {
                type: Number,
                userDefined: false
            },

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AASlider.properties);
    }




    get value() {
        if (!this.inputItem) {
            return this.getAttribute('value');
        }
        return this.inputItem.value;
    }
    set value(val) {
        this.setAttribute('value', val);
        if (this.inputItem) {
            this.inputItem.value = val;
        }

    }

    get minLabel() {
        return this.getAttribute('min-label');
    }

    get maxLabel() {
        return this.getAttribute('max-label');
    }

    set minLabel(val) {
        this.setAttribute('min-label', val);
        if (this.inputItem) {
            this.inputItem.minLabel = val;
        }
    }

    set maxLabel(val) {
        this.setAttribute('max-label', val);
        if (this.inputItem) {
            this.inputItem.maxLabel = val;
        }
    }

    set min(val) {
        this.setAttribute('min', val);
        if (this.inputItem) {
            this.inputItem.min = val;
        }
    }

    set max(val) {
        this.setAttribute('max', val);
        if (this.inputItem) {
            this.inputItem.max = val;
        }
    }


    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });

        // let innerHTML = this.css + `<div class='inputContainer'>${this.html}</div>`;
        // this.root.innerHTML = innerHTML;

        // let minLabel = this.minLabel;
        // let maxLabel = this.maxLabel;
        // let min = this.min || 0;
        // let max = this.max || 100;
        // let value = this.value || (this.min + this.max)/2;
        // this.inputItem = this.root.querySelector('.inputItem');
        // this.minLabelItem = this.root.querySelector('.minLabel');
        // this.maxLabelItem = this.root.querySelector('.maxLabel');

        // if (minLabel) { this.minLabelItem.innerHTML = minLabel;}
        // if (maxLabel) { this.maxLabelItem.innerHTML = maxLabel;}
        // if (value) { this.inputItem.value = value; }

        // this.inputItem.addEventListener('change', (e) => {
        //     this.value = e.target.value;
        // });
    }



    connectedCallback() {
        super.connectedCallback();
        let innerHTML = this.css + `<div class='inputContainer'>${this.html}</div>`;
        this.root.innerHTML = innerHTML;

        let minLabel = this.minLabel;
        let maxLabel = this.maxLabel;
        let value = this.value || (this.min + this.max) / 2;
        this.inputItem = this.root.querySelector('.inputItem');
        this.minLabelItem = this.root.querySelector('.minLabel');
        this.maxLabelItem = this.root.querySelector('.maxLabel');

        if (minLabel) { this.minLabelItem.innerHTML = minLabel; }
        if (maxLabel) { this.maxLabelItem.innerHTML = maxLabel; }
        if (value) { this.inputItem.value = value; }

        this.inputItem.addEventListener('change', (e) => {
            this.value = e.target.value;
        });


    }

    get css() {
        return `<style>
        :host{
            display:block;
            overflow:hidden;        
        }
        </style>
        `;
    }

    get html() {
        let inputElement = customElements.get('paper-slider')
            ? `<paper-slider style="width:100%" class='inputItem min=${this.min} max=${this.max}'></paper-slider>`
            : `<input style="width:100%" type="range" class="inputItem" min="${this.min}" max="${this.max}" value="${(this.max + this.min) / 2}">`;


        let source = html`
        <div>${inputElement}</div>
        <div style="display:flex; justify-content:space-between">
            <div class="minLabel">${this.minLabel || ''}</div>
            <div style="text-align:right" class="maxLabel">${this.maxLabel || ''}</div>
        </div>
        `
        return source;
    }


}

BaseElement.registerAAElement('aa-slider', AASlider);