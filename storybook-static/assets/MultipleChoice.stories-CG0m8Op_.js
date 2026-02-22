import{b as l}from"./lit-element-BrtkDOYA.js";const u={title:"Response Items/Multiple Choice",tags:["autodocs"],parameters:{docs:{description:{component:["A single-select radio group. Contains `<aa-choice-item>` children.","","### DOM API","","```js","const mc = document.querySelector('aa-multiple-choice');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `mc.value` | `string \\| undefined` | Get or set the selected value |","| `mc.updateState(checkedNode)` | `void` | Update internal state when an item changes |","| `mc.getValueOfSelectedItem()` | `string \\| undefined` | Returns the value of the currently selected item |","","### Events","","| Event | Detail | Description |","|---|---|---|","| `change` | `{ value }` | Fired when the selected item changes |"].join(`
`)}}},argTypes:{horizontal:{control:"boolean"}},render:s=>l`
    <aa-multiple-choice name="color" ?horizontal="${s.horizontal}">
      <aa-choice-item value="red">Red</aa-choice-item>
      <aa-choice-item value="blue">Blue</aa-choice-item>
      <aa-choice-item value="green">Green</aa-choice-item>
      <aa-choice-item value="yellow">Yellow</aa-choice-item>
    </aa-multiple-choice>
  `},e={args:{horizontal:!1}},a={args:{horizontal:!0}};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    horizontal: false
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var c,i,n;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    horizontal: true
  }
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const d=["Vertical","Horizontal"];export{a as Horizontal,e as Vertical,d as __namedExportsOrder,u as default};
