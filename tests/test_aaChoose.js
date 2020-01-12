var expect = chai.expect;
var assert = chai.assert;
var container;

import '../aa-session/aa-session.js'
import '../aa-choose/aa-choose.js'

describe('aa-choose', () => {


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
                    
                    <aa-choose name="choose">

                    </aa-choose>

                  
                </template>

            </aa-session>`

            done();

        });

      



    })
})


