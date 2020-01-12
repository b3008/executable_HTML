var expect = chai.expect;
var assert = chai.assert;
var container;

import '../aa-sequence/aa-sequence.js'
describe('aa-sequence', () => {


    before(function () {
        container = document.createElement('div');
        document.body.appendChild(container);

    });

    beforeEach(function () {

        container.innerHTML = "";
    });

    describe('instance', function () {


        it('should find sequence and run it', function (done) {

            container.innerHTML = html`
            first session:
            <aa-session debug="true" name="test" id="session"> 
                  
                <template>
                    <aa-sequence id="sequence">
                    
                        <aa-screen id="screen1" name="second">
                                <div>screen1</div>
                        </aa-screen>

                        <aa-screen id="screen2" name="second">
                                <div>screen2</div>
                        </aa-screen>

                    </aa-sequence>

                  
                </template>

            </aa-session>`;

            let session = document.querySelector('#session');
            let sequence = document.querySelector("#sequence");
            let screen1 = document.querySelector("#screen1");
            let screen2 = document.querySelector("#screen2");
            assert(screen1!=null, "screen1 should not be null");
            assert(screen2==null, "screen2 should be null");
            sequence.next();
            screen2 = document.querySelector("#screen2");
            assert(screen2!=null, "screen2 should not be null after calling next");
            
            done();

        });

      



    })
})


