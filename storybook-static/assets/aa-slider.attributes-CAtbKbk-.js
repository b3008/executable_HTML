import{j as e}from"./jsx-runtime-xrKziPlz.js";import{M as l}from"./index-DuX6iVfj.js";import{u as r}from"./index-7wJ7cBts.js";import"./iframe-DEer1LHX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function i(s){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Response Items/Slider/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-slider-attribute-reference",children:[e.jsx(n.code,{children:"<aa-slider>"})," Attribute Reference"]}),`
`,e.jsxs(n.p,{children:["A numeric input element that renders as a horizontal slider (range input). The participant drags the thumb to select a value between ",e.jsx(n.code,{children:"min"})," and ",e.jsx(n.code,{children:"max"}),". Optional labels can be displayed at each end of the slider."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-slider
  name="stress"
  min="0"
  max="100"
  min-label="No stress"
  max-label="Extreme stress">
</aa-slider>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"The variable name under which the selected value is stored in session memory. This is the key used when the parent screen collects values."}),`
`,e.jsx(n.h3,{id:"min",children:e.jsx(n.code,{children:"min"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"The minimum value of the slider range."}),`
`,e.jsx(n.h3,{id:"max",children:e.jsx(n.code,{children:"max"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"The maximum value of the slider range."}),`
`,e.jsx(n.h3,{id:"min-label",children:e.jsx(n.code,{children:"min-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:'Text displayed at the left (minimum) end of the slider. Use this to give semantic meaning to the low end of the scale (e.g. "Not at all", "0", "Low").'}),`
`,e.jsx(n.h3,{id:"max-label",children:e.jsx(n.code,{children:"max-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:'Text displayed at the right (maximum) end of the slider. Use this to give semantic meaning to the high end of the scale (e.g. "Extremely", "100", "High").'}),`
`,e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (read-only)"]}),`
`]}),`
`,e.jsx(n.p,{children:"The currently selected value. Updated as the participant moves the slider thumb. Read this property to get the current selection."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.p,{children:[`| Attribute | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"name"}),` | String | — | Variable name for data storage |
| `,e.jsx(n.code,{children:"min"}),` | Number | — | Minimum slider value |
| `,e.jsx(n.code,{children:"max"}),` | Number | — | Maximum slider value |
| `,e.jsx(n.code,{children:"min-label"}),` | String | — | Label at low end |
| `,e.jsx(n.code,{children:"max-label"}),` | String | — | Label at high end |
| `,e.jsx(n.code,{children:"value"})," | Number | — | Current selected value (read-only) |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const slider = document.querySelector('aa-slider');
console.log(slider.value); // current numeric value
`})}),`
`,e.jsxs(n.p,{children:[`| Property | Type | Description |
|---|---|---|
| `,e.jsx(n.code,{children:"value"})," | ",e.jsx(n.code,{children:"number"}),` | The current slider value |
| `,e.jsx(n.code,{children:"min"})," | ",e.jsx(n.code,{children:"number"}),` | Minimum value |
| `,e.jsx(n.code,{children:"max"})," | ",e.jsx(n.code,{children:"number"}),` | Maximum value |
| `,e.jsx(n.code,{children:"minLabel"})," | ",e.jsx(n.code,{children:"string"}),` | Left-side label text |
| `,e.jsx(n.code,{children:"maxLabel"})," | ",e.jsx(n.code,{children:"string"})," | Right-side label text |"]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:["The slider dispatches ",e.jsx(n.code,{children:"change"})," events as the participant adjusts the value. The parent ",e.jsx(n.code,{children:"<aa-screen>"})," collects the final value on submission."]})]})}function u(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{u as default};
