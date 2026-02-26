import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "./global-css-mixin";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class HeroSection extends GlobalCSSMixin(LitElement) {
	static properties = {
		title: {},
	};

	render() {
		return html`
      <section class="container">
        <h1>${this.title}</h1>
      </section>
    `;
	}

	static styles = css`
    :host {
      display: block;
    }

    section {
      padding: var(--size-32) 0;

      & h1 {
        font: var(--font-heading-fluid-3xl);
      }
    }
  `;
}

window.customElements.define("hero-section", HeroSection);
