import { getQuery } from "#/libs/client"
import { ViewerQuery } from "./viewer.gql"


export const getViewer = async () => {
  const [{ data }, error] = await getQuery({
    query: ViewerQuery
  })
  return { data, error }
}