import{b as i}from"./lit-element-BrtkDOYA.js";const x={title:"Response Items/Slider",tags:["autodocs"],argTypes:{min:{control:"number"},max:{control:"number"},minLabel:{control:"text"},maxLabel:{control:"text"}},render:a=>i`
    <aa-slider
      name="rating"
      min="${a.min}"
      max="${a.max}"
      min-label="${a.minLabel}"
      max-label="${a.maxLabel}"
    ></aa-slider>
  `},e={args:{min:0,max:100,minLabel:"Not at all",maxLabel:"Extremely"}},m={args:{min:1,max:10,minLabel:"1",maxLabel:"10"}};var n,r,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    minLabel: "Not at all",
    maxLabel: "Extremely"
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var t,o,s;m.parameters={...m.parameters,docs:{...(t=m.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 10,
    minLabel: "1",
    maxLabel: "10"
  }
}`,...(s=(o=m.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const b=["Default","SmallRange"];export{e as Default,m as SmallRange,b as __namedExportsOrder,x as default};
