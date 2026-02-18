import { AAMemory } from '../src/customElements/aa-memory/aa-memory.ts';
import { assert } from '@esm-bundle/chai';

var container: any;

describe('aa-memory', () => {

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
        localStorage.clear();
    });

    describe('setData / getData', function () {
        it('stores and retrieves data via localStorage', (done) => {
            container.innerHTML = '<aa-memory id="mem"></aa-memory>';
            let mem = document.querySelector('#mem') as any;
            mem.setData('testKey', 'testValue');
            assert(mem.getData('testKey') === 'testValue', 'getData should return stored value');
            done();
        });

        it('overwrites existing data', (done) => {
            container.innerHTML = '<aa-memory id="mem"></aa-memory>';
            let mem = document.querySelector('#mem') as any;
            mem.setData('key1', 'first');
            mem.setData('key1', 'second');
            assert(mem.getData('key1') === 'second', 'getData should return overwritten value');
            done();
        });
    });

    describe('getDataDump', function () {
        it('returns localStorage object', (done) => {
            container.innerHTML = '<aa-memory id="mem"></aa-memory>';
            let mem = document.querySelector('#mem') as any;
            mem.setData('dumpKey', 'dumpVal');
            let dump = mem.getDataDump();
            assert(dump['dumpKey'] === 'dumpVal', 'getDataDump should contain stored key');
            done();
        });
    });

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AAMemory.tag === 'aa-memory', 'static tag should be aa-memory');
            done();
        });
    });

    describe('instance observedAttributes', function () {
        it('has observedAttributes on instance', (done) => {
            container.innerHTML = '<aa-memory id="mem"></aa-memory>';
            let mem = document.querySelector('#mem') as any;
            let attrs = mem.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            assert(attrs.includes('name'), 'should include name');
            done();
        });
    });
})
