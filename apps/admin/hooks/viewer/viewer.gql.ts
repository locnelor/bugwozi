import { BaseUFields } from "#/libs/fields";
import { gql } from "@apollo/client";


export const ViewerQuery = gql`
  query Viewer {
    viewer {
      ${BaseUFields}
      name
      roleId
      account
      role{
        name
        uid
        menus{
          menuId
          menu{
            name
            path
            parentId
            uid
            sort
          }
        }
      }
    }
  }
`