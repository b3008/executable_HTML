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
      description: {
        component: [
          "Conditional branching element. Evaluates `<aa-when>` test expressions against session memory and instantiates the first matching branch, or `<aa-otherwise>` if none match.",
          "",
          "### DOM API",
          "",
          "```js",
          "const choose = document.querySelector('aa-choose');",
          "```",
          "",
          "| Method | Returns | Description |",
          "|---|---|---|",
          "| `choose.evaluate(element)` | `any` | Evaluates the `test` attribute of the given `<aa-when>` element |",
          "| `choose.evaluateTestExpression(expr)` | `any` | Evaluates a test expression string against session memory |",
          "| `choose.replaceExpressionIdentifiersWithValues(expr)` | `string` | Substitutes variable names in an expression with their values from memory |",
          "",
          "### Child Elements",
          "",
          "| Element | Attribute | Description |",
          "|---|---|---|",
          "| `<aa-when>` | `test` | JavaScript expression evaluated against session memory (e.g., `score >= 90`) |",
          "| `<aa-otherwise>` | — | Fallback branch if no `<aa-when>` matches |",
        ].join("\n"),
      },
      source: { code: sourceCode, language: "html" },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
