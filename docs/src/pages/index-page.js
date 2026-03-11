import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";
import {
	AnimationBounce,
	Blur,
	Capitalize,
	DrawAhead,
	EaseInOut,
	EaseOut,
	GridLines3,
	LayoutCheck,
	MagicWand,
	Maximize,
	Motion,
	MotionAlt,
	Palette,
	RowResize,
	Shapes,
	Sparkles,
	SparklesAlt,
} from "@boxicons/js";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class IndexPage extends GlobalCSSMixin(LitElement) {
	firstUpdated() {
		if (location.hash) {
			requestAnimationFrame(() => {
				const hashElement = this.shadowRoot.querySelector(location.hash);
				hashElement?.scrollIntoView();
			});
		}
	}

	render() {
		return html`
      <main>
        <hero-section></hero-section>

        <div class="container">
          <about-section></about-section>
          <feature-list>
            <feature-list-item .icon=${GridLines3} title="Familiar">
              If you've used TailwindCSS you'll feel right at home, tailvars doesn't pretend to be a new paradigm.
            </feature-list-item>
            <feature-list-item .icon=${LayoutCheck} title="Native">
              It's just CSS. Seriously. No build tools needed, no JavaScript imports or plugins. Works out of the box.
            </feature-list-item>
            <feature-list-item .icon=${MagicWand}		 title="Flexible">
              Tailvars leverages composition to get around common limitations with CSS custom properties.
            </feature-list-item>
          </feature-list>
        </div>

        <div class="container">
          <aside class="sidebar">
            <table-of-contents class="sidebar">
              <table-of-contents-item .icon=${Palette} target="colors">Colors</table-of-contents-item>
              <table-of-contents-item .icon=${Capitalize} target="typography">Typography</table-of-contents-item>
              <table-of-contents-item .icon=${Maximize} target="spacing">Spacing</table-of-contents-item>
              <table-of-contents-item .icon=${EaseInOut} target="transitions">Transitions</table-of-contents-item>
              <table-of-contents-item .icon=${SparklesAlt} target="effects">Effects</table-of-contents-item>
              <table-of-contents-item .icon=${Shapes} target="effects">Shapes</table-of-contents-item>
            </table-of-contents>
          </aside>

          <section id="colors">
            <h2>Colors</h2>
            <color-box>
             	<color-shades color="fuchsia"></color-shades>
             	<color-shades color="pink"></color-shades>
             	<color-shades color="rose"></color-shades>
             	<color-shades color="red"></color-shades>
             	<color-shades color="orange"></color-shades>
             	<color-shades color="amber"></color-shades>
             	<color-shades color="yellow"></color-shades>
             	<color-shades color="lime"></color-shades>
             	<color-shades color="green"></color-shades>
             	<color-shades color="emerald"></color-shades>
             	<color-shades color="teal"></color-shades>
             	<color-shades color="cyan"></color-shades>
             	<color-shades color="sky"></color-shades>
             	<color-shades color="blue"></color-shades>
             	<color-shades color="indigo"></color-shades>
             	<color-shades color="purple"></color-shades>
             	<color-shades color="violet"></color-shades>
             	<color-shades color="mauve"></color-shades>
             	<color-shades color="zinc"></color-shades>
             	<color-shades color="slate"></color-shades>
             	<color-shades color="gray"></color-shades>
             	<color-shades color="mist"></color-shades>
             	<color-shades color="neutral"></color-shades>
             	<color-shades color="taupe"></color-shades>
             	<color-shades color="stone"></color-shades>
             	<color-shades color="olive"></color-shades>
            </color-box>
            <doc-colors-content />
          </section>
        </div>
      </main>
    `;
	}

	static styles = css`
    section {
      margin: var(--size-12) 0;

      & h2 {
        font: var(--font-heading-lg)
      }
    }

    aside {
      margin-top: var(--size-22);
    }
  `;
}

window.customElements.define("index-page", IndexPage);
