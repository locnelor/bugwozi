import { getQuery } from "#/libs/client"
import { redirect } from "next/navigation"
import { ViewerQuery } from "./viewer.gql"


export const getViewer = async (red = false) => {
  const [{ data }, error] = await getQuery<{ viewer: any }>({
    query: ViewerQuery
  })
  const viewer = data?.viewer
  if (red && !viewer) redirect(`/auth`)
  return { viewer, error }
}
