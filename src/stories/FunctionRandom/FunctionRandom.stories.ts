import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

const makeSource = (name: string, min: number, max: number) =>
  `<aa-session name="${name}">
  <div style="display:flex; align-items:center; gap:12px;">
    <button onclick="
      var container = this.parentElement.querySelector('.result-container');
      container.innerHTML = '';
      var el = document.createElement('aa-function-random');
      el.setAttribute('name', 'randomValue');
      el.setAttribute('min', '${min}');
      el.setAttribute('max', '${max}');
      el.setAttribute('debug', '');
      container.appendChild(el);
      this.parentElement.querySelector('.result-value').textContent = el.value;
    ">Generate</button>
    <span>Result: <strong class="result-value">—</strong></span>
    <span class="result-container" style="display:none;"></span>
  </div>
</aa-session>`;

const meta = {
  title: "Data & Utility/Function Random",
  tags: ["autodocs"],
  render: (args) => {
    const source = makeSource("random-demo", args.min, args.max);
    return html`${unsafeHTML(source)}`;
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Generates a random integer between `min` and `max` (inclusive) and stores it in session memory. Removes itself from the DOM after generating (unless `debug` is set).",
          "",
          "### DOM API",
          "",
          "```js",
          "const fn = document.querySelector('aa-function-random');",
          "```",
          "",
          "| Method / Property | Returns | Description |",
          "|---|---|---|",
          "| `fn.value` | `number` | The generated random integer (read after element is connected) |",
          "| `fn.getRandomInt(min, max)` | `number` | Generate a random integer in `[min, max]` range |",
        ].join("\n"),
      },
      source: {
        code: `<aa-function-random name="randomValue" min="1" max="100"></aa-function-random>`,
        language: "html",
      },
    },
  },
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
