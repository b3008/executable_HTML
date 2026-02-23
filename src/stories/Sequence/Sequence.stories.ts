import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

const defaultSource = `<aa-session>
  <aa-sequence id="demo-seq" name="demo-sequence" debug>
    <aa-screen submit-button-hidden>
      <aa-label>Step 1: Welcome</aa-label>
    </aa-screen>
    <aa-screen submit-button-hidden>
      <aa-label>Step 2: Instructions</aa-label>
    </aa-screen>
    <aa-screen submit-button-hidden>
      <aa-label>Step 3: Complete</aa-label>
    </aa-screen>
  </aa-sequence>
</aa-session>
<button onclick="document.getElementById('demo-seq').next()">Next Step</button>`;

const meta = {
  title: "Control Flow/Sequence",
  tags: ["autodocs"],
  render: () => html`${unsafeHTML(defaultSource)}`,
  parameters: {
    docs: {
      description: {
        component: [
          "Steps through its children one at a time. Each child dispatches `endEvent` to advance to the next. Commonly wraps `<aa-screen>` elements.",
          "",
          "### DOM API",
          "",
          "```js",
          "const seq = document.querySelector('aa-sequence');",
          "```",
          "",
          "| Method | Returns | Description |",
          "|---|---|---|",
          "| `seq.init()` | `void` | Initialize the sequence (hides all children) |",
          "| `seq.start()` | `void` | Start the sequence from the first child |",
          "| `seq.stop()` | `void` | Stop the sequence |",
          "| `seq.next(name?)` | `Promise<void>` | Advance to the next child, or jump to a named child |",
          "",
          "### Events",
          "",
          "| Event | Description |",
          "|---|---|",
          "| `endEvent` | Fired when the sequence completes (all children done) |",
          "",
          "### Related: `<aa-jump>`",
          "",
          "Use `<aa-jump goto=\"stepName\">` inside a sequence to jump to a named child element.",
        ].join("\n"),
      },
      source: { code: defaultSource, language: "html" },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

const withScreensSource = `<aa-session>
  <aa-sequence name="survey-sequence" debug>
    <aa-screen submit-button-text="Next">
      <aa-label>Question 1</aa-label>
      <aa-text-answer
        name="q1"
        label="What is your name?"
        type="text"
      ></aa-text-answer>
    </aa-screen>
    <aa-screen submit-button-text="Next">
      <aa-label>Question 2</aa-label>
      <aa-slider
        name="q2"
        min="1"
        max="10"
        min-label="Low"
        max-label="High"
      ></aa-slider>
    </aa-screen>
    <aa-screen submit-button-text="Finish">
      <aa-label>Thank you!</aa-label>
    </aa-screen>
  </aa-sequence>
</aa-session>`;

export const WithScreens: Story = {
  render: () => html`${unsafeHTML(withScreensSource)}`,
  parameters: {
    docs: {
      source: { code: withScreensSource, language: "html" },
    },
  },
};
