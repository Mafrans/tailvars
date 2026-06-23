import {
  Capitalize,
  EaseInOut,
  GridLines3,
  LayoutCheck,
  MagicWand,
  Maximize,
  Palette,
  Shapes,
  SparklesAlt,
} from "@boxicons/js";
import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "../global-css-mixin";
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

        <div class="container richtext">
          <section class="richtext">
            <h2>Why another CSS library?</h2>
            <p>
              Most think that CSS has been solved at this point. We don't need any more Bootstraps or Bulmas, and if we do, well, you can just install Bootstrap or Bulma - problem solved! I was also like that, until I actually <i>tried</i> to write CSS without a library. Turns out, it's easier said than done to design an application when given <i>all</i> the tools. I was a kid in a candy shop. What colors should I use? How wide should a button be? It quickly became impossible to maintain any level of consistency.
            </p>
            <p>
              <a href="https://tailwindcss.com" target="_blank">TailwindCSS</a> solves this issue elegantly, something that isn't surprising considering <a href="https://refactoringui.com" target="_blank">Refactoring UI</a>, also written by Stever Schroger, regularly speaks about this issue. But TailwindCSS is not just a system of style values, it's also a <a href="https://v1.tailwindcss.com/#what-is-tailwind" target="_blank"><i>philosophy</i></a>&mdash;A philosophy I quickly found myself disagreeing with. Scrapping CSS for a system of only utility classes comes with a few uncomfortable realities:
              <ul>
                <li>The HTML code quickly gets hard to read and filled with class names.</li>
                <li>Toggling or applying groups of classes depending on state is burdensome, requiring workarounds like dictionaries or <code>@apply</code>.</li>
                <li>Many frontend frameworks don't consider tailwind classes well enough in their implementations.</li>
              </ul>
            </p>
            <p>
              CSS now supports nesting natively and scoped CSS is available in most framework or through shadow DOMs. With that in mind, the goal of tailvars is to maintain the spirit of the TailwindCSS style system (which I quite like) but in the form of CSS custom properties, rather than utility classes. Custom properties have their own strengths and weaknesses, of course, but I found them more practical to work with.
            </p>
          </section>

          <feature-list>
            <feature-list-item .icon=${GridLines3} title="Familiar">
              If you've used TailwindCSS you'll feel right at home, tailvars
              doesn't pretend to be a new paradigm.
            </feature-list-item>
            <feature-list-item .icon=${LayoutCheck} title="Native">
              It's just CSS. Seriously. No build tools needed, no JavaScript
              imports or plugins. Works out of the box.
            </feature-list-item>
            <feature-list-item .icon=${MagicWand} title="Flexible">
              Tailvars leverages composition to get around common limitations
              with CSS custom properties.
            </feature-list-item>
          </feature-list>
        </div>

        <div class="container">
          <aside class="sidebar">
            <table-of-contents class="sidebar">
              <table-of-contents-item .icon=${Palette} target="colors"
                >Colors</table-of-contents-item
              >
              <table-of-contents-item .icon=${Capitalize} target="typography"
                >Typography</table-of-contents-item
              >
              <table-of-contents-item .icon=${Maximize} target="spacing"
                >Spacing</table-of-contents-item
              >
              <table-of-contents-item .icon=${EaseInOut} target="transitions"
                >Transitions</table-of-contents-item
              >
              <table-of-contents-item .icon=${SparklesAlt} target="effects"
                >Effects</table-of-contents-item
              >
              <table-of-contents-item .icon=${Shapes} target="shapes"
                >Shapes</table-of-contents-item
              >
            </table-of-contents>
          </aside>

          <section class="richtext" id="colors">
            <h2>Colors</h2>
            <p>
              Tailvars comes with all your favorite Tailwind color palettes.
            </p>

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

            <section>
              <h3>Opacity</h3>
              <p>
                While it is not easily possible to create opacity-variants for
                each shade of colors, it's possible to handle opacity through a
                system of custom properties. In tailvars, each color respects the
                opacity variables above it, in the following order of precedence:
              </p>
              <color-opacity-preview></color-opacity-preview>
              <p>
                <small>
                  Try it out! Click on the sliders to enable/disable the
                  corresponding variable.
                </small>
              </p>
            </section>
          </section>

          <section class="richtext" id="typography">
            <h2>Typography</h2>
            <p>
              Tailvars comes with robust type presets based on the
              <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font">font</a> CSS shorthand.
            </p>

            <type-box label="Headings">
              <font-preset type="heading" size="2xl"></font-preset>
              <font-preset type="heading" size="xl"></font-preset>
              <font-preset type="heading" size="lg"></font-preset>
              <font-preset type="heading" size="md"></font-preset>
              <font-preset type="heading" size="sm"></font-preset>
              <font-preset type="heading" size="xs"></font-preset>
            </type-box>

            <type-box label="Body">
              <font-preset type="body" size="2xl"></font-preset>
              <font-preset type="body" size="xl"></font-preset>
              <font-preset type="body" size="lg"></font-preset>
              <font-preset type="body" size="md"></font-preset>
              <font-preset type="body" size="sm"></font-preset>
              <font-preset type="body" size="xs"></font-preset>
            </type-box>

            <section>
              <h3>Fluid typography</h3>
              <p>There are also fluid options which re-scale relative to your viewport</p>

              <type-box label="Headings">
                <font-preset fluid type="heading" size="2xl"></font-preset>
                <font-preset fluid type="heading" size="xl"></font-preset>
                <font-preset fluid type="heading" size="lg"></font-preset>
                <font-preset fluid type="heading" size="md"></font-preset>
                <font-preset fluid type="heading" size="sm"></font-preset>
                <font-preset fluid type="heading" size="xs"></font-preset>
              </type-box>

              <type-box label="Body">
                <font-preset fluid type="body" size="2xl"></font-preset>
                <font-preset fluid type="body" size="xl"></font-preset>
                <font-preset fluid type="body" size="lg"></font-preset>
                <font-preset fluid type="body" size="md"></font-preset>
                <font-preset fluid type="body" size="sm"></font-preset>
                <font-preset fluid type="body" size="xs"></font-preset>
              </type-box>
            <section>
          </section>

          <section class="richtext" id="spacing">
            <h2>Spacing</h2>
            <p>🛠 Work in progress</p>
          </section>

          <section class="richtext" id="transitions">
            <h2>Transitions</h2>
            <p>🛠 Work in progress</p>
          </section>

          <section class="richtext" id="effects">
            <h2>Effects</h2>
            <p>🛠 Work in progress</p>
          </section>

          <section class="richtext" id="shapes">
            <h2>Shapes</h2>
            <p>🛠 Work in progress</p>
          </section>
        </div>
      </main>
    `;
  }

  static styles = css`
    section {
      margin: var(--size-12) 0;
    }

    section > section:last-of-type {
      margin-bottom: 0;
    }

    aside {
      margin-top: var(--size-22);
    }
  `;
}

window.customElements.define("index-page", IndexPage);
