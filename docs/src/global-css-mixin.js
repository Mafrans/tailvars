import css from "./global.css?inline";

const sheet = new CSSStyleSheet();
sheet.replaceSync(css);

export const globalCSS = sheet;

export const GlobalCSSMixin = (superClass) =>
	class extends superClass {
		connectedCallback() {
			super.connectedCallback();
			this.shadowRoot.adoptedStyleSheets.push(globalCSS);
		}
	};
