import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Likert Scale",
  tags: ["autodocs"],
  argTypes: {
    items: { control: "number" },
    startItem: { control: "number" },
    startLabel: { control: "text" },
    middleLabel: { control: "text" },
    endLabel: { control: "text" },
    showRadioNumbers: { control: "boolean" },
    numberPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
  render: (args) => html`
    <aa-likert-scale
      name="agreement"
      items="${args.items}"
      start-item="${args.startItem}"
      start-label="${args.startLabel}"
      middle-label="${args.middleLabel}"
      end-label="${args.endLabel}"
      ?show-radio-numbers="${args.showRadioNumbers}"
      number-position="${args.numberPosition}"
    ></aa-likert-scale>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    items: 7,
    startItem: 1,
    startLabel: "Strongly Disagree",
    middleLabel: "Neutral",
    endLabel: "Strongly Agree",
    showRadioNumbers: true,
    numberPosition: "right",
  },
};

export const FivePoint: Story = {
  args: {
    items: 5,
    startItem: 1,
    startLabel: "Never",
    middleLabel: "Sometimes",
    endLabel: "Always",
    showRadioNumbers: true,
    numberPosition: "right",
  },
};

export const ZeroBased: Story = {
  args: {
    items: 11,
    startItem: 0,
    startLabel: "Not at all likely",
    middleLabel: "",
    endLabel: "Extremely likely",
    showRadioNumbers: true,
    numberPosition: "right",
  },
};
