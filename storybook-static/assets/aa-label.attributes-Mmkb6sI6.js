import{j as e}from"./jsx-runtime-DjjJRqnr.js";import{M as i}from"./index-BZwxqCSI.js";import{u as r}from"./index-BHT9JHh8.js";import"./iframe-vNrS5K6G.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function s(t){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"UI/Label/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-label-attribute-reference",children:[e.jsx(n.code,{children:"<aa-label>"})," Attribute Reference"]}),`
`,e.jsx(n.p,{children:"A display-only element for showing text to the participant. It does not collect any data — it simply renders its content as styled text. Use it for instructions, questions, or informational text within a screen."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-screen>
  <aa-label>On a scale from 1 to 7, how happy do you feel right now?</aa-label>
  <aa-likert-scale name="happiness" items="7"></aa-likert-scale>
</aa-screen>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inherited:"})," Yes (from ",e.jsx(n.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:"Optional identifier for the label. Not commonly needed since labels don't produce data, but can be useful for targeting the element programmatically."}),`
`,e.jsxs(n.h3,{id:"diagram--diagram-transparent",children:[e.jsx(n.code,{children:"diagram"})," / ",e.jsx(n.code,{children:"diagram-transparent"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inherited:"})," Yes (from ",e.jsx(n.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.code,{children:"<aa-session>"})," documentation for details."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:["The label's visible text is provided as ",e.jsx(n.strong,{children:"slot content"})," (i.e. the text between the opening and closing tags). HTML content is supported:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-label>
  Please rate your <strong>current</strong> mood.
</aa-label>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<aa-label>"})," uses Shadow DOM. The element renders as ",e.jsx(n.code,{children:"display: block"})," with a sans-serif font. Custom styling can be applied via CSS custom properties or by targeting the element directly."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Optional identifier"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"diagram"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Render visual diagram"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"diagram-transparent"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Transparent diagram background"})]})]})]})]})}function p(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{p as default};
