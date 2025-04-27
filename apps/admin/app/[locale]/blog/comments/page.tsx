"use client"
import { gql } from "@apollo/client"
import CommentsPage from "#/components/blog/comments/CommentsPage"

const FindCommentsQuery = gql`
  query FindComments($pagination: CommentsPaginationInput!) {
    comments(pagination: $pagination) {
      total
      data {
        uid
        content
        status
        createAt
        updateAt
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
      create: CreateCommentMutation,
      update: UpdateCommentMutation,
      remove: RemoveCommentMutation,
    }}
  />
} 