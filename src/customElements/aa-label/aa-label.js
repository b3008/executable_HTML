import BaseElement from '../aa-baseElement/baseElement.js';
export default class AALabel extends BaseElement {

    static get tag() { 
        return 'aa-label';
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        super.connectedCallback();
        this.root.innerHTML = this.css + this.html;
    }

    get css(){
        return html`
            <style>
                    :host{
                        display:block;
                        font-family: Roboto, Noto, sans-serif;
                        font-weight:bold;
                        margin-top:40px;
                        margin-bottom:10px;
                        
                    }

            </style>
        `
    }

    get html(){
        return `<slot></slot>`
    }
}

BaseElement.registerAAElement('aa-label', AALabel);