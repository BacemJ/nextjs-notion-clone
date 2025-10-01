"use client";

// Single responsibility: provide Convex bound to existing Clerk auth context.
// Assumes a parent <ClerkProvider> wraps the tree (see app/layout.tsx).
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  // Fail fast in dev to surface misconfiguration.
  // (Console warning only so build does not crash in prod deploy previews.)
  console.warn(
    "[Convex] NEXT_PUBLIC_CONVEX_URL is not defined. Convex client will not function until it is set."
  );
}
const convex = new ConvexReactClient(convexUrl || "");

export function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}