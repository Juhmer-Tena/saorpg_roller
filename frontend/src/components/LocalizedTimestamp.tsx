"use client";

import { Suspense, useEffect, useState } from "react";

const timestampFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "long",
  timeStyle: "long",
});

export function LocalizedTimestamp({ timestamp }: { timestamp: Date }) {
  const [formattedTimestamp, setFormattedTimestamp] = useState(timestampFormatter.format(timestamp));
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setFormattedTimestamp(timestampFormatter.format(timestamp));
    setIsHydrated(true);
  }, [timestamp]);

  return (
    <Suspense key={isHydrated ? "locale" : "utc"}>
      <span>{formattedTimestamp}</span>
    </Suspense>
  );
}