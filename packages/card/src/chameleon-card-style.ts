import { css } from "lit-element";

export default css`
  :host {
    background-color: var(--color-surface, #ffffff);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 344px;
    padding: 16px;
  }

  :host([outline]) {
    border: 1px solid var(--color-gray-lightest, #e1e3e4);
  }

  :host([rounded]) {
    border-radius: var(--border-radius, 0.5rem);
  }
`;