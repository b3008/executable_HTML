import{b as E}from"./lit-element-BrtkDOYA.js";import{o as y}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";var z=Object.freeze,de=Object.defineProperty,le=(e,i)=>z(de(e,"raw",{value:z(i||e.slice())})),F;function x(e){return String(e).padStart(2,"0")}function D(e){return`${e.getFullYear()}-${x(e.getMonth()+1)}-${x(e.getDate())}`}function ne(e){return`${x(e.getHours())}:${x(e.getMinutes())}`}function ce(e){const i=document.createElement("aa-signal-protocol"),s=[["name","interactive-preview"],["schedule-type",e.scheduleType],["signals-per-day",e.signalsPerDay],["window-start",e.windowStart],["window-end",e.windowEnd],["signal-windows",e.signalWindows],["min-interval",e.minInterval],["fixed-times",e.fixedTimes],["fixed-times-label",e.fixedTimesLabel],["active-days",e.activeDays],["exclude-dates",e.excludeDates],["exclude-times",e.excludeTimes],["weekend-signals-per-day",e.weekendSignalsPerDay],["weekend-window-start",e.weekendWindowStart],["weekend-window-end",e.weekendWindowEnd],["weekend-signal-windows",e.weekendSignalWindows],["weekend-fixed-times",e.weekendFixedTimes]];for(const[t,n]of s)n!=null&&n!==""&&i.setAttribute(t,String(n));return i}function pe(e){if(e.length===0)return"";let i="";for(const s of e)i+=`<div style="background:#fff3e0;border-left:3px solid #ff9800;padding:6px 12px;margin-bottom:4px;font-size:13px;font-family:sans-serif;">${s}</div>`;return`<div style="margin-bottom:12px;">${i}</div>`}function me(e,i,s){const t=Math.round((s.getTime()-i.getTime())/864e5)+1,n=new Set(e.map(D)),d=n.size>0?(e.length/n.size).toFixed(1):"0";return`<div style="display:flex;gap:28px;margin-bottom:16px;font-family:sans-serif;font-size:13px;flex-wrap:wrap;">
    <div><strong>${e.length}</strong> total signals</div>
    <div><strong>${n.size}</strong> / ${t} days active</div>
    <div><strong>${d}</strong> signals / active day</div>
  </div>`}function ge(e,i,s,t,n){const d=new Map;for(const c of e){const l=D(c);d.has(l)||d.set(l,[]),d.get(l).push(c)}const a=52,o=(n-t)*a,g=[],u=new Date(i.getFullYear(),i.getMonth(),i.getDate()),M=new Date(s.getFullYear(),s.getMonth(),s.getDate());for(;u<=M;)g.push(new Date(u)),u.setDate(u.getDate()+1);const T=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ae=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let r='<div style="display:flex;overflow-x:auto;border:1px solid #dadce0;border-radius:8px;background:#fff;">';r+='<div style="width:48px;flex-shrink:0;border-right:1px solid #dadce0;">',r+='<div style="height:56px;"></div>',r+=`<div style="position:relative;height:${o}px;">`;for(let c=t;c<=n;c++){const l=(c-t)*a;c>t&&(r+=`<div style="position:absolute;top:${l-7}px;right:8px;font-size:10px;color:#70757a;font-family:sans-serif;white-space:nowrap;">${x(c)}:00</div>`)}r+="</div></div>";for(let c=0;c<g.length;c++){const l=g[c],oe=D(l),H=(d.get(oe)||[]).sort((p,f)=>p.getTime()-f.getTime()),W=l.getDay()===0||l.getDay()===6,ie=l.getDay()===1&&c>0,O=T[l.getDay()],Y=ae[l.getMonth()],P=H.length>0;r+=`<div style="flex:1;min-width:72px;position:relative;border-left:${ie?"2px solid #dadce0":"1px solid #ebebeb"};background:${W?"#f8f9fa":"#fff"};">`;const re=P?W?"#0b8043":"#1a73e8":"#70757a";r+='<div style="height:56px;padding:6px 4px 2px;text-align:center;border-bottom:1px solid #dadce0;font-family:sans-serif;">',r+=`<div style="font-size:10px;color:#70757a;text-transform:uppercase;letter-spacing:.5px;">${O}</div>`,r+=`<div style="font-size:22px;font-weight:${P?500:400};color:${re};line-height:1.3;">${l.getDate()}</div>`,r+=`<div style="font-size:9px;color:#70757a;">${Y}</div>`,r+="</div>",r+=`<div style="position:relative;height:${o}px;">`;for(let p=t;p<=n;p++){const f=(p-t)*a;if(p>t&&(r+=`<div style="position:absolute;top:${f}px;left:0;right:0;border-top:1px solid #ebebeb;"></div>`),p<n){const $=f+a/2;r+=`<div style="position:absolute;top:${$}px;left:0;right:0;border-top:1px dotted #f5f5f5;"></div>`}}for(const p of H){const $=(p.getHours()*60+p.getMinutes()-t*60)/60*a,N=ne(p),se=W?"#0b8043":"#1a73e8";r+=`<div title="${O} ${l.getDate()} ${Y} at ${N}" style="position:absolute;top:${Math.round($)}px;left:2px;right:2px;height:20px;background:${se};color:#fff;font-size:10px;font-weight:500;font-family:sans-serif;line-height:20px;padding:0 4px;border-radius:4px;overflow:hidden;white-space:nowrap;z-index:1;box-shadow:0 1px 2px rgba(0,0,0,.2);">${N}</div>`}r+="</div></div>"}return r+="</div>",r}function ue(e){if(e.length===0)return'<p style="color:#888;font-family:sans-serif;">No signals generated for this date range.</p>';const i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let t='<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:13px;">';t+="<thead><tr>",t+='<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Date</th>',t+='<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Day</th>',t+='<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Time</th>',t+='<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">#</th>',t+="</tr></thead><tbody>";let n="",d=0;for(const a of e){const m=D(a),o=m!==n;o&&(d=0),d++;const g=a.getDay()===0||a.getDay()===6,u=o&&n?"border-top:1px solid #ddd;":"",M=g?"background:#fafafa;":"";n=m;const T=`${s[a.getMonth()]} ${a.getDate()}, ${a.getFullYear()}`;t+=`<tr style="${u}${M}">`,t+=`<td style="padding:3px 10px;white-space:nowrap;color:${o?"#333":"#ccc"};">${o?T:""}</td>`,t+=`<td style="padding:3px 10px;color:${o?"#333":"#ccc"};">${o?i[a.getDay()]:""}</td>`,t+=`<td style="padding:3px 10px;font-variant-numeric:tabular-nums;">${ne(a)}</td>`,t+=`<td style="padding:3px 10px;color:#888;">${d}</td>`,t+="</tr>"}return t+="</tbody></table>",t}const R=`<aa-signal-protocol
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
</aa-signal-protocol>`,A=`<aa-signal-protocol
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
</aa-signal-protocol>`,L=`<aa-signal-protocol
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
</aa-signal-protocol>`,_=`<aa-signal-protocol
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
</aa-signal-protocol>`;function k(e){return E(F||(F=le([`
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
  `])),e,y(e))}const be={title:"Data & Utility/SignalProtocol",tags:["autodocs"],parameters:{docs:{description:{component:["A declarative, non-rendering element that specifies when and how participants are signalled in ESM/EMA studies. Wraps `<aa-session>` as its parent to express the scheduling relationship.","","### DOM API","","```js","const protocol = document.querySelector('aa-signal-protocol');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `protocol.getProtocol()` | `SignalProtocolConfig` | Returns a structured object of all protocol attributes |","| `protocol.getSignallingTimes(start, end)` | `Date[]` | Computes concrete signal times for a date range. Supports `fixed`, `random`, and `stratified-random` schedules with window/exclusion handling |","| `protocol.validate()` | `string[]` | Validates the configuration and returns an array of warning messages |","| `protocol.toJSON()` | `object` | JSON representation of the protocol and its children |","","### Events","","| Event | Description |","|---|---|","| `protocolReady` | Fired when the protocol element is connected and validated |","","### Schedule Types","","| Type | Description |","|---|---|","| `fixed` | Signals at exact times specified by `fixed-times` |","| `random` | Signals uniformly distributed within time windows |","| `stratified-random` | Day divided into N equal blocks, one random signal per block |","","### Duration Micro-Syntax","","Used by `min-interval`, `signal-expiry`, `reminder-after`: `30s`, `15min`, `2h`, `1d`"].join(`
`)}}}},w={render:()=>k(R),parameters:{docs:{source:{code:R,language:"html"}}}},h={render:()=>k(A),parameters:{docs:{source:{code:A,language:"html"}}}},b={render:()=>k(L),parameters:{docs:{source:{code:L,language:"html"}}}},v={render:()=>k(_),parameters:{docs:{source:{code:_,language:"html"}}}},S={argTypes:{scheduleType:{control:{type:"select"},options:["fixed","random","stratified-random"],table:{category:"Schedule"}},signalsPerDay:{control:"number",description:"Number of random/stratified signals per day",table:{category:"Schedule"}},minInterval:{control:"text",description:"Min time between signals (e.g. 15min, 30min, 1h)",table:{category:"Schedule"}},fixedTimes:{control:"text",description:"Comma-separated HH:MM (e.g. 07:30,22:00)",table:{category:"Schedule"}},fixedTimesLabel:{control:"text",description:"Label for fixed signals (e.g. diary)",table:{category:"Schedule"}},windowStart:{control:"text",description:"Daily window start (HH:MM)",table:{category:"Time Windows"}},windowEnd:{control:"text",description:"Daily window end (HH:MM)",table:{category:"Time Windows"}},signalWindows:{control:"text",description:"Explicit windows, overrides start/end (e.g. 08:00-12:00;13:00-20:00)",table:{category:"Time Windows"}},excludeTimes:{control:"text",description:"Daily blackout ranges (e.g. 12:00-13:00;17:00-18:00)",table:{category:"Time Windows"}},activeDays:{control:{type:"select"},options:["all","weekdays","weekends","Mon,Wed,Fri","Tue,Thu"],description:"Which days are active",table:{category:"Active Days"}},excludeDates:{control:"text",description:"Comma-separated YYYY-MM-DD dates to skip",table:{category:"Active Days"}},weekendSignalsPerDay:{control:"text",description:"Override signals-per-day on Sat/Sun (leave empty to inherit)",table:{category:"Weekend Overrides"}},weekendWindowStart:{control:"text",description:"Override window-start on Sat/Sun",table:{category:"Weekend Overrides"}},weekendWindowEnd:{control:"text",description:"Override window-end on Sat/Sun",table:{category:"Weekend Overrides"}},weekendSignalWindows:{control:"text",description:"Override signal-windows on Sat/Sun",table:{category:"Weekend Overrides"}},weekendFixedTimes:{control:"text",description:"Override fixed-times on Sat/Sun",table:{category:"Weekend Overrides"}},rangeStart:{control:"text",description:"Start of date range (YYYY-MM-DD)",table:{category:"Date Range"}},rangeEnd:{control:"text",description:"End of date range (YYYY-MM-DD)",table:{category:"Date Range"}},_reshuffle:{control:{type:"number",min:1},description:"Change to regenerate random schedules",table:{category:"Date Range"}}},args:{scheduleType:"stratified-random",signalsPerDay:6,windowStart:"08:00",windowEnd:"22:00",signalWindows:"",minInterval:"20min",fixedTimes:"",fixedTimesLabel:"",activeDays:"all",excludeDates:"",excludeTimes:"",weekendSignalsPerDay:"",weekendWindowStart:"",weekendWindowEnd:"",weekendSignalWindows:"",weekendFixedTimes:"",rangeStart:"2025-01-06",rangeEnd:"2025-01-19",_reshuffle:1},render:e=>{const i=ce(e),s=new Date(e.rangeStart+"T00:00:00"),t=new Date(e.rangeEnd+"T00:00:00");if(isNaN(s.getTime())||isNaN(t.getTime())||s>t)return E`<p style="color:#c62828;font-family:sans-serif;">Invalid date range. Use YYYY-MM-DD format with start &le; end.</p>`;let n=[],d=[];try{d=i.validate(),n=i.getSignallingTimes(s,t)}catch(o){d.push("Error generating schedule: "+o.message)}let a=6,m=23;if(n.length>0){const o=n.map(g=>g.getHours());a=Math.max(0,Math.min(...o)-1),m=Math.min(24,Math.max(...o)+2)}if(e.windowStart){const o=parseInt(e.windowStart,10);isNaN(o)||(a=Math.min(a,Math.max(0,o-1)))}if(e.windowEnd){const o=parseInt(e.windowEnd,10);isNaN(o)||(m=Math.max(m,Math.min(24,o+1)))}return m-a<4&&(m=Math.min(24,a+4)),E`
      <div style="font-family:sans-serif;">
        ${y(pe(d))}
        ${y(me(n,s,t))}

        <p style="font-size:12px;color:#70757a;margin:0 0 10px;">
          Weekday signals in <span style="background:#1a73e8;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">blue</span>,
          weekend in <span style="background:#0b8043;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">green</span>.
          Hover blocks for details. Thicker border marks Monday (week boundary).
        </p>

        ${y(ge(n,s,t,a,m))}

        <details open style="margin-top:24px;">
          <summary style="font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px;">
            Signal List (${n.length} total)
          </summary>
          <div style="max-height:500px;overflow-y:auto;border:1px solid #eee;border-radius:4px;">
            ${y(ue(n))}
          </div>
        </details>
      </div>
    `}};var C,I,J;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(classicESM),
  parameters: {
    docs: {
      source: {
        code: classicESM,
        language: "html"
      }
    }
  }
}`,...(J=(I=w.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var j,B,U;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(weekdayWeekendSplit),
  parameters: {
    docs: {
      source: {
        code: weekdayWeekendSplit,
        language: "html"
      }
    }
  }
}`,...(U=(B=h.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var q,V,X;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(fixedDiaryPlusRandom),
  parameters: {
    docs: {
      source: {
        code: fixedDiaryPlusRandom,
        language: "html"
      }
    }
  }
}`,...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var G,K,Q;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(fixedTimeOnly),
  parameters: {
    docs: {
      source: {
        code: fixedTimeOnly,
        language: "html"
      }
    }
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  argTypes: {
    scheduleType: {
      control: {
        type: "select"
      },
      options: ["fixed", "random", "stratified-random"],
      table: {
        category: "Schedule"
      }
    },
    signalsPerDay: {
      control: "number",
      description: "Number of random/stratified signals per day",
      table: {
        category: "Schedule"
      }
    },
    minInterval: {
      control: "text",
      description: "Min time between signals (e.g. 15min, 30min, 1h)",
      table: {
        category: "Schedule"
      }
    },
    fixedTimes: {
      control: "text",
      description: "Comma-separated HH:MM (e.g. 07:30,22:00)",
      table: {
        category: "Schedule"
      }
    },
    fixedTimesLabel: {
      control: "text",
      description: "Label for fixed signals (e.g. diary)",
      table: {
        category: "Schedule"
      }
    },
    windowStart: {
      control: "text",
      description: "Daily window start (HH:MM)",
      table: {
        category: "Time Windows"
      }
    },
    windowEnd: {
      control: "text",
      description: "Daily window end (HH:MM)",
      table: {
        category: "Time Windows"
      }
    },
    signalWindows: {
      control: "text",
      description: "Explicit windows, overrides start/end (e.g. 08:00-12:00;13:00-20:00)",
      table: {
        category: "Time Windows"
      }
    },
    excludeTimes: {
      control: "text",
      description: "Daily blackout ranges (e.g. 12:00-13:00;17:00-18:00)",
      table: {
        category: "Time Windows"
      }
    },
    activeDays: {
      control: {
        type: "select"
      },
      options: ["all", "weekdays", "weekends", "Mon,Wed,Fri", "Tue,Thu"],
      description: "Which days are active",
      table: {
        category: "Active Days"
      }
    },
    excludeDates: {
      control: "text",
      description: "Comma-separated YYYY-MM-DD dates to skip",
      table: {
        category: "Active Days"
      }
    },
    weekendSignalsPerDay: {
      control: "text",
      description: "Override signals-per-day on Sat/Sun (leave empty to inherit)",
      table: {
        category: "Weekend Overrides"
      }
    },
    weekendWindowStart: {
      control: "text",
      description: "Override window-start on Sat/Sun",
      table: {
        category: "Weekend Overrides"
      }
    },
    weekendWindowEnd: {
      control: "text",
      description: "Override window-end on Sat/Sun",
      table: {
        category: "Weekend Overrides"
      }
    },
    weekendSignalWindows: {
      control: "text",
      description: "Override signal-windows on Sat/Sun",
      table: {
        category: "Weekend Overrides"
      }
    },
    weekendFixedTimes: {
      control: "text",
      description: "Override fixed-times on Sat/Sun",
      table: {
        category: "Weekend Overrides"
      }
    },
    rangeStart: {
      control: "text",
      description: "Start of date range (YYYY-MM-DD)",
      table: {
        category: "Date Range"
      }
    },
    rangeEnd: {
      control: "text",
      description: "End of date range (YYYY-MM-DD)",
      table: {
        category: "Date Range"
      }
    },
    _reshuffle: {
      control: {
        type: "number",
        min: 1
      },
      description: "Change to regenerate random schedules",
      table: {
        category: "Date Range"
      }
    }
  },
  args: {
    scheduleType: "stratified-random",
    signalsPerDay: 6,
    windowStart: "08:00",
    windowEnd: "22:00",
    signalWindows: "",
    minInterval: "20min",
    fixedTimes: "",
    fixedTimesLabel: "",
    activeDays: "all",
    excludeDates: "",
    excludeTimes: "",
    weekendSignalsPerDay: "",
    weekendWindowStart: "",
    weekendWindowEnd: "",
    weekendSignalWindows: "",
    weekendFixedTimes: "",
    rangeStart: "2025-01-06",
    rangeEnd: "2025-01-19",
    _reshuffle: 1
  },
  render: args => {
    const el = createProtocolElement(args);
    const start = new Date(args.rangeStart + "T00:00:00");
    const end = new Date(args.rangeEnd + "T00:00:00");
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      return html\`<p style="color:#c62828;font-family:sans-serif;">Invalid date range. Use YYYY-MM-DD format with start &le; end.</p>\`;
    }
    let times: Date[] = [];
    let warnings: string[] = [];
    try {
      warnings = el.validate();
      times = el.getSignallingTimes(start, end);
    } catch (e: any) {
      warnings.push("Error generating schedule: " + e.message);
    }

    // Determine visible hour range from signals + configured windows
    let minHour = 6,
      maxHour = 23;
    if (times.length > 0) {
      const hours = times.map((s: Date) => s.getHours());
      minHour = Math.max(0, Math.min(...hours) - 1);
      maxHour = Math.min(24, Math.max(...hours) + 2);
    }
    if (args.windowStart) {
      const h = parseInt(args.windowStart, 10);
      if (!isNaN(h)) minHour = Math.min(minHour, Math.max(0, h - 1));
    }
    if (args.windowEnd) {
      const h = parseInt(args.windowEnd, 10);
      if (!isNaN(h)) maxHour = Math.max(maxHour, Math.min(24, h + 1));
    }
    if (maxHour - minHour < 4) maxHour = Math.min(24, minHour + 4);
    return html\`
      <div style="font-family:sans-serif;">
        \${unsafeHTML(buildWarningsHtml(warnings))}
        \${unsafeHTML(buildStatsHtml(times, start, end))}

        <p style="font-size:12px;color:#70757a;margin:0 0 10px;">
          Weekday signals in <span style="background:#1a73e8;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">blue</span>,
          weekend in <span style="background:#0b8043;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">green</span>.
          Hover blocks for details. Thicker border marks Monday (week boundary).
        </p>

        \${unsafeHTML(buildWeekCalendarHtml(times, start, end, minHour, maxHour))}

        <details open style="margin-top:24px;">
          <summary style="font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px;">
            Signal List (\${times.length} total)
          </summary>
          <div style="max-height:500px;overflow-y:auto;border:1px solid #eee;border-radius:4px;">
            \${unsafeHTML(buildTextListHtml(times))}
          </div>
        </details>
      </div>
    \`;
  }
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ve=["ClassicStratifiedRandomESM","WeekdayWeekendSplit","FixedDiaryPlusRandomSignals","FixedTimeOnly","ScheduleExplorer"];export{w as ClassicStratifiedRandomESM,b as FixedDiaryPlusRandomSignals,v as FixedTimeOnly,S as ScheduleExplorer,h as WeekdayWeekendSplit,ve as __namedExportsOrder,be as default};
