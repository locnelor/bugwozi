"use client"
import { usePagination } from "@pkg/hooks"
import { gql } from "@apollo/client"
import PostsPage from "#/components/blog/posts/PostsPage"

const FindPostsQuery = gql`
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

const UpdatePostMutation = gql`
  mutation UpdatePost($updatePostInput: UpdatePostInput!) {
    updatePost(updatePostInput: $updatePostInput) {
      uid
      title
    }
  }
`

const RemovePostMutation = gql`
  mutation RemovePost($uid: String!) {
    removePost(uid: $uid) {
      uid
    }
  }
`

export default function PostsListPage() {
  return <PostsPage 
    queries={{
      find: FindPostsQuery,
      update: UpdatePostMutation,
      remove: RemovePostMutation,
    }}
  />
} 