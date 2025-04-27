"use client"
import { gql } from "@apollo/client"
import { getClient } from "#/libs/client"
import TagsPage from "#/components/blog/tag/TagsPage"

export const dynamic = "force-dynamic"

const FindTagsQuery = gql`
  query FindTags($pagination: PaginationArg!) {
    tags(pagination: $pagination) {
      total
      data {
        uid
        name
        createAt
        updateAt
      }
    }
  }
`

const CreateTagMutation = gql`
  mutation CreateTag($createTagInput: CreateTagInput!) {
    createTag(createTagInput: $createTagInput) {
      uid
      name
    }
  }
`

const UpdateTagMutation = gql`
  mutation UpdateTag($updateTagInput: UpdateTagInput!) {
    updateTag(updateTagInput: $updateTagInput) {
      uid
      name
    }
  }
`

const RemoveTagMutation = gql`
  mutation RemoveTag($uid: String!) {
    removeTag(uid: $uid)
  }
`

export default function TagsListPage() {
  return (
    <TagsPage
      queries={{
        find: FindTagsQuery,
        create: CreateTagMutation,
        update: UpdateTagMutation,
        remove: RemoveTagMutation,
      }}
    />
  )
} 