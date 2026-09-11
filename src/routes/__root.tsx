import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Atmosphere } from "@/components/atmosphere";
import appCss from "../styles.css?url";

const APP_NAME = "Wiersze autorstwa Piotra Barana";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: "Kolekcja wierszy autorstwa Piotra Barana — trzynaście utworów z lat 2023–2026.",
      },
      { name: "theme-color", content: "#0b0a09" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="pl" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-ink text-ivory">
        <PreviewHostBridge />
        <Atmosphere />
        <AuthProvider>
          <div className="relative z-10">
            <Outlet />
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-8 text-center">
      <p className="font-display text-[0.7rem] tracking-[0.42em] text-stone uppercase">404</p>
      <h1 className="mt-4 font-display text-3xl text-ivory">Strony nie odnaleziono</h1>
      <Link to="/" className="cta-link mt-8">
        Powrót
      </Link>
    </main>
  );
}
