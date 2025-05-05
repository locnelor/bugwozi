"use client"

import { useQuery } from "@apollo/client"
import { Table } from "antd";
import dayjs from "dayjs";
import Page from "#/components/pages/Page";
import { useColumns, useDataSource } from "#/hooks/useTable";
import { useMemo } from "react";
import { array2tree } from "#/libs/utils";
import { FindAllMenuQuery } from "./gql";



const SystemMenuPage = () => {
  const { data, loading } = useQuery(FindAllMenuQuery);
  const dataSource = useDataSource(data?.menus)

  const treeData = useMemo(() => {
    return array2tree(dataSource)
  }, [dataSource])
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
      <Table
        columns={columns}
        dataSource={treeData}
        rowKey="uid"
        loading={loading}
        pagination={false}
        scroll={{
          y: 'calc(100vh - 160px)'
        }}
        expandable={{
          childrenColumnName: 'children'
        }}
      />
    </Page>
  )
}

export default SystemMenuPage