import "./components/about-section.js";
import "./components/color-box.js";
import "./components/color-shades.js";
import "./components/feature-list.js";
import "./components/feature-list-item.js";
import "./components/hero-section.js";
import "./components/box-icon.js";
import "./components/sidebar-layout.js";
import "./components/table-of-contents.js";
import "./components/table-of-contents-item.js";
import "./pages/index-page.js";
import UniversalRouter from "universal-router";

const routes = [{ action: () => `<index-page />` }];

const router = new UniversalRouter(routes);

router.resolve(location.pathname).then((html) => {
	document.body.innerHTML = html;
});
