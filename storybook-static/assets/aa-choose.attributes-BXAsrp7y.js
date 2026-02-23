import{j as e}from"./jsx-runtime-DuvGAStC.js";import{M as i}from"./index-NKiEBVEa.js";import{u as d}from"./index-DJ34rhJJ.js";import"./iframe-BLDPwhxa.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function r(s){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},d(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Control Flow/Choose/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-choose-attribute-reference",children:[e.jsx(n.code,{children:"<aa-choose>"})," Attribute Reference"]}),`
`,e.jsxs(n.p,{children:["A conditional control-flow element that evaluates test expressions on its child branches and renders the first matching one. It implements an if/else-if/else pattern using ",e.jsx(n.code,{children:"<aa-when>"})," and ",e.jsx(n.code,{children:"<aa-otherwise>"})," child elements."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-choose name="branch-by-mood">
  <aa-when test="mood > 5">
    <template>
      <aa-screen>
        <aa-label>Glad you're feeling good!</aa-label>
      </aa-screen>
    </template>
  </aa-when>
  <aa-when test="mood > 2">
    <template>
      <aa-screen>
        <aa-label>Hanging in there?</aa-label>
      </aa-screen>
    </template>
  </aa-when>
  <aa-otherwise>
    <template>
      <aa-screen>
        <aa-label>Sorry to hear that.</aa-label>
      </aa-screen>
    </template>
  </aa-otherwise>
</aa-choose>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"aa-choose-attributes",children:[e.jsx(n.code,{children:"<aa-choose>"})," Attributes"]}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"A descriptive name for the choose block. Used for debugging and identification."}),`
`,e.jsx(n.h3,{id:"should-run",children:e.jsx(n.code,{children:"should-run"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Controls whether the choose block evaluates its conditions. When ",e.jsx(n.code,{children:"false"}),", the element is skipped entirely."]}),`
`,e.jsx(n.h3,{id:"debug",children:e.jsx(n.code,{children:"debug"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", enables debug output for the evaluation process."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"aa-when-attributes",children:[e.jsx(n.code,{children:"<aa-when>"})," Attributes"]}),`
`,e.jsxs(n.p,{children:["A child element of ",e.jsx(n.code,{children:"<aa-choose>"})," representing a conditional branch. Its content (wrapped in a ",e.jsx(n.code,{children:"<template>"}),") is rendered if the ",e.jsx(n.code,{children:"test"})," expression evaluates to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsx(n.h3,{id:"test",children:e.jsx(n.code,{children:"test"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String (expression)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required:"})," Yes"]}),`
`]}),`
`,e.jsxs(n.p,{children:["A JavaScript-like expression that is evaluated against session memory. The expression is parsed using ",e.jsx(n.a,{href:"https://ericsmekens.github.io/jsep/",target:"_blank",rel:"nofollow noopener noreferrer",children:"jsep"})," and supports:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Comparison operators:"})," ",e.jsx(n.code,{children:">"}),", ",e.jsx(n.code,{children:"<"}),", ",e.jsx(n.code,{children:">="}),", ",e.jsx(n.code,{children:"<="}),", ",e.jsx(n.code,{children:"=="}),", ",e.jsx(n.code,{children:"!="})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Logical operators:"})," ",e.jsx(n.code,{children:"&&"}),", ",e.jsx(n.code,{children:"||"}),", ",e.jsx(n.code,{children:"!"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Variable references:"})," Bare identifiers reference session memory variables (e.g. ",e.jsx(n.code,{children:"mood"})," reads the value stored under the key ",e.jsx(n.code,{children:'"mood"'}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Literals:"})," Numbers (",e.jsx(n.code,{children:"5"}),"), strings (",e.jsx(n.code,{children:"'hello'"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Examples:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-when test="mood > 5">...</aa-when>
<aa-when test="age >= 18 && consent == 'yes'">...</aa-when>
<aa-when test="score != 0">...</aa-when>
`})}),`
`,e.jsxs(n.p,{children:["Branches are evaluated in document order. The ",e.jsx(n.strong,{children:"first"})," ",e.jsx(n.code,{children:"<aa-when>"})," whose ",e.jsx(n.code,{children:"test"})," evaluates to ",e.jsx(n.code,{children:"true"})," is rendered; subsequent branches are skipped."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"aa-otherwise-attributes",children:[e.jsx(n.code,{children:"<aa-otherwise>"})," Attributes"]}),`
`,e.jsxs(n.p,{children:["A fallback child element of ",e.jsx(n.code,{children:"<aa-choose>"}),". If no ",e.jsx(n.code,{children:"<aa-when>"})," branch matches, the content inside ",e.jsx(n.code,{children:"<aa-otherwise>"})," is rendered. It takes no user-defined attributes."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-otherwise>
  <template>
    <aa-screen>
      <aa-label>Default content shown when no conditions match.</aa-label>
    </aa-screen>
  </template>
</aa-otherwise>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"aa-jump-element",children:[e.jsx(n.code,{children:"<aa-jump>"})," Element"]}),`
`,e.jsxs(n.p,{children:["A control-flow element that immediately jumps to a named element in the parent sequence. It dispatches an ",e.jsx(n.code,{children:"endEvent"})," with a ",e.jsx(n.code,{children:"goto"})," detail and removes itself from the DOM."]}),`
`,e.jsx(n.h3,{id:"name-1",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"Optional identifier for the jump element."}),`
`,e.jsx(n.h3,{id:"goto",children:e.jsx(n.code,{children:"goto"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required:"})," Yes"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"name"})," of the target element to jump to. Typically references a named ",e.jsx(n.code,{children:"<aa-screen>"})," or ",e.jsx(n.code,{children:"<aa-sequence>"})," earlier or later in the parent sequence."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-jump goto="end-screen"></aa-jump>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Behaviour:"})," On connection, ",e.jsx(n.code,{children:"<aa-jump>"})," immediately fires an ",e.jsx(n.code,{children:"endEvent"})," with ",e.jsx(n.code,{children:'{ detail: { goto: "end-screen" } }'})," and removes itself. The parent ",e.jsx(n.code,{children:"<aa-sequence>"})," intercepts this event and advances to the child matching the given name."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsx(n.h3,{id:"aa-choose",children:e.jsx(n.code,{children:"<aa-choose>"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Block identifier"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"should-run"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})}),e.jsx(n.td,{children:"Enable/disable evaluation"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"debug"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Debug mode"})]})]})]}),`
`,e.jsx(n.h3,{id:"aa-when",children:e.jsx(n.code,{children:"<aa-when>"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"test"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Condition expression to evaluate"})]})})]}),`
`,e.jsx(n.h3,{id:"aa-jump",children:e.jsx(n.code,{children:"<aa-jump>"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Jump element identifier"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"goto"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Target element name"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.h3,{id:"aa-choose-1",children:e.jsx(n.code,{children:"<aa-choose>"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Method"}),e.jsx(n.th,{children:"Returns"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"evaluate()"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"void"})}),e.jsx(n.td,{children:"Evaluate conditions and render matching branch"})]})})]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Event"}),e.jsx(n.th,{children:"Element"}),e.jsx(n.th,{children:"When"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"endEvent"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<aa-choose>"})}),e.jsx(n.td,{children:"Fired after the chosen branch completes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"endEvent"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"<aa-jump>"})}),e.jsxs(n.td,{children:["Fired immediately with ",e.jsx(n.code,{children:"goto"})," detail"]})]})]})]})]})}function u(s={}){const{wrapper:n}=Object.assign({},d(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{u as default};
