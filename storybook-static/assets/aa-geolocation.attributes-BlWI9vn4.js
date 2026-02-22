import{j as e}from"./jsx-runtime-DjjJRqnr.js";import{M as r}from"./index-BZwxqCSI.js";import{u as i}from"./index-BHT9JHh8.js";import"./iframe-vNrS5K6G.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function t(s){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",ol:"ol",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data & Utility/Geolocation/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-geolocation-attribute-reference",children:[e.jsx(n.code,{children:"<aa-geolocation>"})," Attribute Reference"]}),`
`,e.jsx(n.p,{children:"A non-rendering utility element that captures the participant's geographic location using the browser's Geolocation API. It stores the result (latitude, longitude, timestamp) in session memory. Requires user permission to access location."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-geolocation name="location"></aa-geolocation>

<!-- Or wait until explicitly requested -->
<aa-geolocation name="location" get-on-request></aa-geolocation>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.h3,{id:"name",children:e.jsx(n.code,{children:"name"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required:"})," Yes"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The key under which the location data is stored in session memory. The stored value is an object with the shape ",e.jsx(n.code,{children:"{ lat: number, lon: number, timestamp: number }"}),"."]}),`
`,e.jsx(n.h3,{id:"get-on-request",children:e.jsx(n.code,{children:"get-on-request"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Controls when the location is fetched:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"false"})})," (default) — The location is requested immediately when the element connects to the DOM. The result is stored and a ",e.jsx(n.code,{children:"valueSubmit"})," event is dispatched as soon as the browser returns the position."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"true"})})," — The element does not fetch location on connection. Instead, it waits until the value is explicitly requested by reading the ",e.jsx(n.code,{children:"value"})," property or calling ",e.jsx(n.code,{children:"_getLocation()"})," programmatically."]}),`
`]}),`
`,e.jsx(n.h3,{id:"ready",children:e.jsx(n.code,{children:"ready"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Boolean"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-defined:"})," No (read-only)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Indicates whether the location has been successfully retrieved. Becomes ",e.jsx(n.code,{children:"true"})," after the Geolocation API returns a position."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"behaviour",children:"Behaviour"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["On connection (if ",e.jsx(n.code,{children:"get-on-request"})," is ",e.jsx(n.code,{children:"false"}),"), the element calls ",e.jsx(n.code,{children:"navigator.geolocation.getCurrentPosition()"}),"."]}),`
`,e.jsx(n.li,{children:"The browser prompts the user for permission if not already granted."}),`
`,e.jsxs(n.li,{children:["On success, the element stores ",e.jsx(n.code,{children:"{ lat, lon, timestamp }"})," in session memory and dispatches a ",e.jsx(n.code,{children:"valueSubmit"})," event."]}),`
`,e.jsx(n.li,{children:"On failure (denied permission, timeout, etc.), the promise rejects and no value is stored."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:"String"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Variable key in session memory"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"get-on-request"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Defer location fetch until requested"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ready"})}),e.jsx(n.td,{children:"Boolean"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Whether location has been retrieved (read-only)"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const geo = document.querySelector('aa-geolocation');
const pos = await geo.value; // Promise<{lat, lon, timestamp}>
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property / Method"}),e.jsx(n.th,{children:"Returns"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Promise<{lat, lon, timestamp}>"})}),e.jsx(n.td,{children:"Resolves with the location data"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ready"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Whether location has been fetched"})]})]})]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Event"}),e.jsx(n.th,{children:"When"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"valueSubmit"})}),e.jsx(n.td,{children:"Fired when the location has been successfully retrieved"})]})})]}),`
`,e.jsx(n.h3,{id:"privacy",children:"Privacy"}),`
`,e.jsx(n.p,{children:"This element accesses the browser Geolocation API, which requires explicit user consent. The location data is stored only in the local session memory and is not transmitted unless the enclosing application explicitly sends it."})]})}function m(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t(s)}export{m as default};
