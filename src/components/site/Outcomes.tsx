const cases = [
  {
    sector: "Financial services",
    title: "18 years of TFS history moved in one weekend",
    body: "A 900-developer estate migrated from on-prem Azure DevOps Server to Azure DevOps Services with work items, links, attachments and pipelines intact. Teams shipped on Monday morning.",
    metric: "0 hrs unplanned downtime",
  },
  {
    sector: "Manufacturing",
    title: "Datacentre exit, 44% lower run cost",
    body: "160 VMs rationalised to 96, core ERP integrations re-platformed to managed services and containers, with Terraform-managed environments replacing manual builds.",
    metric: "44% run-cost reduction",
  },
  {
    sector: "Healthcare",
    title: "Release cycle from 6 weeks to daily",
    body: "Automated CI/CD with quality gates and a Playwright regression suite covering 1,400 clinical journeys, validated against the migrated Azure environment.",
    metric: "92% regression automated",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="border-y border-border bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Outcomes</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Results our clients can point at</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="surface-card flex flex-col rounded-xl p-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {c.sector}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.body}</p>
              <p className="mt-6 font-display text-xl font-bold text-primary">{c.metric}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}