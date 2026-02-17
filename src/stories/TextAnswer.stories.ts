import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Text Answer",
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    label: { control: "text" },
    type: {
      control: { type: "select" },
      options: [
        "text",
        "textarea",
        "number",
        "email",
        "tel",
        "password",
        "date",
        "datetime-local",
        "time",
      ],
    },
  },
  render: (args) => html`
    <aa-text-answer
      name="${args.name}"
      label="${args.label}"
      type="${args.type}"
    ></aa-text-answer>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: "response",
    label: "What is your name?",
    type: "text",
  },
};

export const TextArea: Story = {
  args: {
    name: "feedback",
    label: "Please share your feedback",
    type: "textarea",
  },
};

export const NumberInput: Story = {
  args: {
    name: "age",
    label: "How old are you?",
    type: "number",
  },
};

export const EmailInput: Story = {
  args: {
    name: "email",
    label: "Enter your email address",
    type: "email",
  },
};
