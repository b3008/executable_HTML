import{b as o}from"./lit-element-BrtkDOYA.js";const d={title:"Response Items/Slider",tags:["autodocs"],parameters:{docs:{description:{component:["A range slider input for collecting numeric values.","","### DOM API","","```js","const slider = document.querySelector('aa-slider');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `slider.value` | `number` | Get or set the current slider value |","| `slider.minLabel` | `string` | Get or set the min-label text |","| `slider.maxLabel` | `string` | Get or set the max-label text |","| `slider.min` | `number` | Set the minimum value |","| `slider.max` | `number` | Set the maximum value |","","### Events","","| Event | Description |","|---|---|","| `change` | Fired when the slider value changes |"].join(`
`)}}},argTypes:{min:{control:"number"},max:{control:"number"},minLabel:{control:"text"},maxLabel:{control:"text"}},render:e=>o`
    <aa-slider
      name="rating"
      min="${e.min}"
      max="${e.max}"
      min-label="${e.minLabel}"
      max-label="${e.maxLabel}"
    ></aa-slider>
  `},a={args:{min:0,max:100,minLabel:"Not at all",maxLabel:"Extremely"}},r={args:{min:1,max:10,minLabel:"1",maxLabel:"10"}};var n,t,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    minLabel: "Not at all",
    maxLabel: "Extremely"
  }
}`,...(m=(t=a.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var l,s,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 10,
    minLabel: "1",
    maxLabel: "10"
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const u=["Default","SmallRange"];export{a as Default,r as SmallRange,u as __namedExportsOrder,d as default};
