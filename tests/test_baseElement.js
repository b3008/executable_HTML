import BaseElement from '../src/customElements/aa-baseElement/baseElement.js';
import AAScreen from '../src/customElements/aa-screen/aa-screen.js';
import AACheckboxes from '../src/customElements/aa-checkboxes/aa-checkboxes.js';
import * as html2jsl from '../src/lib/html2jsl/html2jsl.js';

// var expect = chai.expect;
var assert = chai.assert;
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

        it('converts camelCase string to hyphenated string ',  (done) => {
            container.innerHTML = '<aa-base-element id="e1">';
            let baseElement = document.querySelector('#e1');
            let hyphenated = 'this-is-a-hyphenated-sentence';
            let camelString = 'thisIsAHyphenatedSentence';
            assert(baseElement.toHyphenated(camelString) == hyphenated, `conversion to hyphenated is not coorect: ${baseElement.toHyphenated(camelString)}`);
            done();
        });

       
    })

    describe('derived elements', function(){
        it('derived element inherits from baseElement, has getters and setters for properties that reflect attributes',  (done) => {
            class TestElement extends BaseElement {
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

        it('derived element can dispatch bubbling endEvent', (done)=>{

            class TestEndEventElement extends BaseElement {
                
                connectedCallback(){
                    this._dispatchEndEvent('testData');
                }
            }

            customElements.define('test-end-event-element', TestEndEventElement);
            let div = document.createElement('div');
            div.addEventListener('endEvent', (e)=>{
                assert(e.detail==='testData', 'e.detail should equal "testData"');
                done();
            })
            div.innerHTML = '<test-end-event-element id="e3"></test-end-event-element>';
            container.appendChild(div)
        })

        it('derived element can dispatch bubbling debugEvent when debug attribute is true', (done)=>{

            class TestDebugEventElement extends BaseElement {
                
                static get observedAttributes(){
                    return ['debug'];
                }
                constructor(){
                    super();
                }
                connectedCallback(){
                    this._dispatchDebugEvent('debugData');
                }
            }

            customElements.define('test-debug-event-element', TestDebugEventElement);
            let div = document.createElement('div');
            div.addEventListener('debugEvent', (e)=>{
                assert(e.detail==='debugData', 'e.detail should equal "debugData"');

                done();
            })
            div.innerHTML = '<test-debug-event-element id="e4" debug="true"></test-debug-event-element>';
            container.appendChild(div);
        })



        // it('converts HTML to JSON', (done)=>{

        //     let div = document.createElement('div');                        
        //     div.innerHTML = "<p>My cat is <strong>very grumpy.</p></strong>";
        //     let j = BaseElement.nodeToJSON(div);
        //     console.log(j);
        //     console.log(JSON.stringify(j, null, 2));

        //     done();
        // })


        it('converts HTML to JSL', (done)=>{

            let div = document.createElement('div');                        
            let j;
            // div.innerHTML = "<p>My cat is <strong>very grumpy.</p></strong>";
            // j = BaseElement.nodeToJSL(div);
            // console.log(j);
             
            div.innerHTML=`
            
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
            // console.log(j);
            
            done();
        })



    })
})
