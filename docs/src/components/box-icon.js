import { createElement } from "@boxicons/js";
import { css, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class BoxIcon extends GlobalCSSMixin(LitElement) {
	static properties = {
		icon: {},
    size: {},
		pack: {}
	};

	render() {
		return "";
	}

  connectedCallback() {
		const el = createElement(this.icon, { size: this.size || "base", pack: this.pack || "basic" });
		this.appendChild(el);
	}

	static styles = css`
  `;
}

window.customElements.define("box-icon", BoxIcon);
