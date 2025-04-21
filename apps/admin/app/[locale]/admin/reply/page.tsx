import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';

// 模拟 API 调用
const mockApi = {
  // 获取用户评论列表
  getComments: async () => {
    return [
      {
        id: 1,
        user: '张三',
        content: '自习室环境不错，就是有点吵。',
        reply: null,
      },
      {
        id: 2,
        user: '李四',
        content: '希望能增加一些充电插座。',
        reply: '已记录，后续会考虑增加。',
      },
    ];
  },
  // 提交管理员回复
  submitReply: async (id, replyContent) => {
    return { id, reply: replyContent };
  },
};

const AdminReplyManagementPage: React.FC = () => {
  const [comments, setComments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<number | null>(null);

  // 加载用户评论列表
  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await mockApi.getComments();
        setComments(data);
      } catch (error) {
        message.error('获取用户评论列表失败');
      }
    };
    loadComments();
  }, []);

  // 显示回复模态框
  const showModal = (id: number) => {
    const comment = comments.find((c) => c.id === id);
    if (comment) {
      form.setFieldsValue({ reply: comment.reply || '' });
      setEditingId(id);
    }
    setIsModalVisible(true);
  };

  // 处理表单提交
  const handleOk = async () => {
    try {
      await form.validateFields();
      const { reply } = form.getFieldsValue();
      if (editingId) {
        await mockApi.submitReply(editingId, reply);
        setComments(
          comments.map((comment) =>
            comment.id === editingId ? { ...comment, reply } : comment
          )
        );
        message.success('回复提交成功');
      }
      setIsModalVisible(false);
    } catch (error) {
      message.error('回复提交失败');
    }
  };

  // 处理模态框取消
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: '用户',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: '评论内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '管理员回复',
      dataIndex: 'reply',
      key: 'reply',
      render: (reply) => reply || '暂无回复',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Button icon={<EditOutlined />} onClick={() => showModal(record.id)}>
          回复
        </Button>
      ),
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">用户评论回复管理</h2>
      <Table columns={columns} dataSource={comments} rowKey="id" />
      <Modal
        title="管理员回复"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="reply"
            label="回复内容"
            rules={[{ required: true, message: '请输入回复内容' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminReplyManagementPage;