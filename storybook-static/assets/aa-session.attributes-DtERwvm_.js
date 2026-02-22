import{j as e}from"./jsx-runtime-DjjJRqnr.js";import{M as i}from"./index-BZwxqCSI.js";import{u as r}from"./index-BHT9JHh8.js";import"./iframe-vNrS5K6G.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function d(n){const s=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Data & Utility/Session/Attribute Reference"}),`
`,e.jsxs(s.h1,{id:"aa-session-attribute-reference",children:[e.jsx(s.code,{children:"<aa-session>"})," Attribute Reference"]}),`
`,e.jsx(s.p,{children:"A top-level container element that manages the lifecycle of a data-collection session. It generates a unique session ID, provides a shared memory store for child elements, and orchestrates the flow of screens and sequences within it."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<aa-session name="daily-mood">
  <template>
    <aa-sequence>
      <aa-screen submit-button-text="Next">
        <aa-label>How are you feeling?</aa-label>
        <aa-likert-scale name="mood" items="7" start-label="Bad" end-label="Good"></aa-likert-scale>
      </aa-screen>
    </aa-sequence>
  </template>
</aa-session>
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(s.h3,{id:"name",children:e.jsx(s.code,{children:"name"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Inherited:"})," Yes (from ",e.jsx(s.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsx(s.p,{children:"A descriptive name for the session. Used for identification in data output and debugging."}),`
`,e.jsx(s.h3,{id:"should-run",children:e.jsx(s.code,{children:"should-run"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default:"})," ",e.jsx(s.code,{children:"true"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["Controls whether the session activates on connection. When ",e.jsx(s.code,{children:"true"})," (the default), the session renders its template children immediately upon being added to the DOM. Set to ",e.jsx(s.code,{children:"false"})," to create a session that must be started programmatically."]}),`
`,e.jsx(s.h3,{id:"debug",children:e.jsx(s.code,{children:"debug"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default:"})," ",e.jsx(s.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["When ",e.jsx(s.code,{children:"true"}),", enables debug mode. In debug mode, child elements may remain visible after execution instead of being auto-removed, making it easier to inspect state during development."]}),`
`,e.jsx(s.h3,{id:"diagram",children:e.jsx(s.code,{children:"diagram"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default:"})," ",e.jsx(s.code,{children:"false"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Inherited:"})," Yes (from ",e.jsx(s.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsxs(s.p,{children:["When ",e.jsx(s.code,{children:"true"}),", renders a visual diagram of the session structure instead of executing the session. Useful for documentation and understanding the session flow."]}),`
`,e.jsx(s.h3,{id:"diagram-transparent",children:e.jsx(s.code,{children:"diagram-transparent"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default:"})," ",e.jsx(s.code,{children:"false"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Inherited:"})," Yes (from ",e.jsx(s.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsxs(s.p,{children:["When ",e.jsx(s.code,{children:"true"})," (and ",e.jsx(s.code,{children:"diagram"})," is also ",e.jsx(s.code,{children:"true"}),"), renders the diagram with a transparent background."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Attribute"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"name"})}),e.jsx(s.td,{children:"String"}),e.jsx(s.td,{children:"—"}),e.jsx(s.td,{children:"Session identifier"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"should-run"})}),e.jsx(s.td,{children:"Boolean"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"true"})}),e.jsx(s.td,{children:"Auto-start on DOM connection"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"debug"})}),e.jsx(s.td,{children:"Boolean"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"false"})}),e.jsx(s.td,{children:"Enable debug mode"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"diagram"})}),e.jsx(s.td,{children:"Boolean"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"false"})}),e.jsx(s.td,{children:"Render visual diagram"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"diagram-transparent"})}),e.jsx(s.td,{children:"Boolean"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"false"})}),e.jsx(s.td,{children:"Transparent diagram background"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`const session = document.querySelector('aa-session');
`})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Method / Property"}),e.jsx(s.th,{children:"Returns"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"getData()"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"any"})}),e.jsx(s.td,{children:"Retrieve a value from session memory by key"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"setData(key, value)"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"void"})}),e.jsx(s.td,{children:"Store a value in session memory"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"getDataDump()"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"object"})}),e.jsx(s.td,{children:"Get all session memory data as a plain object"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"run()"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"void"})}),e.jsx(s.td,{children:"Programmatically start the session"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"toJSON()"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"object"})}),e.jsx(s.td,{children:"JSON-serialisable representation of the session tree"})]})]})]}),`
`,e.jsx(s.h3,{id:"events",children:"Events"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Event"}),e.jsx(s.th,{children:"When"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"sessionInputSubmit"})}),e.jsx(s.td,{children:"Fired when a child screen submits its collected values"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"sessionEndEvent"})}),e.jsx(s.td,{children:"Fired when the session completes (all sequences finished)"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"sessionReady"})}),e.jsx(s.td,{children:"Fired when the session has initialised and is ready"})]})]})]})]})}function m(n={}){const{wrapper:s}=Object.assign({},r(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}export{m as default};
