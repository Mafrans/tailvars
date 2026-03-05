import { css, html, LitElement } from "lit";
import { GlobalCSSMixin } from "./global-css-mixin";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AboutSection extends GlobalCSSMixin(LitElement) {
	static properties = {
		title: {},
	};

	render() {
		return html`
      <section>
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
    `;
	}

	static styles = css`
    :host {
      display: block;
    }

    section {
      padding-top: min(8vw, var(--size-12));
      padding-bottom: min(8vw, var(--size-12));
    }

    h2 {
      font: var(--font-heading-md);
      margin-bottom: var(--size-1);
    }

    a {
      text-decoration: underline;
    }

    p {
      margin-bottom: var(--size-2);
    }

    h3 {
      font: var(--font-heading-sm);
    }

    ul {
      list-style: disc outside;
      margin-left: var(--size-4);

      & li {
        margin-bottom: var(--size-2);
      }
    }
  `;
}

window.customElements.define("about-section", AboutSection);
