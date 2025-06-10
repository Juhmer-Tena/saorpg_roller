import { keepPreviousData, queryOptions } from "@tanstack/react-query";
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
};

export type FilterParameters =
  | {
      character: string;
    }
  | {
      post: string;
    };

type FetchRecentParams = {
  type: "recent";
};

type FetchFilteredParams = {
  type: "filtered";
  params: FilterParameters;
};

type FetchByIdParams = {
  type: "byId";
  id: string;
};

export type FetchParameters =
  | FetchRecentParams
  | FetchFilteredParams
  | FetchByIdParams;

export type GenerateRollParameters = {
  character: string;
  postLink: string;
  purpose: string;
};

export async function performRoll(
  baseUrl: string,
  params: GenerateRollParameters,
) {
  const response = await fetch(`${baseUrl}/roll`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("4xx/5xx response from server");
  }
  return (await response.json()) as Roll;
}

async function retrieveLast50Rolls(baseUrl: string) {
  const response = await fetch(`${baseUrl}/roll/last50`);
  if (!response.ok) {
    throw new Error("4xx/5xx response from server");
  }
  return (await response.json()) as Array<Roll>;
}

async function lookupFilteredRolls(baseUrl: string, params: FilterParameters) {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`${baseUrl}/roll?${searchParams}`);
  if (!response.ok) {
    throw new Error("4xx/5xx response from server");
  }
  return (await response.json()) as Array<Roll>;
}

async function lookupRollById(baseUrl: string, id: string) {
  const matchedNumbers = id.match(/\d+/);
  if (matchedNumbers === null) {
    throw new Error("No numbers were found in the id queried");
  }
  id = matchedNumbers[0];
  if (matchedNumbers.length !== 1) {
    console.warn(
      `Multiple numbers were matched in the input. Retrieving first match: ${id}`,
    );
  }
  const response = await fetch(`${baseUrl}/roll/${id}`);
  if (!response.ok) {
    throw new Error("4xx/5xx response from server");
  }
  return [await response.json()] as Array<Roll>;
}

function retrieveTableRolls(props: FetchParameters) {
  const baseUrl = getBaseURL();

  switch (props.type) {
    case "filtered":
      return lookupFilteredRolls(baseUrl, props.params);
    case "byId":
      return lookupRollById(baseUrl, props.id);
    case "recent":
    default:
      return retrieveLast50Rolls(baseUrl);
  }
}

export function rollOptions(props: FetchParameters) {
  return queryOptions({
    queryKey: ["rolls", props],
    queryFn: () => retrieveTableRolls(props),
    placeholderData: keepPreviousData,
  });
}
