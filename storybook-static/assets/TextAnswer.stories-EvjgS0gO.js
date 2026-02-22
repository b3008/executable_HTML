import{b as x}from"./lit-element-BrtkDOYA.js";const f={title:"Response Items/Text Answer",tags:["autodocs"],parameters:{docs:{description:{component:["A text input field supporting multiple input types (text, textarea, number, email, date, etc.).","","### DOM API","","```js","const input = document.querySelector('aa-text-answer');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `input.value` | `string` | Get or set the current input value |","| `input.label` | `string` | Get or set the label text |","","### Events","","| Event | Description |","|---|---|","| `change` | Fired when the value changes (debounced ~1500ms on typing) |"].join(`
`)}}},argTypes:{name:{control:"text"},label:{control:"text"},type:{control:{type:"select"},options:["text","textarea","number","email","tel","password","date","datetime-local","time"]}},render:n=>x`
    <aa-text-answer
      name="${n.name}"
      label="${n.label}"
      type="${n.type}"
    ></aa-text-answer>
  `},e={args:{name:"response",label:"What is your name?",type:"text"}},a={args:{name:"feedback",label:"Please share your feedback",type:"textarea"}},t={args:{name:"age",label:"How old are you?",type:"number"}},r={args:{name:"email",label:"Enter your email address",type:"email"}};var s,o,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: "response",
    label: "What is your name?",
    type: "text"
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: "feedback",
    label: "Please share your feedback",
    type: "textarea"
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,i,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: "age",
    label: "How old are you?",
    type: "number"
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var b,y,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: "email",
    label: "Enter your email address",
    type: "email"
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const w=["Default","TextArea","NumberInput","EmailInput"];export{e as Default,r as EmailInput,t as NumberInput,a as TextArea,w as __namedExportsOrder,f as default};
