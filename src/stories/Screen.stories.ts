import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "UI/Screen",
  tags: ["autodocs"],
  argTypes: {
    submitButtonText: { control: "text" },
    submitButtonHidden: { control: "boolean" },
  },
  render: (args) => html`
    <aa-screen
      submit-button-text="${args.submitButtonText}"
      ?submit-button-hidden="${args.submitButtonHidden}"
    >
      <aa-label>How are you feeling today?</aa-label>
      <aa-slider
        name="mood"
        min="0"
        max="100"
        min-label="Very Bad"
        max-label="Very Good"
      ></aa-slider>
      <aa-text-answer
        name="comment"
        label="Any comments?"
        type="text"
      ></aa-text-answer>
    </aa-screen>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    submitButtonText: "Submit",
    submitButtonHidden: false,
  },
};

export const CustomButtonText: Story = {
  args: {
    submitButtonText: "Next",
    submitButtonHidden: false,
  },
};

export const HiddenButton: Story = {
  args: {
    submitButtonText: "Submit",
    submitButtonHidden: true,
  },
};
