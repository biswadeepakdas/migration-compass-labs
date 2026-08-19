import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CloudUpload,
  Boxes,
  Workflow,
  Bot,
  Code2,
  TestTubeDiagonal,
} from "lucide-react";

const services = [
  {
    icon: CloudUpload,
    title: "On-prem to Azure migration",
    body: "Discovery, dependency mapping and wave planning, then migration of various DevOps organizations.",
    points: ["Assessment (TCO model, if required)", "Data & DevOps history migration", "Cutover with zero data loss"],
  },
  {
    icon: Boxes,
    title: "Application modernization",
    body: "Rearchitect monoliths into containers, managed services and serverless so migration pays for itself instead of moving the same bill.",
    points: ["Modularization & Containerization of monolith applications/pipeline workloads/Databases etc.", "Targeted as managed PaaS environments", "Cost & resilience tuning"],
  },
  {
    icon: Workflow,
    title: "DevOps & workflow automation",
    body: "CI/CD pipelines, infrastructure as code and release gates that replace ticket-driven handoffs with repeatable, auditable delivery.",
    points: ["Azure DevOps & GitHub Actions", "Terraform / Bicep IaC", "Environment provisioning"],
  },
  {
    icon: Bot,
    title: "Process automation",
    body: "Automate approvals, reporting, provisioning and back-office toil with Power Platform, Logic Apps, Step Functions and custom services.",
    points: ["Integration & API orchestration", "Scheduled & event-driven jobs", "Human-in-the-loop approvals"],
  },
  {
    icon: Code2,
    title: "Application development",
    body: "Product-minded engineering squads building cloud-native web, data and integration platforms on the foundation we just migrated.",
    points: [".NET, Node & React", "Event-driven architecture", "Secure by default"],
  },
  {
    icon: TestTubeDiagonal,
    title: "QA & test engineering",
    body: "Automated regression, performance and migration-validation suites that prove the cloud environment behaves exactly like the one you left.",
    points: ["Playwright & API automation", "Load & failover testing", "Data reconciliation checks"],
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Capabilities</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          One team for the whole journey — not six vendors
        </h2>
        <p className="mt-4 text-muted-foreground">
          Most migrations stall because planning, engineering and testing live in different companies.
          We own the outcome end to end.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="surface-card group h-full transition-transform hover:-translate-y-1">
            <CardHeader>
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <s.icon className="size-5" />
              </span>
              <CardTitle className="mt-4 text-lg">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.body}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}