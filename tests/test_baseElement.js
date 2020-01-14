import BaseElement from "../src/aa-baseElement/baseElement.js";
// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('baseElement', () => {

    before(function () {
        container = document.querySelector('#container');
        if (!container) {
            container = document.createElement('div');
            container.id = "container";
            document.body.appendChild(container);
        }
    });


    beforeEach(function () {

        container.innerHTML = "";
    });

    describe('member functions', function () {
        it('converts hyphenated attribute toCamelCase property ', function (done) {
            container.innerHTML = '<aa-base-element id="e1">';
            let baseElement = document.querySelector('#e1');
            let hyphenated = "this-is-a-hyphenated-sentence";

            assert(baseElement.toCamelCase(hyphenated) == "thisIsAHyphenatedSentence", `conversion to camelcase is not coorect: ${baseElement.toCamelCase(hyphenated)}`);
            done();
        });

        it('converts camelCase string to hyphenated string ', function (done) {
            container.innerHTML = '<aa-base-element id="e1">';
            let baseElement = document.querySelector('#e1');
            let hyphenated = 'this-is-a-hyphenated-sentence';
            let camelString = 'thisIsAHyphenatedSentence';
            assert(baseElement.toHyphenated(camelString) == hyphenated, `conversion to hyphenated is not coorect: ${baseElement.toHyphenated(camelString)}`);
            done();
        });

        it('new element inherits from baseElement, has getters and setters for properties that reflect attributes', function (done) {
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
            assert(testElement.mySession === testElement.getAttribute('my-session'), "object property should equal element attribute, " + testElement.mySession + " , " + testElement.getAttribute('my-session') + " ");
            assert(testElement.name === "element-specific getter was called for name", "value of property should be returned from the derived class' getter");
            done();
        })
    })
})
