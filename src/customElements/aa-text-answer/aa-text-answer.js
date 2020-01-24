import BaseElement from '../aa-baseElement/baseElement.js';
export default class AATextAnswer extends BaseElement {

    static get observedAttributes() {
        return [
            'long',
            'label',
            'name',
            'value'
        ];
    }


    changeInputItem(type) {
        if (type === 'long') {
            let value = this.value;
            let label = this.label;
            this.inputItem = customElements.get('paper-textarea') ?
                document.createElement('paper-textarea') : document.createElement('textarea');
            this.inputItem.value = value;
            this.inputItem.label = label;
            this.inputItem.classList.add('inputItem');
            this.fixBugInPaperTextarea(this.inputItem);
            this.inputItem.addEventListener('change', (e) => {
                this.value = e.target.value;
            })
            this.root.querySelector('.inputItem').replaceWith(this.inputItem);
        } else {
            let value = this.value;
            let label = this.label;
            this.inputItem = customElements.get('paper-input') ?
                document.createElement('paper-input') : document.createElement('input');
            this.inputItem.value = value;
            this.inputItem.label = label;
            this.inputItem.classList.add('inputItem');
            this.inputItem.addEventListener('change', (e) => {
                this.value = e.target.value;
            })
            this.root.querySelector('.inputItem').replaceWith(this.inputItem);
        }
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

    get label() {
        return this.getAttribute('label');
    }

    set label(val) {
        this.setAttribute('label', val);
        if (this.inputItem) {
            this.inputItem.label = val;
        }
    }

    set long(val) {
        this.setAttribute('long', val);
        if (val) {
            this.changeInputItem('long');
        } else {
            this.changeInputItem('short');
        }
    }

    get long() {
        return this.getAttribute('long');
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        let html = (this.long || (this.long === '')) ? this.longHtml : this.html;

        this.root.innerHTML = this.css + `<div class='inputContainer'>${html}<div>`;

        let label = this.label;
        let value = this.value;
        this.inputItem = this.root.querySelector('.inputItem');
        if (label) { this.inputItem.label = label; }
        if (value) { this.inputItem.value = value; }
        this.fixBugInPaperTextarea(this.inputItem);

        this.inputItem.addEventListener('change', (e) => {
            this.value = e.target.value;
        });
    }


    fixBugInPaperTextarea(inputItem) {
        // solves issue documented here: https://github.com/PolymerElements/paper-input/issues/125

        setTimeout(() => {
            if (inputItem.tagName === 'PAPER-TEXTAREA') {
                inputItem.root.childNodes[2].children[1].textarea.style.overflow = 'hidden';
                let width = window.getComputedStyle(this.root.querySelector('.inputContainer')).width;

                inputItem.root.childNodes[2].style.width = width;
                inputItem.addEventListener('focus', (e) => {
                    let width = window.getComputedStyle(this.root.querySelector('.inputContainer')).width;
                    inputItem.root.childNodes[2].style.width = width;
                })

                window.addEventListener('resize', () => {
                    inputItem.root.childNodes[2].style.width = '';
                    setTimeout(() => {
                        let width = window.getComputedStyle(this.root.querySelector('.inputContainer')).width;
                        inputItem.root.childNodes[2].style.width = width;
                    }, 100);

                })
            };
        }, 0);
        
    }

    connectedCallback() {
        super.connectedCallback();


    }

    get css() {
        return `<style>
        :host{
            display:block;
            overflow:hidden;        
        }
        paper-textarea textarea {
           overflow:hidden;
        }
        </style>`;
    }

    get html() {
        let inputElement = customElements.get('paper-input')
            ? `<paper-input class='inputItem'></paper-input>`
            : `<input class='inputItem'>`;
        return html`${inputElement}`
    }
    get longHtml() {
        let inputElement = customElements.get('paper-input')
            ? `<paper-textarea class='inputItem'></paper-input>`
            : `<textarea class='inputItem'></textarea`;
        return html`${inputElement}`
    }

}

BaseElement.registerAAElement('aa-text-answer', AATextAnswer);