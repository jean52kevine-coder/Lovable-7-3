import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, DollarSign, HelpCircle } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import AlteraLogo from "@/components/AlteraLogo";

const navItems = [
  { name: "Accueil", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Briefcase },
  { name: "Tarifs", url: "/tarifs", icon: DollarSign },
  { name: "Pourquoi", url: "/pourquoi-un-site", icon: HelpCircle },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar with logo only */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/60 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAltera} alt="ALTÉRA" className="h-8 w-8" />
            <span className="heading-display text-2xl md:text-3xl text-primary">ALTÉRA</span>
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary text-sm">
              Devis Gratuit
            </Link>
          </div>
        </div>
      </nav>

      {/* Tubelight floating navbar */}
      <NavBar items={navItems} />
    </>
  );
};

export default Navbar;
