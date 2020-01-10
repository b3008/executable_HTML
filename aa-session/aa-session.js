import BaseElement from './../aa-baseElement/baseElement.js'
import AAHolder from '../aa-holder/aa-holder.js';


export default class AASession extends BaseElement {


    static get observedAttributes() {
        return ['name', 'should-run', 'debug'];
    }


    constructor() {
        super();
        console.log("creating session");
        this.sessionID = this.myIdGenerator();
        this.sessionTime = new Date().getTime();

        this.addEventListener("valueSubmit", function (e) {


            // e.stopPropagation();
            var input = {}
            input.data = e.detail.value;
            input.sessionID = myself.sessionID;
            input.sessionTimestamp = myself.sessionTime;
            input.sessionName = myself.name;
            input.variables = Object.keys(e.detail.value);

            myself.mem.saveReplyValue(e.detail.value, false);


            var inputSubmitEvent = new CustomEvent("inputSubmit", { bubbles: true, detail: { input: input } });
            myself.dispatchEvent(inputSubmitEvent);
            //  ema-participant-client needs to catch this and either send it to the server,
            //  or store it locally if we are offline
            //  A reason that ema-participant-client needs to do this, is because it cares
            //  about identification tokens


        })

        this.addEventListener("assignableEnd", function (e) {

            var assignableEndEvent = new CustomEvent("sessionEnd", { bubbles: true, detail: {} });
            myself.dispatchEvent(assignableEndEvent);
        })



    }

    myIdGenerator() {
        // debugger;
        // TODO: generate an id
        return 0;
    }




    connectedCallback() {

        console.log("attaching session");

        this.innerHTML = `<template>${this.innerHTML}</template>`
        // if (typeof this.mem == "undefined") {
        //     this.mem = document.createElement("ema-memory");
        //     this.mem.name = this.name;
        //     this.appendChild(this.mem);
        // }

        if(this.debug=="true") this._debug=true;
        else this._debug = false;    
        
        //there should be two ways this functions, one in editor mode
        //and another in client mode
        //  RESEARCHER_ENVIRONMENT = true;
        var myself = this;
        if (typeof RESEARCHER_ENVIRONMENT != "undefined") {
            if (RESEARCHER_ENVIRONMENT) {
                if (this.shouldRun) this.run();
                else {
                    this.display();
                    this.$.editor.hidden = false;
                }
                return;
            }
        }
        else {
            this.shouldRun = true;
        }
        if (this.shouldRun) {
            this.run();
        }


    }

    getElementContent(element) {
        if (element.nodeName == "SCRIPT") {

        }
        if (element.nodeName == "#text") {
            return element.textContent;
        }
        if (element.nodeName == "#comment") {

            return "<!--" + element.textContent + "!-->";
        }
        if (element.nodeName == "TEMPLATE") {
            return this.getElementContent(element.content);
        }
        if (element.nodeName == "#document-fragment") {
            var result = "";
            for (var i = 0; i < element.childNodes.length; i++) {
                result += this.getElementContent(element.childNodes[i]);
            }
            console.log("result is ", result)
            return result;
        }
        else {
            return element.outerHTML;

        }

    }


    display() {

        var myself = this;


        this.initialNodesList = [];
        for (var i = 0; i < this.childNodes.length; i++) {
            this.initialNodesList.push(this.childNodes[i]);
        }
        this.sourceText = ""
        for (var i = 0; i < this.initialNodesList.length; i++) {
            var child = this.initialNodesList[i];
            this.sourceText += this.getElementContent(child);
        }
        this.$.display.innerHTML = hljs.highlightAuto(this.sourceText).value;

        // this.$.display.innerHTML = Prism.highlight(sourceText, Prism.languages.javascript)

        this.$.display.addEventListener("input", function (e) {
            this.sourceText = hljs.highlightAuto(this.target.innerText).value;
            myself.$.display.innerHTML = this.sourceText
            // console.log("change")
        })

        this.$.updateButton.addEventListener("click", function () {
            myself.updateFromEditor();
        });

    }

    updateFromEditor() {

        var t = document.createElement("template");
        t.innerHTML = this.sourceText;
        var session = document.createElement("aa-session");
        session.shouldRun = true;
        Polymer.dom(session).appendChild(t);
        this.appendChild(session)
    }







    run() {

        this.started = true;
    
        this.templateHolders = [];


        this.emaElementsList = [];
        this.holderList = [];
        this.nodesToAppendAfterChild = [];

    
        // return;
        


        this.referencedItems = this.getReferencedItems(this);
        this.initialChildNodesList = [];
        for (var i = 0; i < this.childNodes.length; i++) {
            this.initialChildNodesList.push(this.childNodes[i]);
        }
        for (var i = 0; i < this.initialChildNodesList.length; i++) {
            var child = this.initialChildNodesList[i];


            if (typeof child.nodeName != "undefined") {
                console.log(child.nodeName);
                if (child.nodeName == "TEMPLATE") {

                    if(this._debug){
                        this.dispatchEvent(new CustomEvent("debug", {detail: "found template"}));
                    }
                    this._analyzeChildNodesForElement(child.content);
                    // var imported = document.importNode(child.content,true);
                    this.appendChild(child.content);

                    this._restoreHeldNodes(this);

                }
            }

        }


    }




    getReferencedItems(element) {

        var referencedItems = [];
        if (this._isAAElement(element)) referencedItems.push(element);
        for (var i = 0; i < element.childNodes.length; i++) {
            var child = element.childNodes[i];
            if (this._isAAElement(child)) {
                referencedItems = referencedItems.concat(this.getReferencedItems(child))
            }
        }
        return referencedItems;
    }


















  



}




if (!customElements.get('aa-session')) {

    if (typeof window.AANodeNames == "undefined") { window.AANodeNames = [];}
    window.AANodeNames.push("AA-SESSION");

    customElements.define('aa-session', AASession);

   
}






