import '../src/customElements/aa-session/aa-session.ts';
import '../src/customElements/aa-geolocation/aa-geolocation.ts';
import '../src/customElements/aa-screen/aa-screen.ts';
import { assert } from '@esm-bundle/chai';

var container;

describe('aa-variable', () => {

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

    describe('instance', function () {
        it('should have name and value', function (done) {

            container.innerHTML = html`
            first session:
            <aa-session debug="true" name="test" id="session">
                <template>
                    <aa-geolocation id="geo" name="var1" ></aa-geolocation>
                </template>
            </aa-session>`;

            let session = document.querySelector('#session');

            done();

        });

    })

    describe('in a sequence', function () {
        it('autoexecutes', function (done) {

            container.innerHTML = html`
            second session:
            <aa-session debug="true" name="test" id="session">
                <template>
                <aa-sequence>
                    press next to get geolocation
                    <aa-geolocation id="geo" name="var1" ></aa-geolocation>
                    <div> autoexecutes in sequence done </div>
                </aa-sequence>
                </template>
            </aa-session>`;

            let session = document.querySelector('#session');

            session.addEventListener("valueSubmit", (e) => {
                console.log(e.detail);
            })

            done();

        });

    })
})
