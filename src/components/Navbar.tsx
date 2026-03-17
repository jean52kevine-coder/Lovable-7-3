import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Briefcase, DollarSign, HelpCircle, Globe, ShoppingCart, Wrench, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    ]
  },
  { name: "Tarifs", url: "/tarifs", icon: DollarSign },
  { name: "Pourquoi", url: "/pourquoi-un-site", icon: HelpCircle },
];

const mobileLinks = [
  { name: "Accueil", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Site Vitrine", url: "/services/site-vitrine" },
  { name: "E-commerce", url: "/services/site-ecommerce" },
  { name: "Maintenance", url: "/services/maintenance" },
  { name: "Tarifs", url: "/tarifs" },
  { name: "Pourquoi", url: "/pourquoi-un-site" },
  { name: "Contact", url: "/contact" },
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
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center h-full py-1 transition-transform duration-300 hover:scale-105">
            <AlteraLogo size="md" className="max-h-[3.5rem] md:max-h-[4.5rem]" />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="md:hidden bg-[#1DB954] text-black font-bold px-3 py-1.5 rounded-lg text-sm whitespace-nowrap"
            >
              Devis
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white p-2"
              aria-label="Ouvrir le menu"
            >
              <Menu size={22} />
            </button>

            <div className="hidden md:block">
              <Link to="/contact" className="btn-primary text-sm">
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-50 md:hidden bg-[#0a0f0a] p-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)} className="text-white p-2" aria-label="Fermer le menu">
                <X size={24} />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-5">
              {mobileLinks.map((item) => (
                <Link
                  key={item.url}
                  to={item.url}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-display font-bold text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>
    </>
  );
};

export default Navbar;
