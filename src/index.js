import '../dist/paper-polymer.js';


import BaseElement from './customElements/aa-baseElement/baseElement.js';
import AAVariable from './customElements/aa-variable/aa-variable.js';
import AAFunctionRandom from "./customElements/aa-function/aa-function-random.js"
import AAChoose from './customElements/aa-choose/aa-choose.js';

import AAMemory from './customElements/aa-memory/aa-memory.js';
import AAScreen from './customElements/aa-screen/aa-screen.js';
import AASequence from './customElements/aa-sequence/aa-sequence.js';
import AASession from './customElements/aa-session/aa-session.js';

import AATextAnswer from './customElements/aa-text-answer/aa-text-answer.js';
//make sure session loads last
// try{

// }
// catch(e){
//     console.error(e);
// }

let aaCustomElements = {
    BaseElement,
    AAChoose,
    AAMemory,
    AAScreen,
    AASequence,
    AASession,
    AAVariable,

    // __VERSION: VERSION,
    // __BUILD_NUMBER: BUILD_NUMBER,
    // // __BUILD_BRANCH:BUILD_BRANCH,
    // __BUILD_STRING: BUILD_STRING

}

if(window){
    window.aaCustomElements = aaCustomElements
}
// export default aaCustomElements;