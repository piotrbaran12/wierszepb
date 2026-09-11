import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Diamond, OrnamentRule } from "@/components/atmosphere";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Wiersze autorstwa Piotra Barana" }],
  }),
});

function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center px-8 py-20 md:px-16 md:pr-24">
      <p className="enter-1 kicker">
        Kolekcja literacka
      </p>

      <div className="enter-2 mt-7">
        <OrnamentRule />
      </div>

      <h1 className="mt-8 text-center">
        <span className="letter-title hero-word">
          {"Wiersze".split("").map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </span>
        <span className="enter-4 hero-sub">
          autorstwa Piotra Barana
        </span>
      </h1>

      <div className="enter-5 mt-10 h-px">
        <div className="shimmer-line mx-auto" />
      </div>

      <p className="enter-6 mx-auto mt-8 max-w-md text-center font-body text-lg leading-relaxed text-muted">
        Trzynaście utworów. Ciemny atramencie, ciepły papier, głos który nie umie milczeć.
      </p>

      <div className="enter-7 mt-12">
        <Link to="/wiersze" className="cta-link">
          Przejdź do wierszy
          <ArrowRight className="size-3.5" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="enter-8 meta mt-16 flex items-center gap-3">
        <span>2023</span>
        <Diamond className="size-1 text-stone" />
        <span>2026</span>
      </div>
    </main>
  );
}
