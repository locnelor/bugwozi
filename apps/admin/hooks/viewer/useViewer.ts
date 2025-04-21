import { useQuery } from "@apollo/client"
import { ViewerQuery } from "./viewer.gql"


const useViewer = () => {
  const { data, loading, error } = useQuery(ViewerQuery);
  return {
    viewer: data?.viewer,
    loading,
    error
  }
}

export default useViewer