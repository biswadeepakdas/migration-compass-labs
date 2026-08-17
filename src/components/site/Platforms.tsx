import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const tabs = [
  {
    id: "azure",
    label: "Microsoft Azure",
    headline: "Landing zones, AKS and Azure DevOps done properly",
    body: "We migrate TFS/Azure DevOps Server collections to Azure DevOps Services with full work item, repo, pipeline and test artifact history, and stand up enterprise-scale landing zones with policy, identity and networking baked in.",
    tags: ["Azure Landing Zones", "AKS", "Azure SQL", "Azure DevOps", "Bicep", "Entra ID"],
  },
  {
    id: "aws",
    label: "Amazon Web Services",
    headline: "Control Tower foundations with pragmatic re-platforming",
    body: "Multi-account foundations via Control Tower and Organizations, workloads moved with MGN and DMS, then modernized onto EKS, Aurora, Lambda and Step Functions where it lowers cost and toil.",
    tags: ["Control Tower", "EKS", "Aurora", "Lambda", "Terraform", "DMS"],
  },
  {
    id: "hybrid",
    label: "Hybrid & multi-cloud",
    headline: "For the estate that cannot move all at once",
    body: "Keep regulated workloads on-prem while new services run in cloud, connected by secure networking, unified identity, shared pipelines and one observability plane.",
    tags: ["Arc", "Private connectivity", "Unified CI/CD", "Observability"],
  },
];

export function Platforms() {
  return (
    <section id="platforms" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Platforms</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Deep on two clouds, honest about both</h2>
      </div>
      <Tabs defaultValue="azure" className="mt-10">
        <TabsList className="bg-secondary">
          {tabs.map((t) => (
            <TabsTrigger key={t.id} value={t.id}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((t) => (
          <TabsContent key={t.id} value={t.id}>
            <div className="surface-card mt-6 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">{t.headline}</h3>
              <p className="mt-3 max-w-3xl text-muted-foreground">{t.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}