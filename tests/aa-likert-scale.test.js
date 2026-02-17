import '../src/customElements/aa-likert-scale/aa-likert-scale.ts';
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

});
