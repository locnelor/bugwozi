import { BaseFields } from "@/queries/base"
import { UserFields, UserEntity } from "@/queries/user"
import { gql } from "@apollo/client"

export const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      ${UserFields}
      ${BaseFields}
    }
  }
`
export type ViewerResult = {
  viewer: UserEntity
}