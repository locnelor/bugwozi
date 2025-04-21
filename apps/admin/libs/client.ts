import { ApolloError, HttpLink, OperationVariables, QueryOptions } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { cookies } from "next/headers";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  const AuthLink = setContext(async (_, ctx) => {
    const token = (await cookies()).get("token");
    console.log(token?.value)
    return {
      headers: {
        ...ctx.headers,
        authorization: token ? `Bearer ${token?.value}` : "",
      },
    };
  })
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: AuthLink.concat(new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI
    }))
  });
});
export const getQuery = async <T>(option: QueryOptions<OperationVariables, any>) => {
  let err: ApolloError | undefined;
  const result: { data: T } = await query(option).catch(e => err = e);
  return [result, err] as const
}