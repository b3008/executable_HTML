import AAHolder from '../aa-session/aa-session.js';


export default class AASession extends HTMLElement {


    static get observedAttributes() {
        return ['name', 'should-run'];
    }




    

    // properties:
    // {
    //     name: { type: String, reflectToAttribute: true },
    //     _id: { type: String },
    //     type: { type: String },

    //     emaItemType: {
    //         type: Array,
    //         value: ["Assignable"],
    //         reflectToAttribute: false
    //     },

    //     emaReferencedItems: { type: Array, value: [] },




    //     shouldRun: {
    //         type: Boolean,
    //         value: false,
    //         reflectToAttribute: false,
    //         reflectToConfig: false
    //     }
    // },


    constructor() {
        super();
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


        // if (typeof this.mem == "undefined") {
        //     this.mem = document.createElement("ema-memory");
        //     this.mem.name = this.name;
        //     this.appendChild(this.mem);
        // }


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
        console.log("created session");
        this.templateHolders = [];


        this.emaElementsList = [];
        this.holderList = [];
        this.nodesToAppendAfterChild = [];

        console.log("attaching session")
        // return;
        var myself = this;
        console.log(this.name);



        this.emaReferencedItems = this.getReferencedItems(this);
        this.initialChildNodesList = [];
        for (var i = 0; i < this.childNodes.length; i++) {
            this.initialChildNodesList.push(this.childNodes[i]);
        }
        for (var i = 0; i < this.initialChildNodesList.length; i++) {
            var child = this.initialChildNodesList[i];


            if (typeof child.nodeName != "undefined") {
                console.log(child.nodeName);
                if (child.nodeName == "TEMPLATE") {

                    this.analyzeChildNodesForElement(child.content);
                    // var imported = document.importNode(child.content,true);
                    this.appendChild(child.content);

                    this.restoreHeldNodes(this);

                }
            }

        }


    }




    getReferencedItems(element) {

        var emaReferencedItems = [];
        if (this.isEmaElement(element)) emaReferencedItems.push(element);
        for (var i = 0; i < element.childNodes.length; i++) {
            var child = element.childNodes[i];
            if (this.isEmaElement(child)) {
                emaReferencedItems = emaReferencedItems.concat(this.getReferencedItems(child))
            }
        }
        return emaReferencedItems;
    }

    createFragmentForElement(element) {

        var fragment = document.createDocumentFragment();
        //  first get references to the children,
        //  because the element.children array will be modified as they are appended elsewhere
        var childNodes = [];
        for (var i = 0; i < Polymer.dom(element).childNodes.length; i++) {
            childNodes.push(Polymer.dom(element).childNodes[i]);
        }
        // the append each child to the fragment
        for (var i = 0; i < childNodes.length; i++) {
            fragment.appendChild(childNodes[i])
        }
        return fragment;
    }

    replaceElementWithHolder(element) {


        var holder = document.createElement("ema-holder");
        holder.id = element.getAttribute("name") + "-holder";
        holder.heldElementOuterHTML = element.outerHTML;

        // holder.innerHTML = "holder for " + element.nodeName + " with name " + element.getAttribute("name")
        console.log("replacing", element, "with", holder);

        holder.heldElement = element.cloneNode(false);
        //holder.heldElement.innerFragment = document.createRange().createContextualFragment(element.innerHTML);
        holder.heldElement.innerFragment = this.createFragmentForElement(element);

        element.replaceWith(holder);
        return holder;
    }

    replaceHolderWithElement(holder) {

        holder.replaceWith(holder.heldElement);
        return holder.heldElement;
    }


    analyzeChildNodesForElement(element) {


        if (this.isEmaElement(element)) {
            this.replaceElementWithHolder(element);
        }
        else {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (this.isEmaElement(element.childNodes[i])) {
                    this.replaceElementWithHolder(element.childNodes[i])
                }
                else {
                    this.analyzeChildNodesForElement(element.childNodes[i]);
                }
            }
        }
    }

    restoreHeldNodes(element) {


        var childNodes = element.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            var child = childNodes[i];
            if (this.isHolder(child)) {

                //before restoring, strip element of ema- content
                // this.analyzeChildNodesForElement(child.heldElement);
                this.replaceHolderWithElement(child);
            }
            else if (child.childNodes.length > 0) {
                this.restoreHeldNodes(child);
            }
        }
    }







    isWidget(node) {
        if (typeof node.emaItemType != "undefined") {
            if (node.emaItemType.indexOf("Widget") != -1) {
                return true;
            }
        }
        return false;
    }

    isAssignable(node) {
        if (typeof node.emaItemType != "undefined") {
            if (node.emaItemType.indexOf("Assignable") != -1) {
                return true;
            }
        }
        return false;
    }

    isEmaElement(element) {

        if (AssignableNodeNames.indexOf(element.nodeName) != -1) {
            return true;
        }
        return false;
    }

    isHolder(element) {
        if (element.is == "ema-holder") {
            return true;
        }
        return false;
    }



}




if (!customElements.get('aa-session')) {

    if (typeof window.AssignableNodeNames == "undefined") { window.AssignableNodeNames = [];}
    window.AssignableNodeNames.push("AA-SESSION");

    customElements.define('aa-session', AASession);

   
}






