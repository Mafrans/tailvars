import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "./global-css-mixin.js";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export class HeroSection extends GlobalCSSMixin(LitElement) {
	static properties = {
		title: {},
		subtitle: {},
	};

	render() {
		return html`
      <section class="container">
        <h1>--tailvars</h1>
        <p>Putting the CSS back into TailwindCSS</p>
      </section>
    `;
	}

	static styles = css`
    :host {
      display: block;
    }

    section {
      padding-top: 12vw;
      padding-bottom: 12vw;
      background-color: var(--color-indigo-100);
      background-image: url("/hero-texture.webp");
      background-size: 100%;
      background-fit: cover;
      background-blend-mode: overlay;

      & h1 {
        font: var(--font-heading-fluid-2xl);
        color: var(--color-indigo-950);

        &::after {
          content: "";
          display: inline-block;
          position: relative;
          margin-left: -1ch;
          margin-bottom: -0.1em;
          pointer-events: none;
          mix-blend-mode: hard-light;
          width: 1ch;
          aspect-ratio: 1/2;
          background-color: var(--color-indigo-700);
          animation: 2s steps(1) infinite blink;
        }
      }

      & p {
        --color-opacity: 90%;
        font: var(--font-heading-fluid-md);
        color: var(--color-indigo-900);
      }
    }

    @keyframes blink {
      from {
        opacity: 100%;
      }
      50% {
        opacity: 0%;
      }
      to {
        opacity: 100%;
      }
    }
  `;
}

window.customElements.define("hero-section", HeroSection);
