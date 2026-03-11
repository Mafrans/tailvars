import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class TableOfContents extends GlobalCSSMixin(LitElement) {
	static properties = {};

	render() {
		return html`
      <ul>
        <slot></slot>
      </ul>
    `;
	}

	static styles = css`
    ul {
      min-width: 200px;
      border-radius: var(--rounded-md);
      border: 1px solid var(--color-slate-300);
      padding: var(--size-1);
      gap: calc(-1 * var(--size-1));
      display: flex;
      flex-direction: column;
    }
  `;
}

window.customElements.define("table-of-contents", TableOfContents);
