import React, { useState, useEffect } from 'react';
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
  Space,
  DatePicker,
  TimePicker,
  Tag,
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, InfoCircleOutlined } from '@ant-design/icons';

// 模拟 API 调用
const mockApi = {
  // 获取预约列表
  getReservations: async (filters = {}) => {
    const allReservations = [
      {
        id: 1,
        userId: 1,
        userName: '张三',
        seatId: 1,
        seatNumber: 1,
        floor: '1 楼',
        studyRoom: '自习室 A',
        date: '2025-04-15',
        startTime: '09:00',
        endTime: '12:00',
        status: 'confirmed',
      },
      {
        id: 2,
        userId: 2,
        userName: '李四',
        seatId: 2,
        seatNumber: 2,
        floor: '1 楼',
        studyRoom: '自习室 A',
        date: '2025-04-16',
        startTime: '13:00',
        endTime: '16:00',
        status: 'pending',
      },
      {
        id: 3,
        userId: 3,
        userName: '王五',
        seatId: 3,
        seatNumber: 1,
        floor: '2 楼',
        studyRoom: '自习室 B',
        date: '2025-04-17',
        startTime: '14:00',
        endTime: '17:00',
        status: 'cancelled',
      },
    ];
    return allReservations.filter((reservation) => {
      return Object.entries(filters).every(([key, value]) => {
        if (key === 'date') {
          return reservation[key] === value;
        }
        return reservation[key].toString().includes(value.toString());
      });
    });
  },
  // 取消预约
  cancelReservation: async (id) => {
    return id;
  },
};

const { Option } = Select;
const { RangePicker } = DatePicker;

const AdminReservationManagementPage: React.FC = () => {
  const [reservations, setReservations] = useState([]);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [filters, setFilters] = useState({});
  const [searchText, setSearchText] = useState('');
  const [searchColumn, setSearchColumn] = useState('userName');

  // 加载预约列表
  useEffect(() => {
    const loadReservations = async () => {
      try {
        const searchFilter = searchText ? { [searchColumn]: searchText } : {};
        const data = await mockApi.getReservations({ ...filters, ...searchFilter });
        setReservations(data);
      } catch (error) {
        message.error('获取预约列表失败');
      }
    };
    loadReservations();
  }, [filters, searchText, searchColumn]);

  // 显示详情模态框
  const showDetailModal = (reservation) => {
    setSelectedReservation(reservation);
    setIsDetailModalVisible(true);
  };

  // 处理详情模态框取消
  const handleDetailModalCancel = () => {
    setIsDetailModalVisible(false);
  };

  // 处理取消预约
  const handleCancelReservation = async (id) => {
    try {
      await mockApi.cancelReservation(id);
      setReservations(reservations.map((reservation) =>
        reservation.id === id ? { ...reservation, status: 'cancelled' } : reservation
      ));
      message.success('预约取消成功');
    } catch (error) {
      message.error('取消预约失败');
    }
  };

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`搜索 ${dataIndex === 'userName' ? '用户名' : dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            搜索
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            重置
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => document.getElementById(`search-input-${dataIndex}`)?.focus());
      }
    },
    render: (text: string) =>
      searchColumn === dataIndex && searchText ? (
        <span>
          {text
            .toString()
            .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))
            .map((fragment, i) =>
              fragment.toLowerCase() === searchText.toLowerCase() ? (
                <span key={i} style={{ backgroundColor: '#ffeb3b', fontWeight: 'bold' }}>
                  {fragment}
                </span>
              ) : (
                fragment
              )
            )}
        </span>
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
      ...getColumnSearchProps('userName'),
    },
    {
      title: '座位号',
      dataIndex: 'seatNumber',
      key: 'seatNumber',
      ...getColumnSearchProps('seatNumber'),
    },
    {
      title: '楼层',
      dataIndex: 'floor',
      key: 'floor',
      ...getColumnSearchProps('floor'),
    },
    {
      title: '自习室',
      dataIndex: 'studyRoom',
      key: 'studyRoom',
      ...getColumnSearchProps('studyRoom'),
    },
    {
      title: '预约日期',
      dataIndex: 'date',
      key: 'date',
      filters: [...new Set(reservations.map((res) => res.date))].map((date) => ({ text: date, value: date })),
      onFilter: (value, record) => record.date === value,
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: '已确认', value: 'confirmed' },
        { text: '待确认', value: 'pending' },
        { text: '已取消', value: 'cancelled' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        let color = 'blue';
        if (status === 'pending') {
          color = 'gold';
        } else if (status === 'cancelled') {
          color = 'volcano';
        }
        return <Tag color={color}>{status === 'confirmed' ? '已确认' : status === 'pending' ? '待确认' : '已取消'}</Tag>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button icon={<InfoCircleOutlined />} onClick={() => showDetailModal(record)}>
            详情
          </Button>
          {record.status !== 'cancelled' && (
            <Button icon={<DeleteOutlined />} onClick={() => handleCancelReservation(record.id)} danger>
              取消预约
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div className="p-8">
      <Space className="mb-4">
        <Select
          defaultValue="userName"
          style={{ width: 120 }}
          onChange={(value) => setSearchColumn(value)}
        >
          <Option value="userName">用户名</Option>
          <Option value="seatNumber">座位号</Option>
          <Option value="floor">楼层</Option>
          <Option value="studyRoom">自习室</Option>
        </Select>
        <Input
          placeholder={`搜索 ${searchColumn === 'userName' ? '用户名' : searchColumn}`}
          prefix={<SearchOutlined />}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </Space>
      <Table
        columns={columns}
        dataSource={reservations}
        rowKey="id"
        onChange={(pagination, newFilters) => {
          setFilters(newFilters);
        }}
      />
      <Modal
        title="预约详情"
        visible={isDetailModalVisible}
        onCancel={handleDetailModalCancel}
        footer={null}
      >
        {selectedReservation && (
          <Form layout="vertical">
            <Form.Item label="用户名">{selectedReservation.userName}</Form.Item>
            <Form.Item label="座位号">{selectedReservation.seatNumber}</Form.Item>
            <Form.Item label="楼层">{selectedReservation.floor}</Form.Item>
            <Form.Item label="自习室">{selectedReservation.studyRoom}</Form.Item>
            <Form.Item label="预约日期">{selectedReservation.date}</Form.Item>
            <Form.Item label="开始时间">{selectedReservation.startTime}</Form.Item>
            <Form.Item label="结束时间">{selectedReservation.endTime}</Form.Item>
            <Form.Item label="状态">
              <Tag
                color={
                  selectedReservation.status === 'confirmed' ? 'blue' :
                    selectedReservation.status === 'pending' ? 'gold' : 'volcano'
                }
              >
                {selectedReservation.status === 'confirmed' ? '已确认' :
                  selectedReservation.status === 'pending' ? '待确认' : '已取消'}
              </Tag>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default AdminReservationManagementPage;