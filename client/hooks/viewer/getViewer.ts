import { getQuery } from "@/lib/client"
import { ViewerResult, ViewerQuery } from "./gql"
export const getViewer = async () => {
  const [{ data }] = await getQuery<ViewerResult>({
    query: ViewerQuery,
    errorPolicy: "ignore"
  })
  return data?.viewer
}