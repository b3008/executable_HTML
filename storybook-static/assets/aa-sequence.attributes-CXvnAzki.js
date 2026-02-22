import{j as e}from"./jsx-runtime-DjjJRqnr.js";import{M as t}from"./index-BZwxqCSI.js";import{u as d}from"./index-BHT9JHh8.js";import"./iframe-vNrS5K6G.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function r(s){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},d(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Control Flow/Sequence/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-sequence-attribute-reference",children:[e.jsx(n.code,{children:"<aa-sequence>"})," Attribute Reference"]}),`
`,e.jsxs(n.p,{children:["A control-flow element that renders its children one at a time in order. Each child is instantiated from a ",e.jsx(n.code,{children:"<template>"}),", displayed, and then replaced by the next child when it dispatches an ",e.jsx(n.code,{children:"endEvent"}),". This is the primary mechanism for stepping through screens in a survey or questionnaire."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-sequence name="survey-flow">
  <aa-screen submit-button-text="Next">
    <aa-label>Question 1</aa-label>
    <aa-slider name="q1" min="0" max="10"></aa-slider>
  </aa-screen>
  <aa-screen submit-button-text="Done">
    <aa-label>Question 2</aa-label>
    <aa-text-answer name="q2"></aa-text-answer>
  </aa-screen>
</aa-sequence>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsxs(n.p,{children:["A descriptive name for the sequence. Used for identification in data output, debugging, and as a target for ",e.jsx(n.code,{children:"<aa-jump>"})," elements."]}),`
`,e.jsx(n.h3,{id:"write-into",children:e.jsx(n.code,{children:"write-into"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String (CSS selector)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsxs(n.p,{children:["A CSS selector pointing to another DOM element where the sequence should render its children. By default, children are rendered inside the ",e.jsx(n.code,{children:"<aa-sequence>"})," element itself. Setting ",e.jsx(n.code,{children:"write-into"})," allows the sequence to render its content elsewhere in the page — useful for separating the sequence logic from the display area."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-sequence write-into="#display-area">
  <aa-screen>...</aa-screen>
</aa-sequence>
<div id="display-area"></div>
`})}),`
`,e.jsx(n.h3,{id:"should-run",children:e.jsx(n.code,{children:"should-run"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Controls whether the sequence starts automatically. When ",e.jsx(n.code,{children:"true"}),", the sequence begins rendering its first child immediately. Set to ",e.jsx(n.code,{children:"false"})," to prevent execution — useful for conditionally enabled sequences."]}),`
`,e.jsx(n.h3,{id:"debug",children:e.jsx(n.code,{children:"debug"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", enables debug output for the sequence."]}),`
`,e.jsx(n.h3,{id:"type",children:e.jsx(n.code,{children:"type"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (internal)"]}),`
`]}),`
`,e.jsx(n.p,{children:"Internal property used by the system to track the sequence type. Not typically set by authors."}),`
`,e.jsx(n.h3,{id:"stopped",children:e.jsx(n.code,{children:"stopped"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (internal)"]}),`
`]}),`
`,e.jsx(n.p,{children:"Internal property indicating whether the sequence has been stopped. Not typically set by authors."}),`
`,e.jsxs(n.h3,{id:"diagram--diagram-transparent",children:[e.jsx(n.code,{children:"diagram"})," / ",e.jsx(n.code,{children:"diagram-transparent"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inherited:"})," Yes (from ",e.jsx(n.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.code,{children:"<aa-session>"})," documentation for details."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Sequence identifier"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"write-into"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"CSS selector for render target"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"should-run"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})}),e.jsx(n.td,{children:"Auto-start on connection"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"debug"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Enable debug mode"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Internal: sequence type"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"stopped"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Internal: stopped state"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const seq = document.querySelector('aa-sequence');
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Method / Property"}),e.jsx(n.th,{children:"Returns"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"init()"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"void"})}),e.jsx(n.td,{children:"Initialise the sequence"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"start()"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"void"})}),e.jsx(n.td,{children:"Begin stepping through children"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"stop()"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"void"})}),e.jsx(n.td,{children:"Stop the sequence"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"next(name?)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"void"})}),e.jsxs(n.td,{children:["Advance to the next child (or jump to ",e.jsx(n.code,{children:"name"}),")"]})]})]})]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Event"}),e.jsx(n.th,{children:"When"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"endEvent"})}),e.jsx(n.td,{children:"Fired when all children have been processed"})]})})]})]})}function p(s={}){const{wrapper:n}=Object.assign({},d(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{p as default};
