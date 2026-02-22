import{b as u}from"./lit-element-BrtkDOYA.js";const c={title:"Data & Utility/Variable",tags:["autodocs"],parameters:{docs:{description:{component:["Stores a named value in session memory. Removes itself from the DOM after setting the value (unless `debug` is set).","","### DOM API","","```js","const variable = document.querySelector('aa-variable');","```","","| Method | Returns | Description |","|---|---|---|","| `variable.evaluateValueExpression(expr)` | `any` | Evaluates a value expression (supports arithmetic with variable references) |","| `variable.replaceExpressionIdentifiersWithValues(expr)` | `string` | Substitutes known variable names in an expression with their values from memory |","","### Notes","","- String values should be in single quotes: `value=\"'hello'\"`",'- Unquoted values are treated as references to other variables: `value="otherVar"`',"- The element dispatches `endEvent` and removes itself from the DOM after storing its value"].join(`
`)}}},argTypes:{name:{control:"text"},value:{control:"text"}},render:r=>u`
    <aa-variable
      name="${r.name}"
      value="${r.value}"
      debug
    ></aa-variable>
  `},e={args:{name:"greeting",value:"'Hello, World!'"}},a={args:{name:"score",value:"42"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: "greeting",
    value: "'Hello, World!'"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var o,l,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: "score",
    value: "42"
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const v=["StringValue","NumericValue"];export{a as NumericValue,e as StringValue,v as __namedExportsOrder,c as default};
