"use client"
import { gql } from "@apollo/client"

const FindGoodsQuery = gql`
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

const CreateGoodsMutation = gql`
  mutation CreateGoods($createInput: CreateGoodsInput!) {
    createGoods(createInput: $createInput) {
      uid
      description
    }
  }
`

const UpdateGoodsMutation = gql`
  mutation UpdateGoods($updateInput: UpdateGoodsInput!) {
    updateGoods(updateInput: $updateInput) {
      uid
      description
    }
  }
`

const RemoveGoodsMutation = gql`
  mutation RemoveGoods($uid: String!, $all: Boolean) {
    removeGoods(uid: $uid, all: $all) {
      uid
    }
  }
`

import { useCallback, useMemo } from "react"
import { useMutation } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { message } from "antd"

interface Goods {
  uid: string;
  amount: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    name: string;
  };
}

interface GoodsListData {
  goodsList: {
    total: number;
    data: Goods[];
  };
}

const OrderGoodsPage = () => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: FindGoodsQuery,
  })

  const [createGoods] = useMutation(CreateGoodsMutation)
  const [updateGoods] = useMutation(UpdateGoodsMutation)
  const [removeGoods] = useMutation(RemoveGoodsMutation)

  const handleCreate = useCallback(async (values: any) => {
    try {
      await createGoods({
        variables: {
          createInput: {
            amount: values.amount,
            description: values.description,
            all: true
          }
        }
      })
      message.success('创建商品成功')
      onRefresh()
    } catch (error) {
      message.error('创建商品失败')
      console.error(error)
    }
  }, [createGoods, onRefresh])

  const handleUpdate = useCallback(async (values: any) => {
    try {
      await updateGoods({
        variables: {
          updateInput: {
            uid: values.uid,
            amount: values.amount,
            description: values.description,
            all: true
          }
        }
      })
      message.success('更新商品成功')
      onRefresh()
    } catch (error) {
      message.error('更新商品失败')
      console.error(error)
    }
  }, [updateGoods, onRefresh])

  const handleRemove = useCallback(async (values: any) => {
    try {
      await removeGoods({
        variables: {
          uid: values.uid,
          all: true
        }
      })
      message.success('删除商品成功')
      onRefresh()
    } catch (error) {
      message.error('删除商品失败')
      console.error(error)
    }
  }, [removeGoods, onRefresh])
  return (
    <AutoPage
      dataSource={data}
      loading={loading}
      columns={[
        {
          title: 'ID',
          dataIndex: 'uid',
          key: 'uid',
          width: 220,
        },
        {
          title: '金额',
          dataIndex: 'amount',
          key: 'amount',
          render: (amount: number) => `${amount / 100} 元`,
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '创建者',
          dataIndex: ['user', 'name'],
          key: 'user',
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt',
          key: 'createdAt',
          render: (value: string) => new Date(value).toLocaleString(),
        },
        {
          title: '更新时间',
          dataIndex: 'updatedAt',
          key: 'updatedAt',
          render: (value: string) => new Date(value).toLocaleString(),
        },
      ]}
      search={{
        onSubmit: values => onRefresh(values),
        fields: [
          {
            type: 'input',
            name: 'description',
            label: '描述',
          },
        ]
      }}
      create={{
        onSubmit: handleCreate,
        name: '创建商品',
        fields: [
          {
            type: 'input',
            name: 'description',
            label: '描述',
            rest: { rules: [{ required: true, message: '请输入描述' }] }
          },
          {
            type: 'number',
            name: 'amount',
            label: '金额（分）',
            rest: { rules: [{ required: true, message: '请输入金额' }] }
          },
        ]
      }}
      update={{
        onSubmit: handleUpdate,
        name: '更新商品',
        fields: [
          {
            type: 'input',
            name: 'description',
            label: '描述',
          },
          {
            type: 'number',
            name: 'amount',
            label: '金额（分）',
          },
        ]
      }}
      remove={{
        onSubmit: handleRemove,
        name: '删除商品',
      }}
      pagination={pagination}
    />
  )
}

export default OrderGoodsPage 