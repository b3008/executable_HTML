import BaseElement from './../aa-baseElement/baseElement.js';
import './aa-when/aa-when.js';
import './aa-otherwise/aa-otherwise.js';


import jsep from './../lib/jsep/jsep.js';
export default class AAChoose extends BaseElement {

    static get observedAttributes() {
        return ['name', 'should-run', 'debug'];
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = "<slot></slot>"
        this.originalContent = this.innerHTML;
    }

    _restoreOriginalContent(){

    }
    connectedCallback() {
        debugger;
        this._shouldRun = (this.shouldRun === null) || (this.shouldRun === true);
        this.sessionElement = this._getParentSession();
        debugger;
        // if (this.started) { return; }
        if (this._shouldRun) {
            if (typeof this.innerFragment !== 'undefined') {
                this._replaceChildNodesWithHolderElements(this.innerFragment);
                let nodes = this._getNodeToInstantiate();
                if (nodes.length == 0) {
                    this._dispatchEndEvent();
                } else {
                    for (let i = 0; i < nodes.length; i++) {
                        let node = nodes[i];
                        if (typeof node!== 'undefined') {
                            this.appendChild(node);
                            this._restoreHeldNodes(this);
                        }
                       
                    }
                    this._dispatchEndEvent();
                }
            }
            else {
                this._restoreHeldNodes(this);
                if (this.childNodes.length == 0) {
                    this._dispatchEndEvent();
                }
            }
        }
    }

    _getNodeToInstantiate() {

        debugger;
        this.started = true;
        let nodesToReturn = [];
        let nodeOtherwise = [];

        this.myFragmentChildren = [];
        let isChildTrue = false;
        for (let i = 0; i < this.innerFragment.children.length; i++) {

            let child = this.innerFragment.children[i];

            this.myFragmentChildren.push(child)
            if (this._isHolder(child)) {
                if (child.heldElement.nodeName == 'AA-WHEN') {
                    isChildTrue = this.evaluate(child.heldElement);
                    if (isChildTrue) {
                        nodesToReturn.push(child)
                        // return child;
                    };
                }

                if (child.heldElement.nodeName == 'AA-OTHERWISE') {
                    //we reached otherwise, should we stop and attach it?
                    // /return child;
                    nodeOtherwise.push(child)
                }
            }
        }

        if (nodesToReturn.length == 0) {
            return nodeOtherwise;
        }
        else {
            return nodesToReturn;
        }

    }

    run() {
        this.started = true;
        if (this.myFragmentChildren.length === 0) return;
        if (this.fragmentChildrenCounter >= this.myFragmentChildren.length) return;
        if (!this.currentNode) { this.formerNodes.push(this.currentNode); }

        let finalFragmentChild;
        let fragmentChild = this.myFragmentChildren[this.fragmentChildrenCounter];
        if (this.isHolder(fragmentChild)) {
            finalFragmentChild = this.replaceHolderWithElement(fragmentChild);
        }
        else {
            finalFragmentChild = fragmentChild;
        }
        this.appendChild(finalFragmentChild);
        this._restoreHeldNodes(finalFragmentChild);
        this.fragmentChildrenCounter += 1;
    }

    evaluate(element) {

        let test = element.getAttribute('test');
        if ((test == null) || (test == '')) return null;
        return this.evaluateTestExpression(test);
        
    }

    evaluateTestExpression(test) {

        let expr = this.replaceExpressionIdentifiersWithValues(test);
        // after replacing known variable names with their values in the string, test to see if the expression can be parsed
        try {
            var parseTree = jsep(expr);
            if ((parseTree.left.type == "Literal") && (parseTree.right.type == "Literal")) {
                return eval(expr);
            } 
            else {
              // there are still strings in the expression, which are unknown, an exception should be raised
              throw "unknown identifiers in expression : " + expr;
            }

        } catch (e) {
            console.error("parse error:", e);
        }

    }


    replaceExpressionIdentifiersWithValues(expression){
        let session = this._getParentSession();
         let result = expression.toUpperCase();
        
        let originalIdentifiers = Object.keys(session.getDataDump());
        let upperCaseIdentifiers = originalIdentifiers.map(s=>s.toUpperCase());
        for(let i in upperCaseIdentifiers)
        {
            let value = session.getData(originalIdentifiers[i]);
            let finalValue = parseInt(value);
            if(finalValue!=value) {
                if(value==="null") { finalValue = `null`; }
                else if(value==="true") {finalValue = "true";}
                else if(value==="false") { finalValue = "false"}
                else finalValue = `"${value}"`
            }
            let r = new RegExp(upperCaseIdentifiers[i], "g");
            result = result.replace( r, finalValue );
        }
       return result;
    }
}



if (!customElements.get('aa-choose')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-CHOOSE');
    customElements.define('aa-choose', AAChoose);
}
