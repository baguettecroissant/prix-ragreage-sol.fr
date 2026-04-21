/**
 * ⭐ SITE CONFIGURATION — SEUL FICHIER À MODIFIER POUR CHAQUE NOUVEAU SITE
 * Clone le boilerplate, modifie ce fichier, déploie.
 */
export const siteConfig = {
  // === IDENTITÉ ===
  domain: "prix-pac-air-eau.fr",
  name: "Prix PAC Air Eau",
  tagline: "Comparez les prix des pompes à chaleur air/eau près de chez vous",
  description: "Obtenez jusqu'à 3 devis gratuits pour votre pompe à chaleur air/eau. Comparez les prix d'installateurs certifiés RGE et profitez des aides MaPrimeRénov' 2026.",

  // === NICHE ===
  niche: {
    slug: "pompe-a-chaleur-air-eau",
    name: "Pompe à Chaleur Air/Eau",
    nameShort: "PAC Air/Eau",
    emoji: "🌡️",
    icon: "thermometer",
    seoTitleTemplate: "Pompe à Chaleur Air/Eau {city} ({zip}) — Prix & Devis Gratuit 2026",
    metaDescTemplate: "Comparez les prix de pompe à chaleur air/eau à {city} ({zip}). Jusqu'à 3 devis gratuits d'installateurs RGE. Aides MaPrimeRénov' déduites. Réponse sous 48h.",
    heroTitle: "Pompe à Chaleur Air/Eau : Prix, Aides & Devis Gratuit 2026",
    heroSubtitle: "Comparez jusqu'à 3 devis d'installateurs certifiés RGE. Service 100% gratuit et sans engagement.",
  },

  // === PRIX ===
  pricing: [
    { service: "PAC Air/Eau 8-10 kW (maison 100m²)", price: "8 000 – 12 000€", details: "Chauffage seul, radiateurs basse température" },
    { service: "PAC Air/Eau 12-16 kW (maison 150m²)", price: "10 000 – 15 000€", details: "Chauffage + ECS (eau chaude sanitaire)" },
    { service: "PAC Air/Eau haute température", price: "12 000 – 18 000€", details: "Compatible radiateurs existants fonte/acier" },
    { service: "PAC Air/Eau réversible", price: "11 000 – 16 000€", details: "Chauffage hiver + rafraîchissement été" },
    { service: "Remplacement chaudière fioul → PAC", price: "10 000 – 20 000€", details: "Dépose incluse, raccordement hydraulique" },
    { service: "Ballon tampon 200-300L", price: "800 – 1 500€", details: "Recommandé pour optimiser le rendement" },
  ],
  pricingNote: "Prix TTC moyens constatés en 2026, pose comprise. Avant déduction des aides (MaPrimeRénov', CEE, TVA 5.5%).",

  // === AIDES ===
  aids: [
    { name: "MaPrimeRénov'", amount: "3 000 – 11 000€", condition: "Selon revenus du foyer et zone climatique" },
    { name: "CEE (Prime énergie)", amount: "2 500 – 5 000€", condition: "Cumulable avec MaPrimeRénov'" },
    { name: "TVA réduite 5,5%", amount: "~1 000€ d'économie", condition: "Logement > 2 ans, artisan RGE" },
    { name: "Éco-PTZ", amount: "Jusqu'à 50 000€ à taux 0%", condition: "Sans condition de revenus" },
  ],

  // === MONÉTISATION ===
  viteundevis: {
    partnerId: "2353",
    boxId: "822b6a43e4",
    categoryId: "158",
  },

  // === COULEURS ===
  colors: {
    primary: "2563eb",    // blue-600
    primaryDark: "1d4ed8", // blue-700
    accent: "f59e0b",     // amber-500
    dark: "0f172a",       // slate-900
  },

  // === PROCESSUS ===
  process: [
    { title: "Décrivez votre projet", desc: "Type de logement, surface, chauffage actuel, nombre d'occupants.", icon: "📋", duration: "2 min" },
    { title: "Recevez 3 devis", desc: "Des installateurs RGE de votre département vous contactent sous 48h.", icon: "📨", duration: "24-48h" },
    { title: "Comparez & choisissez", desc: "Comparez prix, marques (Daikin, Atlantic, Mitsubishi) et garanties.", icon: "⚖️" },
    { title: "Lancez l'installation", desc: "Votre artisan installe votre PAC avec garantie décennale.", icon: "🏗️", duration: "2-3 jours" },
  ],

  // === FAQ ===
  faq: [
    {
      q: "Quel est le prix moyen d'une pompe à chaleur air/eau en 2026 ?",
      a: "Le prix d'une PAC air/eau varie entre 8 000€ et 18 000€ TTC pose comprise, selon la puissance (8 à 16 kW), la marque (Daikin, Atlantic, Mitsubishi, Bosch) et la complexité de l'installation. Après aides (MaPrimeRénov' + CEE), le reste à charge peut descendre entre 3 000€ et 8 000€."
    },
    {
      q: "Quelles aides pour installer une PAC air/eau en 2026 ?",
      a: "Vous pouvez cumuler MaPrimeRénov' (3 000 à 11 000€), les CEE/Prime énergie (2 500 à 5 000€), la TVA à 5,5% et l'Éco-PTZ (jusqu'à 50 000€ à taux 0%). Condition : faire appel à un artisan certifié RGE."
    },
    {
      q: "Quelle est la différence entre une PAC air/eau et une PAC air/air ?",
      a: "La PAC air/eau chauffe un circuit d'eau (radiateurs, plancher chauffant) et produit l'eau chaude sanitaire. La PAC air/air diffuse l'air chaud via des splits muraux. La PAC air/eau est plus polyvalente et éligible à davantage d'aides."
    },
    {
      q: "Combien de temps dure l'installation d'une PAC air/eau ?",
      a: "L'installation dure généralement 2 à 3 jours pour un remplacement de chaudière. Elle comprend la pose de l'unité extérieure, le raccordement hydraulique et la mise en service par un technicien certifié."
    },
    {
      q: "Une PAC air/eau fonctionne-t-elle par grand froid ?",
      a: "Oui. Les PAC air/eau modernes fonctionnent jusqu'à -20°C voire -25°C (modèles haute température). En dessous de -7°C, le COP diminue mais un appoint électrique intégré prend le relais. En zone H1 (nord/montagne), privilégiez un modèle haute température."
    },
    {
      q: "Quelle puissance de PAC pour ma maison ?",
      a: "Comptez environ 80-100 W/m² pour une maison bien isolée et 120-150 W/m² pour une passoire thermique. Pour 120m², il faut une PAC de 10 à 14 kW selon l'isolation. Un bilan thermique professionnel est indispensable — il est inclus dans nos devis gratuits."
    },
  ],

  // === TRUST ===
  trustBadges: ["Artisans RGE", "Devis 100% gratuit", "Sans engagement", "Garantie décennale"],

  // === CONTENT BLOCKS ===
  introText: `La pompe à chaleur air/eau est la solution de chauffage la plus plébiscitée en France pour remplacer une chaudière fioul ou gaz. Elle capte les calories de l'air extérieur pour chauffer un circuit d'eau alimentant vos radiateurs ou votre plancher chauffant — tout en produisant votre eau chaude sanitaire.

Avec un COP moyen de 3 à 4, chaque kWh d'électricité consommé produit 3 à 4 kWh de chaleur. Résultat : jusqu'à 70% d'économies sur votre facture de chauffage. Et grâce aux aides de l'État (MaPrimeRénov', CEE), le retour sur investissement est souvent atteint en 5 à 7 ans.`,

  whyChooseUs: [
    "Jusqu'à 3 devis d'installateurs RGE de votre département",
    "Service 100% gratuit et sans aucun engagement",
    "Artisans vérifiés avec assurance décennale à jour",
    "Réponse sous 24h à 48h maximum",
    "Aide au montage des dossiers MaPrimeRénov' et CEE",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
