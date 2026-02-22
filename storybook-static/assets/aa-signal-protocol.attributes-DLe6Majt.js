import{j as e}from"./jsx-runtime-xrKziPlz.js";import{M as r}from"./index-DuX6iVfj.js";import{u as d}from"./index-7wJ7cBts.js";import"./iframe-DEer1LHX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";function s(i){const n=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",em:"em"},d(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data & Utility/SignalProtocol/Attribute Reference"}),`
`,e.jsxs(n.h1,{id:"aa-signal-protocol-attribute-reference",children:[e.jsx(n.code,{children:"<aa-signal-protocol>"})," Attribute Reference"]}),`
`,e.jsxs(n.p,{children:["A declarative, non-rendering element that specifies when and how participants are signalled in ESM/EMA studies. Place it in the DOM wrapping an ",e.jsx(n.code,{children:"<aa-session>"})," to express the scheduling relationship."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-signal-protocol
  name="my-study"
  schedule-type="stratified-random"
  signals-per-day="8"
  window-start="09:00"
  window-end="22:00"
  min-interval="20min"
  signal-expiry="15min">
  <aa-session name="questionnaire">
    <template>...</template>
  </aa-session>
</aa-signal-protocol>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"schedule-type",children:"Schedule Type"}),`
`,e.jsx(n.h3,{id:"schedule-type-1",children:e.jsx(n.code,{children:"schedule-type"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:'"fixed"'})," · ",e.jsx(n.code,{children:'"random"'})," · ",e.jsx(n.code,{children:'"stratified-random"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Required:"})," Yes"]}),`
`]}),`
`,e.jsx(n.p,{children:"Determines the algorithm used to place signals within each day."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"fixed"})})," — Signals fire at exact clock times specified by ",e.jsx(n.code,{children:"fixed-times"}),". No randomisation. The ",e.jsx(n.code,{children:"signals-per-day"}),", ",e.jsx(n.code,{children:"window-start"}),"/",e.jsx(n.code,{children:"window-end"}),", and ",e.jsx(n.code,{children:"signal-windows"})," attributes are ignored."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"random"})})," — Signals are placed uniformly at random within the day's time windows. Each candidate time is checked against ",e.jsx(n.code,{children:"min-interval"}),"; if it's too close to an already-placed signal the algorithm retries (up to 100 attempts per signal). This means the actual count ",e.jsx(n.em,{children:"may"})," be less than ",e.jsx(n.code,{children:"signals-per-day"})," in heavily constrained configurations."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"stratified-random"})})," — The total available window time is divided into N equal-length blocks (where N = ",e.jsx(n.code,{children:"signals-per-day"}),"). One signal is placed at a random point within each block. This guarantees more even distribution across the day than pure random, while still being unpredictable to the participant. Each block placement also respects ",e.jsx(n.code,{children:"min-interval"})," (with up to 50 retries per block)."]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"signal-count",children:"Signal Count"}),`
`,e.jsx(n.h3,{id:"signals-per-day",children:e.jsx(n.code,{children:"signals-per-day"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Integer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," — (required for ",e.jsx(n.code,{children:"random"})," and ",e.jsx(n.code,{children:"stratified-random"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The number of random/stratified signals to generate per active day. Ignored when ",e.jsx(n.code,{children:'schedule-type="fixed"'}),"."]}),`
`,e.jsxs(n.p,{children:["Validation checks that the configuration is feasible: the total window duration divided by ",e.jsx(n.code,{children:"signals-per-day"})," must be at least ",e.jsx(n.code,{children:"min-interval"}),". For example, 6 signals in a 2-hour window with a 30-minute minimum interval requires at least 180 minutes of window time — a 120-minute window would trigger a warning."]}),`
`,e.jsx(n.h3,{id:"weekend-signals-per-day",children:e.jsx(n.code,{children:"weekend-signals-per-day"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Integer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," Inherits ",e.jsx(n.code,{children:"signals-per-day"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Overrides ",e.jsx(n.code,{children:"signals-per-day"})," on Saturdays and Sundays. Useful when studies need fewer prompts on weekends. If unset, the weekday value applies to all days."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"time-windows",children:"Time Windows"}),`
`,e.jsxs(n.p,{children:["Time windows define ",e.jsx(n.em,{children:"when during the day"})," signals are allowed. There are two ways to specify them."]}),`
`,e.jsxs(n.h3,{id:"window-start--window-end",children:[e.jsx(n.code,{children:"window-start"})," / ",e.jsx(n.code,{children:"window-end"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:'"HH:MM"'})," (24-hour)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Define a single continuous window. For example, ",e.jsx(n.code,{children:'window-start="09:00" window-end="22:00"'})," allows signals between 9 AM and 10 PM."]}),`
`,e.jsx(n.h3,{id:"signal-windows",children:e.jsx(n.code,{children:"signal-windows"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Semicolon-separated ",e.jsx(n.code,{children:'"HH:MM-HH:MM"'})," ranges"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:'"08:00-12:00;13:00-20:00"'})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Defines ",e.jsx(n.strong,{children:"multiple non-contiguous time ranges"})," within a day. This is the attribute to use when the schedule has gaps — for example, excluding a lunch break:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`signal-windows="08:00-12:00;13:00-20:00"
`})}),`
`,e.jsxs(n.p,{children:["Signals can fire 8 AM–noon and 1 PM–8 PM, but ",e.jsx(n.em,{children:"not"})," during the 12:00–13:00 gap."]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Interaction with ",e.jsx(n.code,{children:"window-start"}),"/",e.jsx(n.code,{children:"window-end"}),":"]})," If both ",e.jsx(n.code,{children:"signal-windows"})," and ",e.jsx(n.code,{children:"window-start"}),"/",e.jsx(n.code,{children:"window-end"})," are set, ",e.jsx(n.code,{children:"signal-windows"})," takes precedence and validation emits a warning about the redundancy. Use one or the other, not both."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"How it works internally:"})," For ",e.jsx(n.code,{children:"stratified-random"}),", the total available minutes across all ranges are flattened into a single pool and divided into N equal blocks. For ",e.jsx(n.code,{children:"random"}),", signals are distributed uniformly across the combined pool. The gaps between ranges are never candidates for signal placement."]}),`
`,e.jsxs(n.h3,{id:"weekend-window-start--weekend-window-end",children:[e.jsx(n.code,{children:"weekend-window-start"})," / ",e.jsx(n.code,{children:"weekend-window-end"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:'"HH:MM"'})," (24-hour)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," Inherits weekday values"]}),`
`]}),`
`,e.jsx(n.p,{children:"Override the single-window start/end on Saturdays and Sundays. For example, participants may sleep in on weekends:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`window-start="08:00" window-end="22:00"
weekend-window-start="10:00" weekend-window-end="23:00"
`})}),`
`,e.jsx(n.h3,{id:"weekend-signal-windows",children:e.jsx(n.code,{children:"weekend-signal-windows"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Semicolon-separated ",e.jsx(n.code,{children:'"HH:MM-HH:MM"'})," ranges"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," Inherits ",e.jsx(n.code,{children:"signal-windows"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Override the multi-range windows on Saturdays and Sundays."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"time-exclusions",children:"Time Exclusions"}),`
`,e.jsx(n.h3,{id:"exclude-times",children:e.jsx(n.code,{children:"exclude-times"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Semicolon-separated ",e.jsx(n.code,{children:'"HH:MM-HH:MM"'})," ranges"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:'"12:00-13:00;17:00-18:00"'})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Daily blackout periods when signals must ",e.jsx(n.em,{children:"not"})," fire. These are subtracted from the effective windows ",e.jsx(n.em,{children:"after"})," window resolution. Unlike ",e.jsx(n.code,{children:"signal-windows"})," gaps, exclusions are applied uniformly to every active day (both weekdays and weekends)."]}),`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"exclude-times"})," completely covers the signal windows, validation warns and signal generation returns zero signals for that day."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example — lunch and commute blackout:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-signal-protocol
  signal-windows="08:00-12:00;13:00-20:00"
  exclude-times="12:00-13:00;17:00-18:00"
  ...>
`})}),`
`,e.jsx(n.p,{children:"Effective windows become: 08:00–12:00 and 13:00–17:00 and 18:00–20:00."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"fixed-times",children:"Fixed Times"}),`
`,e.jsx(n.h3,{id:"fixed-times-1",children:e.jsx(n.code,{children:"fixed-times"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Comma-separated ",e.jsx(n.code,{children:'"HH:MM"'})," times"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:'"07:30,22:00"'})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Exact clock times at which signals fire every active day. Required when ",e.jsx(n.code,{children:'schedule-type="fixed"'}),"."]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"schedule-type"})," is ",e.jsx(n.code,{children:"random"})," or ",e.jsx(n.code,{children:"stratified-random"}),", fixed times are ",e.jsx(n.em,{children:"appended"})," to the random signals — they are generated independently and do not count towards ",e.jsx(n.code,{children:"signals-per-day"}),". A fixed signal at 10:00 can coexist with a random signal at 10:05, even if that would violate ",e.jsx(n.code,{children:"min-interval"})," (the min-interval constraint only applies between random signals)."]}),`
`,e.jsx(n.h3,{id:"fixed-times-label",children:e.jsx(n.code,{children:"fixed-times-label"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:'"diary"'})]}),`
`]}),`
`,e.jsx(n.p,{children:'An optional label that describes the purpose of the fixed signals. Shown in the calendar visualisation on fixed signal blocks (e.g. "10:00 · diary"). Purely cosmetic — has no effect on scheduling.'}),`
`,e.jsx(n.h3,{id:"weekend-fixed-times",children:e.jsx(n.code,{children:"weekend-fixed-times"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Comma-separated ",e.jsx(n.code,{children:'"HH:MM"'})," times"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," Inherits ",e.jsx(n.code,{children:"fixed-times"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Override the fixed-time schedule on Saturdays and Sundays."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"interval--spacing",children:"Interval & Spacing"}),`
`,e.jsx(n.h3,{id:"min-interval",children:e.jsx(n.code,{children:"min-interval"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Duration string"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"15min"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:'"20min"'}),", ",e.jsx(n.code,{children:'"1h"'}),", ",e.jsx(n.code,{children:'"30s"'})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The minimum time that must elapse between any two ",e.jsx(n.em,{children:"random"})," signals on the same day. During generation, a candidate signal is rejected if it falls within ",e.jsx(n.code,{children:"min-interval"})," of an already-placed signal (the algorithm retries with a new random position)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Duration micro-syntax:"})," Accepts ",e.jsx(n.code,{children:"30s"}),", ",e.jsx(n.code,{children:"15min"}),", ",e.jsx(n.code,{children:"2h"}),", ",e.jsx(n.code,{children:"1d"})," — a number followed by a unit (",e.jsx(n.code,{children:"s"}),"/",e.jsx(n.code,{children:"sec"}),", ",e.jsx(n.code,{children:"min"}),", ",e.jsx(n.code,{children:"h"}),"/",e.jsx(n.code,{children:"hr"}),", ",e.jsx(n.code,{children:"d"}),")."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Feasibility:"})," Validation checks that ",e.jsx(n.code,{children:"total_window_minutes / signals-per-day >= min-interval"}),". A warning is emitted if the schedule is infeasible."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Scope:"})," Only enforced between random/stratified signals. Fixed-time signals are exempt — they always fire at their specified times regardless of proximity to random signals."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"signal-expiry",children:"Signal Expiry"}),`
`,e.jsx(n.h3,{id:"signal-expiry-1",children:e.jsx(n.code,{children:"signal-expiry"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Duration string"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"15min"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:'"30min"'}),", ",e.jsx(n.code,{children:'"1h"'})]}),`
`]}),`
`,e.jsx(n.p,{children:'How long a signal stays active (the "response window"). After this duration the signal expires and the participant can no longer respond to it. In the calendar visualisation, the block height is proportional to this value — a 30-minute expiry appears taller than a 15-minute one.'}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"reminders",children:"Reminders"}),`
`,e.jsx(n.h3,{id:"reminder-after",children:e.jsx(n.code,{children:"reminder-after"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Duration string"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," — (no reminders)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:'"5min"'})]}),`
`]}),`
`,e.jsx(n.p,{children:"If set, a reminder is sent this many minutes after each signal. The reminder notifies the participant again in case they missed the original signal."}),`
`,e.jsx(n.h3,{id:"reminder-count",children:e.jsx(n.code,{children:"reminder-count"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Integer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"1"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:"2"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Number of reminders per signal. With ",e.jsx(n.code,{children:'reminder-after="5min"'})," and ",e.jsx(n.code,{children:'reminder-count="2"'}),", reminders fire at +5 min and +10 min after the signal. In the calendar visualisation, each reminder appears as a small orange triangle marker."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"study-duration",children:"Study Duration"}),`
`,e.jsx(n.p,{children:"There are two ways to define when the study runs."}),`
`,e.jsx(n.h3,{id:"study-days",children:e.jsx(n.code,{children:"study-days"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Integer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:"14"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The number of days the study should run. Used for informational/planning purposes. When calling ",e.jsx(n.code,{children:"getSignallingTimes(start, end)"})," you provide the actual date range explicitly — ",e.jsx(n.code,{children:"study-days"})," does not constrain that range."]}),`
`,e.jsxs(n.h3,{id:"start-date--end-date",children:[e.jsx(n.code,{children:"start-date"})," / ",e.jsx(n.code,{children:"end-date"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:'"YYYY-MM-DD"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Explicit start and end dates for the study. Like ",e.jsx(n.code,{children:"study-days"}),", these are informational — the actual date range used for signal generation is determined by the arguments to ",e.jsx(n.code,{children:"getSignallingTimes()"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"active-days",children:"Active Days"}),`
`,e.jsx(n.h3,{id:"active-days-1",children:e.jsx(n.code,{children:"active-days"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," String"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"all"'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Controls which days of the week are active (i.e. receive signals). Days outside this specification are skipped entirely — no signals are generated."}),`
`,e.jsxs(n.p,{children:[`| Value | Meaning |
|---|---|
| `,e.jsx(n.code,{children:'"all"'}),` | Every day (default) |
| `,e.jsx(n.code,{children:'"weekdays"'}),` | Monday through Friday |
| `,e.jsx(n.code,{children:'"weekends"'}),` | Saturday and Sunday |
| `,e.jsx(n.code,{children:'"Mon,Wed,Fri"'})," | Comma-separated day names (3-letter or full) |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Interaction with weekend overrides:"})," If ",e.jsx(n.code,{children:'active-days="weekdays"'}),", any ",e.jsx(n.code,{children:"weekend-*"})," attributes are effectively dead code — they will never apply since weekends are inactive. Validation emits a warning in this case."]}),`
`,e.jsx(n.h3,{id:"exclude-dates",children:e.jsx(n.code,{children:"exclude-dates"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type:"})," Comma-separated ",e.jsx(n.code,{children:'"YYYY-MM-DD"'})," dates"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default:"})," —"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example:"})," ",e.jsx(n.code,{children:'"2025-01-15,2025-01-20"'})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Specific dates to skip entirely, regardless of ",e.jsx(n.code,{children:"active-days"}),". Useful for holidays or participant-specific unavailable dates. Validation checks that each value is a valid ",e.jsx(n.code,{children:"YYYY-MM-DD"})," date."]}),`
`,e.jsx(n.p,{children:"In the calendar visualisation, excluded dates appear with a dimmed column and the date number crossed out."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attribute-summary-table",children:"Attribute Summary Table"}),`
`,e.jsxs(n.p,{children:[`| Attribute | Format | Default | Used by |
|---|---|---|---|
| `,e.jsx(n.code,{children:"schedule-type"})," | ",e.jsx(n.code,{children:"fixed"})," · ",e.jsx(n.code,{children:"random"})," · ",e.jsx(n.code,{children:"stratified-random"}),` | — | All |
| `,e.jsx(n.code,{children:"signals-per-day"})," | Integer | — | ",e.jsx(n.code,{children:"random"}),", ",e.jsx(n.code,{children:"stratified-random"}),` |
| `,e.jsx(n.code,{children:"window-start"})," | ",e.jsx(n.code,{children:"HH:MM"})," | — | ",e.jsx(n.code,{children:"random"}),", ",e.jsx(n.code,{children:"stratified-random"}),` |
| `,e.jsx(n.code,{children:"window-end"})," | ",e.jsx(n.code,{children:"HH:MM"})," | — | ",e.jsx(n.code,{children:"random"}),", ",e.jsx(n.code,{children:"stratified-random"}),` |
| `,e.jsx(n.code,{children:"signal-windows"})," | ",e.jsx(n.code,{children:"HH:MM-HH:MM;..."})," | — | ",e.jsx(n.code,{children:"random"}),", ",e.jsx(n.code,{children:"stratified-random"}),` |
| `,e.jsx(n.code,{children:"min-interval"})," | Duration | ",e.jsx(n.code,{children:"15min"})," | ",e.jsx(n.code,{children:"random"}),", ",e.jsx(n.code,{children:"stratified-random"}),` |
| `,e.jsx(n.code,{children:"signal-expiry"})," | Duration | ",e.jsx(n.code,{children:"15min"}),` | All (response window) |
| `,e.jsx(n.code,{children:"reminder-after"}),` | Duration | — | All |
| `,e.jsx(n.code,{children:"reminder-count"})," | Integer | ",e.jsx(n.code,{children:"1"})," | All (requires ",e.jsx(n.code,{children:"reminder-after"}),`) |
| `,e.jsx(n.code,{children:"fixed-times"})," | ",e.jsx(n.code,{children:"HH:MM,HH:MM,..."})," | — | All (required for ",e.jsx(n.code,{children:"fixed"}),`) |
| `,e.jsx(n.code,{children:"fixed-times-label"}),` | String | — | All (cosmetic) |
| `,e.jsx(n.code,{children:"active-days"})," | ",e.jsx(n.code,{children:"all"})," · ",e.jsx(n.code,{children:"weekdays"})," · ",e.jsx(n.code,{children:"weekends"})," · names | ",e.jsx(n.code,{children:"all"}),` | All |
| `,e.jsx(n.code,{children:"exclude-dates"})," | ",e.jsx(n.code,{children:"YYYY-MM-DD,..."}),` | — | All |
| `,e.jsx(n.code,{children:"exclude-times"})," | ",e.jsx(n.code,{children:"HH:MM-HH:MM;..."}),` | — | All |
| `,e.jsx(n.code,{children:"study-days"}),` | Integer | — | Informational |
| `,e.jsx(n.code,{children:"start-date"})," | ",e.jsx(n.code,{children:"YYYY-MM-DD"}),` | — | Informational |
| `,e.jsx(n.code,{children:"end-date"})," | ",e.jsx(n.code,{children:"YYYY-MM-DD"}),` | — | Informational |
| `,e.jsx(n.code,{children:"weekend-signals-per-day"}),` | Integer | inherits | Weekend override |
| `,e.jsx(n.code,{children:"weekend-window-start"})," | ",e.jsx(n.code,{children:"HH:MM"}),` | inherits | Weekend override |
| `,e.jsx(n.code,{children:"weekend-window-end"})," | ",e.jsx(n.code,{children:"HH:MM"}),` | inherits | Weekend override |
| `,e.jsx(n.code,{children:"weekend-signal-windows"})," | ",e.jsx(n.code,{children:"HH:MM-HH:MM;..."}),` | inherits | Weekend override |
| `,e.jsx(n.code,{children:"weekend-fixed-times"})," | ",e.jsx(n.code,{children:"HH:MM,HH:MM,..."})," | inherits | Weekend override |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dom-api",children:"DOM API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const protocol = document.querySelector('aa-signal-protocol');
`})}),`
`,e.jsxs(n.p,{children:[`| Method / Property | Returns | Description |
|---|---|---|
| `,e.jsx(n.code,{children:"getProtocol()"})," | ",e.jsx(n.code,{children:"SignalProtocolConfig"}),` | Structured object of all parsed attribute values |
| `,e.jsx(n.code,{children:"getSignallingTimes(start, end)"})," | ",e.jsx(n.code,{children:"Date[]"}),` | Concrete signal times for the given date range |
| `,e.jsx(n.code,{children:"validate()"})," | ",e.jsx(n.code,{children:"string[]"}),` | Array of warning messages (empty if valid) |
| `,e.jsx(n.code,{children:"toJSON()"})," | ",e.jsx(n.code,{children:"object"})," | JSON-serialisable representation |"]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[`| Event | When |
|---|---|
| `,e.jsx(n.code,{children:"protocolReady"})," | Fired asynchronously when the element connects and validates |"]})]})}function g(i={}){const{wrapper:n}=Object.assign({},d(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(s,i)})):s(i)}export{g as default};
