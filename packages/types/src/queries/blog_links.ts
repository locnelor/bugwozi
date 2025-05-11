import { gql } from "@apollo/client"
import { BaseUFields } from "./fields"

export const FindLinksQuery = gql`
  query FindLinks($pagination: LinksPaginationInput!) {
    links(pagination: $pagination) {
      total
      data {
        ${BaseUFields}
        name
        url
        status
      }
    }
  }
`

export const CreateLinkMutation = gql`
  mutation CreateLink($createLinkInput: CreateLinkInput!) {
    createLink(createLinkInput: $createLinkInput) {
      uid
      name
    }
  }
`

export const UpdateLinkMutation = gql`
  mutation UpdateLink($updateLinkInput: UpdateLinkInput!) {
    updateLink(updateLinkInput: $updateLinkInput) {
      uid
      name
    }
  }
`

export const RemoveLinkMutation = gql`
  mutation RemoveLink($uid: String!) {
    removeLink(uid: $uid) {
      uid
    }
  }
`
