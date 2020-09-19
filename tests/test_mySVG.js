import '../src/lib/mySVG/mySVG.js';

// var expect = chai.expect;
var assert = chai.assert;
var container;

describe('aa-multiple-choice', () => {

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

    describe('functions', function () {
        it('gets and sets value', (done) => {

            container.innerHTML = html`
            
            
    <aa-session><template>
    
            <aa-sequence id="seq1">
    
    
                <aa-choose id="choice">
    
                    <aa-when>
                        <aa-sequence>
                        <aa-screen></aa-screen>
                        <aa-screen></aa-screen>
                        <aa-screen></aa-screen>
                        <aa-screen></aa-screen>
                        </aa-sequence>
                    </aa-when>
                    <aa-when test="participantNumber==null">
                        <!--
        if not, then present a screen 
        that asks for it-->
                        <aa-screen name="idScreen" submit-button-text="Next">
                            <p>
                                Welcome!
                                This is the first time you use
                                this phone to log in.
                                <aa-label>Please enter your participant number</aa-label>
                                <aa-text-answer type="number" name="participantNumber" label="participant number">
                                </aa-text-answer>
                            </p>
                            <p>
                                <aa-label>Please indicate your gender:</aa-label>
                                <aa-multiple-choice name="gender">
                                    <aa-choice-item> Male
                                    </aa-choice-item>
                                    <aa-choice-item> Female
                                    </aa-choice-item>
                                </aa-multiple-choice>
                            </p>
                        </aa-screen>
                    </aa-when>
    
                    <aa-when test="participantNumber==null">
                        <!--
        if not, then present a screen 
        that asks for it-->
                        <aa-screen name="idScreen" submit-button-text="Next">
                            <p>
                                Welcome!
                                This is the first time you use
                                this phone to log in.
                                <aa-label>Please enter your participant number</aa-label>
                                <aa-text-answer type="number" name="participantNumber" label="participant number">
                                </aa-text-answer>
                            </p>
                            <p>
                                <aa-label>Please indicate your gender:</aa-label>
                                <aa-multiple-choice name="gender">
                                    <aa-choice-item> Male
                                    </aa-choice-item>
                                    <aa-choice-item> Female
                                    </aa-choice-item>
                                </aa-multiple-choice>
                            </p>
                        </aa-screen>
                    </aa-when>
                    <!--
            if participantNumber already had a value, 
            aa-choose will quietly terminate.
            -->
                </aa-choose>
    
                <aa-screen></aa-screen>
                <aa-screen></aa-screen>
                <aa-screen></aa-screen>
                <aa-screen></aa-screen>
                <aa-screen></aa-screen>
                <aa-screen></aa-screen>
        </template></aa-session>
    
    <div id='svgContainer'></div>

            
            `

            let session = container.querySelector('aa-session');
            let choose = session.originalChildNodes[1].childNodes[1];

            let item = mySVG.model(choose);
            var svgContainer = document.querySelector("#svgContainer");


            let m = mySVG.model(choose);
            m.getEndPoints();
            debugger;
            mySVG.render(svgContainer, 500, session);






            debugger;
            console.log("test")
            done();
        });



    });

});
