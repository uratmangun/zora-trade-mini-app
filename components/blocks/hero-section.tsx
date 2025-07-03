"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Glow } from "@/components/ui/glow";

interface HeroAction {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
  onClick?: () => void;
  asChild?: boolean;
  children?: React.ReactNode;
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
}: HeroProps) {
  return (
    <section className="container mx-auto grid items-center gap-6 px-4 pb-8 pt-6 text-center md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-center justify-center gap-2">
        {badge && (
          <Glow>
            <Badge className="relative">
              <a href={badge.action.href} className="flex items-center">
                {badge.text}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Badge>
          </Glow>
        )}
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          {description}
        </p>
      </div>
      <div className="flex justify-center gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            asChild={action.asChild}
            onClick={action.onClick}
            variant={action.variant === "glow" ? "default" : action.variant}
            className={cn(action.variant === "glow" && "shadow-glow")}
          >
            {action.asChild ? (
              action.children
            ) : (
              <>
                {action.icon && <span className="mr-2">{action.icon}</span>}
                {action.text}
              </>
            )}
          </Button>
        ))}
      </div>
    </section>
  );
}
