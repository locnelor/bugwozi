import { BaseUFields } from "#/libs/fields";
import { gql } from "@apollo/client";

export const FindAllMenuQuery = gql`
  query FindAllMenu {
    menus {
      ${BaseUFields}
      name
      path
      sort
      powers
      comment
      parentId
    }
  }
`