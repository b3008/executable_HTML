import '../src/customElements/aa-session/aa-session.js';
import '../src/customElements/aa-variable/aa-variable.js';
// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-variable', () => {

    before(function(){
        container = document.querySelector('#container');
        if(!container){
            container = document.createElement('div');
            container.id = "container";
            document.body.appendChild(container);
        }
    });


    beforeEach(function() {
        container.innerHTML = "";
    });

    describe('instance', function () {
        it('should have name and value', function (done) {

            container.innerHTML = html`
            first session:
            <aa-session debug="true" name="test" id="session"> 
                <template>
                    <aa-variable id="v" name="var1" value="val1" debug="true"></aa-variable>
                </template>
            </aa-session>`;

            let session = document.querySelector('#session');
            let var1 = document.querySelector('#v');
            assert(var1.name==='var1', 'name should be var1');
            assert(var1.value==='val1', 'value should be val1');
            assert(session._mem.dataset[var1.name]===var1.value, 'variable name and value is reflected in session memory\'s dataset');
            
            done();            

        });
        
    })
})


