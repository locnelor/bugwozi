"use client"
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Statistic, Table, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

// 模拟从 API 获取数据
const fetchDashboardData = async () => {
  // 这里可以替换为实际的 API 调用
  return {
    totalReservations: 150,
    availableRooms: 20,
    newReservations: 20,
    cancelledReservations: 5,
    recentReservations: [
      {
        key: '1',
        user: '张三',
        room: '自习室 A',
        date: '2025-04-15',
        time: '09:00 - 12:00',
        status: 'confirmed',
      },
      {
        key: '2',
        user: '李四',
        room: '自习室 B',
        date: '2025-04-16',
        time: '13:00 - 16:00',
        status: 'pending',
      },
      {
        key: '3',
        user: '王五',
        room: '自习室 C',
        date: '2025-04-17',
        time: '14:00 - 17:00',
        status: 'cancelled',
      },
    ],
  };
};

const AdminPage: React.FC = () => {
  const [dashboardData, setDashboardData] = useState({
    totalReservations: 0,
    availableRooms: 0,
    newReservations: 0,
    cancelledReservations: 0,
    recentReservations: [],
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchDashboardData();
      setDashboardData(data);
    };
    loadData();
  }, []);

  const columns = [
    {
      title: '用户',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: '自习室',
      dataIndex: 'room',
      key: 'room',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        let color = 'green';
        if (status === 'pending') {
          color = 'gold';
        } else if (status === 'cancelled') {
          color = 'volcano';
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];

  return (
    <div className="p-8">
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="总预约数"
              value={dashboardData.totalReservations}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="可用自习室"
              value={dashboardData.availableRooms}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="新增预约"
              value={dashboardData.newReservations}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="取消预约"
              value={dashboardData.cancelledReservations}
              prefix={<ArrowDownOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <div className="mt-8">
        <Card title="近期预约">
          <Table columns={columns} dataSource={dashboardData.recentReservations} />
        </Card>
      </div>

      <div className="mt-8">
        <Card title="公告">
          <p>欢迎使用自习室预约系统后台管理系统。</p>
          <p>请及时处理待确认的预约。</p>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;