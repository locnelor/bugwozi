"use client"
import { gql } from "@apollo/client"
import CommentsPage from "#/components/blog/comments/CommentsPage"
import { BaseUFields } from "#/libs/fields"

const FindCommentsQuery = gql`
  query FindComments($pagination: CommentsPaginationInput!) {
    comments(pagination: $pagination) {
      total
      data {
        ${BaseUFields}
        content
        status
        post {
          title
        }
        user {
          name
        }
      }
    }
  }
`

const CreateCommentMutation = gql`
  mutation CreateComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      uid
      content
    }
  }
`

const UpdateCommentMutation = gql`
  mutation UpdateComment($updateCommentInput: UpdateCommentInput!) {
    updateComment(updateCommentInput: $updateCommentInput) {
      uid
      content
    }
  }
`

const RemoveCommentMutation = gql`
  mutation RemoveComment($uid: String!) {
    removeComment(uid: $uid) {
      uid
    }
  }
`

export default function CommentsListPage() {
  return <CommentsPage 
    queries={{
      find: FindCommentsQuery,
      update: UpdateCommentMutation,
      remove: RemoveCommentMutation,
    }}
  />
} 