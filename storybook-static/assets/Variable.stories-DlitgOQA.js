import{b as u}from"./lit-element-BrtkDOYA.js";const i={title:"Data & Utility/Variable",tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"}},render:r=>u`
    <aa-variable
      name="${r.name}"
      value="${r.value}"
      debug
    ></aa-variable>
  `},e={args:{name:"greeting",value:"'Hello, World!'"}},a={args:{name:"score",value:"42"}};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: "greeting",
    value: "'Hello, World!'"
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var n,l,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: "score",
    value: "42"
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const d=["StringValue","NumericValue"];export{a as NumericValue,e as StringValue,d as __namedExportsOrder,i as default};
