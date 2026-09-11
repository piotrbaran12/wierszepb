import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as poemLabel, o as poems, r as Diamond } from "./router-CRxRMrN_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wiersze-DLEtQP7q.js
var import_jsx_runtime = require_jsx_runtime();
function pad(id) {
	return id.toString().padStart(2, "0");
}
function PoemsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-6 pt-10 pb-28 sm:px-10 md:pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "enter-1 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "cta-compact",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-3.5",
						strokeWidth: 1.5
					}), "Menu"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "meta",
					children: "XIII utworów"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-2 mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Spis"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "index-title mt-3",
						children: "Wiersze"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-body text-xl text-ivory-dim italic",
						children: "Piotr Baran"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-3 mt-6 mb-8 flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diamond, { className: "size-1.5 text-stone" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-hairline" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Lista wierszy",
				className: "stagger-list",
				children: poems.map((poem) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiersze/$slug",
					params: { slug: poem.slug },
					className: "poem-row group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "numeral",
							children: pad(poem.id)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-body text-xl leading-snug sm:text-2xl",
								children: poemLabel(poem)
							}), poem.year ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "meta mt-1 block",
								children: poem.year
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "nav-meta hidden sm:inline",
							children: "Czytaj"
						})
					]
				}, poem.slug))
			})
		]
	});
}
//#endregion
export { PoemsIndex as component };
