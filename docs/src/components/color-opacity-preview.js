import { css, html, LitElement } from "lit";
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
export class ColorOpacityPreview extends GlobalCSSMixin(LitElement) {
	static properties = {
		_colorOpacity: { state: this },
		_colorPinkOpacity: { state: this },
		_colorPink700Opacity: { state: this },
	};

	constructor() {
		super();
		this._colorOpacity = { enabled: true, value: 100 };
		this._colorPinkOpacity = { enabled: false, value: 100 };
		this._colorPink700Opacity = { enabled: false, value: 100 };
	}

	render() {
		return html`
		  <div class="block">
				<color-opacity-slider
				  @change=${({ detail }) => (this._colorOpacity = { ...this._colorOpacity, value: detail })}
          @enable=${() => (this._colorOpacity = { ...this._colorOpacity, enabled: true })}
          @disable=${() => (this._colorOpacity = { ...this._colorOpacity, enabled: false })}
					.draw=${(v) => `--color-opacity: ${Math.floor(v)}%`}
					.value=${this._colorOpacity.value}
					.enabled=${this._colorOpacity.enabled}
				></color-opacity-slider>

  		  <div class="block">
  				<color-opacity-slider
            @change=${({ detail }) => (this._colorPinkOpacity = { ...this._colorPinkOpacity, value: detail })}
            @enable=${() => (this._colorPinkOpacity = { ...this._colorPinkOpacity, enabled: true })}
            @disable=${() => (this._colorPinkOpacity = { ...this._colorPinkOpacity, enabled: false })}
            .draw=${(v) => `--color-pink-opacity: ${Math.floor(v)}%`}
            .value=${this._colorPinkOpacity.value}
            .enabled=${this._colorPinkOpacity.enabled}
          ></color-opacity-slider>

    		  <div class="block">
    				<color-opacity-slider
              @change=${({ detail }) => (this._colorPink700Opacity = { ...this._colorPink700Opacity, value: detail })}
              @enable=${() => (this._colorPink700Opacity = { ...this._colorPink700Opacity, enabled: true })}
              @disable=${() => (this._colorPink700Opacity = { ...this._colorPink700Opacity, enabled: false })}
              .draw=${(v) => `--color-pink-700-opacity: ${Math.floor(v)}%`}
              .value=${this._colorPink700Opacity.value}
              .enabled=${this._colorPink700Opacity.enabled}
            ></color-opacity-slider>

            <div class="swatches" style=${styleMap({
							"--color-opacity": this._colorOpacity.enabled
								? `${this._colorOpacity.value}%`
								: undefined,
							"--color-pink-opacity": this._colorPinkOpacity.enabled
								? `${this._colorPinkOpacity.value}%`
								: undefined,
							"--color-pink-700-opacity": this._colorPink700Opacity.enabled
								? `${this._colorPink700Opacity.value}%`
								: undefined,
						})}>
              <div class="swatch" style="background: var(--color-green-400)"></div>
              <div class="swatch" style="background: var(--color-pink-400)"></div>
              <div class="swatch" style="background: var(--color-blue-400)"></div>
              <div class="swatch" style="background: var(--color-pink-700)"></div>
              <div class="swatch" style="background: var(--color-amber-400)"></div>
              <div class="swatch" style="background: var(--color-red-600)"></div>
						</div>
     			</div>
  			</div>
			</div>
    `;
	}

	static styles = css`
    .block {
      margin: var(--size-4) 0;
      border: 1px solid var(--color-slate-300);
      padding: var(--size-4);
      border-radius: var(--rounded-md);
    }

    .swatches {
      display: flex;
      flex-wrap: wrap;
      gap: var(--size-4);
    }

    .swatch {
      --color-black-opacity: 30%;
      margin: var(--size-6) 0;
      width: 100px;
      height: 100px;
      shadow: inset 0 0 4px var(--color-black);
      border-radius: var(--rounded-md);
    }
  `;
}

window.customElements.define("color-opacity-preview", ColorOpacityPreview);
