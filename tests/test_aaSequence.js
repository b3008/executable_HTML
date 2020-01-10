var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-sequence', () => {


    before(function () {
        container = document.createElement('div');
        document.body.appendChild(container);

    });

    beforeEach(function () {

        container.innerHTML = "";
    });

    describe('instance', function () {


        it('should find sequence', function (done) {

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

            </aa-session>`

            // let session = document.querySelector('#session');
            // let sequence = document.querySelector("#sequence");
            // let screen1 = document.querySelector("#screen1");
            // let screen2 = document.querySelector("#screen2")
            
            done();

        });

      



    })
})


