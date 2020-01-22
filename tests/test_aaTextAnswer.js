import AATextAnswer from '../src/customElements/aa-text-answer/aa-text-answer.js';

// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-text-answer', () => {

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

    describe('functions', function () {
        xit('gets value', (done) => {
            container.innerHTML = '<aa-text-answer value="v1"></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            assert(textAnswer.value === "v1", `value of element is passed into its inputItem`);
            assert(textAnswer.inputItem.value === "v1", `value of element is passed into its inputItem`);
            done();
        });

        xit('sets value', (done) => {
            container.innerHTML = '<aa-text-answer value="v1"></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            textAnswer.value = "v2";
            assert(textAnswer.value === "v2", `value of element is passed into its inputItem`);
            assert(textAnswer.inputItem.value === "v2", `value of element is passed into its inputItem`);
            
            textAnswer.inputItem.value = "v3";
            assert(textAnswer.value === "v3", `setting value of inputItem sets value of element`);
            done();
        });

        xit('gets label', (done) => {
            container.innerHTML = '<aa-text-answer label="label1"></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            assert(textAnswer.label === "label1", `label of elementg is set`);
            assert(textAnswer.inputItem.label === "label1", `label of element is passed into its inputItem`);
            done();
        });

        xit('sets label', (done) => {
            container.innerHTML = '<aa-text-answer value="v1"></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            textAnswer.label= "label1";
            assert(textAnswer.label === "label1", `label of elementg is set`);
            assert(textAnswer.inputItem.label === "label1", `label of element is passed into its inputItem`);
            done();
        });

        it('sets long and removes long attribute', (done) => {
          
            container.innerHTML = '<aa-text-answer label="tata" value="val"></aa-text-answer>';
            let textAnswer = document.querySelector('aa-text-answer');
            console.log(textAnswer);
            
            textAnswer.long = true;
            assert(textAnswer.inputItem.tagName==="PAPER-TEXTAREA", "input should be a textfield");
            console.log(textAnswer);

            textAnswer.long = false;

            console.log(textAnswer);
            assert(textAnswer.inputItem.tagName==="PAPER-INPUT", "input should be simple input");

            assert(textAnswer.inputItem.value==="val", "inputItem retains value");
            assert(textAnswer.inputItem.label==="tata", "inputItem retains label");
            assert(textAnswer.value==="val", "element retains value");
            assert(textAnswer.label==="tata", "element retains label");
            // assert(baseElement.toHyphenated(camelString) == hyphenated, `conversion to hyphenated is not coorect: ${baseElement.toHyphenated(camelString)}`);
            done();
        });

    })

    
    
})
