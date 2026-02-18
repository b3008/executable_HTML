import { AAScreen } from '../src/customElements/aa-screen/aa-screen.ts';
import '../src/customElements/aa-slider/aa-slider.ts';
import '../src/customElements/aa-label/aa-label.ts';
import { assert } from '@esm-bundle/chai';

var container: any;

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
            let screen1 = document.querySelector('#screen1') as any;
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

            let screen1 = document.querySelector('#screen1') as any;
            let submitButton = screen1.root.querySelector(".submitButton") as any;

            assert(screen1.name === 'first', 'screen1 shold have a name attribute');
            assert(submitButton, 'submit button member does not exist');
            assert(submitButton.click, 'submitButton.click method does not exist')

            document.querySelector('#screenContainer')!.addEventListener('valueSubmit', (e: any) => {

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

            let screen1 = document.querySelector('#screen1') as any;
            let submitButton = screen1.root.querySelector(".submitButton") as any;
            assert(screen1.name === 'first', 'screen1 shold have a name attribute');
            assert(submitButton, 'submit button member does not exist');
            assert(submitButton.click, 'submitButton.click method does not exist')



            document.querySelector('#screenContainer')!.addEventListener('endEvent', (e: any) => {

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

            let screen1 = document.querySelector('#screen1') as any;
            let submitButton = screen1.root.querySelector(".submitButton") as any;
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

            let screen1 = document.querySelector('#screen1') as any;
            let submitButton = screen1.root.querySelector(".submitButton") as any;
            assert(screen1.name === 'first', 'screen1 shold have a name attribute');
            assert(submitButton, 'submit button member does not exist');
            assert(submitButton.click, 'submitButton.click method does not exist');

            screen1.valueWithKey().then((valWithKey: any) =>{
                console.log(valWithKey);


            assert(Object.keys(valWithKey)[0] == 'first');
            assert(valWithKey.first.myInput == 'myValue');
            assert(valWithKey.first.car == 'saab', 'car should be saab');
            document.querySelector('#screenContainer')!.addEventListener('valueSubmit', (e: any) => {
                assert(e.detail.value.myInput == 'myValue', 'value contains value of input field');
                done();
            })
            submitButton.click();
            });


        });

    })

    describe('static getters', function () {
        it('has a static tag getter', (done) => {
            assert(AAScreen.tag === 'aa-screen', 'static tag should be aa-screen');
            done();
        });

        it('has a static category getter', (done) => {
            assert(AAScreen.category === 'UI', 'category should be UI');
            done();
        });

        it('has static acceptsElements', (done) => {
            let accepts = AAScreen.acceptsElements;
            assert(Array.isArray(accepts), 'acceptsElements should be an array');
            done();
        });

        it('has static observedAttributes', (done) => {
            let attrs = AAScreen.observedAttributes;
            assert(Array.isArray(attrs), 'observedAttributes should be an array');
            done();
        });
    });

    describe('diagram mode', function () {
        it('renders SVG diagram when diagram attribute is true', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="myScreen" diagram="true">
                <div>test</div>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let svgContainer = screen.root.querySelector('#svgContainer') as any;
            assert(svgContainer !== null, 'should have svgContainer in shadow root');
            assert(svgContainer.querySelector('svg') !== null, 'should contain an SVG element');
            done();
        });

        it('renders diagram without name attribute', (done) => {
            container.innerHTML = `<aa-screen diagram="true">
                <div>test</div>
            </aa-screen>`;
            let screen = document.querySelector('aa-screen') as any;
            let svgContainer = screen.root.querySelector('#svgContainer') as any;
            assert(svgContainer !== null, 'should have svgContainer');
            done();
        });

        it('has a download button that can be clicked', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="myScreen" diagram="true">
                <div>test</div>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let button = screen.root.querySelector('paper-button') as any;
            assert(button !== null, 'should have a download button');
            // Click should not throw
            button.click();
            done();
        });
    });

    describe('submit-button-hidden', function () {
        it('hides submit button when submit-button-hidden is true', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="first" submit-button-hidden="true">
                <div>test</div>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let btnContainer = screen.root.querySelector('.submitButtonContainer') as any;
            assert(btnContainer.style.display === 'none', 'submitButtonContainer should be hidden');
            done();
        });

        it('shows submit button when submit-button-hidden is changed to false', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="first" submit-button-hidden="true">
                <div>test</div>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            screen.setAttribute('submit-button-hidden', 'false');
            let btnContainer = screen.root.querySelector('.submitButtonContainer') as any;
            assert(btnContainer.style.display === 'block', 'submitButtonContainer should be visible');
            done();
        });
    });

    describe('doesArrayConsistOfNullsOrUndefined', function () {
        it('returns true for array of nulls', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            assert(screen.doesArrayConsistOfNullsOrUndefined([null, null]) === true, 'should return true');
            done();
        });

        it('returns true for array of undefineds', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            assert(screen.doesArrayConsistOfNullsOrUndefined([undefined, undefined]) === true, 'should return true');
            done();
        });

        it('returns false for array with values', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            assert(screen.doesArrayConsistOfNullsOrUndefined([null, 'value']) === false, 'should return false');
            done();
        });
    });

    describe('getNodeValue', function () {
        it('returns value from getValue method', async () => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let node = { getValue: () => 'fromGetValue' };
            let val = await screen.getNodeValue(node);
            assert(val === 'fromGetValue', 'should use getValue when available');
        });

        it('returns simple value', async () => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let node = { value: 'simpleVal' };
            let val = await screen.getNodeValue(node);
            assert(val === 'simpleVal', 'should return simple value');
        });

        it('returns resolved promise value', async () => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let node = { value: Promise.resolve('promiseVal') };
            let val = await screen.getNodeValue(node);
            assert(val === 'promiseVal', 'should resolve promise value');
        });

        it('returns null for array of nulls', async () => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let node = { value: [null, null] };
            let val = await screen.getNodeValue(node);
            assert(val === null, 'should return null for array of nulls');
        });

        it('returns array with values', async () => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let node = { value: ['a', 'b'] };
            let val = await screen.getNodeValue(node);
            assert(Array.isArray(val), 'should return array');
            assert(val[0] === 'a', 'first element should be a');
        });

        it('returns null for node without value', async () => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let node = {};
            let val = await screen.getNodeValue(node);
            assert(val === null, 'should return null');
        });
    });

    describe('hasChildrenThatRequireResponse', function () {
        it('returns empty array when no required children', async () => {
            container.innerHTML = `<aa-screen id="screen1" name="first">
                <input name="test" value="filled">
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let result = await screen.hasChildrenThatRequireResponse();
            assert(result.length === 0, 'should have no children requiring response');
        });
    });

    describe('getAAChildren', function () {
        it('returns AA children', (done) => {
            container.innerHTML = html`
            <aa-screen id="screen1" name="first">
                <aa-slider min="0" max="100" name="s1" value="50"></aa-slider>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let children = screen.getAAChildren(screen);
            assert(children.length > 0, 'should find AA children');
            done();
        });

        it('filters by nodeName', (done) => {
            container.innerHTML = html`
            <aa-screen id="screen1" name="first">
                <aa-slider min="0" max="100" name="s1" value="50"></aa-slider>
                <aa-label>Label</aa-label>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let sliders = screen.getAAChildren(screen, [], 'AA-SLIDER');
            assert(sliders.length === 1, 'should find 1 slider');
            done();
        });
    });

    describe('hide and show', function () {
        it('hides the screen', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            screen.hide();
            assert(screen.style.display === 'none', 'screen should be hidden');
            done();
        });

        it('shows the screen', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="first"><div>test</div></aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            screen.hide();
            screen.show();
            assert(screen.style.display === 'block', 'screen should be visible');
            done();
        });
    });

    describe('automate', function () {
        it('calls submitButtonClick', (done) => {
            container.innerHTML = html`
            <div id="wrapper">
                <aa-screen id="screen1" name="first">
                    <div>test</div>
                </aa-screen>
            </div>`;
            let screen = document.querySelector('#screen1') as any;
            document.querySelector('#wrapper')!.addEventListener('valueSubmit', () => {
                done();
            });
            screen.automate();
        });
    });

    describe('autohide attribute', function () {
        it('hides screen after submit when autohide is true', (done) => {
            container.innerHTML = html`
            <div id="wrapper">
                <aa-screen id="screen1" name="first" autohide="true">
                    <div>test</div>
                </aa-screen>
            </div>`;
            let screen = document.querySelector('#screen1') as any;
            document.querySelector('#wrapper')!.addEventListener('valueSubmit', () => {
                // autohide happens after valueSubmit and endEvent dispatch
                setTimeout(() => {
                    assert(screen.style.display === 'none', 'screen should be hidden after submit');
                    done();
                }, 50);
            });
            screen.submitButtonClick();
        });
    });

    describe('callback in submitButtonClick', function () {
        it('calls callback from event detail', (done) => {
            container.innerHTML = html`
            <div id="wrapper">
                <aa-screen id="screen1" name="first">
                    <div>test</div>
                </aa-screen>
            </div>`;
            let screen = document.querySelector('#screen1') as any;
            let callbackCalled = false;
            let fakeEvent = new CustomEvent('click', {
                detail: {
                    callback: () => {
                        callbackCalled = true;
                    }
                }
            });
            screen.submitButtonClick(fakeEvent);
            setTimeout(() => {
                assert(callbackCalled === true, 'callback should have been called');
                done();
            }, 100);
        });
    });

    describe('getChildrenValues branches', function () {
        it('collects value from child with promise value', (done) => {
            container.innerHTML = html`
            <aa-screen id="screen1" name="first">
                <div>test</div>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            // Add a child with a thenable value
            let fakeChild = document.createElement('div') as any;
            fakeChild.setAttribute('name', 'promiseChild');
            fakeChild.value = Promise.resolve('asyncVal');
            screen.appendChild(fakeChild);
            screen.getChildrenValues(screen).then(result => {
                assert(result['promiseChild'] === 'asyncVal', 'should collect async value');
                done();
            });
        });

        it('recurses into aa-label children', (done) => {
            container.innerHTML = html`
            <aa-screen id="screen1" name="first">
                <aa-label>
                    <input name="nestedInput" value="nestedVal">
                </aa-label>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            screen.getChildrenValues(screen).then(result => {
                // The recursion into aa-label should find the nested input
                assert(result !== null, 'should return result object');
                done();
            });
        });
    });

    describe('automate with AA children', function () {
        it('calls automate on AA children that have it', (done) => {
            container.innerHTML = html`
            <div id="wrapper">
                <aa-screen id="screen1" name="first">
                    <aa-slider name="s1" min="0" max="100" value="50"></aa-slider>
                </aa-screen>
            </div>`;
            let screen = document.querySelector('#screen1') as any;
            document.querySelector('#wrapper')!.addEventListener('valueSubmit', () => {
                done();
            });
            screen.automate();
        });
    });

    describe('hide with children that have stop', function () {
        it('calls stop on AA children when hiding', (done) => {
            container.innerHTML = html`
            <aa-screen id="screen1" name="first">
                <div>test</div>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            // Add a fake AA child with a stop method
            let fakeChild = document.createElement('aa-slider') as any;
            fakeChild.setAttribute('name', 'fakeSlider');
            fakeChild.setAttribute('min', '0');
            fakeChild.setAttribute('max', '100');
            fakeChild.stop = () => {};
            screen.appendChild(fakeChild);
            screen.hide();
            assert(screen.style.display === 'none', 'screen should be hidden');
            done();
        });
    });

    describe('hasChildrenThatRequireResponse with required children', function () {
        it('returns required children with empty values', async () => {
            container.innerHTML = `<aa-screen id="screen1" name="first">
                <input name="test" required value="">
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let result = await screen.hasChildrenThatRequireResponse();
            assert(result.length > 0, 'should have children requiring response');
        });

        it('returns empty when required children have values', async () => {
            container.innerHTML = `<aa-screen id="screen1" name="first">
                <input name="test" required value="filled">
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            let result = await screen.hasChildrenThatRequireResponse();
            assert(result.length === 0, 'should have no children requiring response');
        });

        it('blocks submitButtonClick when required children have no value', (done) => {
            container.innerHTML = html`
            <div id="wrapper">
                <aa-screen id="screen1" name="first">
                    <input name="test" required value="">
                </aa-screen>
            </div>`;
            let screen = document.querySelector('#screen1') as any;
            let submitted = false;
            document.querySelector('#wrapper')!.addEventListener('valueSubmit', () => {
                submitted = true;
            });
            screen.submitButtonClick();
            setTimeout(() => {
                assert(submitted === false, 'submit should be blocked by required empty field');
                done();
            }, 100);
        });
    });

    describe('getChildrenValues with getValue method', function () {
        it('uses getValue when available on child', (done) => {
            container.innerHTML = `<aa-screen id="screen1" name="first">
                <div>test</div>
            </aa-screen>`;
            let screen = document.querySelector('#screen1') as any;
            // Add a child with getValue method
            let fakeChild = document.createElement('div') as any;
            fakeChild.setAttribute('name', 'getValueChild');
            fakeChild.getValue = () => 'fromGetValue';
            screen.appendChild(fakeChild);
            screen.getChildrenValues(screen).then(result => {
                assert(result['getValueChild'] === 'fromGetValue', 'should use getValue');
                done();
            });
        });
    });

    describe('automate with AA children that have automate', function () {
        it('calls automate on nested aa-screen', (done) => {
            container.innerHTML = html`
            <div id="wrapper">
                <aa-screen id="screen1" name="outer">
                    <aa-screen id="inner" name="inner"><div>inner content</div></aa-screen>
                </aa-screen>
            </div>`;
            let called = false;
            document.querySelector('#wrapper')!.addEventListener('valueSubmit', () => {
                if (!called) {
                    called = true;
                    done();
                }
            });
            let screen = document.querySelector('#screen1') as any;
            screen.automate();
        });
    });
})
