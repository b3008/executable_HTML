import{b as u}from"./lit-element-BrtkDOYA.js";const b={title:"Control Flow/Sequence",tags:["autodocs"],render:()=>u`
    <aa-sequence name="demo-sequence" debug>
      <aa-label>Step 1: Welcome</aa-label>
      <aa-label>Step 2: Instructions</aa-label>
      <aa-label>Step 3: Complete</aa-label>
    </aa-sequence>
  `},e={},a={render:()=>u`
    <aa-sequence name="survey-sequence" debug>
      <aa-screen submit-button-text="Next">
        <aa-label>Question 1</aa-label>
        <aa-text-answer name="q1" label="What is your name?" type="text"></aa-text-answer>
      </aa-screen>
      <aa-screen submit-button-text="Next">
        <aa-label>Question 2</aa-label>
        <aa-slider name="q2" min="1" max="10" min-label="Low" max-label="High"></aa-slider>
      </aa-screen>
      <aa-screen submit-button-text="Finish">
        <aa-label>Thank you!</aa-label>
      </aa-screen>
    </aa-sequence>
  `};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var r,l,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <aa-sequence name="survey-sequence" debug>
      <aa-screen submit-button-text="Next">
        <aa-label>Question 1</aa-label>
        <aa-text-answer name="q1" label="What is your name?" type="text"></aa-text-answer>
      </aa-screen>
      <aa-screen submit-button-text="Next">
        <aa-label>Question 2</aa-label>
        <aa-slider name="q2" min="1" max="10" min-label="Low" max-label="High"></aa-slider>
      </aa-screen>
      <aa-screen submit-button-text="Finish">
        <aa-label>Thank you!</aa-label>
      </aa-screen>
    </aa-sequence>
  \`
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const m=["Default","WithScreens"];export{e as Default,a as WithScreens,m as __namedExportsOrder,b as default};
