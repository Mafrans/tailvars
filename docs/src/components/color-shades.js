import { css, html, LitElement } from "lit";
import { map } from "lit/directives/map.js";
import { GlobalCSSMixin } from "../global-css-mixin";

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ColorShades extends GlobalCSSMixin(LitElement) {
	static properties = {
		color: {},
	};

	render() {
		return html`
			<h3>--color-${this.color}</h3>
			<article class="color">
        <div class="spacer"></div>
			  ${map(shades, (shade) => {
					return html`
              <article class="shade" style="
                background: var(--color-${this.color}-${shade});
                color: ${shade > 400 ? "white" : "black"}
              ">
                ${shade}
              </article>
            `;
				})}
      </article>
    `;
	}

	static styles = css`
	  h3 {
			font: var(--font-heading-md);
			text-transform: lowercase;
		}

    .color {
      display: grid;
      flex-wrap: wrap;
      gap: var(--size-2);
      border: 1px solid var(--color-slate-300);
      border-radius: var(--rounded-sm);
      padding: var(--size-3);
      background: var(--color-white);
      margin-bottom: var(--size-3);
      grid-template-columns: repeat(4, 1fr);

      @media (min-width: 640px) {
        grid-template-columns: repeat(6, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(11, 1fr);
        & .spacer {
          display: none;
        }
      }
    }

    .shade {
      aspect-ratio: 3/2;
      display: flex;
      align-items: center;
      justify-content: center;
      font: var(--font-heading-sm);
      padding: var(--size-3);

      box-shadow: inset 0 0 0 1px var(--color-slate-400);
    }
  `;
}

window.customElements.define("color-shades", ColorShades);
