import{j as e}from"./jsx-runtime-DjjJRqnr.js";import{M as t}from"./index-BZwxqCSI.js";import{u as c}from"./index-BHT9JHh8.js";import"./iframe-vNrS5K6G.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function s(n){const i=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},c(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Response Items/Multiple Choice/Attribute Reference"}),`
`,e.jsxs(i.h1,{id:"aa-multiple-choice-attribute-reference",children:[e.jsx(i.code,{children:"<aa-multiple-choice>"})," Attribute Reference"]}),`
`,e.jsxs(i.p,{children:["A single-select response item that renders a group of radio buttons. The participant selects exactly one option from the available choices. Each option is defined by an ",e.jsx(i.code,{children:"<aa-choice-item>"})," child element."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<aa-multiple-choice name="transport" vertical>
  <aa-choice-item value="car">Car</aa-choice-item>
  <aa-choice-item value="bus">Bus</aa-choice-item>
  <aa-choice-item value="bike">Bicycle</aa-choice-item>
  <aa-choice-item value="walk">Walking</aa-choice-item>
</aa-multiple-choice>
`})}),`
`,e.jsx(i.hr,{}),`
`,e.jsxs(i.h2,{id:"aa-multiple-choice-attributes",children:[e.jsx(i.code,{children:"<aa-multiple-choice>"})," Attributes"]}),`
`,e.jsx(i.h3,{id:"name",children:e.jsx(i.code,{children:"name"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(i.p,{children:"The variable name under which the selected value is stored in session memory."}),`
`,e.jsx(i.h3,{id:"horizontal",children:e.jsx(i.code,{children:"horizontal"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Default:"})," ",e.jsx(i.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["When ",e.jsx(i.code,{children:"true"}),", the choice items are laid out in a horizontal row. Mutually exclusive with ",e.jsx(i.code,{children:"vertical"}),"."]}),`
`,e.jsx(i.h3,{id:"vertical",children:e.jsx(i.code,{children:"vertical"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Default:"})," ",e.jsx(i.code,{children:"true"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["When ",e.jsx(i.code,{children:"true"}),", the choice items are laid out in a vertical stack. This is the default layout."]}),`
`,e.jsx(i.h3,{id:"value",children:e.jsx(i.code,{children:"value"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(i.p,{children:"The value of the currently selected choice item. Can be set to pre-select an option, or read to get the current selection."}),`
`,e.jsx(i.hr,{}),`
`,e.jsxs(i.h2,{id:"aa-choice-item-attributes",children:[e.jsx(i.code,{children:"<aa-choice-item>"})," Attributes"]}),`
`,e.jsxs(i.p,{children:["An individual option within a ",e.jsx(i.code,{children:"<aa-multiple-choice>"})," or ",e.jsx(i.code,{children:"<aa-checkboxes>"})," container. The visible label is provided as slot content (text between the tags)."]}),`
`,e.jsx(i.h3,{id:"value-1",children:e.jsx(i.code,{children:"value"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(i.p,{children:"The data value associated with this choice. This is the value stored in session memory when this item is selected — it does not have to match the visible label."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<!-- value="1" is stored; "Strongly disagree" is shown to the participant -->
<aa-choice-item value="1">Strongly disagree</aa-choice-item>
`})}),`
`,e.jsx(i.h3,{id:"checked",children:e.jsx(i.code,{children:"checked"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Default:"})," ",e.jsx(i.code,{children:"false"})]}),`
`]}),`
`,e.jsx(i.p,{children:"Whether this item is currently selected. Can be set to pre-select an option."}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"rendering-behaviour",children:"Rendering Behaviour"}),`
`,e.jsxs(i.p,{children:["Inside ",e.jsx(i.code,{children:"<aa-multiple-choice>"}),", each ",e.jsx(i.code,{children:"<aa-choice-item>"})," renders as a ",e.jsx(i.strong,{children:"radio button"})," — selecting one automatically deselects any previously selected item. Inside ",e.jsx(i.code,{children:"<aa-checkboxes>"}),", the same element renders as a ",e.jsx(i.strong,{children:"checkbox"})," allowing multiple selections."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsx(i.h3,{id:"aa-multiple-choice",children:e.jsx(i.code,{children:"<aa-multiple-choice>"})}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Attribute"}),e.jsx(i.th,{children:"Type"}),e.jsx(i.th,{children:"Default"}),e.jsx(i.th,{children:"Description"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"name"})}),e.jsx(i.td,{children:"String"}),e.jsx(i.td,{children:"—"}),e.jsx(i.td,{children:"Variable name for data storage"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"horizontal"})}),e.jsx(i.td,{children:"Boolean"}),e.jsx(i.td,{children:e.jsx(i.code,{children:"false"})}),e.jsx(i.td,{children:"Horizontal layout"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"vertical"})}),e.jsx(i.td,{children:"Boolean"}),e.jsx(i.td,{children:e.jsx(i.code,{children:"true"})}),e.jsx(i.td,{children:"Vertical layout (default)"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"value"})}),e.jsx(i.td,{children:"String"}),e.jsx(i.td,{children:"—"}),e.jsx(i.td,{children:"Currently selected value"})]})]})]}),`
`,e.jsx(i.h3,{id:"aa-choice-item",children:e.jsx(i.code,{children:"<aa-choice-item>"})}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Attribute"}),e.jsx(i.th,{children:"Type"}),e.jsx(i.th,{children:"Default"}),e.jsx(i.th,{children:"Description"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"value"})}),e.jsx(i.td,{children:"String"}),e.jsx(i.td,{children:"—"}),e.jsx(i.td,{children:"Data value for this option"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"checked"})}),e.jsx(i.td,{children:"Boolean"}),e.jsx(i.td,{children:e.jsx(i.code,{children:"false"})}),e.jsx(i.td,{children:"Whether this option is selected"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const mc = document.querySelector('aa-multiple-choice');
console.log(mc.value); // value of the selected item
`})}),`
`,e.jsx(i.h3,{id:"events",children:"Events"}),`
`,e.jsxs(i.p,{children:["Choice items dispatch ",e.jsx(i.code,{children:"change"})," events when clicked. The parent ",e.jsx(i.code,{children:"<aa-screen>"})," collects the final value on submission."]})]})}function m(n={}){const{wrapper:i}=Object.assign({},c(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{m as default};
