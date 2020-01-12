

// var expect = chai.expect;
var assert = chai.assert;

var container;

import BaseElement from "../aa-baseElement/baseElement.js";

describe('baseElement', () => {

   
    before(function(){
        container = document.createElement('div');
        document.body.appendChild(container);

    });
    
    afterEach(function() {
        // runs after each test in this block
        // document.body.innerHTML = '';
        container.innerHTML = "";
      });

    describe('member functions', function () {

        it('convert hyphenated attribute toCamelCase property ', function (done) {


            //instantiate a baseElement without attributes
            container.innerHTML = '<aa-base-element id="e1">';
            let baseElement = document.querySelector('#e1');
            let hyphenated = "this-is-a-hyphenated-sentence";

            assert(baseElement.toCamelCase(hyphenated) == "thisIsAHyphenatedSentence", `conversion to camelcase is not coorect: ${baseElement.toCamelCase(hyphenated)}`);
            done();
        });

        it('convert camelCase string to hyphenated string ', function (done) {


            //instantiate a baseElement without attributes
            container.innerHTML = '<aa-base-element id="e1">';
            let baseElement = document.querySelector('#e1');
            let hyphenated = "this-is-a-hyphenated-sentence";
            let camelString = "thisIsAHyphenatedSentence";
            assert(baseElement.toHyphenated(camelString) == hyphenated, `conversion to hyphenated is not coorect: ${baseElement.toHyphenated(camelString)}`);
            done();
        });

        it('inherit from baseElement, have some attributes and test API', function (done) {


            class TestElement extends BaseElement {
                static get observedAttributes() {
                    return ["name", "my-session"]
                }
                constructor() {
                    super();
                    this.root = this.attachShadow({ mode: 'open' });
                }
                connectedCallback(){
                    this.root.innerHTML = "<div>test element</div>"
                }

                get name(){
                    return "element-specific getter was called for name";
                }
            }

            customElements.define("test-element", TestElement);
            container.innerHTML = '<test-element id="e2" name="elem1" my-session="mySession">';


            let testElement = document.querySelector('#e2');
            // debugger;
            assert.equal(testElement.mySession, testElement.getAttribute("my-session"));
            assert.equal(testElement.name, "element-specific getter was called for name");

            done()
        })
    })
})
