import{b as u}from"./lit-element-BrtkDOYA.js";import{o as d}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";const t=`<aa-session>
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
<button onclick="document.getElementById('demo-seq').next()">Next Step</button>`,b={title:"Control Flow/Sequence",tags:["autodocs"],render:()=>u`${d(t)}`,parameters:{docs:{description:{component:["Steps through its children one at a time. Each child dispatches `endEvent` to advance to the next. Commonly wraps `<aa-screen>` elements.","","### DOM API","","```js","const seq = document.querySelector('aa-sequence');","```","","| Method | Returns | Description |","|---|---|---|","| `seq.init()` | `void` | Initialize the sequence (hides all children) |","| `seq.start()` | `void` | Start the sequence from the first child |","| `seq.stop()` | `void` | Stop the sequence |","| `seq.next(name?)` | `Promise<void>` | Advance to the next child, or jump to a named child |","","### Events","","| Event | Description |","|---|---|","| `endEvent` | Fired when the sequence completes (all children done) |","","### Related: `<aa-jump>`","",'Use `<aa-jump goto="stepName">` inside a sequence to jump to a named child element.'].join(`
`)},source:{code:t,language:"html"}}}},e={},n=`<aa-session>
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
</aa-session>`,a={render:()=>u`${d(n)}`,parameters:{docs:{source:{code:n,language:"html"}}}};var s,o,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`\${unsafeHTML(withScreensSource)}\`,
  parameters: {
    docs: {
      source: {
        code: withScreensSource,
        language: "html"
      }
    }
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const q=["Default","WithScreens"];export{e as Default,a as WithScreens,q as __namedExportsOrder,b as default};
