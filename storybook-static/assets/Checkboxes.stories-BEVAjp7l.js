import{b as l}from"./lit-element-BrtkDOYA.js";const h={title:"Response Items/Checkboxes",tags:["autodocs"],argTypes:{horizontal:{control:"boolean"}},render:n=>l`
    <aa-checkboxes name="toppings" ?horizontal="${n.horizontal}">
      <aa-choice-item value="cheese">Cheese</aa-choice-item>
      <aa-choice-item value="pepperoni">Pepperoni</aa-choice-item>
      <aa-choice-item value="mushrooms">Mushrooms</aa-choice-item>
      <aa-choice-item value="olives">Olives</aa-choice-item>
    </aa-checkboxes>
  `},e={args:{horizontal:!1}},a={args:{horizontal:!0}};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    horizontal: false
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var t,c,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    horizontal: true
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const p=["Vertical","Horizontal"];export{a as Horizontal,e as Vertical,p as __namedExportsOrder,h as default};
