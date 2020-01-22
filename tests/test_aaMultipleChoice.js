import '../src/customElements/aa-multiple-choice/aa-multiple-choice.js';

// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-multiple-choice', () => {

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
          
            container.innerHTML =  `<aa-multiple-choice label="tata" value="val">
                                        <aa-choice-item> help </aa-choice-item>
                                        <aa-choice-item> I'm dying </aa-choice-item>
                                    </aa-multiple-choice>`;
            let mChoice = document.querySelector('aa-multiple-choice');
           
            
           
           
            done();
        });

    })

    
    
})
