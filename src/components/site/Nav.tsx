import { Button } from "@/components/ui/button";
import { CloudCog } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#platforms", label: "Platforms" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <CloudCog className="size-6 text-primary" />
          NorthPeak<span className="text-primary">Cloud</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button variant="hero" size="default" asChild>
          <a href="#contact">Book an assessment</a>
        </Button>
      </div>
    </header>
  );
}