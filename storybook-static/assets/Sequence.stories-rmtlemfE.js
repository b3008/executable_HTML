import{b as m}from"./lit-element-BrtkDOYA.js";import{o as i}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";const t=`<aa-session>
  <aa-sequence id="demo-seq" name="demo-sequence" debug>
    <aa-screen submit-button-hidden>
      <aa-label>Step 1: Welcome</aa-label>
    </aa-screen>
    <aa-screen submit-button-hidden>
      <aa-label>Step 2: Instructions</aa-label>
    </aa-screen>
    <aa-screen submit-button-hidden>
      <aa-label>Step 3: Complete</aa-label>
    </aa-screen>
  </aa-sequence>
</aa-session>
<button onclick="document.getElementById('demo-seq').next()">Next Step</button>`,h={title:"Control Flow/Sequence",tags:["autodocs"],render:()=>m`${i(t)}`,parameters:{docs:{source:{code:t,language:"html"}}}},e={},s=`<aa-session>
  <aa-sequence name="survey-sequence" debug>
    <aa-screen submit-button-text="Next">
      <aa-label>Question 1</aa-label>
      <aa-text-answer
        name="q1"
        label="What is your name?"
        type="text"
      ></aa-text-answer>
    </aa-screen>
    <aa-screen submit-button-text="Next">
      <aa-label>Question 2</aa-label>
      <aa-slider
        name="q2"
        min="1"
        max="10"
        min-label="Low"
        max-label="High"
      ></aa-slider>
    </aa-screen>
    <aa-screen submit-button-text="Finish">
      <aa-label>Thank you!</aa-label>
    </aa-screen>
  </aa-sequence>
</aa-session>`,a={render:()=>m`${i(s)}`,parameters:{docs:{source:{code:s,language:"html"}}}};var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`\${unsafeHTML(withScreensSource)}\`,
  parameters: {
    docs: {
      source: {
        code: withScreensSource,
        language: "html"
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const S=["Default","WithScreens"];export{e as Default,a as WithScreens,S as __namedExportsOrder,h as default};
