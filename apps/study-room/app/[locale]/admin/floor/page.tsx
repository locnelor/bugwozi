import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

// 模拟 API 调用
const mockApi = {
  // 获取楼层列表
  getFloors: async () => {
    return [
      {
        id: 1,
        name: '1 楼',
        description: '配备基础自习设施',
      },
      {
        id: 2,
        name: '2 楼',
        description: '安静区域，适合深度学习',
      },
    ];
  },
  // 添加楼层
  addFloor: async (floor) => {
    return floor;
  },
  // 编辑楼层
  editFloor: async (floor) => {
    return floor;
  },
  // 删除楼层
  deleteFloor: async (id) => {
    return id;
  },
};

const AdminFloorManagementPage: React.FC = () => {
  const [floors, setFloors] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<number | null>(null);

  // 加载楼层列表
  useEffect(() => {
    const loadFloors = async () => {
      try {
        const data = await mockApi.getFloors();
        setFloors(data);
      } catch (error) {
        message.error('获取楼层列表失败');
      }
    };
    loadFloors();
  }, []);

  // 显示模态框
  const showModal = (id?: number) => {
    if (id) {
      const floor = floors.find((f) => f.id === id);
      if (floor) {
        form.setFieldsValue(floor);
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
        const updatedFloor = { ...values, id: editingId };
        await mockApi.editFloor(updatedFloor);
        setFloors(floors.map((floor) => (floor.id === editingId ? updatedFloor : floor)));
        message.success('楼层信息更新成功');
      } else {
        const newFloor = { ...values, id: Date.now() };
        await mockApi.addFloor(newFloor);
        setFloors([...floors, newFloor]);
        message.success('楼层添加成功');
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

  // 处理删除楼层
  const handleDelete = async (id: number) => {
    try {
      await mockApi.deleteFloor(id);
      setFloors(floors.filter((floor) => floor.id !== id));
      message.success('楼层删除成功');
    } catch (error) {
      message.error('删除楼层失败');
    }
  };

  const columns = [
    {
      title: '楼层名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
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
        添加楼层
      </Button>
      <Table columns={columns} dataSource={floors} rowKey="id" />
      <Modal
        title={editingId ? '编辑楼层' : '添加楼层'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="楼层名称"
            rules={[{ required: true, message: '请输入楼层名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="描述"
            rules={[{ required: true, message: '请输入楼层描述' }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminFloorManagementPage;