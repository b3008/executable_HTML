import '../src/aa-session/aa-session.js'

// var expect = chai.expect;
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
            first session:
            <aa-session debug="true" name="test" id="session"> 
                    some text;

                    <div>my div</div>
                    <aa-screen id="screen1" name="first">
                        <div>test</div>
                    </aa-screen>

                    <template>
                        <aa-screen id="screen2" name="second">
                            <div>test 2</div>
                        </aa-screen>
                    </template>

            </aa-session>`;

            let session = document.querySelector('#session');
            let screen = document.querySelector("#screen1");
            assert(session.tagName=="AA-SESSION", "AA-SESSION")
            assert(session.name=="test", "test")
            assert(session.debug===true, "true")
            assert(screen!==null, "screen should be an object")
            done();            

        });

        it('session should not render contents', function (done) {

            container.innerHTML = html`
            second session:
            <aa-session debug=true name="test" id="session" should-run=false> 
                <template>
                    <aa-screen id="screen1" name="first">
                        <div>test</div>
                    </aa-screen>
                </template>
            <aa-session>`;

            let session = document.querySelector('#session');
            let screen = document.querySelector("#screen1");
            assert(session.shouldRun==false, "shouldRun is false")
            assert(session.name=="test", "session.name should be test")
            assert(session.debug, "session.debug should be true");
            assert(screen===null, "screen should be null")
            done();            

        });


        
    })
})


