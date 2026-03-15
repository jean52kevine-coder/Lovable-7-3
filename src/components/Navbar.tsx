import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Briefcase, DollarSign, HelpCircle, Globe, ShoppingCart, Wrench, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NavBar } from "@/components/ui/tubelight-navbar";
import AlteraLogo from "@/components/AlteraLogo";

const navItems = [
  { name: "Accueil", url: "/", icon: Home },
  {
    name: "Services",
    url: "/services",
    icon: Briefcase,
    submenu: [
      { name: "Site Vitrine", url: "/services/site-vitrine", icon: Globe },
      { name: "E-commerce", url: "/services/site-ecommerce", icon: ShoppingCart },
      { name: "Maintenance", url: "/services/maintenance", icon: Wrench },
    ],
  },
  { name: "Tarifs", url: "/tarifs", icon: DollarSign },
  { name: "Pourquoi", url: "/pourquoi-un-site", icon: HelpCircle },
];

const mobileLinks = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Site Vitrine", to: "/services/site-vitrine" },
  { label: "Site E-commerce", to: "/services/site-ecommerce" },
  { label: "Maintenance", to: "/services/maintenance" },
  { label: "Tarifs", to: "/tarifs" },
  { label: "Pourquoi", to: "/pourquoi-un-site" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center h-full py-1">
            <AlteraLogo size="md" className="max-h-[3.5rem] md:max-h-[4.5rem]" />
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/contact"
              className="bg-[#1DB954] text-black font-bold px-3 py-1.5 rounded-lg text-sm whitespace-nowrap"
            >
              Devis
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="h-10 w-10 rounded-lg border border-white/15 text-white flex items-center justify-center"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary text-sm">
              Devis Gratuit
            </Link>
          </div>
        </div>
      </nav>

      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#0a0f0a] md:hidden"
          >
            <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
              <AlteraLogo size="sm" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                className="h-10 w-10 rounded-lg border border-white/15 text-white flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-6 py-8 flex flex-col gap-5">
              {mobileLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-semibold text-white hover:text-[#1DB954] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
