import '../src/customElements/aa-screen/aa-screen.js';
import '../dist/paper-polymer.js';
// var expect = chai.expect;
var assert = chai.assert;

var container;

describe('aa-screen', () => {

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

    describe('instance', function () {
        it('finds screen1 with name "first"', function (done) {

            container.innerHTML = `
                <aa-screen id="screen1" name="first">
                    <div>test</div>
                </aa-screen>`
            let screen1 = document.querySelector('#screen1');
            assert(screen1.name === 'first', 'screen1 shold have a name attribute');
            done();

        });



        it('has submitButton and it submits a valueSubmit', function (done) {

            container.innerHTML = html`
            <div id = "screenContainer">
                <aa-screen id="screen1" name="first">
                    <div>test</div>
                </aa-screen>
            </div>`

            let screen1 = document.querySelector('#screen1');
            let submitButton = screen1.root.querySelector(".submitButton");

            assert(screen1.name === 'first', 'screen1 shold have a name attribute');
            assert(submitButton, 'submit button member does not exist');
            assert(submitButton.click, 'submitButton.click method does not exist')

            document.querySelector('#screenContainer').addEventListener('valueSubmit', (e) => {
               
                assert(e.detail.value, 'should receive value after click')
                
                done();
            })
            submitButton.click();

        });

        it('submitButton also submits endEvent', function (done) {

            container.innerHTML = html`
            <div id = "screenContainer">
                <aa-screen id="screen1" name="first">
                    <div>test</div>
                </aa-screen>
            </div>`

            let screen1 = document.querySelector('#screen1');
            let submitButton = screen1.root.querySelector(".submitButton");
            assert(screen1.name === 'first', 'screen1 shold have a name attribute');
            assert(submitButton, 'submit button member does not exist');
            assert(submitButton.click, 'submitButton.click method does not exist')



            document.querySelector('#screenContainer').addEventListener('endEvent', (e) => {
                
                assert(e.detail, 'should receive value after click');
                
                done();
            })
            submitButton.click();


        });

        it('submitButton is paper-button when paper button is defined and button when it\'s not', function (done) {

            container.innerHTML = html`
            <div id = "screenContainer">
                <aa-screen id="screen1" name="first">
                    <div>test</div>
                </aa-screen>
            </div>`

            let screen1 = document.querySelector('#screen1');
            let submitButton = screen1.root.querySelector(".submitButton");
            assert(screen1.name === 'first', 'screen1 shold have a name attribute');
            assert(submitButton, 'submit button member does not exist');
            assert(submitButton.click, 'submitButton.click method does not exist')
            if (customElements.get('paper-button')) {
                
                assert(submitButton.tagName == 'PAPER-BUTTON', 'submit button should be paper-button');
            } else {
                assert(submitButton.tagName == 'BUTTON', 'submit button should be paper-button');
            }
            done()

        });
    })

    describe('values', () => {
        it('gets values from children', (done) => {

            container.innerHTML = html`
            <div id = "screenContainer">
                <aa-screen id="screen1" name="first">
                    <input name="myInput" type="text" value="myValue">

                    <select name="car">
                        <option value="volvo">Volvo</option>
                        <option value="saab" selected>Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                </aa-screen>
            </div>`

            let screen1 = document.querySelector('#screen1');
            let submitButton = screen1.root.querySelector(".submitButton");
            assert(screen1.name === 'first', 'screen1 shold have a name attribute');
            assert(submitButton, 'submit button member does not exist');
            assert(submitButton.click, 'submitButton.click method does not exist');

            let valWithKey = screen1.valueWithKey().then(valWithKey=>{
                console.log(valWithKey);


            assert(Object.keys(valWithKey)[0] == 'first');
            assert(valWithKey.first.myInput == 'myValue');
            assert(valWithKey.first.car == 'saab', 'car should be saab');
            document.querySelector('#screenContainer').addEventListener('valueSubmit', (e) => {
                assert(e.detail.value.myInput == 'myValue', 'value contains value of input field');
                // console.log(e.detail)
                done();
            })
            submitButton.click();
            });
            

        });

    })

})



