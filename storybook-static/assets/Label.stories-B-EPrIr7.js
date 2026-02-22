import{b as p}from"./lit-element-BrtkDOYA.js";const h={title:"UI/Label",tags:["autodocs"],parameters:{docs:{description:{component:["A styled text label for displaying questions or instructions. Uses a `<slot>` to render its content.","","### DOM API","","This element is a pure display component with no custom methods or events. Set content via innerHTML:","","```js","const label = document.querySelector('aa-label');","label.innerHTML = 'New question text';","```"].join(`
`)}}},argTypes:{text:{control:"text"}},render:m=>p`<aa-label>${m.text}</aa-label>`},e={args:{text:"Please answer the following question:"}},t={args:{text:"Rate your mood"}},o={args:{text:"On a scale from 1 to 10, how satisfied are you with the overall quality of the service you received during your most recent visit?"}};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    text: "Please answer the following question:"
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Rate your mood"
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,u,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: "On a scale from 1 to 10, how satisfied are you with the overall quality of the service you received during your most recent visit?"
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const y=["Default","Short","Long"];export{e as Default,o as Long,t as Short,y as __namedExportsOrder,h as default};
