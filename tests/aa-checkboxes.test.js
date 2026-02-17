import '../src/customElements/aa-checkboxes/aa-checkboxes.ts';
import { assert } from '@esm-bundle/chai';

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
        it('renders as checkboxes', (done) => {
            container.innerHTML = `<aa-checkboxes label='tata' value='h'>
                                        <aa-choice-item value='h' checked> choice one </aa-choice-item>
                                        <aa-choice-item checked> choice two </aa-choice-item>
                                    </aa-checkboxes>`;
            let boxes = document.querySelector('aa-checkboxes');
            let items = boxes.querySelectorAll('aa-choice-item');
            assert(items.length === 2, 'should have 2 choice items');
            assert(items[0].kind === 'checkBox', 'items should be checkboxes');
            done();
        });

        it('gets value as array', (done) => {
            container.innerHTML = `<aa-checkboxes label='tata' value='h'>
                                        <aa-choice-item value='h' checked> choice one </aa-choice-item>
                                        <aa-choice-item> choice two </aa-choice-item>
                                    </aa-checkboxes>`;
            let boxes = document.querySelector('aa-checkboxes');
            assert(Array.isArray(boxes.value) === true, 'value should be an array');
            done();
        });

    })


})
