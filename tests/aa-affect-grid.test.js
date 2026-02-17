import { AAAffectGrid } from '../src/customElements/aa-affect-grid/aa-affect-grid.ts';
import { assert } from '@esm-bundle/chai';

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

    describe('rendering', function () {
        it('renders grid with default rows and columns', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid');
            let cells = grid.root.querySelectorAll('.cell');
            // default is 11x11 = 121 cells
            assert(cells.length === 121, `should have 121 cells, got ${cells.length}`);
            done();
        });

        it('renders grid with custom rows and columns', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid');
            let cells = grid.root.querySelectorAll('.cell');
            assert(cells.length === 25, `should have 25 cells, got ${cells.length}`);
            done();
        });

        it('renders labels', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px"
                top-label="top"
                bottom-label="bottom"
                left-label="left"
                right-label="right"
            ></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid');
            assert(grid.topLabel === 'top', 'topLabel should be "top"');
            assert(grid.bottomLabel === 'bottom', 'bottomLabel should be "bottom"');
            assert(grid.leftLabel === 'left', 'leftLabel should be "left"');
            assert(grid.rightLabel === 'right', 'rightLabel should be "right"');
            done();
        });
    });

    describe('value', function () {
        it('value is null before selection', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid');
            assert(grid.value === null, 'value should be null before any selection');
            done();
        });

        it('updates value on cell click', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid');
            let cells = grid.root.querySelectorAll('.cell');
            // click the first cell
            cells[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            assert(grid.value !== null, 'value should not be null after click');
            assert(Array.isArray(grid.value), 'value should be an array [x, y]');
            assert(typeof grid.value[0] === 'number', 'value[0] (x) should be a number');
            assert(typeof grid.value[1] === 'number', 'value[1] (y) should be a number');
            done();
        });
    });

    describe('events', function () {
        it('dispatches change event on cell click', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid');
            grid.addEventListener('change', (e) => {
                assert(e instanceof CustomEvent, 'change event should be a CustomEvent');
                done();
            });
            let cells = grid.root.querySelectorAll('.cell');
            cells[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
    });
})
