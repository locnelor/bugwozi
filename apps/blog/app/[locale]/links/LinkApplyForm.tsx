"use client";

import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { LinkOutlined, GlobalOutlined, UserOutlined, MailOutlined, PictureOutlined, MessageOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd/es/form';

const { Option } = Select;
const { TextArea } = Input;

export default function LinkApplyForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  
  // 处理表单提交
  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch('/api/links/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      const result = await response.json();
      
      if (result.success) {
        message.success(result.message);
        form.resetFields();
      } else {
        message.error(result.message || '提交失败，请稍后再试');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('网络错误，请稍后再试');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      requiredMark="optional"
    >
      {/* 网站名称 */}
      <Form.Item
        name="siteName"
        label="网站名称"
        rules={[{ required: true, message: '请输入您的网站名称' }]}
      >
        <Input prefix={<GlobalOutlined />} placeholder="例如：BugWoZi 博客" />
      </Form.Item>
      
      {/* 网站地址 */}
      <Form.Item
        name="siteUrl"
        label="网站地址"
        rules={[
          { required: true, message: '请输入您的网站地址' },
          { type: 'url', message: '请输入有效的网址' }
        ]}
      >
        <Input prefix={<LinkOutlined />} placeholder="例如：https://bugwozi.com" />
      </Form.Item>
      
      {/* 网站分类 */}
      <Form.Item
        name="siteCategory"
        label="网站分类"
        initialValue="blog"
      >
        <Select>
          <Option value="tech">技术</Option>
          <Option value="design">设计</Option>
          <Option value="tools">工具</Option>
          <Option value="resources">资源</Option>
          <Option value="community">社区</Option>
          <Option value="blog">博客</Option>
          <Option value="partner">合作伙伴</Option>
        </Select>
      </Form.Item>
      
      {/* 网站描述 */}
      <Form.Item
        name="siteDescription"
        label="网站描述"
        rules={[
          { required: true, message: '请输入网站描述' },
          { max: 100, message: '描述不能超过100个字符' }
        ]}
      >
        <TextArea
          placeholder="简要描述您的网站内容和特色"
          rows={3}
        />
      </Form.Item>
      
      {/* 网站Logo */}
      <Form.Item
        name="siteLogo"
        label="网站Logo"
        extra="请提供Logo的URL地址，建议使用正方形或长方形图片"
      >
        <Input prefix={<PictureOutlined />} placeholder="https://example.com/logo.png" />
      </Form.Item>
      
      {/* 站长名称 */}
      <Form.Item
        name="ownerName"
        label="站长姓名"
      >
        <Input prefix={<UserOutlined />} placeholder="您的姓名（选填）" />
      </Form.Item>
      
      {/* 联系邮箱 */}
      <Form.Item
        name="contactEmail"
        label="联系邮箱"
        rules={[
          { type: 'email', message: '请输入有效的邮箱地址' }
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="用于通知您申请结果（选填）" />
      </Form.Item>
      
      {/* 申请留言 */}
      <Form.Item
        name="message"
        label="申请留言"
      >
        <TextArea
          placeholder="有什么想对我们说的？"
          rows={3}
          maxLength={200}
        />
      </Form.Item>
      
      {/* 提交按钮 */}
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          loading={loading}
          block
        >
          提交申请
        </Button>
      </Form.Item>
    </Form>
  );
} 