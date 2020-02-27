import '../src/customElements/aa-likert-scale/aa-likert-scale.js';

// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-likert-scale', () => {

    before(function () {
        container = document.querySelector('#container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'container';
            document.body.appendChild(container);
        }
    });


    beforeEach(function () {
        container.innerHTML = '';
    });

    describe('functions', function () {
        it('gets and sets value', (done) => {
          
            container.innerHTML =  `<aa-likert-scale name="scale1" id="scale1" value="1">
                                    </aa-likert-scale>`;
            
            let scale1 = document.querySelector('#scale1');
            scale1.choiceItems[1].click();
            assert(scale1.value === 2, 'value should be 2');
            
            
            done();
        });
    });

});
