"use client";

import { useUser } from "@clerk/nextjs";

export const useAuth = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  return {
    userId: user?.id,
    user,
    isLoaded,
    isSignedIn,
  };
};