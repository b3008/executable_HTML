import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Slider",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "A range slider input for collecting numeric values.",
          "",
          "### DOM API",
          "",
          "```js",
          "const slider = document.querySelector('aa-slider');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `slider.value` | `number` | Get or set the current slider value |",
          "| `slider.minLabel` | `string` | Get or set the min-label text |",
          "| `slider.maxLabel` | `string` | Get or set the max-label text |",
          "| `slider.min` | `number` | Set the minimum value |",
          "| `slider.max` | `number` | Set the maximum value |",
          "",
          "### Events",
          "",
          "| Event | Description |",
          "|---|---|",
          "| `change` | Fired when the slider value changes |",
        ].join("\n"),
      },
    },
  },
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
