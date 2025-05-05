
import { gql } from "@apollo/client"

export const FindPostsQuery = gql`
  query FindPosts($pagination: PostsPaginationInput!) {
    posts(pagination: $pagination) {
      total
      data {
        title
        content
        status
        user {
          name
        }
        categories {
          name
        }
      }
    }
  }
`

export const CreatePostMutation = gql`
  mutation CreatePost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      uid
      title
    }
  }
`

export const UpdatePostMutation = gql`
  mutation UpdatePost($updatePostInput: UpdatePostInput!) {
    updatePost(updatePostInput: $updatePostInput) {
      uid
      title
    }
  }
`

export const RemovePostMutation = gql`
  mutation RemovePost($uid: String!) {
    removePost(uid: $uid) {
      uid
    }
  }
`