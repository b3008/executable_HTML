import{b as l}from"./lit-element-BrtkDOYA.js";const B={title:"UI/Screen",tags:["autodocs"],argTypes:{submitButtonText:{control:"text"},submitButtonHidden:{control:"boolean"}},render:n=>l`
    <aa-screen
      submit-button-text="${n.submitButtonText}"
      ?submit-button-hidden="${n.submitButtonHidden}"
    >
      <aa-label>How are you feeling today?</aa-label>
      <aa-slider
        name="mood"
        min="0"
        max="100"
        min-label="Very Bad"
        max-label="Very Good"
      ></aa-slider>
      <aa-text-answer
        name="comment"
        label="Any comments?"
        type="text"
      ></aa-text-answer>
    </aa-screen>
  `},t={args:{submitButtonText:"Submit",submitButtonHidden:!1}},e={args:{submitButtonText:"Next",submitButtonHidden:!1}},a={args:{submitButtonText:"Submit",submitButtonHidden:!0}};var s,o,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    submitButtonText: "Submit",
    submitButtonHidden: false
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var u,m,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    submitButtonText: "Next",
    submitButtonHidden: false
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,b,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    submitButtonText: "Submit",
    submitButtonHidden: true
  }
}`,...(c=(b=a.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const p=["Default","CustomButtonText","HiddenButton"];export{e as CustomButtonText,t as Default,a as HiddenButton,p as __namedExportsOrder,B as default};
