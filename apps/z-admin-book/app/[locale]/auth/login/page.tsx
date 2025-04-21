"use client"
import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useMsg } from '#/hooks/MessageProvider';
import { useRouter } from '#/i18n/navigation';

const AuthLoginPage = () => {
  const { messageApi } = useMsg()
  const router = useRouter()
  
  
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    messageApi.success('登录成功');
    router.push("/admin")
    // 这里可以添加实际的登录逻辑，比如调用 API
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">自习室管理系统</h1>
        <Form
          name="login"
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AuthLoginPage;