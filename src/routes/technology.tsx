import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Jintae Aquarium" },
      {
        name: "description",
        content:
          "AI-driven systems that monitor water, fish, filters, and algae — keeping your aquarium healthy without lifting a finger.",
      },
      { property: "og:title", content: "Technology — Jintae Aquarium" },
      {
        property: "og:description",
        content:
          "AI that quietly oversees every part of your aquarium, around the clock.",
      },
    ],
  }),
  component: Technology,
});

const systems = [
  {
    k: "Water intelligence",
    d: "A sensor array continuously reads temperature, pH, salinity, ammonia, nitrite and nitrate. Subtle drifts trigger automatic dosing and circulation adjustments.",
    s: ["pH 6.8–8.4", "Temp ±0.1 °C", "NH₃ < 0.02 ppm"],
  },
  {
    k: "Fish vision",
    d: "Computer vision learns each fish individually. The model flags changes in swim pattern, appetite, color and social behavior — often days before symptoms appear.",
    s: ["Per-fish tracking", "Behavioral baseline", "Early-warning alerts"],
  },
  {
    k: "Filter awareness",
    d: "Filtration components self-report flow, pressure and biological load. The system schedules maintenance, orders replacements, and walks a technician through service.",
    s: ["Predictive servicing", "Auto re-ordering", "Zero downtime"],
  },
  {
    k: "Algae control",
    d: "Adaptive spectrum lighting and biological balancing prevent algae from taking hold. No more scrubbing, no more chemical battles.",
    s: ["Adaptive lighting", "Biological balance", "Crystal-clear glass"],
  },
];

function Technology() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-40 pb-20 mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Technology
        </div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
          A quiet intelligence,<br />
          <em className="text-tide">always watching.</em>
        </h1>
        <p className="mt-8 text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
          Behind the glass sits a system that senses, predicts, and acts —
          combining modern AI with proven aquarium science. The result is a tank
          that simply stays well.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 pb-24 grid md:grid-cols-2 gap-6">
        {systems.map((sys, i) => (
          <article
            key={sys.k}
            className="group bg-card border border-border rounded-sm p-8 hover:shadow-[0_30px_80px_-30px_oklch(0.22_0.05_240/0.45)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-start justify-between">
              <div className="font-display text-5xl text-accent/70 group-hover:text-accent transition-colors">
                0{i + 1}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                System
              </div>
            </div>
            <h2 className="font-display text-3xl mt-6">{sys.k}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{sys.d}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {sys.s.map((spec) => (
                <li
                  key={spec}
                  className="text-xs text-foreground/70 border border-border rounded-full px-3 py-1"
                >
                  {spec}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <p className="font-display text-3xl md:text-5xl leading-tight">
            All of this so the only question you ever ask is:
            <em className="text-accent"> "Did you see what the fish just did?"</em>
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm hover:translate-y-[-2px] transition-transform"
          >
            Talk to us →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
