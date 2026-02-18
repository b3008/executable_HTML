import type { Preview } from "@storybook/web-components";
import "../src/index";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Introduction", "User Interface", "Control Flow", "Data & Utility"],
      },
    },
  },
};

export default preview;
