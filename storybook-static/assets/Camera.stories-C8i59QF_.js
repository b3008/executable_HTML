import{b as m}from"./lit-element-BrtkDOYA.js";const p={title:"Response Items/Camera",tags:["autodocs"],parameters:{docs:{description:{component:["A camera capture element that provides a live video preview with capture, retake, and flip controls.","Participants can take a photo which is stored as a base64 JPEG data URL.","","### DOM API","","```js","const cam = document.querySelector('aa-camera');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `cam.value` | `string \\| null` | Get or set the captured base64 data URL |",'| `cam.facing` | `string` | Get or set the camera direction (`"environment"` or `"user"`) |',"","### Events","","| Event | Description |","|---|---|","| `change` | Fired after a photo is captured |"].join(`
`)}}},argTypes:{name:{control:"text"},facing:{control:{type:"select"},options:["environment","user"]},width:{control:"number"},height:{control:"number"}},render:e=>m`
    <aa-camera
      name="${e.name}"
      facing="${e.facing}"
      width="${e.width}"
      height="${e.height}"
    ></aa-camera>
  `},a={args:{name:"meal-photo",facing:"environment",width:640,height:480}},t={args:{name:"selfie",facing:"user",width:640,height:480}};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: "meal-photo",
    facing: "environment",
    width: 640,
    height: 480
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: "selfie",
    facing: "user",
    width: 640,
    height: 480
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const d=["Default","FrontCamera"];export{a as Default,t as FrontCamera,d as __namedExportsOrder,p as default};
