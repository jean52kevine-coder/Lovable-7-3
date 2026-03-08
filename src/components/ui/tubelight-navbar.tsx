"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    items.find((item) => item.url === location.pathname)?.name || items[0].name
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const matched = items.find((item) => item.url === location.pathname);
    if (matched) setActiveTab(matched.name);
  }, [location.pathname, items]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-4 left-1/2 -translate-x-1/2 z-50",
        "sm:bottom-auto bottom-4",
        className
      )}
    >
      <div className="flex items-center gap-1 bg-background/80 border border-border backdrop-blur-xl py-1.5 px-2 rounded-full shadow-2xl">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{
                    backgroundColor: "hsl(var(--primary) / 0.08)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                >
                  {/* Tubelight glow bar */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-primary opacity-80 blur-[3px]" />
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary opacity-100" />
                  {/* Bottom glow for mobile */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-primary opacity-80 blur-[3px] sm:hidden" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary opacity-100 sm:hidden" />
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
