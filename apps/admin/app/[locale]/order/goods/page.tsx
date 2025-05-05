"use client"


import { useCallback } from "react"
import { useMutation } from "@apollo/client"
import { usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { timeColumns } from "#/hooks/useTable"
import { FindGoodsQuery, CreateGoodsMutation, UpdateGoodsMutation, RemoveGoodsMutation } from "./gql"

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
      onRefresh()
    } catch (error) {
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
      onRefresh()
    } catch (error) {
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
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }, [removeGoods, onRefresh])
  return (
    <AutoPage
      dataSource={data}
      loading={loading}
      columns={[
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
        ...timeColumns
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
            required: true
          },
          {
            type: 'number',
            name: 'amount',
            label: '金额（分）',
            required: true
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