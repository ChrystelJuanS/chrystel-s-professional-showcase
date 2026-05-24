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
    tagline: "Marketplace de vins en direct des vignerons — refonte stratégique Magento → Shopify",
    summary: [
      "Direction de la refonte complète du site : migration Magento → Shopify menée de A à Z",
      "Paiements B2B activés pour la première fois sur la marketplace",
      "Time-to-market réduit de plusieurs mois à moins de 3 jours pour les nouvelles features",
    ],
    context:
      "Les Grappes connecte vignerons indépendants et professionnels sur une marketplace B2C et B2B. J'ai pris la direction de la refonte complète du site en pilotant la migration de Magento vers Shopify — un chantier stratégique sans lequel ni le lancement B2B ni la vélocité actuelle n'auraient été possibles. Je porte également la vision produit sur la plateforme SaaS vignerons et les outils internes.",
    actions: [
      "Direction de la refonte : migration de Magento vers Shopify, de la conception au déploiement",
      "Mise en place des moyens de paiement B2B, inexistants jusqu'alors sur la marketplace",
      "Construction et priorisation de la roadmap produit trimestrielle",
      "Cadrage fonctionnel et rédaction des specs avec les équipes tech",
      "Animation des rituels produit (discovery, refinement, démos)",
      "Mise en place d'un suivi data-driven des parcours clés",
      "Coordination étroite avec les équipes commerce, ops, finance et marketing",
    ],
    results: [
      "Refonte livrée : sans cette prise en charge, le site n'aurait pas pu sortir",
      "Time-to-market réduit de plusieurs mois à moins de 3 jours sur Shopify — le CEO ou le marketing déploie une idée en prod en autonomie",
      "Paiements B2B activés pour la première fois, ouvrant un nouveau canal de revenus",
      "Décisions produit appuyées par la donnée avec l'IA pour l'analyse et la priorisation",
    ],
    kpis: [
      { value: "< 3j", label: "de l'idée à la prod sur Shopify (vs plusieurs mois sous Magento)" },
      { value: "B2B", label: "moyens de paiement mis en place pour la 1ère fois" },
      { value: "Magento → Shopify", label: "migration stratégique pilotée de A à Z" },
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
      "Lancement de C-easy : 3 établissements clients dès l'ouverture, dont un projet à 5M€",
      "~25 personnes formées et embarquées à chaque version (commerce, CS, PO, devs)",
    ],
    kpis: [
      { value: "3", label: "PO managés" },
      { value: "3 établissements", label: "clients C-easy au lancement dont 1 projet à 5M€" },
      { value: "80k/an", label: "économisés grâce aux optimisations produit et à l'analyse des pain points" },
      { value: "~25", label: "personnes embarquées à chaque release" },
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
      "4 produits livrés de l'idée au run sur des cycles courts et des périmètres variés",
      "Clients grands comptes accompagnés de la conception au post-lancement sur des projets jusqu'à 1 an",
      "Équipes pluridisciplinaires pilotées en autonomie, de 1 à 6 personnes",
    ],
    kpis: [
      { value: "4", label: "projets produit livrés de bout en bout" },
      { value: "3 secteurs", label: "luxe · coworking · événementiel" },
      { value: "1m – 1an", label: "cycles projet maîtrisés" },
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
      "Au sein de Hardis Group, j'ai exercé en tant que consultante produit et agile sur des missions clients grands comptes — deux missions longue durée (dont une migration SI bancaire critique) et plusieurs projets courts. Cette expérience m'a forgé une capacité d'adaptation rapide aux contextes métier complexes et multi-parties-prenantes, tout en maîtrisant simultanément les rôles de Solution Designer, Product Owner et Scrum Master.",
    actions: [
      "Consultante longue durée pour Adecco Médical sur un projet stratégique de gestion de vacataires",
      "Solution Designer & PO sur un site métier de gestion de projet (secteur luxe)",
      "Scrum Master sur une migration SI bancaire critique — équipe de 6",
      "PO sur plusieurs projets mobiles courts (industrie, assurance)",
    ],
    results: [
      "Missions longue durée livrées dans les engagements contractuels sur des périmètres complexes",
      "Montée en maturité agile des équipes accompagnées",
      "Capacité prouvée à changer de contexte métier rapidement et à produire de la valeur dès la prise de poste",
    ],
    kpis: [
      { value: "2", label: "missions longue durée sur des projets complexes (banque, santé)" },
      { value: "4 secteurs", label: "santé · luxe · banque · industrie" },
      { value: "3 rôles", label: "Solution Designer · PO · Scrum Master" },
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
      "Contribution à la refonte de Vianavigo, calculateur d'itinéraires utilisé par des millions de voyageurs en Île-de-France",
      "Solide culture technique qui nourrit aujourd'hui la qualité de mon dialogue avec les équipes devs",
    ],
    kpis: [
      { value: "millions", label: "d'utilisateurs touchés via Vianavigo" },
      { value: "2", label: "produits complexes livrés" },
      { value: "5 techs", label: "React · Angular · Java · JS · SQL" },
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
