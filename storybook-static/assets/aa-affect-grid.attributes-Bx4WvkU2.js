import{j as e}from"./jsx-runtime-DuvGAStC.js";import{M as i}from"./index-NKiEBVEa.js";import{u as s}from"./index-DJ34rhJJ.js";import"./iframe-BLDPwhxa.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function r(l){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},s(),l.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Response Items/Affect Grid/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-affect-grid-attribute-reference",children:[e.jsx(n.code,{children:"<aa-affect-grid>"})," Attribute Reference"]}),`
`,e.jsxs(n.p,{children:["A two-dimensional grid response item for measuring affect (emotional state) along two axes. Based on the Russell Affect Grid, it presents a square grid where the participant clicks a cell to indicate their current position in a 2D emotion space. Returns ",e.jsx(n.code,{children:"[x, y]"})," coordinates."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-affect-grid
  name="affect"
  rows="9"
  columns="9"
  left-label="Unpleasant"
  right-label="Pleasant"
  top-label="High arousal"
  bottom-label="Low arousal"
  center-label="Neutral"
  top-left-label="Distress"
  top-right-label="Excitement"
  bottom-left-label="Depression"
  bottom-right-label="Relaxation">
</aa-affect-grid>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"grid-dimensions",children:"Grid Dimensions"}),`
`,e.jsx(n.h3,{id:"rows",children:e.jsx(n.code,{children:"rows"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"11"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The number of rows in the grid. Determines the vertical resolution."}),`
`,e.jsx(n.h3,{id:"columns",children:e.jsx(n.code,{children:"columns"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"11"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The number of columns in the grid. Determines the horizontal resolution."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"axis-labels",children:"Axis Labels"}),`
`,e.jsx(n.p,{children:"These labels describe the meaning of each axis and its endpoints."}),`
`,e.jsx(n.h3,{id:"left-label",children:e.jsx(n.code,{children:"left-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Label on the left side of the grid (negative x-axis). Typically describes the unpleasant end of the valence axis."}),`
`,e.jsx(n.h3,{id:"right-label",children:e.jsx(n.code,{children:"right-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Label on the right side of the grid (positive x-axis). Typically describes the pleasant end of the valence axis."}),`
`,e.jsx(n.h3,{id:"top-label",children:e.jsx(n.code,{children:"top-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Label at the top of the grid (positive y-axis). Typically describes high arousal."}),`
`,e.jsx(n.h3,{id:"bottom-label",children:e.jsx(n.code,{children:"bottom-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Label at the bottom of the grid (negative y-axis). Typically describes low arousal."}),`
`,e.jsx(n.h3,{id:"center-label",children:e.jsx(n.code,{children:"center-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:'Label at the centre of the grid. Typically "Neutral" or "Average".'}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quadrant-labels",children:"Quadrant Labels"}),`
`,e.jsx(n.p,{children:"These labels describe the four corners of the grid, representing the combinations of the two axes."}),`
`,e.jsx(n.h3,{id:"top-left-label",children:e.jsx(n.code,{children:"top-left-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:'Label at the top-left corner (high arousal, unpleasant). Typically "Distress" or "Tense".'}),`
`,e.jsx(n.h3,{id:"top-right-label",children:e.jsx(n.code,{children:"top-right-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:'Label at the top-right corner (high arousal, pleasant). Typically "Excitement" or "Alert".'}),`
`,e.jsx(n.h3,{id:"bottom-left-label",children:e.jsx(n.code,{children:"bottom-left-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:'Label at the bottom-left corner (low arousal, unpleasant). Typically "Depression" or "Sad".'}),`
`,e.jsx(n.h3,{id:"bottom-right-label",children:e.jsx(n.code,{children:"bottom-right-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:'Label at the bottom-right corner (low arousal, pleasant). Typically "Relaxation" or "Calm".'}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"side-labels",children:"Side Labels"}),`
`,e.jsx(n.p,{children:"Additional labels positioned along the left and right edges, between the corner and centre."}),`
`,e.jsx(n.h3,{id:"left-top-label",children:e.jsx(n.code,{children:"left-top-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Label on the left side, upper half."}),`
`,e.jsx(n.h3,{id:"left-bottom-label",children:e.jsx(n.code,{children:"left-bottom-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Label on the left side, lower half."}),`
`,e.jsx(n.h3,{id:"right-top-label",children:e.jsx(n.code,{children:"right-top-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Label on the right side, upper half."}),`
`,e.jsx(n.h3,{id:"right-bottom-label",children:e.jsx(n.code,{children:"right-bottom-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'""'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Label on the right side, lower half."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"other-attributes",children:"Other Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"The variable name under which the selected coordinates are stored in session memory."}),`
`,e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Array ",e.jsx(n.code,{children:"[x, y]"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (read-only)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The currently selected grid coordinates as a two-element array. ",e.jsx(n.code,{children:"x"})," is the column (0-indexed from left), ",e.jsx(n.code,{children:"y"})," is the row (0-indexed from top)."]}),`
`,e.jsx(n.h3,{id:"required",children:e.jsx(n.code,{children:"required"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"true"}),", the participant must select a cell before the parent screen can be submitted."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Variable name for data storage"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"rows"})}),e.jsx(n.td,{children:"Number"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"11"})}),e.jsx(n.td,{children:"Grid row count"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"columns"})}),e.jsx(n.td,{children:"Number"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"11"})}),e.jsx(n.td,{children:"Grid column count"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"top-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Top axis label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"bottom-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Bottom axis label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"left-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Left axis label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"right-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Right axis label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"center-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Centre label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"top-left-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Top-left quadrant label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"top-right-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Top-right quadrant label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"bottom-left-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Bottom-left quadrant label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"bottom-right-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Bottom-right quadrant label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"left-top-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Left side upper label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"left-bottom-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Left side lower label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"right-top-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Right side upper label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"right-bottom-label"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'""'})}),e.jsx(n.td,{children:"Right side lower label"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:"Array"}),e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:["Selected ",e.jsx(n.code,{children:"[x, y]"})," coordinates (read-only)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"required"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Require selection before submit"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const grid = document.querySelector('aa-affect-grid');
console.log(grid.value); // e.g. [5, 3]
console.log(grid.x);     // column index
console.log(grid.y);     // row index
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"[number, number]"})}),e.jsxs(n.td,{children:["Selected ",e.jsx(n.code,{children:"[x, y]"})," coordinates"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"x"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"Selected column index"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"y"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"Selected row index"})]})]})]}),`
`,e.jsx(n.h3,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:["The grid maintains a square aspect ratio using a ",e.jsx(n.code,{children:"ResizeObserver"}),". It automatically adjusts to fit its container while keeping cells square."]})]})}function g(l={}){const{wrapper:n}=Object.assign({},s(),l.components);return n?e.jsx(n,Object.assign({},l,{children:e.jsx(r,l)})):r(l)}export{g as default};
