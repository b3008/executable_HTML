import '../src/aa-session/aa-session.js'
import '../src/aa-choose/aa-choose.js'

// var expect = chai.expect;
var assert = chai.assert;
var container;



describe('aa-choose', () => {


    before(function () {
        container = document.createElement('div');
        document.body.appendChild(container);

    });

    beforeEach(function () {

        container.innerHTML = "";
    });

    describe('instance', function () {


        it('test instantiation of true and false cases', function (done) {

            container.innerHTML = html`
            
            <aa-session debug="true" name="test" id="session"> 
                
                <template>
                    here it's ok too
                    <aa-choose name="choose">

                    here it's ok also
                        <aa-when id="condition1" test="1==1">
                               <div> 1 =1  </div>
                        </aa-when>

                        <aa-when id-"condition2" test="1==2">
                                <div>1=2</div>
                        </aa-when>

                        <aa-otherwise>
                            otherwise
                        </aa-otherwise>
                    </aa-choose>

                  
                </template>

            </aa-session>`

            let c1 = document.querySelector("#condition1");
            let c2 = document.querySelector("#condition2");
            assert(c1!==null, "#condition1 should be on page");
            assert(c2==null, "#condition2 should not be on page");
         

            done();

        });

      



    })
})


