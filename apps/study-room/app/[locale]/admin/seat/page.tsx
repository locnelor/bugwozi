import React, { useState, useEffect } from 'react';
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
  InputNumber,
  Space,
  Tooltip,
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';

// 模拟 API 调用
const mockApi = {
  // 获取座位列表
  getSeats: async (filters = {}) => {
    const allSeats = [
      {
        id: 1,
        seatNumber: 1,
        floor: '1 楼',
        studyRoom: '自习室 A',
        status: 'available',
        description: '靠窗位置，采光好',
      },
      {
        id: 2,
        seatNumber: 2,
        floor: '1 楼',
        studyRoom: '自习室 A',
        status: 'reserved',
        description: '靠过道，出入方便',
      },
      {
        id: 3,
        seatNumber: 1,
        floor: '2 楼',
        studyRoom: '自习室 B',
        status: 'available',
        description: '角落位置，比较安静',
      },
    ];
    return allSeats.filter((seat) => {
      return Object.entries(filters).every(([key, value]) => {
        if (key === 'seatNumber') {
          return seat[key] === Number(value);
        }
        return seat[key].includes(value);
      });
    });
  },
  // 添加座位
  addSeat: async (seat) => {
    return seat;
  },
  // 编辑座位
  editSeat: async (seat) => {
    return seat;
  },
  // 删除座位
  deleteSeat: async (id) => {
    return id;
  },
};

const { Option } = Select;

const AdminSeatManagementPage: React.FC = () => {
  const [seats, setSeats] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [filters, setFilters] = useState({});
  const [searchText, setSearchText] = useState('');
  const [searchColumn, setSearchColumn] = useState('seatNumber');

  // 加载座位列表
  useEffect(() => {
    const loadSeats = async () => {
      try {
        const searchFilter = searchText ? { [searchColumn]: searchText } : {};
        const data = await mockApi.getSeats({ ...filters, ...searchFilter });
        setSeats(data);
      } catch (error) {
        message.error('获取座位列表失败');
      }
    };
    loadSeats();
  }, [filters, searchText, searchColumn]);

  // 显示模态框
  const showModal = (id?: number) => {
    if (id) {
      const seat = seats.find((s) => s.id === id);
      if (seat) {
        form.setFieldsValue(seat);
        setEditingId(id);
      }
    } else {
      form.resetFields();
      setEditingId(null);
    }
    setIsModalVisible(true);
  };

  // 处理表单提交
  const handleOk = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      if (editingId) {
        const updatedSeat = { ...values, id: editingId };
        await mockApi.editSeat(updatedSeat);
        setSeats(seats.map((seat) => (seat.id === editingId ? updatedSeat : seat)));
        message.success('座位信息更新成功');
      } else {
        const newSeat = { ...values, id: Date.now() };
        await mockApi.addSeat(newSeat);
        setSeats([...seats, newSeat]);
        message.success('座位添加成功');
      }
      setIsModalVisible(false);
    } catch (error) {
      message.error('操作失败');
    }
  };

  // 处理模态框取消
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 处理删除座位
  const handleDelete = async (id: number) => {
    try {
      await mockApi.deleteSeat(id);
      setSeats(seats.filter((seat) => seat.id !== id));
      message.success('座位删除成功');
    } catch (error) {
      message.error('删除座位失败');
    }
  };

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`搜索 ${dataIndex}`}
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
              ),
            )}
        </span>
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: '座位号',
      dataIndex: 'seatNumber',
      key: 'seatNumber',
      ...getColumnSearchProps('seatNumber'),
      filters: seats.map((seat) => ({ text: seat.seatNumber.toString(), value: seat.seatNumber })),
      onFilter: (value, record) => record.seatNumber === value,
    },
    {
      title: '楼层',
      dataIndex: 'floor',
      key: 'floor',
      ...getColumnSearchProps('floor'),
      filters: [...new Set(seats.map((seat) => seat.floor))].map((floor) => ({ text: floor, value: floor })),
      onFilter: (value, record) => record.floor.includes(value),
    },
    {
      title: '自习室',
      dataIndex: 'studyRoom',
      key: 'studyRoom',
      ...getColumnSearchProps('studyRoom'),
      filters: [...new Set(seats.map((seat) => seat.studyRoom))].map((room) => ({ text: room, value: room })),
      onFilter: (value, record) => record.studyRoom.includes(value),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: '可用', value: 'available' },
        { text: '已预约', value: 'reserved' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        const color = status === 'available' ? 'green' : 'volcano';
        return (
          <Tag color={color}>
            {status === 'available' ? '可用' : '已预约'}
          </Tag>
        );
      },
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      render: (text) => (
        <Tooltip title={text}>
          <span>{text}</span>
        </Tooltip>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => showModal(record.id)}>
            编辑
          </Button>
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} danger>
            删除
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="p-8">
      <Space className="mb-4">
        <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>
          添加座位
        </Button>
        <Select
          defaultValue="seatNumber"
          style={{ width: 120 }}
          onChange={(value) => setSearchColumn(value)}
        >
          <Option value="seatNumber">座位号</Option>
          <Option value="floor">楼层</Option>
          <Option value="studyRoom">自习室</Option>
        </Select>
        <Input
          placeholder={`搜索 ${searchColumn === 'seatNumber' ? '座位号' : searchColumn}`}
          prefix={<SearchOutlined />}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </Space>
      <Table
        columns={columns}
        dataSource={seats}
        rowKey="id"
        onChange={(pagination, newFilters) => {
          setFilters(newFilters);
        }}
      />
      <Modal
        title={editingId ? '编辑座位' : '添加座位'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="seatNumber"
            label="座位号"
            rules={[{ required: true, message: '请输入座位号' }, { type: 'number', min: 1 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="floor"
            label="楼层"
            rules={[{ required: true, message: '请选择楼层' }]}
          >
            <Select>
              {[...new Set(seats.map((seat) => seat.floor))].map((floor) => (
                <Option key={floor} value={floor}>
                  {floor}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="studyRoom"
            label="自习室"
            rules={[{ required: true, message: '请选择自习室' }]}
          >
            <Select>
              {[...new Set(seats.map((seat) => seat.studyRoom))].map((room) => (
                <Option key={room} value={room}>
                  {room}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="状态"
            rules={[{ required: true, message: '请选择座位状态' }]}
          >
            <Select>
              <Option value="available">可用</Option>
              <Option value="reserved">已预约</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="description"
            label="描述"
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminSeatManagementPage;