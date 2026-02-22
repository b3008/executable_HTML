import{b as D}from"./lit-element-BrtkDOYA.js";import{o as O}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";var t=Object.freeze,E=Object.defineProperty,M=(e,b)=>t(E(e,"raw",{value:t(b||e.slice())})),i;const d=`<aa-signal-protocol
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
</aa-signal-protocol>`,c=`<aa-signal-protocol
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
</aa-signal-protocol>`,m=`<aa-signal-protocol
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
</aa-signal-protocol>`;function s(e){return D(i||(i=M([`
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
  `])),e,O(e))}const W={title:"Data & Utility/SignalProtocol",tags:["autodocs"],parameters:{docs:{description:{component:["A declarative, non-rendering element that specifies when and how participants are signalled in ESM/EMA studies. Wraps `<aa-session>` as its parent to express the scheduling relationship.","","### DOM API","","```js","const protocol = document.querySelector('aa-signal-protocol');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `protocol.getProtocol()` | `SignalProtocolConfig` | Returns a structured object of all protocol attributes |","| `protocol.getSignallingTimes(start, end)` | `Date[]` | Computes concrete signal times for a date range. Supports `fixed`, `random`, and `stratified-random` schedules with window/exclusion handling |","| `protocol.validate()` | `string[]` | Validates the configuration and returns an array of warning messages |","| `protocol.toJSON()` | `object` | JSON representation of the protocol and its children |","","### Events","","| Event | Description |","|---|---|","| `protocolReady` | Fired when the protocol element is connected and validated |","","### Schedule Types","","| Type | Description |","|---|---|","| `fixed` | Signals at exact times specified by `fixed-times` |","| `random` | Signals uniformly distributed within time windows |","| `stratified-random` | Day divided into N equal blocks, one random signal per block |","","### Duration Micro-Syntax","","Used by `min-interval`, `signal-expiry`, `reminder-after`: `30s`, `15min`, `2h`, `1d`"].join(`
`)}}}},a={render:()=>s(d),parameters:{docs:{source:{code:d,language:"html"}}}},r={render:()=>s(l),parameters:{docs:{source:{code:l,language:"html"}}}},o={render:()=>s(c),parameters:{docs:{source:{code:c,language:"html"}}}},n={render:()=>s(m),parameters:{docs:{source:{code:m,language:"html"}}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(classicESM),
  parameters: {
    docs: {
      source: {
        code: classicESM,
        language: "html"
      }
    }
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(weekdayWeekendSplit),
  parameters: {
    docs: {
      source: {
        code: weekdayWeekendSplit,
        language: "html"
      }
    }
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,w,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(fixedDiaryPlusRandom),
  parameters: {
    docs: {
      source: {
        code: fixedDiaryPlusRandom,
        language: "html"
      }
    }
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var v,P,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(fixedTimeOnly),
  parameters: {
    docs: {
      source: {
        code: fixedTimeOnly,
        language: "html"
      }
    }
  }
}`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const A=["ClassicStratifiedRandomESM","WeekdayWeekendSplit","FixedDiaryPlusRandomSignals","FixedTimeOnly"];export{a as ClassicStratifiedRandomESM,o as FixedDiaryPlusRandomSignals,n as FixedTimeOnly,r as WeekdayWeekendSplit,A as __namedExportsOrder,W as default};
