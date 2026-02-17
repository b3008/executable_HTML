import { AABaseElement } from '../aa-base-element/aa-base-element.js';
import '../aa-memory/aa-memory.js';
import * as html2jsl from '../../lib/html2jsl/html2jsl.js';

import { v4 } from 'uuid';
import { AAScreenValueSubmitEventDetail } from '../aa-screen/aa-screen.js';
import { AAMemory } from '../aa-memory/aa-memory.js';

export type AASessionInput = {
    data: any,
    sessionId: string,
    sessionTimestamp: number,
    sessionName: string,
    variables: string[]
}

export type AASessionInputSubmitEventDetail = {
    input: AASessionInput
}

export class AASession extends AABaseElement {

    static get tag() {
        return 'aa-session'
    }

    static get properties() {

        return {

            ...AABaseElement.properties,


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
        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {

        return Object.keys(AASession.properties);
    }


    myTemplate: HTMLTemplateElement;
    _mem: AAMemory;
    sessionId: string = v4();
    sessionTime: number = 0;
    declare name: string;
    declare debug: boolean;
    declare diagram: boolean;
    declare shouldRun: boolean;
    declare diagramTransparent: boolean;



    constructor() {
        super();


        this.myTemplate = document.createElement('template');
        this.myTemplate.innerHTML = this.innerHTML;

        this.innerHTML = '';

        this._mem = document.createElement('aa-memory') as AAMemory;
        this.addEventListener('valueSubmit', (e: any) => {
            const detail: AAScreenValueSubmitEventDetail = e.detail;


            let input: AASessionInput = {
                data: detail.value,
                sessionId: this.sessionId,
                sessionTimestamp: this.sessionTime,
                sessionName: this.name,
                variables: Object.keys(detail.value),
            };
            // TODO:  this._mem.saveReplyValue(e.detail.value, false);
            Object.keys(e.detail.value).forEach((key) => {
                this._mem.setData(key, e.detail.value[key]);
            });


            const newDetail: AASessionInputSubmitEventDetail = { input };
            let inputSubmitEvent = new CustomEvent('sessionInputSubmit', { bubbles: true, detail: newDetail, composed: true });

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

        return v4();
    }

    connectedCallback() {

        this.innerHTML = '';
        this.setAttributeDefaultValues()



        if (this.diagram === true) {
            this.produceDiagram()
            return;
        }
        this.sessionId = this.myIdGenerator();
        this.sessionTime = new Date().getTime();
        let sessionDatum = Object.keys(this.dataset);
        for (let i in sessionDatum) {
            this.setData(sessionDatum[i], this.dataset[sessionDatum[i]]);
        }
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.run();
        }

        setTimeout(() => {
            this.dispatchEvent(new CustomEvent("sessionReady", { bubbles: true }));
        }, 0);
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
        AABaseElement.scanAndReplace(myTemplateClone);
        this.attachTemplateChildNodesToMyself(myTemplateClone);
    }

    getData(name) {
        return this._mem.getData(name);
    }

    setData(name, value) {

        return this._mem.setData(name, value);
    }

    getDataDump() {
        return this._mem.getDataDump();
    }


    toJSON() {

        let result = {};
        result[this.tagName] = this.getAttributes();

        let childNodes: any = [];
        for (let i = 0; i < this.originalChildNodes.length; i++) {
            let child = this.originalChildNodes[i];
            let el = AABaseElement.nodeToJSON(child);
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

        let argsStrings: any = [];
        let childNodes = (this.myTemplate.content.childNodes[0] as any).content.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            let addition = html2jsl.nodeToJSL(childNodes[i]);
            if (addition) {
                argsStrings.push(html2jsl.nodeToJSL(childNodes[i]));

            }
        }




        let templateString = html2jsl.formatJSLResult("TEMPLATE", {}, argsStrings);
        let final = html2jsl.formatJSLResult("AA_SESSION", attrObj, [templateString]);

        return final;
    }



    get originalChildNodes() {
        if (this.myTemplate.content.childNodes.length == 0) return [];
        if (!(this.myTemplate.content.childNodes[0] as any).content) return this.childNodes;
        return (this.myTemplate.content.childNodes[0] as any).content.childNodes;
    }




}

AABaseElement.registerAAElement('aa-session', AASession);







