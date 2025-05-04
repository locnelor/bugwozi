"use client"
import { gql } from "@apollo/client"
import CategoriesPage from "#/components/blog/categories/CategoriesPage"
import { BaseUFields } from "#/libs/fields"

const FindCategoriesQuery = gql`
  query FindCategories($pagination: CategoriesPaginationInput!) {
    categories(pagination: $pagination) {
      total
      data {
        ${BaseUFields}
        name
      }
    }
  }
`

const CreateCategoryMutation = gql`
  mutation CreateCategory($createCategoryInput: CreateCategoryInput!) {
    createCategory(createCategoryInput: $createCategoryInput) {
      uid
      name
    }
  }
`

const UpdateCategoryMutation = gql`
  mutation UpdateCategory($updateCategoryInput: UpdateCategoryInput!) {
    updateCategory(updateCategoryInput: $updateCategoryInput) {
      uid
      name
    }
  }
`

const RemoveCategoryMutation = gql`
  mutation RemoveCategory($uid: String!) {
    removeCategory(uid: $uid) {
      uid
    }
  }
`

export default function CategoriesListPage() {
  return <CategoriesPage
    queries={{
      find: FindCategoriesQuery,
      create: CreateCategoryMutation,
      update: UpdateCategoryMutation,
      remove: RemoveCategoryMutation,
    }}
  />
} 