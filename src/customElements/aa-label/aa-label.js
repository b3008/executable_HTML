import { AABaseElement, html } from '../aa-base-element/aa-base-element.js';
export class AALabel extends AABaseElement {

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

    get css() {
        return html`
            <style>
                    :host{
                        display:block;
                        font-family: "Roboto Flex", Roboto, Noto, sans-serif;
                        font-weight:bold;
                        margin-top:40px;
                        margin-bottom:10px;
                        
                    }

            </style>
        `
    }

    get html() {
        return `<slot></slot>`
    }
}

AABaseElement.registerAAElement('aa-label', AALabel);