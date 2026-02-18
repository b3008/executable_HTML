# Executable HTML

Build interactive surveys, questionnaires, and experiments using just HTML.

Executable HTML is a library of custom web components that turn static markup into interactive, sequential experiences. Instead of writing JavaScript to manage state, control flow, and data collection, you describe your entire application declaratively with HTML tags.

**[Live Documentation & Examples](https://b3008.github.io/executable_HTML/)**

## Quick Example

```html
<aa-session name="my-survey">
  <aa-sequence>
    <aa-screen submit-button-text="Next">
      <aa-label>How are you feeling?</aa-label>
      <aa-slider name="mood" min="0" max="100"
        min-label="Bad" max-label="Great">
      </aa-slider>
    </aa-screen>
    <aa-screen submit-button-text="Done">
      <aa-label>Thank you!</aa-label>
    </aa-screen>
  </aa-sequence>
</aa-session>
```

## Installation

```bash
npm install executable_html
```

```js
import "executable_html";
```

All custom elements are automatically registered. Just write HTML.

## Components

### Session & Data
- `aa-session` — Top-level container that manages memory and data collection
- `aa-variable` — Declares a named variable with a value
- `aa-memory` — Underlying storage layer (localStorage)

### Control Flow
- `aa-sequence` — Executes child elements one after another
- `aa-choose` / `aa-when` / `aa-otherwise` — Conditional branching based on expressions
- `aa-jump` — Jump to a named step within a sequence

### User Interface
- `aa-screen` — A page/step with a submit button that collects values
- `aa-label` — Display text
- `aa-slider` — Numeric slider input
- `aa-multiple-choice` / `aa-choice-item` — Single-select choice
- `aa-checkboxes` — Multi-select checkboxes
- `aa-text-answer` — Free text input
- `aa-likert-scale` — Likert scale rating
- `aa-affect-grid` — 2D affect/emotion grid

### Utilities
- `aa-function-random` — Generate random values
- `aa-geolocation` — Capture device location

## Development

```bash
npm run dev          # Start dev server
npm run storybook    # Start Storybook
npm test             # Run tests
```

## License

MIT
