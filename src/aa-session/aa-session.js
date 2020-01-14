import BaseElement from './../aa-baseElement/baseElement.js'
import  '../aa-holder/aa-holder.js';
import  './../aa-memory/aa-memory.js'

export default class AASession extends BaseElement {


    static get observedAttributes() {
        return ['name', 'should-run', 'debug'];
    }


    constructor() {
        super();
        // console.log('creating session');

        this.mem = document.createElement('aa-memory');

        this.myTemplate = document.createElement('template');
        this.myTemplate.innerHTML = this.innerHTML;
        this.innerHTML = '';

        // this.root = this.attachShadow({ mode: 'closed' });
        // this.root.innerHTML = '<template><slot></slot></template>'

        this.addEventListener('valueSubmit', (e) => {


            // e.stopPropagation();
            let input = {
                data: e.detail.value,
                sessionID: this.sessionID,
                sessionTimestamp: this.sessionTime,
                sessionName: this.name,
                variables: Object.keys(e.detail.value),
            };
            this.mem.saveReplyValue(e.detail.value, false);


            let inputSubmitEvent = new CustomEvent('inputSubmit', { bubbles: true, detail: { input } });
            this.dispatchEvent(inputSubmitEvent);
            //  ema-participant-client needs to catch this and either send it to the server,
            //  or store it locally if we are offline
            //  A reason that ema-participant-client needs to do this, is because it cares
            //  about identification tokens


        })

        this.addEventListener('assignableEnd', (e) => {

            let assignableEndEvent = new CustomEvent('sessionEnd', { bubbles: true, detail: {} });
            this.dispatchEvent(assignableEndEvent);
        })



    }

    myIdGenerator() {
        // debugger;
        // TODO: generate an id
        return 0;
    }




    connectedCallback() {

        // console.log('attaching session');
        this.sessionID = this.myIdGenerator();
        this.sessionTime = new Date().getTime();


        // console.log('shouldRun = ', this.shouldRun);
        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this.run();
        }


    }

    getElementContent(element) {
        if (element.nodeName === 'SCRIPT') {

        } else
            if (element.nodeName === '#text') {
                return element.textContent;
            } else
                if (element.nodeName === '#comment') {

                    return '<!--' + element.textContent + '!-->';
                } else
                    if (element.nodeName === 'TEMPLATE') {
                        return this.getElementContent(element.content);
                    } else
                        if (element.nodeName === '#document-fragment') {
                            let result = '';
                            for (let i = 0; i < element.childNodes.length; i++) {
                                result += this.getElementContent(element.childNodes[i]);
                            }
                            // console.log('result is ', result)
                            return result;
                        }
                        else {
                            return element.outerHTML;
                        }

    }


    display() {

        this.display = this.querySelector('#display');
        this.initialNodesList = [];
        for (let i = 0; i < this.childNodes.length; i++) {
            this.initialNodesList.push(this.childNodes[i]);
        }
        this.sourceText = '';
        for (let i = 0; i < this.initialNodesList.length; i++) {
            let child = this.initialNodesList[i];
            this.sourceText += this.getElementContent(child);
        }
        this.display.innerHTML = hljs.highlightAuto(this.sourceText).value;

        // this.$.display.innerHTML = Prism.highlight(sourceText, Prism.languages.javascript)

        this.display.addEventListener('input', (e) => {
            // this.sourceText = hljs.highlightAuto(this.target.innerText).value;
            // this.display.innerHTML = this.sourceText
            // console.log('change')
        })

        this.$.updateButton.addEventListener('click', () => {
            this.updateFromEditor();
        });

    }

    updateFromEditor() {

        let t = document.createElement('template');
        t.innerHTML = this.sourceText;
        let session = document.createElement('aa-session');
        session.shouldRun = true;
        session.appendChild(t);
        this.appendChild(session)
    }







    run() {

        this.started = true;

        this.templateHolders = [];
        this.holderList = [];
        this.nodesToAppendAfterChild = [];




        this.referencedItems = this.getReferencedItems(this);



        this._analyzeChildNodesForElement(this.myTemplate.content);
        this.appendChild(this.myTemplate.content);

        if ((this.shouldRun === null) || (this.shouldRun === true)) {
            this._restoreHeldNodes(this);
        }


        this.initialChildNodesList = [];


        for (let i = 0; i < this.childNodes.length; i++) {
            this.initialChildNodesList.push(this.childNodes[i]);
        }
        for (let i = 0; i < this.initialChildNodesList.length; i++) {
            let child = this.initialChildNodesList[i];


            if (typeof child.nodeName != 'undefined') {
                // console.log(child.nodeName);
                if (child.nodeName === 'TEMPLATE') {


                    this._analyzeChildNodesForElement(child.content);
                    this.appendChild(child.content);

                    if ((this.shouldRun === null) || (this.shouldRun === true)) {
                        this._restoreHeldNodes(this);
                    }

                }
            }

        }


    }




    getReferencedItems(element) {

        let referencedItems = [];
        if (this._isAAElement(element)) referencedItems.push(element);
        for (let i = 0; i < element.childNodes.length; i++) {
            let child = element.childNodes[i];
            if (this._isAAElement(child)) {
                referencedItems = referencedItems.concat(this.getReferencedItems(child))
            }
        }
        return referencedItems;
    }






















}




if (!customElements.get('aa-session')) {
    window.AANodeNames = window.AANodeNames|| []; 
    window.AANodeNames.push('AA-SESSION');
    customElements.define('aa-session', AASession);
}






