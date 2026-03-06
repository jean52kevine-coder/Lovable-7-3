import { Link } from "react-router-dom";
import logoAltera from "@/assets/logo-altera.png";

const Footer = () => (
  <footer className="bg-footer border-t border-border">
    <div className="section-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <img src={logoAltera} alt="ALTÉRA" className="h-8 w-8" />
            <span className="heading-display text-2xl text-primary">ALTÉRA</span>
          </div>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Votre présence en ligne, notre expertise.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="font-display font-bold text-foreground mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Accueil", to: "/" },
              { label: "Services", to: "/services" },
              { label: "Tarifs", to: "/tarifs" },
              { label: "Pourquoi un site", to: "/pourquoi-un-site" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contact@altera.fr</li>
            <li>France</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2025 ALTÉRA — Tous droits réservés
      </div>
    </div>
  </footer>
);

export default Footer;
