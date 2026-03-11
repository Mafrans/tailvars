import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class SidebarLayout extends GlobalCSSMixin(LitElement) {
	static properties = {
		title: {},
	};

	render() {
		return html`
      <div class="wrapper">
        <aside>
          <div class="sidebar-content">
            <slot name="sidebar"></slot>
          </div>
        </aside>
        <div>
          <slot></slot>
        </div>
        <div></div>
      </div>
    `;
	}

	static styles = css`
    .wrapper {
      display: grid;
      grid-template-columns: 200px 1fr 200px;
      gap: var(--size-12);
    }

    .sidebar-content {
      display: flex;
      flex-direction: column;
      gap: var(--size-3);
      position: sticky;
      top: 0;
      left: 0;
      padding: min(8vw, var(--size-12)) 0;
    }
  `;
}

window.customElements.define("sidebar-layout", SidebarLayout);
