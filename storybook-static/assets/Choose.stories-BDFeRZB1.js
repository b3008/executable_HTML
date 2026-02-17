import{b as s}from"./lit-element-BrtkDOYA.js";const l={title:"Control Flow/Choose",tags:["autodocs"],render:()=>s`
    <aa-session name="choose-demo" debug>
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
    </aa-session>
  `},a={};var e,o,r;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const n=["Default"];export{a as Default,n as __namedExportsOrder,l as default};
