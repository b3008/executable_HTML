import{b as _}from"./lit-element-BrtkDOYA.js";import{o as b}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";var t=Object.freeze,E=Object.defineProperty,R=(e,O)=>t(E(e,"raw",{value:t(O||e.slice())})),i;const d=`<aa-signal-protocol
  name="classic-esm"
  schedule-type="stratified-random"
  signals-per-day="8"
  window-start="09:00"
  window-end="22:00"
  min-interval="20min"
  signal-expiry="15min"
  reminder-after="5min"
  study-days="14">
  <aa-session name="daily-experience" should-run="false">
    <template><div>Assessment content here</div></template>
  </aa-session>
</aa-signal-protocol>`,l=`<aa-signal-protocol
  name="work-stress"
  schedule-type="stratified-random"
  signals-per-day="6"
  signal-windows="08:00-12:00;13:00-20:00"
  min-interval="30min"
  signal-expiry="20min"
  weekend-signals-per-day="4"
  weekend-signal-windows="10:00-21:00"
  start-date="2025-09-01"
  end-date="2025-09-21">
  <aa-session name="work-stress-assessment" should-run="false">
    <template><div>Assessment content here</div></template>
  </aa-session>
</aa-signal-protocol>`,m=`<aa-signal-protocol
  name="mixed-protocol"
  schedule-type="stratified-random"
  signals-per-day="5"
  window-start="10:00"
  window-end="20:00"
  min-interval="30min"
  fixed-times="07:30,22:00"
  fixed-times-label="diary"
  study-days="7">
  <aa-session name="mood-diary" should-run="false">
    <template><div>Assessment content here</div></template>
  </aa-session>
</aa-signal-protocol>`,c=`<aa-signal-protocol
  name="daily-diary"
  schedule-type="fixed"
  fixed-times="08:00,14:00,21:00"
  signal-expiry="30min"
  reminder-after="15min"
  reminder-count="2"
  active-days="weekdays"
  study-days="21">
  <aa-session name="diary-assessment" should-run="false">
    <template><div>Assessment content here</div></template>
  </aa-session>
</aa-signal-protocol>`;function o(e){return _(i||(i=R([`
    <div style="font-family: monospace; padding: 16px;">
      <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto; white-space: pre-wrap;">`,`</pre>
      `,`
      <script type="module">
        setTimeout(() => {
          const protocol = document.querySelector('aa-signal-protocol');
          if (protocol && protocol.getProtocol) {
            const config = protocol.getProtocol();
            const summary = document.getElementById('protocol-summary');
            if (summary) {
              summary.textContent = JSON.stringify(config, null, 2);
            }
          }
        }, 100);
      <\/script>
      <h3 style="font-family: sans-serif; margin-top: 16px;">Parsed Protocol</h3>
      <pre id="protocol-summary" style="background: #e8f5e9; padding: 16px; border-radius: 4px; overflow-x: auto; white-space: pre-wrap;"></pre>
    </div>
  `])),e,b(e))}const M={title:"Data & Utility/SignalProtocol",tags:["autodocs"]},a={render:()=>o(d),parameters:{docs:{source:{code:d,language:"html"}}}},r={render:()=>o(l),parameters:{docs:{source:{code:l,language:"html"}}}},s={render:()=>o(m),parameters:{docs:{source:{code:m,language:"html"}}}},n={render:()=>o(c),parameters:{docs:{source:{code:c,language:"html"}}}};var p,u,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(classicESM),
  parameters: {
    docs: {
      source: {
        code: classicESM,
        language: "html"
      }
    }
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,f,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(weekdayWeekendSplit),
  parameters: {
    docs: {
      source: {
        code: weekdayWeekendSplit,
        language: "html"
      }
    }
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,S,h;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(fixedDiaryPlusRandom),
  parameters: {
    docs: {
      source: {
        code: fixedDiaryPlusRandom,
        language: "html"
      }
    }
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var v,P,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(fixedTimeOnly),
  parameters: {
    docs: {
      source: {
        code: fixedTimeOnly,
        language: "html"
      }
    }
  }
}`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const A=["ClassicStratifiedRandomESM","WeekdayWeekendSplit","FixedDiaryPlusRandomSignals","FixedTimeOnly"];export{a as ClassicStratifiedRandomESM,s as FixedDiaryPlusRandomSignals,n as FixedTimeOnly,r as WeekdayWeekendSplit,A as __namedExportsOrder,M as default};
