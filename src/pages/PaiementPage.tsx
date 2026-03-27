import { useEffect, useState } from 'react';
import SEOHead from "@/components/SEOHead";
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  CreditCard,
  Lock,
  Shield,
} from 'lucide-react';
import { OFFRES, PAYMENT_CONFIG, STRIPE_LINKS } from '../config/payment';

type Etape = 'recap' | 'paiement' | 'confirmation';
type ModePaiement = 'acompte' | 'total';

type StripeLinkKey = keyof typeof STRIPE_LINKS;

const mapStripeOfferKey = (offreKey: string, modePaiement: ModePaiement): StripeLinkKey => {
  if (offreKey === 'maintenance-essentielle') return 'maintenance_essentielle';
  if (offreKey === 'maintenance-professionnelle') return 'maintenance_pro';
  if (offreKey === 'maintenance-premium') return 'maintenance_premium';

  const key = `${offreKey}_${modePaiement}` as StripeLinkKey;
  return key in STRIPE_LINKS ? key : 'vitrine_acompte';
};

export default function PaiementPage() {
  const [searchParams] = useSearchParams();
  const [etape, setEtape] = useState<Etape>('recap');
  const [modePaiement, setModePaiement] = useState<ModePaiement>('acompte');
  const [methodePaiement, setMethodePaiement] = useState<'stripe' | 'paypal'>('stripe');
  const [acceptCGV, setAcceptCGV] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const offreKey = searchParams.get('offre') || 'vitrine';
  const clientParam = searchParams.get('client') || '';
  const emailParam = searchParams.get('email') || '';

  const offre = OFFRES[offreKey as keyof typeof OFFRES] || OFFRES.vitrine;
  const montant = modePaiement === 'acompte' ? offre.acompte : offre.prix_total;
  const isMaintenance = offreKey.startsWith('maintenance');

  useEffect(() => {
    if (clientParam) setNom(clientParam);
    if (emailParam) setEmail(emailParam);
  }, [clientParam, emailParam]);

  const handlePaiementStripe = () => {
    const key = mapStripeOfferKey(offreKey, modePaiement);
    const link = STRIPE_LINKS[key] || STRIPE_LINKS.vitrine_acompte;
    setLoading(true);
    window.open(link, '_blank');
    setTimeout(() => {
      setLoading(false);
      setEtape('confirmation');
    }, 3000);
  };

  const handlePaiementPaypal = () => {
    setLoading(true);
    window.open(`https://paypal.me/REMPLACER_TON_PAYPAL/${montant.toString()}EUR`, '_blank');
    setTimeout(() => {
      setLoading(false);
      setEtape('confirmation');
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Paiement sécurisé — ALTÉRA Digital Studio</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="stripe-public-key" content={PAYMENT_CONFIG.STRIPE_PUBLIC_KEY} />
        <meta name="paypal-client-id" content={PAYMENT_CONFIG.PAYPAL_CLIENT_ID} />
      </Helmet>

      <div className="min-h-screen bg-[#0a0f0a] px-4 py-8">
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1DB954]/30 bg-[#1DB954]/15 text-sm font-black text-[#1DB954]"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                A
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "'Barlow', sans-serif" }}>
                ALTÉRA
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <Lock size={12} className="text-[#1DB954]" />
              Paiement 100% sécurisé
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {(['recap', 'paiement', 'confirmation'] as Etape[]).map((e, i) => (
              <div key={e} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all
                  ${
                    etape === e
                      ? 'bg-[#1DB954] text-black'
                      : etape === 'confirmation' || (etape === 'paiement' && i === 0)
                        ? 'bg-[#1DB954]/20 text-[#1DB954]'
                        : 'bg-white/5 text-white/30'
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {etape === 'confirmation' || (etape === 'paiement' && i === 0) ? <Check size={12} /> : i + 1}
                </div>
                <span
                  className={`hidden text-xs sm:block ${etape === e ? 'text-white' : 'text-white/30'}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {e === 'recap' ? 'Récapitulatif' : e === 'paiement' ? 'Paiement' : 'Confirmation'}
                </span>
                {i < 2 && (
                  <div
                    className={`mx-2 h-px flex-1 ${
                      (etape === 'paiement' && i === 0) || etape === 'confirmation' ? 'bg-[#1DB954]/30' : 'bg-white/8'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {etape === 'recap' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-2xl space-y-4">
            <div className="rounded-2xl border border-[#1a2e1a] bg-[#111811] p-6">
              <p
                className="mb-4 text-xs uppercase tracking-widest text-white/40"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Votre commande
              </p>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black italic text-white" style={{ fontFamily: "'Barlow', sans-serif" }}>
                    {offre.nom}
                  </h2>
                  <p className="mt-1 text-sm text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {offre.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-3xl font-black text-[#1DB954]" style={{ fontFamily: "'Barlow', sans-serif" }}>
                    {offre.prix_total}€
                  </p>
                  <p className="text-xs text-white/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {isMaintenance ? '/mois' : 'TTC'}
                  </p>
                </div>
              </div>

              {!isMaintenance && (
                <div className="mt-6">
                  <p
                    className="mb-3 text-xs uppercase tracking-widest text-white/40"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Mode de paiement
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        id: 'acompte' as ModePaiement,
                        label: 'En 2 fois',
                        detail: `${offre.acompte}€ maintenant + ${offre.solde}€ à la livraison`,
                        badge: 'Recommandé',
                      },
                      {
                        id: 'total' as ModePaiement,
                        label: 'Paiement total',
                        detail: `${offre.prix_total}€ en une fois`,
                        badge: null,
                      },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setModePaiement(opt.id)}
                        className={`relative rounded-xl border p-4 text-left transition-all duration-200
                          ${
                            modePaiement === opt.id
                              ? 'border-[#1DB954]/50 bg-[#1DB954]/8'
                              : 'border-[#1a2e1a] bg-[#0d130d] hover:border-[#1DB954]/20'
                          }`}
                      >
                        {opt.badge && (
                          <span className="absolute -top-2 left-3 rounded-full bg-[#1DB954] px-2 py-0.5 text-[10px] font-bold text-black">
                            {opt.badge}
                          </span>
                        )}
                        <p className="text-sm font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {opt.label}
                        </p>
                        <p className="mt-1 text-xs text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {opt.detail}
                        </p>
                        {modePaiement === opt.id && (
                          <div className="absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#1DB954]">
                            <Check size={10} className="text-black" strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="my-5 border-t border-[#1a2e1a]" />

              <div className="flex items-center justify-between">
                <p className="text-sm text-white/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {isMaintenance
                    ? 'Premier mois'
                    : modePaiement === 'acompte'
                      ? 'Acompte à régler maintenant'
                      : 'Total à régler'}
                </p>
                <p className="text-2xl font-black text-white" style={{ fontFamily: "'Barlow', sans-serif" }}>
                  {montant}€
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#1a2e1a] bg-[#111811] p-6">
              <p
                className="mb-4 text-xs uppercase tracking-widest text-white/40"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Vos informations
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full rounded-xl border border-[#1a2e1a] bg-[#0d130d] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#1DB954]/40"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jean@email.fr"
                    className="w-full rounded-xl border border-[#1a2e1a] bg-[#0d130d] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#1DB954]/40"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#1a2e1a] bg-[#111811] p-5">
              <label className="group flex cursor-pointer items-start gap-3">
                <button
                  type="button"
                  onClick={() => setAcceptCGV(!acceptCGV)}
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all
                    ${acceptCGV ? 'border-[#1DB954] bg-[#1DB954]' : 'border-white/20 hover:border-[#1DB954]/50'}`}
                >
                  {acceptCGV && <Check size={11} className="text-black" strokeWidth={3} />}
                </button>
                <span className="text-sm leading-relaxed text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  J'accepte les{' '}
                  <a href="/cgv" target="_blank" className="text-[#1DB954] underline hover:no-underline" rel="noreferrer">
                    Conditions Générales de Vente
                  </a>{' '}
                  d'ALTÉRA Digital Studio et je confirme ma commande.
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={() => {
                if (!nom || !email || !acceptCGV) {
                  alert("Merci de remplir tous les champs et d'accepter les CGV");
                  return;
                }
                setEtape('paiement');
              }}
              className="w-full rounded-2xl bg-[#1DB954] py-4 text-base font-bold text-black transition-all duration-200 hover:scale-[1.01] hover:bg-[#17a349] active:scale-[0.99]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Continuer vers le paiement →
            </button>

            <div className="flex items-center justify-center gap-6 text-xs text-white/25" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="flex items-center gap-1.5">
                <Shield size={12} className="text-[#1DB954]" />
                Paiement sécurisé SSL
              </span>
              <span className="flex items-center gap-1.5">
                <Lock size={12} className="text-[#1DB954]" />
                Données protégées RGPD
              </span>
            </div>
          </motion.div>
        )}

        {etape === 'paiement' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-2xl space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-[#1a2e1a] bg-[#111811] p-4">
              <div>
                <p className="text-sm font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {offre.nom}
                </p>
                <p className="text-xs text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {nom} · {email}
                </p>
              </div>
              <p className="text-xl font-black text-[#1DB954]" style={{ fontFamily: "'Barlow', sans-serif" }}>
                {montant}€
              </p>
            </div>

            <div className="rounded-2xl border border-[#1a2e1a] bg-[#111811] p-6">
              <p
                className="mb-4 text-xs uppercase tracking-widest text-white/40"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Choisissez votre moyen de paiement
              </p>

              <div className="mb-6 grid grid-cols-2 gap-3">
                {[
                  { id: 'stripe' as const, label: 'Carte bancaire', icon: '💳' },
                  { id: 'paypal' as const, label: 'PayPal', icon: '🅿' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMethodePaiement(m.id)}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200
                      ${
                        methodePaiement === m.id
                          ? 'border-[#1DB954]/50 bg-[#1DB954]/8'
                          : 'border-[#1a2e1a] bg-[#0d130d] hover:border-[#1DB954]/20'
                      }`}
                  >
                    <span className="text-2xl">{m.icon}</span>
                    <span className="text-sm font-medium text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {m.label}
                    </span>
                    {methodePaiement === m.id && (
                      <div className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#1DB954]">
                        <Check size={10} className="text-black" strokeWidth={3} />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {methodePaiement === 'stripe' && (
                <div className="mb-4 flex items-start gap-3 rounded-xl border border-[#1a2e1a] bg-[#0d130d] p-4">
                  <CreditCard size={16} className="mt-0.5 shrink-0 text-[#1DB954]" />
                  <p className="text-sm text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Vous serez redirigé vers la page de paiement Stripe sécurisée. Visa, Mastercard, American Express acceptés.
                  </p>
                </div>
              )}
              {methodePaiement === 'paypal' && (
                <div className="mb-4 flex items-start gap-3 rounded-xl border border-[#1a2e1a] bg-[#0d130d] p-4">
                  <AlertCircle size={16} className="mt-0.5 shrink-0 text-[#1DB954]" />
                  <p className="text-sm text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Vous serez redirigé vers PayPal. Compte PayPal ou carte bancaire acceptés. Confirmez le paiement de {montant}€.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={methodePaiement === 'stripe' ? handlePaiementStripe : handlePaiementPaypal}
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1DB954] py-4 text-base font-bold text-black transition-all duration-200 hover:scale-[1.01] hover:bg-[#17a349] active:scale-[0.99] disabled:opacity-50"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Lock size={15} strokeWidth={2.5} />
                {loading
                  ? 'Redirection...'
                  : `Payer ${montant} ${PAYMENT_CONFIG.CURRENCY.toUpperCase()} via ${methodePaiement === 'stripe' ? 'Stripe' : 'PayPal'}`}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setEtape('recap')}
              className="w-full py-2 text-sm text-white/30 transition-colors hover:text-white/60"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ← Retour au récapitulatif
            </button>
          </motion.div>
        )}

        {etape === 'confirmation' && (
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-lg text-center">
            <div className="rounded-2xl border border-[#1DB954]/30 bg-[#111811] p-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1DB954]/15">
                <CheckCircle2 size={32} className="text-[#1DB954]" />
              </div>
              <h2 className="mb-3 text-3xl font-black italic text-white" style={{ fontFamily: "'Barlow', sans-serif" }}>
                Paiement reçu !
              </h2>
              <p className="mb-6 text-base text-white/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Merci {nom}. Votre acompte de <strong className="text-white">{montant}€</strong> a bien été reçu.
              </p>
              <div className="mb-6 rounded-xl bg-[#0d130d] p-4 text-left">
                <p className="text-sm text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  ✅ Confirmation envoyée à <strong>{email}</strong>
                  <br />
                  🚀 On vous recontacte sous 24h pour démarrer
                  <br />
                  📅 Livraison estimée : dans 14 jours ouvrés
                </p>
              </div>
              <p className="text-xs text-white/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Une question ? contact@altéra.fr · 06 52 55 42 83
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
