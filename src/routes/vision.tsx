import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — Jintae Aquarium" },
      {
        name: "description",
        content:
          "Why Jintae Aquarium believes ownership should feel effortless — and what that means for the future of indoor nature.",
      },
      { property: "og:title", content: "Vision — Jintae Aquarium" },
      {
        property: "og:description",
        content: "Aquariums should be enjoyed, not maintained.",
      },
    ],
  }),
  component: Vision,
});

function Vision() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-40 pb-20 mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Our vision
        </div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
          Nature, indoors —<br />
          <em className="text-tide">without the work.</em>
        </h1>
        <p className="mt-8 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
          We believe owning an aquarium should feel like owning a beautiful
          painting. Something you appreciate quietly, every day, without ever
          worrying about the craft behind it.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-10 pb-20 space-y-16">
        {[
          {
            n: "I.",
            t: "Aquariums are wonderful.",
            b: "There is something deeply calming about a small, living world. A glass of water that breathes, moves, and changes — bringing the rhythms of the ocean into a room.",
          },
          {
            n: "II.",
            t: "But maintenance gets in the way.",
            b: "Most people who try aquariums give up. Not because they stop loving them, but because the upkeep — chemistry, cleaning, scheduling — becomes a second job. The barrier is craft, not curiosity.",
          },
          {
            n: "III.",
            t: "Technology can carry the burden.",
            b: "Artificial intelligence has matured to the point where it can watch, learn, and act faster than any caretaker. We are designing systems that take this responsibility entirely off the owner.",
          },
          {
            n: "IV.",
            t: "So that anyone can keep an aquarium.",
            b: "Children. Busy parents. People who travel. People who simply want to come home and exhale. Our purpose is to make the most beautiful hobby in the world accessible to all of them.",
          },
        ].map((s) => (
          <div key={s.n} className="grid md:grid-cols-[80px_1fr] gap-6 items-start">
            <div className="font-display text-3xl text-accent">{s.n}</div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl">{s.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-10 pb-20">
        <div className="border-t border-border pt-10 flex flex-wrap items-center justify-between gap-6">
          <p className="font-display text-2xl max-w-md">
            See the technology that makes this possible.
          </p>
          <Link
            to="/technology"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Explore the technology →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
