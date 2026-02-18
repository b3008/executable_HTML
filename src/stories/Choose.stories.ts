import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

const sourceCode = `<aa-session name="choose-demo" debug>
  <aa-variable name="score" value="75"></aa-variable>
  <aa-choose name="grade" debug>
    <aa-when test="score >= 90">
      <aa-label>Grade: A — Excellent!</aa-label>
    </aa-when>
    <aa-when test="score >= 70">
      <aa-label>Grade: B — Good job!</aa-label>
    </aa-when>
    <aa-otherwise>
      <aa-label>Grade: C — Keep trying!</aa-label>
    </aa-otherwise>
  </aa-choose>
</aa-session>`;

const meta = {
  title: "Control Flow/Choose",
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

export const Default: Story = {};
