import{b as l}from"./lit-element-BrtkDOYA.js";const m={title:"Response Items/Checkboxes",tags:["autodocs"],parameters:{docs:{description:{component:["A multi-select checkbox group. Contains `<aa-choice-item>` children.","","### DOM API","","```js","const checkboxes = document.querySelector('aa-checkboxes');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `checkboxes.value` | `(string \\| null)[]` | Array of checked values (`null` for unchecked items) |","| `checkboxes.toJSON()` | `object` | JSON representation including child items |","","### Events","","| Event | Detail | Description |","|---|---|---|","| `change` | `{ value }` | Fired when any checkbox is toggled |"].join(`
`)}}},argTypes:{horizontal:{control:"boolean"}},render:n=>l`
    <aa-checkboxes name="toppings" ?horizontal="${n.horizontal}">
      <aa-choice-item value="cheese">Cheese</aa-choice-item>
      <aa-choice-item value="pepperoni">Pepperoni</aa-choice-item>
      <aa-choice-item value="mushrooms">Mushrooms</aa-choice-item>
      <aa-choice-item value="olives">Olives</aa-choice-item>
    </aa-checkboxes>
  `},e={args:{horizontal:!1}},o={args:{horizontal:!0}};var a,c,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    horizontal: false
  }
}`,...(r=(c=e.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};var t,s,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    horizontal: true
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const p=["Vertical","Horizontal"];export{o as Horizontal,e as Vertical,p as __namedExportsOrder,m as default};
