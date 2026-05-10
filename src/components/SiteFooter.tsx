import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">Jintae Aquarium</div>
          <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
            Aquariums that take care of themselves — so you can simply enjoy the view.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <div className="text-primary-foreground/50 uppercase tracking-widest text-xs mb-3">Explore</div>
          <Link to="/vision" className="block hover:text-accent transition-colors">Our Vision</Link>
          <Link to="/technology" className="block hover:text-accent transition-colors">Technology</Link>
          <Link to="/contact" className="block hover:text-accent transition-colors">Contact</Link>
        </div>
        <div className="text-sm">
          <div className="text-primary-foreground/50 uppercase tracking-widest text-xs mb-3">Studio</div>
          <p className="text-primary-foreground/80">hello@jintaeaquarium.com</p>
          <p className="text-primary-foreground/60 mt-1">Building the maintenance-free aquarium.</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-primary-foreground/50 flex justify-between">
          <span>© {new Date().getFullYear()} Jintae Aquarium</span>
          <span>Effortless nature, indoors.</span>
        </div>
      </div>
    </footer>
  );
}
