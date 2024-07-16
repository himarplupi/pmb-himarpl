"use client";

import { type ReactNode } from "react";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ReactLenis } from "lenis/react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

import { env } from "@/env";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";

interface LenisSmoothScrollProps {
  children: React.ReactNode;
  className?: string;
  root?: boolean;
}

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
  });
}

export function LenisSmoothScroll({
  children,
  className,
  root = false,
}: LenisSmoothScrollProps) {
  return (
    <ReactLenis
      root={root}
      className={cn("max-h-screen overflow-y-auto", className)}
    >
      {children}
    </ReactLenis>
  );
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TRPCReactProvider>
      <ThemeProvider forcedTheme="dark" attribute="class" defaultTheme="dark">
        <LenisSmoothScroll root>{children}</LenisSmoothScroll>
      </ThemeProvider>
    </TRPCReactProvider>
  );
}
