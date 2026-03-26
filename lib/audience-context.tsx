"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Audience } from "./types";

interface AudienceContextType {
  audience: Audience;
  setAudience: (audience: Audience) => void;
}

const AudienceContext = createContext<AudienceContextType>({
  audience: "pro",
  setAudience: () => {},
});

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>("pro");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bildungskompass-audience");
    if (stored === "pro" || stored === "parent") {
      setAudienceState(stored);
    }
    setMounted(true);
  }, []);

  const setAudience = (newAudience: Audience) => {
    setAudienceState(newAudience);
    localStorage.setItem("bildungskompass-audience", newAudience);
  };

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  return useContext(AudienceContext);
}
