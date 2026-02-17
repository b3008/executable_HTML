import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Data & Utility/Function Random",
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
  },
  render: (args) => html`
    <aa-function-random
      name="randomValue"
      min="${args.min}"
      max="${args.max}"
      debug
    ></aa-function-random>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    min: 1,
    max: 100,
  },
};

export const DiceRoll: Story = {
  args: {
    min: 1,
    max: 6,
  },
};

export const CoinFlip: Story = {
  args: {
    min: 0,
    max: 1,
  },
};
