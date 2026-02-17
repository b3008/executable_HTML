import { AABaseElement, html } from '../aa-base-element/aa-base-element';
export class AALabel extends AABaseElement {

    static get tag(): string {
        return 'aa-label';
    }

    root: ShadowRoot;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.root.innerHTML = this.css + this.html;
    }

    get css(): string {
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

    get html(): string {
        return `<slot></slot>`
    }
}

AABaseElement.registerAAElement('aa-label', AALabel);