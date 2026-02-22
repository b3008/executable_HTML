import{j as e}from"./jsx-runtime-xrKziPlz.js";import{M as d}from"./index-DuX6iVfj.js";import{u as s}from"./index-7wJ7cBts.js";import"./iframe-DEer1LHX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function r(i){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",ol:"ol"},s(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Data & Utility/Function Random/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-function-random-attribute-reference",children:[e.jsx(n.code,{children:"<aa-function-random>"})," Attribute Reference"]}),`
`,e.jsx(n.p,{children:"A declarative, non-rendering utility element that generates a random integer within a specified range and stores it in session memory. The element executes on connection and then removes itself from the DOM. Useful for randomised study designs, counterbalancing, or adding variability to questionnaires."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-function-random name="condition" min="1" max="3"></aa-function-random>

<!-- Dice roll -->
<aa-function-random name="dice" min="1" max="6"></aa-function-random>

<!-- Coin flip -->
<aa-function-random name="coin" min="0" max="1"></aa-function-random>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required:"})," Yes"]}),`
`]}),`
`,e.jsx(n.p,{children:"The key under which the generated random value is stored in session memory."}),`
`,e.jsx(n.h3,{id:"min",children:e.jsx(n.code,{children:"min"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required:"})," Yes"]}),`
`]}),`
`,e.jsx(n.p,{children:"The minimum value (inclusive) of the random range."}),`
`,e.jsx(n.h3,{id:"max",children:e.jsx(n.code,{children:"max"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required:"})," Yes"]}),`
`]}),`
`,e.jsx(n.p,{children:"The maximum value (inclusive) of the random range."}),`
`,e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (read-only)"]}),`
`]}),`
`,e.jsx(n.p,{children:"The generated random value. Available after execution."}),`
`,e.jsx(n.h3,{id:"debug",children:e.jsx(n.code,{children:"debug"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", the element remains visible in the DOM after execution, displaying the generated value for inspection."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"behaviour",children:"Behaviour"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["On connection, the element generates a random integer in the range ",e.jsx(n.code,{children:"[min, max]"})," (both inclusive)."]}),`
`,e.jsxs(n.li,{children:["The result is written to session memory under the key specified by ",e.jsx(n.code,{children:"name"}),"."]}),`
`,e.jsxs(n.li,{children:["An ",e.jsx(n.code,{children:"endEvent"})," is dispatched."]}),`
`,e.jsxs(n.li,{children:["Unless ",e.jsx(n.code,{children:"debug"})," is ",e.jsx(n.code,{children:"true"}),", the element removes itself from the DOM."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Algorithm:"})," Uses ",e.jsx(n.code,{children:"Math.floor(Math.random() * (max - min + 1)) + min"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.p,{children:[`| Attribute | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"name"}),` | String | — | Variable key in session memory |
| `,e.jsx(n.code,{children:"min"}),` | Number | — | Minimum value (inclusive) |
| `,e.jsx(n.code,{children:"max"}),` | Number | — | Maximum value (inclusive) |
| `,e.jsx(n.code,{children:"value"}),` | Number | — | Generated value (read-only) |
| `,e.jsx(n.code,{children:"debug"})," | Boolean | ",e.jsx(n.code,{children:"false"})," | Keep element visible after execution |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[`| Event | When |
|---|---|
| `,e.jsx(n.code,{children:"endEvent"})," | Fired after the random value has been generated and stored |"]})]})}function u(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(r,i)})):r(i)}export{u as default};
