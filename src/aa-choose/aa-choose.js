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

    }

    connectedCallback() {
        this._shouldRun = (this.shouldRun === null) || (this.shouldRun === true);
        this.sessionElement = this._getParentSession();
        if (this.sessionElement) if (this.sessionElement.mem) this.mem = this.sessionElement.mem;

        if (this.started) { return; }
        if (this._shouldRun) {
            if (typeof this.innerFragment !== 'undefined') {
                this._analyzeChildNodesForElement(this.innerFragment);
                let nodes = this._getNodeToInstantiate();
                if (nodes.length == 0) {
                    this._dispatchAssignableEnd();
                } else {
                    for (let i = 0; i < nodes.length; i++) {
                        let node=nodes[i];
                        if (typeof node === 'undefined') {
                            this._dispatchAssignableEnd();
                        }
                        else {
                            this.appendChild(node);
                            this._restoreHeldNodes(this);
                        }
                    }
                }
            }
            else {
                this._restoreHeldNodes(this);
            }
        }
    }

    _getNodeToInstantiate() {

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

        var test = element.getAttribute('test');
        var testCopy = test;
        if ((test == null) || (test == '')) return null;
        try {

            var parseTree = jsep(test);
            if ((parseTree.left.type == "Literal") && (parseTree.right.type == "Literal")) {
                return eval(test);
            }
            else {
                var identifiers = this.getIdentifiersInParseTree(parseTree);
                for (var i = 0; i < identifiers.length; i++) {
                    var value = this.mem.load(identifiers[i]);
                    if (typeof value == "string") value = `'${value}'`;
                    var regex = new RegExp(identifiers[i], "g");
                    testCopy = testCopy.replace(regex, value);
                }
                // console.log("will evaluate", testCopy);
                var replacedTree = jsep(testCopy);
                if ((replacedTree.left.type == "Literal") && (replacedTree.right.type == "Literal")) {
                    return eval(testCopy);
                }
            }

        } catch (e) {
            console.log("parse error:", e);
        }

    }


    getIdentifiersInParseTree(tree) {


        if (typeof tree.type != 'undefined') {
            if (tree.type == 'BinaryExpression') {


                var leftList = this.getIdentifiersInParseTree(tree.left);
                var rightList = this.getIdentifiersInParseTree(tree.right);



                let idList = [];

                // console.log("leftList is", typeof leftList)

                if (typeof leftList == "object") {
                    console.log(leftList)
                    idList.push.apply(idList, leftList);
                }

                // console.log("rightList is", typeof rightList)

                if (typeof rightList == "object") {
                    idList.push.apply(idList, rightList);
                }

                return idList;


            }

            if (tree.type == "Identifier") {


                return [tree.name]
            }

        }
    }




    evalParseTree(e) {
        if (typeof e.type != "undefined") {
            // console.log("type = ", e.type)
            if (e.type == "BinaryExpression") {

                var left = this.evalParseTree(e.left)

                var right = this.evalParseTree(e.right)


                // console.log("eval(", left, e.operator, right, ")")
                var result = eval(left + e.operator + right)

                return result
            }

            if (e.type == "Literal") {
                // console.log(e)
                return e.raw
            }

            if (e.type == "Identifier") {
                // console.log(e)
                //ask the questionAnswersObject for the value of Identifier
                return this.askForWidgetVariableValue(e.name)

            }
        }
    }


    parseExpression(expression) {
        var parseTree = jsep(expression);
        // console.log(parseTree)
        return this.evalParseTree(parseTree)

    }





}



if (!customElements.get('aa-choose')) {
    window.AANodeNames = window.AANodeNames || [];
    window.AANodeNames.push('AA-CHOOSE');
    customElements.define('aa-choose', AAChoose);
}
