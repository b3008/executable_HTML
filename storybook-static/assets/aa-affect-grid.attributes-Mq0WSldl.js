import{j as e}from"./jsx-runtime-xrKziPlz.js";import{M as s}from"./index-DuX6iVfj.js";import{u as i}from"./index-7wJ7cBts.js";import"./iframe-DEer1LHX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function r(l){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong"},i(),l.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Response Items/Affect Grid/Attribute Reference"}),`
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
`,e.jsxs(n.p,{children:[`| Attribute | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"name"}),` | String | — | Variable name for data storage |
| `,e.jsx(n.code,{children:"rows"})," | Number | ",e.jsx(n.code,{children:"11"}),` | Grid row count |
| `,e.jsx(n.code,{children:"columns"})," | Number | ",e.jsx(n.code,{children:"11"}),` | Grid column count |
| `,e.jsx(n.code,{children:"top-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Top axis label |
| `,e.jsx(n.code,{children:"bottom-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Bottom axis label |
| `,e.jsx(n.code,{children:"left-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Left axis label |
| `,e.jsx(n.code,{children:"right-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Right axis label |
| `,e.jsx(n.code,{children:"center-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Centre label |
| `,e.jsx(n.code,{children:"top-left-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Top-left quadrant label |
| `,e.jsx(n.code,{children:"top-right-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Top-right quadrant label |
| `,e.jsx(n.code,{children:"bottom-left-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Bottom-left quadrant label |
| `,e.jsx(n.code,{children:"bottom-right-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Bottom-right quadrant label |
| `,e.jsx(n.code,{children:"left-top-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Left side upper label |
| `,e.jsx(n.code,{children:"left-bottom-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Left side lower label |
| `,e.jsx(n.code,{children:"right-top-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Right side upper label |
| `,e.jsx(n.code,{children:"right-bottom-label"})," | String | ",e.jsx(n.code,{children:'""'}),` | Right side lower label |
| `,e.jsx(n.code,{children:"value"})," | Array | — | Selected ",e.jsx(n.code,{children:"[x, y]"}),` coordinates (read-only) |
| `,e.jsx(n.code,{children:"required"})," | Boolean | ",e.jsx(n.code,{children:"false"})," | Require selection before submit |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const grid = document.querySelector('aa-affect-grid');
console.log(grid.value); // e.g. [5, 3]
console.log(grid.x);     // column index
console.log(grid.y);     // row index
`})}),`
`,e.jsxs(n.p,{children:[`| Property | Type | Description |
|---|---|---|
| `,e.jsx(n.code,{children:"value"})," | ",e.jsx(n.code,{children:"[number, number]"})," | Selected ",e.jsx(n.code,{children:"[x, y]"}),` coordinates |
| `,e.jsx(n.code,{children:"x"})," | ",e.jsx(n.code,{children:"number"}),` | Selected column index |
| `,e.jsx(n.code,{children:"y"})," | ",e.jsx(n.code,{children:"number"})," | Selected row index |"]}),`
`,e.jsx(n.h3,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:["The grid maintains a square aspect ratio using a ",e.jsx(n.code,{children:"ResizeObserver"}),". It automatically adjusts to fit its container while keeping cells square."]})]})}function b(l={}){const{wrapper:n}=Object.assign({},i(),l.components);return n?e.jsx(n,Object.assign({},l,{children:e.jsx(r,l)})):r(l)}export{b as default};
