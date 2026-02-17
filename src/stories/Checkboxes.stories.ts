import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Checkboxes",
  tags: ["autodocs"],
  argTypes: {
    horizontal: { control: "boolean" },
  },
  render: (args) => html`
    <aa-checkboxes name="toppings" ?horizontal="${args.horizontal}">
      <aa-choice-item value="cheese">Cheese</aa-choice-item>
      <aa-choice-item value="pepperoni">Pepperoni</aa-choice-item>
      <aa-choice-item value="mushrooms">Mushrooms</aa-choice-item>
      <aa-choice-item value="olives">Olives</aa-choice-item>
    </aa-checkboxes>
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
