import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

// 模拟 API 调用
const mockApi = {
  // 获取公告列表
  getAnnouncements: async () => {
    return [
      {
        id: 1,
        title: '系统维护通知',
        content: '本系统将于今晚 23:00 - 01:00 进行维护，请提前做好准备。',
      },
      {
        id: 2,
        title: '新功能上线',
        content: '自习室预约新增时间段筛选功能，欢迎体验。',
      },
    ];
  },
  // 添加公告
  addAnnouncement: async (announcement) => {
    return announcement;
  },
  // 编辑公告
  editAnnouncement: async (announcement) => {
    return announcement;
  },
  // 删除公告
  deleteAnnouncement: async (id) => {
    return id;
  },
};

const AdminAnnouncementPage: React.FC = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<number | null>(null);

  // 加载公告列表
  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const data = await mockApi.getAnnouncements();
        setAnnouncements(data);
      } catch (error) {
        message.error('获取公告列表失败');
      }
    };
    loadAnnouncements();
  }, []);

  // 显示模态框
  const showModal = (id?: number) => {
    if (id) {
      const announcement = announcements.find((a) => a.id === id);
      if (announcement) {
        form.setFieldsValue(announcement);
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
        const updatedAnnouncement = { ...values, id: editingId };
        await mockApi.editAnnouncement(updatedAnnouncement);
        setAnnouncements(announcements.map((a) => (a.id === editingId ? updatedAnnouncement : a)));
        message.success('公告更新成功');
      } else {
        const newAnnouncement = { ...values, id: Date.now() };
        await mockApi.addAnnouncement(newAnnouncement);
        setAnnouncements([...announcements, newAnnouncement]);
        message.success('公告添加成功');
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

  // 处理删除公告
  const handleDelete = async (id: number) => {
    try {
      await mockApi.deleteAnnouncement(id);
      setAnnouncements(announcements.filter((a) => a.id !== id));
      message.success('公告删除成功');
    } catch (error) {
      message.error('删除公告失败');
    }
  };

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
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
        添加公告
      </Button>
      <Table columns={columns} dataSource={announcements} rowKey="id" />
      <Modal
        title={editingId ? '编辑公告' : '添加公告'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入公告标题' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="内容"
            rules={[{ required: true, message: '请输入公告内容' }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminAnnouncementPage;