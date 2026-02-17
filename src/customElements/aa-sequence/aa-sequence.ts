import { AABaseElement, html, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import './aa-jump/aa-jump';

export class AASequence extends AABaseElement {


    static get category(): string {
        return "control";
    }

    static get tag(): string {
        return 'aa-sequence';
    }

    static get properties(): AAPropertiesMap {
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

    static get acceptsElements(): null {
        return null
    }

    static get observedAttributes(): string[] {
        return Object.keys(AASequence.properties);
    }

    target: Element | null = null;
    sIndex: number = 0;
    currentNode: any;

    constructor() {
        super();
    }
    connectedCallback(): void {
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


    get css(): string {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `
    }

    get html(): string {
        return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `
    }

    init(): void {
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

    start(): void {
        this.stopped = false;
        this.next();
    }

    stop(): void {
        this.stopped = true;
    }




    next(name?: any): Promise<void> {

        return new Promise((resolve, _reject) => {


            if (this.stopped) { return; }
            if (this.sIndex >= this.innerFragment.childNodes.length) {

                if (this.parentElement) {
                    this.parentElement!.dispatchEvent(new CustomEvent('endEvent', { detail: { autoDispatch: true }, bubbles: true, composed: true }));
                }
                return;
            }

            if (typeof name === 'string') {
                for (let i = 0; i < this.innerFragment.childNodes.length; i++) {
                    if (this.innerFragment.childNodes[i].getAttribute) if (this.innerFragment.childNodes[i].getAttribute('name') == name) {
                        this.sIndex = i;
                        break;
                    }
                }
            }

            let fragmentChild = this.innerFragment.childNodes[this.sIndex];



            //  if the child is not an element just add it immediately 
            //  and move on to the next, there won't be a connectecCallback Function to execute anyway
            while (fragmentChild.nodeType != Node.ELEMENT_NODE) {

                let fragmentChildCopy = AABaseElement.copy(fragmentChild);
                this.target!.appendChild(fragmentChildCopy);
                this.currentNode = fragmentChildCopy;
                this.sIndex++;
                if (this.sIndex >= this.innerFragment.childNodes.length) {
                    if (this.parentElement) {
                        this.parentElement!.dispatchEvent(new CustomEvent('endEvent', { detail: { autoDispatch: true }, bubbles: true, composed: true }));
                    }
                    return resolve();
                }
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
            this.target!.appendChild(fragmentChildCopy);
            setTimeout(() => resolve());
            // }
        })
    }

    endEventListener(e: Event): void {
        e.stopPropagation();
        const detail = (e as CustomEvent).detail;
        if (detail) {
            if (detail.goto) { this.next(detail.goto); }
            else if (detail.autoDispatch) { this.next(true); }
            else { setTimeout(() => this.next(true)); }
        } else {
            setTimeout(() => this.next(true))
        }
    }

}


AABaseElement.registerAAElement('aa-sequence', AASequence);


