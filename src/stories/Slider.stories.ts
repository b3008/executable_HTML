import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Slider",
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    minLabel: { control: "text" },
    maxLabel: { control: "text" },
  },
  render: (args) => html`
    <aa-slider
      name="rating"
      min="${args.min}"
      max="${args.max}"
      min-label="${args.minLabel}"
      max-label="${args.maxLabel}"
    ></aa-slider>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    minLabel: "Not at all",
    maxLabel: "Extremely",
  },
};

export const SmallRange: Story = {
  args: {
    min: 1,
    max: 10,
    minLabel: "1",
    maxLabel: "10",
  },
};
