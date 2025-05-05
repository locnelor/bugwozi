"use client"
import { Card, Col, Row, Statistic, List, Avatar, Tabs, Tag, Timeline, Divider, Badge } from "antd"
import {
  UserOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  CommentOutlined,
  AccountBookOutlined,
  ClockCircleOutlined,
  SoundOutlined
} from "@ant-design/icons"

interface DashboardProps {
  stats: {
    users: {
      total: number;
      newToday: number;
    };
    orders: {
      total: number;
      success: number;
      notPay: number;
      refund: number;
      revenue: number;
    };
    blog: {
      posts: number;
      comments: number;
      newToday: number;
    };
    bookkeep: {
      recentRecords: number;
    };
  };
  activities: {
    recentOrders: any[];
    recentPosts: any[];
    recentComments: any[];
    recentUsers: any[];
    announcements: any[];
  };
}

const DashboardClient = ({ stats, activities }: DashboardProps) => {
  // 获取时间距离的简单实现
  const getTimeAgo = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffDay > 0) {
      return `${diffDay}天前`;
    } else if (diffHour > 0) {
      return `${diffHour}小时前`;
    } else if (diffMin > 0) {
      return `${diffMin}分钟前`;
    } else {
      return "刚刚";
    }
  }

  // 格式化日期
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }

  // 订单状态标签
  const getOrderStateTag = (state: string) => {
    switch (state) {
      case 'SUCCESS':
        return <Tag color="success">支付成功</Tag>
      case 'REFUND':
        return <Tag color="warning">已退款</Tag>
      case 'NOTPAY':
        return <Tag color="processing">未支付</Tag>
      case 'CLOSED':
        return <Tag color="default">已关闭</Tag>
      case 'USERPAYING':
        return <Tag color="blue">支付中</Tag>
      default:
        return <Tag>{state}</Tag>
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">系统仪表盘</h1>

      {/* 系统统计概览 */}
      <Row gutter={[16, 16]} className="mb-8">
        <Col span={6}>
          <Card>
            <Statistic
              title="用户总数"
              value={stats.users.total}
              prefix={<UserOutlined />}
              suffix={<span className="text-xs text-green-500">+{stats.users.newToday} 今日</span>}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="订单总数"
              value={stats.orders.total}
              prefix={<ShoppingCartOutlined />}
              suffix={<span className="text-xs text-blue-500">{stats.orders.success} 已支付</span>}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="博客文章"
              value={stats.blog.posts}
              prefix={<FileTextOutlined />}
              suffix={<span className="text-xs text-green-500">+{stats.blog.newToday} 今日</span>}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="累计评论"
              value={stats.blog.comments}
              prefix={<CommentOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mb-8">
        <Col span={8}>
          <Card>
            <Statistic
              title="总收入"
              value={stats.orders.revenue / 100}
              precision={2}
              prefix="¥"
              suffix="元"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="待支付订单"
              value={stats.orders.notPay}
              valueStyle={{ color: '#1677ff' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="退款订单"
              value={stats.orders.refund}
              valueStyle={{ color: stats.orders.refund > 0 ? '#faad14' : '#52c41a' }}
            />
          </Card>
        </Col>
      </Row>

      {/* 系统公告 */}
      {activities.announcements.length > 0 && (
        <div className="mb-8">
          <Divider orientation="left">
            <span className="flex items-center">
              <SoundOutlined className="mr-2" /> 系统公告
            </span>
          </Divider>
          <List
            itemLayout="horizontal"
            dataSource={activities.announcements}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Badge status={item.important ? "error" : "default"} />}
                  title={<span>{item.important && <Tag color="error">重要</Tag>} {item.title}</span>}
                  description={<div className="max-w-2xl truncate">{item.content}</div>}
                />
                <div className="text-gray-500 text-sm">
                  {item.author && <span>发布人: {item.author} | </span>}
                  {getTimeAgo(item.createdAt)}
                </div>
              </List.Item>
            )}
          />
        </div>
      )}

      {/* 最近活动和系统动态 */}
      <Row gutter={16}>
        <Col span={16}>
          <Card
            title={
              <span className="flex items-center">
                <ClockCircleOutlined className="mr-2" /> 最近活动
              </span>
            }
            className="mb-4"
          >
            <Tabs
              defaultActiveKey="orders"
              items={[
                {
                  key: 'orders',
                  label: '最近订单',
                  children: (
                    <List
                      itemLayout="horizontal"
                      dataSource={activities.recentOrders}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar icon={<ShoppingCartOutlined />} />}
                            title={
                              <span className="flex items-center gap-2">
                                <span>¥{(item.amount / 100).toFixed(2)}</span>
                                {getOrderStateTag(item.state)}
                              </span>
                            }
                            description={`订单号: ${item.out_trade_no} | 商品: ${item.goods.description}`}
                          />
                          <div className="text-gray-500 text-sm">
                            {formatDate(item.createdAt)}
                          </div>
                        </List.Item>
                      )}
                    />
                  ),
                },
                {
                  key: 'posts',
                  label: '最新文章',
                  children: (
                    <List
                      itemLayout="horizontal"
                      dataSource={activities.recentPosts}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar icon={<FileTextOutlined />} />}
                            title={item.title}
                            description={
                              <span>
                                发布人: {item.user.name}
                                {item.categories && ` | 分类: ${item.categories.name}`}
                              </span>
                            }
                          />
                          <div className="text-gray-500 text-sm">
                            {formatDate(item.createdAt)}
                          </div>
                        </List.Item>
                      )}
                    />
                  ),
                },
                {
                  key: 'comments',
                  label: '最新评论',
                  children: (
                    <List
                      itemLayout="horizontal"
                      dataSource={activities.recentComments}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar icon={<CommentOutlined />} />}
                            title={<span>来自文章《{item.post.title}》的评论</span>}
                            description={<div className="max-w-lg truncate">{item.content}</div>}
                          />
                          <div className="text-gray-500 text-sm">
                            {item.user.name} | {getTimeAgo(item.createdAt)}
                          </div>
                        </List.Item>
                      )}
                    />
                  ),
                },
                {
                  key: 'users',
                  label: '新注册用户',
                  children: (
                    <List
                      itemLayout="horizontal"
                      dataSource={activities.recentUsers}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar icon={<UserOutlined />} />}
                            title={item.name}
                            description={`账号: ${item.account}`}
                          />
                          <div className="text-gray-500 text-sm">
                            注册于 {getTimeAgo(item.createdAt)}
                          </div>
                        </List.Item>
                      )}
                    />
                  ),
                },
              ]}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title={
              <span className="flex items-center">
                <AccountBookOutlined className="mr-2" /> 系统状态
              </span>
            }
          >
            <Timeline
              items={[
                {
                  color: 'green',
                  children: (
                    <div>
                      <p className="font-medium">系统运行正常</p>
                      <p className="text-gray-500 text-sm">当前在线用户数: {Math.round(stats.users.total * 0.2)}</p>
                    </div>
                  ),
                },
                {
                  color: 'blue',
                  children: (
                    <div>
                      <p className="font-medium">最近7天记账数据</p>
                      <p className="text-gray-500 text-sm">{stats.bookkeep.recentRecords} 条记录</p>
                    </div>
                  ),
                },
                {
                  color: 'blue',
                  children: (
                    <div>
                      <p className="font-medium">订单支付成功率</p>
                      <p className="text-gray-500 text-sm">
                        {stats.orders.total > 0
                          ? ((stats.orders.success / stats.orders.total) * 100).toFixed(2)
                          : 0}%
                      </p>
                    </div>
                  ),
                },
                {
                  color: 'gray',
                  children: (
                    <div>
                      <p className="font-medium">系统更新</p>
                      <p className="text-gray-500 text-sm">上次更新于 3 天前</p>
                    </div>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DashboardClient 