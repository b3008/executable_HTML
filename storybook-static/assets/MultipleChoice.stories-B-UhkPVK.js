import{b as n}from"./lit-element-BrtkDOYA.js";const u={title:"Response Items/Multiple Choice",tags:["autodocs"],argTypes:{horizontal:{control:"boolean"}},render:s=>n`
    <aa-multiple-choice name="color" ?horizontal="${s.horizontal}">
      <aa-choice-item value="red">Red</aa-choice-item>
      <aa-choice-item value="blue">Blue</aa-choice-item>
      <aa-choice-item value="green">Green</aa-choice-item>
      <aa-choice-item value="yellow">Yellow</aa-choice-item>
    </aa-multiple-choice>
  `},e={args:{horizontal:!1}},a={args:{horizontal:!0}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    horizontal: false
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    horizontal: true
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const h=["Vertical","Horizontal"];export{a as Horizontal,e as Vertical,h as __namedExportsOrder,u as default};
