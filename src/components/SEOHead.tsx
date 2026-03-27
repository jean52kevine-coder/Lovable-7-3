import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  noIndex?: boolean;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1daad4e-85e2-4713-bd69-fd7a8910b96d/id-preview-8b3351c2--176e2a79-62c9-4fab-9cee-6e30f29c7373.lovable.app-1772818146176.png";

const SEOHead = ({
  title,
  description,
  canonical,
  keywords,
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
}: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    <link rel="canonical" href={canonical} />
    <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={ogImage} />
    <meta property="og:site_name" content="ALTÉRA Digital Studio" />
    <meta property="og:locale" content="fr_FR" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    {/* JSON-LD */}
    {jsonLd && (
      <script type="application/ld+json">
        {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
      </script>
    )}
  </Helmet>
);

export default SEOHead;
