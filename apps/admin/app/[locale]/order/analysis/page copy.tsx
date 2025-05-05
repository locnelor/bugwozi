"use client"
import { Card, Col, Row, Statistic } from "antd"
import { useEffect, useState } from "react"
import { gql, useQuery } from "@apollo/client"
import { prisma } from "@pkg/database"

// 这里假设我们有一个获取订单统计的查询
// 如果API中没有实际提供这样的查询，前端可以模拟一些数据进行展示
const OrderStatisticsQuery = gql`
  query OrderStatistics {
    orderList(pagination: { skip: 0, take: 1000 }) {
      total
      data {
        amount
        state
        createdAt
      }
    }
  }
`

interface OrderData {
  amount: number;
  state: string;
  createdAt: string;
}

interface OrderListData {
  orderList: {
    total: number;
    data: OrderData[];
  };
}

const OrderAnalysisPage = () => {
  const { data, loading } = useQuery<OrderListData>(OrderStatisticsQuery)
  const [statistics, setStatistics] = useState({
    total: 0,
    totalAmount: 0,
    successCount: 0,
    successAmount: 0,
    pendingCount: 0,
    pendingAmount: 0,
    todayCount: 0,
    todayAmount: 0
  })

  useEffect(() => {
    if (data && data.orderList && data.orderList.data) {
      const orders = data.orderList.data
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      let totalAmount = 0
      let successCount = 0
      let successAmount = 0
      let pendingCount = 0
      let pendingAmount = 0
      let todayCount = 0
      let todayAmount = 0

      orders.forEach((order: OrderData) => {
        const amount = order.amount || 0
        totalAmount += amount

        if (order.state === 'SUCCESS') {
          successCount++
          successAmount += amount
        }

        if (order.state === 'NOTPAY' || order.state === 'USERPAYING') {
          pendingCount++
          pendingAmount += amount
        }

        const orderDate = new Date(order.createdAt)
        if (orderDate >= today) {
          todayCount++
          todayAmount += amount
        }
      })

      setStatistics({
        total: orders.length,
        totalAmount,
        successCount,
        successAmount,
        pendingCount,
        pendingAmount,
        todayCount,
        todayAmount
      })
    }
  }, [data])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">订单分析</h1>

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="订单总数"
              value={statistics.total}
              loading={loading}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="交易总金额"
              value={statistics.totalAmount / 100}
              precision={2}
              suffix="元"
              loading={loading}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日订单数"
              value={statistics.todayCount}
              loading={loading}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="今日交易金额"
              value={statistics.todayAmount / 100}
              precision={2}
              suffix="元"
              loading={loading}
            />
          </Card>
        </Col>
      </Row>

      <h2 className="text-xl font-bold mt-8 mb-4">订单状态分析</h2>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="已支付订单数"
              value={statistics.successCount}
              loading={loading}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="已支付金额"
              value={statistics.successAmount / 100}
              precision={2}
              suffix="元"
              loading={loading}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="支付成功率"
              value={statistics.total > 0 ? (statistics.successCount / statistics.total) * 100 : 0}
              precision={2}
              suffix="%"
              loading={loading}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="待支付订单数"
              value={statistics.pendingCount}
              loading={loading}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="待支付金额"
              value={statistics.pendingAmount / 100}
              precision={2}
              suffix="元"
              loading={loading}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default OrderAnalysisPage