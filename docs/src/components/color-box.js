import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ColorBox extends GlobalCSSMixin(LitElement) {
	static properties = {};

	render() {
		return html`
      <div class="color-box">
        <slot></slot>
      </div>
    `;
	}

	static styles = css`
		.color-box {
		  padding: var(--size-2) var(--size-4);
			border-radius: var(--rounded-md);
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='"var(--color-slate-100)"' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
     	background-size: 6px;
			border: 1px solid var(--color-slate-300);
		}
  `;
}

window.customElements.define("color-box", ColorBox);
