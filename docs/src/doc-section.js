import { css, html, LitElement } from "lit";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class DocSection extends LitElement {
	static properties = {};

	render() {
		return html`
      <section>

      </section>
    `;
	}

	static styles = css`
    section {
      margin: var(--size-16) 0;
    }
  `;
}

window.customElements.define("doc-section", DocSection);
