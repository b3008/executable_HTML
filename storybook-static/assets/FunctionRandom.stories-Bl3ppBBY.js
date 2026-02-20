import{b as x}from"./lit-element-BrtkDOYA.js";import{o as f}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";const b=(e,r,g)=>`<aa-session name="${e}">
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
</aa-session>`,D={title:"Data & Utility/Function Random",tags:["autodocs"],render:e=>{const r=b("random-demo",e.min,e.max);return x`${f(r)}`},parameters:{docs:{source:{code:'<aa-function-random name="randomValue" min="1" max="100"></aa-function-random>',language:"html"}}}},a={args:{min:1,max:100}},n={args:{min:1,max:6}},t={args:{min:0,max:1}};var s,o,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 100
  }
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 6
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 1
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const h=["Default","DiceRoll","CoinFlip"];export{t as CoinFlip,a as Default,n as DiceRoll,h as __namedExportsOrder,D as default};
