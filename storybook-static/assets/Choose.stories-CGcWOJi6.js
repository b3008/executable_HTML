import{b as t}from"./lit-element-BrtkDOYA.js";import{o as l}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";const e=`<aa-session name="choose-demo" debug>
  <aa-variable name="score" value="75"></aa-variable>
  <aa-choose name="grade" debug>
    <aa-when test="score >= 90">
      <aa-label>Grade: A — Excellent!</aa-label>
    </aa-when>
    <aa-when test="score >= 70">
      <aa-label>Grade: B — Good job!</aa-label>
    </aa-when>
    <aa-otherwise>
      <aa-label>Grade: C — Keep trying!</aa-label>
    </aa-otherwise>
  </aa-choose>
</aa-session>`,m={title:"Control Flow/Choose",tags:["autodocs"],render:()=>t`${l(e)}`,parameters:{docs:{source:{code:e,language:"html"}}}},a={};var o,r,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const i=["Default"];export{a as Default,i as __namedExportsOrder,m as default};
