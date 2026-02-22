import{j as e}from"./jsx-runtime-xrKziPlz.js";import{M as r}from"./index-DuX6iVfj.js";import{u as s}from"./index-7wJ7cBts.js";import"./iframe-DEer1LHX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function i(c){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a"},s(),c.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Response Items/Checkboxes/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-checkboxes-attribute-reference",children:[e.jsx(n.code,{children:"<aa-checkboxes>"})," Attribute Reference"]}),`
`,e.jsxs(n.p,{children:["A multi-select response item that renders a group of checkboxes. The participant can select zero or more options. Each option is defined by an ",e.jsx(n.code,{children:"<aa-choice-item>"})," child element (the same element used in ",e.jsx(n.code,{children:"<aa-multiple-choice>"}),", but rendered here as checkboxes instead of radio buttons)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-checkboxes name="symptoms" vertical>
  <aa-choice-item value="headache">Headache</aa-choice-item>
  <aa-choice-item value="fatigue">Fatigue</aa-choice-item>
  <aa-choice-item value="nausea">Nausea</aa-choice-item>
  <aa-choice-item value="none">None of the above</aa-choice-item>
</aa-checkboxes>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The variable name under which the selected values are stored in session memory. The stored value is an ",e.jsx(n.strong,{children:"array"})," of the ",e.jsx(n.code,{children:"value"})," attributes of all checked items."]}),`
`,e.jsx(n.h3,{id:"horizontal",children:e.jsx(n.code,{children:"horizontal"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", the checkbox items are laid out in a horizontal row."]}),`
`,e.jsx(n.h3,{id:"vertical",children:e.jsx(n.code,{children:"vertical"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", the checkbox items are laid out in a vertical stack. This is the default layout."]}),`
`,e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String (array)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (read-only)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The currently selected values as an array. Each entry is the ",e.jsx(n.code,{children:"value"})," attribute of a checked ",e.jsx(n.code,{children:"<aa-choice-item>"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"child-element-aa-choice-item",children:["Child Element: ",e.jsx(n.code,{children:"<aa-choice-item>"})]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsxs(n.a,{href:"?path=/docs/response-items-multiple-choice-attribute-reference--docs",children:[e.jsx(n.code,{children:"<aa-multiple-choice>"})," Attribute Reference"]})," for full ",e.jsx(n.code,{children:"<aa-choice-item>"})," documentation. Inside ",e.jsx(n.code,{children:"<aa-checkboxes>"}),", the items render as checkboxes (allowing multiple selections) rather than radio buttons."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.p,{children:[`| Attribute | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"name"}),` | String | — | Variable name for data storage |
| `,e.jsx(n.code,{children:"horizontal"})," | Boolean | ",e.jsx(n.code,{children:"false"}),` | Horizontal layout |
| `,e.jsx(n.code,{children:"vertical"})," | Boolean | ",e.jsx(n.code,{children:"true"}),` | Vertical layout (default) |
| `,e.jsx(n.code,{children:"value"})," | Array | — | Array of checked item values (read-only) |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const cb = document.querySelector('aa-checkboxes');
console.log(cb.value); // e.g. ["headache", "fatigue"]
`})}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:["Choice items dispatch ",e.jsx(n.code,{children:"change"})," events when toggled. The parent ",e.jsx(n.code,{children:"<aa-screen>"})," collects the final array of values on submission."]})]})}function m(c={}){const{wrapper:n}=Object.assign({},s(),c.components);return n?e.jsx(n,Object.assign({},c,{children:e.jsx(i,c)})):i(c)}export{m as default};
