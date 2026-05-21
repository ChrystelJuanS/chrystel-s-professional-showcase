export type Experience = {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  tagline: string;
  summary: string[];
  context: string;
  actions: string[];
  results: string[];
  kpis: { value: string; label: string }[];
};

export const experiences: Experience[] = [
  {
    id: "lesgrappes",
    company: "Les Grappes",
    location: "Lyon",
    role: "Responsable Produit",
    period: "2025 — Aujourd'hui",
    tagline: "Marketplace de vins en direct des vignerons et services pour les vignerons",
    summary: [
      "Roadmap produit alignée sur les enjeux business et les équipes",
      "Cycle de delivery raccourci grâce à un cadrage fin et à l'usage de l'IA",
      "Décisions appuyées par la donnée — avec l'IA pour l'analyse et la priorisation",
    ],
    context:
      "Les Grappes connecte les professionnels aux vignerons indépendants. En tant que responsable produit, je porte la vision et l'exécution sur l'expérience d'achat des différents sites, la qualité de la plateforme Saas et les outils internes des équipes métiers.",
    actions: [
      "Construction et priorisation de la roadmap produit trimestrielle",
      "Cadrage fonctionnel et rédaction des specs avec les équipes tech",
      "Animation des rituels produit (discovery, refinement, démos)",
      "Mise en place d'un suivi data-driven des parcours clés",
      "Coordination étroite avec les équipes commerce, ops, finance et marketing",
      "Intégration de Shopify dans la marketplace et utilisation de l'IA pour optimiser les process produit et la prise de décision",
      "Mise en place de l'IA pour la conception et le déploiement de maquettes via cursor"
    ],
    results: [
      "Roadmap produit alignée sur les enjeux business",
      "Cycle de delivery raccourci grâce à un cadrage plus fin en amont et une utilisation efficace de l'IA",
      "Décisions produit appuyées par la donnée plutôt que l'intuition et aidé par l'IA pour l'analyse, le design et la priorisation",
    ],
    kpis: [      { value: "Refonte", label: "Expertise pour la refonte d'un produit technique" }
    ],
  },
  {
    id: "careside",
    company: "Careside",
    location: "Lyon",
    role: "Lead Product Manager",
    period: "Sept. 2024 — Mai 2025",
    tagline: "Solution d'orchestration du parcours de soin",
    summary: [
      "Management d'une équipe de 3 PO",
      "Discovery & delivery sur ma squad",
      "Garante du produit Maela 'Saas pour les professionnels de santé' & responsable de l'offre C-easy",
    ],
    context:
      "Careside édite Maela, une plateforme de télésuivi patient utilisée par les hôpitaux et cliniques. J'ai pris le lead produit sur l'offre C-easy et accompagné la montée en compétence d'une équipe de 3 PO sur des sujets santé à fort enjeu réglementaire.",
    actions: [
      "Coaching et structuration d'une équipe de 3 Product Owners",
      "Animation de la discovery avec professionnels de santé et patients",
      "Pilotage du delivery : qualité des US, priorisation, démos",
      "Formation des utilisateurs internes et garante de la connaissance produit Maela",
      "Cadrage et lancement de l'offre C-easy de bout en bout",
    ],
    results: [
      "Équipe PO autonome et alignée sur la vision produit",
      "Lancement réussi de l'offre C-easy",
      "Meilleure adoption interne grâce aux sessions de formation",
    ],
    kpis: [
      { value: "3", label: "PO managés" },
      { value: "1", label: "offre lancée (C-easy)" },
      { value: "80k/an", label: "économisé grâce aux optimisations du produit et étude des pain points utilisateurs" }
    ],
  },
  {
    id: "farmitoo",
    company: "Farmitoo",
    location: "Full-remote",
    role: "Lead Product Manager",
    period: "Sept. 2021 — Mai 2023",
    tagline: "Marketplace agricole — redonner du pouvoir d'achat aux agriculteurs",
    summary: [
      "Management d'une équipe de 2 PM",
      "Discovery & delivery, automatisation des flux partenaires",
      "Amélioration continue des process produit",
    ],
    context:
      "Farmitoo est la marketplace de référence des produits agricoles en France. J'ai porté la roadmap produit avec une équipe de 2 PM, en lien étroit avec les partenaires fournisseurs et les développeurs, pour fluidifier la marketplace et maximiser l'impact business.",
    actions: [
      "Discovery : étude de marché, interviews et tests utilisateurs",
      "Delivery : qualité US, priorisation backlog, livrables en production",
      "Automatisation des flux partenaires (catalogue, prix, stocks)",
      "Mise en place data & monitoring : Algolia, GA4, Hotjar",
      "Coordination cross-équipes pour l'étude de besoin et la construction des features"
    ],
    results: [
      "Recherche on-site nettement plus pertinente",
      "Conversion mobile en hausse",
      "Rétention améliorée grâce au programme de fidélité",
    ],
    kpis: [
      { value: "20% → 5%", label: "taux de non-réponse de recherche" },
      { value: "+0,5 pt", label: "conversion mobile" },
      { value: "+5%", label: "user returning en 2 mois" },
      { value: "2", label: "PM managés" },
    ],
  },
  {
    id: "fabernovel",
    company: "Fabernovel",
    location: "Lyon",
    role: "Chef de projet / Product Manager",
    period: "Mai 2019 — Août 2021",
    tagline: "Studio mobile-first — luxe, coworking, événementiel",
    summary: [
      "Accompagnement clients de la conception au déploiement",
      "Discovery, delivery, gestion d'équipe et relation client",
      "Approche MVP à fort impact",
    ],
    context:
      "Fabernovel est un studio spécialisé dans le développement d'applications mobiles. J'ai accompagné des clients du luxe, du coworking et de l'événementiel sur l'ensemble du cycle produit — de l'idéation au run — en pilotant des équipes pluridisciplinaires.",
    actions: [
      "Discovery : recherche utilisateurs, étude de marché, ateliers de conception",
      "Delivery : planning, budget, périmètre, priorisation backlog",
      "Phases Build, Run et QA",
      "Gestion d'équipes de développement de 1 à 6 personnes",
      "Relation client en direct sur des projets de 1 mois à 1 an"
    ],
    results: [
      "MVP lancés rapidement avec un fort impact business",
      "Clients fidélisés sur des phases de run et d'évolution",
      "Équipes engagées et autonomes",
    ],
    kpis: [
      { value: "1–6", label: "personnes pilotées par projet" },
      { value: "1m – 1an", label: "durée des projets" },
      { value: "B2C / B2B", label: "mobile, web, SaaS" },
    ],
  },
  {
    id: "hardis",
    company: "Hardis Group",
    location: "Lyon",
    role: "Solution Designer · PO · Scrum Master",
    period: "Oct. 2016 — Avr. 2019",
    tagline: "Missions ESN — luxe, banque, industrie, assurance",
    summary: [
      "Consultante PO sur projets stratégiques",
      "Solution design & cadrage fonctionnel",
      "Scrum master d'une équipe de 6 sur migration bancaire",
    ],
    context:
      "Au sein de Hardis Group, j'ai enchaîné des missions de consulting variées chez des clients grands comptes — de la gestion de vacataires médicaux à la migration d'un SI bancaire — en endossant les rôles de Solution Designer, Product Owner et Scrum Master.",
    actions: [
      "Consultante pour Adecco Médical sur un projet stratégique de gestion de vacataires",
      "Solution Designer & PO sur un site métier de gestion de projet (luxe)",
      "Scrum Master d'une migration bancaire — équipe de 6",
      "PO sur plusieurs projets mobiles (industrie, assurance)",
    ],
    results: [
      "Projets cadrés et livrés en respectant les engagements",
      "Montée en maturité agile des équipes accompagnées",
    ],
    kpis: [
      { value: "6", label: "personnes en Scrum" },
      { value: "4+", label: "secteurs adressés" },
    ],
  },
  {
    id: "sword",
    company: "Sword",
    location: "St Didier au Mt d'Or",
    role: "Développeur Web",
    period: "Fév. 2015 — Sept. 2016",
    tagline: "SIG, GED & refonte de Vianavigo",
    summary: [
      "Application Web SIG/GED de géo-localisation documentaire",
      "Refonte de l'app Vianavigo (itinéraires transport Paris)",
      "Stack : React, Angular, Java, JS, SQL",
    ],
    context:
      "Premier poste en tant que développeuse web sur des applications métier complexes : un SIG/GED documentaire et la refonte de Vianavigo, le calculateur d'itinéraires transports en commun parisien.",
    actions: [
      "Développement front et back sur applications métier",
      "Refonte fonctionnelle et technique de Vianavigo",
      "Travail en équipe sur des stacks variées",
    ],
    results: [
      "Solide culture technique qui nourrit aujourd'hui mon dialogue avec les devs",
    ],
    kpis: [
      { value: "5", label: "techs maîtrisées" },
      { value: "2", label: "produits majeurs livrés" },
    ],
  },
  {
    id: "kitware",
    company: "Kitware",
    location: "Carrboro, NC — USA",
    role: "Stage développeur C++",
    period: "Juil. 2013 — Juin 2014",
    tagline: "Année de césure · imagerie médicale",
    summary: [
      "Année de césure aux États-Unis",
      "Développement C++ en imagerie médicale",
      "Immersion internationale & culture open source",
    ],
    context:
      "Année de césure aux États-Unis chez Kitware, acteur majeur de l'open source scientifique et de l'imagerie médicale.",
    actions: [
      "Développement C++ sur des outils d'imagerie médicale",
      "Travail en anglais dans une équipe internationale",
    ],
    results: [
      "Anglais professionnel consolidé",
      "Sensibilité forte aux produits techniques exigeants",
    ],
    kpis: [
      { value: "12", label: "mois aux USA" },
      { value: "EN", label: "environnement 100% anglophone" },
    ],
  },
];

export const skills = [
  "Vision produit",
  "Discovery & user research",
  "Delivery & priorisation backlog",
  "Management d'équipes produit",
  "Méthode Scrum",
  "Data-driven (GA4, Hotjar, Algolia, Google search console, GTM)",
  "Accessibilité numérique",
  "Enjeux business B2B, B2C & marketplace",
  "Relation partenaires & stakeholders",
  "Expertise refonte de produits techniques",
];

export const aiUsages = [
  {
    category: "Product Management",
    description:
      "Analyse de données, priorisation, rédaction de specs et aide à la décision — sans remplacer le jugement humain",
    tools: ["Claude", "ChatGPT"],
  },
  {
    category: "Design & Déploiement",
    description:
      "Conception de maquettes et déploiement de sites web en autonomie complète",
    tools: ["Lovable", "Cursor", "Claude Code", "Claude Cowork"],
  },
  {
    category: "E-commerce & Shopify",
    description:
      "Intégration de Shopify dans une marketplace, optimisation des process via l'IA native Shopify",
    tools: ["Shopify AI"],
  },
];

export const certifications = ["Scrum Master PSM1", "Product Owner PSPO1"];

export const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "Professionnel" },
];

export const hobbies = ["Basket", "Ultimate frisbee", "Couture & DIY"];
