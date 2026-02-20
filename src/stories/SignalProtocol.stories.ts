import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

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

const meta = {
  title: "Data & Utility/SignalProtocol",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ClassicStratifiedRandomESM: Story = {
  render: () => renderProtocolSummary(classicESM),
  parameters: {
    docs: {
      source: { code: classicESM, language: "html" },
    },
  },
};

export const WeekdayWeekendSplit: Story = {
  render: () => renderProtocolSummary(weekdayWeekendSplit),
  parameters: {
    docs: {
      source: { code: weekdayWeekendSplit, language: "html" },
    },
  },
};

export const FixedDiaryPlusRandomSignals: Story = {
  render: () => renderProtocolSummary(fixedDiaryPlusRandom),
  parameters: {
    docs: {
      source: { code: fixedDiaryPlusRandom, language: "html" },
    },
  },
};

export const FixedTimeOnly: Story = {
  render: () => renderProtocolSummary(fixedTimeOnly),
  parameters: {
    docs: {
      source: { code: fixedTimeOnly, language: "html" },
    },
  },
};
