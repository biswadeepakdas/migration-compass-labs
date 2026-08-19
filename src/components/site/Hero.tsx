import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-migration.jpg";

const proof = [
  { value: "300+", label: "Workloads migrated" },
  { value: "42%", label: "Average run-cost saved" },
  { value: "Zero", label: "Data loss migrations" },
  { value: "6 wks", label: "Typical first cutover" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--primary) 40%, transparent), transparent 55%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:py-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <ShieldCheck className="size-3.5" /> Azure migration specialists
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Move off on-prem.
            <br />
            <span className="text-gradient">Modernize as you migrate.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We lift enterprise workloads, pipelines and history out of legacy data centres into Azure
            — then automate what used to be manual. Migration, modernization, engineering and QA
            delivered by one accountable team.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Get a migration blueprint <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#approach">See how we deliver</a>
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label}>
                <dt className="font-display text-2xl font-bold text-primary">{p.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <img
              src={heroImage}
              alt="Data flowing from on-premises server racks into a cloud network"
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}