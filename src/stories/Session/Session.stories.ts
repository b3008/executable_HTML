import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

const sourceCode = `<aa-session name="demo-survey" debug>
  <aa-memory></aa-memory>
  <aa-sequence name="survey-flow">
    <aa-screen submit-button-text="Next">
      <aa-label>What is your favorite color?</aa-label>
      <aa-multiple-choice name="favColor">
        <aa-choice-item value="red">Red</aa-choice-item>
        <aa-choice-item value="blue">Blue</aa-choice-item>
        <aa-choice-item value="green">Green</aa-choice-item>
      </aa-multiple-choice>
    </aa-screen>
    <aa-screen submit-button-text="Submit">
      <aa-label>How much do you like it?</aa-label>
      <aa-slider name="liking" min="0" max="100" min-label="Not at all" max-label="Love it"></aa-slider>
    </aa-screen>
  </aa-sequence>
</aa-session>`;

const meta = {
  title: "Data & Utility/Session",
  tags: ["autodocs"],
  render: () => html`${unsafeHTML(sourceCode)}`,
  parameters: {
    docs: {
      description: {
        component: [
          "The top-level container for an assessment. Manages session identity, memory, and data collection. Wraps its content in a `<template>` that is cloned and instantiated on `run()`.",
          "",
          "### DOM API",
          "",
          "```js",
          "const session = document.querySelector('aa-session');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `session.run()` | `void` | Clone the template and attach children to begin the session |",
          "| `session.getData(name)` | `any` | Retrieve a value from session memory |",
          "| `session.setData(name, value)` | `void` | Store a value in session memory |",
          "| `session.getDataDump()` | `Storage` | Return all data stored in session memory |",
          "| `session.originalChildNodes` | `NodeList` | Access the original template children |",
          "| `session.sessionId` | `string` | UUID identifying this session instance |",
          "| `session.sessionTime` | `number` | Timestamp (ms) when the session started |",
          "| `session.toJSON()` | `object` | JSON representation of the session and its template |",
          "| `session.toJSL()` | `string` | JSL (JavaScript Literal) representation |",
          "",
          "### Events",
          "",
          "| Event | Detail | Description |",
          "|---|---|---|",
          "| `sessionReady` | — | Fired when the session has initialized |",
          "| `sessionInputSubmit` | `{ input: AASessionInput }` | Fired on each screen submission with session-level metadata |",
          "| `sessionEndEvent` | `'sessionEnd'` | Fired when the session completes |",
        ].join("\n"),
      },
      source: { code: sourceCode, language: "html" },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const MiniSurvey: Story = {};
