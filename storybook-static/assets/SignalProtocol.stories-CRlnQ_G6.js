import{b as P}from"./lit-element-BrtkDOYA.js";import{o as u}from"./unsafe-html-DX_ZMqK7.js";import"./directive-CF8sV3Lr.js";var z=Object.freeze,ge=Object.defineProperty,ue=(e,d)=>z(ge(e,"raw",{value:z(d||e.slice())})),R;function b(e){return String(e).padStart(2,"0")}function M(e){return`${e.getFullYear()}-${b(e.getMonth()+1)}-${b(e.getDate())}`}function le(e){return`${b(e.getHours())}:${b(e.getMinutes())}`}function F(e){const d=document.createElement("aa-signal-protocol"),l=[["name","interactive-preview"],["schedule-type",e.scheduleType],["signals-per-day",e.signalsPerDay],["window-start",e.windowStart],["window-end",e.windowEnd],["signal-windows",e.signalWindows],["min-interval",e.minInterval],["fixed-times",e.fixedTimes],["fixed-times-label",e.fixedTimesLabel],["active-days",e.activeDays],["exclude-dates",e.excludeDates],["exclude-times",e.excludeTimes],["weekend-signals-per-day",e.weekendSignalsPerDay],["weekend-window-start",e.weekendWindowStart],["weekend-window-end",e.weekendWindowEnd],["weekend-signal-windows",e.weekendSignalWindows],["weekend-fixed-times",e.weekendFixedTimes]];for(const[t,a]of l)a!=null&&a!==""&&d.setAttribute(t,String(a));return d}function _(e){if(e.length===0)return"";let d="";for(const l of e)d+=`<div style="background:#fff3e0;border-left:3px solid #ff9800;padding:6px 12px;margin-bottom:4px;font-size:13px;font-family:sans-serif;">${l}</div>`;return`<div style="margin-bottom:12px;">${d}</div>`}function A(e,d,l){const t=Math.round((l.getTime()-d.getTime())/864e5)+1,a=new Set(e.map(M)),c=a.size>0?(e.length/a.size).toFixed(1):"0";return`<div style="display:flex;gap:28px;margin-bottom:16px;font-family:sans-serif;font-size:13px;flex-wrap:wrap;">
    <div><strong>${e.length}</strong> total signals</div>
    <div><strong>${a.size}</strong> / ${t} days active</div>
    <div><strong>${c}</strong> signals / active day</div>
  </div>`}function B(e,d,l,t,a){const c=new Map;for(const r of e){const o=M(r);c.has(o)||c.set(o,[]),c.get(o).push(r)}const i=52,p=(a-t)*i,g=[],s=new Date(d.getFullYear(),d.getMonth(),d.getDate()),f=new Date(l.getFullYear(),l.getMonth(),l.getDate());for(;s<=f;)g.push(new Date(s)),s.setDate(s.getDate()+1);const w=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let n='<div style="display:flex;overflow-x:auto;border:1px solid #dadce0;border-radius:8px;background:#fff;">';n+='<div style="width:48px;flex-shrink:0;border-right:1px solid #dadce0;">',n+='<div style="height:56px;"></div>',n+=`<div style="position:relative;height:${p}px;">`;for(let r=t;r<=a;r++){const o=(r-t)*i;r>t&&(n+=`<div style="position:absolute;top:${o-7}px;right:8px;font-size:10px;color:#70757a;font-family:sans-serif;white-space:nowrap;">${b(r)}:00</div>`)}n+="</div></div>";for(let r=0;r<g.length;r++){const o=g[r],$=M(o),I=(c.get($)||[]).sort((m,h)=>m.getTime()-h.getTime()),W=o.getDay()===0||o.getDay()===6,ce=o.getDay()===1&&r>0,O=w[o.getDay()],Y=x[o.getMonth()],N=I.length>0;n+=`<div style="flex:1;min-width:72px;position:relative;border-left:${ce?"2px solid #dadce0":"1px solid #ebebeb"};background:${W?"#f8f9fa":"#fff"};">`;const pe=N?W?"#0b8043":"#1a73e8":"#70757a";n+='<div style="height:56px;padding:6px 4px 2px;text-align:center;border-bottom:1px solid #dadce0;font-family:sans-serif;">',n+=`<div style="font-size:10px;color:#70757a;text-transform:uppercase;letter-spacing:.5px;">${O}</div>`,n+=`<div style="font-size:22px;font-weight:${N?500:400};color:${pe};line-height:1.3;">${o.getDate()}</div>`,n+=`<div style="font-size:9px;color:#70757a;">${Y}</div>`,n+="</div>",n+=`<div style="position:relative;height:${p}px;">`;for(let m=t;m<=a;m++){const h=(m-t)*i;if(m>t&&(n+=`<div style="position:absolute;top:${h}px;left:0;right:0;border-top:1px solid #ebebeb;"></div>`),m<a){const E=h+i/2;n+=`<div style="position:absolute;top:${E}px;left:0;right:0;border-top:1px dotted #f5f5f5;"></div>`}}for(const m of I){const E=(m.getHours()*60+m.getMinutes()-t*60)/60*i,L=le(m),me=W?"#0b8043":"#1a73e8";n+=`<div title="${O} ${o.getDate()} ${Y} at ${L}" style="position:absolute;top:${Math.round(E)}px;left:2px;right:2px;height:20px;background:${me};color:#fff;font-size:10px;font-weight:500;font-family:sans-serif;line-height:20px;padding:0 4px;border-radius:4px;overflow:hidden;white-space:nowrap;z-index:1;box-shadow:0 1px 2px rgba(0,0,0,.2);">${L}</div>`}n+="</div></div>"}return n+="</div>",n}function C(e){if(e.length===0)return'<p style="color:#888;font-family:sans-serif;">No signals generated for this date range.</p>';const d=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let t='<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:13px;">';t+="<thead><tr>",t+='<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Date</th>',t+='<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Day</th>',t+='<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Time</th>',t+='<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">#</th>',t+="</tr></thead><tbody>";let a="",c=0;for(const i of e){const y=M(i),p=y!==a;p&&(c=0),c++;const g=i.getDay()===0||i.getDay()===6,s=p&&a?"border-top:1px solid #ddd;":"",f=g?"background:#fafafa;":"";a=y;const w=`${l[i.getMonth()]} ${i.getDate()}, ${i.getFullYear()}`;t+=`<tr style="${s}${f}">`,t+=`<td style="padding:3px 10px;white-space:nowrap;color:${p?"#333":"#ccc"};">${p?w:""}</td>`,t+=`<td style="padding:3px 10px;color:${p?"#333":"#ccc"};">${p?d[i.getDay()]:""}</td>`,t+=`<td style="padding:3px 10px;font-variant-numeric:tabular-nums;">${le(i)}</td>`,t+=`<td style="padding:3px 10px;color:#888;">${c}</td>`,t+="</tr>"}return t+="</tbody></table>",t}const U=`<aa-signal-protocol
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
</aa-signal-protocol>`,J=`<aa-signal-protocol
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
</aa-signal-protocol>`,j=`<aa-signal-protocol
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
</aa-signal-protocol>`,q=`<aa-signal-protocol
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
</aa-signal-protocol>`;function H(e){return P(R||(R=ue([`
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
  `])),e,u(e))}const be={title:"Data & Utility/SignalProtocol",tags:["autodocs"],parameters:{docs:{description:{component:["A declarative, non-rendering element that specifies when and how participants are signalled in ESM/EMA studies. Wraps `<aa-session>` as its parent to express the scheduling relationship.","","### DOM API","","```js","const protocol = document.querySelector('aa-signal-protocol');","```","","| Method / Property | Returns | Description |","|---|---|---|","| `protocol.getProtocol()` | `SignalProtocolConfig` | Returns a structured object of all protocol attributes |","| `protocol.getSignallingTimes(start, end)` | `Date[]` | Computes concrete signal times for a date range. Supports `fixed`, `random`, and `stratified-random` schedules with window/exclusion handling |","| `protocol.validate()` | `string[]` | Validates the configuration and returns an array of warning messages |","| `protocol.toJSON()` | `object` | JSON representation of the protocol and its children |","","### Events","","| Event | Description |","|---|---|","| `protocolReady` | Fired when the protocol element is connected and validated |","","### Schedule Types","","| Type | Description |","|---|---|","| `fixed` | Signals at exact times specified by `fixed-times` |","| `random` | Signals uniformly distributed within time windows |","| `stratified-random` | Day divided into N equal blocks, one random signal per block |","","### Duration Micro-Syntax","","Used by `min-interval`, `signal-expiry`, `reminder-after`: `30s`, `15min`, `2h`, `1d`"].join(`
`)}}}},v={render:()=>H(U),parameters:{docs:{source:{code:U,language:"html"}}}},S={render:()=>H(J),parameters:{docs:{source:{code:J,language:"html"}}}},k={render:()=>H(j),parameters:{docs:{source:{code:j,language:"html"}}}},D={render:()=>H(q),parameters:{docs:{source:{code:q,language:"html"}}}},T={argTypes:{scheduleType:{control:{type:"select"},options:["fixed","random","stratified-random"],table:{category:"Schedule"}},signalsPerDay:{control:"number",description:"Number of random/stratified signals per day",table:{category:"Schedule"}},minInterval:{control:"text",description:"Min time between signals (e.g. 15min, 30min, 1h)",table:{category:"Schedule"}},fixedTimes:{control:"text",description:"Comma-separated HH:MM (e.g. 07:30,22:00)",table:{category:"Schedule"}},fixedTimesLabel:{control:"text",description:"Label for fixed signals (e.g. diary)",table:{category:"Schedule"}},windowStart:{control:"text",description:"Daily window start (HH:MM)",table:{category:"Time Windows"}},windowEnd:{control:"text",description:"Daily window end (HH:MM)",table:{category:"Time Windows"}},signalWindows:{control:"text",description:"Explicit windows, overrides start/end (e.g. 08:00-12:00;13:00-20:00)",table:{category:"Time Windows"}},excludeTimes:{control:"text",description:"Daily blackout ranges (e.g. 12:00-13:00;17:00-18:00)",table:{category:"Time Windows"}},activeDays:{control:{type:"select"},options:["all","weekdays","weekends","Mon,Wed,Fri","Tue,Thu"],description:"Which days are active",table:{category:"Active Days"}},excludeDates:{control:"text",description:"Comma-separated YYYY-MM-DD dates to skip",table:{category:"Active Days"}},weekendSignalsPerDay:{control:"text",description:"Override signals-per-day on Sat/Sun (leave empty to inherit)",table:{category:"Weekend Overrides"}},weekendWindowStart:{control:"text",description:"Override window-start on Sat/Sun",table:{category:"Weekend Overrides"}},weekendWindowEnd:{control:"text",description:"Override window-end on Sat/Sun",table:{category:"Weekend Overrides"}},weekendSignalWindows:{control:"text",description:"Override signal-windows on Sat/Sun",table:{category:"Weekend Overrides"}},weekendFixedTimes:{control:"text",description:"Override fixed-times on Sat/Sun",table:{category:"Weekend Overrides"}},rangeStart:{control:"text",description:"Start of date range (YYYY-MM-DD)",table:{category:"Date Range"}},rangeEnd:{control:"text",description:"End of date range (YYYY-MM-DD)",table:{category:"Date Range"}},_seed:{control:!1,table:{disable:!0}}},args:{scheduleType:"stratified-random",signalsPerDay:6,windowStart:"08:00",windowEnd:"22:00",signalWindows:"",minInterval:"20min",fixedTimes:"",fixedTimesLabel:"",activeDays:"all",excludeDates:"",excludeTimes:"",weekendSignalsPerDay:"",weekendWindowStart:"",weekendWindowEnd:"",weekendSignalWindows:"",weekendFixedTimes:"",rangeStart:"2025-01-06",rangeEnd:"2025-01-19",_seed:1},render:e=>{const d=F(e),l=new Date(e.rangeStart+"T00:00:00"),t=new Date(e.rangeEnd+"T00:00:00");if(isNaN(l.getTime())||isNaN(t.getTime())||l>t)return P`<p style="color:#c62828;font-family:sans-serif;">Invalid date range. Use YYYY-MM-DD format with start &le; end.</p>`;function a(x){let n=6,r=23;if(x.length>0){const o=x.map($=>$.getHours());n=Math.max(0,Math.min(...o)-1),r=Math.min(24,Math.max(...o)+2)}if(e.windowStart){const o=parseInt(e.windowStart,10);isNaN(o)||(n=Math.min(n,Math.max(0,o-1)))}if(e.windowEnd){const o=parseInt(e.windowEnd,10);isNaN(o)||(r=Math.max(r,Math.min(24,o+1)))}return r-n<4&&(r=Math.min(24,n+4)),{minHour:n,maxHour:r}}let c=[],i=[];try{c=d.validate(),i=d.getSignallingTimes(l,t)}catch(x){c.push("Error generating schedule: "+x.message)}const{minHour:y,maxHour:p}=a(i),g=e.scheduleType!=="fixed",s="schedule-explorer-"+Date.now(),f=window;f.__scheduleExplorer={buildWarningsHtml:_,buildStatsHtml:A,buildWeekCalendarHtml:B,buildTextListHtml:C,computeHourRange:a,createProtocolElement:F,args:e,start:l,end:t,containerId:s};const w=g?`<script type="module">
          (function() {
            let generation = 1;
            document.getElementById('${s}-btn').addEventListener('click', function() {
              const ctx = window.__scheduleExplorer;
              const protocol = ctx.createProtocolElement(ctx.args);
              const times = protocol.getSignallingTimes(ctx.start, ctx.end);
              const { minHour, maxHour } = ctx.computeHourRange(times);
              generation++;

              // Update counter
              document.getElementById('${s}-counter').textContent = generation;

              // Flash button green briefly
              const btn = this;
              btn.style.background = '#0b8043';
              setTimeout(() => { btn.style.background = '#1a73e8'; }, 200);

              // Update stats
              document.getElementById('${s}-stats').innerHTML =
                ctx.buildStatsHtml(times, ctx.start, ctx.end);

              // Update calendar
              document.getElementById('${s}-calendar').innerHTML =
                ctx.buildWeekCalendarHtml(times, ctx.start, ctx.end, minHour, maxHour);

              // Update text list
              const listHtml = ctx.buildTextListHtml(times);
              document.getElementById('${s}-list').innerHTML =
                '<details open style="margin-top:24px;">' +
                '<summary style="font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px;">Signal List (' + times.length + ' total)</summary>' +
                '<div style="max-height:500px;overflow-y:auto;border:1px solid #eee;border-radius:4px;">' + listHtml + '</div></details>';
            });
          })();
        <\/script>`:"";return P`
      <div id="${s}" style="font-family:sans-serif;">
        ${u(_(c))}

        <div id="${s}-stats">
          ${u(A(i,l,t))}
        </div>

        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
          <p style="font-size:12px;color:#70757a;margin:0;flex:1;">
            Weekday signals in <span style="background:#1a73e8;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">blue</span>,
            weekend in <span style="background:#0b8043;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">green</span>.
            Hover blocks for details. Thicker border marks Monday (week boundary).
          </p>
          ${g?u(`<button id="${s}-btn" style="
            display:inline-flex;align-items:center;gap:6px;padding:6px 14px;
            background:#1a73e8;color:#fff;border:none;border-radius:6px;
            font-size:13px;font-weight:500;font-family:sans-serif;
            cursor:pointer;white-space:nowrap;
          " onmouseenter="this.style.background='#1557b0'" onmouseleave="this.style.background='#1a73e8'">
            &#x21bb; Regenerate<span style="font-size:11px;opacity:.7;">&thinsp;#<span id="${s}-counter">1</span></span>
          </button>`):""}
        </div>

        <div id="${s}-calendar">
          ${u(B(i,l,t,y,p))}
        </div>

        <div id="${s}-list">
          <details open style="margin-top:24px;">
            <summary style="font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px;">
              Signal List (${i.length} total)
            </summary>
            <div style="max-height:500px;overflow-y:auto;border:1px solid #eee;border-radius:4px;">
              ${u(C(i))}
            </div>
          </details>
        </div>

        ${u(w)}
      </div>
    `}};var V,X,G;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(classicESM),
  parameters: {
    docs: {
      source: {
        code: classicESM,
        language: "html"
      }
    }
  }
}`,...(G=(X=v.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var K,Q,Z;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(weekdayWeekendSplit),
  parameters: {
    docs: {
      source: {
        code: weekdayWeekendSplit,
        language: "html"
      }
    }
  }
}`,...(Z=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ne;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(fixedDiaryPlusRandom),
  parameters: {
    docs: {
      source: {
        code: fixedDiaryPlusRandom,
        language: "html"
      }
    }
  }
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ie,ae;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => renderProtocolSummary(fixedTimeOnly),
  parameters: {
    docs: {
      source: {
        code: fixedTimeOnly,
        language: "html"
      }
    }
  }
}`,...(ae=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var re,se,de;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
    _seed: {
      control: false,
      table: {
        disable: true
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
    _seed: 1
  },
  render: args => {
    const el = createProtocolElement(args);
    const start = new Date(args.rangeStart + "T00:00:00");
    const end = new Date(args.rangeEnd + "T00:00:00");
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      return html\`<p style="color:#c62828;font-family:sans-serif;">Invalid date range. Use YYYY-MM-DD format with start &le; end.</p>\`;
    }
    function computeHourRange(times: Date[]) {
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
      return {
        minHour,
        maxHour
      };
    }
    let warnings: string[] = [];
    let times: Date[] = [];
    try {
      warnings = el.validate();
      times = el.getSignallingTimes(start, end);
    } catch (e: any) {
      warnings.push("Error generating schedule: " + e.message);
    }
    const {
      minHour,
      maxHour
    } = computeHourRange(times);
    const isRandom = args.scheduleType !== "fixed";
    const containerId = "schedule-explorer-" + Date.now();

    // Expose build functions on window so the refresh button can reuse them
    // without duplicating rendering logic in an inline script.
    const w = (window as any);
    w.__scheduleExplorer = {
      buildWarningsHtml,
      buildStatsHtml,
      buildWeekCalendarHtml,
      buildTextListHtml,
      computeHourRange,
      createProtocolElement,
      args,
      start,
      end,
      containerId
    };
    const refreshScript = isRandom ? \`<script type="module">
          (function() {
            let generation = 1;
            document.getElementById('\${containerId}-btn').addEventListener('click', function() {
              const ctx = window.__scheduleExplorer;
              const protocol = ctx.createProtocolElement(ctx.args);
              const times = protocol.getSignallingTimes(ctx.start, ctx.end);
              const { minHour, maxHour } = ctx.computeHourRange(times);
              generation++;

              // Update counter
              document.getElementById('\${containerId}-counter').textContent = generation;

              // Flash button green briefly
              const btn = this;
              btn.style.background = '#0b8043';
              setTimeout(() => { btn.style.background = '#1a73e8'; }, 200);

              // Update stats
              document.getElementById('\${containerId}-stats').innerHTML =
                ctx.buildStatsHtml(times, ctx.start, ctx.end);

              // Update calendar
              document.getElementById('\${containerId}-calendar').innerHTML =
                ctx.buildWeekCalendarHtml(times, ctx.start, ctx.end, minHour, maxHour);

              // Update text list
              const listHtml = ctx.buildTextListHtml(times);
              document.getElementById('\${containerId}-list').innerHTML =
                '<details open style="margin-top:24px;">' +
                '<summary style="font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px;">Signal List (' + times.length + ' total)</summary>' +
                '<div style="max-height:500px;overflow-y:auto;border:1px solid #eee;border-radius:4px;">' + listHtml + '</div></details>';
            });
          })();
        <\\/script>\` : "";
    return html\`
      <div id="\${containerId}" style="font-family:sans-serif;">
        \${unsafeHTML(buildWarningsHtml(warnings))}

        <div id="\${containerId}-stats">
          \${unsafeHTML(buildStatsHtml(times, start, end))}
        </div>

        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
          <p style="font-size:12px;color:#70757a;margin:0;flex:1;">
            Weekday signals in <span style="background:#1a73e8;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">blue</span>,
            weekend in <span style="background:#0b8043;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">green</span>.
            Hover blocks for details. Thicker border marks Monday (week boundary).
          </p>
          \${isRandom ? unsafeHTML(\`<button id="\${containerId}-btn" style="
            display:inline-flex;align-items:center;gap:6px;padding:6px 14px;
            background:#1a73e8;color:#fff;border:none;border-radius:6px;
            font-size:13px;font-weight:500;font-family:sans-serif;
            cursor:pointer;white-space:nowrap;
          " onmouseenter="this.style.background='#1557b0'" onmouseleave="this.style.background='#1a73e8'">
            &#x21bb; Regenerate<span style="font-size:11px;opacity:.7;">&thinsp;#<span id="\${containerId}-counter">1</span></span>
          </button>\`) : ""}
        </div>

        <div id="\${containerId}-calendar">
          \${unsafeHTML(buildWeekCalendarHtml(times, start, end, minHour, maxHour))}
        </div>

        <div id="\${containerId}-list">
          <details open style="margin-top:24px;">
            <summary style="font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px;">
              Signal List (\${times.length} total)
            </summary>
            <div style="max-height:500px;overflow-y:auto;border:1px solid #eee;border-radius:4px;">
              \${unsafeHTML(buildTextListHtml(times))}
            </div>
          </details>
        </div>

        \${unsafeHTML(refreshScript)}
      </div>
    \`;
  }
}`,...(de=(se=T.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};const ve=["ClassicStratifiedRandomESM","WeekdayWeekendSplit","FixedDiaryPlusRandomSignals","FixedTimeOnly","ScheduleExplorer"];export{v as ClassicStratifiedRandomESM,k as FixedDiaryPlusRandomSignals,D as FixedTimeOnly,T as ScheduleExplorer,S as WeekdayWeekendSplit,ve as __namedExportsOrder,be as default};
