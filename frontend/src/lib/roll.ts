import { queryOptions } from "@tanstack/react-query";
import { getBaseURL } from "./get-query-client";

export type Roll = {
  id: number;
  timestamp: string;
  version: string;
  post: string;
  purpose: string;
  character: string;
  battleDie: number;
  lootDie: number;
  craftDie: number;
  mobDie: number;
}

type FilterParameters = {
  character: string;
  post: string;
} | {
  character: string;
} | {
  post: string;
}

export type FetchParameters = {
  type: "recent";
} | {
  type: "filtered";
  params: FilterParameters;
}

async function retrieveLast50Rolls(baseUrl: string) {
  const response = await fetch(`${baseUrl}/roll/last50`);
  return await response.json() as Array<Roll>;
}

async function lookupFilteredRolls(baseUrl: string, params: FilterParameters) {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`${baseUrl}/roll?${searchParams}`);
  return await response.json() as Array<Roll>;
}

function retrieveTableRolls(props: FetchParameters) {
  const baseUrl = getBaseURL();

  switch (props.type) {
    case "filtered":
      return lookupFilteredRolls(baseUrl, props.params);
    case "recent":
    default:
      return retrieveLast50Rolls(baseUrl);
  }
}

export function rollOptions(props: FetchParameters) {
  return queryOptions({
    queryKey: ["rolls", props],
    queryFn: () => retrieveTableRolls(props),
  });
}

