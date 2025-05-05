"use client"
import { usePagination } from "@pkg/hooks"
import { gql, useQuery } from "@apollo/client"
import { BaseUFields } from "#/libs/fields"
import AutoPage from "#/components/pages/AutoPage"
import { useMutation } from "@apollo/client"
import { useDataSource } from "#/hooks/useTable"
import { RolesQuery } from "../role/gql"
import { useMemo } from "react"

const FindUserListQuery = gql`
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

const CreateUserMutation = gql`
  mutation CreateUser($createInput: CreateUserInput!) {
    createUser(createInput: $createInput) {
      uid
      name
      account
    }
  }
`

const UpdateUserMutation = gql`
  mutation UpdateUser($updateInput: UpdateUserInput!) {
    updateUser(updateInput: $updateInput) {
      uid
      name
      account
    }
  }
`

const RemoveUserMutation = gql`
  mutation RemoveUser($uid: String!) {
    removeUser(uid: $uid) {
      uid
    }
  }
`

const SystemUserPage = () => {
  const [{
    loading,
    data,
    onRefresh
  }, pagination] = usePagination({
    query: FindUserListQuery,
  })

  const [createUser] = useMutation(CreateUserMutation)
  const [updateUser] = useMutation(UpdateUserMutation)
  const [removeUser] = useMutation(RemoveUserMutation)
  const { data: rolesQuery } = useQuery(RolesQuery)
  const roles = useMemo(() => rolesQuery?.roles || [], [rolesQuery]);
  const handleCreate = async (variables: any) => {
    try {
      await createUser({
        variables: {
          createInput: {
            name: variables.name,
            account: variables.account,
            roleId: variables.roleId
          }
        }
      })
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdate = async (variables: any) => {
    try {
      await updateUser({
        variables: {
          updateInput: {
            uid: variables.uid,
            name: variables.name,
            account: variables.account,
            roleId: variables.roleId
          }
        }
      })
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }

  const handleRemove = async (variables: any) => {
    try {
      await removeUser({
        variables: {
          uid: variables.uid
        }
      })
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }

  const handleSearch = async (values: any) => {
    onRefresh(values)
  }
  const dataSource = useDataSource(data)

  return (
    <AutoPage
      dataSource={dataSource}
      columns={[
        {
          title: '用户ID',
          dataIndex: 'uid',
        },
        {
          title: '用户名',
          dataIndex: 'name',
        },
        {
          title: '账号',
          dataIndex: 'account',
        },
        {
          title: "角色",
          dataIndex: ['role', 'name']
        }
      ]}
      loading={loading}
      search={{
        onSubmit: handleSearch,
        fields: [
          {
            type: 'input',
            name: 'name',
            label: '用户名',
          },
          {
            type: 'input',
            name: 'account',
            label: '账号',
          },
        ]
      }}
      create={{
        onSubmit: handleCreate,
        name: '创建用户',
        fields: [
          {
            type: 'input',
            name: 'name',
            label: '用户名',
            required: true
          },
          {
            type: 'input',
            name: 'account',
            label: '账号',
            required: true
          },
        ]
      }}
      update={{
        onSubmit: handleUpdate,
        name: '更新用户',
        fields: [
          {
            type: 'input',
            name: 'name',
            label: '用户名',
            required: true
          },
          {
            type: 'input',
            name: 'account',
            label: '账号',
            required: true
          },
          {
            type: "select",
            name: "roleId",
            label: "角色",
            rest: {
              options: roles.map((role: any) => ({
                label: role.name,
                value: role.uid
              })),
              allowClear: true
            },
          }
        ]
      }}
      remove={{
        onSubmit: handleRemove,
        name: '删除用户',
      }}
      pagination={pagination}
    />
  )
}

export default SystemUserPage