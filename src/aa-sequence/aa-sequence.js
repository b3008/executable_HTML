import BaseElement from './../aa-baseElement/baseElement.js'
import AAFunctionRandom from '../aa-function/aa-function-random.js';
import AAJump from "./aa-jump/aa-jump.js";
import AAHolder from '../aa-holder/aa-holder.js';


export default class AASequence extends BaseElement {


    static get observedAttributes() {
        return ['name', 'write-into', 'should-run', 'debug', 'type', "stopped"];
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>';
    }
    connectedCallback() {
        this.root.addEventListener("endEvent", this.endEventListener.bind(this));
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.init()
        };
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
            this.restoreHeldNodes(this)
            return;
        }


        this.sIndex = 0;
        if (!this.stopped) { this.start() }
    }

    start() {
        if (this.stopped) { return; }
        this.stopped = false;
        this.next();
    }

    stop() {
        this.stopped = true;
    }




    next(name) {

        if (this.stopped) { return; }
        if (this.sIndex >= this.innerFragment.childNodes.length) return null;

        if (typeof name === "string") {
            for (let i = 0; i < this.innerFragment.childNodes.length; i++) {
                if (this.innerFragment.childNodes[i].getAttribute) if (this.innerFragment.childNodes[i].getAttribute("name") == name) {
                    this.sIndex = i;
                    break;
                }
            }
        }

        let fragmentChild = this.innerFragment.childNodes[this.sIndex];
        //  if the child is not an element just add it immediately 
        //  and move on to the next, there won't be a connectecCallback Function to execute anyway
        while (fragmentChild.nodeType != Node.ELEMENT_NODE) {

            let fragmentChildCopy = this.copy(fragmentChild);
            this.target.appendChild(fragmentChildCopy);
            this.currentNode = fragmentChildCopy;
            this.sIndex++;
            if (this.sIndex >= this.innerFragment.childNodes.length) {
                return;
            }
            fragmentChild = this.innerFragment.childNodes[this.sIndex];
            // return;
        }


        let fragmentChildCopy = this.copy(fragmentChild);
        this.currentNode = fragmentChildCopy;
        this.sIndex += 1;



        if (!fragmentChildCopy._dispatchEndEvent) {
            this.next();
        } else {
            this.target.appendChild(fragmentChildCopy);
            AAHolder.scanAndRestore(this.target.childNodes[this.childNodes.length - 1]);
        }

        if (!this.prevPerformance) {
            this.prevPerformance = performance.now();

        } else {
            this.time = performance.now() - this.prevPerformance;
            this.prevPerformance = performance.now();
        }
    }




    endEventListener(e) {
        e.stopPropagation();
        let goto = null
        if (e.detail) {
            if (e.detail.goto) {
                this.next(e.detail.goto)
            }
        } else {
            this.next(true);
        }
    }

}


if (!customElements.get('aa-sequence')) {
    if (typeof window.AANodeNames === 'undefined') { window.AANodeNames = []; }
    window.AANodeNames.push('AA-SEQUENCE');
    customElements.define('aa-sequence', AASequence);
}

