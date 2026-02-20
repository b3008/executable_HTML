import{b as i}from"./lit-element-BrtkDOYA.js";import{o as s}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";const a=`<aa-session name="demo-survey" debug>
  <aa-memory></aa-memory>
  <aa-sequence name="survey-flow">
    <aa-screen submit-button-text="Next">
      <aa-label>What is your favorite color?</aa-label>
      <aa-multiple-choice name="favColor">
        <aa-choice-item value="red">Red</aa-choice-item>
        <aa-choice-item value="blue">Blue</aa-choice-item>
        <aa-choice-item value="green">Green</aa-choice-item>
      </aa-multiple-choice>
    </aa-screen>
    <aa-screen submit-button-text="Submit">
      <aa-label>How much do you like it?</aa-label>
      <aa-slider name="liking" min="0" max="100" min-label="Not at all" max-label="Love it"></aa-slider>
    </aa-screen>
  </aa-sequence>
</aa-session>`,n={title:"Data & Utility/Session",tags:["autodocs"],render:()=>i`${s(a)}`,parameters:{docs:{source:{code:a,language:"html"}}}},e={};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const u=["MiniSurvey"];export{e as MiniSurvey,u as __namedExportsOrder,n as default};
