import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "UI/Screen",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "A container that collects values from its child response items and provides a submit button.",
          "",
          "### DOM API",
          "",
          "```js",
          "const screen = document.querySelector('aa-screen');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `screen.value` | `Promise<AAScreenValue>` | Collects all child response values with metadata |",
          "| `screen.collectValues()` | `Promise<AAScreenValue>` | Explicitly collect all child values |",
          "| `screen.valueWithKey()` | `Promise<object>` | Returns values keyed by child element name |",
          "| `screen.hide()` | `void` | Hides the screen and stops child sequences |",
          "| `screen.show()` | `void` | Shows the screen |",
          "| `screen.automate()` | `void` | Auto-fills child inputs and triggers submit |",
          "| `screen.submitButtonClick()` | `Promise<void>` | Programmatically click the submit button |",
          "| `screen.hasChildrenThatRequireResponse()` | `Promise<Element[]>` | Returns required child elements that have no value |",
          "| `screen.getAAChildren(node)` | `Element[]` | Gets AA custom element children |",
          "",
          "### Events",
          "",
          "| Event | Detail | Description |",
          "|---|---|---|",
          "| `valueSubmit` | `AAScreenValueSubmitEventDetail` | Fired when the screen is submitted with collected values |",
          "| `endEvent` | — | Fired after submit completes |",
        ].join("\n"),
      },
    },
  },
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
