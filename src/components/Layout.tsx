import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import PageBackground from "./PageBackground";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen relative">
    <PageBackground />
    <Navbar />
    <main className="flex-1 pt-16 md:pt-20 pb-16 sm:pb-0 relative z-[1]">{children}</main>
    <Footer />
    <ChatBot />
  </div>
);

export default Layout;
