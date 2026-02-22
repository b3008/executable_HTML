import{j as e}from"./jsx-runtime-DjjJRqnr.js";import{M as d}from"./index-BZwxqCSI.js";import{u as i}from"./index-BHT9JHh8.js";import"./iframe-vNrS5K6G.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function r(s){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Response Items/Likert Scale/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-likert-scale-attribute-reference",children:[e.jsx(n.code,{children:"<aa-likert-scale>"})," Attribute Reference"]}),`
`,e.jsx(n.p,{children:"A rating-scale response item that renders as a horizontal row of radio buttons. Commonly used for agreement scales, frequency scales, or any ordinal measurement. Supports configurable endpoint and midpoint labels, and optional numeric indicators."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-likert-scale
  name="agreement"
  items="7"
  start-label="Strongly disagree"
  middle-label="Neutral"
  end-label="Strongly agree">
</aa-likert-scale>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"The variable name under which the selected value is stored in session memory."}),`
`,e.jsx(n.h3,{id:"items",children:e.jsx(n.code,{children:"items"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String (parsed as integer)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The number of points on the scale. For example, ",e.jsx(n.code,{children:'items="7"'})," creates a 7-point scale. The numeric values assigned to each point start from ",e.jsx(n.code,{children:"start-item"})," and increment by 1."]}),`
`,e.jsx(n.h3,{id:"start-item",children:e.jsx(n.code,{children:"start-item"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"1"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The numeric value assigned to the first (leftmost) radio button. With the default of ",e.jsx(n.code,{children:"1"})," and ",e.jsx(n.code,{children:'items="5"'}),", the values are 1, 2, 3, 4, 5. Setting ",e.jsx(n.code,{children:'start-item="0"'})," produces 0, 1, 2, 3, 4."]}),`
`,e.jsx(n.h3,{id:"start-label",children:e.jsx(n.code,{children:"start-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})," (empty)"]}),`
`]}),`
`,e.jsx(n.p,{children:"Text displayed below or near the first (leftmost) radio button. Describes the low end of the scale."}),`
`,e.jsx(n.h3,{id:"middle-label",children:e.jsx(n.code,{children:"middle-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})," (empty)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Text displayed below or near the middle radio button. Only meaningful when ",e.jsx(n.code,{children:"items"})," is an odd number; with even numbers the label is placed between the two centre items."]}),`
`,e.jsx(n.h3,{id:"end-label",children:e.jsx(n.code,{children:"end-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})," (empty)"]}),`
`]}),`
`,e.jsx(n.p,{children:"Text displayed below or near the last (rightmost) radio button. Describes the high end of the scale."}),`
`,e.jsx(n.h3,{id:"show-radio-numbers",children:e.jsx(n.code,{children:"show-radio-numbers"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Whether to display the numeric value next to each radio button. When ",e.jsx(n.code,{children:"true"}),", numbers appear at the position specified by ",e.jsx(n.code,{children:"number-position"}),"."]}),`
`,e.jsx(n.h3,{id:"number-position",children:e.jsx(n.code,{children:"number-position"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"right"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Allowed values:"})," ",e.jsx(n.code,{children:'"right"'})," · ",e.jsx(n.code,{children:'"left"'})," · ",e.jsx(n.code,{children:'"top"'})," · ",e.jsx(n.code,{children:'"bottom"'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Where the numeric label appears relative to each radio button."}),`
`,e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (read-only)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The currently selected numeric value. ",e.jsx(n.code,{children:"undefined"})," if no selection has been made."]}),`
`,e.jsx(n.h3,{id:"debug",children:e.jsx(n.code,{children:"debug"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", enables debug output."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Variable name for data storage"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"items"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Number of scale points"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"start-item"})}),e.jsx(n.td,{children:"Number"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1"})}),e.jsx(n.td,{children:"First point's numeric value"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"start-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Label at the low end"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"middle-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Label at the midpoint"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"end-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Label at the high end"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"show-radio-numbers"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})}),e.jsx(n.td,{children:"Show numeric labels"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"number-position"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'"right"'})}),e.jsx(n.td,{children:"Position of numeric labels"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:"Number"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Selected value (read-only)"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const ls = document.querySelector('aa-likert-scale');
console.log(ls.value); // selected numeric value
`})}),`
`,e.jsx(n.h3,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:["The label arrangement is responsive — a ",e.jsx(n.code,{children:"ResizeObserver"})," dynamically repositions the start/middle/end labels when the element is resized, ensuring they remain properly aligned with their corresponding radio buttons."]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:["Radio buttons dispatch ",e.jsx(n.code,{children:"sl-change"})," events when clicked. The parent ",e.jsx(n.code,{children:"<aa-screen>"})," collects the final value on submission."]})]})}function m(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{m as default};
