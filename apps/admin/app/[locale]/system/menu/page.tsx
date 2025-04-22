"use client"

import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { Table, Button, Space, message } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { BaseUFields } from "#/libs/fields";
import dayjs from "dayjs";

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

interface MenuData {
  uid: string;
  name: string;
  path: string;
  sort: number;
  powers: number;
  comment?: string;
  parentId?: string;
  createdAt: string;
  updatedAt: string;
  children?: MenuData[];
}

const SystemMenuPage = () => {
  const { data, loading, refetch } = useQuery(FindAllMenuQuery);
  const [dataSource, setDataSource] = useState<MenuData[]>([]);

  useEffect(() => {
    setDataSource(() => {
      return data?.menus || []
    })
  }, [data])

  const columns: ColumnsType<MenuData> = [
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
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey="uid"
      loading={loading}
      pagination={false}
      scroll={{
        y:'75vh'
      }}
      expandable={{
        childrenColumnName: 'children'
      }}
    />
  )
}

export default SystemMenuPage