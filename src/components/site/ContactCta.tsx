import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function ContactCta() {
  return (
    <section id="contact" className="border-t border-border bg-hero py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Start with&nbsp;<span className="text-gradient">migration assessment</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Generally takes a week or two, provided the adequate access is provided on the current organizations. This can be fixed in the prior calls. Typically, this is fixed cost activity, after which you have clarity on the following -
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {[
              "Dependency and readiness map of your current organizations",
              "Estimation for your migration workloads",
              "High level Simulation/Migration plan with risks, owners and cutover windows",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <form
          className="surface-card rounded-2xl p-8"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Thanks — we'll be in touch within one business day.");
            (e.currentTarget as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
            </div>
          </div>
          <div className="mt-4 grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Company name" />
          </div>
          <div className="mt-4 grid gap-2">
            <Label htmlFor="details">What are you moving?</Label>
            <Textarea
              id="details"
              name="details"
              rows={4}
              placeholder="e.g. Azure DevOps Server 2019, 120 VMs, SQL Server, two legacy .NET apps"
            />
          </div>
          <Button type="submit" variant="hero" size="xl" className="mt-6 w-full">
            Request my assessment
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            We reply within one business day. No sales sequences.
          </p>
        </form>
      </div>
    </section>
  );
}