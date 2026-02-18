import '../src/customElements/aa-multiple-choice/aa-multiple-choice.ts';
import { AAChoiceItem } from '../src/customElements/aa-choice-item/aa-choice-item.ts';
import '../src/customElements/aa-checkboxes/aa-checkboxes.ts';
import { assert } from '@esm-bundle/chai';

var container: any;

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
            let items = document.querySelectorAll('aa-choice-item') as any;
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
            let items = document.querySelectorAll('aa-choice-item') as any;
            assert(items[0].kind === 'checkBox', 'kind should be checkBox inside aa-checkboxes');
            done();
        });
    });

    describe('value', function () {
        it('gets value from attribute', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="myVal">Label</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item') as any;
            assert(item.value === 'myVal', 'value should come from attribute');
            done();
        });

        it('falls back to textContent when no value attribute', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item>Fallback Text</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item') as any;
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
            let mc = document.querySelector('aa-multiple-choice') as any;
            mc.addEventListener('change', () => {
                done();
            });
            let items = document.querySelectorAll('aa-choice-item') as any;
            items[1].item.click();
        });
    });

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AAChoiceItem.tag === 'aa-choice-item', 'static tag should be aa-choice-item');
            done();
        });

        it('has static acceptsElements', (done) => {
            let accepts = AAChoiceItem.acceptsElements;
            assert(Array.isArray(accepts), 'acceptsElements should be an array');
            assert(accepts.includes('#text'), 'should include #text');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AAChoiceItem.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            assert(attrs.includes('name'), 'should include name');
            done();
        });
    });

    describe('orientation', function () {
        it('sets orientation to vertical', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="a">A</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item') as any;
            item.orientation = 'vertical';
            assert(item.orientation === 'vertical', 'orientation should be vertical');
            done();
        });

        it('sets orientation to horizontal', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="a">A</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item') as any;
            item.orientation = 'horizontal';
            assert(item.orientation === 'horizontal', 'orientation should be horizontal');
            done();
        });
    });

    describe('checked setter with string values', function () {
        it('sets checked to false from string "false"', (done) => {
            container.innerHTML = `<aa-checkboxes>
                <aa-choice-item value="a">A</aa-choice-item>
            </aa-checkboxes>`;
            let item = document.querySelector('aa-choice-item') as any;
            item.checked = 'true';
            assert(item.checked === true, 'checked should be true');
            item.checked = 'false';
            assert(item.checked === false, 'checked should be false');
            done();
        });
    });

    describe('value setter', function () {
        it('sets value via setter', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="a">A</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item') as any;
            item.value = 'newVal';
            assert(item.value === 'newVal', 'value should be updated');
            assert(item.getAttribute('value') === 'newVal', 'attribute should be updated');
            done();
        });
    });

    describe('staticObject and toJSON', function () {
        it('has staticObject getter', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="a">A</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item') as any;
            assert(item.staticObject === AAChoiceItem, 'staticObject should be AAChoiceItem');
            done();
        });

        it('toJSON returns object', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="a">A</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item') as any;
            let json = item.toJSON();
            assert(json !== null, 'toJSON should return something');
            assert(typeof json === 'object', 'toJSON should return an object');
            assert('aa-choice-item' in json, 'should have aa-choice-item key');
            done();
        });
    });

    describe('reconnection cleans up old item', function () {
        it('removes old radio item when reconnected', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="a">A</aa-choice-item>
            </aa-multiple-choice>`;
            let item = document.querySelector('aa-choice-item') as any;
            let mc = document.querySelector('aa-multiple-choice') as any;
            assert(item.item !== null, 'item should have radio element');
            // Move the element to trigger a new connectedCallback
            let detached = mc.removeChild(item);
            mc.appendChild(detached);
            assert(item.item !== null, 'item should be recreated');
            done();
        });

        it('removes old checkbox item when reconnected', (done) => {
            container.innerHTML = `<aa-checkboxes>
                <aa-choice-item value="x">X</aa-choice-item>
            </aa-checkboxes>`;
            let item = document.querySelector('aa-choice-item') as any;
            let boxes = document.querySelector('aa-checkboxes') as any;
            assert(item.item !== null, 'item should have checkbox element');
            let detached = boxes.removeChild(item);
            boxes.appendChild(detached);
            assert(item.item !== null, 'item should be recreated');
            done();
        });
    });

    describe('label click handlers', function () {
        it('dispatches change on label click for checkbox', (done) => {
            container.innerHTML = `<aa-checkboxes>
                <aa-choice-item value="x">Check X</aa-choice-item>
            </aa-checkboxes>`;
            let boxes = document.querySelector('aa-checkboxes') as any;
            let item = document.querySelector('aa-choice-item') as any;
            boxes.addEventListener('change', () => {
                done();
            });
            item.label.click();
        });

        it('dispatches change on label click for radio', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value="a">A</aa-choice-item>
                <aa-choice-item value="b">B</aa-choice-item>
            </aa-multiple-choice>`;
            let mc = document.querySelector('aa-multiple-choice') as any;
            let items = document.querySelectorAll('aa-choice-item') as any;
            mc.addEventListener('change', () => {
                done();
            });
            items[1].label.click();
        });
    });
})
