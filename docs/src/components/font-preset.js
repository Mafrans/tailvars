import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class FontPreset extends GlobalCSSMixin(LitElement) {
  static properties = {
    type: { type: String },
    size: { type: String },
    fluid: { type: Boolean },
  };

  render() {
    let varName = `--font-${this.type}${this.fluid ? "-fluid" : ""}-${this.size}`;
    return html`<article>
      <p style="font: var(${varName})">${varName}</p>
    </article>`;
  }

  static styles = css`
    p {
      overflow: scroll;
      text-wrap: nowrap;
      width: 100%;
    }
  `;
}

window.customElements.define("font-preset", FontPreset);
