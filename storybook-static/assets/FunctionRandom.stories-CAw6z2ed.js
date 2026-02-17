import{b as l}from"./lit-element-BrtkDOYA.js";const x={title:"Data & Utility/Function Random",tags:["autodocs"],argTypes:{min:{control:"number"},max:{control:"number"}},render:n=>l`
    <aa-function-random
      name="randomValue"
      min="${n.min}"
      max="${n.max}"
      debug
    ></aa-function-random>
  `},a={args:{min:1,max:100}},r={args:{min:1,max:6}},e={args:{min:0,max:1}};var o,s,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 100
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var t,c,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 6
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,d,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 1
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const f=["Default","DiceRoll","CoinFlip"];export{e as CoinFlip,a as Default,r as DiceRoll,f as __namedExportsOrder,x as default};
