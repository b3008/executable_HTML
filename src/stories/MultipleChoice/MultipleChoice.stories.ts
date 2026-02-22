import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Multiple Choice",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "A single-select radio group. Contains `<aa-choice-item>` children.",
          "",
          "### DOM API",
          "",
          "```js",
          "const mc = document.querySelector('aa-multiple-choice');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `mc.value` | `string \\| undefined` | Get or set the selected value |",
          "| `mc.updateState(checkedNode)` | `void` | Update internal state when an item changes |",
          "| `mc.getValueOfSelectedItem()` | `string \\| undefined` | Returns the value of the currently selected item |",
          "",
          "### Events",
          "",
          "| Event | Detail | Description |",
          "|---|---|---|",
          "| `change` | `{ value }` | Fired when the selected item changes |",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    horizontal: { control: "boolean" },
  },
  render: (args) => html`
    <aa-multiple-choice name="color" ?horizontal="${args.horizontal}">
      <aa-choice-item value="red">Red</aa-choice-item>
      <aa-choice-item value="blue">Blue</aa-choice-item>
      <aa-choice-item value="green">Green</aa-choice-item>
      <aa-choice-item value="yellow">Yellow</aa-choice-item>
    </aa-multiple-choice>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Vertical: Story = {
  args: {
    horizontal: false,
  },
};

export const Horizontal: Story = {
  args: {
    horizontal: true,
  },
};
