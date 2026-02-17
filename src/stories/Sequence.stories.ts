import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Control Flow/Sequence",
  tags: ["autodocs"],
  render: () => html`
    <aa-sequence name="demo-sequence" debug>
      <aa-label>Step 1: Welcome</aa-label>
      <aa-label>Step 2: Instructions</aa-label>
      <aa-label>Step 3: Complete</aa-label>
    </aa-sequence>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithScreens: Story = {
  render: () => html`
    <aa-sequence name="survey-sequence" debug>
      <aa-screen submit-button-text="Next">
        <aa-label>Question 1</aa-label>
        <aa-text-answer name="q1" label="What is your name?" type="text"></aa-text-answer>
      </aa-screen>
      <aa-screen submit-button-text="Next">
        <aa-label>Question 2</aa-label>
        <aa-slider name="q2" min="1" max="10" min-label="Low" max-label="High"></aa-slider>
      </aa-screen>
      <aa-screen submit-button-text="Finish">
        <aa-label>Thank you!</aa-label>
      </aa-screen>
    </aa-sequence>
  `,
};
