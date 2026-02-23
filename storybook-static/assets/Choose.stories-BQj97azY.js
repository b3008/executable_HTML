import{b as r}from"./lit-element-BrtkDOYA.js";import{o as n}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";const a=`<aa-session name="choose-demo" debug>
  <aa-variable name="score" value="75"></aa-variable>
  <aa-choose name="grade" debug>
    <aa-when test="score >= 90">
      <aa-label>Grade: A — Excellent!</aa-label>
    </aa-when>
    <aa-when test="score >= 70">
      <aa-label>Grade: B — Good job!</aa-label>
    </aa-when>
    <aa-otherwise>
      <aa-label>Grade: C — Keep trying!</aa-label>
    </aa-otherwise>
  </aa-choose>
</aa-session>`,m={title:"Control Flow/Choose",tags:["autodocs"],render:()=>r`${n(a)}`,parameters:{docs:{description:{component:["Conditional branching element. Evaluates `<aa-when>` test expressions against session memory and instantiates the first matching branch, or `<aa-otherwise>` if none match.","","### DOM API","","```js","const choose = document.querySelector('aa-choose');","```","","| Method | Returns | Description |","|---|---|---|","| `choose.evaluate(element)` | `any` | Evaluates the `test` attribute of the given `<aa-when>` element |","| `choose.evaluateTestExpression(expr)` | `any` | Evaluates a test expression string against session memory |","| `choose.replaceExpressionIdentifiersWithValues(expr)` | `string` | Substitutes variable names in an expression with their values from memory |","","### Child Elements","","| Element | Attribute | Description |","|---|---|---|","| `<aa-when>` | `test` | JavaScript expression evaluated against session memory (e.g., `score >= 90`) |","| `<aa-otherwise>` | — | Fallback branch if no `<aa-when>` matches |"].join(`
`)},source:{code:a,language:"html"}}}},e={};var s,t,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,m as default};
