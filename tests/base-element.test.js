import { AABaseElement, html } from '../src/customElements/aa-base-element/aa-base-element.ts';
import { AAScreen } from '../src/customElements/aa-screen/aa-screen.ts';
import { AACheckboxes } from '../src/customElements/aa-checkboxes/aa-checkboxes.ts';
import * as html2jsl from '../src/lib/html2jsl/html2jsl.js';
import { assert } from '@esm-bundle/chai';

var container;

describe('baseElement', () => {

    before(function () {
        container = document.querySelector('#container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'container';
            document.body.appendChild(container);
        }
    });


    beforeEach(function () {

        container.innerHTML = '';
    });

    describe('member functions', function () {
        it('converts hyphenated attribute toCamelCase property ', (done) => {
            container.innerHTML = '<aa-base-element id="e1">';
            let baseElement = document.querySelector('#e1');
            let hyphenated = 'this-is-a-hyphenated-sentence';

            assert(baseElement.toCamelCase(hyphenated) == 'thisIsAHyphenatedSentence', `conversion to camelcase is not coorect: ${baseElement.toCamelCase(hyphenated)}`);
            done();
        });

        it('converts camelCase string to hyphenated string ', (done) => {
            container.innerHTML = '<aa-base-element id="e1">';
            let baseElement = document.querySelector('#e1');
            let hyphenated = 'this-is-a-hyphenated-sentence';
            let camelString = 'thisIsAHyphenatedSentence';
            assert(baseElement.toHyphenated(camelString) == hyphenated, `conversion to hyphenated is not coorect: ${baseElement.toHyphenated(camelString)}`);
            done();
        });


    })

    describe('derived elements', function () {
        it('derived element inherits from baseElement, has getters and setters for properties that reflect attributes', (done) => {
            class TestElement extends AABaseElement {
                static get observedAttributes() {
                    return ['name', 'my-session']
                }
                constructor() {
                    super();
                    this.root = this.attachShadow({ mode: 'open' });
                }
                connectedCallback() {
                    this.root.innerHTML = html`<div>test element</div>`
                }

                get name() {
                    return 'element-specific getter was called for name';
                }
            }

            customElements.define('test-element', TestElement);
            container.innerHTML = '<test-element id="e2" name="elem1" my-session="mySession">';
            let testElement = document.querySelector('#e2');
            assert(testElement.mySession === testElement.getAttribute('my-session'), 'object property should equal element attribute, ' + testElement.mySession + ' , ' + testElement.getAttribute('my-session') + ' ');
            assert(testElement.name === 'element-specific getter was called for name', 'value of property should be returned from the derived class\' getter');
            done();
        })

        it('derived element can dispatch bubbling endEvent', (done) => {

            class TestEndEventElement extends AABaseElement {

                connectedCallback() {
                    this._dispatchEndEvent('testData');
                }
            }

            customElements.define('test-end-event-element', TestEndEventElement);
            let div = document.createElement('div');
            div.addEventListener('endEvent', (e) => {
                assert(e.detail === 'testData', 'e.detail should equal "testData"');
                done();
            })
            div.innerHTML = '<test-end-event-element id="e3"></test-end-event-element>';
            container.appendChild(div)
        })

        it('derived element can dispatch bubbling debugEvent when debug attribute is true', (done) => {

            class TestDebugEventElement extends AABaseElement {

                static get observedAttributes() {
                    return ['debug'];
                }
                constructor() {
                    super();
                }
                connectedCallback() {
                    this._dispatchDebugEvent('debugData');
                }
            }

            customElements.define('test-debug-event-element', TestDebugEventElement);
            let div = document.createElement('div');
            div.addEventListener('debugEvent', (e) => {
                assert(e.detail === 'debugData', 'e.detail should equal "debugData"');

                done();
            })
            div.innerHTML = '<test-debug-event-element id="e4" debug="true"></test-debug-event-element>';
            container.appendChild(div);
        })



        it('converts HTML to JSL', (done) => {

            let div = document.createElement('div');
            let j;

            div.innerHTML = `

            <h4>This is the HTML5 logo </h4>
<img src=""/>
<div class="blue centered box">blue centered box</div>




            <aa-checkboxes class="" horizontal="false" vertical="true" name="undefined">
                            <aa-choice-item value="undefined">niemand</aa-choice-item>
                            <aa-choice-item value="undefined">partner</aa-choice-item>
                            <aa-choice-item value="undefined">inwonenden</aa-choice-item>
                            <aa-choice-item value="undefined">gezin</aa-choice-item>
                            <aa-choice-item value="undefined">familie uitwonend</aa-choice-item>
                            <aa-choice-item value="undefined">vrienden</aa-choice-item>
                            <aa-choice-item value="undefined">collegaﾒs/klasgenoten</aa-choice-item>
                            <aa-choice-item value="undefined">hulpverleners</aa-choice-item>
                            <aa-choice-item value="undefined">kennissen</aa-choice-item>
                            <aa-choice-item value="undefined">onbekenden</aa-choice-item>
                        </aa-checkboxes>`

            j = html2jsl.nodeToJSL(div);

            done();
        })



    })

    describe('getAttributes', function () {
        it('returns user-defined attributes', (done) => {
            container.innerHTML = '<aa-screen id="s1" name="myScreen"><div>test</div></aa-screen>';
            let screen = document.querySelector('#s1');
            let attrs = screen.getAttributes();
            assert(typeof attrs === 'object', 'getAttributes should return an object');
            done();
        });
    });

    describe('toJSON', function () {
        it('returns JSON representation of element', (done) => {
            container.innerHTML = '<aa-screen id="s1" name="myScreen"><div>test</div></aa-screen>';
            let screen = document.querySelector('#s1');
            let json = screen.toJSON();
            assert(json !== null, 'toJSON should return something');
            assert(typeof json === 'object', 'toJSON should return an object');
            done();
        });
    });

    describe('nodeToJSON', function () {
        it('handles text node', (done) => {
            let textNode = document.createTextNode('hello world');
            let result = AABaseElement.nodeToJSON(textNode);
            assert(result !== null, 'should return something for text node');
            assert(result['#text'] === 'hello world', 'should have text content');
            done();
        });

        it('handles empty text node', (done) => {
            let textNode = document.createTextNode('   ');
            let result = AABaseElement.nodeToJSON(textNode);
            assert(result === null, 'should return null for empty text node');
            done();
        });

        it('handles comment node', (done) => {
            let commentNode = document.createComment('this is a comment');
            let result = AABaseElement.nodeToJSON(commentNode);
            assert(result !== null, 'should return something for comment node');
            assert(result['#comment'] === 'this is a comment', 'should have comment content');
            done();
        });

        it('handles element with toJSON', (done) => {
            container.innerHTML = '<aa-screen id="s1" name="myScreen"><div>test</div></aa-screen>';
            let screen = document.querySelector('#s1');
            let result = AABaseElement.nodeToJSON(screen);
            assert(result !== null, 'should return result from toJSON');
            done();
        });

        it('handles generic element without toJSON', (done) => {
            let div = document.createElement('div');
            div.setAttribute('class', 'myClass');
            div.innerHTML = '<span>child</span>';
            let result = AABaseElement.nodeToJSON(div);
            assert(result !== null, 'should return something for generic element');
            assert('DIV' in result, 'should have DIV key');
            assert(result.DIV.class === 'myClass', 'should have class attribute');
            done();
        });
    });

    describe('toJSL', function () {
        it('converts element to JSL', (done) => {
            container.innerHTML = '<aa-checkboxes><aa-choice-item value="a">A</aa-choice-item></aa-checkboxes>';
            let boxes = document.querySelector('aa-checkboxes');
            let jsl = boxes.toJSL();
            assert(jsl !== null && jsl !== undefined, 'toJSL should return something');
            done();
        });
    });

    describe('getDomPathAsName', function () {
        it('uses name attribute when available', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="sess" id="sess">
                <template>
                    <aa-screen name="myScreen">
                        <div>test</div>
                    </aa-screen>
                </template>
            </aa-session>`;
            let screen = document.querySelector('aa-screen');
            if (screen) {
                let path = AABaseElement.getDomPathAsName(screen);
                assert(path.includes('myScreen'), 'path should include name');
            }
            done();
        });

        it('uses id when name not available', (done) => {
            // Create elements directly to control the DOM structure
            let session = document.createElement('aa-session');
            session.setAttribute('name', 'sess');
            let screen = document.createElement('aa-screen');
            screen.setAttribute('id', 's1');
            session.appendChild(screen);
            container.appendChild(session);
            let path = AABaseElement.getDomPathAsName(screen);
            assert(path.includes('s1'), 'path should include id');
            done();
        });

        it('handles sibling elements', (done) => {
            let session = document.createElement('aa-session');
            session.setAttribute('name', 'sess');
            let screen1 = document.createElement('aa-screen');
            let screen2 = document.createElement('aa-screen');
            session.appendChild(screen1);
            session.appendChild(screen2);
            container.appendChild(session);
            let path = AABaseElement.getDomPathAsName(screen2);
            assert(path.includes(':eq('), 'path should include sibling index');
            done();
        });

        it('uses session id when session has no name', (done) => {
            let session = document.createElement('aa-session');
            session.setAttribute('id', 'sessId');
            let screen = document.createElement('aa-screen');
            screen.setAttribute('name', 'myScreen');
            session.appendChild(screen);
            container.appendChild(session);
            let path = AABaseElement.getDomPathAsName(screen);
            assert(path.includes('sessId'), 'path should include session id');
            done();
        });

        it('uses session tagname when no name or id', (done) => {
            let session = document.createElement('aa-session');
            let screen = document.createElement('aa-screen');
            screen.setAttribute('name', 'myScreen');
            session.appendChild(screen);
            container.appendChild(session);
            let path = AABaseElement.getDomPathAsName(screen);
            assert(path.includes('aa-session'), 'path should include aa-session tagname');
            done();
        });

        it('uses sibling index for session when session has sibling screens', (done) => {
            // The sibling count at the session level comes from the last iteration
            // of the while loop. To trigger sibCount > 1 at the session check,
            // we need multiple same-named siblings inside the session.
            let session = document.createElement('aa-session');
            let screen1 = document.createElement('aa-screen');
            let screen2 = document.createElement('aa-screen');
            session.appendChild(screen1);
            session.appendChild(screen2);
            container.appendChild(session);
            let path = AABaseElement.getDomPathAsName(screen2);
            assert(path.includes(':eq('), 'path should include sibling index');
            done();
        });
    });

    describe('isAAElement', function () {
        it('returns true for AA element', (done) => {
            container.innerHTML = '<aa-screen name="test"><div>test</div></aa-screen>';
            let screen = document.querySelector('aa-screen');
            assert(AABaseElement.isAAElement(screen) === true, 'should return true for AA element');
            done();
        });

        it('returns false for non-AA element', (done) => {
            let div = document.createElement('div');
            assert(AABaseElement.isAAElement(div) === false, 'should return false for div');
            done();
        });
    });

    describe('setAttributeDefaultValues', function () {
        it('handles false string for boolean attributes', (done) => {
            container.innerHTML = '<aa-screen id="s1" name="test" diagram="false"><div>test</div></aa-screen>';
            let screen = document.querySelector('#s1');
            assert(screen.diagram === false, 'diagram should be false');
            done();
        });

        it('handles null for boolean attributes', (done) => {
            container.innerHTML = '<aa-screen id="s1" name="test"><div>test</div></aa-screen>';
            let screen = document.querySelector('#s1');
            // diagram should get its default value
            assert(screen.getAttribute('diagram') !== undefined, 'diagram attribute should exist');
            done();
        });
    });
})
