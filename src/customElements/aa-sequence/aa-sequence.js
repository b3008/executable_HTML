import BaseElement from './../aa-baseElement/baseElement.js';
import './aa-jump/aa-jump.js';



export default class AASequence extends BaseElement {

    static get properties() {
        return {
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
        // this.root = this.attachShadow({ mode: 'open' });
        // this.root.innerHTML = '<slot></slot>';
    }
    connectedCallback() {
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

            // if (fragmentChild.nodeName == "aa-screen") debugger;
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
                setTimeout(() => resolve());
            }
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






    // static toSVG(node, width){
    //     let drawing = []
    //     let line = [];
    //     drawing.push(line);
    //     for (let i = 0; i < node.children.length; i++) {
    //            if (node.children[i].tagName == "AA-SCREEN") {
    //                line.push(AAScreen.toSVG)
    //            }
    //     }
    // }


//     static toSVG(node) {


//         var draw = SVG().addTo('body').size(300, 300)
// var rect = draw.rect(100, 100).attr({ fill: '#f06' })
//         debugger; 

//         let drawing = '';

//         let x = 10;
//         let y = 10;
//         let artBoardWidth = 550;
//         let aaScreenWidth = 30;
//         let aaScreenHeight = 50;
//         let gapWidth = 50;
//         let gapHeight = 50;


//         let lineStart = [0, 0];
//         let lineEnd = [0,0];


//         let markerWidth = 10;
//         for (let i = 0; i < node.children.length; i++) {

//             // if (node.children[i].tagName == "AA-SCREEN") {
//                 drawing += html`<rect x="${x}" y="${y}" width="${aaScreenWidth}" height="${aaScreenHeight}" stroke="black" fill="transparent"
//     stroke-width="3" />`;

//                 lineStart = [x + aaScreenWidth, y + aaScreenHeight / 2]
//                 x = x + aaScreenWidth + gapWidth;
//                 if (x > artBoardWidth) {
//                     x = 10;
//                     y = aaScreenHeight + gapHeight;
//                 }
//                 lineEnd = [x - markerWidth, y+aaScreenHeight/2 ];


//                 if (node.children[i + 1]) {
//                     if (node.children[i + 1].tagName == "AA-SCREEN") {
                        
//                         drawing += `<line x1="${lineStart[0]}" y1="${lineStart[1]}" x2="${lineEnd[0]}" y2="${lineEnd[1]}" stroke="#000" stroke-width="3" marker-end="url(#arrowhead)" />`;
//                     }

//                     if (node.children[i + 1].tagName == "AA-CHOOSE") {
//                         drawing += `<line x1="${lineStart[0]}" y1="${lineStart[1]}" x2="${lineEnd[0]}" y2="${lineEnd[1]}" stroke="#000" stroke-width="3" marker-end="url(#arrowhead)" />`;
//                     }

//                     if (node.children[i + 1].tagName == "AA-FUNCTION-RANDOM") {
//                         drawing += `<line x1="${lineStart[0]}" y1="${lineStart[1]}" x2="${lineEnd[0]}" y2="${lineEnd[1]}" stroke="#000" stroke-width="3" marker-end="url(#arrowhead)" />`;
//                     }
//                 }
    
//             // }



            





//         }


//         let result = html`
//             <svg width="${artBoardWidth}" height="550" version="1.1" xmlns="http://www.w3.org/2000/svg">
            
//                 <defs>
//                     <marker id="arrowhead" markerWidth="${markerWidth}" markerHeight="5" refX="0" refY="1.5" orient="auto">
//                         <polygon points="0 0, 3 1.5, 0 3" />
//                     </marker>
//                 </defs>
            
//                 ${drawing}
//             </svg>`;

//         return result;

//     }






}



BaseElement.registerAAElement('aa-sequence', AASequence);


