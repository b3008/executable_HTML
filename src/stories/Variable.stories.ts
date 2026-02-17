import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Data & Utility/Variable",
  tags: ["autodocs"],
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
