import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Text Answer",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "A text input field supporting multiple input types (text, textarea, number, email, date, etc.).",
          "",
          "### DOM API",
          "",
          "```js",
          "const input = document.querySelector('aa-text-answer');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `input.value` | `string` | Get or set the current input value |",
          "| `input.label` | `string` | Get or set the label text |",
          "",
          "### Events",
          "",
          "| Event | Description |",
          "|---|---|",
          "| `change` | Fired when the value changes (debounced ~1500ms on typing) |",
        ].join("\n"),
      },
    },
  },
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
