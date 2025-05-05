"use client"
import { Card, Col, Row, Statistic, Tabs } from "antd"
import type { TabsProps } from "antd"

// 时间段统计子类型
interface TimeframeStats {
  count: number;
  amount: number;
  successCount: number;
  successAmount: number;
  refundCount: number;
  refundAmount: number;
  notPayCount: number;
  notPayAmount: number;
}

// 更新的统计数据接口
interface OrderStatistics {
  // 总体统计
  total: number;
  totalAmount: number;
  
  // 订单状态统计
  successCount: number;
  successAmount: number;
  refundCount: number;
  refundAmount: number;
  notPayCount: number;
  notPayAmount: number;
  closedCount: number;
  closedAmount: number;
  userPayingCount: number;
  userPayingAmount: number;
  
  // 时间维度统计
  today: TimeframeStats;
  thisWeek: TimeframeStats;
  thisMonth: TimeframeStats;
}

interface OrderAnalysisClientProps {
  statistics: OrderStatistics;
}

const OrderAnalysisClient = ({ statistics }: OrderAnalysisClientProps) => {
  // 计算当前待支付订单（等效于原来的pendingCount和pendingAmount）
  const pendingCount = statistics.notPayCount + statistics.userPayingCount;
  const pendingAmount = statistics.notPayAmount + statistics.userPayingAmount;

  // 定义时间维度标签页内容
  const timeframeTabs: TabsProps['items'] = [
    {
      key: 'today',
      label: '今日',
      children: (
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card>
              <Statistic 
                title="订单数" 
                value={statistics.today.count} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="交易金额" 
                value={statistics.today.amount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="已支付订单" 
                value={statistics.today.successCount} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="已支付金额" 
                value={statistics.today.successAmount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="退款订单" 
                value={statistics.today.refundCount} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="退款金额" 
                value={statistics.today.refundAmount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="未支付订单" 
                value={statistics.today.notPayCount} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="未支付金额" 
                value={statistics.today.notPayAmount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
        </Row>
      ),
    },
    {
      key: 'thisWeek',
      label: '本周',
      children: (
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card>
              <Statistic 
                title="订单数" 
                value={statistics.thisWeek.count} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="交易金额" 
                value={statistics.thisWeek.amount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="已支付订单" 
                value={statistics.thisWeek.successCount} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="已支付金额" 
                value={statistics.thisWeek.successAmount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="退款订单" 
                value={statistics.thisWeek.refundCount} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="退款金额" 
                value={statistics.thisWeek.refundAmount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="未支付订单" 
                value={statistics.thisWeek.notPayCount} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="未支付金额" 
                value={statistics.thisWeek.notPayAmount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
        </Row>
      ),
    },
    {
      key: 'thisMonth',
      label: '本月',
      children: (
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card>
              <Statistic 
                title="订单数" 
                value={statistics.thisMonth.count} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="交易金额" 
                value={statistics.thisMonth.amount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="已支付订单" 
                value={statistics.thisMonth.successCount} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="已支付金额" 
                value={statistics.thisMonth.successAmount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="退款订单" 
                value={statistics.thisMonth.refundCount} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="退款金额" 
                value={statistics.thisMonth.refundAmount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="未支付订单" 
                value={statistics.thisMonth.notPayCount} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="未支付金额" 
                value={statistics.thisMonth.notPayAmount / 100} 
                precision={2} 
                suffix="元" 
              />
            </Card>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">订单分析</h1>

      {/* 总体统计 */}
      <Row gutter={[16, 16]} className="mb-8">
        <Col span={6}>
          <Card>
            <Statistic
              title="订单总数"
              value={statistics.total}
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
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="支付成功率"
              value={statistics.total > 0 ? (statistics.successCount / statistics.total) * 100 : 0}
              precision={2}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="退款率"
              value={statistics.total > 0 ? (statistics.refundCount / statistics.total) * 100 : 0}
              precision={2}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      {/* 订单状态统计 */}
      <h2 className="text-xl font-bold mb-4">订单状态分析</h2>
      <Row gutter={[16, 16]} className="mb-8">
        <Col span={8}>
          <Card>
            <Statistic
              title="已支付订单数"
              value={statistics.successCount}
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
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="退款订单数"
              value={statistics.refundCount}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="退款金额"
              value={statistics.refundAmount / 100}
              precision={2}
              suffix="元"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="待支付订单数"
              value={pendingCount}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="待支付金额"
              value={pendingAmount / 100}
              precision={2}
              suffix="元"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="已关闭订单数"
              value={statistics.closedCount}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="已关闭金额"
              value={statistics.closedAmount / 100}
              precision={2}
              suffix="元"
            />
          </Card>
        </Col>
      </Row>

      {/* 时间维度统计 */}
      <h2 className="text-xl font-bold mb-4">时间维度分析</h2>
      <Tabs defaultActiveKey="today" items={timeframeTabs} />
    </div>
  )
}

export default OrderAnalysisClient 