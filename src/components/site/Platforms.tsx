import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const tabs = [
  {
    id: "azure",
    label: "Microsoft Azure",
    headline: "Azure DevOps done properly",
    body: "We migrate TFS/Azure DevOps Server collections to Azure DevOps Services with Users, Work items, repositories (GIT and/or TFVC), Pipelines and Test Plans/Suites, Feeds/Artifacts etc..",
    tags: ["Azure DevOps"],
  },
  {
    id: "hybrid",
    label: "Hybrid & on-prem integration",
    headline: "For the estate that cannot move all at once",
    body: "Keep regulated workloads on-prem while new services run in Azure, connected by secure networking, unified identity, shared pipelines and one observability plane.",
    tags: ["Azure Arc", "Private connectivity", "Unified CI/CD", "Observability"],
  },
];

export function Platforms() {
  return (
    <section id="platforms" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Platforms</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Deep on Azure, honest about what stays on-prem</h2>
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