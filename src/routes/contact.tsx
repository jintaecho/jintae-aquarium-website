import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jintae Aquarium" },
      {
        name: "description",
        content:
          "Reach out to Jintae Aquarium — partnerships, early access, or simply to say hello.",
      },
      { property: "og:title", content: "Contact — Jintae Aquarium" },
      {
        property: "og:description",
        content: "Tell us about the aquarium you'd love to come home to.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-40 pb-20 mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-2 gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Contact
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">
            Tell us about the aquarium you'd love to come home to.
          </h1>
          <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
            We are early, deliberate, and selective about partners. If our vision
            speaks to you — as a future owner, collaborator, or builder — we'd
            love to hear from you.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </div>
              <div className="mt-1 font-display text-xl">hello@jintaeaquarium.com</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Studio
              </div>
              <div className="mt-1 font-display text-xl">By appointment</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-card border border-border rounded-sm p-8 md:p-10 space-y-6"
        >
          {sent ? (
            <div className="py-16 text-center">
              <div className="font-display text-3xl">Thank you.</div>
              <p className="mt-3 text-muted-foreground">
                We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <>
              {[
                { id: "name", label: "Your name", type: "text" },
                { id: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-foreground transition-colors"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-foreground resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Send message →
              </button>
            </>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
