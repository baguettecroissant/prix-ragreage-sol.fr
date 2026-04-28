/**
 * ⭐ SITE CONFIGURATION — SEUL FICHIER À MODIFIER POUR CHAQUE NOUVEAU SITE
 * Clone le boilerplate, modifie ce fichier, déploie.
 */
export const siteConfig = {
  // === IDENTITÉ ===
  domain: "prix-ragreage-sol.fr",
  name: "Prix Ragréage",
  tagline: "Ragréage — Guide, Prix & Devis Locaux 2026",
  description: "Obtenez jusqu'à 3 devis gratuits pour vos travaux de ragréage. Comparez les prix des artisans qualifiés locaux et préparez votre sol dans les meilleures conditions.",

  // === NICHE ===
  niche: {
    slug: "ragreage",
    name: "Ragréage",
    nameShort: "Ragréage",
    emoji: "🔨",
    icon: "hammer",
    seoTitleTemplate: "Ragréage à {city} — Prix & devis {zip}",
    metaDescTemplate: "Comparez les prix pour un ragréage à {city} ({zip}). Jusqu'à 3 devis gratuits d'artisans locaux. Obtenez le meilleur tarif au m² en 2026.",
    heroTitle: "Ragréage : Prix & Devis Gratuit 2026",
    heroSubtitle: "Comparez jusqu'à 3 devis d'artisans locaux. Service 100% gratuit et sans engagement.",
  },

  // === PRIX ===
  pricing: [
    { service: "Ragréage Standard", price: "15 €/m²", details: "Configuration de base, autolissant classique" },
    { service: "Ragréage Intermédiaire", price: "22 €/m²", details: "Matériaux milieu de gamme, forte épaisseur" },
    { service: "Ragréage Premium", price: "45 €/m²", details: "Sur-mesure, haute qualité ou technique spécifique" },
  ],
  pricingNote: "Prix TTC moyens constatés en 2026, pose et fournitures comprises.",

  // === AIDES ===
  aids: [
    { name: "TVA réduite 10%", amount: "Applicable sous conditions", condition: "Logement > 2 ans, dans le cadre de travaux de rénovation" },
    { name: "Aides ANAH", amount: "Variable", condition: "Si intégré à des travaux d'adaptation ou de rénovation globale" }
  ],

  // === MONÉTISATION ===
  viteundevis: {
    partnerId: "2353",
    boxId: "822b6a43e4",
    categoryId: "136",
  },

  // === COULEURS ===
  colors: {
    primary: "525252",    // grey
    primaryDark: "404040", // dark grey
    accent: "2563eb",     // blue
    dark: "171717",       // near black
  },

  // === PROCESSUS ===
  process: [
    { title: "Décrivez votre projet", desc: "Surface à traiter, type de sol actuel, pièces concernées.", icon: "📋", duration: "2 min" },
    { title: "Recevez 3 devis", desc: "Des artisans de votre département vous contactent sous 48h.", icon: "📨", duration: "24-48h" },
    { title: "Comparez & choisissez", desc: "Comparez prix, techniques proposées et garanties.", icon: "⚖️" },
    { title: "Lancez les travaux", desc: "Votre artisan réalise le ragréage avec professionnalisme.", icon: "🏗️", duration: "1-2 jours" },
  ],

  // === FAQ ===
  faq: [
    {
      q: "Quel est le prix moyen au m² d'un ragréage en 2026 ?",
      a: "Le prix moyen d'un ragréage varie de 15 €/m² pour une configuration standard (produit autolissant classique) à 45 €/m² pour un ragréage premium ou technique. Ce tarif inclut généralement la main d'œuvre et les fournitures."
    },
    {
      q: "Qu'est-ce qu'un ragréage autolissant vs autonivelant ?",
      a: "Le ragréage autolissant est idéal pour corriger les petits défauts de planéité (jusqu'à 10 mm environ). L'autonivelant est utilisé pour les irrégularités plus importantes, souvent avec ajout de fibres pour la solidité."
    },
    {
      q: "Combien de temps faut-il pour faire un ragréage ?",
      a: "La préparation et le coulage sont rapides (quelques heures selon la surface). Cependant, le temps de séchage complet est essentiel : il faut compter de 24h à 48h avant de pouvoir poser un nouveau revêtement."
    },
    {
      q: "Faut-il appliquer un primaire d'accrochage ?",
      a: "Oui, l'application d'un primaire d'accrochage est fortement recommandée, voire indispensable. Il régule la porosité du support existant et assure une adhérence parfaite de l'enduit de ragréage."
    },
  ],

  // === TRUST ===
  trustBadges: ["Artisans Qualifiés", "Devis 100% gratuit", "Sans engagement"],

  // === CONTENT BLOCKS ===
  introText: `Le ragréage est une étape incontournable pour obtenir un sol parfaitement plat, lisse et sain avant la pose de votre nouveau revêtement (carrelage, parquet, sol PVC). Il permet de corriger les creux, les bosses et les pentes indésirables de votre sol brut ou ancien carrelage.
  
Que ce soit pour une rénovation complète ou pour aplanir le sol d'une extension, faire appel à un artisan qualifié vous garantit un résultat durable et une préparation optimale pour accueillir votre sol définitif.`,

  whyChooseUs: [
    "Jusqu'à 3 devis d'artisans spécialisés de votre département",
    "Service 100% gratuit et sans aucun engagement",
    "Mise en relation avec des professionnels vérifiés",
    "Réponse sous 24h à 48h maximum",
    "Conseils d'experts sur le type de ragréage adapté",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
