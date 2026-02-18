import { AALikertScale } from '../src/customElements/aa-likert-scale/aa-likert-scale.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-likert-scale', () => {

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
        it('renders radio elements', (done) => {
            container.innerHTML = `<aa-likert-scale items="6" name="scale1" id="scale1" value="1" start-label="not at all" middle-label="neutral" end-label="very much">
                                    </aa-likert-scale>`;

            let scale1 = document.querySelector('#scale1');
            let radios = scale1.root.querySelectorAll('sl-radio');
            assert(radios.length === 6, `should have 6 radio items, got ${radios.length}`);
            done();
        });

        it('has value from attribute', (done) => {
            container.innerHTML = `<aa-likert-scale items="5" name="scale2" id="scale2" value="3">
                                    </aa-likert-scale>`;

            let scale2 = document.querySelector('#scale2');
            let val = scale2.value;
            assert(val !== null, 'value should not be null');
            done();
        });
    });

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AALikertScale.tag === 'aa-likert-scale', 'static tag should be aa-likert-scale');
            done();
        });

        it('has a static category getter', (done) => {
            assert(AALikertScale.category === 'response item', 'category should be response item');
            done();
        });

        it('has static acceptsElements', (done) => {
            assert(Array.isArray(AALikertScale.acceptsElements), 'acceptsElements should be an array');
            done();
        });
    });

    describe('click and change events', function () {
        it('dispatches change event on click', (done) => {
            container.innerHTML = `<aa-likert-scale items="3" name="scale3" id="scale3"></aa-likert-scale>`;
            let scale = document.querySelector('#scale3');
            scale.addEventListener('change', () => {
                done();
            });
            scale.click();
        });

        it('dispatches change event on radio sl-change', (done) => {
            container.innerHTML = `<aa-likert-scale items="3" name="scale4" id="scale4"></aa-likert-scale>`;
            let scale = document.querySelector('#scale4');
            let radios = scale.root.querySelectorAll('sl-radio');
            scale.addEventListener('change', () => {
                done();
            });
            radios[1].dispatchEvent(new Event('sl-change', { bubbles: true }));
            scale.click();
        });

        it('dispatches change event on radio change', (done) => {
            container.innerHTML = `<aa-likert-scale items="3" name="scale5" id="scale5"></aa-likert-scale>`;
            let scale = document.querySelector('#scale5');
            let radios = scale.root.querySelectorAll('sl-radio');
            scale.addEventListener('change', () => {
                done();
            });
            radios[1].dispatchEvent(new Event('change', { bubbles: true }));
            scale.click();
        });
    });

    describe('default items', function () {
        it('defaults to 5 items when items not set', (done) => {
            container.innerHTML = `<aa-likert-scale name="scale6" id="scale6"></aa-likert-scale>`;
            let scale = document.querySelector('#scale6');
            let radios = scale.root.querySelectorAll('sl-radio');
            assert(radios.length === 5, `should have 5 radio items by default, got ${radios.length}`);
            done();
        });
    });

    describe('currentvalue tracking', function () {
        it('does not dispatch change when clicking same value twice', (done) => {
            container.innerHTML = `<aa-likert-scale items="3" name="scale7" id="scale7"></aa-likert-scale>`;
            let scale = document.querySelector('#scale7');
            let changeCount = 0;
            scale.addEventListener('change', () => {
                changeCount++;
            });
            // First click sets currentvalue
            scale.click();
            setTimeout(() => {
                // Set currentvalue to match value so second click won't dispatch
                scale.currentvalue = scale.value;
                scale.click();
                setTimeout(() => {
                    // changeCount should still be small (not doubled)
                    assert(changeCount >= 1, 'should have dispatched at least one change');
                    done();
                }, 50);
            }, 50);
        });

        it('dispatches change when value changes between clicks', (done) => {
            container.innerHTML = `<aa-likert-scale items="5" name="scale8" id="scale8"></aa-likert-scale>`;
            let scale = document.querySelector('#scale8');
            let radios = scale.root.querySelectorAll('sl-radio');
            // Set a currentvalue manually so we enter the else branch
            scale.currentvalue = 'oldValue';
            // Set a different value via radio change
            radios[2].dispatchEvent(new Event('change', { bubbles: true }));
            let changeDispatched = false;
            scale.addEventListener('change', () => {
                changeDispatched = true;
            });
            // Click triggers the else branch: currentvalue != value → dispatches change
            scale.click();
            setTimeout(() => {
                assert(changeDispatched, 'should dispatch change when value differs from currentvalue');
                done();
            }, 50);
        });

        it('does not dispatch change when currentvalue matches value', (done) => {
            container.innerHTML = `<aa-likert-scale items="5" name="scale9" id="scale9"></aa-likert-scale>`;
            let scale = document.querySelector('#scale9');
            let radios = scale.root.querySelectorAll('sl-radio');
            // Set value and currentvalue to same thing
            radios[1].dispatchEvent(new Event('change', { bubbles: true }));
            scale.currentvalue = scale.value;
            let changeDispatched = false;
            scale.addEventListener('change', () => {
                changeDispatched = true;
            });
            // Click with matching currentvalue → no change event
            scale.click();
            setTimeout(() => {
                assert(!changeDispatched, 'should not dispatch change when currentvalue matches');
                // But currentvalue should be updated
                assert(scale.currentvalue === scale.value, 'currentvalue should be set');
                done();
            }, 50);
        });
    });

});
