import{b as g}from"./lit-element-BrtkDOYA.js";const w={title:"Response Items/Text Answer",tags:["autodocs"],argTypes:{name:{control:"text"},label:{control:"text"},type:{control:{type:"select"},options:["text","textarea","number","email","tel","password","date","datetime-local","time"]}},render:s=>g`
    <aa-text-answer
      name="${s.name}"
      label="${s.label}"
      type="${s.type}"
    ></aa-text-answer>
  `},e={args:{name:"response",label:"What is your name?",type:"text"}},a={args:{name:"feedback",label:"Please share your feedback",type:"textarea"}},r={args:{name:"age",label:"How old are you?",type:"number"}},t={args:{name:"email",label:"Enter your email address",type:"email"}};var n,o,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: "response",
    label: "What is your name?",
    type: "text"
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: "feedback",
    label: "Please share your feedback",
    type: "textarea"
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: "age",
    label: "How old are you?",
    type: "number"
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var b,y,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: "email",
    label: "Enter your email address",
    type: "email"
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const E=["Default","TextArea","NumberInput","EmailInput"];export{e as Default,t as EmailInput,r as NumberInput,a as TextArea,E as __namedExportsOrder,w as default};
