import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Data & Utility/Variable",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "Stores a named value in session memory. Removes itself from the DOM after setting the value (unless `debug` is set).",
          "",
          "### DOM API",
          "",
          "```js",
          "const variable = document.querySelector('aa-variable');",
          "```",
          "",
          "| Method | Returns | Description |",
          "|---|---|---|",
          "| `variable.evaluateValueExpression(expr)` | `any` | Evaluates a value expression (supports arithmetic with variable references) |",
          "| `variable.replaceExpressionIdentifiersWithValues(expr)` | `string` | Substitutes known variable names in an expression with their values from memory |",
          "",
          "### Notes",
          "",
          "- String values should be in single quotes: `value=\"'hello'\"`",
          "- Unquoted values are treated as references to other variables: `value=\"otherVar\"`",
          "- The element dispatches `endEvent` and removes itself from the DOM after storing its value",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    value: { control: "text" },
  },
  render: (args) => html`
    <aa-variable
      name="${args.name}"
      value="${args.value}"
      debug
    ></aa-variable>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const StringValue: Story = {
  args: {
    name: "greeting",
    value: "'Hello, World!'",
  },
};

export const NumericValue: Story = {
  args: {
    name: "score",
    value: "42",
  },
};
