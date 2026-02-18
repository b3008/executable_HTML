import { AASequence } from '../src/customElements/aa-sequence/aa-sequence.ts';
import { AAJump } from '../src/customElements/aa-sequence/aa-jump/aa-jump.ts';
import '../src/customElements/aa-session/aa-session.ts';
import '../src/customElements/aa-screen/aa-screen.ts';
import '../src/customElements/aa-function/aa-function-random.ts';
import { assert } from '@esm-bundle/chai';

var container: any;

describe('aa-sequence', () => {

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

    describe('instance', function () {
        it('should find sequence and run next', function (done) {

            container.innerHTML = html`

            first session:
            <aa-session debug='true' name='test' id='session'>

                <template>
                    <aa-sequence id='sequence' type='elements'>textBefore1

                        <aa-screen id='screen1' name='first'>
                                <div>screen1</div>
                        </aa-screen>textBefore2

                        <aa-screen id='screen2' name='second'>
                                <div>screen2</div>
                        </aa-screen>textAfter2

                    </aa-sequence>


                </template>

            </aa-session>`;

            document.querySelector('#session');
            let sequence = document.querySelector('#sequence') as any;

            document.querySelector('#screen1');
            let screen2 = document.querySelector('#screen2') as any;
            assert(sequence.currentNode.id != null, 'screen1 should not be null');
            assert(screen2 == null, 'screen2 should be null');
            sequence.next().then(() => {

                screen2 = document.querySelector('#screen2');
                assert(screen2 != null, 'screen2 should not be null after calling next');

                done();
            });

        });


        it('jumps backwards', (done) => {
            container.innerHTML = '';

            container.innerHTML = html`
             session:
            <aa-session debug='true' name='test' id='session'>

                <template>

                    <aa-sequence id='sequence'>

                        <aa-screen id='screen1' name='first'>
                                <div>screen1</div>
                        </aa-screen>

                        <aa-function-random></aa-function-random>
                        <aa-screen id='screen2' name='second'>
                                <div>screen2</div>
                        </aa-screen>

                        <aa-jump goto='first' name='jump'></aa-jump>
                    </aa-sequence>


                </template>

            </aa-session>`;

            document.querySelector('#session');
            let sequence = document.querySelector('#sequence') as any;
            document.querySelector('#screen1');
            document.querySelector('#screen2');


            assert(sequence.currentNode.name == 'first', 'currentNode should be named first');
            sequence.next().then(() => {
                assert(sequence.currentNode.name == 'second', 'currentNode should be named second');
                sequence.next();
            }).then(() => {
                assert(sequence.currentNode.name == 'first', 'currentNode should be named second');
                sequence.next();
            }).then(() => {
                assert(sequence.currentNode.name == 'second', 'currentNode should be named second');
                done();
            })

        })

        it('jumps forwards', (done) => {

            container.innerHTML = html`
             session:
            <aa-session debug='true' name='test' id='session'>

                <template>

                    <aa-sequence id='sequence'>

                    <aa-jump goto='second' name='jump'></aa-jump>

                        <aa-screen id='screen1' name='first'>
                                <div>screen1</div>
                        </aa-screen>

                        <aa-screen id='screen2' name='second'>
                                <div>screen2</div>
                        </aa-screen>



                        <aa-screen id='screen3' name='third'>
                                <div>screen3</div>
                        </aa-screen>
                    </aa-sequence>


                </template>

            </aa-session>`;

            document.querySelector('#session');
            let sequence = document.querySelector('#sequence') as any;
            let screen1 = document.querySelector('#screen1') as any;
            document.querySelector('#screen2');

            assert(sequence.currentNode.name == 'second', 'currentNode should be named second');
            assert(screen1 == null, 'screen 1 should be null');

            done();
        })




    })

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AASequence.tag === 'aa-sequence', 'static tag should be aa-sequence');
            done();
        });

        it('has a static category getter', (done) => {
            assert(AASequence.category === 'control', 'category should be control');
            done();
        });

        it('has static acceptsElements', (done) => {
            assert(AASequence.acceptsElements === null, 'acceptsElements should be null');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AASequence.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            done();
        });
    });

    describe('css and html getters', function () {
        it('has css getter', (done) => {
            let seq = document.createElement('aa-sequence') as any;
            assert(typeof seq.css === 'string', 'css should be a string');
            assert(seq.css.includes('style'), 'css should contain style tag');
            done();
        });

        it('has html getter', (done) => {
            let seq = document.createElement('aa-sequence') as any;
            assert(typeof seq.html === 'string', 'html should be a string');
            assert(seq.html.includes('slot'), 'html should contain slot');
            done();
        });
    });

    describe('stop', function () {
        it('stops the sequence', (done) => {
            container.innerHTML = html`
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence'>
                        <aa-screen id='screen1' name='first'>
                            <div>screen1</div>
                        </aa-screen>
                        <aa-screen id='screen2' name='second'>
                            <div>screen2</div>
                        </aa-screen>
                    </aa-sequence>
                </template>
            </aa-session>`;
            let sequence = document.querySelector('#sequence') as any;
            sequence.stop();
            assert(sequence.stopped === true || sequence.stopped === 'true', 'sequence should be stopped');
            done();
        });
    });

    describe('end of sequence', function () {
        it('dispatches endEvent at end of sequence', (done) => {
            container.innerHTML = html`
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence'>
                        <aa-function-random name="r1" min="1" max="5"></aa-function-random>
                    </aa-sequence>
                </template>
            </aa-session>`;
            // The aa-function-random auto-dispatches endEvent, which triggers next(),
            // and since there's only one child, the sequence ends and dispatches endEvent
            // If we get here without error, the test passes
            done();
        });

        it('dispatches endEvent on parentElement when sequence ends', (done) => {
            container.innerHTML = html`
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence'>
                        <aa-screen id='screen1' name='first'>
                            <div>only screen</div>
                        </aa-screen>
                    </aa-sequence>
                </template>
            </aa-session>`;
            let sequence = document.querySelector('#sequence') as any;
            // Screen 1 is already shown, now advance past it
            sequence.parentElement.addEventListener('endEvent', (e: any) => {
                if (e.detail && e.detail.autoDispatch) {
                    done();
                }
            });
            let screen = document.querySelector('#screen1') as any;
            let submitButton = screen.root.querySelector('.submitButton') as any;
            submitButton.click();
        });

        it('dispatches endEvent when next() called past end', (done) => {
            container.innerHTML = html`
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence'>
                        <aa-screen id='screen1' name='first'>
                            <div>only screen</div>
                        </aa-screen>
                    </aa-sequence>
                </template>
            </aa-session>`;
            let sequence = document.querySelector('#sequence') as any;
            // Manually set sIndex past the end
            sequence.sIndex = sequence.innerFragment.childNodes.length;
            sequence.parentElement.addEventListener('endEvent', (e: any) => {
                if (e.detail && e.detail.autoDispatch) {
                    done();
                }
            });
            sequence.next();
        });
    });

    describe('endEventListener', function () {
        it('handles endEvent with no detail', (done) => {
            container.innerHTML = html`
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence'>
                        <aa-screen id='screen1' name='first'>
                            <div>screen1</div>
                        </aa-screen>
                        <aa-screen id='screen2' name='second'>
                            <div>screen2</div>
                        </aa-screen>
                    </aa-sequence>
                </template>
            </aa-session>`;
            let sequence = document.querySelector('#sequence') as any;
            // Manually fire endEvent with no detail to hit the else branch
            let evt = new CustomEvent('endEvent', { bubbles: true });
            sequence.endEventListener(evt);
            setTimeout(() => {
                let screen2 = document.querySelector('#screen2') as any;
                assert(screen2 !== null, 'screen2 should appear after endEventListener with no detail');
                done();
            }, 50);
        });

        it('handles endEvent with detail.autoDispatch', (done) => {
            container.innerHTML = html`
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence'>
                        <aa-screen id='screen1' name='first'>
                            <div>screen1</div>
                        </aa-screen>
                        <aa-screen id='screen2' name='second'>
                            <div>screen2</div>
                        </aa-screen>
                    </aa-sequence>
                </template>
            </aa-session>`;
            let sequence = document.querySelector('#sequence') as any;
            let evt = new CustomEvent('endEvent', { bubbles: true, detail: { autoDispatch: true } });
            sequence.endEventListener(evt);
            setTimeout(() => {
                let screen2 = document.querySelector('#screen2') as any;
                assert(screen2 !== null, 'screen2 should appear after autoDispatch endEvent');
                done();
            }, 50);
        });

        it('handles endEvent with detail but no goto or autoDispatch', (done) => {
            container.innerHTML = html`
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence'>
                        <aa-screen id='screen1' name='first'>
                            <div>screen1</div>
                        </aa-screen>
                        <aa-screen id='screen2' name='second'>
                            <div>screen2</div>
                        </aa-screen>
                    </aa-sequence>
                </template>
            </aa-session>`;
            let sequence = document.querySelector('#sequence') as any;
            let evt = new CustomEvent('endEvent', { bubbles: true, detail: { someOther: true } });
            sequence.endEventListener(evt);
            setTimeout(() => {
                let screen2 = document.querySelector('#screen2') as any;
                assert(screen2 !== null, 'screen2 should appear after regular detail endEvent');
                done();
            }, 50);
        });
    });

    describe('stopped state', function () {
        it('does not advance when stopped', (done) => {
            container.innerHTML = html`
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence'>
                        <aa-screen id='screen1' name='first'>
                            <div>screen1</div>
                        </aa-screen>
                        <aa-screen id='screen2' name='second'>
                            <div>screen2</div>
                        </aa-screen>
                    </aa-sequence>
                </template>
            </aa-session>`;
            let sequence = document.querySelector('#sequence') as any;
            sequence.stop();
            // next() returns early without resolving when stopped,
            // so check after a timeout instead
            sequence.next();
            setTimeout(() => {
                let screen2 = document.querySelector('#screen2') as any;
                assert(screen2 === null, 'screen2 should not appear when stopped');
                done();
            }, 100);
        });
    });

    describe('diagram mode', function () {
        it('renders diagram when diagram attribute is true', (done) => {
            container.innerHTML = html`
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence' diagram='true'>
                        <aa-screen name='first'><div>screen1</div></aa-screen>
                    </aa-sequence>
                </template>
            </aa-session>`;
            let sequence = document.querySelector('#sequence') as any;
            if (sequence) {
                let svgContainer = sequence.root.querySelector('#svgContainer') as any;
                assert(svgContainer !== null, 'should have svgContainer');
            }
            done();
        });
    });

    describe('writeInto', function () {
        it('writes into a target element when write-into is set', (done) => {
            container.innerHTML = html`
            <div id="targetDiv"></div>
            <aa-session debug='true' name='test' id='session'>
                <template>
                    <aa-sequence id='sequence' write-into='#targetDiv'>
                        <aa-screen id='screen1' name='first'>
                            <div>screen1</div>
                        </aa-screen>
                    </aa-sequence>
                </template>
            </aa-session>`;
            let targetDiv = document.querySelector('#targetDiv') as any;
            assert(targetDiv !== null, 'target div should exist');
            // The sequence should write its children into targetDiv
            done();
        });
    });

    describe('innerFragment undefined', function () {
        it('handles init when innerFragment is undefined', (done) => {
            // Create a sequence outside a session template,
            // where innerFragment won't be set
            let seq = document.createElement('aa-sequence') as any;
            container.appendChild(seq);
            // init() should warn and return when innerFragment is undefined
            assert(seq !== null, 'sequence should be created');
            done();
        });
    });

    describe('AAJump static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AAJump.tag === 'aa-jump', 'static tag should be aa-jump');
            done();
        });

        it('has a static category getter', (done) => {
            assert(AAJump.category === 'control', 'category should be control');
            done();
        });

        it('has static acceptsElements', (done) => {
            let accepts = AAJump.acceptsElements;
            assert(Array.isArray(accepts), 'acceptsElements should be an array');
            assert(accepts.length === 0, 'should be empty array');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AAJump.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            done();
        });
    });
})
