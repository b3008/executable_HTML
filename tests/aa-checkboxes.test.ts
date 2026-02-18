import { AACheckboxes } from '../src/customElements/aa-checkboxes/aa-checkboxes.ts';
import { assert } from '@esm-bundle/chai';

var container: any;

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
            let boxes = document.querySelector('aa-checkboxes') as any;
            let items = boxes.querySelectorAll('aa-choice-item') as any;
            assert(items.length === 2, 'should have 2 choice items');
            assert(items[0].kind === 'checkBox', 'items should be checkboxes');
            done();
        });

        it('gets value as array', (done) => {
            container.innerHTML = `<aa-checkboxes label='tata' value='h'>
                                        <aa-choice-item value='h' checked> choice one </aa-choice-item>
                                        <aa-choice-item> choice two </aa-choice-item>
                                    </aa-checkboxes>`;
            let boxes = document.querySelector('aa-checkboxes') as any;
            assert(Array.isArray(boxes.value) === true, 'value should be an array');
            done();
        });

    })

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AACheckboxes.tag === 'aa-checkboxes', 'static tag should be aa-checkboxes');
            done();
        });

        it('has a static category getter', (done) => {
            assert(AACheckboxes.category === 'response item', 'category should be response item');
            done();
        });

        it('has static acceptsElements', (done) => {
            let accepts = AACheckboxes.acceptsElements;
            assert(Array.isArray(accepts), 'acceptsElements should be an array');
            assert(accepts.includes('aa-choice-item'), 'should include aa-choice-item');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AACheckboxes.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            done();
        });
    });

    describe('value setter', function () {
        it('sets value with array', (done) => {
            container.innerHTML = `<aa-checkboxes>
                <aa-choice-item value='a'> A </aa-choice-item>
                <aa-choice-item value='b'> B </aa-choice-item>
            </aa-checkboxes>`;
            let boxes = document.querySelector('aa-checkboxes') as any;
            boxes.value = ['a'];
            let items = boxes.querySelectorAll('aa-choice-item') as any;
            assert(items[0].checked === true, 'first item should be checked');
            assert(items[1].checked === false, 'second item should not be checked');
            done();
        });

        it('sets value with single string (converts to array)', (done) => {
            container.innerHTML = `<aa-checkboxes>
                <aa-choice-item value='a'> A </aa-choice-item>
                <aa-choice-item value='b'> B </aa-choice-item>
            </aa-checkboxes>`;
            let boxes = document.querySelector('aa-checkboxes') as any;
            boxes.value = 'b';
            let items = boxes.querySelectorAll('aa-choice-item') as any;
            assert(items[0].checked === false, 'first item should not be checked');
            assert(items[1].checked === true, 'second item should be checked');
            done();
        });
    });

    describe('change event propagation', function () {
        it('propagates change event to parent', (done) => {
            container.innerHTML = `<div id="wrapper"><aa-checkboxes>
                <aa-choice-item value='a'> A </aa-choice-item>
                <aa-choice-item value='b'> B </aa-choice-item>
            </aa-checkboxes></div>`;
            let wrapper = document.querySelector('#wrapper') as any;
            wrapper.addEventListener('change', (e: any) => {
                assert(e.detail !== undefined, 'change event should have detail');
                done();
            });
            let items = document.querySelectorAll('aa-choice-item') as any;
            items[0].item.click();
        });
    });

    describe('toJSON', function () {
        it('returns JSON with items', (done) => {
            container.innerHTML = `<aa-checkboxes>
                <aa-choice-item value='a'> A </aa-choice-item>
                <aa-choice-item value='b'> B </aa-choice-item>
            </aa-checkboxes>`;
            let boxes = document.querySelector('aa-checkboxes') as any;
            let json = boxes.toJSON();
            assert(json !== null, 'toJSON should return something');
            assert('aa-checkboxes' in json, 'should have aa-checkboxes key');
            assert(Array.isArray(json['aa-checkboxes'].items), 'should have items array');
            done();
        });
    });
})
