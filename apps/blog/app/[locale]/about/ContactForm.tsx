"use client";

import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, MailOutlined, SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function ContactForm() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  
  // Handle contact form submission
  const handleContactSubmit = (values: any) => {
    setSubmitting(true);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      message.success('Your message has been sent. We\'ll get back to you soon!');
      form.resetFields();
      setSubmitting(false);
    }, 1500);
  };

  return (
    <Form 
      form={form} 
      layout="vertical" 
      onFinish={handleContactSubmit}
    >
      <Form.Item 
        label="Name" 
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Your name" prefix={<UserOutlined />} />
      </Form.Item>
      
      <Form.Item 
        label="Email" 
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]}
      >
        <Input placeholder="Your email" prefix={<MailOutlined />} />
      </Form.Item>
      
      <Form.Item 
        label="Subject" 
        name="subject"
        rules={[{ required: true, message: 'Please enter a subject' }]}
      >
        <Input placeholder="What is this regarding?" />
      </Form.Item>
      
      <Form.Item 
        label="Message" 
        name="message"
        rules={[{ required: true, message: 'Please enter your message' }]}
      >
        <TextArea 
          rows={6} 
          placeholder="Write your message here..." 
        />
      </Form.Item>
      
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          icon={<SendOutlined />}
          loading={submitting}
          size="large"
          block
        >
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
} 