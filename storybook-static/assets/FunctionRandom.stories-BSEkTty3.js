import{b as f}from"./lit-element-BrtkDOYA.js";import{o as x}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";const b=(e,r,g)=>`<aa-session name="${e}">
  <div style="display:flex; align-items:center; gap:12px;">
    <button onclick="
      var container = this.parentElement.querySelector('.result-container');
      container.innerHTML = '';
      var el = document.createElement('aa-function-random');
      el.setAttribute('name', 'randomValue');
      el.setAttribute('min', '${r}');
      el.setAttribute('max', '${g}');
      el.setAttribute('debug', '');
      container.appendChild(el);
      this.parentElement.querySelector('.result-value').textContent = el.value;
    ">Generate</button>
    <span>Result: <strong class="result-value">—</strong></span>
    <span class="result-container" style="display:none;"></span>
  </div>
</aa-session>`,h={title:"Data & Utility/Function Random",tags:["autodocs"],render:e=>{const r=b("random-demo",e.min,e.max);return f`${x(r)}`},parameters:{docs:{description:{component:["Generates a random integer between `min` and `max` (inclusive) and stores it in session memory. Removes itself from the DOM after generating (unless `debug` is set).","","### DOM API","","```js","const fn = document.querySelector('aa-function-random');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `fn.value` | `number` | The generated random integer (read after element is connected) |","| `fn.getRandomInt(min, max)` | `number` | Generate a random integer in `[min, max]` range |"].join(`
`)},source:{code:'<aa-function-random name="randomValue" min="1" max="100"></aa-function-random>',language:"html"}}}},n={args:{min:1,max:100}},a={args:{min:1,max:6}},t={args:{min:0,max:1}};var o,s,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 100
  }
}`,...(m=(s=n.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 6
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 1
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const R=["Default","DiceRoll","CoinFlip"];export{t as CoinFlip,n as Default,a as DiceRoll,R as __namedExportsOrder,h as default};
