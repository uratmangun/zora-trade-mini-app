"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Glow({ children, className, asChild, ...props }: GlowProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp className={cn("group relative", className)} {...props}>
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
      {children}
    </Comp>
  );
}
