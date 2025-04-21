"use client"
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

// 模拟 API 调用
const mockApi = {
  // 获取用户列表
  getUsers: async () => {
    return [
      {
        id: 1,
        name: '张三',
        account: 'zhangsan',
        role: 'user',
      },
      {
        id: 2,
        name: '李四',
        account: 'lisi',
        role: 'admin',
      },
    ];
  },
  // 添加用户
  addUser: async (user) => {
    // 模拟成功
    return user;
  },
  // 编辑用户
  editUser: async (user) => {
    // 模拟成功
    return user;
  },
  // 删除用户
  deleteUser: async (id) => {
    // 模拟成功
    return id;
  },
};

const AdminUsersPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<number | null>(null);

  // 加载用户列表
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await mockApi.getUsers();
        setUsers(data);
      } catch (error) {
        message.error('获取用户列表失败');
      }
    };
    loadUsers();
  }, []);

  // 显示模态框
  const showModal = (id?: number) => {
    if (id) {
      const user = users.find((u) => u.id === id);
      if (user) {
        form.setFieldsValue(user);
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
        const updatedUser = { ...values, id: editingId };
        await mockApi.editUser(updatedUser);
        setUsers(users.map((user) => (user.id === editingId ? updatedUser : user)));
        message.success('用户信息更新成功');
      } else {
        const newUser = { ...values, id: Date.now() };
        await mockApi.addUser(newUser);
        setUsers([...users, newUser]);
        message.success('用户添加成功');
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

  // 处理删除用户
  const handleDelete = async (id: number) => {
    try {
      await mockApi.deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      message.success('用户删除成功');
    } catch (error) {
      message.error('删除用户失败');
    }
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
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
        添加用户
      </Button>
      <Table columns={columns} dataSource={users} rowKey="id" />
      <Modal
        title={editingId ? '编辑用户' : '添加用户'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="account"
            label="账号"
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="角色"
            rules={[{ required: true, message: '请输入角色' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminUsersPage;