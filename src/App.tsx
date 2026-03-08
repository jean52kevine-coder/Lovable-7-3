import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import SiteVitrinePage from "./pages/SiteVitrinePage";
import SiteEcommercePage from "./pages/SiteEcommercePage";
import MaintenancePage from "./pages/MaintenancePage";
import TarifsPage from "./pages/TarifsPage";
import PourquoiPage from "./pages/PourquoiPage";
import ContactPage from "./pages/ContactPage";
import SeoGeneratorPage from "./pages/SeoGeneratorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <BackToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/site-vitrine" element={<SiteVitrinePage />} />
            <Route path="/services/site-ecommerce" element={<SiteEcommercePage />} />
            <Route path="/services/maintenance" element={<MaintenancePage />} />
            <Route path="/tarifs" element={<TarifsPage />} />
            <Route path="/pourquoi-un-site" element={<PourquoiPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/seo-generator" element={<SeoGeneratorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
