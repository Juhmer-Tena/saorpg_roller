"use client";

import type { FetchParameters } from "@/lib/roll";
import { createContext, type ReactNode, useState, useContext, type SetStateAction, type Dispatch, useTransition } from "react";

const RollContext = createContext<{
  params: FetchParameters;
  setFetchParamsAction: Dispatch<SetStateAction<FetchParameters>>,
}>({
  params: {
    type: "recent"
  },
  setFetchParamsAction: () => { },
});

export function useRollContext() {
  return useContext(RollContext);
}

export default function RollProvider({
  children,
}: {
  children: ReactNode
}) {
  const [fetchParameters, setFetchParameters] = useState<FetchParameters>({ type: "recent" });

  return <RollContext.Provider value={{
    params: fetchParameters,
    setFetchParamsAction: setFetchParameters,
  }}>{children}</RollContext.Provider>
}
