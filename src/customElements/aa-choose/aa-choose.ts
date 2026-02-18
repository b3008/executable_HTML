import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
import './aa-when/aa-when';
import './aa-otherwise/aa-otherwise';
import jsep from 'jsep';
export class AAChoose extends AABaseElement {

    static get category(): string {
        return "control";
    }

    static get tag(): string {
        return 'aa-choose';
    }

    static get properties(): AAPropertiesMap {
        return {

            ...AABaseElement.properties,

            name: {
                type: String,
                userDefined: true
            },
            "should-run": {
                type: Boolean,
                value: true,
                userDefined: false
            },
            "debug": {
                type: Boolean,
                value: false,
                userDefined: false
            }
        }
    }

    static get acceptsElements(): string[] {
        return [
            "aa-when", "aa-otherwise"
        ]
    }

    static get observedAttributes(): string[] {
        return Object.keys(AAChoose.properties);
    }

    root: ShadowRoot;
    originalContent: string;
    _shouldRun: boolean = false;
    sessionElement: any;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>';
        this.originalContent = this.innerHTML;
    }


    connectedCallback(): void {
        this.setAttributeDefaultValues();

        if (this.diagram) {

            this.produceDiagram();
            return;
        }

        this._shouldRun = (this.shouldRun === null) || (this.shouldRun === true);
        this.sessionElement = this._getParentSession();


        if (this._shouldRun) {
            if (typeof this.innerFragment !== 'undefined') {
                AABaseElement.scanAndReplace(this.innerFragment);
                let nodes = this._getNodeToInstantiate();
                if (nodes.length === 0) {
                    this._dispatchEndEvent();
                } else {
                    let doesAnyNodeExpectWait = false;
                    for (let i = 0; i < nodes.length; i++) {
                        let node = nodes[i];
                        if (typeof node !== 'undefined') {

                            /**
                             * certain elements, mainly the screen,
                             * are synchronous and need to dispatch
                             * their own "end" events.
                             * 
                             * so look into the list of childNodes
                             * contained into the part of the choose-when-otherwise
                             * block that gets instantiated, and if you see
                             * one with the property expectWait, don't tell
                             * the sequence to move forward.
                             * 
                             * Possibly the architecture for this needs to change,
                             * and have the sequence specifically extract newly
                             * produced nodes and insert them itself
                            **/

                            for (let j = 0; j < node.childNodes.length; j++) {

                                // the element has not been attached
                                // so we have to access the static properties getter
                                // to get the default value for expectWait
                                if (node.childNodes[j].constructor)
                                    if (node.childNodes[j].constructor.properties)
                                        if (node.childNodes[j].constructor.properties['expect-wait']) {
                                            doesAnyNodeExpectWait = true;
                                        }
                            }

                            this.parentNode!.insertBefore(node, this.nextSibling);
                        }
                    }

                    /** 
                     * so here dispatch evdEvent only if you haven't encountered
                     * something that has expectWait:true
                     */
                    if (!doesAnyNodeExpectWait) {
                        this._dispatchEndEvent();
                    }
                }
            }
            else {
                if (this.childNodes.length === 0) {
                    this._dispatchEndEvent();
                }
            }
        }
        this.remove();
    }

    _getNodeToInstantiate(): any[] {
        let nodesToReturn: any[] = [];
        let nodeOtherwise: any[] = [];
        let isChildTrue = false;
        for (let i = 0; i < this.innerFragment.children.length; i++) {
            let child = this.innerFragment.children[i];
            if (child.nodeName === 'AA-WHEN') {
                isChildTrue = this.evaluate(child);
                if (isChildTrue) {
                    nodesToReturn.push(AABaseElement.copy(child).innerFragment);
                }
            } else if (child.nodeName === 'AA-OTHERWISE') {
                nodeOtherwise.push(AABaseElement.copy(child).innerFragment);
            }
        }
        if (nodesToReturn.length === 0) {
            return nodeOtherwise;
        }
        else {
            return nodesToReturn;
        }
    }


    evaluate(element: Element): any {
        let test = element.getAttribute('test');
        if ((test == null) || (test == '')) return null;
        return this.evaluateTestExpression(test);
    }

    evaluateTestExpression(test: string): any {

        let expr = this.replaceExpressionIdentifiersWithValues(test);
        // after replacing known variable names with their values in the string, test to see if the expression can be parsed


        try {
            var parseTree: any = jsep(expr);
            if ((parseTree.left.type === 'Literal') && (parseTree.right.type === 'Literal')) {
                return eval(expr);
            }
            else {
                // there are still strings in the expression, which are unknown
                // evaluate with values that the parseTreeProvides
                return eval(`${parseTree.left.value}${parseTree.operator}${parseTree.right.value}`);
                //an exception should be raised
                // throw 'unknown identifiers in expression : ' + expr;
            }
        } catch (e) {
            console.error('parse error:', e);
        }
    }

    replaceExpressionIdentifiersWithValues(expression: string, memoryElement?: any): string {

        let memory = this.getMemory() || memoryElement;
        let result = expression.toUpperCase();

        let originalIdentifiers = Object.keys(memory.getDataDump());
        let upperCaseIdentifiers = originalIdentifiers.map((s: string) => s.toUpperCase());



        for (let i in originalIdentifiers) {
            let value = memory.getData(originalIdentifiers[i]);
            let finalValue: any = parseInt(value);
            if (finalValue != value) {
                if (value === 'null') { finalValue = 'null'; }
                else if (value === 'true') { finalValue = 'true'; }
                else if (value === 'false') { finalValue = 'false'; }
                else finalValue = `"${value}"`;
            }
            let r = new RegExp(upperCaseIdentifiers[i], 'g');
            result = result.replace(r, finalValue);
        }
        return result;
    }
}

AABaseElement.registerAAElement('aa-choose', AAChoose);

