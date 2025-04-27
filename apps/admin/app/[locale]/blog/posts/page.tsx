"use client"
import { usePagination } from "@pkg/hooks"
import { gql } from "@apollo/client"
import PostsPage from "#/components/blog/posts/PostsPage"

const FindPostsQuery = gql`
  query FindPosts($pagination: PostsPaginationInput!) {
    posts(pagination: $pagination) {
      total
      data {
        uid
        title
        content
        status
        createAt
        updateAt
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

const CreatePostMutation = gql`
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
      create: CreatePostMutation,
      update: UpdatePostMutation,
      remove: RemovePostMutation,
    }}
  />
} 