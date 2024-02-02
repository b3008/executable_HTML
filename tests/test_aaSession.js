import '../src/customElements/aa-session/aa-session.js';
import '../src/customElements/aa-screen/aa-screen.js';
import '../src/customElements/aa-sequence/aa-sequence.js';


// var expect = chai.expect;
var assert = chai.assert;
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


        it('session should export to YAML', (done) => {
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
})


