import { useQuery } from "@apollo/client"
import { ViewerResult, ViewerQuery } from "./gql"



const useViewer = () => {
  const { data, loading } = useQuery<ViewerResult>(ViewerQuery, {
    errorPolicy: "ignore"
  })
  return {
    viewer: data?.viewer,
    loading
  }
}

export default useViewer