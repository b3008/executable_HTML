import '../src/customElements/aa-multiple-choice/aa-multiple-choice.ts';
import '../src/customElements/aa-checkboxes/aa-checkboxes.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-choice-item', () => {

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

    describe('as radio inside aa-multiple-choice', function () {
        it('renders as a radio button', (done) => {
            container.innerHTML = `<aa-multiple-choice value="a">
                <aa-choice-item value="a">Option A</aa-choice-item>
                <aa-choice-item value="b">Option B</aa-choice-item>
            </aa-multiple-choice>`;
            let items = document.querySelectorAll('aa-choice-item');
            assert(items.length === 2, 'should have 2 choice items');
            assert(items[0].kind === 'radioButton', 'kind should be radioButton');
            done();
        });
    });

    describe('as checkbox inside aa-checkboxes', function () {
        it('renders as a checkbox', (done) => {
            container.innerHTML = `<aa-checkboxes>
                <aa-choice-item value="x">Check X</aa-choice-item>
                <aa-choice-item value="y">Check Y</aa-choice-item>
            </aa-checkboxes>`;
            let items = document.querySelectorAll('aa-choice-item');
            assert(items[0].kind === 'checkBox', 'kind should be checkBox inside aa-checkboxes');
            done();
        });
    });

    describe('value', function () {
        it('gets value from attribute', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="myVal">Label</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item');
            assert(item.value === 'myVal', 'value should come from attribute');
            done();
        });

        it('falls back to textContent when no value attribute', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item>Fallback Text</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item');
            assert(item.value === 'Fallback Text', 'value should fallback to trimmed textContent');
            done();
        });
    });

    describe('events', function () {
        it('dispatches change event on click', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="a">A</aa-choice-item>
                <aa-choice-item value="b">B</aa-choice-item>
            </aa-multiple-choice>`;
            let mc = document.querySelector('aa-multiple-choice');
            mc.addEventListener('change', () => {
                done();
            });
            let items = document.querySelectorAll('aa-choice-item');
            items[1].item.click();
        });
    });
})
