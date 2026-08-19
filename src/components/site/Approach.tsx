const steps = [
  {
    step: "01",
    title: "Assess",
    body: "Automated discovery of legacy TFS or Azure DevOps organizations to estimate the workload\nInitial suggestion on migration approach\nPossible timeline on initial Simulation for verification and Production migration",
  },
  {
    step: "02",
    title: "Plan waves",
    body: "Workloads grouped into migration waves after quantifying workload\nTimelines for Simulation and Production migration",
  },
  {
    step: "03",
    title: "Migrate & modernize",
    body: "Simulation completion\nVerification sign-off before Production migration\nProduction migration",
  },
];

export function Approach() {
  return (
    <section id="approach" className="border-y border-border bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Method</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A migration you can rehearse</h2>
          <p className="mt-4 text-muted-foreground">
            Nothing goes to production untested. Every wave is dry-run against a mirrored environment
            and validated with automated reconciliation before the switch.
          </p>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="surface-card rounded-xl p-6">
              <span className="font-display text-sm font-bold tracking-widest text-primary">
                {s.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {s.body.split("\n").filter(Boolean).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}