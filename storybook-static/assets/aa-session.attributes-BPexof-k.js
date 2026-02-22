import{j as e}from"./jsx-runtime-xrKziPlz.js";import{M as t}from"./index-DuX6iVfj.js";import{u as r}from"./index-7wJ7cBts.js";import"./iframe-DEer1LHX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function i(s){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Data & Utility/Session/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-session-attribute-reference",children:[e.jsx(n.code,{children:"<aa-session>"})," Attribute Reference"]}),`
`,e.jsx(n.p,{children:"A top-level container element that manages the lifecycle of a data-collection session. It generates a unique session ID, provides a shared memory store for child elements, and orchestrates the flow of screens and sequences within it."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-session name="daily-mood">
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
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inherited:"})," Yes (from ",e.jsx(n.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:"A descriptive name for the session. Used for identification in data output and debugging."}),`
`,e.jsx(n.h3,{id:"should-run",children:e.jsx(n.code,{children:"should-run"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Controls whether the session activates on connection. When ",e.jsx(n.code,{children:"true"})," (the default), the session renders its template children immediately upon being added to the DOM. Set to ",e.jsx(n.code,{children:"false"})," to create a session that must be started programmatically."]}),`
`,e.jsx(n.h3,{id:"debug",children:e.jsx(n.code,{children:"debug"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", enables debug mode. In debug mode, child elements may remain visible after execution instead of being auto-removed, making it easier to inspect state during development."]}),`
`,e.jsx(n.h3,{id:"diagram",children:e.jsx(n.code,{children:"diagram"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inherited:"})," Yes (from ",e.jsx(n.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", renders a visual diagram of the session structure instead of executing the session. Useful for documentation and understanding the session flow."]}),`
`,e.jsx(n.h3,{id:"diagram-transparent",children:e.jsx(n.code,{children:"diagram-transparent"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inherited:"})," Yes (from ",e.jsx(n.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"})," (and ",e.jsx(n.code,{children:"diagram"})," is also ",e.jsx(n.code,{children:"true"}),"), renders the diagram with a transparent background."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.p,{children:[`| Attribute | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"name"}),` | String | — | Session identifier |
| `,e.jsx(n.code,{children:"should-run"})," | Boolean | ",e.jsx(n.code,{children:"true"}),` | Auto-start on DOM connection |
| `,e.jsx(n.code,{children:"debug"})," | Boolean | ",e.jsx(n.code,{children:"false"}),` | Enable debug mode |
| `,e.jsx(n.code,{children:"diagram"})," | Boolean | ",e.jsx(n.code,{children:"false"}),` | Render visual diagram |
| `,e.jsx(n.code,{children:"diagram-transparent"})," | Boolean | ",e.jsx(n.code,{children:"false"})," | Transparent diagram background |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const session = document.querySelector('aa-session');
`})}),`
`,e.jsxs(n.p,{children:[`| Method / Property | Returns | Description |
|---|---|---|
| `,e.jsx(n.code,{children:"getData()"})," | ",e.jsx(n.code,{children:"any"}),` | Retrieve a value from session memory by key |
| `,e.jsx(n.code,{children:"setData(key, value)"})," | ",e.jsx(n.code,{children:"void"}),` | Store a value in session memory |
| `,e.jsx(n.code,{children:"getDataDump()"})," | ",e.jsx(n.code,{children:"object"}),` | Get all session memory data as a plain object |
| `,e.jsx(n.code,{children:"run()"})," | ",e.jsx(n.code,{children:"void"}),` | Programmatically start the session |
| `,e.jsx(n.code,{children:"toJSON()"})," | ",e.jsx(n.code,{children:"object"})," | JSON-serialisable representation of the session tree |"]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[`| Event | When |
|---|---|
| `,e.jsx(n.code,{children:"sessionInputSubmit"}),` | Fired when a child screen submits its collected values |
| `,e.jsx(n.code,{children:"sessionEndEvent"}),` | Fired when the session completes (all sequences finished) |
| `,e.jsx(n.code,{children:"sessionReady"})," | Fired when the session has initialised and is ready |"]})]})}function m(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{m as default};
