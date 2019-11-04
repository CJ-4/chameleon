import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/chip/src/chameleon-chip";

const stories = storiesOf("Chip", module);

// const closeIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Chip",
  () => {
    const valueText = text("Label", "Salty");
    return html`
      <chameleon-chip value="${valueText}"></chameleon-chip>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "With Icon",
  () => {
    const valueText = text("Label", "Crunchy");

    return html`
      <chameleon-chip value="${valueText}" closeable></chameleon-chip>
    `;
  },
  { info: { inline: true } }
);
