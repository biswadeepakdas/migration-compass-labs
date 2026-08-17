import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does an on-prem to cloud migration take?",
    a: "Assessment takes two to three weeks. The first production wave usually lands within six weeks, then remaining waves run every two to four weeks depending on the size and coupling of the estate.",
  },
  {
    q: "Can we keep our full Azure DevOps history?",
    a: "Yes. Work items with links and attachments, Git and TFVC repos, build and release definitions, test plans and dashboards are migrated with identity mapping, then validated by automated reconciliation reports.",
  },
  {
    q: "Do you lift and shift or modernize?",
    a: "Both, deliberately. Low-value workloads move as-is to exit the datacentre quickly; workloads where cost, scale or reliability matter get containerized or moved to managed services in the same wave.",
  },
  {
    q: "How do you prove nothing broke?",
    a: "Every migration ships with automated regression, integration and performance suites plus data reconciliation. We run them against the mirrored environment before cutover and immediately after.",
  },
  {
    q: "Can you work alongside our internal teams?",
    a: "That is the default. We embed with your engineers, document everything as code, and hand over runbooks and pipelines so your team owns the platform after we leave.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">Questions we get asked first</h2>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}