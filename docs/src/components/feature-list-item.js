import { css, html, LitElement } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { GlobalCSSMixin } from "../global-css-mixin";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class FeatureListItem extends GlobalCSSMixin(LitElement) {
	static properties = {
		title: {},
		description: {},
		icon: {},
	};

	render() {
		return html`
      <article role="listitem">
        <box-icon .icon=${this.icon} class="icon"></box-icon>
        <h3>${this.title}</h3>
        <p><slot></p>
      </article>
    `;
	}

	static styles = css`
  	article {
      padding: var(--size-4);
      padding-bottom: var(--size-6);
      background-color: var(--color-slate-200);
      border-radius: var(--rounded-md);
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.8' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
     	background-size: 6px;
   }

    .icon {
      display: inline-flex;
      padding: var(--size-3);
      border-radius: var(--rounded-md);
      background-color: var(--color-slate-50);
      margin-bottom: var(--size-3);
      color: var(--color-slate-800);
    }

    h3 {
      font: var(--font-heading-md);
    }
  `;
}

window.customElements.define("feature-list-item", FeatureListItem);
