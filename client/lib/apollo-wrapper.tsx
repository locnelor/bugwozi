"use client";

import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { getCookie } from "./cookie";

function makeClient() {
  const AuthLink = setContext((_, { headers }) => {
    const token = getCookie("token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: AuthLink.concat(
      new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
      })
    ),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
