import BaseElement from './../aa-baseElement/baseElement.js';
import './../aa-memory/aa-memory.js';
import * as html2jsl from './../../lib/html2jsl/html2jsl.js';
import { AASequence } from '../../index.js';

export default class AASession extends BaseElement {

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'should-run': {
                type: Boolean,
                userDefined: true
            },

            'debug': {
                type: Boolean,
                value: false,
                userDefined: false
            },

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AASession.properties);
    }



    constructor() {
        super();


        this.myTemplate = document.createElement('template');
        this.myTemplate.innerHTML = this.innerHTML;
        this.innerHTML = '';

        // this.root = this.attachShadow({ mode: 'closed' });
        // this.root.innerHTML = '<template><slot></slot></template>'
        this._mem = document.createElement('aa-memory');
        this.addEventListener('valueSubmit', (e) => {


            // e.stopPropagation();
            let input = {
                data: e.detail.value,
                sessionID: this.sessionID,
                sessionTimestamp: this.sessionTime,
                sessionName: this.name,
                variables: Object.keys(e.detail.value),
            };
            // TODO:  this._mem.saveReplyValue(e.detail.value, false);


            let inputSubmitEvent = new CustomEvent('inputSubmit', { bubbles: true, detail: { input } });
            this.dispatchEvent(inputSubmitEvent);
            //  ema-participant-client needs to catch this and either send it to the server,
            //  or store it locally if we are offline
            //  A reason that ema-participant-client needs to do this, is because it cares
            //  about identification tokens


        })

        this.addEventListener('endEvent', (e) => {
            if (!this.debug) e.stopPropagation();
            let sessionEndEvent = new CustomEvent('sessionEndEvent', { bubbles: true, detail: 'sessionEnd' });
            this.dispatchEvent(sessionEndEvent);
        })


    }

    myIdGenerator() {

        return 0;
    }

    connectedCallback() {
        // console.log(this.tagName+"#"+this.id,"connected");

        this.sessionID = this.myIdGenerator();
        this.sessionTime = new Date().getTime();
        let sessionDatum = Object.keys(this.dataset);
        for (let i in sessionDatum) {
            this.setData(sessionDatum[i], this.dataset[sessionDatum[i]]);
        }
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.run();
        }
    }


    attachTemplateChildNodesToMyself(templateClone) {

        while (templateClone.content.childNodes.length) {
            //  if there's a direct template child, we want its children appended too
            if (templateClone.content.childNodes[0].nodeName === "TEMPLATE") {
                while (templateClone.content.childNodes[0].content.childNodes.length) {
                    this.appendChild(templateClone.content.childNodes[0].content.childNodes[0]);
                }
                //  we are not appending the template element elsewhere 
                //  so throw it way so that the childnode count can be reduced
                templateClone.content.childNodes[0].remove();
            } else {
                this.appendChild(templateClone.content.childNodes[0]);
            }
        }
    }

    run() {

        let myTemplateClone = this.myTemplate.cloneNode(true);
        BaseElement.scanAndReplace(myTemplateClone);
        this.attachTemplateChildNodesToMyself(myTemplateClone);
    }

    getData(name) {
        return this._mem.getData(name);
    }
    setData(name, value) {

        return this._mem.setData(name, value);
    }

    getDataDump() {
        return this._mem.dataset;
    }


    toJSON() {
        // return super.toJSON();

        let result = {};
        result[this.tagName] = this.getAttributes();

        let childNodes = [];
        for (let i = 0; i < this.originalChildNodes.length; i++) {
            let child = this.originalChildNodes[i];
            let el = BaseElement.nodeToJSON(child);
            if (el) {
                childNodes.push(el);
            }
        }
        result[this.tagName].childNodes = [{ "template": { childNodes: childNodes } }];
        return result;

    }

    toJSL() {
        let attrNames = this.getAttributeNames();
        let attrObj = {};
        for (let i = 0; i < attrNames.length; i++) {
            if (this.getAttribute(attrNames[i]) !== 'undefined') {
                attrObj[attrNames[i]] = this.getAttribute(attrNames[i]);
            }
        }

        let argsStrings = [];
        let childNodes = this.myTemplate.content.childNodes[0].content.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            let addition = html2jsl.nodeToJSL(childNodes[i]);
            if (addition) {
                argsStrings.push(html2jsl.nodeToJSL(childNodes[i]));

            }
        }

        console.log(argsStrings);

        
        let templateString = html2jsl.formatJSLResult("TEMPLATE", {}, argsStrings);
        let final = html2jsl.formatJSLResult("AA_SESSION", attrObj, [templateString]);

        return final;
    }



    get originalChildNodes(){
        if(!this.myTemplate.content.childNodes[0].content) return this.childNodes;
        return this.myTemplate.content.childNodes[0].content.childNodes;
    }

    toSVG() {

        let childNodes = this.originalChildNodes;
        window.qqq = childNodes[1];
        
        for (let i = 0; i < childNodes.length; i++) {

            console.log(childNodes[i], childNodes[i].toSVG);
            if(childNodes[i].tagName==="AA-SEQUENCE" ){
                return AASequence.toSVG(childNodes[i]);
            }

        }

    }

}

BaseElement.registerAAElement('aa-session', AASession);







