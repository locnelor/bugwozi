import { getQuery } from "#/libs/client"
import { ViewerQuery } from "./viewer.gql"


export const getViewer = async () => {
  const [{ data }, error] = await getQuery<{ viewer: any }>({
    query: ViewerQuery
  })
  return { viewer: data.viewer, error }
}