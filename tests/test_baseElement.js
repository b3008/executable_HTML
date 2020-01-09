

var expect = chai.expect;
var assert = chai.assert;

var baseElement;

describe('baseElement', () => {

    // before(()=>{
        
    // })
    describe('member functions', function () {

        it('convert hyphenated attribute toCamelCase property ', function (done) {

            
            //instantiate a baseElement without attributes
            let div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML='<aa-base-element id="e1">';
            baseElement = document.querySelector('#e1');
            let hyphenated="this-is-a-hyphenated-sentence";

            assert.equal(baseElement.toCamelCase(hyphenated), "thisIsAHyphenatedSentence");
            done();
        });

        it('instantiate baseElement with some attributes and test API', function(done){
            
            let div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML='<aa-base-element id="e1" name="elem1" session="mySession">';
            baseElement = document.querySelector('#e1');
            
            

            done()       
        })
    })
})
