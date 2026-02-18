import '../src/customElements/aa-session/aa-session.ts';
import { AAFunctionRandom } from '../src/customElements/aa-function/aa-function-random.ts';
import { assert } from '@esm-bundle/chai';

var container: any;

describe('aa-function-random', () => {

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

    describe('random generation', function () {
        it('generates a value in range', (done) => {
            container.innerHTML = html`
            <aa-session debug="true" name="test" id="session">
                <template>
                    <aa-function-random id="rand" name="myRandom" min="1" max="10" debug="true"></aa-function-random>
                </template>
            </aa-session>`;

            let session = document.querySelector('#session') as any;
            let mem = session._mem;
            let val = Number(mem.getData('myRandom'));
            assert(val >= 1, 'value should be >= min');
            assert(val <= 10, 'value should be <= max');
            done();
        });

        it('dispatches endEvent', (done) => {
            let div = document.createElement('div') as any;
            div.addEventListener('endEvent', (e: any) => {
                assert(e.detail.autoDispatch === true, 'endEvent detail should have autoDispatch');
                done();
            });
            div.innerHTML = '<aa-function-random name="r" min="1" max="5" debug="true"></aa-function-random>';
            container.appendChild(div);
        });
    });

    describe('getRandomInt', function () {
        it('returns integers', (done) => {
            let el = document.createElement('aa-function-random') as any;
            for (let i = 0; i < 20; i++) {
                let val = el.getRandomInt(1, 10);
                assert(Number.isInteger(val), 'should return an integer');
                assert(val >= 1 && val <= 10, `value ${val} should be between 1 and 10`);
            }
            done();
        });
    });

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AAFunctionRandom.tag === 'aa-function-random', 'static tag should be aa-function-random');
            done();
        });

        it('has a static acceptsElements getter', (done) => {
            assert(AAFunctionRandom.acceptsElements === null, 'acceptsElements should be null');
            done();
        });
    });
})
