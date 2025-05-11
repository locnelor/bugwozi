"use client"
import CommentsPage from "#/components/blog/comments/CommentsPage"
import {
  FindCommentsQuery,
  UpdateCommentMutation,
  RemoveCommentMutation
} from "@pkg/types"



export default function CommentsListPage() {
  return <CommentsPage
    queries={{
      find: FindCommentsQuery,
      update: UpdateCommentMutation,
      remove: RemoveCommentMutation,
    }}
  />
} 