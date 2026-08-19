import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Approach } from "@/components/site/Approach";
import { Platforms } from "@/components/site/Platforms";
import { Outcomes } from "@/components/site/Outcomes";
import { Faq } from "@/components/site/Faq";
import { ContactCta } from "@/components/site/ContactCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloud Migration to Azure | NorthPeak Cloud" },
      {
        name: "description",
        content:
          "On-prem to Azure migration with full DevOps history, application modernization, workflow automation, app development and QA engineering.",
      },
      { property: "og:title", content: "Cloud Migration to Azure | NorthPeak Cloud" },
      {
        property: "og:description",
        content:
          "Migrate off on-prem, modernize as you go, and automate delivery — one accountable engineering team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Platforms />
        <Outcomes />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
