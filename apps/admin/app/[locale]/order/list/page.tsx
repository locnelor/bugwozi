"use client"
import { gql } from "@apollo/client"

const FindOrdersQuery = gql`
  query OrderList($pagination: OrderPaginationInput!) {
    orderList(pagination: $pagination) {
      total
      data {
        out_trade_no
        transaction_id
        amount
        description
        state
        bank_type
        trade_type
        createdAt
        updatedAt
        goods {
          description
        }
        user {
          name
        }
      }
    }
  }
`

const UpdateOrderMutation = gql`
  mutation UpdateOrder($updateInput: UpdateOrderInput!) {
    updateOrder(updateInput: $updateInput) {
      out_trade_no
      description
    }
  }
`

const RemoveOrderMutation = gql`
  mutation RemoveOrder($out_trade_no: String!) {
    removeOrder(out_trade_no: $out_trade_no) {
      out_trade_no
    }
  }
`

import { useCallback } from "react"
import { useMutation } from "@apollo/client"
import { useOpen, usePagination } from "@pkg/hooks"
import AutoPage from "#/components/pages/AutoPage"
import { Button, Modal } from "antd"
import GoodsCard from "./GoodsCard"

// interface Order {
//   out_trade_no: string;
//   transaction_id?: string;
//   amount: number;
//   description: string;
//   state: 'SUCCESS' | 'REFUND' | 'NOTPAY' | 'CLOSED' | 'REVOKED' | 'USERPAYING' | 'PAYERROR';
//   bank_type?: string;
//   trade_type: string;
//   createdAt: string;
//   updatedAt: string;
//   goods?: {
//     description: string;
//   };
//   user?: {
//     name: string;
//   };
// }


const OrderListPage = () => {
  const [{ loading, data, onRefresh }, pagination] = usePagination({
    query: FindOrdersQuery,
  })

  const [updateOrder] = useMutation(UpdateOrderMutation)
  const [removeOrder] = useMutation(RemoveOrderMutation)

  const handleUpdate = useCallback(async (values: any) => {
    try {
      await updateOrder({
        variables: {
          updateInput: {
            out_trade_no: values.out_trade_no,
            amount: values.amount,
            description: values.description,
            state: values.state
          }
        }
      })
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }, [updateOrder, onRefresh])

  const handleRemove = useCallback(async (values: any) => {
    try {
      await removeOrder({
        variables: {
          out_trade_no: values.uid
        }
      })
      onRefresh()
    } catch (error) {
      console.error(error)
    }
  }, [removeOrder, onRefresh])
  const stateMap: Record<string, string> = {
    SUCCESS: '支付成功',
    REFUND: '转入退款',
    NOTPAY: '未支付',
    CLOSED: '已关闭',
    REVOKED: '已撤销',
    USERPAYING: '用户支付中',
    PAYERROR: '支付失败'
  }
  const [open, onOpen, onCancel] = useOpen();

  return (
    <AutoPage
      dataSource={data.map((e) => ({ ...e, uid: e.out_trade_no }))}
      loading={loading}
      columns={[
        {
          title: '商品',
          dataIndex: ['goods', 'description'],
          key: 'goods',
          width: 140,
          fixed: "left"
        },
        {
          title: '订单号',
          dataIndex: 'out_trade_no',
          key: 'out_trade_no',
          width: 220,
        },
        {
          title: '交易号',
          dataIndex: 'transaction_id',
          key: 'transaction_id',
          width: 220,
        },
        {
          title: '金额',
          dataIndex: 'amount',
          key: 'amount',
          render: (amount: number) => `${amount / 100} 元`,
          width: 100,
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
          width: 200
        },
        {
          title: '状态',
          dataIndex: 'state',
          key: 'state',
          render: (state: string) => stateMap[state] || state,
          width: 60
        },
        {
          title: '支付方式',
          dataIndex: 'trade_type',
          key: 'trade_type',
          width: 100
        },
        {
          title: '用户',
          dataIndex: ['user', 'name'],
          key: 'user',
          width: 140,
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt',
          key: 'createdAt',
          render: (value: string) => new Date(value).toLocaleString(),
          width: 100,
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
          {
            type: 'select',
            name: 'state',
            label: '状态',
            rest: {
              options: [
                { label: '全部', value: undefined },
                { label: '支付成功', value: 'SUCCESS' },
                { label: '转入退款', value: 'REFUND' },
                { label: '未支付', value: 'NOTPAY' },
                { label: '已关闭', value: 'CLOSED' },
                { label: '已撤销', value: 'REVOKED' },
                { label: '用户支付中', value: 'USERPAYING' },
                { label: '支付失败', value: 'PAYERROR' },
              ]
            }
          },
        ]
      }}

      update={{
        onSubmit: handleUpdate,
        name: '更新订单',
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
          {
            type: 'select',
            name: 'state',
            label: '状态',
            rest: {
              options: [
                { label: '支付成功', value: 'SUCCESS' },
                { label: '转入退款', value: 'REFUND' },
                { label: '未支付', value: 'NOTPAY' },
                { label: '已关闭', value: 'CLOSED' },
                { label: '已撤销', value: 'REVOKED' },
                { label: '用户支付中', value: 'USERPAYING' },
                { label: '支付失败', value: 'PAYERROR' },
              ]
            }
          },
        ]
      }}
      headerChildren={(
        <div>
          <Button onClick={onOpen} type="primary">创建订单</Button>
          <Modal
            open={open}
            onCancel={onCancel}
            title="创建订单"
          >
            <GoodsCard />
          </Modal>
        </div>
      )}

      remove={{
        onSubmit: handleRemove,
        name: '删除订单',
      }}
      pagination={pagination}
    />
  )
}

export default OrderListPage