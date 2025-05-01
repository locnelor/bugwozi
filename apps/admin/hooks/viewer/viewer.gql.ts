import { BaseUFields } from "#/libs/fields";
import { gql } from "@apollo/client";


export const ViewerQuery = gql`
  query Viewer {
    viewer {
      ${BaseUFields}
      name
      roleId
    }
  }
`