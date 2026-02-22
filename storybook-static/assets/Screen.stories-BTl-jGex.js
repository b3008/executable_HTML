import{b}from"./lit-element-BrtkDOYA.js";const h={title:"UI/Screen",tags:["autodocs"],parameters:{docs:{description:{component:["A container that collects values from its child response items and provides a submit button.","","### DOM API","","```js","const screen = document.querySelector('aa-screen');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `screen.value` | `Promise<AAScreenValue>` | Collects all child response values with metadata |","| `screen.collectValues()` | `Promise<AAScreenValue>` | Explicitly collect all child values |","| `screen.valueWithKey()` | `Promise<object>` | Returns values keyed by child element name |","| `screen.hide()` | `void` | Hides the screen and stops child sequences |","| `screen.show()` | `void` | Shows the screen |","| `screen.automate()` | `void` | Auto-fills child inputs and triggers submit |","| `screen.submitButtonClick()` | `Promise<void>` | Programmatically click the submit button |","| `screen.hasChildrenThatRequireResponse()` | `Promise<Element[]>` | Returns required child elements that have no value |","| `screen.getAAChildren(node)` | `Element[]` | Gets AA custom element children |","","### Events","","| Event | Detail | Description |","|---|---|---|","| `valueSubmit` | `AAScreenValueSubmitEventDetail` | Fired when the screen is submitted with collected values |","| `endEvent` | — | Fired after submit completes |"].join(`
`)}}},argTypes:{submitButtonText:{control:"text"},submitButtonHidden:{control:"boolean"}},render:n=>b`
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
  `},e={args:{submitButtonText:"Submit",submitButtonHidden:!1}},t={args:{submitButtonText:"Next",submitButtonHidden:!1}},s={args:{submitButtonText:"Submit",submitButtonHidden:!0}};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    submitButtonText: "Submit",
    submitButtonHidden: false
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var i,u,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    submitButtonText: "Next",
    submitButtonHidden: false
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    submitButtonText: "Submit",
    submitButtonHidden: true
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const x=["Default","CustomButtonText","HiddenButton"];export{t as CustomButtonText,e as Default,s as HiddenButton,x as __namedExportsOrder,h as default};
