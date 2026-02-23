import{j as e}from"./jsx-runtime-DuvGAStC.js";import{M as t}from"./index-NKiEBVEa.js";import{u as i}from"./index-DJ34rhJJ.js";import"./iframe-BLDPwhxa.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function r(s){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",ol:"ol",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Data & Utility/Variable/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-variable-attribute-reference",children:[e.jsx(n.code,{children:"<aa-variable>"})," Attribute Reference"]}),`
`,e.jsx(n.p,{children:"A declarative, non-rendering element that initialises a named variable in session memory. Place it at the start of a session or sequence to set up initial values. The element processes its value on connection and then removes itself from the DOM."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-session name="study">
  <template>
    <aa-variable name="participant_group" value="'control'"></aa-variable>
    <aa-variable name="max_score" value="100"></aa-variable>
    <aa-sequence>...</aa-sequence>
  </template>
</aa-session>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required:"})," Yes"]}),`
`]}),`
`,e.jsx(n.p,{children:"The key under which the value is stored in session memory. Other elements can reference this variable by name."}),`
`,e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required:"})," Yes"]}),`
`]}),`
`,e.jsx(n.p,{children:"The value to assign. Supports two forms:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"String literal"})," — Wrap in quotes: ",e.jsx(n.code,{children:`value="'hello'"`}),". The quotes are stripped and the string ",e.jsx(n.code,{children:"hello"})," is stored."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Numeric literal"})," — A plain number: ",e.jsx(n.code,{children:'value="42"'}),". Stored as the number ",e.jsx(n.code,{children:"42"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Variable reference"})," — A bare identifier: ",e.jsx(n.code,{children:'value="other_variable"'}),". Reads the current value of ",e.jsx(n.code,{children:"other_variable"})," from session memory and copies it."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Examples:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Store the string "control" -->
<aa-variable name="group" value="'control'"></aa-variable>

<!-- Store the number 7 -->
<aa-variable name="max_items" value="7"></aa-variable>

<!-- Copy the value of "mood" into "baseline_mood" -->
<aa-variable name="baseline_mood" value="mood"></aa-variable>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"behaviour",children:"Behaviour"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["On connection (",e.jsx(n.code,{children:"connectedCallback"}),"), the element evaluates the ",e.jsx(n.code,{children:"value"})," expression."]}),`
`,e.jsxs(n.li,{children:["The result is written to session memory under the key specified by ",e.jsx(n.code,{children:"name"}),"."]}),`
`,e.jsxs(n.li,{children:["The element dispatches an ",e.jsx(n.code,{children:"endEvent"})," to signal completion."]}),`
`,e.jsxs(n.li,{children:["Unless ",e.jsx(n.code,{children:"debug"})," is ",e.jsx(n.code,{children:"true"}),", the element removes itself from the DOM."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Variable key in session memory"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Value or expression to assign"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Event"}),e.jsx(n.th,{children:"When"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"endEvent"})}),e.jsx(n.td,{children:"Fired after the variable has been set in session memory"})]})})]})]})}function u(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{u as default};
