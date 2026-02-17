import { AASlider } from '../src/customElements/aa-slider/aa-slider.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-slider', () => {

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
            container.innerHTML = '<aa-slider min-label="min" max-label="max" value="30"></aa-slider>';
            let slider = document.querySelector('aa-slider');
            assert(slider.value == '30', `value of element is passed into its inputItem`);
            assert(slider.inputItem.value == '30', `value of element is passed into its inputItem`);
            done();
        });

        it('sets value', (done) => {
            container.innerHTML = '<aa-slider value="30"></aa-slider>';
            let slider = document.querySelector('aa-slider');
            slider.value = '30';
            assert(slider.value == '30', `value of element is passed into its inputItem`);
            assert(slider.inputItem.value == '30', `value of element is passed into its inputItem`);

            slider.inputItem.value = '30';
            assert(slider.value == '30', `setting value of inputItem sets value of element`);
            done();
        });

        it('gets maxLabel', (done) => {
            container.innerHTML = '<aa-slider max-label="label1"></aa-slider>';
            let slider = document.querySelector('aa-slider');
            assert(slider.maxLabel === 'label1', `label of element is set`);
            done();
        });

        it('sets maxLabel', (done) => {
            container.innerHTML = '<aa-slider value="30"></aa-slider>';
            let slider = document.querySelector('aa-slider');
            slider.maxLabel = 'label1';
            assert(slider.maxLabel === 'label1', `label of element is set`);
            done();
        });

        it('gets minLabel', (done) => {
            container.innerHTML = '<aa-slider min-label="label1"></aa-slider>';
            let slider = document.querySelector('aa-slider');
            assert(slider.minLabel === 'label1', `label of element is set`);
            done();
        });

        it('sets minLabel', (done) => {
            container.innerHTML = '<aa-slider value="30"></aa-slider>';
            let slider = document.querySelector('aa-slider');
            slider.minLabel = 'label1';
            assert(slider.minLabel === 'label1', `label of element is set`);
            done();
        });

    })
})
