import '../src/customElements/aa-sequence/aa-sequence.js';
import '../src/customElements/aa-session/aa-session.js';
import '../src/customElements/aa-screen/aa-screen.js';
import '../src/customElements/aa-function/aa-function-random.js';

// var expect = chai.expect;
var assert = chai.assert;
var container;

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

            let session = document.querySelector('#session');
            let sequence = document.querySelector('#sequence');

            let screen1 = document.querySelector('#screen1');
            let screen2 = document.querySelector('#screen2');
            assert(sequence.currentNode.id != null, 'screen1 should not be null');
            assert(screen2 == null, 'screen2 should be null');
            sequence.next().then(() => {
                ;
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

            let session = document.querySelector('#session');
            let sequence = document.querySelector('#sequence');
            let screen1 = document.querySelector('#screen1');
            let screen2 = document.querySelector('#screen2');


            assert(sequence.currentNode.name == 'first', 'currentNode should be named first');
            sequence.next().then((f) => {
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

            let session = document.querySelector('#session');
            let sequence = document.querySelector('#sequence');
            let screen1 = document.querySelector('#screen1');
            let screen2 = document.querySelector('#screen2');

            assert(sequence.currentNode.name == 'second', 'currentNode should be named second');
            assert(screen1 == null, 'screen 1 should be null');

            done();
        })




    })
})


