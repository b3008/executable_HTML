var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-session', () => {


    before(function(){
        container = document.createElement('div');
        document.body.appendChild(container);

    });

    beforeEach(function() {
        // runs after each test in this block
        // document.body.innerHTML = '';
        container.innerHTML = "";
      });

    describe('instance', function () {


        it('should find session', function (done) {

            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session"> 
                
                    <aa-screen id="screen1" name="first">
                        <div>test</div>
                    </aa-screen>
                
            <aa-session>`

            let session = document.querySelector('#session');
            assert(session.tagName, "AA-SESSION")
            assert(session.name, "test")
            assert(session.debug, "true")
            done();            

        });

        
    })
})


