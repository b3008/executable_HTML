import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Response Items/Camera",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "A camera capture element that provides a live video preview with capture, retake, and flip controls.",
          "Participants can take a photo which is stored as a base64 JPEG data URL.",
          "",
          "### DOM API",
          "",
          "```js",
          "const cam = document.querySelector('aa-camera');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `cam.value` | `string \\| null` | Get or set the captured base64 data URL |",
          "| `cam.facing` | `string` | Get or set the camera direction (`\"environment\"` or `\"user\"`) |",
          "",
          "### Events",
          "",
          "| Event | Description |",
          "|---|---|",
          "| `change` | Fired after a photo is captured |",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    facing: {
      control: { type: "select" },
      options: ["environment", "user"],
    },
    width: { control: "number" },
    height: { control: "number" },
  },
  render: (args) => html`
    <aa-camera
      name="${args.name}"
      facing="${args.facing}"
      width="${args.width}"
      height="${args.height}"
    ></aa-camera>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: "meal-photo",
    facing: "environment",
    width: 640,
    height: 480,
  },
};

export const FrontCamera: Story = {
  args: {
    name: "selfie",
    facing: "user",
    width: 640,
    height: 480,
  },
};
