import '../src/customElements/aa-multiple-choice/aa-multiple-choice.ts';
import { assert } from '@esm-bundle/chai';

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
        it('renders choice items', (done) => {
            container.innerHTML = `<aa-multiple-choice label='tata' value='h' horizontal>
                                        <aa-choice-item value='h'> choice one </aa-choice-item>
                                        <aa-choice-item> choice two </aa-choice-item>
                                    </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            let items = mChoice.querySelectorAll('aa-choice-item');
            assert(items.length === 2, 'should have 2 choice items');
            done();
        });

        it('has value attribute set', (done) => {
            container.innerHTML = `<aa-multiple-choice label='tata' value='h' horizontal>
                                        <aa-choice-item value='h'> choice one </aa-choice-item>
                                        <aa-choice-item> choice two </aa-choice-item>
                                    </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            assert(mChoice.getAttribute('value') === 'h', 'value attribute should be h');
            done();
        });

        it('updates value on click', (done) => {
            container.innerHTML = `<aa-multiple-choice label='tata' value='h' horizontal>
                                        <aa-choice-item value='h'> choice one </aa-choice-item>
                                        <aa-choice-item value='b'> choice two </aa-choice-item>
                                    </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            setTimeout(() => {
                let items = mChoice.querySelectorAll('aa-choice-item');
                items[1].item.click();
                assert(mChoice.value === 'b', 'value should be b after clicking second item');
                done();
            }, 0);
        });
    });

});
