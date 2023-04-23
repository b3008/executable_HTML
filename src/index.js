
import './lib/regenerator-runtime/runtime.js';


// import '../dist/paper-polymer.js';
import BaseElement from './customElements/aa-baseElement/baseElement.js';
import AAAffectGrid from './customElements/aa-affect-grid/aa-affect-grid.js';
import AACheckboxes from './customElements/aa-checkboxes/aa-checkboxes.js';
import AAChoose from './customElements/aa-choose/aa-choose.js';
import AAChoiceItem from './customElements/aa-choice-item/aa-choice-item.js';
import AAFunctionRandom from './customElements/aa-function/aa-function-random.js';
// import AAGeoLocation from './customElements/aa-geolocation/aa-geolocation.js';
import AALabel from './customElements/aa-label/aa-label.js';
import AALikertScale from './customElements/aa-likert-scale/aa-likert-scale.js';
import AAMemory from './customElements/aa-memory/aa-memory.js';
import AAMultipleChoice from './customElements/aa-multiple-choice/aa-multiple-choice.js';
import AAOtherwise from './customElements/aa-choose/aa-otherwise/aa-otherwise.js';
import AAScreen from './customElements/aa-screen/aa-screen.js';

import AASequence from './customElements/aa-sequence/aa-sequence.js';
import AASlider from './customElements/aa-slider/aa-slider.js';
import AATextAnswer from './customElements/aa-text-answer/aa-text-answer.js';
import AAVariable from './customElements/aa-variable/aa-variable.js';
import AAWhen from './customElements/aa-choose/aa-when/aa-when.js';
export { AAClasses } from './customElements/aa-baseElement/baseElement.js';
/**
 * it is important that aa-session is imported last. This way all other elements will
 * have already been registered before a aa-session element gets
 * initialized
 */
import AASession from './customElements/aa-session/aa-session.js';


import GenericEditor from './componentEditors/generic-editor/generic-editor.js';



export const AAElements = {
    BaseElement, AAAffectGrid, AACheckboxes, AAChoose,
    AAChoiceItem, AAFunctionRandom,
    // AAGeoLocation, 
    AALabel,
    AALikertScale, AAMemory, AAMultipleChoice, AAOtherwise,
    AAScreen, AASession, AASequence, AASlider, AATextAnswer,
    AAVariable, AAWhen, GenericEditor
}
