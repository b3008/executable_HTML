import '../src/customElements/aa-session/aa-session.js';
import '../src/customElements/aa-choose/aa-choose.js';

// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-choose', () => {

    before(function(){
        container = document.querySelector('#container');
        if(!container){
            container = document.createElement('div');
            container.id = "container";
            document.body.appendChild(container);
        }
    });

    beforeEach(function () {
        container.innerHTML = "";
    });

    describe('instance', function () {

        it('empty aa-choose dispatches endEvent instantly, both in and out of a session',  (done)=> {
        
            let outsideSessionTest = false;
            let div = document.createElement('div');
            div.addEventListener('endEvent', (e)=>{
                outsideSessionTest = true;
         
            });
            div.innerHTML = '<aa-choose></aa-choose>';
            container.appendChild(div)
            
                
            let div2 = document.createElement('div');
            div2.addEventListener('sessionEndEvent', (e)=>{

                assert(outsideSessionTest == true, "previous event should have been received");
                assert(e.detail=='sessionEnd', "endEvent should ultimately come from the session")
                done();
            });
            div2.innerHTML = '<aa-session><aa-choose></aa-choose></aa-session>';

            container.appendChild(div2)
            
            

            
        })

        it('tests instantiation of true and false cases', function (done) {

            container.innerHTML = html`
            
            <aa-session debug="true" name="test" id="session"> 
                
                <template>
                    here it's ok too
                    <aa-choose name="choose">

                    here it's ok also
                        <aa-when id="condition1" test="1==1">
                               <div id="result1"> 1 =1  </div>
                        </aa-when>

                        <aa-when id-"condition2" test="1==2">
                                <div id="result2">1=2</div>
                        </aa-when>

                        <aa-otherwise>
                            otherwise
                        </aa-otherwise>
                    </aa-choose>

                  
                </template>

            </aa-session>`

            let c1 = document.querySelector("#condition1");
            let r1 = document.querySelector("#result1");
            let c2 = document.querySelector("#condition2");
            assert(c1!==null, "#condition1 should be on page");
            assert(r1!==null, "#result1 should be on page");
            assert(c2==null, "#condition2 should not be on page");
         

            done();

        });

        it('parses nested expressions', (done)=>{
            

            let div = document.createElement('div');
            div.addEventListener('endEvent', (e)=>{
            });
            div.innerHTML = html`
            <aa-session id="session" data-myVar="1" data-yourVar="2" debug=="true">
                    session with choose element;
                    <aa-choose id="choose">                       
                    </aa-choose>
                
            </aa-session>
            `
            container.appendChild(div);
            
            let choose = document.querySelector("#choose");
            let exp = choose.replaceExpressionIdentifiersWithValues('(myVar==1)||(yourVar==2)');
            assert( exp=='(1==1)||(2==2)', "variable names should be replaced by their values: " + exp);
            done();
        })



    })
})


