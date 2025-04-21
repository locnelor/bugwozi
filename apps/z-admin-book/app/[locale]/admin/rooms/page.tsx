import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

// 模拟 API 调用
const mockApi = {
  // 获取自习室列表
  getStudyRooms: async () => {
    return [
      {
        id: 1,
        name: '自习室 A',
        capacity: 50,
        location: '1 楼 101 室',
      },
      {
        id: 2,
        name: '自习室 B',
        capacity: 30,
        location: '2 楼 202 室',
      },
    ];
  },
  // 添加自习室
  addStudyRoom: async (room) => {
    return room;
  },
  // 编辑自习室
  editStudyRoom: async (room) => {
    return room;
  },
  // 删除自习室
  deleteStudyRoom: async (id) => {
    return id;
  },
};

const AdminStudyRoomManagementPage: React.FC = () => {
  const [studyRooms, setStudyRooms] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<number | null>(null);

  // 加载自习室列表
  useEffect(() => {
    const loadStudyRooms = async () => {
      try {
        const data = await mockApi.getStudyRooms();
        setStudyRooms(data);
      } catch (error) {
        message.error('获取自习室列表失败');
      }
    };
    loadStudyRooms();
  }, []);

  // 显示模态框
  const showModal = (id?: number) => {
    if (id) {
      const room = studyRooms.find((r) => r.id === id);
      if (room) {
        form.setFieldsValue(room);
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
        const updatedRoom = { ...values, id: editingId };
        await mockApi.editStudyRoom(updatedRoom);
        setStudyRooms(studyRooms.map((room) => (room.id === editingId ? updatedRoom : room)));
        message.success('自习室信息更新成功');
      } else {
        const newRoom = { ...values, id: Date.now() };
        await mockApi.addStudyRoom(newRoom);
        setStudyRooms([...studyRooms, newRoom]);
        message.success('自习室添加成功');
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

  // 处理删除自习室
  const handleDelete = async (id: number) => {
    try {
      await mockApi.deleteStudyRoom(id);
      setStudyRooms(studyRooms.filter((room) => room.id !== id));
      message.success('自习室删除成功');
    } catch (error) {
      message.error('删除自习室失败');
    }
  };

  const columns = [
    {
      title: '自习室名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '容量',
      dataIndex: 'capacity',
      key: 'capacity',
    },
    {
      title: '位置',
      dataIndex: 'location',
      key: 'location',
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
      <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()} className="mb-4">
        添加自习室
      </Button>
      <Table columns={columns} dataSource={studyRooms} rowKey="id" />
      <Modal
        title={editingId ? '编辑自习室' : '添加自习室'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="自习室名称"
            rules={[{ required: true, message: '请输入自习室名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="capacity"
            label="容量"
            rules={[{ required: true, message: '请输入自习室容量' }, { type: 'number', min: 1 }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="location"
            label="位置"
            rules={[{ required: true, message: '请输入自习室位置' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminStudyRoomManagementPage;