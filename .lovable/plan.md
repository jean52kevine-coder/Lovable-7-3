

## Problème critique : HashRouter tue le SEO

Le site utilise **`HashRouter`** qui génère des URLs comme `altera.fr/#/services`. Google ne crawle pas le contenu après le `#`, donc **aucune page interne n'est indexée**. C'est le problème SEO n°1 à résoudre.

---

## Plan d'amélioration SEO

### 1. Migrer HashRouter → BrowserRouter (critique)

**Fichier** : `src/App.tsx`

Remplacer `HashRouter` par `BrowserRouter`. Cela produit des URLs propres (`/services`, `/tarifs`) crawlables par Google.

Les fichiers `_redirects` (Netlify) et `vercel.json` sont déjà en place pour le fallback SPA.

### 2. Ajouter des schemas JSON-LD par page

Enrichir les données structurées au-delà du `LocalBusiness` global :

- **Page Tarifs** : `Product` schema pour chaque offre (497€, 747€, etc.)
- **Pages avec FAQ** : `FAQPage` schema pour les sections accordéon
- **Page Contact** : `ContactPage` schema
- **Toutes les pages** : `BreadcrumbList` schema via un composant réutilisable

### 3. Corriger les balises meta manquantes

Ajouter les balises `og:url`, `og:type`, `og:image`, `twitter:card` sur **toutes les pages** (actuellement seule la HomePage les a). Créer un composant `<SEOHead>` réutilisable.

### 4. Mettre à jour le sitemap

- Ajouter `<lastmod>` sur chaque URL
- Corriger le prix maintenance dans le schema `index.html` (29€ → 39€ pour correspondre aux tarifs réels)

### 5. Ajouter une section FAQ sur la HomePage

Créer un composant `FAQSection` avec 6-8 questions fréquentes (ex : "Combien coûte un site ?", "Quel est le délai de livraison ?"). Double bénéfice :
- Contenu textuel riche pour Google
- Schema `FAQPage` qui affiche les réponses directement dans les résultats de recherche

### 6. Balises sémantiques HTML

Remplacer les `<section>` génériques par des éléments sémantiques (`<main>`, `<article>`, `<nav>` pour le breadcrumb) dans le Layout pour améliorer la compréhension par les crawlers.

---

## Résumé des fichiers modifiés

| Fichier | Changement |
|---|---|
| `src/App.tsx` | HashRouter → BrowserRouter |
| `src/components/SEOHead.tsx` | Nouveau composant meta tags réutilisable |
| `src/components/home/FAQSection.tsx` | Nouvelle section FAQ + schema FAQPage |
| `src/pages/Index.tsx` | Ajout FAQSection + SEOHead |
| Toutes les pages | SEOHead avec OG/Twitter/canonical |
| `public/sitemap.xml` | Ajout lastmod partout |
| `index.html` | Correction prix maintenance schema |

