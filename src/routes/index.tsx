import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Sparkles, ArrowDown, Menu, X, Eye } from "lucide-react";
import { ExperienceCard } from "@/components/ExperienceCard";
import {
  experiences,
  skills,
  skillsDescription,
  aiUsages,
  personalProjects,
  certifications,
  languages,
  hobbies,
} from "@/data/cv";
import heroAurora from "@/assets/hero-aurora.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CV Chrystel Juan Saynac - Responsable produit" },
      {
        name: "description",
        content:
          "Portfolio Chrystel Juan Saynac — Lead Product Manager / Head of Product. 10 ans d'expérience produit & tech, spécialisée en stratégie produit, management et delivery.",
      },
    ],
  }),
});

const NAV_LINKS = [
  { href: "#about", label: "À propos" },
  { href: "#parcours", label: "Parcours" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#ia", label: "IA & Outils", accent: true },
  { href: "#contact", label: "Contact" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient blobs */}
      <div className="blob animate-float" style={{ top: "-120px", left: "-80px", width: "420px", height: "420px", background: "var(--blush)" }} />
      <div className="blob animate-float" style={{ top: "10%", right: "-120px", width: "480px", height: "480px", background: "var(--lilac)", animationDelay: "-4s" }} />
      <div className="blob animate-float" style={{ top: "55%", left: "-100px", width: "420px", height: "420px", background: "var(--sky)", animationDelay: "-7s" }} />
      <div className="blob animate-float" style={{ top: "75%", right: "-80px", width: "360px", height: "360px", background: "var(--gold)", opacity: 0.35, animationDelay: "-10s" }} />

      {/* NAV */}
      <nav className="relative z-20 max-w-6xl mx-auto px-6 md:px-10 pt-8">
        <div className="flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            Chrystel<span className="text-gradient">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`hover:text-foreground transition-colors ${l.accent ? "font-medium text-accent" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-3.5 h-3.5" /> Me contacter
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl border border-border bg-white/60 backdrop-blur"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-border bg-white/95 backdrop-blur shadow-[var(--shadow-soft)] p-3 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-4 rounded-xl text-sm hover:bg-secondary transition-colors ${l.accent ? "text-accent font-medium" : "text-foreground/70"}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-foreground text-background text-sm font-medium"
            >
              <Mail className="w-4 h-4" /> Me contacter
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header id="top" className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-12 pb-16 md:pt-24 md:pb-32 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 backdrop-blur px-3 py-1 text-xs text-foreground/70">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[var(--lilac)] to-[var(--gold)]" />
              Disponible · Responsable Produit
            </div>
            <h1 className="font-display text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight mt-5">
              Bonjour,
              <br />
              je suis <span className="text-gradient italic font-medium">Chrystel</span>.
            </h1>
            <p className="font-display text-lg md:text-2xl mt-6 max-w-xl text-foreground/75 leading-snug">
              Lead Product Manager / Head of product — Je transforme une vision en produits utiles,
              mesurables et portés par des équipes qui aiment ce qu'elles font.{" "}
              <a href="#ia" className="text-gradient font-medium hover:opacity-80 transition-opacity">
                J'intègre l'IA dans ma pratique quotidienne →
              </a>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#parcours"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
                style={{ background: "linear-gradient(120deg, var(--lilac), var(--accent) 60%, var(--sky))" }}
              >
                <Sparkles className="w-4 h-4" /> Découvrir mon parcours
              </a>
              <a
                href="https://www.linkedin.com/in/chrystel-juan-5355a37b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-white/60 backdrop-blur text-sm hover:border-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Hero image — masqué sur très petit écran */}
          <div className="md:col-span-5 relative hidden sm:block">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)] ring-1 ring-border">
              <img
                src={heroAurora}
                alt="Composition aurore en dégradés rose, violet, bleu et doré"
                className="w-full h-full object-cover"
                width={1080}
                height={1350}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
            </div>
            {/* Floating chips — visibles dès sm */}
            <div className="absolute -bottom-5 -left-4 md:-left-10 rounded-2xl bg-white/90 backdrop-blur border border-border shadow-[var(--shadow-soft)] px-4 py-3 md:px-5 md:py-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">10 ans</p>
              <p className="font-display text-base md:text-lg font-semibold">d'expérience produit & tech</p>
            </div>
            <div className="absolute -top-4 -right-2 md:-right-6 rounded-2xl bg-white/90 backdrop-blur border border-border shadow-[var(--shadow-soft)] px-3 py-2 md:px-4 md:py-3">
              <p className="text-[10px] uppercase tracking-[0.22em] text-gradient font-semibold">Now</p>
              <p className="font-display text-sm md:text-base">Les Grappes</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-8 text-muted-foreground">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em]">
            Scroll <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-gradient font-semibold mb-6">
          Mon ambition
        </p>
        <p className="font-display text-2xl sm:text-3xl md:text-5xl leading-tight tracking-tight">
          Construire des produits qui ont du{" "}
          <span className="text-gradient italic">sens</span> — au croisement
          d'enjeux business solides, d'utilisateurs vraiment écoutés et d'équipes
          engagées. Les refontes ne sont pas une contrainte mais une opportunité business, technique et humaine de faire mieux.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
          {[
            { t: "Vision", d: "Cadrer le bon problème avant la bonne solution. Aligner business, tech et utilisateurs." },
            { t: "Exécution", d: "Roadmap claire, MVP à fort impact, qualité de delivery — la donnée en boussole." },
            { t: "Équipe", d: "Manager, embarquer, faire grandir. La meilleure feature, c'est une équipe qui pétille." },
          ].map((b) => (
            <div key={b.t} className="rounded-3xl border border-border bg-white/60 backdrop-blur p-6">
              <p className="font-display text-xl font-semibold">{b.t}</p>
              <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARCOURS */}
      <section id="parcours" className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gradient font-semibold mb-3">
              Parcours
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
              Là où j'ai <span className="italic">construit</span>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Cliquez une carte pour le détail{" "}
            <span className="text-foreground">Contexte · Actions · Résultats</span>{" "}
            avec les KPI.
          </p>
        </div>
        <div className="grid gap-4 md:gap-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </section>

      {/* SAVOIR-FAIRE */}
      <section id="savoir-faire" className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-gradient font-semibold mb-3">
          Savoir-faire
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-12">
          Une boîte à outils <span className="italic text-gradient">complète</span>.
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">

          {/* 1 — Compétences pleine largeur */}
          <div className="rounded-3xl border border-border bg-white/70 backdrop-blur p-6 md:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-2">Compétences</p>
            <p className="font-display text-xl font-semibold mb-1">Expertise produit & stratégie</p>
            <p className="text-sm text-foreground/70 leading-relaxed mb-5">{skillsDescription}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="text-sm px-3.5 py-1.5 rounded-full border border-border bg-secondary/50 text-foreground/85">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* 2 — PM dans la vie pleine largeur */}
          <div className="rounded-3xl border border-border bg-white/70 backdrop-blur p-6 md:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">PM dans la vie</p>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((p) => (
                <div key={p.title}>
                  <p className="font-display text-lg font-semibold">{p.title}</p>
                  <p className="text-xs text-accent font-medium mt-0.5">{p.subtitle}</p>
                  <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border bg-secondary/50 text-foreground/75">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 — Certifications+Formation | Langues+Loisirs */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">

            <div className="rounded-3xl border border-border bg-white/70 backdrop-blur p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Certifications</p>
              <ul className="space-y-2 mb-6">
                {certifications.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-base text-foreground/85">
                    <span className="text-accent font-semibold">✦</span> {c}
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-border">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Formation</p>
                <ul className="space-y-3">
                  <li>
                    <p className="font-display text-base font-semibold">Classes préparatoires</p>
                    <p className="text-sm text-muted-foreground">PCSI · Mathématiques & Sciences physiques</p>
                  </li>
                  <li>
                    <p className="font-display text-base font-semibold">CPE Lyon</p>
                    <p className="text-sm text-muted-foreground">Ingénieur · Informatique & SI · 2015</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-white/70 backdrop-blur p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Langues</p>
              <ul className="space-y-3 mb-6">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between">
                    <p className="font-display text-base font-semibold">{l.name}</p>
                    <p className="text-sm text-muted-foreground">{l.level}</p>
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-border">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">Loisirs</p>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((h) => (
                    <span key={h} className="text-sm px-3.5 py-1.5 rounded-full border border-border bg-secondary/50 text-foreground/85">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IA & OUTILS */}
      <section id="ia" className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-gradient font-semibold mb-3">
          IA & Outils
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4">
          L'IA comme <span className="italic text-gradient">levier</span>, pas comme béquille.
        </h2>
        <p className="text-foreground/65 text-base mb-10 md:mb-12 max-w-2xl">
          J'utilise les outils IA de façon concrète dans mon quotidien produit — pour aller plus vite, décider mieux, et concevoir en autonomie. Sans remplacer le jugement humain.
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {aiUsages.map((item) => (
            <div
              key={item.category}
              className="rounded-3xl border border-border bg-white/70 backdrop-blur p-6 md:p-7 flex flex-col gap-5"
            >
              <div>
                <p className="font-display text-xl font-semibold">{item.category}</p>
                <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="relative z-10 mt-6 md:mt-10">
        <div className="max-w-5xl mx-auto px-4 md:px-10 py-12 md:py-20">
          <div
            className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-8 sm:p-10 md:p-16 text-center shadow-[var(--shadow-glow)]"
            style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 320), oklch(0.93 0.04 280), oklch(0.95 0.03 240))" }}
          >
            <div className="blob" style={{ top: "-60px", left: "10%", width: "260px", height: "260px", background: "var(--lilac)" }} />
            <div className="blob" style={{ bottom: "-80px", right: "5%", width: "260px", height: "260px", background: "var(--gold)", opacity: 0.5 }} />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-gradient font-semibold mb-6">
                On en parle ?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
                Un produit à <span className="italic text-gradient">construire</span> ensemble ?
              </h2>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                {emailVisible ? (
                  <a
                    href="mailto:chrystel.juan@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium hover:scale-[1.02] transition-transform"
                    style={{ background: "linear-gradient(120deg, var(--lilac), var(--accent) 60%, var(--sky))" }}
                  >
                    <Mail className="w-4 h-4 shrink-0" /> chrystel.juan@gmail.com
                  </a>
                ) : (
                  <button
                    onClick={() => setEmailVisible(true)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium hover:scale-[1.02] transition-transform"
                    style={{ background: "linear-gradient(120deg, var(--lilac), var(--accent) 60%, var(--sky))" }}
                  >
                    <Eye className="w-4 h-4 shrink-0" /> Afficher mon email
                  </button>
                )}
                <a
                  href="https://www.linkedin.com/in/chrystel-juan-5355a37b/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border bg-white/80 backdrop-blur text-sm hover:border-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4 shrink-0" /> LinkedIn
                </a>
              </div>
              <p className="mt-8 flex flex-col items-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Responsable produit / Lead Product Manager</span>
                <span>Je transforme une vision en produits utiles, mesurables et portés par des équipes qui aiment ce qu'elles font.</span>
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            © 2026 — Chrystel Juan · Conçu avec soin
          </p>
        </div>
      </footer>
    </div>
  );
}
