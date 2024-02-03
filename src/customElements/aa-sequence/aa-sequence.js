import { AABaseElement, html } from '../aa-base-element/aa-base-element.js';
import './aa-jump/aa-jump.js';

export class AASequence extends AABaseElement {


    static get category() {
        return "control";
    }

    static get tag() {
        return 'aa-sequence';
    }

    static get properties() {
        return {

            ...AABaseElement.properties,

            name: {
                type: String,
                userDefined: true
            },
            'write-into': {
                type: String,
                userDefined: true
            },

            'should-run': {
                type: Boolean,
                userDefined: true,
                value: true
            },

            'debug': {
                type: Boolean,
                value: false,
                userDefined: false
            },
            'type': {
                type: String, //there should be an array of options type
                userDefined: false
            },
            'stopped': {
                type: Boolean,
                userDefined: false
            },

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AASequence.properties);
    }

    constructor() {
        super();
    }
    connectedCallback() {
        this.setAttributeDefaultValues();
        if (this.diagram) {
            this.produceDiagram();
            return;
        }
        this.addEventListener('endEvent', this.endEventListener.bind(this));
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.init()
        }
    }


    get css() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `
    }

    get html() {
        return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `
    }

    init() {
        this.stopped = false;
        if (this.writeInto) {
            this.target = document.querySelector(this.writeInto);
        } else {
            this.target = this;
        }



        if (typeof this.innerFragment === 'undefined') {
            console.warn('.innerFragment is undefined');
            // this.restoreHeldNodes(this)
            return;
        }


        this.sIndex = 0;
        if (!this.stopped) { this.start() }
    }

    start() {
        this.stopped = false;
        this.next();
    }

    stop() {
        this.stopped = true;
    }




    next(name) {

        return new Promise((resolve, reject) => {
            console.log(this);
            if (this.stopped) { return; }
            if (this.sIndex >= this.innerFragment.childNodes.length) return null;

            if (typeof name === 'string') {
                for (let i = 0; i < this.innerFragment.childNodes.length; i++) {
                    if (this.innerFragment.childNodes[i].getAttribute) if (this.innerFragment.childNodes[i].getAttribute('name') == name) {
                        this.sIndex = i;
                        break;
                    }
                }
            }

            let fragmentChild = this.innerFragment.childNodes[this.sIndex];

            // console.log(fragmentChild.textContent);

            //  if the child is not an element just add it immediately 
            //  and move on to the next, there won't be a connectecCallback Function to execute anyway
            while (fragmentChild.nodeType != Node.ELEMENT_NODE) {

                let fragmentChildCopy = AABaseElement.copy(fragmentChild);
                this.target.appendChild(fragmentChildCopy);
                this.currentNode = fragmentChildCopy;
                this.sIndex++;
                if (this.sIndex >= this.innerFragment.childNodes.length) { return; }
                fragmentChild = this.innerFragment.childNodes[this.sIndex];
            }
            let fragmentChildCopy = AABaseElement.copy(fragmentChild);
            this.currentNode = fragmentChildCopy;
            this.sIndex += 1;
            // if (!fragmentChildCopy._dispatchEndEvent) {
            //     this.target.appendChild(fragmentChildCopy);
            //     // resolve(this.next());
            //     resolve();
            // } else {
            this.target.appendChild(fragmentChildCopy);
            setTimeout(() => resolve());
            // }
        })
    }

    endEventListener(e) {
        e.stopPropagation();
        if (e.detail) {
            if (e.detail.goto) { this.next(e.detail.goto); }
            else if (e.detail.autoDispatch) { this.next(true); }
            else { setTimeout(() => this.next(true)); }
        } else {
            setTimeout(() => this.next(true))
        }
    }

}


AABaseElement.registerAAElement('aa-sequence', AASequence);


