import { AAAffectGrid } from '../src/customElements/aa-affect-grid/aa-affect-grid.ts';
import { assert } from '@esm-bundle/chai';

var container: any;

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
            let grid = document.querySelector('aa-affect-grid') as any;
            let cells = grid.root.querySelectorAll('.cell') as any;
            // default is 11x11 = 121 cells
            assert(cells.length === 121, `should have 121 cells, got ${cells.length}`);
            done();
        });

        it('renders grid with custom rows and columns', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid') as any;
            let cells = grid.root.querySelectorAll('.cell') as any;
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
            let grid = document.querySelector('aa-affect-grid') as any;
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
            let grid = document.querySelector('aa-affect-grid') as any;
            assert(grid.value === null, 'value should be null before any selection');
            done();
        });

        it('updates value on cell click', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid') as any;
            let cells = grid.root.querySelectorAll('.cell') as any;
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
            let grid = document.querySelector('aa-affect-grid') as any;
            grid.addEventListener('change', (e: any) => {
                assert(e instanceof CustomEvent, 'change event should be a CustomEvent');
                done();
            });
            let cells = grid.root.querySelectorAll('.cell') as any;
            cells[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
    });

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AAAffectGrid.tag === 'aa-affect-grid', 'static tag should be aa-affect-grid');
            done();
        });

        it('has a static category getter', (done) => {
            assert(AAAffectGrid.category === 'response item', 'category should be response item');
            done();
        });

        it('has a static acceptsElements getter', (done) => {
            assert(AAAffectGrid.acceptsElements === null, 'acceptsElements should be null');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AAAffectGrid.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            assert(attrs.includes('rows'), 'should include rows');
            assert(attrs.includes('columns'), 'should include columns');
            done();
        });
    });

    describe('x and y getters', function () {
        it('x and y return null before selection', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid') as any;
            assert(grid.x === null, 'x should be null');
            assert(grid.y === null, 'y should be null');
            done();
        });

        it('x and y return numbers after selection', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid') as any;
            let cells = grid.root.querySelectorAll('.cell') as any;
            cells[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            assert(typeof grid.x === 'number', 'x should be a number');
            assert(typeof grid.y === 'number', 'y should be a number');
            done();
        });
    });

    describe('minLabel and maxLabel', function () {
        it('gets and sets minLabel', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" min-label="low"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid') as any;
            assert(grid.minLabel === 'low', 'minLabel should be low');
            grid.minLabel = 'very low';
            assert(grid.minLabel === 'very low', 'minLabel should be updated');
            done();
        });

        it('gets and sets maxLabel', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" max-label="high"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid') as any;
            assert(grid.maxLabel === 'high', 'maxLabel should be high');
            grid.maxLabel = 'very high';
            assert(grid.maxLabel === 'very high', 'maxLabel should be updated');
            done();
        });
    });

    describe('min and max setters', function () {
        it('sets min and max', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid') as any;
            grid.min = 0;
            grid.max = 100;
            assert(grid.getAttribute('min') === '0', 'min attribute should be set');
            assert(grid.getAttribute('max') === '100', 'max attribute should be set');
            done();
        });
    });

    describe('same-cell click', function () {
        it('does not dispatch change event when clicking the same cell', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid') as any;
            let cells = grid.root.querySelectorAll('.cell') as any;
            // first click
            cells[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            let changeCount = 0;
            grid.addEventListener('change', () => { changeCount++; });
            // click same cell again
            cells[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            assert(changeCount === 0, 'should not dispatch change on same cell click');
            done();
        });
    });

    describe('different-cell click', function () {
        it('dispatches change event when clicking a different cell', (done) => {
            container.innerHTML = `<aa-affect-grid style="width:300px" columns="5" rows="5"></aa-affect-grid>`;
            let grid = document.querySelector('aa-affect-grid') as any;
            let cells = grid.root.querySelectorAll('.cell') as any;
            // first click sets a value
            cells[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
            // listen for change on second click to a different cell
            grid.addEventListener('change', () => {
                done();
            });
            cells[4].dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
    });
})
