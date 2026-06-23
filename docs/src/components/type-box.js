import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";
import { when } from "lit/directives/when.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class TypeBox extends GlobalCSSMixin(LitElement) {
  static properties = {
    label: { type: String },
  };

  render() {
    return html`
      <div class="type-box">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    .type-box {
      margin: var(--size-3) 0;
      padding: var(--size-4);
      border-radius: var(--rounded-md);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='"var(
          --color-slate-100
        )"' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
      background-size: 6px;
      border: 1px solid var(--color-slate-300);
      overflow: scroll;
      max-width: 100%;
      min-width: 0;
    }

    h3 {
      margin-left: var(--size-3);
      font: var(--font-heading-md);
    }
  `;
}

window.customElements.define("type-box", TypeBox);
