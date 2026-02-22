import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

// --- Helper functions ---

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function fmtDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function fmtTime(d: Date): string {
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function createProtocolElement(args: any): any {
  const el = document.createElement("aa-signal-protocol");
  const pairs: [string, any][] = [
    ["name", "interactive-preview"],
    ["schedule-type", args.scheduleType],
    ["signals-per-day", args.signalsPerDay],
    ["window-start", args.windowStart],
    ["window-end", args.windowEnd],
    ["signal-windows", args.signalWindows],
    ["min-interval", args.minInterval],
    ["fixed-times", args.fixedTimes],
    ["fixed-times-label", args.fixedTimesLabel],
    ["active-days", args.activeDays],
    ["exclude-dates", args.excludeDates],
    ["exclude-times", args.excludeTimes],
    ["weekend-signals-per-day", args.weekendSignalsPerDay],
    ["weekend-window-start", args.weekendWindowStart],
    ["weekend-window-end", args.weekendWindowEnd],
    ["weekend-signal-windows", args.weekendSignalWindows],
    ["weekend-fixed-times", args.weekendFixedTimes],
  ];
  for (const [attr, val] of pairs) {
    if (val !== undefined && val !== null && val !== "") {
      el.setAttribute(attr, String(val));
    }
  }
  return el;
}

// --- Build functions ---

function buildWarningsHtml(warnings: string[]): string {
  if (warnings.length === 0) return "";
  let s = "";
  for (const w of warnings) {
    s += `<div style="background:#fff3e0;border-left:3px solid #ff9800;padding:6px 12px;margin-bottom:4px;font-size:13px;font-family:sans-serif;">${w}</div>`;
  }
  return `<div style="margin-bottom:12px;">${s}</div>`;
}

function buildStatsHtml(signals: Date[], rangeStart: Date, rangeEnd: Date): string {
  const totalDays = Math.round((rangeEnd.getTime() - rangeStart.getTime()) / 86400000) + 1;
  const activeDates = new Set(signals.map(fmtDate));
  const avg = activeDates.size > 0 ? (signals.length / activeDates.size).toFixed(1) : "0";
  return `<div style="display:flex;gap:28px;margin-bottom:16px;font-family:sans-serif;font-size:13px;flex-wrap:wrap;">
    <div><strong>${signals.length}</strong> total signals</div>
    <div><strong>${activeDates.size}</strong> / ${totalDays} days active</div>
    <div><strong>${avg}</strong> signals / active day</div>
  </div>`;
}

function buildWeekCalendarHtml(
  signals: Date[],
  rangeStart: Date,
  rangeEnd: Date,
  minHour: number,
  maxHour: number,
): string {
  const byDate = new Map<string, Date[]>();
  for (const s of signals) {
    const key = fmtDate(s);
    if (!byDate.has(key)) byDate.set(key, []);
    byDate.get(key)!.push(s);
  }

  const PX_PER_HOUR = 52;
  const totalHours = maxHour - minHour;
  const gridHeight = totalHours * PX_PER_HOUR;

  const days: Date[] = [];
  const cur = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate());
  const endDay = new Date(rangeEnd.getFullYear(), rangeEnd.getMonth(), rangeEnd.getDate());
  while (cur <= endDay) {
    days.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let out = `<div style="display:flex;overflow-x:auto;border:1px solid #dadce0;border-radius:8px;background:#fff;">`;

  // Time gutter
  out += `<div style="width:48px;flex-shrink:0;border-right:1px solid #dadce0;">`;
  out += `<div style="height:56px;"></div>`;
  out += `<div style="position:relative;height:${gridHeight}px;">`;
  for (let h = minHour; h <= maxHour; h++) {
    const top = (h - minHour) * PX_PER_HOUR;
    if (h > minHour) {
      out += `<div style="position:absolute;top:${top - 7}px;right:8px;font-size:10px;color:#70757a;font-family:sans-serif;white-space:nowrap;">${pad(h)}:00</div>`;
    }
  }
  out += `</div></div>`;

  // Day columns
  for (let di = 0; di < days.length; di++) {
    const day = days[di];
    const ds = fmtDate(day);
    const daySigs = (byDate.get(ds) || []).sort((a, b) => a.getTime() - b.getTime());
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    const isMonday = day.getDay() === 1 && di > 0;
    const dayName = dayNames[day.getDay()];
    const monthName = monthNames[day.getMonth()];
    const hasSignals = daySigs.length > 0;
    const colBg = isWeekend ? "#f8f9fa" : "#fff";
    const leftBorder = isMonday ? "2px solid #dadce0" : "1px solid #ebebeb";

    out += `<div style="flex:1;min-width:72px;position:relative;border-left:${leftBorder};background:${colBg};">`;

    // Header
    const dateColor = hasSignals ? (isWeekend ? "#0b8043" : "#1a73e8") : "#70757a";
    out += `<div style="height:56px;padding:6px 4px 2px;text-align:center;border-bottom:1px solid #dadce0;font-family:sans-serif;">`;
    out += `<div style="font-size:10px;color:#70757a;text-transform:uppercase;letter-spacing:.5px;">${dayName}</div>`;
    out += `<div style="font-size:22px;font-weight:${hasSignals ? 500 : 400};color:${dateColor};line-height:1.3;">${day.getDate()}</div>`;
    out += `<div style="font-size:9px;color:#70757a;">${monthName}</div>`;
    out += `</div>`;

    // Grid area
    out += `<div style="position:relative;height:${gridHeight}px;">`;

    // Hour lines
    for (let h = minHour; h <= maxHour; h++) {
      const top = (h - minHour) * PX_PER_HOUR;
      if (h > minHour) {
        out += `<div style="position:absolute;top:${top}px;left:0;right:0;border-top:1px solid #ebebeb;"></div>`;
      }
      if (h < maxHour) {
        const halfTop = top + PX_PER_HOUR / 2;
        out += `<div style="position:absolute;top:${halfTop}px;left:0;right:0;border-top:1px dotted #f5f5f5;"></div>`;
      }
    }

    // Signal blocks
    for (const sig of daySigs) {
      const minuteOfDay = sig.getHours() * 60 + sig.getMinutes();
      const top = ((minuteOfDay - minHour * 60) / 60) * PX_PER_HOUR;
      const time = fmtTime(sig);
      const blockBg = isWeekend ? "#0b8043" : "#1a73e8";
      out += `<div title="${dayName} ${day.getDate()} ${monthName} at ${time}" style="position:absolute;top:${Math.round(top)}px;left:2px;right:2px;height:20px;background:${blockBg};color:#fff;font-size:10px;font-weight:500;font-family:sans-serif;line-height:20px;padding:0 4px;border-radius:4px;overflow:hidden;white-space:nowrap;z-index:1;box-shadow:0 1px 2px rgba(0,0,0,.2);">${time}</div>`;
    }

    out += `</div></div>`;
  }

  out += `</div>`;
  return out;
}

function buildTextListHtml(signals: Date[]): string {
  if (signals.length === 0) {
    return '<p style="color:#888;font-family:sans-serif;">No signals generated for this date range.</p>';
  }

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let out = '<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:13px;">';
  out += "<thead><tr>";
  out += '<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Date</th>';
  out += '<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Day</th>';
  out += '<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Time</th>';
  out += '<th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">#</th>';
  out += "</tr></thead><tbody>";

  let prevDs = "";
  let idx = 0;
  for (const s of signals) {
    const ds = fmtDate(s);
    const newDay = ds !== prevDs;
    if (newDay) idx = 0;
    idx++;
    const we = s.getDay() === 0 || s.getDay() === 6;
    const bt = newDay && prevDs ? "border-top:1px solid #ddd;" : "";
    const rb = we ? "background:#fafafa;" : "";
    prevDs = ds;
    const dl = `${monthNames[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()}`;

    out += `<tr style="${bt}${rb}">`;
    out += `<td style="padding:3px 10px;white-space:nowrap;color:${newDay ? "#333" : "#ccc"};">${newDay ? dl : ""}</td>`;
    out += `<td style="padding:3px 10px;color:${newDay ? "#333" : "#ccc"};">${newDay ? dayNames[s.getDay()] : ""}</td>`;
    out += `<td style="padding:3px 10px;font-variant-numeric:tabular-nums;">${fmtTime(s)}</td>`;
    out += `<td style="padding:3px 10px;color:#888;">${idx}</td>`;
    out += "</tr>";
  }

  out += "</tbody></table>";
  return out;
}

// --- Example configurations ---

const classicESM = `<aa-signal-protocol
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
</aa-signal-protocol>`;

const weekdayWeekendSplit = `<aa-signal-protocol
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
</aa-signal-protocol>`;

const fixedDiaryPlusRandom = `<aa-signal-protocol
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
</aa-signal-protocol>`;

const fixedTimeOnly = `<aa-signal-protocol
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
</aa-signal-protocol>`;

function renderProtocolSummary(sourceCode: string) {
  return html`
    <div style="font-family: monospace; padding: 16px;">
      <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto; white-space: pre-wrap;">${sourceCode}</pre>
      ${unsafeHTML(sourceCode)}
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
      </script>
      <h3 style="font-family: sans-serif; margin-top: 16px;">Parsed Protocol</h3>
      <pre id="protocol-summary" style="background: #e8f5e9; padding: 16px; border-radius: 4px; overflow-x: auto; white-space: pre-wrap;"></pre>
    </div>
  `;
}

// --- Meta ---

const meta = {
  title: "Data & Utility/SignalProtocol",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "A declarative, non-rendering element that specifies when and how participants are signalled in ESM/EMA studies. Wraps `<aa-session>` as its parent to express the scheduling relationship.",
          "",
          "### DOM API",
          "",
          "```js",
          "const protocol = document.querySelector('aa-signal-protocol');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `protocol.getProtocol()` | `SignalProtocolConfig` | Returns a structured object of all protocol attributes |",
          "| `protocol.getSignallingTimes(start, end)` | `Date[]` | Computes concrete signal times for a date range. Supports `fixed`, `random`, and `stratified-random` schedules with window/exclusion handling |",
          "| `protocol.validate()` | `string[]` | Validates the configuration and returns an array of warning messages |",
          "| `protocol.toJSON()` | `object` | JSON representation of the protocol and its children |",
          "",
          "### Events",
          "",
          "| Event | Description |",
          "|---|---|",
          "| `protocolReady` | Fired when the protocol element is connected and validated |",
          "",
          "### Schedule Types",
          "",
          "| Type | Description |",
          "|---|---|",
          "| `fixed` | Signals at exact times specified by `fixed-times` |",
          "| `random` | Signals uniformly distributed within time windows |",
          "| `stratified-random` | Day divided into N equal blocks, one random signal per block |",
          "",
          "### Duration Micro-Syntax",
          "",
          "Used by `min-interval`, `signal-expiry`, `reminder-after`: `30s`, `15min`, `2h`, `1d`",
        ].join("\n"),
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// --- Example stories ---

export const ClassicStratifiedRandomESM: Story = {
  render: () => renderProtocolSummary(classicESM),
  parameters: {
    docs: { source: { code: classicESM, language: "html" } },
  },
};

export const WeekdayWeekendSplit: Story = {
  render: () => renderProtocolSummary(weekdayWeekendSplit),
  parameters: {
    docs: { source: { code: weekdayWeekendSplit, language: "html" } },
  },
};

export const FixedDiaryPlusRandomSignals: Story = {
  render: () => renderProtocolSummary(fixedDiaryPlusRandom),
  parameters: {
    docs: { source: { code: fixedDiaryPlusRandom, language: "html" } },
  },
};

export const FixedTimeOnly: Story = {
  render: () => renderProtocolSummary(fixedTimeOnly),
  parameters: {
    docs: { source: { code: fixedTimeOnly, language: "html" } },
  },
};

// --- Interactive schedule explorer ---

export const ScheduleExplorer: Story = {
  argTypes: {
    scheduleType: {
      control: { type: "select" },
      options: ["fixed", "random", "stratified-random"],
      table: { category: "Schedule" },
    },
    signalsPerDay: {
      control: "number",
      description: "Number of random/stratified signals per day",
      table: { category: "Schedule" },
    },
    minInterval: {
      control: "text",
      description: "Min time between signals (e.g. 15min, 30min, 1h)",
      table: { category: "Schedule" },
    },
    fixedTimes: {
      control: "text",
      description: "Comma-separated HH:MM (e.g. 07:30,22:00)",
      table: { category: "Schedule" },
    },
    fixedTimesLabel: {
      control: "text",
      description: "Label for fixed signals (e.g. diary)",
      table: { category: "Schedule" },
    },
    windowStart: {
      control: "text",
      description: "Daily window start (HH:MM)",
      table: { category: "Time Windows" },
    },
    windowEnd: {
      control: "text",
      description: "Daily window end (HH:MM)",
      table: { category: "Time Windows" },
    },
    signalWindows: {
      control: "text",
      description: "Explicit windows, overrides start/end (e.g. 08:00-12:00;13:00-20:00)",
      table: { category: "Time Windows" },
    },
    excludeTimes: {
      control: "text",
      description: "Daily blackout ranges (e.g. 12:00-13:00;17:00-18:00)",
      table: { category: "Time Windows" },
    },
    activeDays: {
      control: { type: "select" },
      options: ["all", "weekdays", "weekends", "Mon,Wed,Fri", "Tue,Thu"],
      description: "Which days are active",
      table: { category: "Active Days" },
    },
    excludeDates: {
      control: "text",
      description: "Comma-separated YYYY-MM-DD dates to skip",
      table: { category: "Active Days" },
    },
    weekendSignalsPerDay: {
      control: "text",
      description: "Override signals-per-day on Sat/Sun (leave empty to inherit)",
      table: { category: "Weekend Overrides" },
    },
    weekendWindowStart: {
      control: "text",
      description: "Override window-start on Sat/Sun",
      table: { category: "Weekend Overrides" },
    },
    weekendWindowEnd: {
      control: "text",
      description: "Override window-end on Sat/Sun",
      table: { category: "Weekend Overrides" },
    },
    weekendSignalWindows: {
      control: "text",
      description: "Override signal-windows on Sat/Sun",
      table: { category: "Weekend Overrides" },
    },
    weekendFixedTimes: {
      control: "text",
      description: "Override fixed-times on Sat/Sun",
      table: { category: "Weekend Overrides" },
    },
    rangeStart: {
      control: "text",
      description: "Start of date range (YYYY-MM-DD)",
      table: { category: "Date Range" },
    },
    rangeEnd: {
      control: "text",
      description: "End of date range (YYYY-MM-DD)",
      table: { category: "Date Range" },
    },
    _reshuffle: {
      control: { type: "number", min: 1 },
      description: "Change to regenerate random schedules",
      table: { category: "Date Range" },
    },
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
    _reshuffle: 1,
  },
  render: (args) => {
    const el = createProtocolElement(args);
    const start = new Date(args.rangeStart + "T00:00:00");
    const end = new Date(args.rangeEnd + "T00:00:00");

    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      return html`<p style="color:#c62828;font-family:sans-serif;">Invalid date range. Use YYYY-MM-DD format with start &le; end.</p>`;
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
    let minHour = 6, maxHour = 23;
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

    return html`
      <div style="font-family:sans-serif;">
        ${unsafeHTML(buildWarningsHtml(warnings))}
        ${unsafeHTML(buildStatsHtml(times, start, end))}

        <p style="font-size:12px;color:#70757a;margin:0 0 10px;">
          Weekday signals in <span style="background:#1a73e8;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">blue</span>,
          weekend in <span style="background:#0b8043;color:#fff;padding:1px 6px;border-radius:3px;font-size:11px;">green</span>.
          Hover blocks for details. Thicker border marks Monday (week boundary).
        </p>

        ${unsafeHTML(buildWeekCalendarHtml(times, start, end, minHour, maxHour))}

        <details open style="margin-top:24px;">
          <summary style="font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px;">
            Signal List (${times.length} total)
          </summary>
          <div style="max-height:500px;overflow-y:auto;border:1px solid #eee;border-radius:4px;">
            ${unsafeHTML(buildTextListHtml(times))}
          </div>
        </details>
      </div>
    `;
  },
};
