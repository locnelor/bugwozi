import { gql } from "@apollo/client"
import { BaseUFields } from "./fields"

export const FindCommentsQuery = gql`
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

export const CreateCommentMutation = gql`
  mutation CreateComment($data: CreateCommentInput!) {
    createComment(createCommentInput: $data) {
      uid
      content
    }
  }
`

export const UpdateCommentMutation = gql`
  mutation UpdateComment($updateCommentInput: UpdateCommentInput!) {
    updateComment(updateCommentInput: $updateCommentInput) {
      uid
      content
    }
  }
`

export const RemoveCommentMutation = gql`
  mutation RemoveComment($uid: String!) {
    removeComment(uid: $uid) {
      uid
    }
  }
`