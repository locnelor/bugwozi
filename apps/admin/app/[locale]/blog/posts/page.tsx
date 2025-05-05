"use client"

import PostsPage from "#/components/blog/posts/PostsPage"
import { FindPostsQuery, UpdatePostMutation, RemovePostMutation } from "./gql"


export default function PostsListPage() {
  return <PostsPage
    queries={{
      find: FindPostsQuery,
      update: UpdatePostMutation,
      remove: RemovePostMutation,
    }}
  />
} 