import { AATextAnswer } from '../src/customElements/aa-text-answer/aa-text-answer.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-text-answer', () => {

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
        it('gets value', (done) => {
            container.innerHTML = '<aa-text-answer value="v1"></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            assert(textAnswer.value === 'v1', `value of element is set`);
            assert(textAnswer.inputItem.value === 'v1', `value of element is passed into its inputItem`);
            done();
        });

        it('sets value', (done) => {
            container.innerHTML = '<aa-text-answer></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            textAnswer.value = 'v1';
            assert(textAnswer.value === 'v1', `value of element is set`);
            assert(textAnswer.inputItem.value === 'v1', `value of element is passed into its inputItem`);
            done();
        });

        it('gets label', (done) => {
            container.innerHTML = '<aa-text-answer label="label1"></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            assert(textAnswer.label === 'label1', `label of element is set`);
            done();
        });

        it('sets label', (done) => {
            container.innerHTML = '<aa-text-answer value="v1"></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            textAnswer.label = 'label1';
            assert(textAnswer.label === 'label1', `label of element is set`);
            done();
        });

        it('renders an input element', (done) => {
            container.innerHTML = '<aa-text-answer label="tata" value="val"></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            assert(textAnswer.inputItem !== null, 'inputItem should exist');
            assert(textAnswer.inputItem.tagName === 'INPUT' || textAnswer.inputItem.tagName === 'SL-INPUT', 'inputItem should be an input or sl-input');
            assert(textAnswer.value === 'val', 'element retains value');
            assert(textAnswer.label === 'tata', 'element retains label');
            done();
        });
    })

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AATextAnswer.tag === 'aa-text-answer', 'static tag should be aa-text-answer');
            done();
        });

        it('has a static category getter', (done) => {
            assert(AATextAnswer.category === 'response item', 'category should be response item');
            done();
        });

        it('has a static acceptsElements getter', (done) => {
            assert(AATextAnswer.acceptsElements === null, 'acceptsElements should be null');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AATextAnswer.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            assert(attrs.includes('label'), 'should include label');
            assert(attrs.includes('value'), 'should include value');
            done();
        });
    });

    describe('change event handlers', function () {
        it('dispatches change on input change event', (done) => {
            container.innerHTML = '<aa-text-answer></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            textAnswer.addEventListener('change', () => {
                done();
            });
            let input = textAnswer.inputItem;
            input.value = 'new value';
            input.dispatchEvent(new Event('change', { bubbles: true }));
        });

        it('dispatches change on sl-change event', (done) => {
            container.innerHTML = '<aa-text-answer></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            textAnswer.addEventListener('change', () => {
                done();
            });
            let input = textAnswer.inputItem;
            input.value = 'new value';
            input.dispatchEvent(new Event('sl-change', { bubbles: true }));
        });

        it('updates value on keyup event', (done) => {
            container.innerHTML = '<aa-text-answer></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            let input = textAnswer.inputItem;
            input.value = 'typed';
            input.dispatchEvent(new Event('keyup', { bubbles: true }));
            assert(textAnswer.value === 'typed', 'value should update on keyup');
            done();
        });

        it('updates value on sl-input event', (done) => {
            container.innerHTML = '<aa-text-answer></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            let input = textAnswer.inputItem;
            input.value = 'live-typed';
            input.dispatchEvent(new Event('sl-input', { bubbles: true }));
            assert(textAnswer.value === 'live-typed', 'value should update on sl-input');
            done();
        });

        it('clears previous keyup timeout on rapid keyup events and dispatches change', function (done) {
            this.timeout(5000);
            container.innerHTML = '<aa-text-answer></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            let input = textAnswer.inputItem;
            // First keyup sets the timeout
            input.value = 'first';
            input.dispatchEvent(new Event('keyup', { bubbles: true }));
            // Second keyup should clear the first timeout
            input.value = 'second';
            input.dispatchEvent(new Event('keyup', { bubbles: true }));
            assert(textAnswer.value === 'second', 'value should be updated from second keyup');
            // Wait for setTimeout(1500) to fire and dispatch change
            textAnswer.addEventListener('change', () => {
                done();
            });
        });

        it('clears previous sl-input timeout on rapid sl-input events and dispatches change', function (done) {
            this.timeout(5000);
            container.innerHTML = '<aa-text-answer></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            let input = textAnswer.inputItem;
            // First sl-input sets the timeout
            input.value = 'first';
            input.dispatchEvent(new Event('sl-input', { bubbles: true }));
            // Second sl-input should clear the first timeout
            input.value = 'second';
            input.dispatchEvent(new Event('sl-input', { bubbles: true }));
            assert(textAnswer.value === 'second', 'value should be updated from second sl-input');
            // Wait for setTimeout(1500) to fire and dispatch change
            textAnswer.addEventListener('change', () => {
                done();
            });
        });
    });
})
