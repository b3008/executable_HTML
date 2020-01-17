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
        this.started = false;
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
        this.nextStarted = false;
        if (this.writeInto) {
            this.target = document.querySelector(this.writeInto);
        } else {
            this.target = this;
        }

        if (this.started) return;

        if (typeof this.innerFragment === 'undefined') {
            console.warn('.innerFragment is undefined');
            this.restoreHeldNodes(this)
            return;
        }

        
        this.sIndex = 0;

        this.nextCalls = [true];
        this.nextIndex = 0;

        if (!this.stopped) { this.start() }
    }

    start() {
        if(this.started){return;}
        this.started=true;
        this.nextWithTimeout(this.hasNext())
    }

    stop() {
        this.stopped = true;
        this.started = false;
    }

    nextWithTimeout(name){
       this.next(name);
        setTimeout(()=>{
            
            let nextParam = this.hasNext()
            if(nextParam){
                this.nextWithTimeout(nextParam)
            }else{
                if(nextParam==null){
                        this._dispatchEndEvent();        
                }
            }
        },0);
    }


    next(name) {
       
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
        if (this.type === "elements") {
            if (fragmentChild.nodeType != Node.ELEMENT_NODE) {
                this.nextCalls.push(true);
                this.sIndex += 1;
                return;
            }
        }
        let fragmentChildCopy = this.copy(fragmentChild);

        this.sIndex += 1;
        
        this.target.appendChild(fragmentChildCopy);
        AAHolder.scanAndRestore(this.target.childNodes[this.childNodes.length - 1]);
        
        
        if (!fragmentChildCopy._dispatchEndEvent) {
            this.nextCalls.push(true);
        } //else {
            // this.nextCalls.push(false);
            // this.nextCalls.push(true);
        // }

        if(!this.prevPerformance){
            this.prevPerformance = performance.now();

        }else{
            this.time = performance.now() - this.prevPerformance;
            this.prevPerformance = performance.now();

        }
    }


    hasNext() {
        if (this.nextCalls.length > 10000) return null;
        if (this.started === false) return null;

        if (this.nextIndex < this.nextCalls.length) {
            let val = this.nextCalls[this.nextIndex];
            this.nextIndex++;
            return val;
        } else
            return null;
    }


    endEventListener(e) {
        e.stopPropagation();
        let goto = null
        if (e.detail) {
            if (e.detail.goto) {

                goto = e.detail.goto;
                this.nextCalls.push(goto);
            } else {
                this.nextCalls.push(true);
            }
        } else {
            this.nextCalls.push(true);
        }

        if (!this.nextCalls[this.nextIndex]) {
            
                this.nextWithTimeout(this.hasNext())

        }
    }
}




if (!customElements.get('aa-sequence')) {

    if (typeof window.AANodeNames === 'undefined') { window.AANodeNames = []; }
    window.AANodeNames.push('AA-SEQUENCE');

    customElements.define('aa-sequence', AASequence);


}

