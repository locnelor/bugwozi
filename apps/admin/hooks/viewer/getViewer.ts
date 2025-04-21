import { getClient } from "#/libs/client"
import { ViewerQuery } from "./viewer.gql"


export const getViewer = async () => {
  const client = getClient()
  const { errors, error, data } = await client.query({
    query: ViewerQuery
  })
  return { data, error, errors }
}