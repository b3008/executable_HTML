import '../src/customElements/aa-session/aa-session.ts';
import '../src/customElements/aa-variable/aa-variable.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-variable', () => {

    before(function(){
        container = document.querySelector('#container');
        if(!container){
            container = document.createElement('div');
            container.id = "container";
            document.body.appendChild(container);
        }
    });


    beforeEach(function() {
        container.innerHTML = "";
    });

    describe('instance', function () {
        it('should have name and value', function (done) {

            container.innerHTML = html`
            first session:
            <aa-session debug="false" name="test" id="session">
                <template>
                    <aa-variable id="v" name="var1" value="val1" debug="true"></aa-variable>
                </template>
            </aa-session>`;

            let memory = document.querySelector('#session')._mem;


            assert(memory.getDataDump()['var1']==='val1', 'var1 should exist and have value val1');
            assert(memory.getData('var1')==='val1', 'var1 should exist and have value val1');


            done();

        });


        it('should be able to parse expression with existing variable', function (done) {

            container.innerHTML = html`
            first session:
            <aa-session debug="false" name="test" id="session">
                <template>

                <aa-variable id="v1" name="var1" value="val1" debug="true"></aa-variable>
                    <aa-variable id="v2" name="var2" value="val1" debug="true"></aa-variable>
                </template>
            </aa-session>`;

            let memory = document.querySelector('#session')._mem;


            assert(memory.getDataDump()['var1']==='val1', 'var1 should exist and have value val1');
            assert(memory.getData('var1')==='val1', 'var1 should exist and have value val1');


            done();

        });

    })
})
