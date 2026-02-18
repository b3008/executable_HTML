import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element'
import jsep from 'jsep';

export class AAVariable extends AABaseElement {

    static get tag(): string {
        return 'aa-variable';
    }

    static get properties(): AAPropertiesMap {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'value': {

                /**
                 * string values should be given in quotes, e.g.,
                 * <aa-variable name="myString" value="'myStringValue'"></aa-variable>
                 * Here 'myStringValue' is passed to the value attribute in single quotes
                 * 
                 * otherwise it will try to find a named variable, e.g.,
                 * <aa-variable name="myOtherSring" value="'myStringValue'"></aa-variable>
                 * <aa-variable name="myString" value="myOtherString"></aa-variable>
                 * Here the value will be the same value as a variable with name="myOtherString"
                 * 
                 */
                type: String,
                userDefined: true
            },

        }
    }

    static get acceptsElements(): string[] {
        return []
    }

    static get observedAttributes(): string[] {

        return Object.keys(AAVariable.properties);

    }

    root: ShadowRoot;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(): void {
        let memory = this.getMemory();

        // TODO:
        // let value = this.evaluateValueExpression(this.value);

        // leave as is for now
        let value = this.value;

        // let _value = valueExpression;
        if (memory) memory.setData(this.name, value);
        this._dispatchEndEvent({ autoDispatch: true });
        if (!this.debug) { this.remove(); }
    }



    evaluateValueExpression(test: string): any {

        let expr = this.replaceExpressionIdentifiersWithValues(test);
        // after replacing known variable names with their values in the string, test to see if the expression can be parsed


        try {
            var parseTree: any = jsep(expr);
            if (parseTree.type === "Identifier") {
                //Best be strict about it from the beginning an Identifier is always expected to be 
                //a reference to another variable

            } else
                if (parseTree.type === "Literal") {
                    //there's only a string present, figure out if it's a reference to a variable or a string
                } else
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

AABaseElement.registerAAElement('aa-variable', AAVariable);

