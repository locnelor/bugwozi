import { gql } from "@apollo/client"
import { BaseUFields } from "./fields"


export const FindCategoriesQuery = gql`
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

export const CreateCategoryMutation = gql`
  mutation CreateCategory($createCategoryInput: CreateCategoryInput!) {
    createCategory(createCategoryInput: $createCategoryInput) {
      uid
      name
    }
  }
`

export const UpdateCategoryMutation = gql`
  mutation UpdateCategory($updateCategoryInput: UpdateCategoryInput!) {
    updateCategory(updateCategoryInput: $updateCategoryInput) {
      uid
      name
    }
  }
`

export const RemoveCategoryMutation = gql`
  mutation RemoveCategory($uid: String!) {
    removeCategory(uid: $uid) {
      uid
    }
  }
`