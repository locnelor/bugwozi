import { gql } from "@apollo/client"



const ViewerGql = gql`
  query Viewer{
    viewer {
      uid
    }
  }
`
export default ViewerGql