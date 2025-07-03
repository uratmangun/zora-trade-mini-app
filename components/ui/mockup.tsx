import { cn } from "@/lib/utils";
import React from "react";

interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Mockup({ children, className, ...props }: MockupProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <div className="relative z-10 flex min-h-[12rem] items-center justify-center rounded-xl border bg-card text-card-foreground shadow-sm">
        {children}
      </div>
      <div className="absolute -bottom-2 -left-2 -right-2 -top-2 -z-10 rounded-[1rem] bg-secondary/50" />
    </div>
  );
}

interface MockupFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MockupFrame({ children, className, ...props }: MockupFrameProps) {
  return (
    <div className={cn("relative aspect-video w-full overflow-hidden rounded-lg border shadow-sm", className)} {...props}>
      {children}
    </div>
  );
}
