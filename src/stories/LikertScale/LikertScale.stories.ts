import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Likert Scale",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "A Likert rating scale with configurable number of items, labels, and numbering.",
          "",
          "### DOM API",
          "",
          "```js",
          "const scale = document.querySelector('aa-likert-scale');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `scale.value` | `string` | The currently selected radio value |",
          "| `scale.arrangeLabels()` | `void` | Re-renders and positions the scale labels |",
          "",
          "### Events",
          "",
          "| Event | Description |",
          "|---|---|",
          "| `change` | Fired when a radio option is selected |",
        ].join("\n"),
      },
    },
  },
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
