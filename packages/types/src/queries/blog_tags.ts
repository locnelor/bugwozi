import { gql } from "@apollo/client"
import { BaseUFields } from "./fields"


export const FindTagsQuery = gql`
  query FindTags($pagination: TagPaginationInput!) {
    tags(pagination: $pagination) {
      total
      data {
        ${BaseUFields}
        name
      }
    }
  }
`

export const CreateTagMutation = gql`
  mutation CreateTag($createTagInput: CreateTagInput!) {
    createTag(createTagInput: $createTagInput) {
      uid
      name
    }
  }
`

export const UpdateTagMutation = gql`
  mutation UpdateTag($updateTagInput: UpdateTagInput!) {
    updateTag(updateTagInput: $updateTagInput) {
      uid
      name
    }
  }
`

export const RemoveTagMutation = gql`
  mutation RemoveTag($uid: String!) {
    removeTag(uid: $uid)
  }
`