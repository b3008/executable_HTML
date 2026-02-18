import { AALabel } from '../src/customElements/aa-label/aa-label.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-label', () => {

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

    describe('instance', function () {
        it('renders as a custom element', (done) => {
            container.innerHTML = '<aa-label>Test Label</aa-label>';
            let label = document.querySelector('aa-label');
            assert(label !== null, 'aa-label should exist');
            assert(label.tagName === 'AA-LABEL', 'tag name should be AA-LABEL');
            done();
        });

        it('has shadow DOM with a slot', (done) => {
            container.innerHTML = '<aa-label>Test Label</aa-label>';
            let label = document.querySelector('aa-label');
            assert(label.root !== undefined, 'should have a shadow root');
            let slot = label.root.querySelector('slot');
            assert(slot !== null, 'shadow DOM should contain a slot');
            done();
        });

        it('projects slotted content', (done) => {
            container.innerHTML = '<aa-label>My Label Text</aa-label>';
            let label = document.querySelector('aa-label');
            assert(label.textContent.trim() === 'My Label Text', 'should project text content');
            done();
        });
    });

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AALabel.tag === 'aa-label', 'static tag should be aa-label');
            done();
        });
    });
})
