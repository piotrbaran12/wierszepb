import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { Diamond } from "@/components/atmosphere";
import { PoemSlider } from "@/components/poem-slider";
import { getNeighbors, getPoemBySlug, poemLabel, poems } from "@/lib/poems";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/wiersze/$slug")({
  loader: ({ params }) => {
    const poem = getPoemBySlug(params.slug);
    if (!poem) throw notFound();
    return { poem, neighbors: getNeighbors(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${poemLabel(loaderData.poem)} — Piotr Baran`
          : "Wiersz — Piotr Baran",
      },
    ],
  }),
  component: PoemPage,
});

function PoemPage() {
  const { poem, neighbors } = Route.useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && neighbors.prev) {
        void navigate({ to: "/wiersze/$slug", params: { slug: neighbors.prev.slug } });
      }
      if (event.key === "ArrowRight" && neighbors.next) {
        void navigate({ to: "/wiersze/$slug", params: { slug: neighbors.next.slug } });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [neighbors, navigate]);

  return (
    <main className="mx-auto flex h-dvh w-full max-w-3xl flex-col overflow-hidden px-5 pt-8 pb-8 sm:px-10 md:pt-12 md:pb-10">
      <header className="enter-1 flex shrink-0 items-center justify-between gap-4">
        <Link to="/wiersze" className="cta-compact">
          <ChevronLeft className="size-3.5" strokeWidth={1.5} />
          Spis
        </Link>
        <span className="meta tabular-nums">
          {poem.id.toString().padStart(2, "0")} / {poems.length.toString().padStart(2, "0")}
        </span>
      </header>

      <PoemSlider className="mt-6 min-h-0 flex-1">
        <article className="mx-auto max-w-xl pb-16 pr-1">
          <header className="enter-2 border-b border-hairline pb-6">
            <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
              <h1 className="poem-title">
                {poem.title}
              </h1>
              <p className="font-body text-lg text-stone italic sm:text-xl">
                — Piotr Baran
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="font-body text-base text-muted italic">{poemLabel(poem)}</span>
              {poem.year ? (
                <>
                  <Diamond className="size-1 text-stone" />
                  <span className="meta">{poem.year}</span>
                </>
              ) : null}
            </div>
            {poem.note ? (
              <p className="mt-3 font-body text-base text-muted italic">{poem.note}</p>
            ) : null}
          </header>

          <div className="enter-3 poem-verse mt-8">
            {poem.lines.map((line, index) => (
              <p
                key={`${poem.slug}-${index}`}
                className={cn(line === "" && "h-5")}
              >
                {line === "" ? "\u00A0" : line}
              </p>
            ))}
          </div>
        </article>
      </PoemSlider>

      <nav
        className="enter-4 mt-4 flex shrink-0 items-center justify-between gap-3 border-t border-hairline pt-4 pr-14"
        aria-label="Nawigacja między wierszami"
      >
        {neighbors.prev ? (
          <Link
            to="/wiersze/$slug"
            params={{ slug: neighbors.prev.slug }}
            className="group flex min-h-11 min-w-0 flex-1 items-center gap-2 text-left"
          >
            <ArrowLeft className="size-3.5 shrink-0 text-stone" strokeWidth={1.5} />
            <span className="min-w-0">
              <span className="nav-meta block">
                Poprzedni
              </span>
              <span className="block truncate font-body text-base text-ivory-dim group-hover:text-stone">
                {poemLabel(neighbors.prev)}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {neighbors.next ? (
          <Link
            to="/wiersze/$slug"
            params={{ slug: neighbors.next.slug }}
            className="group flex min-h-11 min-w-0 flex-1 items-center justify-end gap-2 text-right"
          >
            <span className="min-w-0">
              <span className="nav-meta block">
                Następny
              </span>
              <span className="block truncate font-body text-base text-ivory-dim group-hover:text-stone">
                {poemLabel(neighbors.next)}
              </span>
            </span>
            <ArrowRight className="size-3.5 shrink-0 text-stone" strokeWidth={1.5} />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
