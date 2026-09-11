import { i as __toESM } from "./_runtime.mjs";
import { B as require_react, _ as Link, b as require_jsx_runtime, v as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowLeft, n as ChevronLeft, r as ArrowRight } from "./_libs/lucide-react.mjs";
import { a as poemLabel, n as Route, o as poems, r as Diamond } from "./_ssr/router-CRxRMrN_.mjs";
import { t as clsx } from "./_libs/clsx.mjs";
import { t as twMerge } from "./_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-6PcRY7Wm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function PoemSlider({ children, className }) {
	const scrollerRef = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const measure = (0, import_react.useCallback)(() => {
		const el = scrollerRef.current;
		if (!el) return;
		const max = el.scrollHeight - el.clientHeight;
		setProgress(max <= 0 ? 0 : el.scrollTop / max);
	}, []);
	(0, import_react.useLayoutEffect)(() => {
		measure();
		const el = scrollerRef.current;
		if (!el) return;
		const observer = new ResizeObserver(measure);
		observer.observe(el);
		if (el.firstElementChild) observer.observe(el.firstElementChild);
		window.addEventListener("resize", measure);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", measure);
		};
	}, [measure, children]);
	const setFromClientY = (clientY) => {
		const track = trackRef.current;
		const el = scrollerRef.current;
		if (!track || !el) return;
		const rect = track.getBoundingClientRect();
		const ratio = Math.min(1, Math.max(0, (clientY - rect.top - 16) / Math.max(1, rect.height - 32)));
		el.scrollTop = ratio * Math.max(0, el.scrollHeight - el.clientHeight);
		setProgress(ratio);
	};
	const onPointerDown = (event) => {
		dragging.current = true;
		event.currentTarget.setPointerCapture(event.pointerId);
		event.currentTarget.dataset.dragging = "true";
		setFromClientY(event.clientY);
	};
	const onPointerMove = (event) => {
		if (!dragging.current) return;
		setFromClientY(event.clientY);
	};
	const onPointerUp = (event) => {
		dragging.current = false;
		event.currentTarget.dataset.dragging = "false";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex min-h-0 flex-1", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scrollerRef,
			onScroll: measure,
			className: "poem-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 md:pr-4",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: trackRef,
			className: "bookmark-track ml-1 hidden max-md:flex",
			role: "slider",
			"aria-orientation": "vertical",
			"aria-label": "Przewiń wiersz",
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			"aria-valuenow": Math.round(progress * 100),
			tabIndex: 0,
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onPointerCancel: onPointerUp,
			onKeyDown: (event) => {
				const el = scrollerRef.current;
				if (!el) return;
				if (event.key === "ArrowDown" || event.key === "ArrowRight") {
					el.scrollTop += 48;
					event.preventDefault();
				}
				if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
					el.scrollTop -= 48;
					event.preventDefault();
				}
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bookmark-cap bookmark-cap-top" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bookmark-thumb",
					style: { top: `${16 + progress * 68}%` }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bookmark-cap bookmark-cap-bottom" })
			]
		})]
	});
}
function PoemPage() {
	const { poem, neighbors } = Route.useLoaderData();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "ArrowLeft" && neighbors.prev) navigate({
				to: "/wiersze/$slug",
				params: { slug: neighbors.prev.slug }
			});
			if (event.key === "ArrowRight" && neighbors.next) navigate({
				to: "/wiersze/$slug",
				params: { slug: neighbors.next.slug }
			});
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [neighbors, navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex h-dvh w-full max-w-3xl flex-col overflow-hidden px-5 pt-8 pb-8 sm:px-10 md:pt-12 md:pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "enter-1 flex shrink-0 items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiersze",
					className: "cta-compact",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-3.5",
						strokeWidth: 1.5
					}), "Spis"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "meta tabular-nums",
					children: [
						poem.id.toString().padStart(2, "0"),
						" / ",
						poems.length.toString().padStart(2, "0")
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoemSlider, {
				className: "mt-6 min-h-0 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mx-auto max-w-xl pb-16 pr-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "enter-2 border-b border-hairline pb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "poem-title",
									children: poem.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-body text-lg text-stone italic sm:text-xl",
									children: "— Piotr Baran"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-body text-base text-muted italic",
									children: poemLabel(poem)
								}), poem.year ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diamond, { className: "size-1 text-stone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "meta",
									children: poem.year
								})] }) : null]
							}),
							poem.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-body text-base text-muted italic",
								children: poem.note
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "enter-3 poem-verse mt-8",
						children: poem.lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn(line === "" && "h-5"),
							children: line === "" ? "\xA0" : line
						}, `${poem.slug}-${index}`))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "enter-4 mt-4 flex shrink-0 items-center justify-between gap-3 border-t border-hairline pt-4 pr-14",
				"aria-label": "Nawigacja między wierszami",
				children: [neighbors.prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiersze/$slug",
					params: { slug: neighbors.prev.slug },
					className: "group flex min-h-11 min-w-0 flex-1 items-center gap-2 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-3.5 shrink-0 text-stone",
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "nav-meta block",
							children: "Poprzedni"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-body text-base text-ivory-dim group-hover:text-stone",
							children: poemLabel(neighbors.prev)
						})]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), neighbors.next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiersze/$slug",
					params: { slug: neighbors.next.slug },
					className: "group flex min-h-11 min-w-0 flex-1 items-center justify-end gap-2 text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "nav-meta block",
							children: "Następny"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-body text-base text-ivory-dim group-hover:text-stone",
							children: poemLabel(neighbors.next)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-3.5 shrink-0 text-stone",
						strokeWidth: 1.5
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
			})
		]
	});
}
//#endregion
export { PoemPage as component };
