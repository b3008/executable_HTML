var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-session', () => {


    before(function(){
        container = document.createElement('div');
        document.body.appendChild(container);

    });

    afterEach(function() {
        // runs after each test in this block
        // document.body.innerHTML = '';
        container.innerHTML = "";
      });

    describe('instance', function () {


        it('should find session', function (done) {

            container.innerHTML = `
                <aa-screen id="screen1" name="first">
                    <div>test</div>
                </aa-screen>`
            let screen1 = document.querySelector('#screen1');
            if(screen1.tagName=="AA-SCREEN")
            {
                done();
            }

        });

        it('screen1 should have a name set', function(done){
            
            let screen1 = document.querySelector('#screen1');
            if(screen1.name=="first")
            {
                done();
            }
        })
    })
})


