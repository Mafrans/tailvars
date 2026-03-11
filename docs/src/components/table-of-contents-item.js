import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { query } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class TableOfContentsItem extends GlobalCSSMixin(LitElement) {
	static properties = {
		target: {},
		label: {},
		icon: {},
		active: {},
	};

	/** @type {HTMLElement} */
	targetElement;

	handleClick(e) {
		e.preventDefault();
		this.targetElement?.scrollIntoView({ behavior: "smooth" });
	}

	// Use arrow function to preserve value of `this`
	handleWindowScroll = () => {
		if (this.targetElement == null) return;
		const rect = this.targetElement.getBoundingClientRect();
		const origin = window.innerHeight / 3;
		this.active = origin > rect.top && origin < rect.bottom;
	};

	connectedCallback() {
		super.connectedCallback();
		const page = this.ownerDocument.body.firstChild;
		this.targetElement = page?.shadowRoot?.getElementById(this.target);

		window.addEventListener("scroll", this.handleWindowScroll);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("scroll", this.handleWindowScroll);
	}

	render() {
		return html`
      <li>
        <a @click=${this.handleClick} href="#${this.target}" class=${this.active ? "active" : ""}>
          <span>
            ${when(
							this.icon,
							() =>
								html`<box-icon size="xs" pack="filled" .icon=${this.icon}></box-icon>`,
						)}
          </span>

          <span><slot></slot></span>
        </a>
      </li>
    `;
	}

	static styles = css`
    li {
      list-style: none;
    }

    a {
      display: flex;
      align-items: center;
      gap: var(--size-2);
      padding: var(--size-1) var(--size-3);
      color: var(--color-slate-900) !important;
      font: var(--font-heading-sm) !important;
      border-radius: var(--rounded-xs);

      &.active {
        background: var(--color-slate-200);
      }
    }
  `;
}

window.customElements.define("table-of-contents-item", TableOfContentsItem);
