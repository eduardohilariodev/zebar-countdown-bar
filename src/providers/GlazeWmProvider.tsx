import React, { createContext, useEffect, useState } from "react";
import { createProviderGroup, GlazeWmOutput } from "zebar";

interface GlazeWmContextProps {
  glazewm: GlazeWmOutput | null;
}

export const GlazeWmContext = createContext<GlazeWmContextProps>({
  glazewm: null,
});

const providers = createProviderGroup({
  glazewm: { type: "glazewm" },
});

export function GlazeWmProvider({ children }: { children: React.ReactNode }) {
  const [output, setOutput] = useState(providers.outputMap.glazewm);

  useEffect(() =>
    providers.onOutput(() => setOutput(providers.outputMap.glazewm))
  );

  return (
    <GlazeWmContext.Provider value={{ glazewm: output }}>
      {children}
    </GlazeWmContext.Provider>
  );
}
