import{j as e}from"./jsx-runtime-xrKziPlz.js";import{M as r}from"./index-DuX6iVfj.js";import{u as i}from"./index-7wJ7cBts.js";import"./iframe-DEer1LHX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function t(s){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"UI/Screen/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-screen-attribute-reference",children:[e.jsx(n.code,{children:"<aa-screen>"})," Attribute Reference"]}),`
`,e.jsx(n.p,{children:"A form container that represents a single page or step in a questionnaire. It renders its child response items (sliders, multiple-choice, text inputs, etc.) together with a submit button. On submission, it collects the values from all child elements and dispatches them as an event. The screen then auto-hides and signals completion to its parent sequence."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-screen submit-button-text="Next">
  <aa-label>How stressed do you feel right now?</aa-label>
  <aa-likert-scale name="stress" items="7"
    start-label="Not at all" end-label="Extremely">
  </aa-likert-scale>
</aa-screen>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"submit-button-text",children:e.jsx(n.code,{children:"submit-button-text"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"submit"'})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The text displayed on the submit button. Common values include ",e.jsx(n.code,{children:'"Next"'}),", ",e.jsx(n.code,{children:'"Done"'}),", ",e.jsx(n.code,{children:'"Submit"'}),", or ",e.jsx(n.code,{children:'"Continue"'}),"."]}),`
`,e.jsx(n.h3,{id:"submit-button-hidden",children:e.jsx(n.code,{children:"submit-button-hidden"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", hides the submit button entirely. Useful for screens that advance automatically (e.g. instruction-only screens or screens with an external trigger)."]}),`
`,e.jsx(n.h3,{id:"expect-wait",children:e.jsx(n.code,{children:"expect-wait"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (internal)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Internal property indicating whether the screen should wait for user interaction before completing. When ",e.jsx(n.code,{children:"true"}),", the screen waits for the submit button to be clicked. Not typically set by authors."]}),`
`,e.jsx(n.h3,{id:"autohide",children:e.jsx(n.code,{children:"autohide"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (internal)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Controls whether the screen automatically hides itself after submission. When ",e.jsx(n.code,{children:"true"})," (the default), the screen's content is removed from view after the user submits. Not typically set by authors."]}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inherited:"})," Yes (from ",e.jsx(n.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:"Optional identifier for the screen."}),`
`,e.jsxs(n.h3,{id:"diagram--diagram-transparent",children:[e.jsx(n.code,{children:"diagram"})," / ",e.jsx(n.code,{children:"diagram-transparent"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inherited:"})," Yes (from ",e.jsx(n.code,{children:"AABaseElement"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.code,{children:"<aa-session>"})," documentation for details."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.p,{children:[`| Attribute | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"submit-button-text"})," | String | ",e.jsx(n.code,{children:'"submit"'}),` | Button label text |
| `,e.jsx(n.code,{children:"submit-button-hidden"})," | Boolean | ",e.jsx(n.code,{children:"false"}),` | Hide the submit button |
| `,e.jsx(n.code,{children:"expect-wait"})," | Boolean | ",e.jsx(n.code,{children:"true"}),` | Internal: wait for interaction |
| `,e.jsx(n.code,{children:"autohide"})," | Boolean | ",e.jsx(n.code,{children:"true"}),` | Internal: auto-hide after submit |
| `,e.jsx(n.code,{children:"name"})," | String | — | Screen identifier |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const screen = document.querySelector('aa-screen');
`})}),`
`,e.jsxs(n.p,{children:[`| Method / Property | Returns | Description |
|---|---|---|
| `,e.jsx(n.code,{children:"collectValues()"})," | ",e.jsx(n.code,{children:"object"}),` | Gather values from all child response items |
| `,e.jsx(n.code,{children:"submitButtonClick()"})," | ",e.jsx(n.code,{children:"void"}),` | Programmatically trigger a submit |
| `,e.jsx(n.code,{children:"automate()"})," | ",e.jsx(n.code,{children:"void"}),` | Auto-fill and submit for testing |
| `,e.jsx(n.code,{children:"hide()"})," | ",e.jsx(n.code,{children:"void"}),` | Hide the screen |
| `,e.jsx(n.code,{children:"show()"})," | ",e.jsx(n.code,{children:"void"})," | Show the screen |"]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[`| Event | When |
|---|---|
| `,e.jsx(n.code,{children:"valueSubmit"}),` | Fired with collected child values when the submit button is clicked |
| `,e.jsx(n.code,{children:"endEvent"})," | Fired after submission to signal completion to the parent sequence |"]}),`
`,e.jsx(n.h3,{id:"validation",children:"Validation"}),`
`,e.jsxs(n.p,{children:["The screen validates required fields before submission. If a child element has the ",e.jsx(n.code,{children:"required"})," attribute set and no value has been provided, submission is blocked and the user is prompted to complete the field."]})]})}function m(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t(s)}export{m as default};
