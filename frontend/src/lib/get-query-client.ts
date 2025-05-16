/**
 * Source code from TanStack Query's examples repo on GitHub:
 * <https://github.com/tanstack/query/tree/main/examples/react/nextjs-suspense-streaming> for base
 *     URL
 * <https://github.com/tanstack/query/tree/main/examples/react/nextjs-app-prefetching> for
 *     everything else
 */

import {
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer,
} from '@tanstack/react-query'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export function getBaseURL() {
  if (!isServer) {
    return "/api";
  }

  return `http://${process.env.API_SERVER_CONTAINER}:8080`;
}
