import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/tabs/src/chameleon-tabs";
import "../../packages/tabs/src/chameleon-tab";

const stories = storiesOf("Tabs", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Tabs",
  () => {
    return html`
      <chameleon-tabs initial="One">
        <chameleon-tab name="One">
          Tab One
        </chameleon-tab>
        <chameleon-tab name="Two">
          Tab Two
        </chameleon-tab>
        <chameleon-tab name="Three">
          Tab Three
        </chameleon-tab>
      </chameleon-tabs>
    `;
  },
  { info: { inline: true } }
);
