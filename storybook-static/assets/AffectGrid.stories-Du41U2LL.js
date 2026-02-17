import{b as s}from"./lit-element-BrtkDOYA.js";const i={title:"Response Items/Affect Grid",tags:["autodocs"],argTypes:{rows:{control:{type:"number",min:1,max:20}},columns:{control:{type:"number",min:1,max:20}},topLabel:{control:"text"},bottomLabel:{control:"text"},leftLabel:{control:"text"},rightLabel:{control:"text"},centerLabel:{control:"text"},topLeftLabel:{control:"text"},topRightLabel:{control:"text"},bottomLeftLabel:{control:"text"},bottomRightLabel:{control:"text"},required:{control:"boolean"}},render:t=>s`
    <aa-affect-grid
      name="mood"
      rows="${t.rows}"
      columns="${t.columns}"
      top-label="${t.topLabel}"
      bottom-label="${t.bottomLabel}"
      left-label="${t.leftLabel}"
      right-label="${t.rightLabel}"
      center-label="${t.centerLabel}"
      top-left-label="${t.topLeftLabel}"
      top-right-label="${t.topRightLabel}"
      bottom-left-label="${t.bottomLeftLabel}"
      bottom-right-label="${t.bottomRightLabel}"
    ></aa-affect-grid>
  `},e={args:{rows:9,columns:9,topLabel:"High Arousal",bottomLabel:"Low Arousal",leftLabel:"Unpleasant",rightLabel:"Pleasant",centerLabel:"Neutral",topLeftLabel:"Stressed",topRightLabel:"Excited",bottomLeftLabel:"Sad",bottomRightLabel:"Calm",required:!1}},o={args:{rows:5,columns:5,topLabel:"High",bottomLabel:"Low",leftLabel:"Negative",rightLabel:"Positive",centerLabel:"",topLeftLabel:"",topRightLabel:"",bottomLeftLabel:"",bottomRightLabel:"",required:!1}};var l,a,b;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(a=e.parameters)==null?void 0:a.docs)==null?void 0:b.source}}};var r,n,L;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(L=(n=o.parameters)==null?void 0:n.docs)==null?void 0:L.source}}};const c=["Default","Small"];export{e as Default,o as Small,c as __namedExportsOrder,i as default};
