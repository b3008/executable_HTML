import{j as e}from"./jsx-runtime-DuvGAStC.js";import{M as t}from"./index-NKiEBVEa.js";import{u as i}from"./index-DJ34rhJJ.js";import"./iframe-BLDPwhxa.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function s(r){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Response Items/Camera/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-camera-attribute-reference",children:[e.jsx(n.code,{children:"<aa-camera>"})," Attribute Reference"]}),`
`,e.jsx(n.p,{children:"A camera capture response item that provides a live video preview with controls to capture a photo, retake, and flip between front and rear cameras. The captured image is stored as a base64 JPEG data URL."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-screen submit-button-text="Next">
  <aa-label>Please take a photo of your meal</aa-label>
  <aa-camera name="meal-photo" facing="environment"></aa-camera>
</aa-screen>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsx(n.p,{children:"The variable name under which the captured photo data URL is stored in session memory."}),`
`,e.jsx(n.h3,{id:"facing",children:e.jsx(n.code,{children:"facing"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"environment"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Allowed values:"})," ",e.jsx(n.code,{children:'"environment"'})," · ",e.jsx(n.code,{children:'"user"'})]}),`
`]}),`
`,e.jsx(n.p,{children:"The initial camera direction to use."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"environment"})})," — Rear-facing camera (default). Best for capturing objects, food, surroundings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"user"})})," — Front-facing camera. Best for selfies."]}),`
`]}),`
`,e.jsx(n.p,{children:"The participant can also toggle between cameras using the Flip button."}),`
`,e.jsx(n.h3,{id:"width",children:e.jsx(n.code,{children:"width"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"640"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The pixel width of the captured image. This sets the canvas resolution used when capturing a frame from the video stream."}),`
`,e.jsx(n.h3,{id:"height",children:e.jsx(n.code,{children:"height"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"480"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The pixel height of the captured image. This sets the canvas resolution used when capturing a frame from the video stream."}),`
`,e.jsx(n.h3,{id:"value",children:e.jsx(n.code,{children:"value"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (read-only)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The captured photo as a base64 JPEG data URL (e.g. ",e.jsx(n.code,{children:"data:image/jpeg;base64,..."}),"). This is ",e.jsx(n.code,{children:"null"})," until the participant captures a photo. Cleared on retake."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Variable name for data storage"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"facing"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:e.jsx(n.code,{children:'"environment"'})}),e.jsx(n.td,{children:"Initial camera direction"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"width"})}),e.jsx(n.td,{children:"Number"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"640"})}),e.jsx(n.td,{children:"Capture resolution width in pixels"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"height"})}),e.jsx(n.td,{children:"Number"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"480"})}),e.jsx(n.td,{children:"Capture resolution height in pixels"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Captured base64 data URL (read-only)"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const cam = document.querySelector('aa-camera');
console.log(cam.value); // base64 data URL or null
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string | null"})}),e.jsx(n.td,{children:"The captured base64 JPEG data URL"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"facing"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["Current camera direction (",e.jsx(n.code,{children:'"environment"'})," or ",e.jsx(n.code,{children:'"user"'}),")"]})]})]})]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Event"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"change"})}),e.jsx(n.td,{children:"Fired after a photo is captured"})]})})]}),`
`,e.jsxs(n.p,{children:["The parent ",e.jsx(n.code,{children:"<aa-screen>"})," collects the final value on submission."]})]})}function m(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,r)})):s(r)}export{m as default};
