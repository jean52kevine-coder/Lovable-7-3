export const PAYMENT_CONFIG = {
  STRIPE_PUBLIC_KEY: 'REMPLACER_CLE_PUBLIQUE_STRIPE',
  PAYPAL_CLIENT_ID: 'REMPLACER_CLIENT_ID_PAYPAL',
  CURRENCY: 'eur',
};

export const OFFRES = {
  vitrine: {
    nom: 'Site Vitrine',
    prix_total: 497,
    acompte: 249,
    solde: 248,
    description: 'Design sur-mesure · SEO inclus · Livraison 14 jours',
  },
  ecommerce: {
    nom: 'Site E-commerce',
    prix_total: 747,
    acompte: 374,
    solde: 373,
    description: 'Boutique complète · Stripe inclus · Livraison 14 jours',
  },
  'maintenance-essentielle': {
    nom: 'Maintenance Essentielle',
    prix_total: 29,
    acompte: 29,
    solde: 0,
    description: 'Mises à jour · Sauvegardes · Support email',
  },
  'maintenance-professionnelle': {
    nom: 'Maintenance Professionnelle',
    prix_total: 39,
    acompte: 39,
    solde: 0,
    description: 'Tout inclus · Modifications mineures · Monitoring 24/7',
  },
  'maintenance-premium': {
    nom: 'Maintenance Premium',
    prix_total: 49,
    acompte: 49,
    solde: 0,
    description: 'Prioritaire 7j/7 · Modifications illimitées · SEO mensuel',
  },
} as const;

// Créer sur dashboard.stripe.com → Payment Links
// Un Payment Link par offre :
export const STRIPE_LINKS = {
  vitrine_acompte: 'https://buy.stripe.com/REMPLACER',
  vitrine_total: 'https://buy.stripe.com/REMPLACER',
  ecommerce_acompte: 'https://buy.stripe.com/REMPLACER',
  ecommerce_total: 'https://buy.stripe.com/REMPLACER',
  maintenance_essentielle: 'https://buy.stripe.com/REMPLACER',
  maintenance_pro: 'https://buy.stripe.com/REMPLACER',
  maintenance_premium: 'https://buy.stripe.com/REMPLACER',
} as const;
