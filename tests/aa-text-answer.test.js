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
})
