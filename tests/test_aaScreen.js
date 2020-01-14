import '../src/aa-screen/aa-screen.js';

// var expect = chai.expect;
var assert = chai.assert;

var container;

describe('aa-screen', () => {


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
        it('should find screen1 with name "first"', function (done) {

            container.innerHTML = `
                <aa-screen id="screen1" name="first">
                    <div>test</div>
                </aa-screen>`
            let screen1 = document.querySelector('#screen1');
            assert(screen1.name==="first", "screen1 shold have a name attribute");
            done();

        });


    })
})


