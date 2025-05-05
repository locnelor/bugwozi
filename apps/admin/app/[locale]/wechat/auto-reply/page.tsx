"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Switch,
  Button,
  Form,
  Space,
  Select,
  message,
  Divider,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const WechatAutoReplyPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Mock fetch config
  const fetchConfig = async () => {
    setLoading(true);
    try {
      // Replace with real API
      const res = await fetch("/api/getWechatConfig");
      const data = await res.json();
      form.setFieldsValue(data);
    } catch (err) {
      message.error("加载配置失败");
    } finally {
      setLoading(false);
    }
  };

  const onFinish = async (values: any) => {
    try {
      // Replace with real API
      await fetch("/api/setWechatConfig", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      message.success("保存成功");
    } catch (err) {
      message.error("保存失败");
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card title="微信公众号自动回复配置" loading={loading}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {/* 自动回复设置 */}
          <Form.Item label="启用自动回复" name={["autoReply", "enabled"]} valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item
            label="默认回复内容"
            name={["autoReply", "defaultReply"]}
          >
            <TextArea rows={3} placeholder="请输入默认回复内容" />
          </Form.Item>

          <Divider>关键词回复规则</Divider>

          <Form.List name={["autoReply", "rules"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="start" className="flex w-full mb-4">
                    <Form.Item
                      {...restField}
                      name={[name, "keywords"]}
                      className="flex-1"
                      rules={[{ required: true, message: "请输入关键词" }]}
                    >
                      <Select
                        mode="tags"
                        style={{ width: "100%", minWidth: 200 }}
                        placeholder="多个关键词用回车分隔"
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "matchMode"]}
                      rules={[{ required: true }]}
                    >
                      <Select style={{ width: 120 }}>
                        <Option value="exact">完全匹配</Option>
                        <Option value="contains">包含匹配</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "content"]}
                      className="flex-1"
                      rules={[{ required: true, message: "请输入回复内容" }]}
                    >
                      <Input.TextArea placeholder="请输入回复内容" />
                    </Form.Item>
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      className="mt-2"
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    添加关键词回复
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Divider>关注后回复</Divider>

          <Form.Item
            label="启用关注后回复"
            name={["subscribeReply", "enabled"]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="关注后回复内容"
            name={["subscribeReply", "content"]}
          >
            <TextArea rows={3} placeholder="请输入关注后回复内容" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存配置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default WechatAutoReplyPage;