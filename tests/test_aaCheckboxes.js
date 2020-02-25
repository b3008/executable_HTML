import '../src/customElements/aa-checkboxes/aa-checkboxes.js';

// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-checkboxes', () => {

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
          
            container.innerHTML =  `<aa-checkboxes label='tata' value='h'>
                                        <aa-choice-item value='h' checked> choice one </aa-choice-item>
                                        <aa-choice-item checked> choice two </aa-choice-item>
                                    </aa-checkboxes>`;
            let boxes = document.querySelector('aa-checkboxes');
            assert(Array.isArray(boxes.value)===true, 'value should be an array');
            assert(boxes.value[0] === 'h', 'first item of value should be \'h\'');
            assert(boxes.value[1] === null, 'second item of value should be null');
            boxes.boxes[1].click();
            assert(boxes.value[1] === 'choice two', 'value should be text of aa-choice-item without value set');
            done();
        });

    })

    
    
})
