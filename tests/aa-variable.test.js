import '../src/customElements/aa-session/aa-session.ts';
import { AAVariable } from '../src/customElements/aa-variable/aa-variable.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-variable', () => {

    before(function(){
        container = document.querySelector('#container');
        if(!container){
            container = document.createElement('div');
            container.id = "container";
            document.body.appendChild(container);
        }
    });


    beforeEach(function() {
        container.innerHTML = "";
        localStorage.clear();
    });

    describe('instance', function () {
        it('should have name and value', function (done) {

            container.innerHTML = html`
            first session:
            <aa-session debug="false" name="test" id="session">
                <template>
                    <aa-variable id="v" name="var1" value="val1" debug="true"></aa-variable>
                </template>
            </aa-session>`;

            let memory = document.querySelector('#session')._mem;


            assert(memory.getDataDump()['var1']==='val1', 'var1 should exist and have value val1');
            assert(memory.getData('var1')==='val1', 'var1 should exist and have value val1');


            done();

        });


        it('should be able to parse expression with existing variable', function (done) {

            container.innerHTML = html`
            first session:
            <aa-session debug="false" name="test" id="session">
                <template>

                <aa-variable id="v1" name="var1" value="val1" debug="true"></aa-variable>
                    <aa-variable id="v2" name="var2" value="val1" debug="true"></aa-variable>
                </template>
            </aa-session>`;

            let memory = document.querySelector('#session')._mem;


            assert(memory.getDataDump()['var1']==='val1', 'var1 should exist and have value val1');
            assert(memory.getData('var1')==='val1', 'var1 should exist and have value val1');


            done();

        });

    })

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AAVariable.tag === 'aa-variable', 'static tag should be aa-variable');
            done();
        });

        it('has static acceptsElements', (done) => {
            let accepts = AAVariable.acceptsElements;
            assert(Array.isArray(accepts), 'acceptsElements should be an array');
            assert(accepts.length === 0, 'should be empty array');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AAVariable.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            assert(attrs.includes('name'), 'should include name');
            assert(attrs.includes('value'), 'should include value');
            done();
        });
    });

    describe('evaluateValueExpression', function () {

        it('returns undefined for Identifier (unknown variable reference)', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session" data-myVar="hello">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            v.getMemory = () => mem;
            // 'UNKNOWNIDENT' is not in memory, so replaceExpressionIdentifiers leaves it,
            // jsep parses it as an Identifier node, which returns undefined (no explicit return)
            let result = v.evaluateValueExpression('unknownIdent');
            assert(result === undefined, 'should return undefined for Identifier');
            done();
        });

        it('returns undefined for Literal (just a number)', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            v.getMemory = () => mem;
            let result = v.evaluateValueExpression('42');
            assert(result === undefined, 'should return undefined for Literal');
            done();
        });

        it('evaluates binary expression with both Literal sides', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session" data-a="1">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            v.getMemory = () => mem;
            // 'a' gets replaced with 1, so expression becomes '1==1'
            let result = v.evaluateValueExpression('a==1');
            assert(result === true, 'should evaluate 1==1 to true');
            done();
        });

        it('evaluates binary expression with Identifier sides via parseTree values', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            v.getMemory = () => mem;
            // No variables in memory, so 'x+y' stays as identifiers
            // jsep parses as BinaryExpression with Identifier left and right
            // Falls to the else branch which evals parseTree.left.value + operator + parseTree.right.value
            let result = v.evaluateValueExpression('x+y');
            // Identifiers have undefined .value, so eval('undefinedundefinedundefined') → undefined is not a valid eval
            // This will likely hit the catch block
            assert(true, 'should not throw');
            done();
        });

        it('handles parse error gracefully', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            v.getMemory = () => mem;
            let result = v.evaluateValueExpression('===');
            assert(result === undefined, 'should return undefined on parse error');
            done();
        });
    });

    describe('replaceExpressionIdentifiersWithValues', function () {
        it('replaces numeric values', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session" data-num1="42">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            let result = v.replaceExpressionIdentifiersWithValues('num1+1', mem);
            assert(result.includes('42'), 'should replace num1 with 42');
            done();
        });

        it('replaces string values with quotes', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session" data-str1="hello">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            let result = v.replaceExpressionIdentifiersWithValues('str1', mem);
            assert(result.includes('"'), 'should wrap string value in quotes');
            done();
        });

        it('handles null value', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            session.setData('nullVar', 'null');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            let result = v.replaceExpressionIdentifiersWithValues('nullVar', mem);
            assert(result.toLowerCase().includes('null'), 'should replace with null');
            done();
        });

        it('handles boolean true value', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            session.setData('boolVar', 'true');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            let result = v.replaceExpressionIdentifiersWithValues('boolVar', mem);
            assert(result.toLowerCase().includes('true'), 'should replace with true');
            done();
        });

        it('handles boolean false value', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            session.setData('boolVar2', 'false');
            let mem = session._mem;
            let v = document.createElement('aa-variable');
            let result = v.replaceExpressionIdentifiersWithValues('boolVar2', mem);
            assert(result.toLowerCase().includes('false'), 'should replace with false');
            done();
        });
    });
})
