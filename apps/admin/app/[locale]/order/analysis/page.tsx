import { Card, Col, Row, Statistic } from "antd"
import { prisma } from "@pkg/database"
import OrderAnalysisClient from "./OrderAnalysisClient"

const OrderAnalysisPage = async () => {
  // 获取所有订单
  const orders = await prisma.sys_order.findMany()
  
  // 计算统计数据
  const now = new Date()
  
  // 今日开始时间
  const today = new Date(now)
  today.setHours(0, 0, 0, 0)
  
  // 本周开始时间（周一）
  const thisWeek = new Date(now)
  thisWeek.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1))
  thisWeek.setHours(0, 0, 0, 0)
  
  // 本月开始时间
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  thisMonth.setHours(0, 0, 0, 0)
  
  // 统计初始化
  const statistics = {
    // 总体统计
    total: orders.length,
    totalAmount: 0,
    
    // 订单状态统计
    successCount: 0,
    successAmount: 0,
    refundCount: 0,
    refundAmount: 0,
    notPayCount: 0,
    notPayAmount: 0,
    closedCount: 0,
    closedAmount: 0,
    userPayingCount: 0,
    userPayingAmount: 0,
    
    // 时间维度统计
    today: {
      count: 0,
      amount: 0,
      successCount: 0,
      successAmount: 0,
      refundCount: 0,
      refundAmount: 0,
      notPayCount: 0,
      notPayAmount: 0
    },
    
    thisWeek: {
      count: 0,
      amount: 0,
      successCount: 0,
      successAmount: 0,
      refundCount: 0,
      refundAmount: 0,
      notPayCount: 0,
      notPayAmount: 0
    },
    
    thisMonth: {
      count: 0,
      amount: 0,
      successCount: 0,
      successAmount: 0,
      refundCount: 0,
      refundAmount: 0,
      notPayCount: 0,
      notPayAmount: 0
    }
  }
  
  // 处理每个订单的统计
  orders.forEach((order) => {
    const amount = order.amount || 0
    const orderDate = new Date(order.createdAt)
    
    // 总金额统计
    statistics.totalAmount += amount
    
    // 按订单状态统计
    switch (order.state) {
      case 'SUCCESS':
        statistics.successCount++
        statistics.successAmount += amount
        break
      case 'REFUND':
        statistics.refundCount++
        statistics.refundAmount += amount
        break
      case 'NOTPAY':
        statistics.notPayCount++
        statistics.notPayAmount += amount
        break
      case 'CLOSED':
        statistics.closedCount++
        statistics.closedAmount += amount
        break
      case 'USERPAYING':
        statistics.userPayingCount++
        statistics.userPayingAmount += amount
        break
    }
    
    // 按时间维度统计
    // 今日
    if (orderDate >= today) {
      statistics.today.count++
      statistics.today.amount += amount
      
      if (order.state === 'SUCCESS') {
        statistics.today.successCount++
        statistics.today.successAmount += amount
      } else if (order.state === 'REFUND') {
        statistics.today.refundCount++
        statistics.today.refundAmount += amount
      } else if (order.state === 'NOTPAY') {
        statistics.today.notPayCount++
        statistics.today.notPayAmount += amount
      }
    }
    
    // 本周
    if (orderDate >= thisWeek) {
      statistics.thisWeek.count++
      statistics.thisWeek.amount += amount
      
      if (order.state === 'SUCCESS') {
        statistics.thisWeek.successCount++
        statistics.thisWeek.successAmount += amount
      } else if (order.state === 'REFUND') {
        statistics.thisWeek.refundCount++
        statistics.thisWeek.refundAmount += amount
      } else if (order.state === 'NOTPAY') {
        statistics.thisWeek.notPayCount++
        statistics.thisWeek.notPayAmount += amount
      }
    }
    
    // 本月
    if (orderDate >= thisMonth) {
      statistics.thisMonth.count++
      statistics.thisMonth.amount += amount
      
      if (order.state === 'SUCCESS') {
        statistics.thisMonth.successCount++
        statistics.thisMonth.successAmount += amount
      } else if (order.state === 'REFUND') {
        statistics.thisMonth.refundCount++
        statistics.thisMonth.refundAmount += amount
      } else if (order.state === 'NOTPAY') {
        statistics.thisMonth.notPayCount++
        statistics.thisMonth.notPayAmount += amount
      }
    }
  })

  return <OrderAnalysisClient statistics={statistics} />
}

export default OrderAnalysisPage