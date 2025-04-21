import { gql } from "@apollo/client";


export const ViewerQuery = gql`
  query Viewer {
    viewer {
      uid
    }
  }
`