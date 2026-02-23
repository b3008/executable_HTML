import{b as u}from"./lit-element-BrtkDOYA.js";const g={title:"Response Items/Likert Scale",tags:["autodocs"],parameters:{docs:{description:{component:["A Likert rating scale with configurable number of items, labels, and numbering.","","### DOM API","","```js","const scale = document.querySelector('aa-likert-scale');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `scale.value` | `string` | The currently selected radio value |","| `scale.arrangeLabels()` | `void` | Re-renders and positions the scale labels |","","### Events","","| Event | Description |","|---|---|","| `change` | Fired when a radio option is selected |"].join(`
`)}}},argTypes:{items:{control:"number"},startItem:{control:"number"},startLabel:{control:"text"},middleLabel:{control:"text"},endLabel:{control:"text"},showRadioNumbers:{control:"boolean"},numberPosition:{control:{type:"select"},options:["left","right"]}},render:e=>u`
    <aa-likert-scale
      name="agreement"
      items="${e.items}"
      start-item="${e.startItem}"
      start-label="${e.startLabel}"
      middle-label="${e.middleLabel}"
      end-label="${e.endLabel}"
      ?show-radio-numbers="${e.showRadioNumbers}"
      number-position="${e.numberPosition}"
    ></aa-likert-scale>
  `},t={args:{items:7,startItem:1,startLabel:"Strongly Disagree",middleLabel:"Neutral",endLabel:"Strongly Agree",showRadioNumbers:!0,numberPosition:"right"}},r={args:{items:5,startItem:1,startLabel:"Never",middleLabel:"Sometimes",endLabel:"Always",showRadioNumbers:!0,numberPosition:"right"}},a={args:{items:11,startItem:0,startLabel:"Not at all likely",middleLabel:"",endLabel:"Extremely likely",showRadioNumbers:!0,numberPosition:"right"}};var s,o,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    items: 7,
    startItem: 1,
    startLabel: "Strongly Disagree",
    middleLabel: "Neutral",
    endLabel: "Strongly Agree",
    showRadioNumbers: true,
    numberPosition: "right"
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: 5,
    startItem: 1,
    startLabel: "Never",
    middleLabel: "Sometimes",
    endLabel: "Always",
    showRadioNumbers: true,
    numberPosition: "right"
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,b,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: 11,
    startItem: 0,
    startLabel: "Not at all likely",
    middleLabel: "",
    endLabel: "Extremely likely",
    showRadioNumbers: true,
    numberPosition: "right"
  }
}`,...(c=(b=a.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const L=["Default","FivePoint","ZeroBased"];export{t as Default,r as FivePoint,a as ZeroBased,L as __namedExportsOrder,g as default};
