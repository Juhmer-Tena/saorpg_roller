"use client";

import RollProvider from "@/components/RollContext";
import { getQueryClient } from "@/lib/get-query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RollProvider>
        {children}
      </RollProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}