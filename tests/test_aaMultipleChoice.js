import '../src/customElements/aa-multiple-choice/aa-multiple-choice.js';

// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-multiple-choice', () => {

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
          
            container.innerHTML =  `<aa-multiple-choice label='tata' value='h'>
                                        <aa-choice-item value='h'> choice one </aa-choice-item>
                                        <aa-choice-item> choice two </aa-choice-item>
                                    </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            assert(mChoice.value === 'h', 'value should be h');
            mChoice.radioGroup.children[1].click();
            assert(mChoice.value === 'choice two', 'value should be text of aa-choice-item without value set');
            done();
        });

        it('is horizontal', (done) => {
          
            container.innerHTML =  `<aa-multiple-choice label='tata' value='h' horizontal>
                                        <aa-choice-item value='h'> choice one </aa-choice-item>
                                        <aa-choice-item> choice two </aa-choice-item>
                                    </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            assert(mChoice.value === 'h', 'value should be h');
            mChoice.radioGroup.children[1].click();
            assert(mChoice.value === 'choice two', 'value should be text of aa-choice-item without value set');
            done();

            console.log(mChoice.toYAML());
        });


    });

});
