import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "UI/Label",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
  render: (args) => html`<aa-label>${args.text}</aa-label>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    text: "Please answer the following question:",
  },
};

export const Short: Story = {
  args: {
    text: "Rate your mood",
  },
};

export const Long: Story = {
  args: {
    text: "On a scale from 1 to 10, how satisfied are you with the overall quality of the service you received during your most recent visit?",
  },
};
