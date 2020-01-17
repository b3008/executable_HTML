import BaseElement from "../src/aa-baseElement/baseElement.js";
import AAHolder from '../src/aa-holder/aa-holder.js';
import AAScreen from '../src/aa-screen/aa-screen.js';

// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-holder', () => {

    before(function () {
        container = document.querySelector('#container');
        if (!container) {
            container = document.createElement('div');
            container.id = "container";
            document.body.appendChild(container);
        }
    });


    beforeEach(function () {

        container.innerHTML = "";
    });

    describe('member functions', function () {


        it('produces holder element from any given node and reproduces original content', (done) => {
            let b = document.createElement('aa-base-element');
            let div = document.createElement('div');
            div.id = "mydiv";
            div.dataset["name"] = "nameOfDiv";
            div.innerHTML = html` This is the content of my div, it contains a text node, 
                                <p>one child</p>
                                <div>and a second child <p>with a nested child</p></div>`;
            container.appendChild(div)
            let originalHTML = container.innerHTML;

            let holder = AAHolder.createHolderForNode(div);
            assert(holder.node.nodeName == div.nodeName, "holder node should be the same as original");
            assert(holder.node.id == div.id);
            assert(holder.node.dataset["name"] == div.dataset.name);

            holder.replace(div);
            assert(originalHTML !== container.innerHTML);


            holder.restoreHeldNode();

            assert(originalHTML === container.innerHTML);

            done();
        })


        it('scans tree and replaces aa-elements with aa-holders', (done) => {

            container.innerHTML = html` This is the content of my div, it contains a text node, 
                                <p>one child</p>
                                <div>and a second child <p>with a nested child

                                    which has a screen
                                    <aa-screen id="screen1">
                                        and that screen has 
                                        <aa-screen id="screen2">an embedded screen</aa-screen>
                                    </aa-screen>

                                    <template>
                                        we are also searching in templates
                                        <aa-screen id="screen3">a screen inside the template</aa-screen>
                                    </template>

                                </p></div>`;

            AAHolder.scanAndReplace(container);
            console.log(container.innerHTML);

            let holder1 = container.querySelector('#screen1');

            assert(holder1.innerFragment.childNodes[1].nodeName=='AA-SCREEN', 'holder1 should have nested screen inside its fragment');
            let holder2 = container.querySelector('#screen3');

            done();
        })

        it('replaces aa-holders with original elements', (done) => {

            container.innerHTML = html` This is the content of my div, it contains a text node, 
                                <p>one child</p>
                                <div>and a second child <p>with a nested child

                                    which has a screen
                                    <aa-screen id="screen1">
                                        and that screen has 
                                        <aa-screen id="screen2">an embedded screen</aa-screen>
                                    </aa-screen>

                                    <template>
                                        we are also searching in templates
                                        <aa-screen id="screen3">a screen inside the template</aa-screen>
                                    </template>

                                </p></div>`;

            AAHolder.scanAndReplace(container);
            console.log(container.innerHTML);

            let holder1 = container.querySelector('#screen1');
            assert(holder1.nodeName=="AA-HOLDER");
            assert(holder1.innerFragment.childNodes[1].nodeName=='AA-SCREEN', 'holder1 should have nested screen inside its fragment');
            let holder2 = container.querySelector('#screen3');


            AAHolder.scanAndRestore(container);
            let screen2 = container.querySelector("#screen1");
            
            assert(screen1.nodeName=="AA-SCREEN");
            assert(screen1.innerFragment.childNodes.length == 3);
            done();
        })
    })


})
