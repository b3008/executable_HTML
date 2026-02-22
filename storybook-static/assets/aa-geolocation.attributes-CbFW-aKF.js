import{j as e}from"./jsx-runtime-xrKziPlz.js";import{M as r}from"./index-DuX6iVfj.js";import{u as t}from"./index-7wJ7cBts.js";import"./iframe-DEer1LHX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function i(s){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",ol:"ol"},t(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data & Utility/Geolocation/Attribute Reference"}),`
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
`,e.jsxs(n.p,{children:[`| Attribute | Type | Default | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"name"}),` | String | — | Variable key in session memory |
| `,e.jsx(n.code,{children:"get-on-request"})," | Boolean | ",e.jsx(n.code,{children:"false"}),` | Defer location fetch until requested |
| `,e.jsx(n.code,{children:"ready"})," | Boolean | ",e.jsx(n.code,{children:"false"})," | Whether location has been retrieved (read-only) |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const geo = document.querySelector('aa-geolocation');
const pos = await geo.value; // Promise<{lat, lon, timestamp}>
`})}),`
`,e.jsxs(n.p,{children:[`| Property / Method | Returns | Description |
|---|---|---|
| `,e.jsx(n.code,{children:"value"})," | ",e.jsx(n.code,{children:"Promise<{lat, lon, timestamp}>"}),` | Resolves with the location data |
| `,e.jsx(n.code,{children:"ready"})," | ",e.jsx(n.code,{children:"boolean"})," | Whether location has been fetched |"]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[`| Event | When |
|---|---|
| `,e.jsx(n.code,{children:"valueSubmit"})," | Fired when the location has been successfully retrieved |"]}),`
`,e.jsx(n.h3,{id:"privacy",children:"Privacy"}),`
`,e.jsx(n.p,{children:"This element accesses the browser Geolocation API, which requires explicit user consent. The location data is stored only in the local session memory and is not transmitted unless the enclosing application explicitly sends it."})]})}function m(s={}){const{wrapper:n}=Object.assign({},t(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{m as default};
