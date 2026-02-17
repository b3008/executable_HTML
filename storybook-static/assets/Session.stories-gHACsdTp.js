import{b as i}from"./lit-element-BrtkDOYA.js";const s={title:"Data & Utility/Session",tags:["autodocs"],render:()=>i`
    <aa-session name="demo-survey" debug>
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
    </aa-session>
  `},e={};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const c=["MiniSurvey"];export{e as MiniSurvey,c as __namedExportsOrder,s as default};
