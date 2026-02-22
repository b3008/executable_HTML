import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type { AAScheduleCalendar } from "../../customElements/aa-schedule-calendar/aa-schedule-calendar";

// --- Helper to build a protocol element from storybook args ---

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
    ["signal-expiry", args.signalExpiry],
    ["reminder-after", args.reminderAfter],
    ["reminder-count", args.reminderCount],
  ];
  for (const [attr, val] of pairs) {
    if (val !== undefined && val !== null && val !== "") {
      el.setAttribute(attr, String(val));
    }
  }
  return el;
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
    signalExpiry: {
      control: "text",
      description: "How long a signal stays active (e.g. 15min, 30min, 1h)",
      table: { category: "Schedule" },
    },
    reminderAfter: {
      control: "text",
      description: "Send reminder after duration (e.g. 5min)",
      table: { category: "Schedule" },
    },
    reminderCount: {
      control: "number",
      description: "Number of reminders per signal",
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
    _seed: {
      control: false,
      table: { disable: true },
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
    signalExpiry: "15min",
    reminderAfter: "",
    reminderCount: 1,
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
    _seed: 1,
  },
  render: (args) => {
    const protocol = createProtocolElement(args);
    const start = new Date(args.rangeStart + "T00:00:00");
    const end = new Date(args.rangeEnd + "T00:00:00");

    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      return html`<p style="color:#c62828;font-family:sans-serif;">Invalid date range. Use YYYY-MM-DD format with start &le; end.</p>`;
    }

    let warnings: string[] = [];
    let times: Date[] = [];
    try {
      warnings = protocol.validate();
      times = protocol.getSignallingTimes(start, end);
    } catch (e: any) {
      warnings.push("Error generating schedule: " + e.message);
    }

    const isRandom = args.scheduleType !== "fixed";

    const cal = document.createElement("aa-schedule-calendar") as AAScheduleCalendar;
    cal.warnings = warnings;
    cal.rangeStart = start;
    cal.rangeEnd = end;
    cal.windowStart = args.windowStart || "";
    cal.windowEnd = args.windowEnd || "";
    cal.showRegenerate = isRandom;
    cal.config = protocol.getProtocol();
    cal.onregenerate = () => {
      const p = createProtocolElement(args);
      cal.config = p.getProtocol();
      const newTimes = p.getSignallingTimes(start, end);
      cal.refresh(newTimes);
    };
    // Set signals last to trigger the initial render
    cal.signals = times;

    return html`${cal}`;
  },
};
