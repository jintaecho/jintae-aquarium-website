import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-aquarium.jpg";
import roomImg from "@/assets/aquarium-room.jpg";
import fishImg from "@/assets/fish-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jintae Aquarium — Maintenance-free aquariums" },
      {
        name: "description",
        content:
          "Jintae Aquarium builds AI-powered aquariums that require no maintenance. Sit back and enjoy nature like a painting on the wall.",
      },
      { property: "og:title", content: "Jintae Aquarium" },
      {
        property: "og:description",
        content: "Aquariums that take care of themselves, powered by AI.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Tropical fish swimming through sun-lit water"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 text-primary-foreground animate-fade-up">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Jintae Aquarium
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
            An aquarium <em className="text-accent">should feel</em> like a painting on the wall.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-primary-foreground/80 font-light">
            We are building aquariums that require no maintenance at all — so anyone
            can welcome a piece of nature into their home.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/vision"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-medium hover:translate-y-[-2px] transition-transform"
            >
              Our vision →
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 px-6 py-3 rounded-full text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-32">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          01 — The idea
        </div>
        <p className="font-display text-3xl md:text-5xl leading-[1.2] text-foreground">
          Aquariums bring some of the most amazing presence of nature into your space.
          And yet keeping one alive demands knowledge, patience, and constant attention.
          <span className="text-muted-foreground"> We think it shouldn't.</span>
        </p>
      </section>

      {/* SPLIT IMAGE + COPY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-10 lg:gap-20 items-center pb-24">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_oklch(0.22_0.05_240/0.45)]">
          <img
            src={roomImg}
            alt="Modern living room with a large built-in aquarium"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            02 — The owner
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Sit back. <br />Enjoy the view.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The owner of a Jintae aquarium does not think about water chemistry,
            filter changes, or feeding schedules. They simply look up from their book
            and watch the light move across the water.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
            {[
              ["00h", "of upkeep per week"],
              ["24/7", "AI health monitoring"],
              ["100%", "of decisions handled"],
              ["1", "thing to do — enjoy"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border pt-3">
                <div className="font-display text-3xl text-foreground">{k}</div>
                <div className="text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-primary text-primary-foreground py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            03 — What we watch over
          </div>
          <h2 className="font-display text-4xl md:text-5xl max-w-3xl">
            Every aspect of your aquarium, observed in real time.
          </h2>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                t: "Water",
                d: "Continuous sensing of pH, temperature, salinity, ammonia and nitrate — corrected before anything drifts.",
              },
              {
                t: "Fish",
                d: "Computer vision tracks behavior, appetite and stress signals to catch issues days before they become visible.",
              },
              {
                t: "Filters",
                d: "Self-diagnosing media. The system schedules its own service and orders parts before they wear out.",
              },
              {
                t: "Algae",
                d: "Adaptive lighting and biological balance keep growth in check — no scrubbing, no scraping.",
              },
            ].map((p, i) => (
              <div
                key={p.t}
                className="border border-primary-foreground/15 rounded-sm p-6 hover:bg-primary-foreground/5 transition-colors"
              >
                <div className="text-accent text-xs">0{i + 1}</div>
                <div className="font-display text-2xl mt-3">{p.t}</div>
                <p className="text-sm text-primary-foreground/70 mt-3 leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-32 grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={fishImg}
              alt="Single tropical fish in deep blue water"
              width={1200}
              height={1400}
              loading="lazy"
              className="w-full h-full object-cover animate-drift"
            />
          </div>
        </div>
        <blockquote className="md:col-span-3">
          <p className="font-display text-3xl md:text-4xl leading-tight text-foreground">
            "Aquariums are wonderful. We want anyone who wants to own one to do so
            with the most ease."
          </p>
          <footer className="mt-6 text-sm text-muted-foreground uppercase tracking-widest">
            — Jintae Aquarium
          </footer>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Start a conversation →
          </Link>
        </blockquote>
      </section>

      <SiteFooter />
    </div>
  );
}
