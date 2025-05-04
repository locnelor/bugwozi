"use client"
import { gql } from "@apollo/client"
import LinksPage from "#/components/blog/links/LinksPage"
import { BaseUFields } from "#/libs/fields"

const FindLinksQuery = gql`
  query FindLinks($pagination: LinksPaginationInput!) {
    links(pagination: $pagination) {
      total
      data {
        ${BaseUFields}
        name
        url
        description
        status
      }
    }
  }
`

const CreateLinkMutation = gql`
  mutation CreateLink($createLinkInput: CreateLinkInput!) {
    createLink(createLinkInput: $createLinkInput) {
      uid
      name
    }
  }
`

const UpdateLinkMutation = gql`
  mutation UpdateLink($updateLinkInput: UpdateLinkInput!) {
    updateLink(updateLinkInput: $updateLinkInput) {
      uid
      name
    }
  }
`

const RemoveLinkMutation = gql`
  mutation RemoveLink($uid: String!) {
    removeLink(uid: $uid) {
      uid
    }
  }
`

export default function LinksListPage() {
  return <LinksPage
    queries={{
      find: FindLinksQuery,
      create: CreateLinkMutation,
      update: UpdateLinkMutation,
      remove: RemoveLinkMutation,
    }}
  />
} 