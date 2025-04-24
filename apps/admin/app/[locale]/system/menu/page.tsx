"use client"

import { gql, useQuery } from "@apollo/client"
import { Table } from "antd";
import { BaseUFields } from "#/libs/fields";
import dayjs from "dayjs";
import Page from "#/components/pages/Page";
import TablePage from "#/components/pages/TablePage";
import { useColumns, useDataSource } from "#/hooks/useTable";

export const FindAllMenuQuery = gql`
  query FindAllMenu {
    menus {
      ${BaseUFields}
      name
      path
      sort
      powers
      comment
      parentId
    }
  }
`

const SystemMenuPage = () => {
  const { data, loading } = useQuery(FindAllMenuQuery);
  const dataSource = useDataSource(data?.menus)
  
  const columns = useColumns([
    {
      title: '菜单名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '路径',
      dataIndex: 'path',
      key: 'path',
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
      width: 100,
    },
    {
      title: '权限值',
      dataIndex: 'powers',
      key: 'powers',
      width: 100,
    },
    {
      title: '备注',
      dataIndex: 'comment',
      key: 'comment',
      ellipsis: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => dayjs(text).format('YYYY-MM-DD'),
    }
  ]);

  return (
    <Page>
      <TablePage
        dataSource={dataSource}
        loading={loading}
        columns={columns}
      />
    </Page>
  )
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey="uid"
      loading={loading}
      pagination={false}
      scroll={{
        y: '75vh'
      }}
      expandable={{
        childrenColumnName: 'children'
      }}
    />
  )
}

export default SystemMenuPage