import { AAAffectGrid } from '../src/customElements/aa-affect-grid/aa-affect-grid.js';


// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-affect-grid', () => {

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
        // it('gets value', (done) => {
        //     container.innerHTML = `
        //     <aa-affect-grid style="width:50%" 

        //         columns = 5
        //         rows = 5
        //         top-left-label="top-left" 
        //         top-label="top" 
        //         top-right-label="top-right"


        //         left-top-label="left-top" 
        //         left-label="left" 
        //         left-bottom-label="left-bottom"

        //         right-top-label="right-top" 
        //         right-label="right" 
        //         right-bottom-label="right-bottom"


        //         bottom-left-label="bottom-left" 
        //         bottom-label="bottom" 
        //         bottom-right-label="bottom-right"
        //         >
        //     </aa-affect-grid>`;
        //     let grid = document.querySelector('aa-affect-grid');
        //     // assert(slider.value == '30', `value of element is passed into its inputItem`);
        //     // assert(slider.inputItem.value == '30', `value of element is passed into its inputItem`);
        //     done();
        // });

        // it('sets value', (done) => {
        //     container.innerHTML = '<aa-slider value="30"></aa-slider>';
        //     let slider = document.querySelector('aa-slider');
        //     slider.value = '30';
        //     assert(slider.value == '30', `value of element is passed into its inputItem`);
        //     assert(slider.inputItem.value == '30', `value of element is passed into its inputItem`);

        //     slider.inputItem.value = '30';
        //     assert(slider.value == '30', `setting value of inputItem sets value of element`);
        //     done();
        // });

        // it('gets maxLabel', (done) => {
        //     container.innerHTML = '<aa-slider max-label="label1"></aa-slider>';
        //     let slider = document.querySelector('aa-slider');
        //     assert(slider.maxLabel === 'label1', `label of element is set`);
        //     // assert(slider.inputItem.maxLabel === 'label1', `label of element is passed into its inputItem`);
        //     done();
        // });

        // it('sets maxLabel', (done) => {
        //     container.innerHTML = '<aa-slider value="30"></aa-slider>';
        //     let slider = document.querySelector('aa-slider');
        //     slider.maxLabel = 'label1';
        //     assert(slider.maxLabel === 'label1', `label of element is set`);
        //     // assert(slider.inputItem.maxlabel === 'label1', `label of element is passed into its inputItem`);
        //     done();
        // });

        // it('gets minLabel', (done) => {
        //     container.innerHTML = '<aa-slider min-label="label1"></aa-slider>';
        //     let slider = document.querySelector('aa-slider');
        //     assert(slider.minLabel === 'label1', `label of element is set`);
        //     // assert(slider.inputItem.maxLabel === 'label1', `label of element is passed into its inputItem`);
        //     done();
        // });

        // it('sets minLabel', (done) => {
        //     container.innerHTML = '<aa-slider value="30"></aa-slider>';
        //     let slider = document.querySelector('aa-slider');
        //     slider.minLabel = 'label1';
        //     assert(slider.minLabel === 'label1', `label of element is set`);
        //     // assert(slider.inputItem.label === 'label1', `label of element is passed into its inputItem`);
        //     done();
        // });

    })
})
