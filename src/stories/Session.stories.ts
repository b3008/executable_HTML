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
      source: { code: sourceCode, language: "html" },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const MiniSurvey: Story = {};
