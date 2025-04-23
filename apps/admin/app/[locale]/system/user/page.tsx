


"use client"
import { usePagination } from "@pkg/hooks"
import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Table } from "antd"
import type { ColumnsType } from 'antd/es/table'
import { BaseUFields } from "#/libs/fields"

const FindUserListQuery = gql`
  query FindUserList($pagination: UserPaginationInput!) {
    userList(pagination: $pagination) {
      total
      data {
        ${BaseUFields}
        name
        account
      }
    }
  }
`

interface UserData {
  uid: string
  name: string
  account: string
}

interface PaginationData {
  current: number
  pageSize: number
}

const SystemUserPage = () => {
  const [{
    loading,
    data
  }, pagination] = usePagination({
    query: FindUserListQuery,
  })

  const columns: ColumnsType<UserData> = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account',
    }
  ]

  return (
    <div className="p-6">
      <Table
        columns={columns}
        dataSource={data || []}
        rowKey="uid"
        loading={loading}
        pagination={false}
      />
      <div>
        {pagination}
      </div>
    </div>
  )
}

export default SystemUserPage