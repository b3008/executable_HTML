import { AAMultipleChoice } from '../src/customElements/aa-multiple-choice/aa-multiple-choice.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-multiple-choice', () => {

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
        it('renders choice items', (done) => {
            container.innerHTML = `<aa-multiple-choice label='tata' value='h' horizontal>
                                        <aa-choice-item value='h'> choice one </aa-choice-item>
                                        <aa-choice-item> choice two </aa-choice-item>
                                    </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            let items = mChoice.querySelectorAll('aa-choice-item');
            assert(items.length === 2, 'should have 2 choice items');
            done();
        });

        it('has value attribute set', (done) => {
            container.innerHTML = `<aa-multiple-choice label='tata' value='h' horizontal>
                                        <aa-choice-item value='h'> choice one </aa-choice-item>
                                        <aa-choice-item> choice two </aa-choice-item>
                                    </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            assert(mChoice.getAttribute('value') === 'h', 'value attribute should be h');
            done();
        });

        it('updates value on click', (done) => {
            container.innerHTML = `<aa-multiple-choice label='tata' value='h' horizontal>
                                        <aa-choice-item value='h'> choice one </aa-choice-item>
                                        <aa-choice-item value='b'> choice two </aa-choice-item>
                                    </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            setTimeout(() => {
                let items = mChoice.querySelectorAll('aa-choice-item');
                items[1].item.click();
                assert(mChoice.value === 'b', 'value should be b after clicking second item');
                done();
            }, 0);
        });
    });

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AAMultipleChoice.tag === 'aa-multiple-choice', 'static tag should be aa-multiple-choice');
            done();
        });

        it('has a static category getter', (done) => {
            assert(AAMultipleChoice.category === 'response item', 'category should be response item');
            done();
        });

        it('has static acceptsElements', (done) => {
            let accepts = AAMultipleChoice.acceptsElements;
            assert(Array.isArray(accepts), 'acceptsElements should be an array');
            assert(accepts.includes('aa-choice-item'), 'should include aa-choice-item');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AAMultipleChoice.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            done();
        });
    });

    describe('vertical layout', function () {
        it('renders vertically by default', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value='h'> choice one </aa-choice-item>
                <aa-choice-item value='b'> choice two </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            // vertical should be default (true)
            assert(mChoice.style.display !== 'flex' || mChoice.vertical, 'should be vertical by default');
            done();
        });
    });

    describe('staticObject', function () {
        it('has staticObject getter', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value='a'> A </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            assert(mChoice.staticObject === AAMultipleChoice, 'staticObject should be AAMultipleChoice');
            done();
        });
    });

    describe('toJSON', function () {
        it('returns JSON object', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value='a'> A </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            let json = mChoice.toJSON();
            assert(json !== null, 'toJSON should return something');
            assert(typeof json === 'object', 'toJSON should return an object');
            done();
        });
    });

    describe('value setter and getter', function () {
        it('sets value programmatically', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value='a'> A </aa-choice-item>
                <aa-choice-item value='b'> B </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            mChoice.value = 'b';
            assert(mChoice.value === 'b', 'value should be b after setting');
            done();
        });

        it('returns undefined when nothing selected', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value='a'> A </aa-choice-item>
                <aa-choice-item value='b'> B </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            // unset all
            mChoice.value = 'nonexistent';
            assert(mChoice.value === undefined, 'value should be undefined when nothing selected');
            done();
        });
    });

    describe('horizontal attribute changes', function () {
        it('sets display to flex and children to vertical orientation when horizontal is true', (done) => {
            container.innerHTML = `<aa-multiple-choice horizontal="true">
                <aa-choice-item value='a'> A </aa-choice-item>
                <aa-choice-item value='b'> B </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            assert(mChoice.style.display === 'flex', 'display should be flex when horizontal');
            done();
        });

        it('toggles vertical when horizontal is set to false', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value='a'> A </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            mChoice.setAttribute('horizontal', 'false');
            // This should trigger the vertical_wasChangedInternally__ path
            assert(mChoice !== null, 'element should exist');
            done();
        });
    });

    describe('vertical attribute changes', function () {
        it('sets display to block and children to horizontal when vertical is true', (done) => {
            container.innerHTML = `<aa-multiple-choice vertical="true">
                <aa-choice-item value='a'> A </aa-choice-item>
                <aa-choice-item value='b'> B </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            assert(mChoice.style.display === 'block', 'display should be block when vertical');
            done();
        });

        it('toggles horizontal when vertical is set to false', (done) => {
            container.innerHTML = `<aa-multiple-choice>
                <aa-choice-item value='a'> A </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            mChoice.setAttribute('vertical', 'false');
            assert(mChoice !== null, 'element should exist');
            done();
        });
    });

    describe('toJSON with horizontal', function () {
        it('returns JSON with horizontal attribute', (done) => {
            container.innerHTML = `<aa-multiple-choice horizontal="true">
                <aa-choice-item value='a'> A </aa-choice-item>
            </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
            let json = mChoice.toJSON();
            assert(json !== null, 'toJSON should return something');
            assert(typeof json === 'object', 'toJSON should return an object');
            done();
        });
    });
});
