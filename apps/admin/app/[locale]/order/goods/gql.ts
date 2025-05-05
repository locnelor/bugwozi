import { gql } from "@apollo/client"


export const FindGoodsQuery = gql`
  query GoodsList($pagination: GoodsPaginationInput!) {
    goodsList(pagination: $pagination) {
      total
      data {
        uid
        amount
        description
        createdAt
        updatedAt
        user {
          name
        }
      }
    }
  }
`

export const CreateGoodsMutation = gql`
  mutation CreateGoods($createInput: CreateGoodsInput!) {
    createGoods(createInput: $createInput) {
      uid
      description
    }
  }
`

export const UpdateGoodsMutation = gql`
  mutation UpdateGoods($updateInput: UpdateGoodsInput!) {
    updateGoods(updateInput: $updateInput) {
      uid
      description
    }
  }
`

export const RemoveGoodsMutation = gql`
  mutation RemoveGoods($uid: String!, $all: Boolean) {
    removeGoods(uid: $uid, all: $all) {
      uid
    }
  }
`