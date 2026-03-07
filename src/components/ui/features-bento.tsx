import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface BentoItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

interface FeaturesBentoProps {
  items: BentoItem[];
  className?: string;
}

export function FeaturesBento({ items, className }: FeaturesBentoProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, i) => (
        <Card
          key={i}
          className={cn(
            "bg-card border-border transition-all duration-300 hover:border-primary/40 hover:shadow-card-hover overflow-hidden",
            item.className
          )}
        >
          <CardHeader className="pb-2">
            {item.icon && (
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {item.icon}
              </div>
            )}
            <h3 className="font-display font-bold text-foreground text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </CardHeader>
          {item.children && (
            <CardContent className="pt-2">
              {item.children}
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
