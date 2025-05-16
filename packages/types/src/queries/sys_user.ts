import { gql } from "@apollo/client"
import { BaseUFields } from "./fields"


export const FindUserListQuery = gql`
  query FindUserList($pagination: UserPaginationInput!) {
    userList(pagination: $pagination) {
      total
      data {
        ${BaseUFields}
        name
        account
        roleId
        role{
          name
        }
      }
    }
  }
`

export const CreateUserMutation = gql`
  mutation CreateUser($createInput: CreateUserInput!) {
    createUser(createInput: $createInput) {
      uid
      name
      account
    }
  }
`

export const UpdateUserMutation = gql`
  mutation UpdateUser($updateInput: UpdateUserInput!) {
    updateUser(updateInput: $updateInput) {
      uid
      name
      account
    }
  }
`

export const RemoveUserMutation = gql`
  mutation RemoveUser($uid: String!) {
    removeUser(uid: $uid) {
      uid
    }
  }
`
