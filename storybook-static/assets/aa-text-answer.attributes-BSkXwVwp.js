import{j as e}from"./jsx-runtime-DjjJRqnr.js";import{M as i}from"./index-BZwxqCSI.js";import{u as s}from"./index-BHT9JHh8.js";import"./iframe-vNrS5K6G.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function r(t){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Response Items/Text Answer/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-text-answer-attribute-reference",children:[e.jsx(n.code,{children:"<aa-text-answer>"})," Attribute Reference"]}),`
`,e.jsx(n.p,{children:"A free-text response item that renders as a text input field. Supports multiple input types including plain text, email, number, telephone, and multi-line textarea."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-text-answer name="comment" label="Any additional comments?" type="textarea">
</aa-text-answer>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"The variable name under which the entered text is stored in session memory."}),`
`,e.jsx(n.h3,{id:"label",children:e.jsx(n.code,{children:"label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"A label displayed above or alongside the input field. Provides context for what the participant should enter."}),`
`,e.jsx(n.h3,{id:"type",children:e.jsx(n.code,{children:"type"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"text"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Allowed values:"})," ",e.jsx(n.code,{children:'"date"'})," · ",e.jsx(n.code,{children:'"datetime"'})," · ",e.jsx(n.code,{children:'"datetime-local"'})," · ",e.jsx(n.code,{children:'"email"'})," · ",e.jsx(n.code,{children:'"number"'})," · ",e.jsx(n.code,{children:'"password"'})," · ",e.jsx(n.code,{children:'"tel"'})," · ",e.jsx(n.code,{children:'"text"'})," · ",e.jsx(n.code,{children:'"time"'})," · ",e.jsx(n.code,{children:'"textarea"'})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The kind of input to render. This maps to the HTML ",e.jsx(n.code,{children:'<input type="...">'})," attribute, with the addition of ",e.jsx(n.code,{children:'"textarea"'})," which renders a multi-line text area instead."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"text"})})," — Single-line plain text (default)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"textarea"})})," — Multi-line text area for longer responses"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"number"})})," — Numeric input with increment/decrement controls"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"email"})})," — Email address with basic format validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"tel"})})," — Telephone number input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"date"})})," — Date picker"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"datetime-local"})})," — Date and time picker"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"time"})})," — Time picker"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"password"})})," — Masked text input"]}),`
`]}),`
`,e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (read-only)"]}),`
`]}),`
`,e.jsx(n.p,{children:"The current text entered by the participant. Updated on each input event (with a 1500ms debounce for session memory writes)."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Variable name for data storage"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Input label text"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"type"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'"text"'})}),e.jsx(n.td,{children:"Input type (text, textarea, number, email, etc.)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Current entered text (read-only)"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const ta = document.querySelector('aa-text-answer');
console.log(ta.value); // current text
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The current input value"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The label text"})]})]})]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:["The input dispatches ",e.jsx(n.code,{children:"input"})," and ",e.jsx(n.code,{children:"change"})," events as the participant types. Session memory is updated with a 1500ms debounce. The parent ",e.jsx(n.code,{children:"<aa-screen>"})," collects the final value on submission."]})]})}function u(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{u as default};
