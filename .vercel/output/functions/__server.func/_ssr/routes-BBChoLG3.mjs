import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as OrnamentRule, r as Diamond } from "./router-CRxRMrN_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BBChoLG3.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-dvh flex-col items-center justify-center px-8 py-20 md:px-16 md:pr-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter-1 kicker",
				children: "Kolekcja literacka"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "enter-2 mt-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrnamentRule, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "letter-title hero-word",
					children: "Wiersze".split("").map((letter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: letter }, `${letter}-${index}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "enter-4 hero-sub",
					children: "autorstwa Piotra Barana"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "enter-5 mt-10 h-px",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer-line mx-auto" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter-6 mx-auto mt-8 max-w-md text-center font-body text-lg leading-relaxed text-muted",
				children: "Trzynaście utworów. Ciemny atramencie, ciepły papier, głos który nie umie milczeć."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "enter-7 mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiersze",
					className: "cta-link",
					children: ["Przejdź do wierszy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-3.5",
						strokeWidth: 1.5
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-8 meta mt-16 flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2023" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diamond, { className: "size-1 text-stone" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2026" })
				]
			})
		]
	});
}
//#endregion
export { Home as component };
