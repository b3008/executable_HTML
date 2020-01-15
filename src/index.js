import BaseElement from './aa-baseElement/baseElement.js';
import AAChoose from './aa-choose/aa-choose.js';
import AAHolder from './aa-holder/aa-holder.js';
import AAMemory from './aa-memory/aa-memory.js';
import AAScreen from './aa-screen/aa-screen.js';
import AASequence from './aa-sequence/aa-sequence.js';
import AASession from './aa-session/aa-session.js';
import AAVariable from './aa-variable/aa-variable.js';


console.log(VERSION);

let aaCustomElements = {
    BaseElement,
    AAChoose,
    AAMemory,
    AAScreen,
    AASequence,
    AASession,
    AAVariable,
    AAHolder,
    __VERSION: VERSION,
    __BUILD_NUMBER: BUILD_NUMBER,
    // __BUILD_BRANCH:BUILD_BRANCH,
    // __BUILD_STRING: BUILD_STRING

}

if(window){
    window.aaCustomElements = aaCustomElements
}
// export default aaCustomElements;