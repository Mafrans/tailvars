import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class FeatureList extends GlobalCSSMixin(LitElement) {
	static properties = {
		features: {},
	};

	render() {
		return html`
      <section>
        <ul>
          <slot>
        </ul>
      </section>
    `;
	}

	static styles = css`
    section {
      margin: var(--size-4) 0;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      flex-wrap: wrap;
      gap: var(--size-6);

      & > ::slotted(*) {
        grid-column: auto / span 2;
      }

      @media (min-width: 640px) and (max-width: 1023px) {
        grid-template-columns: repeat(4, 1fr);
        gap: var(--size-3);

        & > ::slotted(*:nth-child(odd):last-of-type) {
          grid-column: 2 / span 2 !important;
        }
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(6, 1fr);
        gap: var(--size-6);
      }
    }
  `;
}

window.customElements.define("feature-list", FeatureList);
