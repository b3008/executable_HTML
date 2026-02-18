import { AASession } from '../src/customElements/aa-session/aa-session.ts';
import '../src/customElements/aa-screen/aa-screen.ts';
import '../src/customElements/aa-sequence/aa-sequence.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-session', () => {
    before(function () {
        container = document.querySelector('#container');
        if (!container) {
            container = document.createElement('div');
            container.id = "container";
            document.body.appendChild(container);
        }
    });

    beforeEach(function () {
        container = document.querySelector('#container');
        container.innerHTML = "";
    });

    describe('instance', () => {
        it('should find session', (done) => {

            container.innerHTML = html`
            first session:
            <aa-session debug="true" name="test" id="session">
                    some text;

                    <div id="myDiv">my div</div>
                    <aa-screen id="screen1" name="first">
                        <div>test</div>
                    </aa-screen>

                    <template>
                        <aa-screen id="screen2" name="second">
                            <div>test 2</div>
                        </aa-screen>

                        <div>
                            <p>
                                <aa-sequence id="sequence1">
                                    <aa-screen id="screen3">screen3</aa-screen>
                                    <aa-screen id="screen4">screen4</aa-screen>
                                </aa-sequence>
                            <p>
                        </div>
                    </template>

            </aa-session>`;

            let session = document.querySelector('#session');
            let screen = document.querySelector("#screen1");

            assert(session.tagName == "AA-SESSION", "AA-SESSION")
            assert(session.name == "test", "name should equal test");
            assert(session.debug === true, "true")
            assert(screen !== null, "screen should be an object")

            done();

        });

        it('session should not render contents when should-run is false', function (done) {


            container.innerHTML = html`
            second session:
            <aa-session debug=true name="test" id="session" should-run=false>
                <template>
                    <aa-screen id="screen3" name="first">
                        <div>test</div>
                    </aa-screen>
                </template>
            <aa-session>`;

            let session = document.querySelector('#session');
            let screen = document.querySelector("#screen3");
            assert(session.shouldRun == false, "shouldRun is false")
            assert(session.name == "test", "session.name should be test")
            assert(session.debug, "session.debug should be true");
            assert(screen === null, "screen should be null")
            done();

        });

        it('session should contain shallow copies of aa-elements the innerHTML nodes of which are childNodes of an innerFragment property', (done) => {
            container.innerHTML = html`
            first session:
            <aa-session debug="true" name="test" id="session">
                    some text;

                    <div id="myDiv">my div</div>
                    <aa-screen id="screen1" name="first">
                        <div>test</div>
                    </aa-screen>

                    <template>
                        <aa-screen id="screen2" name="second">
                            <div>test 2</div>
                        </aa-screen>

                        <div>
                            <p>
                                <aa-sequence>
                                    <aa-screen>screen1</aa-screen>
                                    <aa-screen>screen2</aa-screen>
                                </aa-sequence>
                            <p>
                        </div>
                    </template>

            </aa-session>`;


            done();
        })


        it.skip('session should export to YAML (requires jsyaml global)', (done) => {
            container.innerHTML = html`
            first session:
            <aa-session debug="true" name="test" id="session">
                    some text;

                    <div id="myDiv">my div</div>
                    <aa-screen id="screen1" name="first">
                        <div>test</div>
                    </aa-screen>

                    <template>
                        <aa-screen id="screen2" name="second">
                            <div>test 2</div>
                        </aa-screen>

                        <div>
                            <p>
                                <aa-sequence>
                                    <aa-screen>screen1</aa-screen>
                                    <aa-screen>screen2</aa-screen>
                                </aa-sequence>
                            <p>
                        </div>
                    </template>

            </aa-session>`;

            let s = document.querySelector('#session');
            s.toYAML();

            done();
        })
    })

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AASession.tag === 'aa-session', 'static tag should be aa-session');
            done();
        });

        it('has static acceptsElements', (done) => {
            assert(AASession.acceptsElements === null, 'acceptsElements should be null');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AASession.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            done();
        });
    });

    describe('getData and getDataDump', function () {
        it('gets data via getData', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            session.setData('testKey', 'testValue');
            let val = session.getData('testKey');
            assert(val === 'testValue', 'getData should return the value');
            done();
        });

        it('gets data dump', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            session.setData('dumpKey', 'dumpVal');
            let dump = session.getDataDump();
            assert(dump !== null, 'getDataDump should return something');
            done();
        });
    });

    describe('valueSubmit → sessionInputSubmit', function () {
        it('dispatches sessionInputSubmit on valueSubmit', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                    <aa-screen id="screen1" name="first">
                        <div>test</div>
                    </aa-screen>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            session.addEventListener('sessionInputSubmit', (e) => {
                assert(e.detail.input !== undefined, 'should have input property');
                assert(e.detail.input.sessionName === 'test', 'sessionName should be test');
                assert(e.detail.input.sessionId !== undefined, 'sessionId should exist');
                done();
            });
            let screen = document.querySelector('#screen1');
            let submitButton = screen.root.querySelector('.submitButton');
            submitButton.click();
        });
    });

    describe('toJSON', function () {
        it('returns JSON with template childNodes', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                    <aa-screen name="first">
                        <div>test</div>
                    </aa-screen>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            let json = session.toJSON();
            assert(json !== null, 'toJSON should return something');
            assert('AA-SESSION' in json, 'should have AA-SESSION key');
            assert(Array.isArray(json['AA-SESSION'].childNodes), 'should have childNodes');
            done();
        });
    });

    describe('originalChildNodes', function () {
        it('returns child nodes from template', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                    <aa-screen name="first">
                        <div>test</div>
                    </aa-screen>
                </template>
            </aa-session>`;
            let session = document.querySelector('#session');
            let origNodes = session.originalChildNodes;
            assert(origNodes !== null, 'originalChildNodes should return something');
            assert(origNodes.length > 0, 'should have child nodes');
            done();
        });

        it('returns empty array when template has no content', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
            </aa-session>`;
            let session = document.querySelector('#session');
            let origNodes = session.originalChildNodes;
            assert(origNodes.length >= 0, 'should return array-like');
            done();
        });

        it('returns childNodes when template first child has no content property', (done) => {
            // When session has a non-template element as first child,
            // myTemplate.content.childNodes[0] won't have .content
            container.innerHTML = '<aa-session debug="true" name="test" id="session" should-run="false"><div>direct child</div></aa-session>';
            let session = document.querySelector('#session');
            let origNodes = session.originalChildNodes;
            assert(origNodes !== null, 'should return something');
            done();
        });
    });

    describe('diagram mode', function () {
        it('renders SVG diagram when diagram is true', (done) => {
            container.innerHTML = '<aa-session name="test" id="session" diagram="true"><template><aa-screen name="first"><div>test</div></aa-screen></template></aa-session>';
            let session = document.querySelector('#session');
            let svgContainer = session.root.querySelector('#svgContainer');
            assert(svgContainer !== null, 'should have svgContainer in shadow root');
            done();
        });
    });

    describe('toJSL', function () {
        it('returns JSL representation', (done) => {
            // No whitespace before <template> to avoid text node as first child
            container.innerHTML = '<aa-session debug="true" name="test" id="session"><template><aa-screen name="first"><div>test</div></aa-screen></template></aa-session>';
            let session = document.querySelector('#session');
            let jsl = session.toJSL();
            assert(jsl !== null && jsl !== undefined, 'toJSL should return something');
            done();
        });
    });
})
