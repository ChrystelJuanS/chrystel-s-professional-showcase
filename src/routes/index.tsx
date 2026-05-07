import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { ExperienceCard } from "@/components/ExperienceCard";
import {
  experiences,
  skills,
  certifications,
  languages,
  hobbies,
} from "@/data/cv";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Chrystel Juan — Lead Product Manager" },
      {
        name: "description",
        content:
          "CV interactif de Chrystel Juan, Lead Product Manager. Expériences détaillées en contexte, actions, résultats et KPI.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--ink) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent mb-8">
            <span className="h-px w-10 bg-accent" />
            CV · 2025
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.92] tracking-tight">
            Chrystel
            <br />
            <span className="italic font-light">Juan</span>
          </h1>
          <p className="font-display text-2xl md:text-3xl mt-8 max-w-3xl text-foreground/80 leading-snug">
            Lead Product Manager — je transforme une vision en produits utiles,
            mesurables et portés par des équipes engagées.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <a
              href="mailto:chrystel.juan@gmail.com"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              chrystel.juan@gmail.com
            </a>
            <a
              href="tel:+33645684628"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              06 45 68 46 28
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Pierre-Bénite, Lyon
            </span>
            <a
              href="https://www.linkedin.com/in/chrystel-juan-5355a37b/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Ambition */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Ambition</p>
        </div>
        <div className="md:col-span-8">
          <p className="font-display text-2xl md:text-3xl leading-snug text-foreground/90">
            Construire des produits qui ont du <em className="text-accent not-italic">sens</em> —
            au croisement d'enjeux business solides, d'utilisateurs vraiment écoutés et
            d'équipes qui aiment ce qu'elles font.
          </p>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-2xl">
            Dix ans à naviguer entre tech, design et business — du dev C++ à la
            direction produit d'une marketplace. Ce qui me fait vibrer : transformer
            un problème flou en une roadmap claire, embarquer une équipe, et mesurer
            l'impact réel.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-2">Parcours</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Expériences
            </h2>
          </div>
          <p className="text-sm text-muted-foreground hidden md:block">
            Cliquez une carte pour le détail Contexte · Actions · Résultats
          </p>
        </div>
        <p className="text-sm text-muted-foreground mb-6 md:hidden">
          Touchez une carte pour le détail.
        </p>
        <div className="grid gap-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </section>

      {/* Side info */}
      <section className="border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Block label="Compétences">
            <ul className="space-y-2">
              {skills.map((s) => (
                <li key={s} className="text-sm text-foreground/85">
                  {s}
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Certifications">
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-foreground/85">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">
                Formation
              </p>
              <p className="font-display text-lg">CPE Lyon</p>
              <p className="text-sm text-muted-foreground">
                Diplôme d'ingénieur · Informatique & SI
              </p>
              <p className="text-xs text-muted-foreground mt-1">Novembre 2015</p>
            </div>
          </Block>
          <Block label="Langues">
            <ul className="space-y-3">
              {languages.map((l) => (
                <li key={l.name}>
                  <p className="font-display text-lg">{l.name}</p>
                  <p className="text-xs text-muted-foreground">{l.level}</p>
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Hors écran">
            <ul className="space-y-2">
              {hobbies.map((h) => (
                <li key={h} className="text-sm text-foreground/85">
                  {h}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-6 italic leading-relaxed">
              Le sport pour le collectif, la couture pour la patience — deux écoles
              utiles au produit.
            </p>
          </Block>
        </div>
      </section>

      {/* CTA */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            On en parle ?
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Un produit à <span className="italic">construire</span> ?
          </h2>
          <a
            href="mailto:chrystel.juan@gmail.com"
            className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-foreground text-background hover:bg-accent transition-colors text-sm font-medium tracking-wide"
          >
            <Mail className="w-4 h-4" />
            chrystel.juan@gmail.com
          </a>
          <p className="mt-12 text-xs text-muted-foreground">
            © 2025 — Chrystel Juan
          </p>
        </div>
      </footer>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-accent mb-5">{label}</p>
      {children}
    </div>
  );
}
