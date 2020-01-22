import BaseElement from './../aa-baseElement/baseElement.js'
import AAJump from "./aa-jump/aa-jump.js";



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
        return new Promise((resolve, reject) => {


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

                let fragmentChildCopy = BaseElement.copy(fragmentChild);
                this.target.appendChild(fragmentChildCopy);
                this.currentNode = fragmentChildCopy;
                this.sIndex++;
                if (this.sIndex >= this.innerFragment.childNodes.length) { return; }
                fragmentChild = this.innerFragment.childNodes[this.sIndex];
            }
            let fragmentChildCopy = BaseElement.copy(fragmentChild);
            this.currentNode = fragmentChildCopy;
            this.sIndex += 1;
            if (!fragmentChildCopy._dispatchEndEvent) {
                resolve(this.next());
            } else {
                this.target.appendChild(fragmentChildCopy);
                setTimeout(() => {
                    resolve();
                }, 0);
            }
            if (!this.prevPerformance) {
                this.prevPerformance = performance.now();
            } else {
                this.time = performance.now() - this.prevPerformance;
                this.prevPerformance = performance.now();
            }
        })
    }

    endEventListener(e) {
        e.stopPropagation();
        let goto = null
        if (e.detail) {
            if (e.detail.goto) {

                this.next(e.detail.goto)

            }
            else if (e.detail.autoDispatch) {
                this.next(true);
            } else {
                setTimeout(() => {
                    this.next(true);
                })
            }
        } else {
            setTimeout(() => {
                this.next(true);
            })
        }
    }

}

BaseElement.registerAAElement('aa-sequence', AASequence);


