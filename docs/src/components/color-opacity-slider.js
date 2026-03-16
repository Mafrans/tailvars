import { Eye, EyeSlash } from "@boxicons/js";
import { css, html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { GlobalCSSMixin } from "../global-css-mixin";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ColorOpacitySlider extends GlobalCSSMixin(LitElement) {
	static properties = {
		title: { type: String },
		value: { type: Number },
		enabled: { type: Boolean },
		min: { type: Number },
		max: { type: Number },
		draw: { type: Function },
		_pressed: { type: Boolean, state: true },
		_shouldToggle: { type: Boolean, state: true },
	};

	constructor() {
		super();
		this.title = "";
		this.enabled = true;
		this.min = 0;
		this.max = 100;
		this.value = 100;
		this.draw = Math.floor;
	}

	handleDown(event) {
		this._pressed = true;
		this._shouldToggle = true;
		setTimeout(() => {
			this._shouldToggle = false;
		}, 500);

		window.addEventListener("mouseup", this.handleUp);
		window.addEventListener("mousemove", this.handleMove);
	}

	handleUp = (event) => {
		this._pressed = false;
		if (this._shouldToggle) {
			this.setEnabled(!this.enabled);
		}
		window.removeEventListener("mouseup", this.handleUp);
		window.removeEventListener("mousemove", this.handleMove);
	};

	handleMove = (event) => {
		if (this._pressed) {
			const bbox = this.getBoundingClientRect();
			const progress = (event.x - bbox.left) / bbox.width;
			this.value = this.min + progress * (this.max - this.min);
			this.value = Math.min(this.max, Math.max(this.min, this.value));

			this.dispatchEvent(
				new CustomEvent("change", {
					detail: this.value,
					bubbles: true,
					composed: true,
				}),
			);

			this.setEnabled(true);
			this._shouldToggle = false;
		}
	};

	setEnabled(value) {
		this.enabled = value;
		this.dispatchEvent(
			new CustomEvent(value ? "enable" : "disable", {
				bubbles: true,
				composed: true,
			}),
		);
	}

	render() {
		const progress = (this.value - this.min) / (this.max - this.min);
		return html`
      <div
        class="slider ${classMap({ disabled: !this.enabled })}"
        @mousedown=${this.handleDown}
        @mouseup=${this.handleUp}
        style=${styleMap({
					"--progress": `${progress * 100}%`,
					"--length": String(this.draw(this.max)).length,
				})}
      >
        ${when(
					this.enabled,
					() => html`<box-icon .icon=${Eye} size="sm"></box-icon>`,
					() => html`<box-icon .icon=${EyeSlash} size="sm"></box-icon>`,
				)}
        <p>${this.draw(this.value)}</p>
      </div>
    `;
	}

	static styles = css`
    .slider {
      display: flex;
      align-items: center;
      gap: var(--size-1);
      user-select: none;
      width: max-content;
      cursor: pointer;
      padding: var(--size-1) var(--size-3);
      background: linear-gradient(to right, var(--color-indigo-300), var(--color-indigo-300) var(--progress), var(--color-slate-100) var(--progress), var(--color-slate-100));
      font: var(--font-heading-sm);
      border-radius: var(--rounded-md);

      &.disabled {
       	opacity: 25%;
     	}

      & p {
       	width: calc(var(--length) * 1ch);
      }
  	}
  `;
}

window.customElements.define("color-opacity-slider", ColorOpacitySlider);
