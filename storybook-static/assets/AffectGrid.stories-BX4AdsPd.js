import{b as i}from"./lit-element-BrtkDOYA.js";const c={title:"Response Items/Affect Grid",tags:["autodocs"],parameters:{docs:{description:{component:["A 2D grid for measuring affect along two dimensions (e.g., valence and arousal). Based on Russell, Weiss & Mendelsohn (1989).","","### DOM API","","```js","const grid = document.querySelector('aa-affect-grid');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `grid.value` | `[number, number] \\| null` | Get or set the selected `[x, y]` coordinates |","| `grid.x` | `number \\| null` | Get the selected x coordinate (horizontal axis) |","| `grid.y` | `number \\| null` | Get the selected y coordinate (vertical axis) |","","### Events","","| Event | Description |","|---|---|","| `change` | Fired when a cell is selected |"].join(`
`)}}},argTypes:{rows:{control:{type:"number",min:1,max:20}},columns:{control:{type:"number",min:1,max:20}},topLabel:{control:"text"},bottomLabel:{control:"text"},leftLabel:{control:"text"},rightLabel:{control:"text"},centerLabel:{control:"text"},topLeftLabel:{control:"text"},topRightLabel:{control:"text"},bottomLeftLabel:{control:"text"},bottomRightLabel:{control:"text"},required:{control:"boolean"}},render:e=>i`
    <aa-affect-grid
      name="mood"
      rows="${e.rows}"
      columns="${e.columns}"
      top-label="${e.topLabel}"
      bottom-label="${e.bottomLabel}"
      left-label="${e.leftLabel}"
      right-label="${e.rightLabel}"
      center-label="${e.centerLabel}"
      top-left-label="${e.topLeftLabel}"
      top-right-label="${e.topRightLabel}"
      bottom-left-label="${e.bottomLeftLabel}"
      bottom-right-label="${e.bottomRightLabel}"
    ></aa-affect-grid>
  `},t={args:{rows:9,columns:9,topLabel:"High Arousal",bottomLabel:"Low Arousal",leftLabel:"Unpleasant",rightLabel:"Pleasant",centerLabel:"Neutral",topLeftLabel:"Stressed",topRightLabel:"Excited",bottomLeftLabel:"Sad",bottomRightLabel:"Calm",required:!1}},o={args:{rows:5,columns:5,topLabel:"High",bottomLabel:"Low",leftLabel:"Negative",rightLabel:"Positive",centerLabel:"",topLeftLabel:"",topRightLabel:"",bottomLeftLabel:"",bottomRightLabel:"",required:!1}};var l,a,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    rows: 9,
    columns: 9,
    topLabel: "High Arousal",
    bottomLabel: "Low Arousal",
    leftLabel: "Unpleasant",
    rightLabel: "Pleasant",
    centerLabel: "Neutral",
    topLeftLabel: "Stressed",
    topRightLabel: "Excited",
    bottomLeftLabel: "Sad",
    bottomRightLabel: "Calm",
    required: false
  }
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var n,b,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    rows: 5,
    columns: 5,
    topLabel: "High",
    bottomLabel: "Low",
    leftLabel: "Negative",
    rightLabel: "Positive",
    centerLabel: "",
    topLeftLabel: "",
    topRightLabel: "",
    bottomLeftLabel: "",
    bottomRightLabel: "",
    required: false
  }
}`,...(s=(b=o.parameters)==null?void 0:b.docs)==null?void 0:s.source}}};const m=["Default","Small"];export{t as Default,o as Small,m as __namedExportsOrder,c as default};
