import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Affect Grid",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "A 2D grid for measuring affect along two dimensions (e.g., valence and arousal). Based on Russell, Weiss & Mendelsohn (1989).",
          "",
          "### DOM API",
          "",
          "```js",
          "const grid = document.querySelector('aa-affect-grid');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `grid.value` | `[number, number] \\| null` | Get or set the selected `[x, y]` coordinates |",
          "| `grid.x` | `number \\| null` | Get the selected x coordinate (horizontal axis) |",
          "| `grid.y` | `number \\| null` | Get the selected y coordinate (vertical axis) |",
          "",
          "### Events",
          "",
          "| Event | Description |",
          "|---|---|",
          "| `change` | Fired when a cell is selected |",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    rows: { control: { type: "number", min: 1, max: 20 } },
    columns: { control: { type: "number", min: 1, max: 20 } },
    topLabel: { control: "text" },
    bottomLabel: { control: "text" },
    leftLabel: { control: "text" },
    rightLabel: { control: "text" },
    centerLabel: { control: "text" },
    topLeftLabel: { control: "text" },
    topRightLabel: { control: "text" },
    bottomLeftLabel: { control: "text" },
    bottomRightLabel: { control: "text" },
    required: { control: "boolean" },
  },
  render: (args) => html`
    <aa-affect-grid
      name="mood"
      rows="${args.rows}"
      columns="${args.columns}"
      top-label="${args.topLabel}"
      bottom-label="${args.bottomLabel}"
      left-label="${args.leftLabel}"
      right-label="${args.rightLabel}"
      center-label="${args.centerLabel}"
      top-left-label="${args.topLeftLabel}"
      top-right-label="${args.topRightLabel}"
      bottom-left-label="${args.bottomLeftLabel}"
      bottom-right-label="${args.bottomRightLabel}"
    ></aa-affect-grid>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    rows: 9,
    columns: 9,
    topLabel: "High Arousal",
    bottomLabel: "Low Arousal",
    leftLabel: "Unpleasant",
    rightLabel: "Pleasant",
    centerLabel: "Neutral",
    topLeftLabel: "Stressed",
    topRightLabel: "Excited",
    bottomLeftLabel: "Sad",
    bottomRightLabel: "Calm",
    required: false,
  },
};

export const Small: Story = {
  args: {
    rows: 5,
    columns: 5,
    topLabel: "High",
    bottomLabel: "Low",
    leftLabel: "Negative",
    rightLabel: "Positive",
    centerLabel: "",
    topLeftLabel: "",
    topRightLabel: "",
    bottomLeftLabel: "",
    bottomRightLabel: "",
    required: false,
  },
};
