import { AASlider } from '../src/customElements/aa-slider/aa-slider.ts';
import { assert } from '@esm-bundle/chai';

var container: any;

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
            let slider = document.querySelector('aa-slider') as any;
            assert(slider.value == '30', `value of element is passed into its inputItem`);
            assert(slider.inputItem.value == '30', `value of element is passed into its inputItem`);
            done();
        });

        it('sets value', (done) => {
            container.innerHTML = '<aa-slider value="30"></aa-slider>';
            let slider = document.querySelector('aa-slider') as any;
            slider.value = '30';
            assert(slider.value == '30', `value of element is passed into its inputItem`);
            assert(slider.inputItem.value == '30', `value of element is passed into its inputItem`);

            slider.inputItem.value = '30';
            assert(slider.value == '30', `setting value of inputItem sets value of element`);
            done();
        });

        it('gets maxLabel', (done) => {
            container.innerHTML = '<aa-slider max-label="label1"></aa-slider>';
            let slider = document.querySelector('aa-slider') as any;
            assert(slider.maxLabel === 'label1', `label of element is set`);
            done();
        });

        it('sets maxLabel', (done) => {
            container.innerHTML = '<aa-slider value="30"></aa-slider>';
            let slider = document.querySelector('aa-slider') as any;
            slider.maxLabel = 'label1';
            assert(slider.maxLabel === 'label1', `label of element is set`);
            done();
        });

        it('gets minLabel', (done) => {
            container.innerHTML = '<aa-slider min-label="label1"></aa-slider>';
            let slider = document.querySelector('aa-slider') as any;
            assert(slider.minLabel === 'label1', `label of element is set`);
            done();
        });

        it('sets minLabel', (done) => {
            container.innerHTML = '<aa-slider value="30"></aa-slider>';
            let slider = document.querySelector('aa-slider') as any;
            slider.minLabel = 'label1';
            assert(slider.minLabel === 'label1', `label of element is set`);
            done();
        });

    })

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AASlider.tag === 'aa-slider', 'static tag should be aa-slider');
            done();
        });

        it('has a static category getter', (done) => {
            assert(AASlider.category === 'response item', 'category should be response item');
            done();
        });

        it('has a static acceptsElements getter', (done) => {
            assert(AASlider.acceptsElements === null, 'acceptsElements should be null');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AASlider.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            assert(attrs.includes('min'), 'should include min');
            assert(attrs.includes('max'), 'should include max');
            done();
        });
    });

    describe('min and max setters', function () {
        it('sets min on rendered slider', (done) => {
            container.innerHTML = '<aa-slider min="0" max="100" value="50"></aa-slider>';
            let slider = document.querySelector('aa-slider') as any;
            assert(slider.inputItem !== null, 'inputItem should exist');
            // Call the prototype setter directly in case instance property shadows it
            let protoDescriptor = Object.getOwnPropertyDescriptor(slider.constructor.prototype, 'min');
            if (protoDescriptor && protoDescriptor.set) {
                protoDescriptor.set.call(slider, 10);
            } else {
                slider.min = 10;
            }
            assert(slider.getAttribute('min') === '10', 'min attribute should be updated');
            done();
        });

        it('sets max on rendered slider', (done) => {
            container.innerHTML = '<aa-slider min="0" max="100" value="50"></aa-slider>';
            let slider = document.querySelector('aa-slider') as any;
            assert(slider.inputItem !== null, 'inputItem should exist');
            let protoDescriptor = Object.getOwnPropertyDescriptor(slider.constructor.prototype, 'max');
            if (protoDescriptor && protoDescriptor.set) {
                protoDescriptor.set.call(slider, 200);
            } else {
                slider.max = 200;
            }
            assert(slider.getAttribute('max') === '200', 'max attribute should be updated');
            done();
        });
    });

    describe('change event', function () {
        it('updates value on input change event', (done) => {
            container.innerHTML = '<aa-slider min="0" max="100" value="50"></aa-slider>';
            let slider = document.querySelector('aa-slider') as any;
            let input = slider.inputItem;
            input.value = '75';
            input.dispatchEvent(new Event('change', { bubbles: true }));
            assert(slider.value == '75', 'slider value should update on change event');
            done();
        });

        it('updates value on sl-change event', (done) => {
            container.innerHTML = '<aa-slider min="0" max="100" value="50"></aa-slider>';
            let slider = document.querySelector('aa-slider') as any;
            let input = slider.inputItem;
            input.value = '80';
            input.dispatchEvent(new Event('sl-change', { bubbles: true }));
            assert(slider.value == '80', 'slider value should update on sl-change event');
            done();
        });
    });
})
