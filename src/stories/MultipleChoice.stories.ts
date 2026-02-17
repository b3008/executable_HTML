import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Multiple Choice",
  tags: ["autodocs"],
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
