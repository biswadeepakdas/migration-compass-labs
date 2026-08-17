import { CloudCog } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 font-display font-bold">
          <CloudCog className="size-5 text-primary" />
          NorthPeakCloud
        </div>
        <p className="text-sm text-muted-foreground">
          Cloud migration, modernization, automation, engineering and QA.
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NorthPeak Cloud
        </p>
      </div>
    </footer>
  );
}