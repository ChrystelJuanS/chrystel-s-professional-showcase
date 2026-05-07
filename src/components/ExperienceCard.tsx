import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Experience } from "@/data/cv";

export function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative w-full text-left rounded-2xl border border-border bg-card px-6 py-7 md:px-8 md:py-8 transition-all duration-300 hover:border-accent/60 hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {exp.period}
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mt-2 leading-tight">
              {exp.company}
              <span className="text-muted-foreground font-light"> · {exp.location}</span>
            </h3>
            <p className="font-display italic text-lg text-foreground/80 mt-1">{exp.role}</p>
            <p className="text-sm text-muted-foreground mt-3">{exp.tagline}</p>
            <ul className="mt-4 space-y-1.5">
              {exp.summary.map((s) => (
                <li key={s} className="text-sm text-foreground/85 flex gap-2">
                  <span className="text-accent mt-2 inline-block w-1 h-1 rounded-full bg-accent shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0 rounded-full border border-border p-2.5 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        <span className="absolute bottom-3 right-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 group-hover:text-accent transition-colors">
          Voir le détail
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0 [&>button]:hidden">
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-8 py-5 bg-card/95 backdrop-blur border-b border-border">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">{exp.period}</p>
              <DialogTitle className="font-display text-2xl md:text-3xl font-semibold mt-1">
                {exp.company} <span className="text-muted-foreground font-light">· {exp.role}</span>
              </DialogTitle>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-border p-2 hover:bg-secondary transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="px-8 py-8 space-y-10">
            {exp.kpis.length > 0 && (
              <section>
                <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
                  KPI clés
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {exp.kpis.map((k) => (
                    <div
                      key={k.label}
                      className="rounded-xl border border-border bg-secondary/40 p-4"
                    >
                      <div className="font-display text-2xl md:text-3xl font-semibold text-accent leading-none">
                        {k.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 leading-snug">
                        {k.label}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <Section label="Contexte">
              <p className="text-foreground/85 leading-relaxed">{exp.context}</p>
            </Section>

            <Section label="Actions">
              <ul className="space-y-2.5">
                {exp.actions.map((a) => (
                  <li key={a} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <span className="font-display text-accent mt-1">→</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section label="Résultats">
              <ul className="space-y-2.5">
                {exp.results.map((r) => (
                  <li key={r} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <span className="font-display text-accent mt-1">✓</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{label}</h4>
      {children}
    </section>
  );
}
