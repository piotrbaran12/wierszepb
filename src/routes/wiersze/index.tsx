import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Diamond } from "@/components/atmosphere";
import { poemLabel, poems } from "@/lib/poems";

export const Route = createFileRoute("/wiersze/")({
  component: PoemsIndex,
  head: () => ({
    meta: [{ title: "Wiersze — Piotr Baran" }],
  }),
});

function pad(id: number) {
  return id.toString().padStart(2, "0");
}

function PoemsIndex() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-6 pt-10 pb-28 sm:px-10 md:pt-14">
      <header className="enter-1 flex items-center justify-between gap-4">
        <Link to="/" className="cta-compact">
          <ArrowLeft className="size-3.5" strokeWidth={1.5} />
          Menu
        </Link>
        <span className="meta">
          XIII utworów
        </span>
      </header>

      <div className="enter-2 mt-12">
        <p className="kicker">
          Spis
        </p>
        <h1 className="index-title mt-3">
          Wiersze
        </h1>
        <p className="mt-2 font-body text-xl text-ivory-dim italic">Piotr Baran</p>
      </div>

      <div className="enter-3 mt-6 mb-8 flex items-center gap-3">
        <span className="h-px flex-1 bg-hairline" />
        <Diamond className="size-1.5 text-stone" />
        <span className="h-px flex-1 bg-hairline" />
      </div>

      <nav aria-label="Lista wierszy" className="stagger-list">
        {poems.map((poem) => (
          <Link
            key={poem.slug}
            to="/wiersze/$slug"
            params={{ slug: poem.slug }}
            className="poem-row group"
          >
            <span className="numeral">
              {pad(poem.id)}
            </span>
            <span className="min-w-0">
              <span className="block font-body text-xl leading-snug sm:text-2xl">
                {poemLabel(poem)}
              </span>
              {poem.year ? (
                <span className="meta mt-1 block">
                  {poem.year}
                </span>
              ) : null}
            </span>
            <span className="nav-meta hidden sm:inline">
              Czytaj
            </span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
