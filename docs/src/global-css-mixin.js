export const GlobalCSSMixin = (superClass) =>
	class extends superClass {
		connectedCallback() {
			super.connectedCallback();

			const tags = document.querySelectorAll("link[global], style[global]");
			for (const tag of tags) {
				const n = tag.cloneNode();
				this.shadowRoot.append(n);
			}
		}
	};
