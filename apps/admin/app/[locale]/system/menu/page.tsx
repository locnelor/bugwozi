"use client"

import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { Table, Button, Space, message } from "antd";
import type { ColumnsType } from 'antd/es/table';

const FindAllMenuQuery = gql`
  query FindAllMenu {
    findAllMenu {
      uid
      name
      path
      sort
      powers
      comment
      parentId
      createdAt
      updatedAt
      children {
        uid
        name
        path
        sort
        powers
        comment
        parentId
      }
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
      return data?.findAllMenu || []
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
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small" danger>删除</Button>
          <Button type="link" size="small">添加子菜单</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-4">
        <Button type="primary">新增菜单</Button>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey="uid"
        loading={loading}
        pagination={false}
        expandable={{
          childrenColumnName: 'children'
        }}
      />
    </div>
  )
}

export default SystemMenuPage